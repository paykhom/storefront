import { serveStatic } from "hono/bun";

import { ExecutionContext, Hono } from "hono";
import { Component, IComponent } from "paykhom-fw/modules/component";
import { WebEngine } from 'paykhom-fw/modules/engine/web-engine';
import { SessionService, UserSession } from "paykhom-fw/modules/service/session-service";
import { SessionMiddleware } from "paykhom-fw/modules/middleware/session-middleware";
import { ApplicationModule } from "../app/application-fw";
import { WebApplication, IWebApplication } from "paykhom-fw/modules/application/web-application";
import { PluginManager } from "paykhom-fw/modules/plugin/plugin-manager";
import { Lifetime } from "paykhom-fw/modules/class";
import { Middleware } from "paykhom-fw/modules/middleware";
import { Controller } from "paykhom-fw/modules/controller";
//import { PostgresqlClientService } from '../service/postgresql-client-service';


export interface IApplicationServer {
    //uponReady(): Promise<void>;
    shutdown(): Promise<void>;
}

export class ApplicationServer extends Component {
    private app!: WebApplication;

    constructor(config: Record<string, any>) {
        super(config)

        this.engine = new WebEngine()
    }
    getImportMetaUrl(): string {
        return import.meta.url;
      }
    
    async boot(app: WebApplication, config: Record<string, any>): Promise<void> {
        const appMod = new ApplicationModule({});
        
        app.engine = this.engine;
        appMod.engine = this.engine;

        // INIT...
        await this.uponInit(config)

        await appMod.uponInit(config);
        await app.uponInit(config);


        let deps: Map<string, {
            config: Record<string, any>;
            lifetime: Lifetime;
            factory: (config: Record<string, any>, ...deps: any[]) => any;
        }> = this.getDependencies();

        for (const [key, dep] of deps) {
            //this.log(key)
            let instance = this.resolve(key);
            // Check if the instance is a Component descendant
            if (instance instanceof Component) {
                //this.log(`${typeof instance}.uponInit() called `)
                await instance.uponInit({});
            }
        }        

        // READY...
        await this.uponReady(config)
        await appMod.uponReady(config);
        await app.uponReady(config);

        for (const [key, dep] of deps) {
            let instance: Component = this.resolve(key);
            // Check if the instance is a Component descendant
            if (instance instanceof Component) {
                //this.log(`${typeof instance}.uponReady() called `)
                await instance.uponReady({});
            }
        }        

        for (const [key, dep] of deps) {
            let instance: Component = this.resolve(key);
            // Check if the instance is a Component descendant
            if (instance instanceof Controller) {
                //this.log(`${typeof instance}.uponReady() called `)
                //await instance.uponReady({});
                let routingTable = instance.getRoutes();
                instance.engine =  this.engine;
                instance.setupRoutes(routingTable);
            }
        }        

        // Catch-all for static files
        this.engine.use(
            "*",
            serveStatic({
            root: "./public",
            onNotFound: (path, c) => {
                this.log(`Static File not Found: ${path}}`)
            },
            })
        );
  
        // START...
        await this.uponStart(config)
        await appMod.uponStart(config);
        await app.uponStart(config);
        for (const [key, dep] of deps) {
            let instance: Component = this.resolve(key);
            // Check if the instance is a Component descendant
            if (instance instanceof Component) {
                //this.log(`${instance}.uponStart() called `)
                await instance.uponStart({});
            }
        }        

        
    }
    

    async uponInit(config: Record<string, any>): Promise<void> {
        process.on("SIGINT", async () => {
            await this.uponStop({});
            process.exit(0);
        });

        this.register<WebEngine>("engine", 
            () => this.engine, 
            {}
        );


    
        //console.log('Categories:', categories);
    
        await this.processContainerAsync(config.container);

        // activate theme
        // const activeTheme = config.settings.activeTheme;
        // const entity = config.container.theme[activeTheme];        

        // const module = await entity.module;
        // const ComponentClass = module[entity.class];
        // this.register(
        //     activeTheme,
        //     (config: any) => new ComponentClass(config),
        //     entity.config || {}
        // );
        // /activate theme

    }

    
    async uponReady(config: Record<string, any>): Promise<void>  {
        //OLD const sessionMiddleware: SessionMiddleware = this.resolve("sessionMiddleware");
        //OLD this.engine.use('*', sessionMiddleware.handle.bind(sessionMiddleware));


        //NEW
        let deps: Map<string, {
            config: Record<string, any>;
            lifetime: Lifetime;
            factory: (config: Record<string, any>, ...deps: any[]) => any;
        }> = this.getDependencies();

        for (const [key, dep] of deps) {
            let instance: Middleware = this.resolve(key);
            instance.engine = this.engine;
            // Check if the instance is a Component descendant
            if (instance instanceof Middleware) {
                //this.log(`${typeof instance}.uponReady() called `)
                this.engine.use('*', instance.handle.bind(instance));


            }
        }        


    }

    async uponStart(config: Record<string, any>): Promise<void>  {
        const port = parseInt(process.argv[2]) || 3000;
        if (typeof Bun !== 'undefined') {
            Bun.serve({
                port: port,
                fetch: async (request: Request, Env?: unknown, executionCtx?: ExecutionContext) => await this.engine.fetch(request, Env, executionCtx),
            });
            this.log(`WebApplication Serving on ${port}`);
        }
    }
    

    async uponStop(config: Record<string, any>): Promise<void>  {
     //NOT_WORKING this.app.uponStop({});

     const sessionService = this.resolve<SessionService<UserSession>>("sessionService");
     await sessionService.shutdown();


    }



    public static async main(app: WebApplication, config: any) {
        let appServer = new ApplicationServer(config);
        await appServer.boot(app, config);

        


    }


}