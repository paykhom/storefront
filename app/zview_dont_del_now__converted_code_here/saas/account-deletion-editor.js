//`;namespace App\Views\Saas;
  
//use App\Views\SaasLayout;


export default class AccountDeletionEditor extends SaasLayout {
	

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
								<h4>Account Deletion</h4>
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
					<form action="add-user.html">
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
                                    </svg><span>User Information</span></h5>
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
                                        <label class="form-label">Full Name</label>
                                        <input type="text" class="form-control" data-state="full_name">
                                    </div>
                                </div>
                                <div class="col-lg-6 col-sm-6 col-12">
                                    <div class="mb-3 add-product">
                                        <label class="form-label">First Name</label>
                                        <input type="text" class="form-control" data-state="first_name">
                                    </div>
                                </div>
                             </div>

                            <div class="row">
                                <div class="col-lg-6 col-sm-6 col-12">
                                    <div class="mb-3 add-product">
                                        <label class="form-label">Last Name</label>
                                        <input type="text" class="form-control" data-state="last_name">
                                    </div>
                                </div>
                                 <div class="col-lg-6 col-sm-6 col-12">
                                     <div class="mb-3 add-product">
                                        <label class="form-label">Gender Type ID</label>
                                        <input type="text" class="form-control" data-state="gender_type_id">
                                    </div>
                                </div>
                            </div>
                            
                             <div class="row">
                                 <div class="col-lg-6 col-sm-6 col-12">
                                    <div class="mb-3 add-product">
                                        <label class="form-label">Birth Date</label>
                                           <div class="input-groupicon calender-input">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar info-img"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                                            <input type="text" class="datetimepicker" data-state="birth_date" placeholder="Choose Date">
                                        </div>
                                     </div>
                                </div>
                                 <div class="col-lg-6 col-sm-6 col-12">
                                    <div class="mb-3 add-product">
                                         <label class="form-label">Father's Name</label>
                                         <input type="text" class="form-control" data-state="father_name">
                                    </div>
                                </div>
                             </div>
                           
                            <div class="row">
                                 <div class="col-lg-6 col-sm-6 col-12">
                                    <div class="mb-3 add-product">
                                        <label class="form-label">Mother's Name</label>
                                        <input type="text" class="form-control" data-state="mother_name">
                                    </div>
                                </div>
                                <div class="col-lg-6 col-sm-6 col-12">
                                     <div class="mb-3 add-product">
                                        <label class="form-label">Nationality Country ID</label>
                                         <input type="text" class="form-control" data-state="nationality_country_id">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-3 col-sm-6 col-12">
                                    <div class="mb-3 add-product">
                                        <label class="form-label">Occupation</label>
                                         <input type="text" class="form-control" data-state="occupation">
                                    </div>
                                </div>
                                 <div class="col-lg-3 col-sm-6 col-12">
                                    <div class="mb-3 add-product">
                                        <label class="form-label">Organization</label>
                                         <input type="text" class="form-control" data-state="organization">
                                    </div>
                                </div>
                                 <div class="col-lg-3 col-sm-6 col-12">
                                    <div class="mb-3 add-product">
                                        <label class="form-label">Designation</label>
                                        <input type="text" class="form-control" data-state="designation">
                                    </div>
                                </div>
                                  <div class="col-lg-3 col-sm-6 col-12">
                                      <div class="mb-3 add-product">
                                           <label class="form-label">NID</label>
                                          <input type="text" class="form-control" data-state="nid">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-6 col-sm-6 col-12">
                                     <div class="mb-3 add-product">
                                          <label class="form-label">Password</label>
                                         <input type="password" class="form-control" data-state="password">
                                    </div>
                                </div>
                                   <div class="col-lg-6 col-sm-6 col-12">
                                        <div class="mb-3 add-product">
                                            <label class="form-label">Password Format</label>
                                           <select data-state="password_format" class="form-select">
                                              <option value="0">Plain Text</option>
                                              <option value="1">MD5</option>
                                        </select>
                                        </div>
                                 </div>
                             </div>
                             <div class="row">
                                <div class="col-lg-6 col-sm-6 col-12">
                                    <div class="mb-3 add-product">
                                        <label class="form-label">Password Salt</label>
                                        <input type="text" class="form-control" data-state="password_salt">
                                    </div>
                                </div>
                                <div class="col-lg-6 col-sm-6 col-12">
                                      <div class="mb-3 add-product">
                                         <label class="form-label">Password Question</label>
                                         <input type="text" class="form-control" data-state="password_question">
                                      </div>
                                </div>
                           </div>
                            <div class="row">
                                 <div class="col-lg-6 col-sm-6 col-12">
                                    <div class="mb-3 add-product">
                                         <label class="form-label">Password Answer</label>
                                          <input type="text" class="form-control" data-state="password_answer">
                                    </div>
                                </div>
                                 <div class="col-lg-6 col-sm-6 col-12">
                                    <div class="mb-3 add-product">
                                        <label class="form-label">Phone</label>
                                        <input type="text" class="form-control" data-state="phone">
                                   </div>
                                </div>
                           </div>

                           <div class="row">
                                <div class="col-lg-6 col-sm-6 col-12">
                                    <div class="mb-3 add-product">
                                        <label class="form-label">Mobile</label>
                                        <input type="text" class="form-control" data-state="mobile" required>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-sm-6 col-12">
                                    <div class="mb-3 add-product">
                                        <label class="form-label">Email</label>
                                         <input type="email" class="form-control" data-state="email" required>
                                    </div>
                                </div>
                            </div>
                             
                             <div class="row">
                                <div class="col-lg-3 col-sm-6 col-12">
                                    <div class="mb-3 add-product">
                                        <label class="form-label">Website</label>
                                         <input type="text" class="form-control" data-state="website">
                                    </div>
                                </div>
                                 <div class="col-lg-3 col-sm-6 col-12">
                                    <div class="mb-3 add-product">
                                       <label class="form-label">Facebook</label>
                                         <input type="text" class="form-control" data-state="facebook">
                                    </div>
                                </div>
                                 <div class="col-lg-3 col-sm-6 col-12">
                                     <div class="mb-3 add-product">
                                          <label class="form-label">Twitter</label>
                                         <input type="text" class="form-control" data-state="twitter">
                                    </div>
                                </div>
                                  <div class="col-lg-3 col-sm-6 col-12">
                                      <div class="mb-3 add-product">
                                        <label class="form-label">LinkedIn</label>
                                         <input type="text" class="form-control" data-state="linkedin">
                                    </div>
                                </div>
                            </div>
                            
                            <div class="row">
                                 <div class="col-lg-3 col-sm-6 col-12">
                                    <div class="mb-3 add-product">
                                        <label class="form-label">Instagram</label>
                                         <input type="text" class="form-control" data-state="instagram">
                                    </div>
                                </div>
                                 <div class="col-lg-3 col-sm-6 col-12">
                                    <div class="mb-3 add-product">
                                        <label class="form-label">Tiktok</label>
                                        <input type="text" class="form-control" data-state="tiktok">
                                    </div>
                                </div>
                                <div class="col-lg-6 col-sm-6 col-12">
                                     <div class="mb-3 add-product">
                                        <label class="form-label">Title</label>
                                         <input type="text" class="form-control" data-state="title">
                                     </div>
                                </div>
                             </div>
                            <div class="row">
                                <div class="col-lg-6 col-sm-6 col-12">
                                    <div class="mb-3 add-product">
                                          <label class="form-label">Subtitle</label>
                                        <input type="text" class="form-control" data-state="subtitle">
                                    </div>
                                </div>
                                  <div class="col-lg-6 col-sm-6 col-12">
                                   <div class="mb-3 add-product">
                                        <label class="form-label">Slug</label>
                                        <input type="text" class="form-control" data-state="slug">
                                   </div>
                                </div>
                             </div>
                            
                            
                             <div class="row">
													<div class="col-lg-6 col-sm-6 col-12">
														<!-- 
														<div class="mb-3 add-product">
															<label class="form-label">Logo Image</label>
															<input type="text" class="form-control" data-state="logo_image">
														</div>
 														-->
														<div class="mb-3">
															<label for="logo_image" class="form-label">Logo Image</label>
															<input class="form-control" type="file" name="logo_image" id="logo_image" onchange="page.onChangeFileContent(this)">
														</div>
														<div id="logo_image_preview_container">
															<div xclass="image-preview-item col-4 mb-2">
																<img data-state="logo_image"  src="/no-image.jpeg" alt="Logo Image" class="img-fluid rounded shadow" width="100%">
															</div>
														</div>

													</div>
													<div class="col-lg-6 col-sm-6 col-12">
														<div class="mb-3">
															<label for="banner_image" class="form-label">Banner Image</label>
															<input class="form-control" type="file" id="banner_image" onchange="page.onChangeFileContent(this)">
														</div>
														<div id="banner_image_preview_container">
															<div xclass="image-preview-item col-4 mb-2">
																<img data-state="banner_image"  src="/no-image.jpeg" alt="Banner Image" class="img-fluid rounded shadow" width="100%">
															</div>
														</div>


													</div>
												</div>

                             
                           <div class="row">
                                <div class="col-lg-12">
                                    <div class="input-blocks summer-description-box transfer mb-3">
                                        <label>Description</label>
                                        <textarea class="form-control h-100" rows="5" data-state="description"></textarea>
                                          <p class="mt-1">Maximum 40000 Characters</p>
                                    </div>
                                </div>
                            </div>
                             <div class="row">
                                <div class="col-lg-12">
                                    <div class="input-blocks summer-description-box transfer mb-3">
                                        <label>Content</label>
                                         <textarea class="form-control h-100" rows="5" data-state="content"></textarea>
                                          <p class="mt-1">Maximum 40000 Characters</p>
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
     <input type="hidden" data-state="user_id" />
</form>

					<!-- /form -->

`;        
   }


   *script() {
	yield this.render(super.script());

yield html`
    <script>
    class Page extends SaasLayout {
        constructor(params) {
            super(params);
        }

        async uponReady() {
            await super.uponReady();
			await this.loadEditor(~/dbx/ecom/account_deletion/load_editor~, {});
		}
    }
    page = new Page();
</script>

`;
   }
}