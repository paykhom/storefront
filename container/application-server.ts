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

import { HelloWorldPlugin } from 'paykhom-fw/core/ext/plugin/hello-world';

import { appConfig } from './config';

export class ApplicationServer extends WebServer {
 
    constructor(config: Record<string, any>) {
        super(config);
        //this.container = new Container({}, {});
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
        this.register<PlatformController>("platformController", (config) => new PlatformController(config), {});
        this.register<BundleController>("bundleController", (config) => new BundleController(config), {});
        this.register<AdminController>("adminController", (config) => new AdminController(config), {});
        this.register<UserController>("userController", (config) => new UserController(config), {});
        this.register<SaasController>("saasController", (config) => new SaasController(config), {});
        this.register<RootController>("rootController", (config) => new RootController(config), {});
        this.register<ShoppingController>("shoppingController", (config) => new ShoppingController(config), {});

        this.register<AaaMiddleware>(
            "aaaMiddleware",
            (config) => new AaaMiddleware(config),
            {}
        );

        // Register router
        this.register<WebRouter>(
            "webRouter",
            (config) => new WebRouter(config),
            {},
            ["app", "pgc", "platformController", "bundleController", "adminController", "userController", "saasController", "rootController", "shoppingController", "sessionService"]
        );


        // Apply middlewares
        const aaaMiddleware: AaaMiddleware = this.resolve("aaaMiddleware");
        this.webEngine.use('*', aaaMiddleware.handle.bind(aaaMiddleware));

        // Setup routes
        (this.resolve("webRouter") as WebRouter).setupRoutes();
        //webRouter.setupRoutes();


    }

    async uponReady(): Promise<void> {
        await super.uponReady({}, {});
    }

    async uponStart(): Promise<void> {
        await super.uponStart({}, {});
    }



    async shutdown(): Promise<void> {
        super.shutdown();

    }
}