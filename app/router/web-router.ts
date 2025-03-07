// FILE: web-router.ts

import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import { PlatformController } from "../controller/platform-controller";
import { BundleController } from "../controller/bundle-controller";
import { UserController } from "../controller/user-controller";
import { AdminController } from "../controller/admin-controller";
import { SaasController } from "../controller/saas-controller";
import { RootController } from "../controller/root-controller";

import { UserSession, SessionService } from "paykhom-fw/service/session-service";
import { Glass } from "paykhom-fw/glass";

import { WebRouterRoot } from "./web-router-root";
import { WebRouterPlatform } from "./web-router-platform";
import { WebRouterUser } from "./web-router-user";
import { WebRouterSaas } from "./web-router-saas";
import { WebRouterAdmin } from "./web-router-admin";
import { WebRouterBundle } from "./web-router-bundler";
import { ApplicationServer } from "../../server";
import { PostgresqlClientService } from "paykhom-fw/service/postgresql-client-service";

export class WebRouter extends Glass {
  private app: ApplicationServer;
  private platformController: PlatformController;
  private bundleController: BundleController;
  private adminController: AdminController;
  private userController: UserController;
  private saasController: SaasController;
  private rootController: RootController;
  
  private session: SessionService<UserSession>;

  private platformRouter: WebRouterPlatform;
  private userRouter: WebRouterUser;
  private saasRouter: WebRouterSaas;
  private adminRouter: WebRouterAdmin;
  private bundleRouter: WebRouterBundle;
  private rootRouter: WebRouterRoot;

  private pgc: PostgresqlClientService;

  constructor(
    config: Record<string, any>,
    deps: Record<string, any> = {}
  ) {
    super(config);
    this.app = deps.app as ApplicationServer;
    this.platformController = deps.platformController as PlatformController;
    this.bundleController = deps.bundleController as BundleController;
    this.adminController = deps.adminController as AdminController;
    this.userController = deps.userController as UserController;
    this.saasController = deps.saasController as SaasController;
    this.rootController = deps.rootController as RootController;
    this.session = deps.sessionService as SessionService<UserSession>;
    this.pgc = deps.pgc as PostgresqlClientService;

    // Initialize sub-routers
    this.platformRouter = new WebRouterPlatform(config, { app: this.app, pgc: this.pgc, platformController: this.platformController });
    this.userRouter = new WebRouterUser(config, { app: this.app, pgc: this.pgc, userController: this.userController });
    this.saasRouter = new WebRouterSaas(config, { app: this.app, pgc: this.pgc, saasController: this.saasController });
    this.adminRouter = new WebRouterAdmin(config, { app: this.app, pgc: this.pgc, adminController: this.adminController });
    this.bundleRouter = new WebRouterBundle(config, { app: this.app, pgc: this.pgc, bundleController: this.bundleController });
    this.rootRouter = new WebRouterRoot(config, { app: this.app, pgc: this.pgc, rootController: this.rootController });
  }

  public setupRoutes() {
    // Setup routes from all sub-routers
    this.platformRouter.setupRoutes();
    this.userRouter.setupRoutes();
    this.saasRouter.setupRoutes();
    this.adminRouter.setupRoutes();
    this.bundleRouter.setupRoutes();
    this.rootRouter.setupRoutes();

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