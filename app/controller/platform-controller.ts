// FILE: platform-controller.ts

import { BaseController as Controller } from "./base-controller";
import { Context } from "hono";
import { PostgresqlClientService } from 'paykhom-fw/service/postgresql-client-service';
import { SessionService, UserSession } from 'paykhom-fw/service/session-service';

export class PlatformController extends Controller {
  private pg: PostgresqlClientService;
  private ss: SessionService<UserSession>;

  constructor(args: Record<string, any>={}, deps: Record<string, any>={}) {
    super(args);
    this.pg = deps.pgc as PostgresqlClientService;
    this.ss = deps.sessionService as SessionService<UserSession>;
  }

  async onGetIndex(c: Context): Promise<Response> {
    return this.render(c, "index", { meta: { title: "Paykhom Platform" } });
  }


  async onGetUserData(c: Context): Promise<Response> {
    const us:UserSession = (await this.ss.getSession(c)) || {};
    return c.json({ user: us.user });
  }

  async loadUserRolesAndPermissions(c: Context): Promise<void> {
    const us:UserSession = (await this.ss.getSession(c)) || {};
    //const user = await this.ss.get(c, "user");
    if (!us.user) return;

    const roles = await this.pg.fx("saas.get_user_roles", { user_id: us.user.id }); // FIX_ME: THIS LINE MIGHT NEED FIX

    await this.ss.updateSession(c, {
      isGuest: false,
      isAuthenticated: true,
      user: { id: us.user.id, name: us.user.name, email: us.user.email }
    })
  }

  async onGetStartupIndex(c: Context): Promise<Response> {
    return this.render(c, "platform/index", {});
  }

  async onGetStartupWebsite(c: Context): Promise<Response> {
    return this.render(c, "platform/website", {});
  }

  async onGetStartupWebsiteTheme(c: Context): Promise<Response> {
    return this.render(c, "platform/theme", {});
  }

  async onGetStartupWebsiteApps(c: Context): Promise<Response> {
    return this.render(c, "platform/apps", {});
  }

  async onGetStartupWebsiteDomains(c: Context): Promise<Response> {
    return this.render(c, "platform/domains", {});
  }

  async onGetStartupWebsiteTools(c: Context): Promise<Response> {
    return this.render(c, "platform/tools", {});
  }

  async onGetSell(c: Context): Promise<Response> {
    return this.render(c, "platform/sell", {});
  }

  async onGetSellCheckout(c: Context): Promise<Response> {
    return this.render(c, "platform/checkout", {});
  }

  async onGetSellOnline(c: Context): Promise<Response> {
    return this.render(c, "platform/online", {});
  }

  async onGetSellChannel(c: Context): Promise<Response> {
    return this.render(c, "platform/channels", {});
  }

  async onGetSellPos(c: Context): Promise<Response> {
    return this.render(c, "platform/pos", {});
  }

  async onGetSellInternational(c: Context): Promise<Response> {
    return this.render(c, "platform/international", {});
  }

  async onGetSellB2B(c: Context): Promise<Response> {
    return this.render(c, "platform/b2b", {});
  }

  async onGetSellPayment(c: Context): Promise<Response> {
    return this.render(c, "platform/payments", {});
  }

  async onGetMarket(c: Context): Promise<Response> {
    return this.render(c, "platform/marketing", {});
  }

  async onGetMarketFacebookInstagram(c: Context): Promise<Response> {
    return this.render(c, "platform/facebookInstagram", {});
  }

  async onGetMarketInbox(c: Context): Promise<Response> {
    return this.render(c, "platform/inbox", {});
  }

  async onGetMarketEmailMarketing(c: Context): Promise<Response> {
    return this.render(c, "platform/emailMarketing", {});
  }

  async onGetSegmentation(c: Context): Promise<Response> {
    return this.render(c, "platform/segmentation", {});
  }

  async onGetManage(c: Context): Promise<Response> {
    return this.render(c, "platform/manage", {});
  }

  async onGetFinance(c: Context): Promise<Response> {
    return this.render(c, "platform/finance", {});
  }

  async onGetAnalytics(c: Context): Promise<Response> {
    return this.render(c, "platform/analytics", {});
  }

  async onGetShipping(c: Context): Promise<Response> {
    return this.render(c, "platform/shipping", {});
  }

  async onGetOrders(c: Context): Promise<Response> {
    return this.render(c, "platform/orders", {});
  }

  async onGetFulfillment(c: Context): Promise<Response> {
    return this.render(c, "platform/fulfillment", {});
  }

  async onGetFlow(c: Context): Promise<Response> {
    return this.render(c, "platform/flow", {});
  }

  async onGetHelp(c: Context): Promise<Response> {
    return this.render(c, "platform/help", {});
  }

  async onGetPopularTopics(c: Context): Promise<Response> {
    return this.render(c, "platform/popularTopics", {});
  }

  async onGetEssentialTools(c: Context): Promise<Response> {
    return this.render(c, "platform/essentialTools", {});
  }

  async onGetPricing(c: Context): Promise<Response> {
    return this.render(c, "platform/pricing", {});
  }

  async onGetEnterprise(c: Context): Promise<Response> {
    return this.render(c, "platform/enterprise", {});
  }
}