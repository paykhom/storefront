import { Hono } from "hono";
import { Logger } from "../../core/infrastructure/logging/logger";
import { Order } from "../models/order"; // Updated import path
import { OrderController } from "../controllers/orderController";
//import { HttpServer } from "../../core/framework/httpServer"
import { PostgresqlController } from "../controllers/postgresqlController";

const pgsqlController = new PostgresqlController();
//const httpServer = new HttpServer();

export class ApiRouter {
       private engine: Hono;

       constructor(engine: Hono) {
           this.engine = engine;

        //    this.setupRoutes();

       }

      public setupRoutes() {
        //console.log("setting up routes");
        this.engine.post('/db/paykhom/call/:fn', async (c) => {
          return await pgsqlController.fn(c);
        });
        this.engine.post('/db/paykhom/callzc/:fn', async (c) => {
          return await pgsqlController.fnzc(c);
        });


      }

    //    getRouter(): Hono {
    //        return this.router;
    //    }


   }