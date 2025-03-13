// FILE: web-router-bundle.ts

import { Hono } from "hono";
import { BundleController } from "../controller/bundle-controller";
import { TClass } from "paykhom-fw/tclass";
import { WebEngine } from "paykhom-fw/container/engine/web-engine";

export class WebRouterBundle extends TClass {
  private app!: WebEngine;
  private bundleController!: BundleController;

  constructor(config: Record<string, any> = {}) {
    super(config);
    this.app = deps.app as WebEngine;
    this.bundleController = deps.bundleController as BundleController;
  }

  async uponReady(): Promise<void> {
    this.pg = this.resolve("pgc");
    this.ss = this.resolve("sessionService");
  }

  public setupRoutes() {
    this.app.get("/bundle/:version", async (c) => await this.bundleController.handleBundleRequest(c));
  }
}