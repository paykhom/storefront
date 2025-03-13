// FILE: web-router-user.ts

import { Hono } from "hono";
import { UserController } from "../controller/user-controller";
import { TClass } from "paykhom-fw/tclass";
import { WebEngine } from "paykhom-fw/container/engine/web-engine";

export class WebRouterUser extends TClass {
  private app: WebEngine;
  private userController: UserController;

  constructor(config: Record<string, any> = {}) {
    super(config);
    this.app = deps.app as WebEngine;
    this.userController = deps.userController as UserController;
  }

  async uponReady(): Promise<void> {
    this.pg = this.resolve("pgc");
    this.ss = this.resolve("sessionService");
  }

  public setupRoutes() {
    // Basic routes
    // this.app.get('/user', async (c) => await this.userController.onGetIndex(c)); // Uncomment when implemented
    this.app.get('/user/account/profile', async (c) => await this.userController.viewProfileOnGet(c));

    // Paginators
    this.app.get('/user/account/address', async (c) => await this.userController.onGetAddressPaginator(c));
    this.app.get('/user/account/payment-method', async (c) => await this.userController.onGetPaymentMethodPaginator(c));
    this.app.get('/user/account/notification', async (c) => await this.userController.onGetNotificationPaginator(c));
    this.app.get('/user/business/affiliation', async (c) => await this.userController.onGetAffiliationPaginator(c));
    this.app.get('/user/shopping/return', async (c) => await this.userController.onGetBuyReturnPaginator(c));
    this.app.get('/user/shopping/payment', async (c) => await this.userController.onGetBuyPaymentPaginator(c));
    this.app.get('/user/shopping/ticket', async (c) => await this.userController.onGetTicketPaginator(c));
    this.app.get('/user/shopping/refund', async (c) => await this.userController.onGetRefundPaginator(c));
    this.app.get('/user/shopping/product-review', async (c) => await this.userController.onGetProductReviewPaginator(c));
    this.app.get('/user/shopping/shop-review', async (c) => await this.userController.onGetShopReviewPaginator(c));
    this.app.get('/user/shopping/buy', async (c) => await this.userController.onGetShoppingBuyPaginator(c));
    this.app.get('/user/shopping/order', async (c) => await this.userController.onGetOrderPaginator(c));

    // Editors with route parameters
    this.app.get('/user/account/address/editor/:id', async (c) => await this.userController.onGetAddressEditor(c));
    this.app.get('/user/account/payment-method/editor/:id', async (c) => await this.userController.onGetPaymentMethodEditor(c));
    this.app.get('/user/account/notification/editor/:id', async (c) => await this.userController.onGetNotificationEditor(c));
    this.app.get('/user/business/affiliation/editor/:id', async (c) => await this.userController.onGetAffiliationEditor(c));
    this.app.get('/user/shopping/return/editor/:id', async (c) => await this.userController.onGetBuyReturnEditor(c));
    this.app.get('/user/shopping/payment/editor/:id', async (c) => await this.userController.onGetBuyPaymentEditor(c));
    this.app.get('/user/shopping/ticket/editor/:id', async (c) => await this.userController.onGetTicketEditor(c));
    this.app.get('/user/shopping/refund/editor/:id', async (c) => await this.userController.onGetRefundEditor(c));
    this.app.get('/user/shopping/product-review/editor/:id', async (c) => await this.userController.onGetProductReviewEditor(c));
    this.app.get('/user/shopping/shop-review/editor/:id', async (c) => await this.userController.onGetShopReviewEditor(c));
    this.app.get('/user/shopping/buy/editor/:id', async (c) => await this.userController.onGetShoppingBuyEditor(c));

    // Others
    this.app.get('/user/shopping', async (c) => await this.userController.viewIndexOnGet(c));
    // this.app.get('/user/shopping/dashboard', async (c) => await this.userController.viewDashboardOnGet(c)); // Uncomment when implemented
    this.app.get('/user/shopping/order/:sales_order_id', async (c) => await this.userController.viewOrderOnGet(c));
    this.app.get('/user/shopping/checkout', async (c) => await this.userController.viewCheckoutOnGet(c));
    this.app.get('/user/shopping/cart', async (c) => await this.userController.viewCartOnGet(c));

    // POST routes
    this.app.post('/user/account/update-profile', async (c) => await this.userController.onPostUpdateProfile(c));
    this.app.post('/user/shopping/place-order', async (c) => await this.userController.onPostPlaceOrder(c));
  }
}