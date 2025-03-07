// FILE: web-router-saas.ts

import { Hono } from "hono";
import { SaasController } from "../controller/saas-controller";
import { Glass } from "paykhom-fw/glass";
import { ApplicationServer } from "../../server";

export class WebRouterSaas extends Glass {
  private app: ApplicationServer;
  private saasController: SaasController;

  constructor(config: Record<string, any>, deps: Record<string, any> = {}) {
    super(config);
    this.app = deps.app as ApplicationServer;
    this.saasController = deps.saasController as SaasController;
  }

  public setupRoutes() {
    // this.app.get('/saas', async (c) => await this.saasController.onGetIndex(c)); // Uncomment when implemented

    // Paginators
    this.app.get('/saas/catalog/category-request', async (c) => await this.saasController.onGetCategoryRequestPaginator(c));
    this.app.get('/saas/catalog/attrib-request', async (c) => await this.saasController.onGetAttribRequestPaginator(c));
    this.app.get('/saas/catalog/brand-request', async (c) => await this.saasController.onGetBrandRequestPaginator(c));
    this.app.get('/saas/catalog/attrib', async (c) => await this.saasController.onGetAttribPaginator(c));
    this.app.get('/saas/catalog/attrib-group', async (c) => await this.saasController.onGetAttribGroupPaginator(c));
    this.app.get('/saas/catalog/brand', async (c) => await this.saasController.onGetBrandPaginator(c));
    this.app.get('/saas/catalog/currency', async (c) => await this.saasController.onGetCurrencyPaginator(c));
    this.app.get('/saas/catalog/department', async (c) => await this.saasController.onGetDepartmentPaginator(c));
    this.app.get('/saas/catalog/uom', async (c) => await this.saasController.onGetUomPaginator(c));
    this.app.get('/saas/catalog/category', async (c) => await this.saasController.onGetCategoryPaginator(c));
    this.app.get('/saas/catalog/shop', async (c) => await this.saasController.onGetShopPaginator(c));
    this.app.get('/saas/catalog/dropship', async (c) => await this.saasController.onGetDropshipPaginator(c));
    this.app.get('/saas/catalog/account-deletion', async (c) => await this.saasController.onGetAccountDeletionPaginator(c));
    this.app.get('/saas/catalog/role', async (c) => await this.saasController.onGetRolePaginator(c));
    this.app.get('/saas/catalog/user', async (c) => await this.saasController.onGetUserPaginator(c));
    this.app.get('/saas/support/ticket', async (c) => await this.saasController.onGetTicketPaginator(c));

    // Editors with route parameters
    this.app.get('/saas/catalog/category-request/editor/:id', async (c) => await this.saasController.onGetCategoryRequestEditor(c));
    this.app.get('/saas/catalog/attrib-request/editor/:id', async (c) => await this.saasController.onGetAttribRequestEditor(c));
    this.app.get('/saas/catalog/brand-request/editor/:id', async (c) => await this.saasController.onGetBrandRequestEditor(c));
    this.app.get('/saas/catalog/attrib/editor/:id', async (c) => await this.saasController.onGetAttribEditor(c));
    this.app.get('/saas/catalog/attrib-group/editor/:id', async (c) => await this.saasController.onGetAttribGroupEditor(c));
    this.app.get('/saas/catalog/brand/editor/:id', async (c) => await this.saasController.onGetBrandEditor(c));
    this.app.get('/saas/catalog/currency/editor/:id', async (c) => await this.saasController.onGetCurrencyEditor(c));
    this.app.get('/saas/catalog/department/editor/:id', async (c) => await this.saasController.onGetDepartmentEditor(c));
    this.app.get('/saas/catalog/uom/editor/:id', async (c) => await this.saasController.onGetUomEditor(c));
    this.app.get('/saas/catalog/category/editor/:id', async (c) => await this.saasController.onGetCategoryEditor(c));
    this.app.get('/saas/catalog/shop/editor/:id', async (c) => await this.saasController.onGetShopEditor(c));
    this.app.get('/saas/catalog/dropship/editor/:id', async (c) => await this.saasController.onGetDropshipEditor(c));
    this.app.get('/saas/catalog/account-deletion/editor/:id', async (c) => await this.saasController.onGetAccountDeletionEditor(c));
    this.app.get('/saas/catalog/role/editor/:id', async (c) => await this.saasController.onGetRoleEditor(c));
    this.app.get('/saas/catalog/user/editor/:id', async (c) => await this.saasController.onGetUserEditor(c));
    this.app.get('/saas/support/ticket/editor/:id', async (c) => await this.saasController.onGetTicketEditor(c));
  }
}