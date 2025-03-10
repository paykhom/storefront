////`;namespace App\Views\Admin;
  
import AdminLayout from '../admin-layout';


export default class ProductPaginator extends AdminLayout {

  

   *head() {
      // return html`
      //     <title>Paykhom Mondi</title
      //     <meta name="title" content="Paykhom Mondi" />

      //     <meta name="description" content="Paykhom Mondi" />

      //     <meta name="keywords" content="Paykhom Mondi" />


         
      //     `;
   }

   *style() {
yield html`
      <style>
      </style>

`;
   }

    
  *content() {
    //dd(session('order'));
yield html`

					<div class="card table-list-card">
						<div class="card-body">
							<div class="table-top">
								<div class="search-set">
									<div class="search-input">
										<a href="#" class="btn btn-searchset"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></a>
									<div id="DataTables_Table_0_filter" class="dataTables_filter"><label> <input type="search" class="form-control form-control-sm" placeholder="Search" aria-controls="DataTables_Table_0"></label></div><div id="DataTables_Table_1_filter" class="dataTables_filter"><label> <input type="search" class="form-control form-control-sm" placeholder="Search" aria-controls="DataTables_Table_1"></label></div><div id="DataTables_Table_2_filter" class="dataTables_filter"><label> <input type="search" class="form-control form-control-sm" placeholder="Search" aria-controls="DataTables_Table_2"></label></div><div id="DataTables_Table_3_filter" class="dataTables_filter"><label> <input type="search" class="form-control form-control-sm" placeholder="Search" aria-controls="DataTables_Table_3"></label></div><div id="DataTables_Table_4_filter" class="dataTables_filter"><label> <input type="search" class="form-control form-control-sm" placeholder="Search" aria-controls="DataTables_Table_4"></label></div></div>
								</div>
								<div class="search-path">
									<div class="d-flex align-items-center">
										<a class="btn btn-filter" id="filter_search">
											<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-filter filter-icon"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
											<span><img  loading="lazy" data-src="/theme/dp/assets/img/icons/closes.svg" alt="img"></span>
										</a>
										
									</div>
									
								</div>
								<div class="form-sort">
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sliders info-img"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>
									<select class="select select2-hidden-accessible" data-select2-id="select2-data-1-q21e" tabindex="-1" aria-hidden="true">
										<option data-select2-id="select2-data-3-0tei">Sort by Date</option>
										<option>07 09 23</option>
										<option>21 09 23</option>
									</select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="select2-data-2-sns7" style="width: 100%;"><span class="selection  d-none"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-flk4-container" aria-controls="select2-flk4-container"><span class="select2-selection__rendered" id="select2-flk4-container" role="textbox" aria-readonly="true" title="Sort by Date">Sort by Date</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
								</div>
							</div>
							<!-- /Filter -->
							<div class="card" id="filter_inputs">
								<div class="card-body pb-0">
									<div class="row">
										<div class="col-lg-3 col-sm-6 col-12">
											<div class="input-blocks">
												<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user info-img"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
												<select class="select select2-hidden-accessible" data-select2-id="select2-data-4-g9ik" tabindex="-1" aria-hidden="true">
													<option data-select2-id="select2-data-6-p3va">Choose Customer Name</option>
													<option>Macbook pro</option>
													<option>Orange</option>
												</select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="select2-data-5-a6dl" style="width: 100%;"><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-56mg-container" aria-controls="select2-56mg-container"><span class="select2-selection__rendered" id="select2-56mg-container" role="textbox" aria-readonly="true" title="Choose Customer Name">Choose Customer Name</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
											</div>
										</div>
										<div class="col-lg-2 col-sm-6 col-12">
											<div class="input-blocks">
												<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-stop-circle info-img"><circle cx="12" cy="12" r="10"></circle><rect x="9" y="9" width="6" height="6"></rect></svg>
												<select class="select select2-hidden-accessible" data-select2-id="select2-data-7-nuzn" tabindex="-1" aria-hidden="true">
													<option data-select2-id="select2-data-9-0927">Choose Status</option>
													<option>Computers</option>
													<option>Fruits</option>
												</select>
                                    <span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="select2-data-8-clxd" style="width: 100%;">
                                       <span class="selection">
                                          <span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-y446-container" aria-controls="select2-y446-container">
                                             <span class="select2-selection__rendered" id="select2-y446-container" role="textbox" aria-readonly="true" title="Choose Status">Choose Status</span>
                                             <span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
											</div>
										</div>
										<div class="col-lg-2 col-sm-6 col-12">
											<div class="input-blocks">
												<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file-text info-img"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
												<input type="text" placeholder="Enter Reference" class="form-control">
											</div>
										</div>
										<div class="col-lg-3 col-sm-6 col-12">
											<div class="input-blocks">
												<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-stop-circle info-img"><circle cx="12" cy="12" r="10"></circle><rect x="9" y="9" width="6" height="6"></rect></svg>
												<select class="select select2-hidden-accessible" data-select2-id="select2-data-10-8ax3" tabindex="-1" aria-hidden="true">
													<option data-select2-id="select2-data-12-wju8">Choose Payment Status</option>
													<option>Computers</option>
													<option>Fruits</option>
												</select>
                                    <span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="select2-data-11-sgsz" style="width: 100%;">
                                       <span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-xuui-container" aria-controls="select2-xuui-container"><span class="select2-selection__rendered" id="select2-xuui-container" role="textbox" aria-readonly="true" title="Choose Payment Status">Choose Payment Status</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
											</div>
										</div>
										<div class="col-lg-2 col-sm-6 col-12">
											<div class="input-blocks">
												<a class="btn btn-filters ms-auto"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg> Search </a>
											</div>
										</div>
									</div>
								</div>
							</div>
							<!-- /Filter -->
							<div class="table-responsive">
								<div id="DataTables_Table_0_wrapper" class="dataTables_wrapper dt-bootstrap5 no-footer table-responsive">
									<table class="table datanew dataTable no-footer" id="DataTables_Table_0" aria-describedby="DataTables_Table_0_info">
									<thead>
										<tr>
                                 <th class="no-sort sorting sorting_asc" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-sort="ascending" aria-label=": activate to sort column descending" style="width: 48.2917px;">
												<label class="checkboxs">
													<input type="checkbox" id="select-all">
													<span class="checkmarks"></span>
												</label>
											</th>
                                 <th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="Customer Name: activate to sort column ascending" style="width: 137.333px;">
                                    Customer Name
                                 </th>
                                 <th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="Reference: activate to sort column ascending" style="width: 87.4306px;">
                                    Reference
                                 </th>
                                 <th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="Date: activate to sort column ascending" style="width: 101.681px;">
                                    Date
                                 </th>
                                 <th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="Status: activate to sort column ascending" style="width: 113.722px;">
                                    Status
                                 </th>
                                 <th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="Grand Total: activate to sort column ascending" style="width: 102.042px;">
                                    Grand Total
                                 </th>
                                 <th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="Paid: activate to sort column ascending" style="width: 45.7083px;">
                                    Paid
                                 </th>
                                 <th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="Due: activate to sort column ascending" style="width: 45.7083px;">
                                    Due
                                 </th>
                                 <th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="Payment Status: activate to sort column ascending" style="width: 134.806px;">
                                    Payment Status
                                 </th>
                                 <th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="Biller: activate to sort column ascending" style="width: 51.2361px;">
                                    Biller
                                 </th>
                                 <th class="text-center sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="Action: activate to sort column ascending" style="width: 59.375px;">
                                    Action
                                 </th>
                              </tr>
									</thead>
									<tbody class="sales-list">
										
										
										
										
										
										
										
`; 
foreach(this.so as $s) { 
	yield html`										
										
										
									<tr class="odd">
											<td class="sorting_1">
												<label class="checkboxs">
													<input type="checkbox">
													<span class="checkmarks"></span>
												</label>
											</td>
											<td>`$s["full_name"] `</td>
											<td>`$s["sales_order_id"] `</td>
											<td>`$s["created_at"] `</td>
											<td><span class="badge badge-bgsuccess">`$s["sales_order_status_title"] `</span></td>
											<td>`$s["total"] `</td>
											<td>`$s["payment_amount"] `</td>
											<td>`$s["total"] - $s["payment_amount"] `</td>
											<td><span class="badge badge-linesuccess">Unpaid</span></td>
											<td>Admin</td>
											<td class="text-center">
												<a class="action-set" href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="true">
													<i class="fa fa-ellipsis-v" aria-hidden="true"></i>
												</a>
												<ul class="dropdown-menu">
													<li>
														<a href="/admin/module/order/`$s["sales_order_id"] `" class="dropdown-item" xdata-bs-toggle="modal" xdata-bs-target="#sales-details-new"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye info-img"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>Sale Detail</a>
													</li>
													<li>
														<a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#edit-sales-new"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit info-img"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>Edit Sale</a>
													</li>
													<li>
														<a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#showpayment"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-dollar-sign info-img"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>Show Payments</a>
													</li>
													<li>
														<a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#createpayment"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle info-img"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>Create Payment</a>
													</li>
													<li>
														<a href="javascript:void(0);" class="dropdown-item"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-download info-img"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>Download pdf</a>
													</li>	
													<li>
														<a href="javascript:void(0);" class="dropdown-item confirm-text mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2 info-img"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>Delete Sale</a>
													</li>								
												</ul>
											</td>
										</tr>

`; } `



                           </tbody>
						</table>
<!-- 
						<div class="dataTables_length" id="DataTables_Table_0_length"><label><select name="DataTables_Table_0_length" aria-controls="DataTables_Table_0" class="form-select form-select-sm"><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select></label>
						</div> -->

<!-- 						
						<div class="dataTables_paginate paging_simple_numbers" id="DataTables_Table_0_paginate"><ul class="pagination"><li class="paginate_button page-item previous disabled" id="DataTables_Table_0_previous"><a aria-controls="DataTables_Table_0" aria-disabled="true" role="link" data-dt-idx="previous" tabindex="-1" class="page-link"><i class="fa fa-angle-left"></i> </a></li><li class="paginate_button page-item active"><a href="#" aria-controls="DataTables_Table_0" role="link" aria-current="page" data-dt-idx="0" tabindex="0" class="page-link">1</a></li><li class="paginate_button page-item next disabled" id="DataTables_Table_0_next"><a aria-controls="DataTables_Table_0" aria-disabled="true" role="link" data-dt-idx="next" tabindex="-1" class="page-link"> <i class=" fa fa-angle-right"></i></a></li></ul>
						</div>
-->
						<!-- 
						<div class="dataTables_info" id="DataTables_Table_0_info" role="status" aria-live="polite">1 - 10 of 10 items

						</div> 
						-->
					</div>
				</div>
			</div>
		</div>

`;        
   }

   *script() {
yield html`
      <script>
export default class Page extends MasterLayout {



   constructor(params) {
      super(params);

   }


   async hookup() {
      await super.hookup();

      //on(..., ..., ...)

   }

   async uponReady() {
      await super.uponReady()
   }

}
   page = new Page();

      </script>
`;
   }
}