// FILE: admin-controller.ts

import { Context } from 'hono';
import { BaseController as Controller } from "./base-controller";
import { PostgresqlClientService } from 'paykhom-fw/service/postgresql-client-service';
import { SessionService, UserSession } from 'paykhom-fw/service/session-service';

export class AdminController extends Controller {
  private pg: PostgresqlClientService;
  private ss: SessionService<UserSession>;

  constructor(args: Record<string, any>={}, deps: Record<string, any>={}) {
    super(args);
    this.pg = deps.pgc as PostgresqlClientService;
    this.ss = deps.sessionService as SessionService<UserSession>;
  }

  async onGetIndex(c: Context) {
    return this.render(c, "admin/index", { meta: { title: "Paykhom Platform" } });
  }

  async viewDashboardOnGet(c: Context) {
    // If cart session data is needed in the future, use this.ss.get(c, 'cart')
    // For now, behavior remains unchanged
    return this.render(c, "admin/index", { meta: { title: "Paykhom Platform" } });
  }

  async viewOrderOnGet(c: Context) {
    const salesOrderId = c.req.param('sales_order_id');
    try {
      const result = await this.pg.fx('ecom.sales_order__fetch__admin', { sales_order_id: salesOrderId });
      const orderData = result.ret_data?.[0] || {};
      return this.render(c, "Admin/OrderSingle", { so: orderData, meta: { title: "Paykhom Platform" } });
    } catch (error) {
      return c.json({ error: 'Failed to fetch order' }, 500);
    }
  }

  // PAGINATORS

  async onGetProductPaginator(c: Context) {
    return this.render(c, "admin/product-paginator", { meta: { title: "Paykhom Platform" } });
  }

  async onGetRefundPaginator(c: Context) {
    return this.render(c, "admin/refund-paginator", { meta: { title: "Paykhom Platform" } });
  }

  async onGetShopPaginator(c: Context) {
    return this.render(c, "admin/shop-paginator", { meta: { title: "Paykhom Platform" } });
  }

  async onGetDropshipPaginator(c: Context) {
    return this.render(c, "admin/dropship-paginator", { meta: { title: "Paykhom Platform" } });
  }

  async onGetStockInventoryPaginator(c: Context) {
    return this.render(c, "admin/stock-inventory-paginator", { meta: { title: "Paykhom Platform" } });
  }

  async onGetStockLedgerPaginator(c: Context) {
    return this.render(c, "admin/stock-ledger-paginator", { meta: { title: "Paykhom Platform" } });
  }

  async onGetStockLocationPaginator(c: Context) {
    return this.render(c, "admin/stock-location-paginator", { meta: { title: "Paykhom Platform" } });
  }

  async onGetProductReviewPaginator(c: Context) {
    return this.render(c, "admin/product-review-paginator", { meta: { title: "Paykhom Platform" } });
  }

  async onGetShopReviewPaginator(c: Context) {
    return this.render(c, "admin/shop-review-paginator", { meta: { title: "Paykhom Platform" } });
  }

  async onGetShipmentPaginator(c: Context) {
    return this.render(c, "admin/shipment-paginator", { meta: { title: "Paykhom Platform" } });
  }

  async onGetSalesReturnPaginator(c: Context) {
    return this.render(c, "admin/sales-return-paginator", { meta: { title: "Paykhom Platform" } });
  }

  async onGetPurchaseReturnPaginator(c: Context) {
    return this.render(c, "admin/purchase-return-paginator", { meta: { title: "Paykhom Platform" } });
  }

  async onGetSalesOrderPaginator(c: Context) {
    return this.render(c, "admin/sales-order-paginator", { meta: { title: "Paykhom Platform" } });
  }

  async onGetPurchaseOrderPaginator(c: Context) {
    return this.render(c, "admin/purchase-order-paginator", { meta: { title: "Paykhom Platform" } });
  }

  async onGetSalesPaginator(c: Context) {
    return this.render(c, "admin/sales-paginator", { meta: { title: "Paykhom Platform" } });
  }

  async onGetPurchasePaginator(c: Context) {
    return this.render(c, "admin/purchase-paginator", { meta: { title: "Paykhom Platform" } });
  }

  async onGetAffiliationPaginator(c: Context) {
    return this.render(c, "admin/affiliation-paginator", { meta: { title: "Paykhom Platform" } });
  }

  async onGetCouponPaginator(c: Context) {
    return this.render(c, "admin/coupon-paginator", { meta: { title: "Paykhom Platform" } });
  }

  async onGetCampaignPaginator(c: Context) {
    return this.render(c, "admin/campaign-paginator", { meta: { title: "Paykhom Platform" } });
  }

  async onGetPromotionPaginator(c: Context) {
    return this.render(c, "admin/promotion-paginator", { meta: { title: "Paykhom Platform" } });
  }

  async onGetDiscountPaginator(c: Context) {
    return this.render(c, "admin/discount-paginator", { meta: { title: "Paykhom Platform" } });
  }

  async onGetProductVariantPaginator(c: Context) {
    return this.render(c, "admin/product-variant-paginator", { meta: { title: "Paykhom Platform" } });
  }

  async onGetExpensePaginator(c: Context) {
    return this.render(c, "admin/expense-paginator", { meta: { title: "Paykhom Platform" } });
  }

  async onGetVendorPaginator(c: Context) {
    return this.render(c, "admin/vendor-paginator", { meta: { title: "Paykhom Platform" } });
  }

  async onGetProspectPaginator(c: Context) {
    return this.render(c, "admin/prospect-paginator", { meta: { title: "Paykhom Platform" } });
  }

  async onGetLeadPaginator(c: Context) {
    return this.render(c, "admin/lead-paginator", { meta: { title: "Paykhom Platform" } });
  }

  async onGetAudiencePaginator(c: Context) {
    return this.render(c, "admin/audience-paginator", { meta: { title: "Paykhom Platform" } });
  }

  async onGetSubscriberPaginator(c: Context) {
    return this.render(c, "admin/subscriber-paginator", { meta: { title: "Paykhom Platform" } });
  }

  async onGetTicketPaginator(c: Context) {
    return this.render(c, "admin/ticket-paginator", { meta: { title: "Paykhom Platform" } });
  }

  async onGetSalesDroneDeliveryMarketplacePaginator(c: Context) {
    return this.render(c, "admin/drone-delivery-marketplace-paginator", { meta: { title: "Paykhom Platform" } });
  }

  async onGetSalesDroneDeliveryPaginator(c: Context) {
    return this.render(c, "admin/drone-delivery-paginator", { meta: { title: "Paykhom Platform" } });
  }

  async onGetDroneDeliveryMarketplacePaginator(c: Context) {
    return this.render(c, "admin/drone/drone-delivery-marketplace-paginator", { meta: { title: "Paykhom Platform" } });
  }

  async onGetDroneDeliveryPaginator(c: Context) {
    return this.render(c, "admin/drone/drone-delivery-paginator", { meta: { title: "Paykhom Platform" } });
  }

  async onGetKeyAccountManagerPaginator(c: Context) {
    return this.render(c, "admin/key-account-manager-paginator", { meta: { title: "Paykhom Platform" } });
  }

  async onGetCustomerPaginator(c: Context) {
    return this.render(c, "admin/customer-paginator", { meta: { title: "Paykhom Platform" } });
  }

  async onGetRfqOutPaginator(c: Context) {
    return this.render(c, "admin/rfq-out-paginator", { meta: { title: "Paykhom Platform" } });
  }

  async onGetRfqInPaginator(c: Context) {
    return this.render(c, "admin/rfq-in-paginator", { meta: { title: "Paykhom Platform" } });
  }

  async onGetQuotationOutPaginator(c: Context) {
    return this.render(c, "admin/quotation-out-paginator", { meta: { title: "Paykhom Platform" } });
  }

  async onGetQuotationInPaginator(c: Context) {
    return this.render(c, "admin/quotation-in-paginator", { meta: { title: "Paykhom Platform" } });
  }

  async onGetShipmentDeliveryPaginator(c: Context) {
    return this.render(c, "admin/shipment-delivery-paginator", { meta: { title: "Paykhom Platform" } });
  }

  async onGetShipmentCourierPaginator(c: Context) {
    return this.render(c, "admin/shipment-courier-paginator", { meta: { title: "Paykhom Platform" } });
  }

  async onGetCategoryRequestPaginator(c: Context) {
    return this.render(c, "admin/category-request-paginator", { meta: { title: "Paykhom Platform" } });
  }

  async onGetBrandRequestPaginator(c: Context) {
    return this.render(c, "admin/brand-request-paginator", { meta: { title: "Paykhom Platform" } });
  }

  async onGetAttribRequestPaginator(c: Context) {
    return this.render(c, "admin/attrib-request-paginator", { meta: { title: "Paykhom Platform" } });
  }

  async onGetStockPaginator(c: Context) {
    return this.render(c, "admin/stock-paginator", { meta: { title: "Paykhom Platform" } });
  }

  async onGetPurchaseWarrantyClaimPaginator(c: Context) {
    return this.render(c, "admin/purchase-warranty-claim-paginator", { meta: { title: "Paykhom Platform" } });
  }

  async onGetSalesWarrantyClaimPaginator(c: Context) {
    return this.render(c, "admin/sales-warranty-claim-paginator", { meta: { title: "Paykhom Platform" } });
  }

  // EDITORS

  async onGetProductEditor(c: Context) {
    const id = c.req.param('id');
    return this.render(c, "admin/product-editor", { meta: { title: "Paykhom Platform" } });
  }

  async onGetRefundEditor(c: Context) {
    const id = c.req.param('id');
    return this.render(c, "admin/refund-editor", { meta: { title: "Paykhom Platform" } });
  }

  async onGetShopEditor(c: Context) {
    const id = c.req.param('id');
    return this.render(c, "admin/shop-editor", { meta: { title: "Paykhom Platform" } });
  }

  async onGetDropshipEditor(c: Context) {
    const id = c.req.param('id');
    return this.render(c, "admin/dropship-editor", { meta: { title: "Paykhom Platform" } });
  }

  async onGetStockInventoryEditor(c: Context) {
    const id = c.req.param('id');
    return this.render(c, "admin/stock-editor", { meta: { title: "Paykhom Platform" } });
  }

  async onGetStockLedgerEditor(c: Context) {
    const id = c.req.param('id');
    return this.render(c, "admin/stockLedger-editor", { meta: { title: "Paykhom Platform" } });
  }

  async onGetStockLocationEditor(c: Context) {
    const id = c.req.param('id');
    return this.render(c, "admin/stock-location-editor", { meta: { title: "Paykhom Platform" } });
  }

  async onGetProductReviewEditor(c: Context) {
    const id = c.req.param('id');
    return this.render(c, "admin/product-review-editor", { meta: { title: "Paykhom Platform" } });
  }

  async onGetShopReviewEditor(c: Context) {
    const id = c.req.param('id');
    return this.render(c, "admin/shop-review-editor", { meta: { title: "Paykhom Platform" } });
  }

  async onGetShipmentEditor(c: Context) {
    const id = c.req.param('id');
    return this.render(c, "admin/shipment-editor", { meta: { title: "Paykhom Platform" } });
  }

  async onGetSalesReturnEditor(c: Context) {
    const id = c.req.param('id');
    return this.render(c, "admin/sales-return-editor", { meta: { title: "Paykhom Platform" } });
  }

  async onGetPurchaseReturnEditor(c: Context) {
    const id = c.req.param('id');
    return this.render(c, "admin/purchase-return-editor", { meta: { title: "Paykhom Platform" } });
  }

  async onGetSalesOrderEditor(c: Context) {
    const id = c.req.param('id');
    return this.render(c, "admin/sales-order-editor", { meta: { title: "Paykhom Platform" } });
  }

  async onGetPurchaseOrderEditor(c: Context) {
    const id = c.req.param('id');
    return this.render(c, "admin/purchase-order-editor", { meta: { title: "Paykhom Platform" } });
  }

  async onGetSalesEditor(c: Context) {
    const id = c.req.param('id');
    return this.render(c, "admin/sales-editor", { meta: { title: "Paykhom Platform" } });
  }

  async onGetPurchaseEditor(c: Context) {
    const id = c.req.param('id');
    return this.render(c, "admin/purchase-editor", { meta: { title: "Paykhom Platform" } });
  }

  async onGetAffiliationEditor(c: Context) {
    const id = c.req.param('id');
    return this.render(c, "admin/affiliation-editor", { meta: { title: "Paykhom Platform" } });
  }

  async onGetCouponEditor(c: Context) {
    const id = c.req.param('id');
    return this.render(c, "admin/coupon-editor", { meta: { title: "Paykhom Platform" } });
  }

  async onGetCampaignEditor(c: Context) {
    const id = c.req.param('id');
    return this.render(c, "admin/campaign-editor", { meta: { title: "Paykhom Platform" } });
  }

  async onGetPromotionEditor(c: Context) {
    const id = c.req.param('id');
    return this.render(c, "admin/promotion-editor", { meta: { title: "Paykhom Platform" } });
  }

  async onGetDiscountEditor(c: Context) {
    const id = c.req.param('id');
    return this.render(c, "admin/discount-editor", { meta: { title: "Paykhom Platform" } });
  }

  async onGetProductVariantEditor(c: Context) {
    const id = c.req.param('id');
    return this.render(c, "admin/product-variant-editor", { meta: { title: "Paykhom Platform" } });
  }

  async onGetExpenseEditor(c: Context) {
    const id = c.req.param('id');
    return this.render(c, "admin/expense-editor", { meta: { title: "Paykhom Platform" } });
  }

  async onGetVendorEditor(c: Context) {
    const id = c.req.param('id');
    return this.render(c, "admin/vendor-editor", { meta: { title: "Paykhom Platform" } });
  }

  async onGetProspectEditor(c: Context) {
    const id = c.req.param('id');
    return this.render(c, "admin/prospect-editor", { meta: { title: "Paykhom Platform" } });
  }

  async onGetLeadEditor(c: Context) {
    const id = c.req.param('id');
    return this.render(c, "admin/lead-editor", { meta: { title: "Paykhom Platform" } });
  }

  async onGetAudienceEditor(c: Context) {
    const id = c.req.param('id');
    return this.render(c, "admin/audience-editor", { meta: { title: "Paykhom Platform" } });
  }

  async onGetSubscriberEditor(c: Context) {
    const id = c.req.param('id');
    return this.render(c, "admin/subscriber-editor", { meta: { title: "Paykhom Platform" } });
  }

  async onGetTicketEditor(c: Context) {
    const id = c.req.param('id');
    return this.render(c, "admin/ticket-editor", { meta: { title: "Paykhom Platform" } });
  }

  async onGetSalesDroneDeliveryMarketplaceEditor(c: Context) {
    const id = c.req.param('id');
    return this.render(c, "admin/drone-delivery-marketplace-editor", { meta: { title: "Paykhom Platform" } });
  }

  async onGetSalesDroneDeliveryEditor(c: Context) {
    const id = c.req.param('id');
    return this.render(c, "admin/drone-delivery-editor", { meta: { title: "Paykhom Platform" } });
  }

  async onGetDroneDeliveryMarketplaceEditor(c: Context) {
    const id = c.req.param('id');
    return this.render(c, "admin/drone/drone-delivery-marketplace-editor", { meta: { title: "Paykhom Platform" } });
  }

  async onGetDroneDeliveryEditor(c: Context) {
    const id = c.req.param('id');
    return this.render(c, "admin/drone/drone-delivery-editor", { meta: { title: "Paykhom Platform" } });
  }

  async onGetKeyAccountManagerEditor(c: Context) {
    const id = c.req.param('id');
    return this.render(c, "admin/key-account-manager-editor", { meta: { title: "Paykhom Platform" } });
  }

  async onGetCustomerEditor(c: Context) {
    const id = c.req.param('id');
    return this.render(c, "admin/customer-editor", { meta: { title: "Paykhom Platform" } });
  }

  async onGetRfqOutEditor(c: Context) {
    const id = c.req.param('id');
    return this.render(c, "admin/rfq-out-editor", { meta: { title: "Paykhom Platform" } });
  }

  async onGetRfqInEditor(c: Context) {
    const id = c.req.param('id');
    return this.render(c, "admin/rfq-in-editor", { meta: { title: "Paykhom Platform" } });
  }

  async onGetQuotationOutEditor(c: Context) {
    const id = c.req.param('id');
    return this.render(c, "admin/quotation-out-editor", { meta: { title: "Paykhom Platform" } });
  }

  async onGetQuotationInEditor(c: Context) {
    const id = c.req.param('id');
    return this.render(c, "admin/quotation-in-editor", { meta: { title: "Paykhom Platform" } });
  }

  async onGetShipmentDeliveryEditor(c: Context) {
    const id = c.req.param('id');
    return this.render(c, "admin/shipment-delivery-editor", { meta: { title: "Paykhom Platform" } });
  }

  async onGetShipmentCourierEditor(c: Context) {
    const id = c.req.param('id');
    return this.render(c, "admin/shipment-courier-editor", { meta: { title: "Paykhom Platform" } });
  }

  async onGetCategoryRequestEditor(c: Context) {
    const id = c.req.param('id');
    return this.render(c, "admin/category-request-editor", { meta: { title: "Paykhom Platform" } });
  }

  async onGetBrandRequestEditor(c: Context) {
    const id = c.req.param('id');
    return this.render(c, "admin/brand-request-editor", { meta: { title: "Paykhom Platform" } });
  }

  async onGetAttribRequestEditor(c: Context) {
    const id = c.req.param('id');
    return this.render(c, "admin/attrib-request-editor", { meta: { title: "Paykhom Platform" } });
  }

  async onGetStockEditor(c: Context) {
    const id = c.req.param('id');
    return this.render(c, "admin/stock-editor", { meta: { title: "Paykhom Platform" } });
  }

  async onGetPurchaseWarrantyClaimEditor(c: Context) {
    const id = c.req.param('id');
    return this.render(c, "admin/purchase-warranty-claim-editor", { meta: { title: "Paykhom Platform" } });
  }

  async onGetSalesWarrantyClaimEditor(c: Context) {
    const id = c.req.param('id');
    return this.render(c, "admin/sales-warranty-claim-editor", { meta: { title: "Paykhom Platform" } });
  }
}