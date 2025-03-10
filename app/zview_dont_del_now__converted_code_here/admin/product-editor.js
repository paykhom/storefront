////`;namespace App\Views\Admin;

import AdminLayout from '../admin-layout';

export default class ProductEditor extends AdminLayout {


    *head() {
        yield this.render(super.head());
    }

    *style() {
        yield this.render(super.style());
    yield html`
      <style>
      </style>
`;    }

    *content() {
        yield this.render(super.content());
yield html`
		<div class="page-header">
		<div class="add-item d-flex">
			<div class="page-title">
				<h4>Product</h4>
				<h6>&nbsp;</h6>
			</div>
		</div>
		<ul class="table-top-head">
			<li>
				<a data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Pdf" data-bs-original-title="Pdf"><img
						src="/theme/dp/assets/img/icons/pdf.svg" alt="img"></a>
			</li>
			<li>
				<a data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Excel" data-bs-original-title="Excel"><img
						src="/theme/dp/assets/img/icons/excel.svg" alt="img"></a>
			</li>
			<li>
				<a data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Print" data-bs-original-title="Print"><svg
						xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
						stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
						class="feather feather-printer feather-rotate-ccw">
						<polyline points="6 9 6 2 18 2 18 9"></polyline>
						<path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
						<rect x="6" y="14" width="12" height="8"></rect>
					</svg></a>
			</li>
			<li>
				<a data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Refresh"
					data-bs-original-title="Refresh"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
						viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
						stroke-linejoin="round" class="feather feather-rotate-ccw">
						<polyline points="1 4 1 10 7 10"></polyline>
						<path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>
					</svg></a>
			</li>
			<li>
				<a data-bs-toggle="tooltip" data-bs-placement="top" id="collapse-header" aria-label="Collapse"
					data-bs-original-title="Collapse"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
						viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
						stroke-linejoin="round" class="feather feather-chevron-up">
						<polyline points="18 15 12 9 6 15"></polyline>
					</svg></a>
			</li>
		</ul>
		<div class="page-btn">
			<a onclick="page.onClickAddNew(this)" href="#" class="btn btn-added" onclick="page.onClickAddNew(this)"><svg
					xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
					stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
					class="feather feather-plus-circle me-2">
					<circle cx="12" cy="12" r="10"></circle>
					<line x1="12" y1="8" x2="12" y2="16"></line>
					<line x1="8" y1="12" x2="16" y2="12"></line>
				</svg>Add New</a>
		</div>
	</div>
	
	<form action="add-product.html">
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
										</svg><span>Product Information</span></h5>
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
											<label class="form-label">Product Name</label>
											<input type="text" data-state="title" class="form-control" required="">
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
									<div class="col-lg-12">
										<div class="input-blocks summer-description-box transfer mb-3">
											<label>Description</label>
											<textarea class="form-control h-100" rows="5" data-state="description"></textarea>
											<p class="mt-1">Maximum 60 Characters</p>
										</div>
									</div>
								</div>
								
								 <div class="row">
									 <div class="col-lg-12">
										<div class="input-blocks summer-description-box transfer mb-3">
											<label>Content</label>
											 <textarea class="form-control h-100" rows="5" data-state="content"></textarea>
										</div>
									 </div>
								 </div>
	
								<div class="row">
									<div class="col-lg-6 col-sm-6 col-12">
										<div class="mb-3 add-product">
											 <label class="form-label">Category</label>
											 <select class="select select2-hidden-accessible" data-select2-id="select2-data-7-owwb"
												tabindex="-1" aria-hidden="true" data-state="category_id">
												<option data-select2-id="select2-data-9-q7hp">Choose</option>
												<option>Lenovo</option>
												<option>Electronics</option>
											</select>
										</div>
									</div>
									 <div class="col-lg-6 col-sm-6 col-12">
										<div class="mb-3 add-product">
											<label class="form-label">Department</label>
											<select class="select select2-hidden-accessible" data-select2-id="select2-data-4-a6yn"
												tabindex="-1" aria-hidden="true" data-state="department_id">
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
											<div class="add-newplus">
												<label class="form-label">Brand</label>
												<a href="javascript:void(0);" data-bs-toggle="modal"
													data-bs-target="#add-units-brand"><svg xmlns="http://www.w3.org/2000/svg"
														width="24" height="24" viewBox="0 0 24 24" fill="none"
														stroke="currentColor" stroke-width="2" stroke-linecap="round"
														stroke-linejoin="round"
														class="feather feather-plus-circle plus-down-add">
														<circle cx="12" cy="12" r="10"></circle>
														<line x1="12" y1="8" x2="12" y2="16"></line>
														<line x1="8" y1="12" x2="16" y2="12"></line>
													</svg><span>Add New</span></a>
											</div>
											<select class="select select2-hidden-accessible" data-select2-id="select2-data-16-bd3h"
												tabindex="-1" aria-hidden="true" data-state="brand_id">
												<option data-select2-id="select2-data-18-6b0h">Choose</option>
												<option>Nike</option>
												<option>Bolt</option>
											</select>
										</div>
									</div>
									<div class="col-lg-6 col-sm-6 col-12">
									   <div class="mb-3 add-product">
											<label class="form-label">Shop</label>
											<select class="select select2-hidden-accessible" data-select2-id="select2-data-1-2z5m"
												tabindex="-1" aria-hidden="true" data-state="shop_id">
												<option data-select2-id="select2-data-3-uspg">Choose</option>
												<option>Thomas</option>
												<option>Rasmussen</option>
												<option>Fred john</option>
											</select>
										</div>
									</div>
								</div>
	
								<div class="row">
									<div class="col-lg-6 col-sm-6 col-12">
										<div class="mb-3 add-product">
										   <label class="form-label">Meta Title</label>
										   <input type="text" class="form-control" data-state="meta_title">
										</div>
									</div>
									<div class="col-lg-6 col-sm-6 col-12">
										<div class="input-blocks summer-description-box transfer mb-3">
											 <label>Meta Description</label>
											<textarea class="form-control h-100" rows="3" data-state="meta_description"></textarea>
										</div>
									</div>
								</div>
								<div class="row">
									<div class="col-lg-3 col-sm-6 col-12">
									   <div class="mb-3 add-product">
											<label class="form-label">UOM</label>
											<select class="form-select" xdata-select2-id="select2-data-19-ser7"
												tabindex="-1" aria-hidden="true" data-state="uom_id">
											</select>
										</div>
									</div>
									<div class="col-lg-3 col-sm-6 col-12">
										<div class="mb-3 add-product">
											<label class="form-label">Is Active</label>
											<select data-state="is_active" class="form-select">
												<option value="true">Yes</option>
												<option value="false">No</option>
											</select>
										</div>
									</div>
									<div class="col-lg-3 col-sm-6 col-12">
										<div class="mb-3 add-product">
											<label class="form-label">Is Available</label>
											<select data-state="is_available" class="form-select">
												<option value="true">Yes</option>
												<option value="false">No</option>
											</select>
										</div>
									</div>
									 <div class="col-lg-3 col-sm-6 col-12">
										<div class="mb-3 add-product">
											<label class="form-label">Is Limited</label>
											<select data-state="is_limited" class="form-select">
												<option value="true">Yes</option>
												<option value="false">No</option>
											</select>
										</div>
									</div>
								</div>
	
								<div class="row">
									<div class="col-lg-3 col-sm-6 col-12">
										 <div class="mb-3 add-product">
											<label class="form-label">Is Discontinued</label>
											 <select data-state="is_discontinued" class="form-select">
												 <option value="true">Yes</option>
												 <option value="false">No</option>
											 </select>
										</div>
									</div>
									<div class="col-lg-3 col-sm-6 col-12">
										 <div class="mb-3 add-product">
											<label class="form-label">Availability</label>
											 <select data-state="availability_id" class="form-select">
												<option value="1">Available</option>
											</select>
										</div>
									</div>
									 <div class="col-lg-6 col-sm-6 col-12">
										<div class="input-blocks add-product list">
											<label>SKU</label>
											<input type="text" class="form-control list" placeholder="Enter SKU">
											<button type="submit" class="btn btn-primaryadd">
												Generate Code
											</button>
										</div>
									</div>
								</div>
								
								<div class="row">
									<div class="col-lg-6 col-sm-6 col-12">
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
	
								
							</div>
						</div>
					</div>
				</div>
				 <!-- <div class="accordion-card-one accordion" id="accordionExample2">
									<div class="accordion-item">
										<div class="accordion-header" id="headingTwo">
										<div class="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-controls="collapseTwo">
											<div class="text-editor add-list">
												<div class="addproduct-icon list icon">
													<h5><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-life-buoy add-info"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line><line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line></svg><span>Pricing & Stocks</span></h5>
													<a href="javascript:void(0);"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down chevron-down-add"><polyline points="6 9 12 15 18 9"></polyline></svg></a>
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
																<span class="checkmark"></span> Single Product</span>
															</li>
															<li class="nav-item" role="presentation">
																<span class="custom_radio me-2 mb-0" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false" tabindex="-1">
																<input type="radio" class="form-control" name="sign">
																<span class="checkmark"></span> Variable Product</span>
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
																			<a class="btn btn-filter" data-bs-toggle="modal" data-bs-target="#add-units"><i class="feather feather-plus-circle"></i></a>
																		</div>
																	</div>
																</div>
															</div>
															<div class="selected-hide-color" id="input-show">
																<div class="row align-items-center">
																	<div class="col-sm-10">
																		<div class="input-blocks">
																			<div class="bootstrap-tagsinput"><span class="tag label label-info">red<span data-role="remove"></span></span> <span class="tag label label-info"> black<span data-role="remove"></span></span> <input type="text" placeholder=""></div><input class="input-tags form-control" id="inputBox" type="text" data-role="tagsinput" name="specialist" value="red, black" style="display: none;">
																		</div>
																	</div>
																	<div class="col-lg-2">
																		<div class="input-blocks ">
																			<a href="javascript:void(0);" class="remove-color"><i class="far fa-trash-alt"></i></a>
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
																				<span class="quantity-btn"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-minus-circle feather-search"><circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line></svg></span>
																				<input type="text" class="quntity-input" value="2">
																				<span class="quantity-btn">+<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle plus-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg></span>
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
																				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus feather-edit"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
																			</a>
																			<a class="confirm-text p-2" href="javascript:void(0);">
																				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
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
																			<span class="quantity-btn"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-minus-circle feather-search"><circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line></svg></span>
																			<input type="text" class="quntity-input" value="3">
																			<span class="quantity-btn">+<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle plus-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg></span>
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
																			<a class="me-2 p-2" href="#" data-bs-toggle="modal" data-bs-target="#edit-units">
																				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus feather-edit"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
																			</a>
																			<a class="confirm-text p-2" href="javascript:void(0);">
																				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
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
							</div> -->

							<div class="accordion-card-one accordion" id="accordionExample5">
								<div class="accordion-item">
									<div class="accordion-header" id="headingFive">
										<div class="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-controls="collapseFive" aria-expanded="true">
										<div class="text-editor add-list">
											<div class="addproduct-icon list">
												<h5><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-list add-info"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg><span>Attributes</span></h5>
												<a href="javascript:void(0);"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down chevron-down-add"><polyline points="6 9 12 15 18 9"></polyline></svg></a>
											</div>
										</div>
										</div>
									</div>
									<div id="collapseFive" class="accordion-collapse collapse show" aria-labelledby="headingFive" data-bs-parent="#accordionExample5" style="">
										<div class="accordion-body">
											<div class="text-editor add-list add">
												<div class="row">
													<div class="col-12 xcol-xxl-4 xcol-xl-6">
														<div class="card">
															<div class="card-header d-none">
																<div class="card-title">
																	Attributes
																</div>
															</div>
															<div class="card-body">
																<div class="tab-pane fade text-muted active show" id="pa_tab_pane" role="tabpanel" aria-labelledby="home-tab-1" tabindex="0">
																	<div id="pa_table" class="table-light">
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

        </div>
    </div>
    <div class="col-lg-12">
        <div class="btn-addproduct mb-4">
            <button id="btn_cancel_editor" type="button" class="btn btn-cancel me-2">Cancel</button>
            <button id="btn_save_editor" type="submit" class="btn btn-submit">Save</button>
        </div>
    </div>
    <input type="hidden" data-state="product_id" />

</form>																				

`;    }

    *script() {
        yield this.render(super.script());
    yield html`
<script>
    // class Page extends AdminLayout {
    //     constructor(params) {
    //         super(params);
    //     }

    //     async uponReady() {
    //         await super.uponReady();
	// 		await this.loadEditor(~/dbx/ecom/product/load_editor~, {});
	// 	}

    // }
    // page = new Page();


    class Page extends AdminLayout {
        constructor(params) {
            super(params);
        }

        // HANDLERS/ /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        async uponReady() {
            await super.uponReady();

            this.setHotState("ret_data"); // clarity, though, already called by MasterLayout::uponReady()....


			await this.loadEditor(~/dbx/ecom/product/load_editor~, {});

            if (this.state.ret_data.product_id < 1) {
                this.state.ret_data.product_detail = [];
            }

            // Filter and map data for regular products
            const paTableData = this.state.ret_data.product_detail;

            this.setupTabulator("pa_table", paTableData);


            // this.populateCombo(~[data-state="attrib_group_id"]~, this.state.view_collection["ecom.attrib_group"], "attrib_group_id", "title", this.state.ret_data.attrib_group_id);
            this.populateCombo(~[data-state="publication_status_id"]~, this.state.view_collection["cms.publication_status"], "publication_status_id", "title", this.state.ret_data.publication_status_id);
            this.populateCombo(~[data-state="category_id"]~, this.state.view_collection["ecom.category"], "category_id", "title", this.state.ret_data.category_id);
            this.populateCombo(~[data-state="department_id"]~, this.state.view_collection["ecom.department"], "department_id", "title", this.state.ret_data.department_id);
            this.populateCombo(~[data-state="brand_id"]`, this.state.view_collection["ecom.brand"], "brand_id", "title", this.state.ret_data.brand_id);
            this.populateCombo(`[data-state="shop_id"]`, this.state.view_collection["ecom.shop"], "shop_id", "title", this.state.ret_data.shop_id);
            this.populateCombo(`[data-state="uom_id"]`, this.state.view_collection["ecom.uom"], "uom_id", "title", this.state.ret_data.uom_id);
		
        }


		//NOTE: we are overriding MasterLayout::onClickSaveEditor(e){...}/
		async onClickSaveEditor(e) {
            e.preventDefault();
			e.stopPropagation();

            this.state.payload = {};

            // if (!(this.pa_table.validate() === true)) {
            //     throw "Please fill up the Prouct Attributes table accordingly."
            // }

            // if (!(this.pva_table.validate() === true)) {
            //     throw "Please fill up the Prouct Variant Attributes table accordingly."
            // }

            if (!this.validateTable(this.pa_table)) {
                throw (`Please fill up the entire Product Attribute table rows`);                            
            }


            const mpaTableData = this.getTabulatorData("pa_table", false); // Transform the data
            this.state.payload["product_detail"] = mpaTableData;

            // now, call the super
            await super.onClickSaveEditor(e);

        }			

        // METHODS/ /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        // validateTable(table) {
        //     const rows = table.getRows();
        //     for (const row of rows) {
        //         const data = row.getData();
        //         for (let field in data) {
        //             if (!data[field]) {
        //                 return false; // Row is incomplete
        //             }
        //         }
        //     }
        //     return true; // All rows are valid
        // }        

        validateTable(table) {
            const rows = table.getRows();

            for (const row of rows) {
                const data = row.getData();
                const visibleFirstColumnField = "attrib_group_id"; // Replace with your first column's field name
                
                // If the first column is filled, validate the rest of the row
                if (data[visibleFirstColumnField]) {
                    for (let field in data) {
                        if (field === "content") {
                            data[field] = data[field] || "";
                        }

                        if (field === "product_detail_id") {
                            data[field] = data[field] || 0;
                        }
                        if (field === "category_detail_id") {
                            data[field] = data[field] || 0;
                        }

                        // NOT WORKING PROPERLY
                        // if (!data[field]) {
                        //     return false; // Row is incomplete
                        // }
                        // FALLBACK:
                        if (data[field] === undefined || data[field] === null /* || data[field] === ""*/) {
                            return false; // Row is incomplete
                        }                        
                    }
                }
            }
            
            return true; // All rows are valid
        }

        setupTabulator(tableKey, data) {

            // Add the custom editor to Tabulator's editor definitions
            //Tabulator.editors.transportation = this.comboEditor;


            // Step 1: Map product_detail for Tabulator
            const tableData = (data||[]).map(detail => ({
                product_detail_id: detail.product_detail_id,
                category_detail_id: detail.category_detail_id,
                attrib_group_id: detail.attrib_group_id,
                attrib_id: detail.attrib_id,
                content: detail.content
            }));
            tableData.push({});

            const mAttrib = this.state.view_collection["ecom.attrib"].map(row => ({
                value: row.attrib_id,
                label: row.title,
            }));

            const mAttribGroup = this.state.view_collection["ecom.attrib_group"].map(row => ({
                value: row.attrib_group_id,
                label: row.title,
            }));

            //create Tabulator on DOM element with id "example-table"
            this[tableKey] = new Tabulator("#"+tableKey, {
                rowContextMenu:[
                    {
                        label:"Delete Row",
                        action:function(e, row){
                            row.delete();
                        },
                    },
                    {
                        label:"Add Row",
                        action:function(e, row){
                            //"this" is not working: this[tableKey].addData({});
                           page[tableKey].addData({}); // not working properly
                        }
                    },
                ],                
                validationMode:"highlight",
                height:205, // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
                data:tableData, //assign data to table
                layout:"fitColumns", //fit columns to width of table (optional)
                columns:[ //Define Table Columns
                    {title:"Product Detail ID", field:"product_detail_id", visible: false},
                    {title:"Category Detail ID", field:"category_detail_id", visible: false},
                    {
                        title:"Attribute Group", 
                        field:"attrib_group_id", 
                        editor:"list", 
                        editorParams: {
                            values: mAttribGroup

                        },
                        formatter: function (cell) {
                            // Map the stored id to the title using formattedGenderOptions
                            const value = cell.getValue(); // Stored value (e.g., "male")
                            const match = mAttribGroup.find(option => option.value === value);
                            //worked: return match ? match.label : ""; // Show title or fallback to "Unknown"
                            return match ? match.label : null; // Show title or fallback to "Unknown"
                        },
                        validator: "required",
                    },
                    {
                        title:"Attribute", 
                        field:"attrib_id", 
                        editor:"list", 
                        editorParams: {
                            values: mAttrib

                        },
                        formatter: function (cell) {
                            // Map the stored id to the title using formattedGenderOptions
                            const value = cell.getValue(); // Stored value (e.g., "male")
                            const match = mAttrib.find(option => option.value === value);
                            //worked: return match ? match.label : ""; // Show title or fallback to "Unknown"
                            return match ? match.label : null; // Show title or fallback to "Unknown"
                        },
                        validator: "required",

                    },
                    {title:"Content", field:"content", editor:"textarea", validator: "required"}
                ],
                validationFailed: (cell, value, validators) => {
                    throw (`Validation failed in column "~{cell.getColumn().getDefinition().title}"`);
                },
                cellEdited: function (cell) {
                    // Check if the entire row is valid after a cell is edited
                    const row = cell.getRow();
                    const data = row.getData();

                    // Check for empty or invalid values
                    let isRowValid = true;
                    for (let field in data) {
                        if (!data[field]) {
                            isRowValid = false;
                            break;
                        }
                    }

                    if (isRowValid) {
                        
                    } else {
                        
                    }
                },
                dataEdited: function () {
                    
                },                
            });



        }


        getTabulatorData(table, isProductVariant = false) {
            const rows = this[table].getRows();
            const visibleFirstColumnField = "attrib_group_id"; // Replace with your first column's field name

            // Filter rows where the first column is filled
            const filteredRows = rows.filter((row) => {
                const data = row.getData();
                return !!data[visibleFirstColumnField]; // Check if the first column is not empty or null
            });


            let myData= filteredRows.map(row => {
                let data =  row.getData();
                //if(data.attrib_group_id && data.attrib_id) {
                    return {
                        product_detail_id: data.product_detail_id||0,
                        category_detail_id: data.category_detail_id||0,
                        attrib_group_id: data.attrib_group_id,
                        attrib_id: data.attrib_id,
                        content: data.content
                    }
            });
            return myData;
        }		


    }
    
    class Tester extends Tdd {
        constructor(args) {
            super(args);
        }

        uponReady() {
            super.uponReady();

            //fillUp();
        }

        fillUp() {
            let form = {
                "title": "Test",
                "slug": "test",
                "description": "Test",
                "content": "Test",
                "meta_title": "Test",
                "meta_description": "Test",
                "is_product" : "true",
                "publication_status_id": "1"                
            }

            page.setState({...page.state, ret_data: form});

        }
    }

    class Simulator extends Sdd {
        constructor(args) {
            super(args)
        }

        uponReady() {
            super.uponReady();
        }

    }

    page = new Page();
    tdd = new Tester();
    sdd = new Simulator();



</script>
    `;    }
}
