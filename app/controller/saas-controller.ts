// FILE: saas-controller.ts

import { Context } from 'hono';
import { BaseController as Controller } from "./base-controller";
import { PostgresqlClientService } from 'paykhom-fw/container/service/postgresql-client-service';
import { SessionService, UserSession } from 'paykhom-fw/container/service/session-service';

export class SaasController extends Controller {
  private pg!: PostgresqlClientService;
  private ss!: SessionService<UserSession>;

  constructor(config: Record<string, any>={}) {
    super(config);
    // this.pg = this.resolve("pgc") as PostgresqlClientService;
    // this.ss = this.resolve("sessionService") as SessionService<UserSession>;
  }

  async uponReady(): Promise<void> {
    this.pg = this.resolve("pgc");
    this.ss = this.resolve("sessionService");
  }



  // Uncomment and update if needed in the future
  // async onGetIndex(c: Context): Promise<Response> {
  //   return await this.render(c, "saas/Index", { meta: { title: "Paykhom Platform" } });
  // }

  // PAGINATORS

  async onGetAttribPaginator(c: Context): Promise<Response> {
    return await this.render(c, "saas/attrib-paginator", { meta: { title: "Paykhom Platform" } });
  }

  async onGetAttribGroupPaginator(c: Context): Promise<Response> {
    return await this.render(c, "saas/attrib-group-paginator", { meta: { title: "Paykhom Platform" } });
  }

  async onGetBrandPaginator(c: Context): Promise<Response> {
    return await this.render(c, "saas/brand-paginator", { meta: { title: "Paykhom Platform" } });
  }

  async onGetCouponPaginator(c: Context): Promise<Response> {
    return await this.render(c, "saas/coupon-paginator", { meta: { title: "Paykhom Platform" } });
  }

  async onGetCurrencyPaginator(c: Context): Promise<Response> {
    return await this.render(c, "saas/currency-paginator", { meta: { title: "Paykhom Platform" } });
  }

  async onGetDepartmentPaginator(c: Context): Promise<Response> {
    return await this.render(c, "saas/department-paginator", { meta: { title: "Paykhom Platform" } });
  }

  async onGetProductPaginator(c: Context): Promise<Response> {
    return await this.render(c, "saas/product-paginator", { meta: { title: "Paykhom Platform" } });
  }

  async onGetProductVariantPaginator(c: Context): Promise<Response> {
    return await this.render(c, "saas/product-variant-paginator", { meta: { title: "Paykhom Platform" } });
  }

  async onGetPurchasePaginator(c: Context): Promise<Response> {
    return await this.render(c, "saas/purchase-paginator", { meta: { title: "Paykhom Platform" } });
  }

  async onGetShopPaginator(c: Context): Promise<Response> {
    return await this.render(c, "saas/shop-paginator", { meta: { title: "Paykhom Platform" } });
  }

  async onGetDropshipPaginator(c: Context): Promise<Response> {
    return await this.render(c, "saas/dropship-paginator", { meta: { title: "Paykhom Platform" } });
  }

  async onGetUomPaginator(c: Context): Promise<Response> {
    return await this.render(c, "saas/uom-paginator", { meta: { title: "Paykhom Platform" } });
  }

  async onGetCategoryPaginator(c: Context): Promise<Response> {
    return await this.render(c, "saas/category-paginator", { meta: { title: "Paykhom Platform" } });
  }

  async onGetAccountDeletionPaginator(c: Context): Promise<Response> {
    return await this.render(c, "saas/account-deletion-paginator", { meta: { title: "Paykhom Platform" } });
  }

  async onGetRolePaginator(c: Context): Promise<Response> {
    return await this.render(c, "saas/role-paginator", { meta: { title: "Paykhom Platform" } });
  }

  async onGetUserPaginator(c: Context): Promise<Response> {
    return await this.render(c, "saas/user-paginator", { meta: { title: "Paykhom Platform" } });
  }

  async onGetTicketPaginator(c: Context): Promise<Response> {
    return await this.render(c, "saas/ticket-paginator", { meta: { title: "Paykhom Platform" } });
  }

  async onGetCategoryRequestPaginator(c: Context): Promise<Response> {
    return await this.render(c, "saas/category-request-paginator", { meta: { title: "Paykhom Platform" } });
  }

  async onGetBrandRequestPaginator(c: Context): Promise<Response> {
    return await this.render(c, "saas/brand-request-paginator", { meta: { title: "Paykhom Platform" } });
  }

  async onGetAttribRequestPaginator(c: Context): Promise<Response> {
    return await this.render(c, "saas/attrib-request-paginator", { meta: { title: "Paykhom Platform" } });
  }

  // EDITORS

  async onGetAttribEditor(c: Context): Promise<Response> {
    const id = c.req.param('id');
    return await this.render(c, "saas/attrib-editor", { meta: { title: "Paykhom Platform" } }); // Fixed typo: "attrib--editor" to "attrib-editor"
  }

  async onGetAttribGroupEditor(c: Context): Promise<Response> {
    const id = c.req.param('id');
    return await this.render(c, "saas/attrib-group-editor", { meta: { title: "Paykhom Platform" } });
  }

  async onGetBrandEditor(c: Context): Promise<Response> {
    const id = c.req.param('id');
    return await this.render(c, "saas/brand-editor", { meta: { title: "Paykhom Platform" } });
  }

  async onGetCouponEditor(c: Context): Promise<Response> {
    const id = c.req.param('id');
    return await this.render(c, "saas/coupon-editor", { meta: { title: "Paykhom Platform" } });
  }

  async onGetCurrencyEditor(c: Context): Promise<Response> {
    const id = c.req.param('id');
    return await this.render(c, "saas/currency-editor", { meta: { title: "Paykhom Platform" } });
  }

  async onGetDepartmentEditor(c: Context): Promise<Response> {
    const id = c.req.param('id');
    return await this.render(c, "saas/department-editor", { meta: { title: "Paykhom Platform" } });
  }

  async onGetProductEditor(c: Context): Promise<Response> {
    const id = c.req.param('id');
    return await this.render(c, "saas/product-editor", { meta: { title: "Paykhom Platform" } });
  }

  async onGetProductVariantEditor(c: Context): Promise<Response> {
    const id = c.req.param('id');
    return await this.render(c, "saas/product-variant-editor", { meta: { title: "Paykhom Platform" } });
  }

  async onGetPurchaseEditor(c: Context): Promise<Response> {
    const id = c.req.param('id');
    return await this.render(c, "saas/purchase-editor", { meta: { title: "Paykhom Platform" } });
  }

  async onGetShopEditor(c: Context): Promise<Response> {
    const id = c.req.param('id');
    return await this.render(c, "saas/shop-editor", { meta: { title: "Paykhom Platform" } });
  }

  async onGetDropshipEditor(c: Context): Promise<Response> {
    const id = c.req.param('id');
    return await this.render(c, "saas/dropship-editor", { meta: { title: "Paykhom Platform" } });
  }

  async onGetUomEditor(c: Context): Promise<Response> {
    const id = c.req.param('id');
    return await this.render(c, "saas/uom-editor", { meta: { title: "Paykhom Platform" } });
  }

  async onGetCategoryEditor(c: Context): Promise<Response> {
    const id = c.req.param('id');
    return await this.render(c, "saas/category-editor", { meta: { title: "Paykhom Platform" } });
  }

  async onGetAccountDeletionEditor(c: Context): Promise<Response> {
    const id = c.req.param('id');
    return await this.render(c, "saas/account-deletion-editor", { meta: { title: "Paykhom Platform" } });
  }

  async onGetRoleEditor(c: Context): Promise<Response> {
    const id = c.req.param('id');
    return await this.render(c, "saas/role-editor", { meta: { title: "Paykhom Platform" } });
  }

  async onGetUserEditor(c: Context): Promise<Response> {
    const id = c.req.param('id');
    return await this.render(c, "saas/user-editor", { meta: { title: "Paykhom Platform" } });
  }

  async onGetTicketEditor(c: Context): Promise<Response> {
    const id = c.req.param('id');
    return await this.render(c, "saas/ticket-editor", { meta: { title: "Paykhom Platform" } });
  }

  async onGetCategoryRequestEditor(c: Context): Promise<Response> {
    const id = c.req.param('id');
    return await this.render(c, "saas/category-request-editor", { meta: { title: "Paykhom Platform" } });
  }

  async onGetBrandRequestEditor(c: Context): Promise<Response> {
    const id = c.req.param('id');
    return await this.render(c, "saas/brand-request-editor", { meta: { title: "Paykhom Platform" } });
  }

  async onGetAttribRequestEditor(c: Context): Promise<Response> {
    const id = c.req.param('id');
    return await this.render(c, "saas/attrib-request-editor", { meta: { title: "Paykhom Platform" } });
  }
}