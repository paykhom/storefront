import { HttpServer } from "paykhom-fw/http-server";
//import { RabbitMQService } from "./infrastructure/messaging/rabbitmqService";
import { compress } from 'hono/compress'

import { WebRouter } from "../app/router/web-router";

//import { RabbitMQService } from "paykhom-fw/infrastructure/messaging/rabbitmq-service";
import { Config } from "./config/config";
//REN: import { RabbitMQProvider } from "./providers/rabbitmqProvider";
//import { HttpServer } from "paykhom-fw/httpServer";
import { SessionMiddleware } from "paykhom-fw/middleware/session-middleware";

import { SessionService, UserSession } from 'paykhom-fw/service/session-service';
import { PostgresqlClientService } from 'paykhom-fw/service/postgresql-client-service';
   
   
import BundleController from '../app/controller/bundle-controller';

   

export class CliContainer  extends Glass {
     public containers: Record<string, any>;
          
     constructor(config: Record<string, any>, deps: {}) {
          super(config)
          
          this.containers = {
               services: {

               },
               middlewares: {

               },

               controllers: {

               }
          };
     }

     async startup(): Promise<void> {
          this.containers.services['sessionService'] = new SessionService<UserSession>({
               redisUrl: 'redis://localhost:6379',
               sessionPrefix: '.paykhom.com:session:',
               defaultTTL: 3600 * 24 * 30 * 12, // 1h * 24 * 30 * 12
               cookieName: 'session_id',
               cookieOptions: {
                    domain: ".paykhom.com",
                 httpOnly: true,
                 /*if set to true, this cookie isn't sent back by browser in HTTP mode, may be its for only HTTPS */secure: false, //Bun.env.NODE_ENV === 'production', 
                 sameSite: 'Lax',
               },
          });

          this.containers.services['pgc'] = new PostgresqlClientService({});

          const app = new HttpServer(this.containers);
          globalThis.app = (): HttpServer => {
               return app;
          }
          
          const webRouter = new WebRouter();

          //const authController = new AuthController();
          const sessionMiddleware = new SessionMiddleware();

                      


          app.onError((error, c) => {
               //this.logger.error(`HttpServer Error: ${error}`, error);
               return c.text(`Internal server error ${error}`, 500);
           });

           app.use('*', (c, next) => sessionMiddleware.handle(c, next));

           webRouter.setupRoutes();

           const port = parseInt(process.argv[2]) || 3000; // Default to port 3000 if no argument is provided
   
           // Bun Specific
           if (typeof Bun !== 'undefined') {
               Bun.serve({
                   port: port,
                   fetch: app.fetch,
               });
           }

          //this.dependencies = await this.registerDependencies();

          //this.app = this.dependencies.resolve("app")
          // Before starting the app, any initialization can be done here
          //this.logger = this.dependencies.resolve("logger"); // .log('Application booting...')
          //this.logger.log('Application booting...');


          
     }

     async shutdown(): Promise<void> {
          await app().shutdown();
          
     }



}
// TypeScript declaration for global `html`
declare global {
     var app: () => HttpServer;
}
   
export {}