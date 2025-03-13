// FILE: web-router.ts

import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import { PlatformController } from "../controller/platform-controller";
import { BundleController } from "../controller/bundle-controller";
import { UserController } from "../controller/user-controller";
import { AdminController } from "../controller/admin-controller";
import { SaasController } from "../controller/saas-controller";
import { RootController } from "../controller/root-controller";
import { ShoppingController } from "../controller/shopping-controller";

import { UserSession, SessionService } from "paykhom-fw/container/service/session-service";
import { TClass } from "paykhom-fw/tclass";

import { WebRouterPlatform } from "./web-router-platform";
import { WebRouterRoot } from "./web-router-root";
import { WebRouterShopping } from "./web-router-shopping";
import { WebRouterUser } from "./web-router-user";
import { WebRouterSaas } from "./web-router-saas";
import { WebRouterAdmin } from "./web-router-admin";
import { WebRouterBundle } from "./web-router-bundler";
import { WebEngine } from "paykhom-fw/container/engine/web-engine";
import { PostgresqlClientService } from "paykhom-fw/container/service/postgresql-client-service";

export class WebRouter extends TClass {
  private app!: WebEngine;
  private platformController!: PlatformController;
  private bundleController!: BundleController;
  private adminController!: AdminController;
  private userController!: UserController;
  private saasController!: SaasController;
  private rootController!: RootController;
  private shoppingController!: ShoppingController;
  
  private session!: SessionService<UserSession>;

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

  }

  async uponReady(): Promise<void> {
    this.app = this.resolve("app") as WebEngine;
    this.platformController = this.resolve("platformController") as PlatformController;
    this.bundleController = this.resolve("bundleController") as BundleController;
    this.adminController = this.resolve("adminController") as AdminController;
    this.userController = this.resolve("userController") as UserController;
    this.saasController = this.resolve("saasController") as SaasController;
    this.rootController = this.resolve("rootController") as RootController;
    this.shoppingController = this.resolve("shoppingController") as ShoppingController;
    
    this.session = this.resolve("sessionService") as SessionService<UserSession>;
    this.pgc = this.resolve("pgc") as PostgresqlClientService;


    // Initialize sub-routers
    this.platformRouter = new WebRouterPlatform({});
    this.userRouter = new WebRouterUser({});
    this.saasRouter = new WebRouterSaas({});
    this.adminRouter = new WebRouterAdmin({});
    this.bundleRouter = new WebRouterBundle({});
    this.rootRouter = new WebRouterRoot({});
    this.shoppingRouter = new WebRouterShopping({});

  }

  
  public setupRoutes() {
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