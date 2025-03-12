//`;namespace App\Views\User;
  
import UserLayout from "../user-layout";


export default class AddressEditor extends UserLayout {
	

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
								<h4>Address</h4>
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
					<form action="add-address.html">
    <div class="card">
        <div class="card-body add-product pb-0">
            <div class="accordion-card-one accordion" id="accordionExample">
                <div class="accordion-item">
                    <div class="accordion-header" id="headingOne">
                        <div class="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                            aria-controls="collapseOne">
                            <div class="addproduct-icon">
                                <h5><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="feather feather-info add-info">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <line x1="12" y1="16" x2="12" y2="12"></line>
                                        <line x1="12" y1="8" x2="12.01" y2="8"></line>
                                    </svg><span>Address Information</span></h5>
                                <a href="javascript:void(0);"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                        height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        class="feather feather-chevron-down chevron-down-add">
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg></a>
                            </div>
                        </div>
                    </div>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <div class="row">
                                <div class="col-lg-6 col-sm-6 col-12">
                                    <div class="mb-3 add-product">
                                        <label class="form-label">User ID</label>
                                        <input type="text" class="form-control" data-state="user_id" required>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-sm-6 col-12">
                                    <div class="mb-3 add-product">
                                        <label class="form-label">Relation ST</label>
                                        <input type="text" class="form-control" data-state="rel_st" required>
                                    </div>
                                </div>
                            </div>
                             <div class="row">
                                 <div class="col-lg-6 col-sm-6 col-12">
                                    <div class="mb-3 add-product">
                                        <label class="form-label">Relation ID</label>
                                          <input type="text" class="form-control" data-state="rel_id" required>
                                    </div>
                                </div>
                                  <div class="col-lg-6 col-sm-6 col-12">
                                    <div class="mb-3 add-product">
                                         <label class="form-label">Address Type</label>
                                          <select data-state="address_type" class="form-select">
                                              <option data-select2-id="select2-data-3-uspg">Choose</option>
                                              <option value="billing">Billing</option>
                                              <option value="shipping">Shipping</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                             <div class="row">
                                  <div class="col-lg-3 col-sm-6 col-12">
                                      <div class="mb-3 add-product">
                                        <label class="form-label">First Name</label>
                                         <input type="text" class="form-control" data-state="first_name" required>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-sm-6 col-12">
                                    <div class="mb-3 add-product">
                                        <label class="form-label">Last Name</label>
                                        <input type="text" class="form-control" data-state="last_name" required>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-sm-6 col-12">
                                    <div class="mb-3 add-product">
                                         <label class="form-label">Gender</label>
                                         <select data-state="gender" class="form-select">
                                              <option data-select2-id="select2-data-6-l1h1">Choose</option>
                                              <option value="male">Male</option>
                                               <option value="female">Female</option>
                                                <option value="other">Other</option>
                                          </select>
                                     </div>
                                </div>
                                <div class="col-lg-3 col-sm-6 col-12">
                                    <div class="mb-3 add-product">
                                        <label class="form-label">Company Name</label>
                                        <input type="text" class="form-control" data-state="company_name">
                                    </div>
                                </div>
                            </div>
                           <div class="row">
                               <div class="col-lg-6 col-sm-6 col-12">
                                   <div class="mb-3 add-product">
                                        <label class="form-label">Line 1</label>
                                         <input type="text" class="form-control" data-state="line1" required>
                                   </div>
                                </div>
                                 <div class="col-lg-6 col-sm-6 col-12">
                                     <div class="mb-3 add-product">
                                          <label class="form-label">Line 2</label>
                                        <input type="text" class="form-control" data-state="line2" required>
                                    </div>
                                </div>
                           </div>
                            
                             <div class="row">
                                <div class="col-lg-3 col-sm-6 col-12">
                                    <div class="mb-3 add-product">
                                        <label class="form-label">City</label>
                                        <input type="text" class="form-control" data-state="city">
                                    </div>
                                </div>
                                <div class="col-lg-3 col-sm-6 col-12">
                                    <div class="mb-3 add-product">
                                       <label class="form-label">Country</label>
                                        <input type="text" class="form-control" data-state="country">
                                    </div>
                                </div>
                                <div class="col-lg-3 col-sm-6 col-12">
                                     <div class="mb-3 add-product">
                                       <label class="form-label">Zip</label>
                                       <input type="text" class="form-control" data-state="zip">
                                    </div>
                                </div>
                                 <div class="col-lg-3 col-sm-6 col-12">
                                    <div class="mb-3 add-product">
                                        <label class="form-label">Email</label>
                                         <input type="email" class="form-control" data-state="email">
                                    </div>
                                </div>
                             </div>

                             <div class="row">
                                 <div class="col-lg-3 col-sm-6 col-12">
                                     <div class="mb-3 add-product">
                                         <label class="form-label">Mobile</label>
                                        <input type="text" class="form-control" data-state="mobile">
                                     </div>
                                </div>
                                <div class="col-lg-3 col-sm-6 col-12">
                                     <div class="mb-3 add-product">
                                        <label class="form-label">VAT ID</label>
                                          <input type="text" class="form-control" data-state="vat_id">
                                    </div>
                                </div>
                                 <div class="col-lg-3 col-sm-6 col-12">
                                   <div class="mb-3 add-product">
                                        <label class="form-label">Is Default Address</label>
                                         <select data-state="is_default_address" class="form-select">
                                              <option value="1">Yes</option>
                                              <option value="0">No</option>
                                        </select>
                                    </div>
                                </div>
                                  <div class="col-lg-3 col-sm-6 col-12">
                                      <div class="mb-3 add-product">
                                        <label class="form-label">Use for Shipping</label>
                                          <select data-state="use_for_shipping" class="form-select">
                                              <option value="1">Yes</option>
                                              <option value="0">No</option>
                                        </select>
                                   </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="input-blocks summer-description-box transfer mb-3">
                                        <label>Additional Information</label>
                                        <textarea class="form-control h-100" rows="3" data-state="additional"></textarea>
                                         <p class="mt-1">Valid JSON string</p>
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
    <input type="hidden" data-state="address_id" />
</form>
					<!-- /form -->

`;        
   }


   *script() {
	yield this.render(super.script());

yield html`
    <script>
    class Page extends UserLayout {
        constructor(params) {
            super(params);
        }

        async uponReady() {
            await super.uponReady();
			await this.loadEditor(~/api/dbx/ecom/address/load_editor~, {});
		}
    }
    page = new Page();
</script>

`;
   }
}