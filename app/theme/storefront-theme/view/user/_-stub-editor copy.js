//`;namespace App\Views\User;
  
import UserLayout from "../user-layout";


export default class _StubEditor extends UserLayout {
	

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
					<form>
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

				let table = new DataTable(
					'#myDataTable', 
					{

						xbFilter: true,
						xsDom: 'fBtlpi',  
						xordering: true,
						xinitComplete: (settings, json)=>{
							$('.dataTables_filter').appendTo('#tableSearch');
							$('.dataTables_filter').appendTo('.search-input');

						},

						ajax: '/api/dtx/ecom/product/search',
						processing: false,
						serverSide: true,
						pageLength: 25,
						columns: [
							{
								title: "Select",
								data: null, // No specific data key for this column
								orderable: false,
								render: function () {
									return ~
										<label class="checkboxs">
											<input type="checkbox">
											<span class="checkmarks"></span>
										</label>
									~;
								}
							},
							{
								title: "Product",
								data: 'product',
								render: function (data, type, row) {
									return ~
										<div class="productimgname">
											<a href="javascript:void(0);" class="product-img stock-img">
												<img  loading="lazy" data-src="~{'/theme/dp/assets/images/products/product-img-1.jpg'}" alt="product">
											</a>
											<a href="javascript:void(0);">~{data||""}</a>
										</div>
									~;
								}
							},
							{ data: 'product_id', title: "Product ID" },
							{ data: 'category_title', title: "Category" },
							{ data: 'brand', title: "Brand" },
							{ data: 'price_min', title: "Price Min", render: $.fn.dataTable.render.number(',', '.', 2, '$') },
							{ data: 'unit', title: "Unit" },
							{ data: 'quantity', title: "Quantity" },
							{

								data: 'user', title: "Created by",
								render: function (data, type, row) {
									return ~
										<div class="userimgname">
											<a href="javascript:void(0);" class="product-img">
												<img  loading="lazy" data-src="~{'/theme/dp/assets/images/products/product-img-1.jpg'}" alt="user">
											</a>
											<a href="javascript:void(0);">~{data}</a>
										</div>
									~;
								}
							},
							{
								data: null, // No specific data key for this column
								title: "Action",
								orderable: false,
								render: function () {
									return ~
										<div class="edit-delete-action">
											<a class="me-2 edit-icon  p-2" href="#">
												<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>
												
												</svg>
											</a>
											<a class="me-2 p-2" href="#">
												<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit">
													<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
													<path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
												</svg>
											</a>
											<a class="confirm-text p-2" href="#" onclick="page.onClickDeleteRow(this)">
												<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2">
													<polyline points="3 6 5 6 21 6"></polyline>
													<path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
													<line x1="10" y1="11" x2="10" y2="17"></line>
													<line x1="14" y1="11" x2="14" y2="17"></line>
												</svg>
											</a>
										</div>
									~;
								},
								createdCell: function (td, cellData, rowData, row, col) {
									$(td).addClass('action-table-data'); // Add the desired class to the td element
								}


							}
						],
						initComplete: function() {
							// Append a combobox (select element) to the header of the 'Category' column
							this.api().columns(3).every(function() {
								var column = this;
								var select = $('<select class="form-select"><option value="">Categories</option></select>')
									.appendTo($(column.header()).empty()) // Clear and append to the header
									.on('change', function() {
										var val = $.fn.dataTable.util.escapeRegex($(this).val());
										column
											.search(val ? '^' + val + '$' : '', true, false)
											.draw();
								});

								// Populate the dropdown with unique values from the column

								let cat = [
									{"category_id": 1, "title": "One"},
									{"category_id": 2, "title": "Two"},
									{"category_id": 3, "title": "Three"},
								];
								cat.forEach(c => {
									select.append('<option value="' + c.category_id + '">' + c.title + '</option>');
								});
							});
						}
						
					}
				);


			}

						

		}
		page = new Page();


    </script>
`;
   }
}