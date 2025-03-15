import { WebRouter } from "app/router/web-router";
import { Application } from "paykhom-fw/container/application";
import { AaaMiddleware } from "container/middleware/aaa-middleware";
import config from './config';

import "global"; // Loads `html` globally
//import { Application } from "paykhom-fw/container/application";

import { ApplicationServer } from "paykhom-fw/container/server/application-server";



class Paykhom extends Application {

    constructor() {
        super({});

    }


    async uponInit(config: Record<string, any>): Promise<void> {
        //await super.uponInit(config);

        //ContainerProvider.setContainer(this.container);


        // Register services


        // Register router
        this.register<WebRouter>(
            "webRouter",
            (config) => new WebRouter(config),
            {}
        );




    }

    async uponReady(config: Record<string, any>): Promise<void> {
        await super.uponReady({});

        // Apply middlewares
        const aaaMiddleware: AaaMiddleware = this.resolve("aaaMiddleware");
        this.webEngine.use('*', aaaMiddleware.handle.bind(aaaMiddleware));

        // Setup routes
        (this.resolve("webRouter") as WebRouter).setupRoutes();
        //webRouter.setupRoutes();

    }

    async uponStart(config: Record<string, any>): Promise<void> {
        await super.uponStart({});
    }



    async shutdown(): Promise<void> {
        //super.shutdown();

    }
}

/*async*/ ApplicationServer.main(new Paykhom(), config);
