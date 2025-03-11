import { Hono } from "hono";
import { serveStatic } from "hono/bun";


//import { HttpServer } from "../../core/framework/httpServer"
import { StorefrontController } from "../controllers/storefrontController";

const pfc = new StorefrontController({});
//const httpServer = new HttpServer();

export class WebRouter {
  private engine: Hono;

  constructor(engine: Hono) {
    this.engine = engine;

    //    this.setupRoutes();
  }

  public setupRoutes() {
    this.engine.get("/", async (c) => {
      return await pfc.onGetIndex(c);
    });

















    this.engine.get("/startup", async (c) => {
      return await pfc.onGetStartupIndex(c);
    });
    this.engine.get("/startup/website", async (c) => {
      return await pfc.onGetStartupWebsite(c);
    });
    this.engine.get("/startup/website/theme", async (c) => {
      return await pfc.onGetStartupWebsiteTheme(c);
    });
    this.engine.get("/startup/website/apps", async (c) => {
      return await pfc.onGetStartupWebsiteTheme(c);
    });
    this.engine.get("/startup/website/domains", async (c) => {
      return await pfc.onGetStartupWebsiteDomains(c);
    });
    this.engine.get("/startup/website/tools", async (c) => {
      return await pfc.onGetStartupWebsiteTools(c);
    });

    this.engine.get("/sell", async (c) => {
      return await pfc.onGetSell(c);
    });
    this.engine.get("/sell/checkout", async (c) => {
      return await pfc.onGetSellCheckout(c);
    });
    this.engine.get("/sell/online", async (c) => {
      return await pfc.onGetSellOnline(c);
    });
    this.engine.get("/sell/channels", async (c) => {
      return await pfc.onGetSellChannel(c);
    });
    this.engine.get("/sell/pos", async (c) => {
      return await pfc.onGetSellPos(c);
    });
    this.engine.get("/sell/international", async (c) => {
      return await pfc.onGetSellInternational(c);
    });
    this.engine.get("/sell/b2b-ecommerce", async (c) => {
      return await pfc.onGetSellB2B(c);
    });
    this.engine.get("/sell/payments", async (c) => {
      return await pfc.onGetSellPayment(c);
    });

    this.engine.get("/market", async (c) => {
      return await pfc.onGetMarket(c);
    });
    this.engine.get("/market/facebook-instagram", async (c) => {
      return await pfc.onGetMarketFacebookInstagram(c);
    });
    this.engine.get("/market/inbox", async (c) => {
      return await pfc.onGetMarketInbox(c);
    });
    this.engine.get("/market/email-marketing", async (c) => {
      return await pfc.onGetMarketEmailMarketing(c);
    });

    this.engine.get("/segmentation", async (c) => {
      return await pfc.onGetSegmentation(c);
    });
    this.engine.get("/manage", async (c) => {
      return await pfc.onGetManage(c);
    });
    this.engine.get("/finance", async (c) => {
      return await pfc.onGetFinance(c);
    });
    this.engine.get("/analytics", async (c) => {
      return await pfc.onGetAnalytics(c);
    });
    this.engine.get("/shipping", async (c) => {
      return await pfc.onGetShipping(c);
    });
    this.engine.get("/orders", async (c) => {
      return await pfc.onGetOrders(c);
    });
    this.engine.get("/fulfillment", async (c) => {
      return await pfc.onGetFulfillment(c);
    });
    this.engine.get("/flow", async (c) => {
      return await pfc.onGetFlow(c);
    });
    this.engine.get("/help", async (c) => {
      return await pfc.onGetHelp(c);
    });
    this.engine.get("/popular-topics", async (c) => {
      return await pfc.onGetPopularTopics(c);
    });
    this.engine.get("/essential-tools", async (c) => {
      return await pfc.onGetEssentialTools(c);
    });

    this.engine.get("/pricing", async (c) => {
      return await pfc.onGetPricing(c);
    });

    this.engine.get("/enterprise", async (c) => {
      return await pfc.onGetEnterprise(c);
    });

    // Catch-all for static files (runs only if no route matches)
    this.engine.use(
      "*",
      serveStatic({
        root: "./public",
        onNotFound: (path, c) => {
          // Optional: Log or handle 404s for static files
          console.log(`Static file not found: ${path}`);
        },
      })
    );
  }
}
