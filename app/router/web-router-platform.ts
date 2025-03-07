// FILE: web-router-platform.ts

import { Hono } from "hono";
import { PlatformController } from "../controller/platform-controller";
import { Glass } from "paykhom-fw/glass";
import { ApplicationServer } from "../../server";

export class WebRouterPlatform extends Glass {
  private app: ApplicationServer;
  private platformController: PlatformController;

  constructor(config: Record<string, any>, deps: Record<string, any> = {}) {
    super(config);
    this.app = deps.app as ApplicationServer;
    this.platformController = deps.platformController as PlatformController;
  }

  public setupRoutes() {
    // Startup routes
    this.app.get("/startup", async (c) => await this.platformController.onGetStartupIndex(c));
    this.app.get("/startup/website", async (c) => await this.platformController.onGetStartupWebsite(c));
    this.app.get("/startup/website/theme", async (c) => await this.platformController.onGetStartupWebsiteTheme(c));
    this.app.get("/startup/website/apps", async (c) => await this.platformController.onGetStartupWebsiteApps(c));
    this.app.get("/startup/website/domains", async (c) => await this.platformController.onGetStartupWebsiteDomains(c));
    this.app.get("/startup/website/tools", async (c) => await this.platformController.onGetStartupWebsiteTools(c));

    // Sell routes
    this.app.get("/sell", async (c) => await this.platformController.onGetSell(c));
    this.app.get("/sell/checkout", async (c) => await this.platformController.onGetSellCheckout(c));
    this.app.get("/sell/online", async (c) => await this.platformController.onGetSellOnline(c));
    this.app.get("/sell/channels", async (c) => await this.platformController.onGetSellChannel(c));
    this.app.get("/sell/pos", async (c) => await this.platformController.onGetSellPos(c));
    this.app.get("/sell/international", async (c) => await this.platformController.onGetSellInternational(c));
    this.app.get("/sell/b2b-ecommerce", async (c) => await this.platformController.onGetSellB2B(c));
    this.app.get("/sell/payments", async (c) => await this.platformController.onGetSellPayment(c));

    // Market routes
    this.app.get("/market", async (c) => await this.platformController.onGetMarket(c));
    this.app.get("/market/facebook-instagram", async (c) => await this.platformController.onGetMarketFacebookInstagram(c));
    this.app.get("/market/inbox", async (c) => await this.platformController.onGetMarketInbox(c));
    this.app.get("/market/email-marketing", async (c) => await this.platformController.onGetMarketEmailMarketing(c));

    // Info routes
    this.app.get("/info/segmentation", async (c) => await this.platformController.onGetSegmentation(c));
    this.app.get("/info/manage", async (c) => await this.platformController.onGetManage(c));
    this.app.get("/info/finance", async (c) => await this.platformController.onGetFinance(c));
    this.app.get("/info/analytics", async (c) => await this.platformController.onGetAnalytics(c));
    this.app.get("/info/shipping", async (c) => await this.platformController.onGetShipping(c));
    this.app.get("/info/orders", async (c) => await this.platformController.onGetOrders(c));
    this.app.get("/info/fulfillment", async (c) => await this.platformController.onGetFulfillment(c));
    this.app.get("/info/flow", async (c) => await this.platformController.onGetFlow(c));
    this.app.get("/info/help", async (c) => await this.platformController.onGetHelp(c));
    this.app.get("/info/popular-topics", async (c) => await this.platformController.onGetPopularTopics(c));
    this.app.get("/info/essential-tools", async (c) => await this.platformController.onGetEssentialTools(c));
    this.app.get("/info/pricing", async (c) => await this.platformController.onGetPricing(c));
    this.app.get("/info/enterprise", async (c) => await this.platformController.onGetEnterprise(c));    
 }
}