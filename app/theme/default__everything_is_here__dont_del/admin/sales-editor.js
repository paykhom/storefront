////`;namespace App\Views\Admin;
  
import AdminLayout from '../admin-layout';


export default class SalesEditor extends AdminLayout {

	

	*head() {
		yield this.render(super.head());

      // return `
      //     <title>Paykhom Mondi</title
      //     <meta name="title" content="Paykhom Mondi" />

      //     <meta name="description" content="Paykhom Mondi" />

      //     <meta name="keywords" content="Paykhom Mondi" />


         
      //     `;
   }

   *style() {
		yield this.render(super.style());
yield html`
      <style>
      </style>

`;
   }

    
  *content() {
	yield this.render(super.content());

yield html`
					<div class="page-header">
						<div class="add-item d-flex">
							<div class="page-title">
								<h4>Sales</h4>
								<h6>&nbsp;</h6>
							</div>
						</div>
            <ul class="table-top-head">
                            <li>
                                <a data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Pdf" data-bs-original-title="Pdf"><img  loading="lazy" data-src="/theme/dp/assets/img/icons/pdf.svg" alt="img"></a>
                            </li>
                            <li>
                                <a data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Excel" data-bs-original-title="Excel"><img  loading="lazy" data-src="/theme/dp/assets/img/icons/excel.svg" alt="img"></a>
                            </li>
                            <li>
                                <a data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Print" data-bs-original-title="Print"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-printer feather-rotate-ccw"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg></a>
                            </li>
                            <li>
                                <a data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Refresh" data-bs-original-title="Refresh"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-rotate-ccw"><polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path></svg></a>
                            </li>
                            <li>
                                <a data-bs-toggle="tooltip" data-bs-placement="top" id="collapse-header" aria-label="Collapse" data-bs-original-title="Collapse"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-up"><polyline points="18 15 12 9 6 15"></polyline></svg></a>
                            </li>
                        </ul>
                        <div class="page-btn">
                            <a  onclick="page.onClickAddNew(this)" href="#" class="btn btn-added" onclick="page.onClickAddNew(this)"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle me-2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>Add New</a>
                        </div>	
					</div>

					<!-- form -->
					<form action="add-product.html">
  <div class="card">
    <div class="card-body add-product pb-0">
      <div class="accordion-card-one accordion" id="accordionExample">
        <div class="accordion-item">
          <div class="accordion-header" id="headingOne">
            <div class="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-controls="collapseOne">
              <div class="addproduct-icon">
                <h5>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-info add-info">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                  </svg>
                  <span>Sales Information</span>
                </h5>
                <a href="javascript:void(0);">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down chevron-down-add">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
               <div class="row">
                <div class="col-lg-6 col-sm-6 col-12">
                    <div class="mb-3 add-product">
                        <label class="form-label">Shop ID</label>
                        <input type="number" class="form-control" data-state="shop_id">
                    </div>
                </div>
                 <div class="col-lg-6 col-sm-6 col-12">
                    <div class="mb-3 add-product">
                        <label class="form-label">User ID</label>
                        <input type="number" class="form-control" data-state="user_id" required>
                    </div>
                </div>
            </div>
            <div class="row">
                  <div class="col-lg-6 col-sm-6 col-12">
                        <div class="mb-3 add-product">
                             <label class="form-label">Order Date</label>
                             <div class="input-groupicon calender-input">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round" class="feather feather-calendar info-img">
                                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                                    <line x1="16" y1="2" x2="16" y2="6"></line>
                                                    <line x1="8" y1="2" x2="8" y2="6"></line>
                                                    <line x1="3" y1="10" x2="21" y2="10"></line>
                                                </svg>
                                                <input type="text" class="datetimepicker" placeholder="Choose Date" data-state="order_date">
                                         </div>
                                 </div>
                    </div>
                     <div class="col-lg-6 col-sm-6 col-12">
                          <div class="mb-3 add-product">
                                 <label class="form-label">Billing Address ID</label>
                                 <input type="number" class="form-control" data-state="billing_address_id">
                             </div>
                     </div>
             </div>
             <div class="row">
                 <div class="col-lg-6 col-sm-6 col-12">
                    <div class="mb-3 add-product">
                       <label class="form-label">Shipping Address ID</label>
                       <input type="number" class="form-control" data-state="shipping_address_id">
                       </div>
                   </div>
                 <div class="col-lg-6 col-sm-6 col-12">
                     <div class="mb-3 add-product">
                         <label class="form-label">Payment Method ID</label>
                         <input type="number" class="form-control" data-state="payment_method_id">
                     </div>
                </div>
             </div>
            <div class="row">
                 <div class="col-lg-6 col-sm-6 col-12">
                     <div class="mb-3 add-product">
                          <label class="form-label">Shipping Method ID</label>
                        <input type="number" class="form-control" data-state="shipping_method_id">
                    </div>
                </div>
                 <div class="col-lg-6 col-sm-6 col-12">
                       <div class="mb-3 add-product">
                          <label class="form-label">Order Status ID</label>
                            <input type="number" class="form-control" data-state="order_status_id">
                        </div>
                   </div>
            </div>

             <div class="row">
                    <div class="col-lg-4 col-sm-6 col-12">
                         <div class="mb-3 add-product">
                            <label class="form-label">Subtotal</label>
                             <input type="number" step="0.01" class="form-control" data-state="subtotal">
                         </div>
                     </div>
                       <div class="col-lg-4 col-sm-6 col-12">
                           <div class="mb-3 add-product">
                               <label class="form-label">Discount</label>
                              <input type="number" step="0.01" class="form-control" data-state="discount">
                            </div>
                       </div>
                     <div class="col-lg-4 col-sm-6 col-12">
                          <div class="mb-3 add-product">
                             <label class="form-label">Shipping Charge</label>
                            <input type="number" step="0.01" class="form-control" data-state="shipping_charge">
                        </div>
                     </div>

                </div>

               <div class="row">
                 <div class="col-lg-4 col-sm-6 col-12">
                    <div class="mb-3 add-product">
                        <label class="form-label">VAT</label>
                        <input type="number" step="0.01" class="form-control" data-state="vat">
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 col-12">
                    <div class="mb-3 add-product">
                         <label class="form-label">Tax</label>
                           <input type="number" step="0.01" class="form-control" data-state="tax">
                       </div>
                    </div>
                     <div class="col-lg-4 col-sm-6 col-12">
                         <div class="mb-3 add-product">
                             <label class="form-label">Total</label>
                             <input type="number" step="0.01" class="form-control" data-state="total">
                          </div>
                     </div>
             </div>
              <div class="row">
                 <div class="col-lg-6 col-sm-6 col-12">
                        <div class="mb-3 add-product">
                             <label class="form-label">Currency ID</label>
                            <input type="number" class="form-control" data-state="currency_id">
                         </div>
                     </div>
                     <div class="col-lg-6 col-sm-6 col-12">
                        <div class="mb-3 add-product">
                             <label class="form-label">Coupon ID</label>
                            <input type="number" class="form-control" data-state="coupon_id">
                        </div>
                    </div>
             </div>
            <div class="row">
                <div class="col-lg-6 col-sm-6 col-12">
                      <div class="mb-3 add-product">
                          <label class="form-label">Discount Amount</label>
                             <input type="number" step="0.01" class="form-control" data-state="discount_amount" value="0">
                           </div>
                    </div>
                      <div class="col-lg-6 col-sm-6 col-12">
                            <div class="mb-3 add-product">
                                <label class="form-label">Sales Status ID</label>
                                   <input type="number" class="form-control" data-state="sales_status_id" value="1">
                                </div>
                         </div>
            </div>
            <div class="row">
                <div class="col-lg-6 col-sm-6 col-12">
                      <div class="mb-3 add-product">
                        <label class="form-label">Reference String</label>
                           <input type="text" class="form-control" data-state="ref_st" required>
                          </div>
                  </div>
                 <div class="col-lg-6 col-sm-6 col-12">
                        <div class="mb-3 add-product">
                              <label class="form-label">Reference ID</label>
                             <input type="number" class="form-control" data-state="ref_id" value="0">
                        </div>
                    </div>
             </div>

             <div class="row">
                <div class="col-lg-6 col-sm-6 col-12">
                  <div class="mb-3 add-product">
                        <label class="form-label">Sales Type ID</label>
                        <input type="number" class="form-control" data-state="sales_type_id" value="0">
                    </div>
               </div>
              <div class="col-lg-6 col-sm-6 col-12">
                   <div class="mb-3 add-product">
                      <label class="form-label">Payment Status ID</label>
                         <input type="number" class="form-control" data-state="payment_status_id" value="0">
                     </div>
                 </div>
            </div>
            <div class="row">
                <div class="col-lg-6 col-sm-6 col-12">
                   <div class="mb-3 add-product">
                        <label class="form-label">Payment Amount</label>
                          <input type="number" step="0.01" class="form-control" data-state="payment_amount" value="0.0">
                    </div>
                 </div>
            </div>
             <div class="row">
                  <div class="col-lg-12 col-sm-12 col-12">
                      <div class="mb-3 add-product">
                          <label class="form-label">Narration</label>
                             <textarea class="form-control" rows="5" data-state="narration"></textarea>
                       </div>
                   </div>
               </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    <div class="col-lg-12">
        <div class="btn-addproduct mb-4">
            <button id="btn_cancel_editor" type="button" class="btn btn-cancel me-2">Cancel</button>
            <button id="btn_save_editor" type="submit" class="btn btn-submit">Save</button>
        </div>
    </div>
     <input type="hidden" data-state="sales_id"/>
</form>
					<!-- /form -->

`;        
   }


   *script() {
	  yield this.render(super.script());

yield html`
<script>
    class Page extends AdminLayout {
        constructor(params) {
            super(params);
        }

        async uponReady() {
            await super.uponReady();
			      await this.loadEditor(~/api/dbx/ecom/sales/load_editor~, {});
		    }
    }
    page = new Page();
</script>
`;
   }
}