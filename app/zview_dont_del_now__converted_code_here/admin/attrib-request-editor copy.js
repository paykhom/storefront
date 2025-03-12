////`;namespace App\Views\Admin;
  
import AdminLayout from '../admin-layout';


export default class AttribRequestEditor extends AdminLayout {

	

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
								<h4>Products</h4>
								<h6>Manage your products</h6>
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
							<a href="#" class="btn btn-added" onclick="page.onClickAddNew(this)"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle me-2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>Add New</a>
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
                  <span>Product Information</span>
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
                    <label class="form-label">Store</label>
                    <select class="select select2-hidden-accessible" data-select2-id="select2-data-1-2z5m" tabindex="-1" aria-hidden="true">
                        <option data-select2-id="select2-data-3-uspg">Choose</option>
                        <option>Thomas</option>
                        <option>Rasmussen</option>
                        <option>Fred john</option>
                    </select>
                    </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-12">
                    <div class="mb-3 add-product">
                    <label class="form-label">Warehouse</label>
                    <select class="select select2-hidden-accessible" data-select2-id="select2-data-4-a6yn" tabindex="-1" aria-hidden="true">
                        <option data-select2-id="select2-data-6-l1h1">Choose</option>
                        <option>Legendary</option>
                        <option>Determined</option>
                        <option>Sincere</option>
                    </select>
                    </div>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-6 col-sm-6 col-12">
                  <div class="mb-3 add-product">
                    <label class="form-label">Product Name</label>
                    <input type="text" data-state="title" class="form-control" required="">
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-12">
                  <div class="mb-3 add-product">
                    <label class="form-label">Slug</label>
                    <input type="text" data-state="slug" class="form-control">
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-6 col-sm-6 col-12">
                  <div class="input-blocks add-product list">
                    <label>SKU</label>
                    <input type="text" class="form-control list" placeholder="Enter SKU">
                    <button type="submit" class="btn btn-primaryadd">Generate Code</button>
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-12">
                    <div class="mb-3 add-product">
                    <label class="form-label">Description</label>
                    <textarea data-state="description" class="form-control h-100" rows="5"></textarea>
                    </div>
                    <p class="mt-1">Maximum 60 Characters</p>
                </div>

              </div>

              <div class="addservice-info">
                <div class="row">
                  <div class="col-lg-4 col-sm-6 col-12">
                    <div class="mb-3 add-product">
                      <div class="add-newplus">
                        <label class="form-label">Category</label>
                        <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#add-units-category">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle plus-down-add">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="12" y1="8" x2="12" y2="16"></line>
                            <line x1="8" y1="12" x2="16" y2="12"></line>
                          </svg>
                          <span>Add New</span>
                        </a>
                      </div>
                      <select class="select select2-hidden-accessible" data-select2-id="select2-data-7-owwb" tabindex="-1" aria-hidden="true">
                        <option data-select2-id="select2-data-9-q7hp">Choose</option>
                        <option>Lenovo</option>
                        <option>Electronics</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-4 col-sm-6 col-12">
                    <div class="mb-3 add-product">
                      <label class="form-label">Sub Category</label>
                      <select class="select select2-hidden-accessible" data-select2-id="select2-data-10-6yhk" tabindex="-1" aria-hidden="true">
                        <option data-select2-id="select2-data-12-x9fj">Choose</option>
                        <option>Lenovo</option>
                        <option>Electronics</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-4 col-sm-6 col-12">
                    <div class="mb-3 add-product">
                      <label class="form-label">Sub Sub Category</label>
                      <select class="select select2-hidden-accessible" data-select2-id="select2-data-13-4ttm" tabindex="-1" aria-hidden="true">
                        <option data-select2-id="select2-data-15-xapq">Choose</option>
                        <option>Fruits</option>
                        <option>Computers</option>
                        <option>Shoes</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div class="add-product-new">
                <div class="row">
                  <div class="col-lg-4 col-sm-6 col-12">
                    <div class="mb-3 add-product">
                      <div class="add-newplus">
                        <label class="form-label">Brand</label>
                        <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#add-units-brand">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle plus-down-add">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="12" y1="8" x2="12" y2="16"></line>
                            <line x1="8" y1="12" x2="16" y2="12"></line>
                          </svg>
                          <span>Add New</span>
                        </a>
                      </div>
                      <select class="select select2-hidden-accessible" data-select2-id="select2-data-16-bd3h" tabindex="-1" aria-hidden="true">
                        <option data-select2-id="select2-data-18-6b0h">Choose</option>
                        <option>Nike</option>
                        <option>Bolt</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-4 col-sm-6 col-12">
                    <div class="mb-3 add-product">
                      <div class="add-newplus">
                        <label class="form-label">Unit</label>
                        <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#add-unit">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle plus-down-add">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="12" y1="8" x2="12" y2="16"></line>
                            <line x1="8" y1="12" x2="16" y2="12"></line>
                          </svg>
                          <span>Add New</span>
                        </a>
                      </div>
                      <select class="select select2-hidden-accessible" data-select2-id="select2-data-19-ser7" tabindex="-1" aria-hidden="true">
                        <option data-select2-id="select2-data-21-nsfr">Choose</option>
                        <option>Kg</option>
                        <option>Pc</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-4 col-sm-6 col-12">
                    <div class="mb-3 add-product">
                      <label class="form-label">Selling Type</label>
                      <select class="select select2-hidden-accessible" data-select2-id="select2-data-22-k8j5" tabindex="-1" aria-hidden="true">
                        <option data-select2-id="select2-data-24-pdt2">Choose</option>
                        <option>Transactional selling</option>
                        <option>Solution selling</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-6 col-sm-6 col-12">
                  <div class="mb-3 add-product">
                    <label class="form-label">Barcode Symbology</label>
                    <select class="select select2-hidden-accessible" data-select2-id="select2-data-25-hle1" tabindex="-1" aria-hidden="true">
                      <option data-select2-id="select2-data-27-c3wr">Choose</option>
                      <option>Code34</option>
                      <option>Code35</option>
                      <option>Code36</option>
                    </select>
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-12">
                  <div class="input-blocks add-product list">
                    <label>Item Code</label>
                    <input type="text" class="form-control list" placeholder="Please Enter Item Code">
                    <button type="submit" class="btn btn-primaryadd">Generate Code</button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div class="accordion-card-one accordion" id="accordionExample2">
        <div class="accordion-item">
          <div class="accordion-header" id="headingTwo">
            <div class="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-controls="collapseTwo">
              <div class="text-editor add-list">
                <div class="addproduct-icon list icon">
                  <h5>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-life-buoy add-info">
                      <circle cx="12" cy="12" r="10"></circle>
                      <circle cx="12" cy="12" r="4"></circle>
                      <line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line>
                      <line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line>
                      <line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line>
                      <line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line>
                      <line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>
                    </svg>
                    <span>Pricing & Stocks</span>
                  </h5>
                  <a href="javascript:void(0);">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down chevron-down-add">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div id="collapseTwo" class="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordionExample2">
            <div class="accordion-body">
              <div class="input-blocks add-products">
                <label class="d-block">Product Type</label>
                <div class="single-pill-product">
                  <ul class="nav nav-pills" id="pills-tab1" role="tablist">
                    <li class="nav-item" role="presentation">
                      <span class="custom_radio me-4 mb-0 active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">
                        <input type="radio" class="form-control" name="payment">
                        <span class="checkmark"></span> Single Product
                      </span>
                    </li>
                    <li class="nav-item" role="presentation">
                      <span class="custom_radio me-2 mb-0" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false" tabindex="-1">
                        <input type="radio" class="form-control" name="sign">
                        <span class="checkmark"></span> Variable Product
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                  <div class="row">
                    <div class="col-lg-4 col-sm-6 col-12">
                        <div class="input-blocks add-product">
                          <label>Quantity</label>
                          <input type="text" class="form-control">
                        </div>
                      </div>
                      <div class="col-lg-4 col-sm-6 col-12">
                        <div class="input-blocks add-product">
                          <label>Price</label>
                          <input type="text" class="form-control">
                        </div>
                      </div>
                      <div class="col-lg-4 col-sm-6 col-12">
                        <div class="input-blocks add-product">
                          <label>Tax Type</label>
                          <select class="select select2-hidden-accessible" data-select2-id="select2-data-28-oqug" tabindex="-1" aria-hidden="true">
                            <option data-select2-id="select2-data-30-j19c">Exclusive</option>
                            <option>Sales Tax</option>
                          </select>
                        </div>
                      </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-4 col-sm-6 col-12">
                        <div class="input-blocks add-product">
                          <label>Discount Type</label>
                          <select class="select select2-hidden-accessible" data-select2-id="select2-data-31-guv8" tabindex="-1" aria-hidden="true">
                            <option data-select2-id="select2-data-33-j8ki">Choose</option>
                            <option>Percentage</option>
                            <option>Cash</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-lg-4 col-sm-6 col-12">
                        <div class="input-blocks add-product">
                          <label>Discount Value</label>
                          <input type="text" placeholder="Choose">
                        </div>
                      </div>
                      <div class="col-lg-4 col-sm-6 col-12">
                        <div class="input-blocks add-product">
                          <label>Quantity Alert</label>
                          <input type="text" class="form-control">
                        </div>
                      </div>
                  </div>

                  <div class="accordion-card-one accordion" id="accordionExample3">
                    <div class="accordion-item">
                      <div class="accordion-header" id="headingThree">
                        <div class="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-controls="collapseThree">
                          <div class="addproduct-icon list">
                            <h5>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-image add-info">
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                                <polyline points="21 15 16 10 5 21"></polyline>
                              </svg>
                              <span>Images</span>
                            </h5>
                            <a href="javascript:void(0);">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down chevron-down-add">
                                <polyline points="6 9 12 15 18 9"></polyline>
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div id="collapseThree" class="accordion-collapse collapse show" aria-labelledby="headingThree" data-bs-parent="#accordionExample3">
                        <div class="accordion-body">
                          <div class="text-editor add-list add">
                            <div class="col-lg-12">
                              <div class="add-choosen">
                                <div class="input-blocks">
                                  <div class="image-upload">
                                    <input type="file">
                                    <div class="image-uploads">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle plus-down-add me-0">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <line x1="12" y1="8" x2="12" y2="16"></line>
                                        <line x1="8" y1="12" x2="16" y2="12"></line>
                                      </svg>
                                      <h4>Add Images</h4>
                                    </div>
                                  </div>
                                </div>
                                <div class="phone-img">
                                  <img  loading="lazy" data-src="/theme/dp/assets/img/products/phone-add-2.png" alt="image">
                                  <a href="javascript:void(0);">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x x-square-add remove-product">
                                      <line x1="18" y1="6" x2="6" y2="18"></line>
                                      <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg>
                                  </a>
                                </div>

                                <div class="phone-img">
                                  <img  loading="lazy" data-src="/theme/dp/assets/img/products/phone-add-1.png" alt="image">
                                  <a href="javascript:void(0);">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x x-square-add remove-product">
                                      <line x1="18" y1="6" x2="6" y2="18"></line>
                                      <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                  <div class="row select-color-add">
                    <div class="col-lg-6 col-sm-6 col-12">
                      <div class="input-blocks add-product">
                        <label>Variant Attribute</label>
                        <div class="row">
                          <div class="col-lg-10 col-sm-10 col-10">
                            <select class="form-control variant-select select-option" id="colorSelect">
                              <option>Choose</option>
                              <option>Color</option>
                              <option value="red">Red</option>
                              <option value="black">Black</option>
                            </select>
                          </div>
                          <div class="col-lg-2 col-sm-2 col-2 ps-0">
                            <div class="add-icon tab">
                              <a class="btn btn-filter" data-bs-toggle="modal" data-bs-target="#add-units">
                                <i class="feather feather-plus-circle"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="selected-hide-color" id="input-show">
                        <div class="row align-items-center">
                          <div class="col-sm-10">
                            <div class="input-blocks">
                              <div class="bootstrap-tagsinput">
                                <span class="tag label label-info">red
                                  <span data-role="remove"></span>
                                </span>
                                <span class="tag label label-info">black
                                  <span data-role="remove"></span>
                                </span>
                                <input type="text" placeholder="">
                              </div>
                              <input class="input-tags form-control" id="inputBox" type="text" data-role="tagsinput" name="specialist" value="red, black" style="display: none;">
                            </div>
                          </div>
                          <div class="col-lg-2">
                            <div class="input-blocks ">
                              <a href="javascript:void(0);" class="remove-color">
                                <i class="far fa-trash-alt"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>

                  </div>

                  <div class="modal-body-table variant-table" id="variant-table">
                      <div class="table-responsive">
                          <table class="table">
                              <thead>
                                  <tr>
                                      <th>Variantion</th>
                                      <th>Variant Value</th>
                                      <th>SKU</th>
                                      <th>Quantity</th>
                                      <th>Price</th>
                                      <th class="no-sort">Action</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  <tr>
                                      <td>
                                          <div class="add-product">
                                              <input type="text" class="form-control" value="color">
                                          </div>												
                                      </td>
                                      <td>
                                          <div class="add-product">
                                              <input type="text" class="form-control" value="red">
                                          </div>
                                      </td>
                                      <td>
                                          <div class="add-product">
                                              <input type="text" class="form-control" value="1234">
                                          </div>
                                      </td>
                                      <td>
                                          <div class="product-quantity">
                                              <span class="quantity-btn">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-minus-circle feather-search">
                                                  <circle cx="12" cy="12" r="10"></circle>
                                                  <line x1="8" y1="12" x2="16" y2="12"></line>
                                                </svg>
                                              </span>
                                              <input type="text" class="quntity-input" value="2">
                                              <span class="quantity-btn">
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle plus-circle">
                                                    <circle cx="12" cy="12" r="10"></circle>
                                                    <line x1="12" y1="8" x2="12" y2="16"></line>
                                                    <line x1="8" y1="12" x2="16" y2="12"></line>
                                                  </svg>
                                              </span>
                                          </div>
                                      </td>
                                      <td>
                                          <div class="add-product">
                                              <input type="text" class="form-control" value="50000">
                                          </div>
                                      </td>
                                      <td class="action-table-data">
                                          <div class="edit-delete-action">
                                              <div class="input-block add-lists">
                                                  <label class="checkboxs">
                                                      <input type="checkbox" checked="">
                                                      <span class="checkmarks"></span>
                                                  </label>
                                              </div>
                                              <a class="me-2 p-2" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#add-variation">
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus feather-edit">
                                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                                  </svg>
                                              </a>
                                              <a class="confirm-text p-2" href="javascript:void(0);">
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2">
                                                    <polyline points="3 6 5 6 21 6"></polyline>
                                                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                                    <line x1="10" y1="11" x2="10" y2="17"></line>
                                                    <line x1="14" y1="11" x2="14" y2="17"></line>
                                                  </svg>
                                              </a>
                                          </div>
                                      
                                      </td>
                                  </tr>
                                  <tr>
                                    <td>
                                        <div class="add-product">
                                            <input type="text" class="form-control" value="color">
                                        </div>												
                                    </td>
                                    <td>
                                        <div class="add-product">
                                            <input type="text" class="form-control" value="black">
                                        </div>
                                    </td>
                                    <td>
                                        <div class="add-product">
                                            <input type="text" class="form-control" value="2345">
                                        </div>
                                    </td>
                                    <td>
                                        <div class="product-quantity">
                                            <span class="quantity-btn">
                                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-minus-circle feather-search">
                                                <circle cx="12" cy="12" r="10"></circle>
                                                <line x1="8" y1="12" x2="16" y2="12"></line>
                                              </svg>
                                            </span>
                                            <input type="text" class="quntity-input" value="3">
                                            <span class="quantity-btn">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle plus-circle">
                                                  <circle cx="12" cy="12" r="10"></circle>
                                                  <line x1="12" y1="8" x2="12" y2="16"></line>
                                                  <line x1="8" y1="12" x2="16" y2="12"></line>
                                                </svg>
                                            </span>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="add-product">                                              <input type="text" class="form-control" value="50000">
                                          </div>
                                      </td>
                                      <td class="action-table-data">
                                          <div class="edit-delete-action">
                                              <div class="input-block add-lists">
                                                  <label class="checkboxs">
                                                      <input type="checkbox" checked="">
                                                      <span class="checkmarks"></span>
                                                  </label>
                                              </div>
                                              <a class="me-2 p-2" href="#" data-bs-toggle="modal" data-bs-target="#edit-units">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus feather-edit">
                                                  <line x1="12" y1="5" x2="12" y2="19"></line>
                                                  <line x1="5" y1="12" x2="19" y2="12"></line>
                                                </svg>
                                              </a>
                                              <a class="confirm-text p-2" href="javascript:void(0);">
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2">
                                                    <polyline points="3 6 5 6 21 6"></polyline>
                                                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                                    <line x1="10" y1="11" x2="10" y2="17"></line>
                                                    <line x1="14" y1="11" x2="14" y2="17"></line>
                                                  </svg>
                                              </a>
                                          </div>
                                          
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="accordion-card-one accordion" id="accordionExample4">
        <div class="accordion-item">
          <div class="accordion-header" id="headingFour">
            <div class="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-controls="collapseFour">
              <div class="text-editor add-list">
                <div class="addproduct-icon list">
                  <h5>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-list add-info">
                      <line x1="8" y1="6" x2="21" y2="6"></line>
                      <line x1="8" y1="12" x2="21" y2="12"></line>
                      <line x1="8" y1="18" x2="21" y2="18"></line>
                      <line x1="3" y1="6" x2="3.01" y2="6"></line>
                      <line x1="3" y1="12" x2="3.01" y2="12"></line>
                      <line x1="3" y1="18" x2="3.01" y2="18"></line>
                    </svg>
                    <span>Custom Fields</span>
                  </h5>
                  <a href="javascript:void(0);">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down chevron-down-add">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div id="collapseFour" class="accordion-collapse collapse show" aria-labelledby="headingFour" data-bs-parent="#accordionExample4">
            <div class="accordion-body">
              <div class="text-editor add-list add">
                <div class="custom-filed">
                  <div class="input-block add-lists">
                    <label class="checkboxs">
                      <input type="checkbox">
                      <span class="checkmarks"></span>Warranties
                    </label>
                    <label class="checkboxs">
                      <input type="checkbox">
                      <span class="checkmarks"></span>Manufacturer
                    </label>
                    <label class="checkboxs">
                      <input type="checkbox">
                      <span class="checkmarks"></span>Expiry
                    </label>
                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-6 col-sm-6 col-12">
                      <div class="input-blocks add-product">
                        <label>Discount Type</label>
                        <select class="select select2-hidden-accessible" data-select2-id="select2-data-34-rudb" tabindex="-1" aria-hidden="true">
                          <option data-select2-id="select2-data-36-eovd">Choose</option>
                          <option>Percentage</option>
                          <option>Cash</option>
                        </select>
                      </div>
                    </div>
                   <div class="col-lg-6 col-sm-6 col-12">
                     <div class="input-blocks add-product">
                         <label>Quantity Alert</label>
                       <input type="text" class="form-control">
                    </div>
                   </div>
                </div>

                <div class="row">
                    <div class="col-lg-6 col-sm-6 col-12">
                        <div class="input-blocks">
                            <label>Manufactured Date</label>
                            <div class="input-groupicon calender-input">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar info-img">
                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                    <line x1="16" y1="2" x2="16" y2="6"></line>
                                    <line x1="8" y1="2" x2="8" y2="6"></line>
                                    <line x1="3" y1="10" x2="21" y2="10"></line>
                                </svg>
                                <input type="text" class="datetimepicker" placeholder="Choose Date">
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-sm-6 col-12">
                        <div class="input-blocks">
                            <label>Expiry On</label>
                            <div class="input-groupicon calender-input">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar info-img">
                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                    <line x1="16" y1="2" x2="16" y2="6"></line>
                                    <line x1="8" y1="2" x2="8" y2="6"></line>
                                    <line x1="3" y1="10" x2="21" y2="10"></line>
                                </svg>
                                <input type="text" class="datetimepicker" placeholder="Choose Date">
                            </div>
                        </div>
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
      <button id="btn_cancel" type="button" class="btn btn-cancel me-2">Cancel</button>
      <button id="btn_save" type="submit" class="btn btn-submit">Save Product</button>
    </div>
  </div>
    <input type="hidden" data-state="product_id"/>

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
			await this.loadEditor(~/api/dbx/ecom/attrib/load_editor~, {});
		}
    }
    page = new Page();
</script>
	
`;
   }
}