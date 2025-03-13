// FILE: web-router-bundle.ts

import { Hono } from "hono";
import { BundleController } from "../controller/bundle-controller";
import { TClass } from "paykhom-fw/tclass";
import { ApplicationServer } from "../../container/application-server";

export class WebRouterBundle extends TClass {
  private app: ApplicationServer;
  private bundleController: BundleController;

  constructor(config: Record<string, any>, deps: Record<string, any> = {}) {
    super(config);
    this.app = deps.app as ApplicationServer;
    this.bundleController = deps.bundleController as BundleController;
  }

  public setupRoutes() {
    this.app.get("/bundle/:version", async (c) => await this.bundleController.handleBundleRequest(c));
  }
}