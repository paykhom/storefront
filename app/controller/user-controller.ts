// FILE: user-controller.ts

import { Context } from 'hono';
import { BaseController as Controller } from './base-controller';
import { PostgresqlClientService } from 'paykhom-fw/service/postgresql-client-service';
import { SessionService, UserSession } from 'paykhom-fw/service/session-service';

export class UserController extends Controller {
  private pg: PostgresqlClientService;
  private ss: SessionService<UserSession>;

  constructor(args: Record<string, any>={}, deps: Record<string, any>={}) {
    super(args);
    this.pg = deps.pgc as PostgresqlClientService;
    this.ss = deps.sessionService as SessionService<UserSession>;
  }

  // Render method (placeholder - implement with your template engine)
  protected whyrender(c: Context, view: string, data: object) {
    return c.json({ view, ...data });
  }

  // PAGINATORS

  async onGetPaymentMethodPaginator(c: Context) {
    return this.render(c, "user/payment-method-paginator", { meta: { title: "Paykhom Platform" } });
  }

  async onGetBuyReturnPaginator(c: Context) {
    return this.render(c, "user/buy-return-paginator", { meta: { title: "Paykhom Platform" } });
  }

  async onGetBuyPaymentPaginator(c: Context) {
    return this.render(c, "user/buy-payment-paginator", { meta: { title: "Paykhom Platform" } });
  }

  async onGetAffiliationPaginator(c: Context) {
    return this.render(c, "user/affiliation-paginator", { meta: { title: "Paykhom Platform" } });
  }

  async onGetRefundPaginator(c: Context) {
    return this.render(c, "user/refund-paginator", { meta: { title: "Paykhom Platform" } });
  }

  async onGetAddressPaginator(c: Context) {
    return this.render(c, "user/address-paginator", { meta: { title: "Paykhom Platform" } });
  }

  async onGetNotificationPaginator(c: Context) {
    return this.render(c, "user/notification-paginator", { meta: { title: "Paykhom Platform" } });
  }

  async onGetTicketPaginator(c: Context) {
    return this.render(c, "user/ticket-paginator", { meta: { title: "Paykhom Platform" } });
  }

  async onGetProductReviewPaginator(c: Context) {
    return this.render(c, "user/product-review-paginator", { meta: { title: "Paykhom Platform" } });
  }

  async onGetShopReviewPaginator(c: Context) {
    return this.render(c, "user/shop-review-paginator", { meta: { title: "Paykhom Platform" } });
  }

  async onGetShoppingBuyPaginator(c: Context) {
    return this.render(c, "user/shop-review-paginator", { meta: { title: "Paykhom Platform" } });
  }

  async onGetOrderPaginator(c: Context) {
    const us: UserSession = await this.ss.getSession(c) || {};
    const user = us.user || { user_id: 0 };
    const input = {};
    try {
      const result = await this.pg.fx('ecom.sales_order__paginate__by_user', input);
      return this.render(c, "user/order-paginator", { so: [], meta: { title: "Paykhom Platform" } });
    } catch (error) {
      return c.json({ error: 'Failed to fetch orders' }, 500);
    }
  }

  // EDITORS

  async onGetPaymentMethodEditor(c: Context) {
    const id = c.req.param('id');
    return this.render(c, "user/payment-method-editor", { meta: { title: "Paykhom Platform" } });
  }

  async onGetBuyReturnEditor(c: Context) {
    const id = c.req.param('id');
    return this.render(c, "user/buy-return-editor", { meta: { title: "Paykhom Platform" } });
  }

  async onGetBuyPaymentEditor(c: Context) {
    const id = c.req.param('id');
    return this.render(c, "user/buy-payment-editor", { meta: { title: "Paykhom Platform" } });
  }

  async onGetAffiliationEditor(c: Context) {
    const id = c.req.param('id');
    return this.render(c, "user/affiliation-editor", { meta: { title: "Paykhom Platform" } });
  }

  async onGetRefundEditor(c: Context) {
    const id = c.req.param('id');
    return this.render(c, "user/refund-editor", { meta: { title: "Paykhom Platform" } });
  }

  async onGetAddressEditor(c: Context) {
    const id = c.req.param('id');
    return this.render(c, "user/address-editor", { meta: { title: "Paykhom Platform" } });
  }

  async onGetNotificationEditor(c: Context) {
    const id = c.req.param('id');
    return this.render(c, "user/notification-editor", { meta: { title: "Paykhom Platform" } });
  }

  async onGetTicketEditor(c: Context) {
    const id = c.req.param('id');
    return this.render(c, "user/ticket-editor", { meta: { title: "Paykhom Platform" } });
  }

  async onGetProductReviewEditor(c: Context) {
    const id = c.req.param('id');
    return this.render(c, "user/product-review-editor", { meta: { title: "Paykhom Platform" } });
  }

  async onGetShopReviewEditor(c: Context) {
    const id = c.req.param('id');
    return this.render(c, "user/shop-review-editor", { meta: { title: "Paykhom Platform" } });
  }

  async onGetShoppingBuyEditor(c: Context) {
    const id = c.req.param('id');
    return this.render(c, "user/shop-review-editor", { meta: { title: "Paykhom Platform" } });
  }

  async onGetOrderEditor(c: Context) {
    const id = c.req.param('id');
    const us : UserSession = await this.ss.getSession(c) || {};
    const user = us.user || { user_id: 0 };
    const input = { user_id: user.user_id };
    try {
      const result = await this.pg.fx('ecom.sales_order__paginate__by_user', input);
      return this.render(c, "user/order-editor", { so: result.ret_data || [], meta: { title: "Paykhom Platform" } });
    } catch (error) {
      return c.json({ error: 'Failed to fetch order' }, 500);
    }
  }

  // OTHERS

  async viewIndexOnGet(c: Context) {
    return this.render(c, "user/index", { meta: { title: "Paykhom Platform" } });
  }

  async viewCartOnGet(c: Context) {
    const us: UserSession = await this.ss.getSession(c) || {};
    const cart = us.cart || [];
    let total_amount = 0;
    let total_delivery_charge = 0;

    for (const item of cart) {
      total_amount += item.total;
      total_delivery_charge += item.total * 0.02;
    }
    const total_grand = total_amount + total_delivery_charge;

    const checkout = { total_amount, total_delivery_charge, total_grand, cart };
    return this.render(c, "user/cart", { checkout, meta: { title: "Paykhom Platform" } });
  }

  async onPostPlaceOrder(c: Context) {
    const SALES_ORDER_STATUS__ORDER_PLACED = 4;
    const payload = await c.req.json();

    const us: UserSession = await this.ss.getSession(c) || {};
    const user =  us.user || { user_id: 0 };
    const cart = us.cart || [];


    payload.user_id = user.user_id;
    payload.cart = cart;

    payload.subtotal = cart.reduce((sum: number, item: any) => sum + (item.rate * item.quantity), 0);
    payload.shipping_charge = payload.subtotal * 0.02 || 0.0;
    payload.total = payload.subtotal + payload.shipping_charge;

    try {
      const result = await this.pg.fx('ecom.sales_order__upsert', payload);
      const salesOrderId = result?.sales_order_id;

      if (salesOrderId > 0) {
        await this.ss.forget(c, 'cart'); // Clear cart from session
        await this.pg.fx('ecom.sales_order__change_status', {
          sales_order_id: salesOrderId,
          sales_order_status_id: SALES_ORDER_STATUS__ORDER_PLACED
        });
      }

      return c.json(result || {});
    } catch (error) {
      return c.json({ error: 'Failed to place order' }, 500);
    }
  }

  async viewCheckoutOnGet(c: Context) {
    //const cart = (await this.ss.get(c, 'cart')) || [];
    const cart = (await this.ss.getSession(c))?.cart || {  };

    let total_amount = 0;
    let total_delivery_charge = 0;

    for (const item of cart) {
      total_amount += item.total;
      total_delivery_charge += item.total * 0.02;
    }
    const total_grand = total_amount + total_delivery_charge;

    const checkout = { total_amount, total_delivery_charge, total_grand, cart };
    return this.render(c, "user/checkout", { checkout, meta: { title: "Paykhom Platform" } });
  }

  async viewOrderOnGet(c: Context) {
    const salesOrderId = c.req.param('sales_order_id');
    //const user = (await this.ss.get(c, 'user')) || { user_id: 0 };
    const user = (await this.ss.getSession(c))?.user || { user_id: 0 };
    try {
      const result = await this.pg.fx('ecom.sales_order__fetch__self', {
        user_id: user.user_id,
        sales_order_id: salesOrderId
      });
      return this.render(c, "user/order-single", { so: result.ret_data?.[0] || {}, meta: { title: "Paykhom Platform" } });
    } catch (error) {
      return c.json({ error: 'Failed to fetch order' }, 500);
    }
  }

  async viewProfileOnGet(c: Context) {
    const user = (await this.ss.getSession(c))?.user || { user_id: 0 };
    const input = { user_id: user.user_id };
    try {
      const result = await this.pg.fx('saas.user__fetch__self', input);
      return this.render(c, "user/profile", { u: result.ret_data || [], meta: { title: "Paykhom Platform" } });
    } catch (error) {
      return c.json({ error: 'Failed to fetch profile' }, 500);
    }
  }

  async onPostUpdateProfile(c: Context) {
    const input = await c.req.json();
    try {
      const result = await this.pg.fx('saas.user__update_profile__self', input);
      return c.json(result);
    } catch (error) {
      return c.json({ error: 'Failed to update profile' }, 500);
    }
  }
}