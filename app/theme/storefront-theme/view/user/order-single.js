//`;namespace App\Views\User;
  
//use App\Views\MasterLayout;


export default class OrderSingle extends MasterLayout {
  

   *head() {
      // return html`
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
    //dd(session('order'));
yield html`


<div class="col-lg-9 col-md-8 col-12 mt-5">
	<div class=" mt-2">
				   <!-- row -->
				   <div class="row mb-8">
					  <div class="col-md-12">
						 <div class="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-4">
							<div>
							   <!-- page header -->
							   <h2>Order Single</h2>
							   <!-- breadcrumb -->
							   <nav aria-label="breadcrumb">
								  <ol class="breadcrumb mb-0">
									 <li class="breadcrumb-item"><a href="#" class="text-inherit">Dashboard</a></li>
									 <li class="breadcrumb-item active" aria-current="page">Order Single</li>
								  </ol>
							   </nav>
							</div>
							<!-- button -->
							<div>
							   <a href="/user/shopping/order" class="btn btn-primary">Back to all orders</a>
							</div>
						 </div>
					  </div>
				   </div>
				   <!-- row -->
				   <div class="row">
					  <div class="col-xl-12 col-12 mb-5">
						 <!-- card -->
						 <div class="card h-100 card-lg">
							<div class="card-body p-6">
							   <div class="d-md-flex justify-content-between">
								  <div class="d-flex align-items-center mb-2 mb-md-0">
									 <h2 class="mb-0" >Order ID: ${this.so["sales_id"]}</h2>
									 <span class="badge bg-light-warning text-dark-warning ms-2">Pending</span>
								  </div>
								  <!-- select option -->
								  <div class="d-md-flex">
									 <div class="mb-2 mb-md-0">
										<select class="form-select">
										   <option selected="">Status</option>
										   <option value="Success">Success</option>
										   <option value="Pending">Pending</option>
										   <option value="Cancel">Cancel</option>
										</select>
									 </div>
									 <!-- button -->
									 <div class="ms-md-3">
										<a href="#" class="btn btn-primary">Save</a>
										<a href="#" class="btn btn-secondary">Download Invoice</a>
									 </div>
								  </div>
							   </div>
							   <div class="mt-8">
								  <div class="row">
									 <!-- address -->
									 <div class="col-lg-4 col-md-4 col-12">
										<div class="mb-6">
										   <h6>Customer Details</h6>
										   <p class="mb-1 lh-lg">
                                           ${this.so["full_name"]}
											  <br>
                                   ${this.so["email"]}
											  <br>
                                   ${this.so["mobile"]}
										   </p>
										   <a href="#">View Profile</a>
										</div>
									 </div>
									 <!-- address -->
									 <div class="col-lg-4 col-md-4 col-12">
										<div class="mb-6">
										   <h6>Shipping Address</h6>
										   <p class="mb-1 lh-lg">
                                 ${this.so["full_name"]}
											  <br>
                                   ${this.so["sa"][0]["line1"]}
											  <br>
                                   ${this.so["sa"][0]["line2"]}
											  <br>
                                   ${this.so["sa"][0]["city"]} - ${this.so["sa"][0]["zip"]}, ${this.so["sa"][0]["country"]}
                                   <br>
											  Contact No. ${this.so["sa"][0]["mobile"]}
										   </p>
										</div>
									 </div>
									 <!-- address -->
									 <div class="col-lg-4 col-md-4 col-12">
										<div class="mb-6">
										   <h6>Order Details</h6>
										   <p class="mb-1 lh-lg">
											  Order ID:
											  <span class="text-dark">${this.so["sales_id"]}</span>
											  <br>
											  Order Date:
											  <span class="text-dark">${this.so["created_at"]}</span>
											  <br>
											  Order Total:
											  <span class="text-dark">${this.so["total"]}</span>
										   </p>
										</div>
									 </div>
								  </div>
							   </div>
							</div>
							<div class="row">
							   <div class="col-12">
								  <div class="table-responsive">
									 <!-- Table -->
									 <table class="table mb-0 text-nowrap table-centered">
										<!-- Table Head -->
										<thead class="bg-light">
										   <tr>
											  <th>Products</th>
											  <th >Price</th>
											  <th class="text-end" >Quantity</th>
											  <th class="text-end">Total</th>
										   </tr>
										</thead>
										<!-- tbody -->
										<tbody>

                              `; foreach(this.so["sales_detail"] as $s) { `
										   <tr>
											  <td>
												 <a href="#" class="text-inherit">
													<div class="d-flex align-items-center">
													   <div>
														  <!-- <img  loading="lazy" data-src="../assets/images/products/product-img-1.jpg" alt="" class="icon-shape icon-lg"> -->
													   </div>
													   <div class="ms-lg-4 mt-2 mt-lg-0">
														  <h5 class="mb-0 h6">`$s["inventory_title"] `</h5>
													   </div>
													</div>
												 </a>
											  </td>
											  <td><span class="text-body text-end">`$s["price"] `</span></td>
											  <td class="text-body text-end">`$s["quantity"] `</td>
											  <td class="text-body text-end">`$s["subtotal"] `</td>
										   </tr>
                              `; } `

										   <tr>
											  <td class="border-bottom-0 pb-0"></td>
											  <td class="border-bottom-0 pb-0"></td>
											  <td colspan="1" class="fw-medium text-dark">
												 <!-- text -->
												 Sub Total :
											  </td>
											  <td class="fw-medium text-dark text-end">
												 <!-- text -->
												 ${this.so["subtotal"]}
											  </td>
										   </tr>
										   <tr>
											  <td class="border-bottom-0 pb-0"></td>
											  <td class="border-bottom-0 pb-0"></td>
											  <td colspan="1" class="fw-medium text-dark ">
												 <!-- text -->
												 Shipping Cost
											  </td>
											  <td class="fw-medium text-dark text-end">
												 <!-- text -->
												 ${this.so["shipping_charge"]}
											  </td>
										   </tr>
	
										   <tr>
											  <td></td>
											  <td></td>
											  <td colspan="1" class="fw-semibold text-dark">
												 <!-- text -->
												  Total
											  </td>
											  <td class="fw-semibold text-dark text-end">
												 <!-- text -->
												 ${this.so["total"]}
											  </td>
										   </tr>
										</tbody>
									 </table>
								  </div>
							   </div>
							</div>
							<div class="card-body p-6">
							   <div class="row">
								  <div class="col-md-6 mb-4 mb-lg-0">
									 <h6>Payment Info</h6>
									 <span>Cash on Delivery</span>
								  </div>
								  <div class="col-md-6 d-none">
									 <h5>Notes</h5>
									 <textarea class="form-control mb-3" rows="3" placeholder="Write note for order"></textarea>
									 <a href="#" class="btn btn-primary">Save Notes</a>
								  </div>
							   </div>
							</div>
						 </div>
					  </div>
				   </div>
				</div>
	</div>
`;        
   }
   *script() {
	yield this.render(super.script());

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