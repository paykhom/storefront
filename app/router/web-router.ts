// FILE: web-router.ts

import { serveStatic } from "hono/bun";
import { Router } from "paykhom-fw/container/router";

import { WebRouterPlatform } from "./web-router-platform";
import { WebRouterRoot } from "./web-router-root";
import { WebRouterShopping } from "./web-router-shopping";
import { WebRouterUser } from "./web-router-user";
import { WebRouterSaas } from "./web-router-saas";
import { WebRouterAdmin } from "./web-router-admin";
import { WebRouterBundle } from "./web-router-bundler";
import { WebEngine } from "paykhom-fw/container/engine/web-engine";
import { PostgresqlClientService } from "paykhom-fw/container/service/postgresql-client-service";

export class WebRouter extends Router {
  private app!: WebEngine;
  // private platformController!: PlatformController;
  // private bundleController!: BundleController;
  // private adminController!: AdminController;
  // private userController!: UserController;
  // private saasController!: SaasController;
  // private rootController!: RootController;
  // private shoppingController!: ShoppingController;
  
  // private session!: SessionService<UserSession>;

  private platformRouter!: WebRouterPlatform;
  private userRouter!: WebRouterUser;
  private saasRouter!: WebRouterSaas;
  private adminRouter!: WebRouterAdmin;
  private bundleRouter!: WebRouterBundle;
  private rootRouter!: WebRouterRoot;
  private shoppingRouter!: WebRouterShopping;

  private pgc!: PostgresqlClientService;

  constructor(
    config: Record<string, any>
  ) {
    super(config);
    this.platformRouter = new WebRouterPlatform({});
    this.userRouter = new WebRouterUser({});
    this.saasRouter = new WebRouterSaas({});
    this.adminRouter = new WebRouterAdmin({});
    this.bundleRouter = new WebRouterBundle({});
    this.rootRouter = new WebRouterRoot({});
    this.shoppingRouter = new WebRouterShopping({});


  }

  async uponReady(): Promise<void> {
    // this.platformController = this.resolve("platformController") as PlatformController;
    // this.bundleController = this.resolve("bundleController") as BundleController;
    // this.adminController = this.resolve("adminController") as AdminController;
    // this.userController = this.resolve("userController") as UserController;
    // this.saasController = this.resolve("saasController") as SaasController;
    // this.rootController = this.resolve("rootController") as RootController;
    // this.shoppingController = this.resolve("shoppingController") as ShoppingController;
    
    // this.session = this.resolve("sessionService") as SessionService<UserSession>;
    // this.pgc = this.resolve("pgc") as PostgresqlClientService;


    // Initialize sub-routers
  }

  
  public setupRoutes() {
    this.app = this.resolve("app") as WebEngine;

    // Setup routes from all sub-routers
    this.platformRouter.setupRoutes();
    this.userRouter.setupRoutes();
    this.saasRouter.setupRoutes();
    this.adminRouter.setupRoutes();
    this.bundleRouter.setupRoutes();
    this.rootRouter.setupRoutes();
    this.shoppingRouter.setupRoutes();

    // Catch-all for static files
    this.app.use(
      "*",
      serveStatic({
        root: "./public",
        onNotFound: (path, c) => {
          console.log(`Static File not Found: ${path}}`)
        },
      })
    );
  }
}