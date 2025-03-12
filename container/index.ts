import { compress } from 'hono/compress';
import { WebRouter } from "../app/router/web-router";
//import { ExecutionContext, Hono } from "hono";
import { WebServer } from "paykhom-fw/container/server/web-server";
import { SessionMiddleware } from "paykhom-fw/container/middleware/session-middleware";
import { AaaMiddleware } from "./middleware/aaa-middleware";
import { SessionService, UserSession } from 'paykhom-fw/container/service/session-service';
import { PostgresqlClientService } from 'paykhom-fw/container/service/postgresql-client-service';
import { Container, IContainer, Lifetime } from 'paykhom-fw/container';
import { ContainerProvider } from 'paykhom-fw/container/provider/container-provider';

import BundleController from '../app/controller/bundle-controller';
import { PlatformController } from "../app/controller/platform-controller";
import { AdminController } from "../app/controller/admin-controller";
import { UserController } from "../app/controller/user-controller";
import { SaasController } from "../app/controller/saas-controller";
import { RootController } from '../app/controller/root-controller';
import { ShoppingController } from '../app/controller/shopping-controller';


import { ExecutionContext } from 'hono';

export class ApplicationServer extends WebServer implements IContainer {
    public container: Container;

    constructor(config: {}, deps: {}) {
        super(config);
        this.container = new Container({}, {});
    }

    register<T>(
        key: string,
        factory: (config: Record<string, any>, deps: Record<string, any>) => T,
        config: Record<string, any>,
        dependencies: string[],
        lifetime: Lifetime = 'singleton'
    ): void {
        this.container.register<T>(key, factory, config, dependencies, lifetime);
    }

    resolve<T>(key: string): T {
        return this.container.resolve<T>(key);
    }

    async startup(): Promise<WebServer> {
        ContainerProvider.setContainer(this.container);

        process.on("SIGINT", async () => {
            await this.shutdown();
            process.exit(0);
        });

        this.register<ApplicationServer>(
            "app", 
            () => this, 
            {
            },
            [
            ]
        );

        // Register services
        this.register<SessionService<UserSession>>("sessionService", (config, deps) => new SessionService<UserSession>(config, deps), {
            redisUrl: 'redis://localhost:6379',
            sessionPrefix: '.paykhom.com:session:',
            defaultTTL: 3600 * 24 * 30 * 12, // 1h * 24 * 30 * 12
            cookieName: 'session_id',
            cookieOptions: {
                domain: ".paykhom.com",
                httpOnly: true,
                secure: false, //Bun.env.NODE_ENV === 'production',
                sameSite: 'Lax',
            },
        }, []);

        this.register<PostgresqlClientService>(
            "pgc", 
            (config, deps) => new PostgresqlClientService(config, deps), 
            {
                user: 'postgres',
                host: 'localhost',
                database: 'paykhom',
                password: 'adminxp123.com',
                port: 5432,

            }, 
            [
                "sessionService"
            ]
        );

        // Register controllers
        this.register<PlatformController>("platformController", (config, deps) => new PlatformController(config, deps), {}, ["pgc", "sessionService"]);
        this.register<BundleController>("bundleController", (config, deps) => new BundleController(config, deps), {}, ["pgc", "sessionService"]);
        this.register<AdminController>("adminController", (config, deps) => new AdminController(config, deps), {}, ["pgc", "sessionService"]);
        this.register<UserController>("userController", (config, deps) => new UserController(config, deps), {}, ["pgc", "sessionService"]);
        this.register<SaasController>("saasController", (config, deps) => new SaasController(config, deps), {}, ["pgc", "sessionService"]);
        this.register<RootController>("rootController", (config, deps) => new RootController(config, deps), {}, ["pgc", "sessionService"]);
        this.register<ShoppingController>("shoppingController", (config, deps) => new ShoppingController(config, deps), {}, ["pgc", "sessionService"]);

        // Register middlewares
        this.register<SessionMiddleware>(
            "sessionMiddleware",
            (config, deps) => new SessionMiddleware(config, deps),
            {},
            ["sessionService"]
        );
        this.register<AaaMiddleware>(
            "aaaMiddleware",
            (config, deps) => new AaaMiddleware(config, deps),
            {},
            ["sessionService"]
        );

        // Register router
        this.register<WebRouter>(
            "webRouter",
            (config, deps) => new WebRouter(config, deps),
            {},
            ["app", "pgc", "platformController", "bundleController", "adminController", "userController", "saasController", "rootController", "shoppingController", "sessionService"]
        );

        const sessionMiddleware = this.resolve("sessionMiddleware");
        const aaaMiddleware = this.resolve("aaaMiddleware");
        const webRouter: WebRouter = this.resolve("webRouter");









        this.onError((error, c) => {
            return c.text(`Internal server error ${error}`, 500);
        });

        // Apply middlewares
        this.use('*', sessionMiddleware.handle.bind(sessionMiddleware));
        this.use('*', aaaMiddleware.handle.bind(aaaMiddleware));

        // Setup routes
        webRouter.setupRoutes();

        const port = parseInt(process.argv[2]) || 3000;
        if (typeof Bun !== 'undefined') {
            Bun.serve({
                port: port,
                fetch: async (request: Request, Env?: unknown, executionCtx?: ExecutionContext) => {
                    return await this.fetch(request, Env, executionCtx);
                },
            });
            console.log(`Application Serving on ${port}`);
        }

        return this;
    }

    async shutdown(): Promise<void> {
        const sessionService = this.resolve<SessionService<UserSession>>("sessionService");
        await sessionService.shutdown();
    }
}