/*
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
*/

import { compress } from 'hono/compress';
import { WebRouter } from "app/router/web-router";
//import { ExecutionContext, Hono } from "hono";
import { WebServer } from "paykhom-fw/container/server/web-server";
import { SessionMiddleware } from "paykhom-fw/container/middleware/session-middleware";
import { AaaMiddleware } from "container/middleware/aaa-middleware";
import { SessionService, UserSession } from 'paykhom-fw/container/service/session-service';
import { PostgresqlClientService } from 'paykhom-fw/container/service/postgresql-client-service';
// import { Container, IContainer, Lifetime } from 'paykhom-fw/container';
// import { ContainerProvider } from 'paykhom-fw/container/provider/container-provider';

import BundleController from 'app/controller/bundle-controller';
import { PlatformController } from "app/controller/platform-controller";
import { AdminController } from "app/controller/admin-controller";
import { UserController } from "app/controller/user-controller";
import { SaasController } from "app/controller/saas-controller";
import { RootController } from 'app/controller/root-controller';
import { ShoppingController } from 'app/controller/shopping-controller';
import { ExecutionContext } from 'hono';
import { TClass } from 'paykhom-fw/tclass';


export class ApplicationServer extends TClass {
    //public container: Container;
    public webServer : WebServer;

    constructor(config: {}, deps: {}) {
        super(config);
        //this.container = new Container({}, {});
        this.webServer = new WebServer({});
    }

    async uponReady() {

    };

    async startup(): Promise<void> {
        //ContainerProvider.setContainer(this.container);

        process.on("SIGINT", async () => {
            await this.shutdown();
            process.exit(0);
        });

        this.register<WebServer>(
            "app", 
            () => this.webServer, 
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

        const sessionMiddleware: SessionMiddleware = this.resolve("sessionMiddleware");
        const aaaMiddleware: AaaMiddleware = this.resolve("aaaMiddleware");
        const webRouter: WebRouter = this.resolve("webRouter");









        this.webServer.onError((error, c) => {
            return c.text(`Internal server error ${error}`, 500);
        });

        // Apply middlewares
        this.webServer.use('*', sessionMiddleware.handle.bind(sessionMiddleware));
        this.webServer.use('*', aaaMiddleware.handle.bind(aaaMiddleware));

        // Setup routes
        webRouter.setupRoutes();

        const port = parseInt(process.argv[2]) || 3000;
        if (typeof Bun !== 'undefined') {
            Bun.serve({
                port: port,
                fetch: async (request: Request, Env?: unknown, executionCtx?: ExecutionContext) => await this.webServer.fetch(request, Env, executionCtx),
            });
            console.log(`Application Serving on ${port}`);
        }

    }

    async shutdown(): Promise<void> {
        const sessionService = this.resolve<SessionService<UserSession>>("sessionService");
        await sessionService.shutdown();
    }
}