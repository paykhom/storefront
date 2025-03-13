/*
import { compress } from 'hono/compress';
import { WebRouter } from "../app/router/web-router";
//import { ExecutionContext, Hono } from "hono";
import { WebEngine } from "paykhom-fw/container/server/web-server";
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
import { WebEngine } from "paykhom-fw/container/engine/web-engine";
import { AaaMiddleware } from "container/middleware/aaa-middleware";
import { SessionService, UserSession } from 'paykhom-fw/container/service/session-service';
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


export class ApplicationServer extends WebServer {
 
    constructor(config: {}, deps: {}) {
        super(config);
        //this.container = new Container({}, {});
    }

    async uponStart(): Promise<void> {
        await super.uponStart();
    }

    async uponReady(): Promise<void> {
        await super.uponReady();
    }


    async uponInit(): Promise<void> {
        await super.uponInit(
            {
                "sessionService": {
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
                },
                "pgc": {
                    user: 'postgres',
                    host: 'localhost',
                    database: 'paykhom',
                    password: 'adminxp123.com',
                    port: 5432,
    
                }   
            }, 
            {}
        );

        //ContainerProvider.setContainer(this.container);


        // Register services

        // Register controllers
        this.register<PlatformController>("platformController", (config, deps) => new PlatformController(config, deps), {}, ["pgc", "sessionService"]);
        this.register<BundleController>("bundleController", (config, deps) => new BundleController(config, deps), {}, ["pgc", "sessionService"]);
        this.register<AdminController>("adminController", (config, deps) => new AdminController(config, deps), {}, ["pgc", "sessionService"]);
        this.register<UserController>("userController", (config, deps) => new UserController(config, deps), {}, ["pgc", "sessionService"]);
        this.register<SaasController>("saasController", (config, deps) => new SaasController(config, deps), {}, ["pgc", "sessionService"]);
        this.register<RootController>("rootController", (config, deps) => new RootController(config, deps), {}, ["pgc", "sessionService"]);
        this.register<ShoppingController>("shoppingController", (config, deps) => new ShoppingController(config, deps), {}, ["pgc", "sessionService"]);

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

        const aaaMiddleware: AaaMiddleware = this.resolve("aaaMiddleware");
        const webRouter: WebRouter = this.resolve("webRouter");









        // Apply middlewares
        this.webEngine.use('*', aaaMiddleware.handle.bind(aaaMiddleware));

        // Setup routes
        webRouter.setupRoutes();


    }

    async uponStart(): Promise<void> {
        super.uponStart();
    }

    async shutdown(): Promise<void> {
        super.shutdown();

    }
}