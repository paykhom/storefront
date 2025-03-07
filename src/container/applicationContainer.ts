//import { registerDependencies, Dependencies } from "./dependencies";
import { ApplicationServer } from "../core/server/applicationServer";

// DEPS...
import { Logger } from "../core/infrastructure/logging/logger";
import { OrderProcessor } from "../app/services/orderProcessor";
import { OrderController } from "../app/controllers/orderController";
import { OrderView } from "../app/views/orderView";

import { ApiRouter } from "../app/routers/apiRouter";
import { WebRouter } from "../app/routers/webRouter";

import { RabbitMQService } from "../core/infrastructure/messaging/rabbitmqService";
import { Config } from "./config";
//REN: import { RabbitMQProvider } from "./providers/rabbitmqProvider";
//import { HttpServer } from "../core/framework/httpServer";
import { Auth } from "../core/saas/auth";
//import { Container } from "../core/platform/container";
import { OrderService } from "../app/services/orderService";
import { OrderRepository } from "../app/interfaces/orderRepository";
import { Hono } from "hono";
// /DEPS...

export class ApplicationContainer {
     // //private dependencies!: Container;
     private appServer!: ApplicationServer;
     // private logger!: Logger;
     // private apiRouter!: ApiRouter;

     constructor() {
          //
     }

     async boot(): Promise<void> {
          const engine = new Hono();
          
          const apiRouter = new ApiRouter(engine);
          const webRouter = new WebRouter(engine);
          
          this.appServer = new ApplicationServer(engine, webRouter, apiRouter);

          //this.dependencies = await this.registerDependencies();

          //this.appServer = this.dependencies.resolve("appServer")
          // Before starting the app, any initialization can be done here
          //this.logger = this.dependencies.resolve("logger"); // .log('Application booting...')
          //this.logger.log('Application booting...');
          await this.appServer.start();
          console.log("Application started...")
          //this.logger.log('Application started...');

     }
     async shutdown(): Promise<void> {
          // Before closing the app, any cleanup can be done here
          //this.logger.log('Application shutdown...')

          await this.appServer.stop()
          console.log("Application shutdown...")
     }

     async xregisterDependencies(): Promise<void> {
          const config = new Config();
          const logger = new Logger();
          //const container = new Container()


          // let rabbitMQService: RabbitMQService | null = null;
          // try {
          //     const rabbitMQProvider = new RabbitMQProvider(logger, config);
          //     rabbitMQService = rabbitMQProvider.getService();
          //     await rabbitMQService.connect();

          // } 
          // catch (error) {
          //     logger.error('Could not connect to RabbitMQ, the service will not be available.', error);
          //     rabbitMQService = null;
          // }

          const engine = new Hono();

          const apiRouter = new ApiRouter(engine);
          const webRouter = new WebRouter(engine);
          const appServer = new ApplicationServer(engine, webRouter, apiRouter);

     }

}
