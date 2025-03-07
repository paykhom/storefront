import { Hono } from "hono";
import { Logger } from "../infrastructure/logging/logger";
//import { RabbitMQService } from "./infrastructure/messaging/rabbitmqService";
import { OrderController } from "../../app/controllers/orderController";
import { ApiRouter } from "../../app/routers/apiRouter";
import { WebRouter } from "../../app/routers/webRouter";
import { Order } from "../../app/models/order"; // Updated import path
import { compress } from 'hono/compress'


// import { HttpServer } from "../framework/httpServer"

export class ApplicationServer {
    private engine: Hono;
    //private rabbitMQService: RabbitMQService | null;
    private apiRouter: ApiRouter;
    private webRouter: WebRouter;

    constructor(engine: Hono, webRouter: WebRouter, apiRouter: ApiRouter) {
        // const httpServer = new HttpServer()
        this.engine = engine
        //this.rabbitMQService = rabbitMQService;
        this.apiRouter = apiRouter;
        this.webRouter = webRouter;
        
    }



    async start(): Promise<void> {
        //
        //this.engine.use(compress()); //OFFICIAL_DOC: Bun: This middleware uses CompressionStream which is not yet supported in bun.
        //

        this.webRouter.setupRoutes();
        this.apiRouter.setupRoutes();

        // if (this.rabbitMQService) {
        //     try {
        //          await this.rabbitMQService.connect();
        //         this.rabbitMQService.consume((message: Order) => {
        //             this.orderController.handleOrder(message);
        //         });

        //     } catch (error) {
        //         this.logger.error('Error starting RabbitMQ consumer', error);
        //     }
        // } 
        // else {
        //     this.logger.log('RabbitMQ service is not available, skipping connection and consumption.');
        // }

        this.engine.onError((error, c) => {
            //this.logger.error(`ApplicationServer Error: ${error}`, error);
            return c.text(`Internal server error ${error}`, 500);
        });

        // Deno.serve({
        //     port: parseInt(process.env.PORT || "3000", 10),
        //     handler: this.app.fetch
        // });
        // this.logger.log(`Server running on port: ${process.env.PORT || 3000}`);

        const port = parseInt(process.argv[2]) || 3000; // Default to port 3000 if no argument is provided

        // Bun Specific
        if (typeof Bun !== 'undefined') {
            Bun.serve({
                port: port,
                fetch: this.engine.fetch,
            });
        }
        
        // Deno Specific
        // if (typeof Deno !== 'undefined') {
        //     Deno.serve({
        //          port: parseInt(process.env.PORT || "3000", 10),
        //          handler: this.app.fetch,
        //     });
        // }        

    }

    async stop(): Promise<void> {
        // if(this.rabbitMQService) {
        //     await this.rabbitMQService.close()
        // }
    }
}