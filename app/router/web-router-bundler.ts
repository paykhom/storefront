// FILE: web-router-bundle.ts

import { Hono } from "hono";
import { BundleController } from "../controller/bundle-controller";
import { WebEngine } from "paykhom-fw/container/engine/web-engine";
import { Router } from "paykhom-fw/container/router";


export class WebRouterBundle extends Router {
  private app!: WebEngine;
  private bundleController!: BundleController;

  constructor(config: Record<string, any> = {}) {
    super(config);
    
    this.bundleController = new BundleController();
  }

  async uponReady(): Promise<void> {
    this.app = this.resolve("app") as WebEngine;

    await this.bundleController.uponReady();

    // this.pg = this.resolve("pgc");
    // this.ss = this.resolve("sessionService");

    this.app.get("/bundle/:version", async (c) => await this.bundleController.handleBundleRequest(c));
  }
}