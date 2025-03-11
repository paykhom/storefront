import { BaseController as Controller } from "./baseController";

import { Context } from "hono";

export class StorefrontController extends Controller {
  constructor(args: any) {
    super(args);
  }


  async onGetIndex(ctx: Context): Promise<Response> {
    return this.render(ctx, "index", {});
  }





  async onGetStartupIndex(ctx: Context): Promise<Response> {
    return this.render(ctx, "index", {});
  }

  async onGetStartupWebsite(ctx: Context): Promise<Response> {
    return this.render(ctx, "website", {});
  }
  // Implement other methods (onGetSell, onGetMarket, etc.) similarly
  async onGetStartupWebsiteTheme(ctx: Context): Promise<Response> {
    return this.render(ctx, "theme", {});
  }

  async onGetStartupWebsiteApps(ctx: Context): Promise<Response> {
    return this.render(ctx, "apps", {});
  }
  async onGetStartupWebsiteDomains(ctx: Context): Promise<Response> {
    return this.render(ctx, "Domains", {});
  }
  async onGetStartupWebsiteTools(ctx: Context): Promise<Response> {
    return this.render(ctx, "Tools", {});
  }

  async onGetSell(ctx: Context): Promise<Response> {
    return this.render(ctx, "Sell", {});
  }
  async onGetSellCheckout(ctx: Context): Promise<Response> {
    return this.render(ctx, "Checkout", {});
  }
  async onGetSellOnline(ctx: Context): Promise<Response> {
    return this.render(ctx, "Online", {});
  }
  async onGetSellChannel(ctx: Context): Promise<Response> {
    return this.render(ctx, "Channels", {});
  }
  async onGetSellPos(ctx: Context): Promise<Response> {
    return this.render(ctx, "Pos", {});
  }
  async onGetSellInternational(ctx: Context): Promise<Response> {
    return this.render(ctx, "International", {});
  }
  async onGetSellB2B(ctx: Context): Promise<Response> {
    return this.render(ctx, "B2B", {});
  }
  async onGetSellPayment(ctx: Context): Promise<Response> {
    return this.render(ctx, "Payments", {});
  }

  async onGetMarket(ctx: Context): Promise<Response> {
    return this.render(ctx, "Marketing", {});
  }
  async onGetMarketFacebookInstagram(ctx: Context): Promise<Response> {
    return this.render(ctx, "FacebookInstagram", {});
  }
  async onGetMarketInbox(ctx: Context): Promise<Response> {
    return this.render(ctx, "Inbox", {});
  }
  async onGetMarketEmailMarketing(ctx: Context): Promise<Response> {
    return this.render(ctx, "EmailMarketing", {});
  }

  async onGetSegmentation(ctx: Context): Promise<Response> {
    return this.render(ctx, "Segmentation", {});
  }
  async onGetManage(ctx: Context): Promise<Response> {
    return this.render(ctx, "Manage", {});
  }
  async onGetFinance(ctx: Context): Promise<Response> {
    return this.render(ctx, "finance", {});
  }
  async onGetAnalytics(ctx: Context): Promise<Response> {
    return this.render(ctx, "Analytics", {});
  }
  async onGetShipping(ctx: Context): Promise<Response> {
    return this.render(ctx, "Shipping", {});
  }
  async onGetOrders(ctx: Context): Promise<Response> {
    return this.render(ctx, "Orders", {});
  }
  async onGetFulfillment(ctx: Context): Promise<Response> {
    return this.render(ctx, "Fulfillment", {});
  }
  async onGetFlow(ctx: Context): Promise<Response> {
    return this.render(ctx, "Flow", {});
  }
  async onGetHelp(ctx: Context): Promise<Response> {
    return this.render(ctx, "Help", {});
  }
  async onGetPopularTopics(ctx: Context): Promise<Response> {
    return this.render(ctx, "PopularTopics", {});
  }
  async onGetEssentialTools(ctx: Context): Promise<Response> {
    return this.render(ctx, "EssentialTools", {});
  }

  async onGetPricing(ctx: Context): Promise<Response> {
    return this.render(ctx, "Pricing", {});
  }

  async onGetEnterprise(ctx: Context): Promise<Response> {
    return this.render(ctx, "Enterprise", {});
  }
}
