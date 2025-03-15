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
    this.app = this.resolve("app") as WebEngine;

    // Setup routes from all sub-routers
    await this.platformRouter.uponReady();
    await this.userRouter.uponReady();
    await this.saasRouter.uponReady();
    await this.adminRouter.uponReady();
    await this.bundleRouter.uponReady();
    await this.rootRouter.uponReady();
    await this.shoppingRouter.uponReady();

    // Catch-all for static files
    this.app.use(
      "*",
      serveStatic({
        root: "./public",
        onNotFound: (path, c) => {
          this.log(`Static File not Found: ${path}}`)
        },
      })
    );

  }

  

}