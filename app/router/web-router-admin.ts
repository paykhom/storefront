// FILE: web-router-admin.ts

import { Hono } from "hono";
import { AdminController } from "../controller/admin-controller";
import { Router } from "paykhom-fw/container/router";
import { WebEngine } from "paykhom-fw/container/engine/web-engine";

export class WebRouterAdmin extends Router {
  private app!: WebEngine;
  private adminController!: AdminController;

  constructor(config: Record<string, any> = {}) {
    super(config);
    this.adminController = new AdminController();
  }

  async uponReady(): Promise<void> {
    this.app = this.resolve("app") as WebEngine;

    await this.adminController.uponReady();


    this.app.get('/admin', async (c) => await this.adminController.onGetIndex(c));
    this.app.get('/admin/dashboard', async (c) => await this.adminController.viewDashboardOnGet(c));

    // Paginators
    this.app.get('/admin/accounting/expense', async (c) => await this.adminController.onGetExpensePaginator(c));
    this.app.get('/admin/catalog/category-request', async (c) => await this.adminController.onGetCategoryRequestPaginator(c));
    this.app.get('/admin/catalog/attrib-request', async (c) => await this.adminController.onGetAttribRequestPaginator(c));
    this.app.get('/admin/catalog/brand-request', async (c) => await this.adminController.onGetBrandRequestPaginator(c));
    this.app.get('/admin/catalog/product', async (c) => await this.adminController.onGetProductPaginator(c));
    this.app.get('/admin/catalog/shop', async (c) => await this.adminController.onGetShopPaginator(c));
    this.app.get('/admin/catalog/dropship', async (c) => await this.adminController.onGetDropshipPaginator(c));
    this.app.get('/admin/catalog/product-variant', async (c) => await this.adminController.onGetProductVariantPaginator(c));
    this.app.get('/admin/catalog/product-review', async (c) => await this.adminController.onGetProductReviewPaginator(c));
    this.app.get('/admin/catalog/shop-review', async (c) => await this.adminController.onGetShopReviewPaginator(c));
    this.app.get('/admin/marketing/prospect', async (c) => await this.adminController.onGetProspectPaginator(c));
    this.app.get('/admin/marketing/lead', async (c) => await this.adminController.onGetLeadPaginator(c));
    this.app.get('/admin/marketing/audience', async (c) => await this.adminController.onGetAudiencePaginator(c));
    this.app.get('/admin/marketing/subscriber', async (c) => await this.adminController.onGetSubscriberPaginator(c));
    this.app.get('/admin/marketing/campaign', async (c) => await this.adminController.onGetCampaignPaginator(c));
    this.app.get('/admin/marketing/promotion', async (c) => await this.adminController.onGetPromotionPaginator(c));
    this.app.get('/admin/marketing/discount', async (c) => await this.adminController.onGetDiscountPaginator(c));
    this.app.get('/admin/marketing/coupon', async (c) => await this.adminController.onGetCouponPaginator(c));
    this.app.get('/admin/marketing/affiliation', async (c) => await this.adminController.onGetAffiliationPaginator(c));
    this.app.get('/admin/purchase/return', async (c) => await this.adminController.onGetPurchaseReturnPaginator(c));
    this.app.get('/admin/purchase/order', async (c) => await this.adminController.onGetPurchaseOrderPaginator(c));
    this.app.get('/admin/purchase/purchase', async (c) => await this.adminController.onGetPurchasePaginator(c));
    this.app.get('/admin/purchase/rfq-out', async (c) => await this.adminController.onGetRfqOutPaginator(c));
    this.app.get('/admin/purchase/quotation-out', async (c) => await this.adminController.onGetQuotationOutPaginator(c));
    this.app.get('/admin/purchase/vendor', async (c) => await this.adminController.onGetVendorPaginator(c));
    this.app.get('/admin/purchase/warranty-claim', async (c) => await this.adminController.onGetPurchaseWarrantyClaimPaginator(c));
    this.app.get('/admin/sales/quotation-in', async (c) => await this.adminController.onGetQuotationInPaginator(c));
    this.app.get('/admin/sales/rfq-in', async (c) => await this.adminController.onGetRfqInPaginator(c));
    this.app.get('/admin/sales/key-account-manager', async (c) => await this.adminController.onGetKeyAccountManagerPaginator(c));
    this.app.get('/admin/sales/sales', async (c) => await this.adminController.onGetSalesPaginator(c));
    this.app.get('/admin/sales/order/:sales_order_id', async (c) => await this.adminController.viewOrderOnGet(c));
    this.app.get('/admin/sales/shipment', async (c) => await this.adminController.onGetShipmentPaginator(c));
    this.app.get('/admin/sales/return', async (c) => await this.adminController.onGetSalesReturnPaginator(c));
    this.app.get('/admin/sales/order', async (c) => await this.adminController.onGetSalesOrderPaginator(c));
    this.app.get('/admin/sales/refund', async (c) => await this.adminController.onGetRefundPaginator(c));
    this.app.get('/admin/sales/warranty-claim', async (c) => await this.adminController.onGetSalesWarrantyClaimPaginator(c));
    this.app.get('/admin/sales/drone/marketplace', async (c) => await this.adminController.onGetSalesDroneDeliveryMarketplacePaginator(c));
    this.app.get('/admin/sales/drone/delivery', async (c) => await this.adminController.onGetSalesDroneDeliveryPaginator(c));
    this.app.get('/admin/shipment', async (c) => await this.adminController.onGetShipmentPaginator(c));
    this.app.get('/admin/shipment/drone', async (c) => await this.adminController.onGetShipmentDeliveryPaginator(c));
    this.app.get('/admin/shipment/courier', async (c) => await this.adminController.onGetShipmentCourierPaginator(c));
    this.app.get('/admin/stock/inventory', async (c) => await this.adminController.onGetStockInventoryPaginator(c));
    this.app.get('/admin/stock/ledger', async (c) => await this.adminController.onGetStockLedgerPaginator(c));
    this.app.get('/admin/stock/location', async (c) => await this.adminController.onGetStockLocationPaginator(c));
    this.app.get('/admin/support/ticket', async (c) => await this.adminController.onGetTicketPaginator(c));
    this.app.get('/admin/drone/marketplace', async (c) => await this.adminController.onGetDroneDeliveryMarketplacePaginator(c));
    this.app.get('/admin/drone/delivery', async (c) => await this.adminController.onGetDroneDeliveryPaginator(c));

    // Editors
    this.app.get('/admin/accounting/expense/editor/:id', async (c) => await this.adminController.onGetExpenseEditor(c));
    this.app.get('/admin/catalog/category-request/editor/:id', async (c) => await this.adminController.onGetCategoryRequestEditor(c));
    this.app.get('/admin/catalog/attrib-request/editor/:id', async (c) => await this.adminController.onGetAttribRequestEditor(c));
    this.app.get('/admin/catalog/brand-request/editor/:id', async (c) => await this.adminController.onGetBrandRequestEditor(c));
    this.app.get('/admin/catalog/product-variant/editor/:id', async (c) => await this.adminController.onGetProductVariantEditor(c));
    this.app.get('/admin/catalog/product-review/editor/:id', async (c) => await this.adminController.onGetProductReviewEditor(c));
    this.app.get('/admin/catalog/product/editor/:id', async (c) => await this.adminController.onGetProductEditor(c));
    this.app.get('/admin/catalog/shop/editor/:id', async (c) => await this.adminController.onGetShopEditor(c));
    this.app.get('/admin/catalog/dropship/editor/:id', async (c) => await this.adminController.onGetDropshipEditor(c));
    this.app.get('/admin/catalog/shop-review/editor/:id', async (c) => await this.adminController.onGetShopReviewEditor(c));
    this.app.get('/admin/marketing/prospect/editor/:id', async (c) => await this.adminController.onGetProspectEditor(c));
    this.app.get('/admin/marketing/lead/editor/:id', async (c) => await this.adminController.onGetLeadEditor(c));
    this.app.get('/admin/marketing/audience/editor/:id', async (c) => await this.adminController.onGetAudienceEditor(c));
    this.app.get('/admin/marketing/subscriber/editor/:id', async (c) => await this.adminController.onGetSubscriberEditor(c));
    this.app.get('/admin/marketing/campaign/editor/:id', async (c) => await this.adminController.onGetCampaignEditor(c));
    this.app.get('/admin/marketing/promotion/editor/:id', async (c) => await this.adminController.onGetPromotionEditor(c));
    this.app.get('/admin/marketing/discount/editor/:id', async (c) => await this.adminController.onGetDiscountEditor(c));
    this.app.get('/admin/marketing/coupon/editor/:id', async (c) => await this.adminController.onGetCouponEditor(c));
    this.app.get('/admin/marketing/affiliation/editor/:id', async (c) => await this.adminController.onGetAffiliationEditor(c));
    this.app.get('/admin/purchase/return/editor/:id', async (c) => await this.adminController.onGetPurchaseReturnEditor(c));
    this.app.get('/admin/purchase/order/editor/:id', async (c) => await this.adminController.onGetPurchaseOrderEditor(c));
    this.app.get('/admin/purchase/purchase/editor/:id', async (c) => await this.adminController.onGetPurchaseEditor(c));
    this.app.get('/admin/purchase/rfq-out/editor/:id', async (c) => await this.adminController.onGetRfqOutEditor(c));
    this.app.get('/admin/purchase/quotation-out/editor/:id', async (c) => await this.adminController.onGetQuotationOutEditor(c));
    this.app.get('/admin/purchase/vendor/editor/:id', async (c) => await this.adminController.onGetVendorEditor(c));
    this.app.get('/admin/purchase/warranty-claim/editor/:id', async (c) => await this.adminController.onGetPurchaseWarrantyClaimEditor(c));
    this.app.get('/admin/sales/quotation-in/editor/:id', async (c) => await this.adminController.onGetQuotationInEditor(c));
    this.app.get('/admin/sales/rfq-in/editor/:id', async (c) => await this.adminController.onGetRfqInEditor(c));
    this.app.get('/admin/sales/key-account-manager/editor/:id', async (c) => await this.adminController.onGetKeyAccountManagerEditor(c));
    this.app.get('/admin/sales/sales/editor/:id', async (c) => await this.adminController.onGetSalesEditor(c));
    this.app.get('/admin/sales/order/editor/:id', async (c) => await this.adminController.onGetSalesOrderEditor(c));
    this.app.get('/admin/sales/shipment/editor/:id', async (c) => await this.adminController.onGetShipmentEditor(c));
    this.app.get('/admin/sales/return/editor/:id', async (c) => await this.adminController.onGetSalesReturnEditor(c));
    this.app.get('/admin/sales/refund/editor/:id', async (c) => await this.adminController.onGetRefundEditor(c));
    this.app.get('/admin/sales/warranty-claim/editor/:id', async (c) => await this.adminController.onGetSalesWarrantyClaimEditor(c));
    this.app.get('/admin/sales/drone/marketplace/editor/:id', async (c) => await this.adminController.onGetSalesDroneDeliveryMarketplaceEditor(c));
    this.app.get('/admin/sales/drone/delivery/editor/:id', async (c) => await this.adminController.onGetSalesDroneDeliveryEditor(c));
    this.app.get('/admin/shipment/editor/:id', async (c) => await this.adminController.onGetShipmentEditor(c));
    this.app.get('/admin/shipment/drone/editor/:id', async (c) => await this.adminController.onGetShipmentDeliveryEditor(c));
    this.app.get('/admin/shipment/courier/editor/:id', async (c) => await this.adminController.onGetShipmentCourierEditor(c));
    this.app.get('/admin/stock/inventory/editor/:id', async (c) => await this.adminController.onGetStockInventoryEditor(c));
    this.app.get('/admin/stock/ledger/editor/:id', async (c) => await this.adminController.onGetStockLedgerEditor(c));
    this.app.get('/admin/stock/location/editor/:id', async (c) => await this.adminController.onGetStockLocationEditor(c));
    this.app.get('/admin/support/ticket/editor/:id', async (c) => await this.adminController.onGetTicketEditor(c));
    this.app.get('/admin/drone/marketplace/editor/:id', async (c) => await this.adminController.onGetDroneDeliveryMarketplaceEditor(c));
    this.app.get('/admin/drone/delivery/editor/:id', async (c) => await this.adminController.onGetDroneDeliveryEditor(c));
  }
}