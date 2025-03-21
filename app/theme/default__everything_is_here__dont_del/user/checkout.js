//`;namespace App\Views\User;
  
import MarketplaceLayout from "../marketplace-layout";


export default class Checkout extends MarketplaceLayout {
  

   *head() {
      yield html`
     `;
   }

   *style() {
yield html`
      <style>
      </style>

`;
   }

   



   
    
  *content() {
    // console.log(JSON.stringify(this.checkout));IT WORKS!!
    //dd(session('order'));
yield html`

<main>
			<!-- section-->
			<div class="mt-4">
				<div class="container-fluid">
					<!-- row -->
					<div class="row">
						<!-- col -->
						<div class="col-12">
							<!-- breadcrumb -->
							<nav aria-label="breadcrumb">
								<ol class="breadcrumb mb-0">
									<li class="breadcrumb-item"><a href="#!">Home</a></li>
									<li class="breadcrumb-item active" aria-current="page">Shop Checkout</li>
								</ol>
							</nav>
						</div>
					</div>
				</div>
			</div>
			<!-- section -->
			<section class="mb-lg-14 mb-8 mt-8">
                <form id = "frmCheckout" class="needs-validation xwas-validated" novalidate>
				<div class="container-fluid">

					<!-- row -->
					<div class="row">
						<!-- col -->
						<div class="col-12">
							<div>
								<div class="xmb-8">
									<!-- text -->
									<h1 id = "sim1" class="fw-bold mb-0">Cart</h1>
								</div>
							</div>
						</div>
					</div>
					

					<div class="row">
					    <div class="col-lg-8 col-md-7">
					       <div class="xpy-3">
					          <!-- alert -->
					          <div class="alert alert-danger p-2 d-none" role="alert">
					             You’ve got FREE delivery. Start <a href="#!" class="alert-link">checkout now!</a>
					          </div>
					          <ul class="list-group xlist-group-flush">
					             <!-- list group -->

`; 
//foreach(this.checkout["cart"]??[] as $item) { 
// for(const item of this.checkout["cart"]) {
for (const item of Object.values(this.checkout["cart"] ?? {})) {

    yield html`
                                 
					             <li class="list-group-item py-3 py-lg-0 px-0 border-top">
					                <!-- row -->
					                <div class="row align-items-center">
					                   <div class="col-3 col-md-2">
					                      <!-- img --> <img  loading="lazy" data-src="${item["product_media_path"]}" alt="Ecommerce"
					 class="img-fluid">
					                   </div>
					                   <div class="col-4 col-md-5">
					                      <!-- title -->
					                      <a href="#" class="text-inherit">
					 <h6 class="mb-0">${item["title"]}</h6>
					                      </a>
					                      <span><small class="text-muted">.98 / lb</small></span>
					                      <!-- text -->
					                      <!-- <div class="mt-2 small lh-1">
                                            <a href="#!" class="text-decoration-none text-inherit">
                                                <span
                                                class="me-1 align-text-bottom">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                                                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                    class="feather feather-trash-2 text-success">
                                                    <polyline points="3 6 5 6 21 6"></polyline>
                                                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                                                    </path>
                                                    <line x1="10" y1="11" x2="10" y2="17"></line>
                                                    <line x1="14" y1="11" x2="14" y2="17"></line>
                                                </svg>
                                                </span>
                                                    <span class="text-muted d-none">Remove</span>
                                            </a>
                                                </div> -->
                                                </div>
                                            <!-- input group -->
                                            <div class="col-3 col-md-3 col-lg-2">
                                                <!-- input -->
                                                <div class="input-group input-spinner  d-none">
                                                    <input type="button" value="-" class="button-minus  btn  btn-sm " data-field="quantity">
                                                    <input type="number" step="1" max="10" value="1" name="quantity" class="quantity-field form-control-sm form-input   ">
                                                    <input type="button" value="+" class="button-plus btn btn-sm " data-field="quantity">
                                                </div>
                                            </div>
                                            <!-- price -->
                                            <div class="col-2 text-lg-end text-start text-md-end col-md-2">
                                                <span class="fw-bold">${item["rate"]}</span>
                                            </div>
                                        </div>
                                    </li>

`; } 

yield html`
					</ul>
					<!-- btn -->
					  <div class="d-flex justify-content-between mt-4 d-none">
					     <a href="#!" class="btn btn-primary">Continue Shopping</a>
					     <a href="#!" class="btn btn-dark">Update Cart</a>
					  </div>
					 </div>
					   </div>

                       
`; 
if (((this.checkout["cart"]).length) > 0) { 
    yield html`

					   <!-- sidebar -->
					   <div class="col-12 col-lg-4 col-md-5">
					      <!-- card -->
					      <div class="mb-5 card xmt-6">
					         <div class="card-body p-6">
					  <!-- heading -->
					  <h2 class="h5 mb-4">Summary</h2>
					  <div class="card mb-2">
					     <!-- list group -->
					     <ul class="list-group list-group-flush">
					        <!-- list group item -->
					        <li class="list-group-item d-flex justify-content-between align-items-start">
					           <div class="me-auto">
					              <div>Item Subtotal</div>
					           </div>
					           <span>${this.checkout["total_amount"]||0}</span>
					        </li>
					        <!-- list group item -->
					   <li class="list-group-item d-flex justify-content-between align-items-start">
					      <div class="me-auto">
					         <div>Service Fee</div>
					      </div>
					      <span>${this.checkout["total_delivery_charge"]||0}</span>
					   </li>
					   <!-- list group item -->
					   <li class="list-group-item d-flex justify-content-between align-items-start">
					      <div class="me-auto">
					         <div class="fw-bold">Total</div>
					      </div>
					      <span class="fw-bold">${this.checkout["total_grand"]||0}</span>
					   </li>
					    </ul>
					 </div>
					 <div class="d-grid mb-1 mt-4 d-none">
					    <!-- btn -->
					    <button class="btn btn-primary btn-lg d-flex justify-content-between align-items-center" type="submit">
					    Go to Checkout <span class="fw-bold">${this.checkout["cart"]["total_grand"]||0}</span></button>
					 </div>
					 <!-- text -->
					 <p><small>By placing your order, you agree to be bound by the Freshcart <a href="#!">Terms of Service</a>
					    and <a href="#!">Privacy Policy.</a> </small>
					 </p>
					 <!-- heading -->
					    <div class="mt-8 d-none">
					       <h2 class="h5 mb-3">Add Promo or Gift Card</h2>
					       <form>
					          <div class="mb-2">
					             <!-- input -->
					             <label for="giftcard" class="form-label sr-only">Email address</label>
					             <input type="text" class="form-control" id="giftcard" placeholder="Promo or Gift Card">
					          </div>
					          <!-- btn -->
					          <div class="d-grid"><button type="submit" class="btn btn-outline-dark mb-1">Redeem</button></div>
					          <p class="text-muted mb-0"> <small>Terms & Conditions apply</small></p>
					       </form>
					    </div>
					  </div>
					 </div>
					</div>

`; } 
yield html`


					</div>

					<!-- row -->
					<div class="row">
						<!-- col -->
						<div class="col-12">
							<div>
								<div class="xmb-8">
									<!-- text -->
									<h1 id = "sim2" class="fw-bold mb-0">Checkout</h1>
								</div>
							</div>
						</div>
					</div>
                    <!-- row -->
                    <div class="row">
                    <div class="col-xl-6 col-lg-6 col-md-12">
                            <!-- accordion -->
                            <div class="accordion accordion-flush" id="accordionAdddress">
                                <!-- accordion item -->
                                <div class="accordion-item py-4">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <!-- heading one -->
                                        <a href="#" class="fs-5 text-inherit h4 collapsed" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                            <i class="feather-icon icon-map-pin me-2 text-muted"></i>
                                            Billing Address
                                        </a>
                                    </div>
                                    <div id="flush-collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionFlushExample" style="">
                                    <div class="row g-3">
                                            <!-- col -->
                                            <div class="col-12">
                                                <input required id = "ba_first_name" type="text" class="form-control" placeholder="First name" aria-label="First name" required="" data-validation = "required">
                                            </div>
                                            <!-- col -->
                                            <div class="col-12">
                                                <input required id = "ba_last_name" type="text" class="form-control" placeholder="Last name" aria-label="Last name" required="" data-validation = "required">
                                            </div>
                                            <!-- col -->
                                            <div class="col-12">
                                                <input required id = "ba_line1" type="text" class="form-control" placeholder="Address Line 1" data-validation = "required">
                                            </div>
                                            <div class="col-12">
                                                <!-- button -->
                                                <input id = "ba_line2" type="text" class="form-control" placeholder="Address Line 2">
                                            </div>
                                            <div class="col-12">
                                                <!-- button -->
                                                <select required id = "ba_city" class="form-select"  data-validation = "required" data-validation = "required">
                                                    <option value="" selected="" disabled="">(Select)</option>
                                                    <option value="Bagerhat">Bagerhat</option>
                                                    <option value="Bandarban">Bandarban</option>
                                                    <option value="Barguna">Barguna</option>
                                                    <option value="Barishal">Barishal</option>
                                                    <option value="Bhola">Bhola</option>
                                                    <option value="Bogura">Bogura</option>
                                                    <option value="Brahmanbaria">Brahmanbaria</option>
                                                    <option value="Chandpur">Chandpur</option>
                                                    <option value="Chapai Nawabganj">Chapai Nawabganj</option>
                                                    <option value="Chattogram">Chattogram</option>
                                                    <option value="Chuadanga">Chuadanga</option>
                                                    <option value="Cox's Bazar">Cox's Bazar</option>
                                                    <option value="Cumilla">Cumilla</option>
                                                    <option value="Dhaka">Dhaka</option>
                                                    <option value="Dinajpur">Dinajpur</option>
                                                    <option value="Faridpur">Faridpur</option>
                                                    <option value="Feni">Feni</option>
                                                    <option value="Gaibandha">Gaibandha</option>
                                                    <option value="Gazipur">Gazipur</option>
                                                    <option value="Gopalganj">Gopalganj</option>
                                                    <option value="Habiganj">Habiganj</option>
                                                    <option value="Jamalpur">Jamalpur</option>
                                                    <option value="Jashore">Jashore</option>
                                                    <option value="Jhalakathi">Jhalakathi</option>
                                                    <option value="Jhenaidah">Jhenaidah</option>
                                                    <option value="Joypurhat">Joypurhat</option>
                                                    <option value="Khagrachhari">Khagrachhari</option>
                                                    <option value="Khulna">Khulna</option>
                                                    <option value="Kishoreganj">Kishoreganj</option>
                                                    <option value="Kurigram">Kurigram</option>
                                                    <option value="Kushtia">Kushtia</option>
                                                    <option value="Lakshmipur">Lakshmipur</option>
                                                    <option value="Lalmonirhat">Lalmonirhat</option>
                                                    <option value="Madaripur">Madaripur</option>
                                                    <option value="Magura">Magura</option>
                                                    <option value="Manikganj">Manikganj</option>
                                                    <option value="Meherpur">Meherpur</option>
                                                    <option value="Moulvibazar">Moulvibazar</option>
                                                    <option value="Munshiganj">Munshiganj</option>
                                                    <option value="Mymensingh">Mymensingh</option>
                                                    <option value="Naogaon">Naogaon</option>
                                                    <option value="Narail">Narail</option>
                                                    <option value="Narayanganj">Narayanganj</option>
                                                    <option value="Narsingdi">Narsingdi</option>
                                                    <option value="Natore">Natore</option>
                                                    <option value="Netrokona">Netrokona</option>
                                                    <option value="Nilphamari">Nilphamari</option>
                                                    <option value="Noakhali">Noakhali</option>
                                                    <option value="Pabna">Pabna</option>
                                                    <option value="Panchagarh">Panchagarh</option>
                                                    <option value="Patuakhali">Patuakhali</option>
                                                    <option value="Pirojpur">Pirojpur</option>
                                                    <option value="Rajbari">Rajbari</option>
                                                    <option value="Rajshahi">Rajshahi</option>
                                                    <option value="Rangamati">Rangamati</option>
                                                    <option value="Rangpur">Rangpur</option>
                                                    <option value="Satkhira">Satkhira</option>
                                                    <option value="Shariatpur">Shariatpur</option>
                                                    <option value="Sherpur">Sherpur</option>
                                                    <option value="Sirajganj">Sirajganj</option>
                                                    <option value="Sunamganj">Sunamganj</option>
                                                    <option value="Sylhet">Sylhet</option>
                                                    <option value="Tangail">Tangail</option>
                                                    <option value="Thakurgaon">Thakurgaon</option>
                                                </select>
                                            </div>
                                            <div class="col-12">
                                                <!-- button -->
                                                <input required id = "ba_zip" type="text" class="form-control" placeholder="Zip Code" data-validation = "required">
                                            </div>
                                            
                                            <div class="col-12">
                                                <!-- button -->
                                                <select required id = "ba_country" class="form-select" data-validation = "required">
                                                    <option selected value="bd">Bangladesh</option>
                                                </select>
                                            </div>



                                            <div class="col-12">
                                                <!-- button -->
                                                <input required id = "ba_mobile" type="tel" class="form-control" placeholder="Mobile Number" data-validation = "required">
                                            </div>
                                            <div class="col-12">
                                                <!-- button -->
                                                <input required id = "ba_email" type="email" class="form-control" placeholder="Email" data-validation = "required">
                                            </div>

                                            <!-- <div class="mt-5 d-flex justify-content-end">
                                                
                                                <a href="#" class="btn btn-primary ms-2" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="true" aria-controls="flush-collapseTwo">Next</a>
                                            </div> -->

                                        </div>
                                    </div>
                                </div>

                                <div class="mb-4 !mb-0 mt-5 flex items-center gap-2.5 d-none">
                                    <input type="checkbox" name="billing.sa_as_ba" class="peer sr-only" id="sa_as_ba"
                                        for="sa_as_ba" value="1">

                                    <label class="icon-uncheck peer-checked:icon-check-box cursor-pointer text-2xl peer-checked:text-navyBlue"
                                        id="sa_as_ba" for="sa_as_ba" checked="false"></label>

                                    <label class="cursor-pointer select-none text-base text-[#6E6E6E] max-sm:text-xs ltr:pl-0 rtl:pr-0"
                                        for="sa_as_ba"> Use same address for shipping? </label>

                                </div>







                            </div>
                        </div>


                        <div class="col-xl-6 col-lg-6 col-md-12">
                            <!-- accordion -->
                            <div class="accordion accordion-flush" id="accordionOther">
                                <!-- accordion item -->
                                <div class="accordion-item py-4">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <!-- heading one -->
                                        <a href="#" class="fs-5 text-inherit h4 collapsed" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                            <i class="feather-icon icon-map-pin me-2 text-muted"></i>
                                            Shipping Address
                                        </a>
                                    </div>
                                    <div id="flush-collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionFlushExample" style="">
                                    <div class="row g-3">
                                            <!-- col -->
                                            <div class="col-12">
                                                <input required id = "sa_first_name" type="text" class="form-control" placeholder="First name" aria-label="First name" required="" data-validation = "required">
                                            </div>
                                            <!-- col -->
                                            <div class="col-12">
                                                <input required id = "sa_last_name" type="text" class="form-control" placeholder="Last name" aria-label="Last name" required="" data-validation = "required">
                                            </div>
                                            <!-- col -->
                                            <div class="col-12">
                                                <input required id = "sa_line1" type="text" class="form-control" placeholder="Address Line 1" data-validation = "required">
                                            </div>
                                            <div class="col-12">
                                                <!-- button -->
                                                <input id = "sa_line2" type="text" class="form-control" placeholder="Address Line 2">
                                            </div>
                                            <div class="col-12">
                                                <!-- button -->
                                                <select required id = "sa_city" class="form-select"  data-validation = "required" data-validation = "required">
                                                    <option value="" selected="" disabled="">(Select)</option>
                                                    <option value="Bagerhat">Bagerhat</option>
                                                    <option value="Bandarban">Bandarban</option>
                                                    <option value="Barguna">Barguna</option>
                                                    <option value="Barishal">Barishal</option>
                                                    <option value="Bhola">Bhola</option>
                                                    <option value="Bogura">Bogura</option>
                                                    <option value="Brahmanbaria">Brahmanbaria</option>
                                                    <option value="Chandpur">Chandpur</option>
                                                    <option value="Chapai Nawabganj">Chapai Nawabganj</option>
                                                    <option value="Chattogram">Chattogram</option>
                                                    <option value="Chuadanga">Chuadanga</option>
                                                    <option value="Cox's Bazar">Cox's Bazar</option>
                                                    <option value="Cumilla">Cumilla</option>
                                                    <option value="Dhaka">Dhaka</option>
                                                    <option value="Dinajpur">Dinajpur</option>
                                                    <option value="Faridpur">Faridpur</option>
                                                    <option value="Feni">Feni</option>
                                                    <option value="Gaibandha">Gaibandha</option>
                                                    <option value="Gazipur">Gazipur</option>
                                                    <option value="Gopalganj">Gopalganj</option>
                                                    <option value="Habiganj">Habiganj</option>
                                                    <option value="Jamalpur">Jamalpur</option>
                                                    <option value="Jashore">Jashore</option>
                                                    <option value="Jhalakathi">Jhalakathi</option>
                                                    <option value="Jhenaidah">Jhenaidah</option>
                                                    <option value="Joypurhat">Joypurhat</option>
                                                    <option value="Khagrachhari">Khagrachhari</option>
                                                    <option value="Khulna">Khulna</option>
                                                    <option value="Kishoreganj">Kishoreganj</option>
                                                    <option value="Kurigram">Kurigram</option>
                                                    <option value="Kushtia">Kushtia</option>
                                                    <option value="Lakshmipur">Lakshmipur</option>
                                                    <option value="Lalmonirhat">Lalmonirhat</option>
                                                    <option value="Madaripur">Madaripur</option>
                                                    <option value="Magura">Magura</option>
                                                    <option value="Manikganj">Manikganj</option>
                                                    <option value="Meherpur">Meherpur</option>
                                                    <option value="Moulvibazar">Moulvibazar</option>
                                                    <option value="Munshiganj">Munshiganj</option>
                                                    <option value="Mymensingh">Mymensingh</option>
                                                    <option value="Naogaon">Naogaon</option>
                                                    <option value="Narail">Narail</option>
                                                    <option value="Narayanganj">Narayanganj</option>
                                                    <option value="Narsingdi">Narsingdi</option>
                                                    <option value="Natore">Natore</option>
                                                    <option value="Netrokona">Netrokona</option>
                                                    <option value="Nilphamari">Nilphamari</option>
                                                    <option value="Noakhali">Noakhali</option>
                                                    <option value="Pabna">Pabna</option>
                                                    <option value="Panchagarh">Panchagarh</option>
                                                    <option value="Patuakhali">Patuakhali</option>
                                                    <option value="Pirojpur">Pirojpur</option>
                                                    <option value="Rajbari">Rajbari</option>
                                                    <option value="Rajshahi">Rajshahi</option>
                                                    <option value="Rangamati">Rangamati</option>
                                                    <option value="Rangpur">Rangpur</option>
                                                    <option value="Satkhira">Satkhira</option>
                                                    <option value="Shariatpur">Shariatpur</option>
                                                    <option value="Sherpur">Sherpur</option>
                                                    <option value="Sirajganj">Sirajganj</option>
                                                    <option value="Sunamganj">Sunamganj</option>
                                                    <option value="Sylhet">Sylhet</option>
                                                    <option value="Tangail">Tangail</option>
                                                    <option value="Thakurgaon">Thakurgaon</option>
                                                </select>
                                            </div>
                                            <div class="col-12">
                                                <!-- button -->
                                                <input required id = "sa_zip" type="text" class="form-control" placeholder="Zip Code" data-validation = "required">
                                            </div>
                                            
                                            <div class="col-12">
                                                <!-- button -->
                                                <select required id = "sa_country" class="form-select" data-validation = "required">
                                                    <option selected value="bd">Bangladesh</option>
                                                </select>
                                            </div>



                                            <div class="col-12">
                                                <!-- button -->
                                                <input required id = "sa_mobile" type="tel" class="form-control" placeholder="Mobile Number" data-validation = "required">
                                            </div>
                                            <div class="col-12">
                                                <!-- button -->
                                                <input required id = "sa_email" type="email" class="form-control" placeholder="Email" data-validation = "required">
                                            </div>

                                            <!-- <div class="mt-5 d-flex justify-content-end">
                                                
                                                <a href="#" class="btn btn-primary ms-2" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="true" aria-controls="flush-collapseTwo">Next</a>
                                            </div> -->

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

					</div>
                    <div class="row">
                        <div class="col">


<!-- begin -->
                            <!-- accordion -->
                            <div class="accordion accordion-flush" id="accordionFlushExample">

                                <!-- accordion item -->
                                <div class="accordion-item py-4">
                                    <a href="#" class="text-inherit h5 collapsed" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                        <i class="feather-icon icon-shopping-bag me-2 text-muted"></i>
                                        Delivery instructions
                                        <!-- collapse -->
                                    </a>
                                    <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample" style="">
                                        <div class="mt-5">
                                            <label for="delivery_instruction" class="form-label sr-only">Delivery instructions</label>
                                            <textarea class="form-control" id="delivery_instruction" rows="3" placeholder="Write delivery instructions "></textarea>
                                            <p class="form-text">Add instructions for how you want your order shopped and/or delivered</p>
                                            <div class="mt-5 d-flex justify-content-end">
                                                <a href="#" class="btn btn-outline-gray-400 text-muted collapsed" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                    Prev
                                                </a>
                                                <a href="#" class="btn btn-primary ms-2" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="true" aria-controls="flush-collapseFour">Next</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- accordion item -->
                                <div class="accordion-item py-4">
                                    <a href="#" class="text-inherit h5" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="true" aria-controls="flush-collapseFour">
                                        <i class="feather-icon icon-credit-card me-2 text-muted"></i>
                                        Payment Method
                                        <!-- collapse -->
                                    </a>
                                    <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample" style="">
                                        <div class="mt-5">
                                            <div>
                                                <!-- card -->
                                                <div class="card card-bordered shadow-none">
                                                    <div class="card-body p-6">
                                                        <!-- check input -->
                                                        <div class="d-flex">
                                                            <div class="form-check">
                                                                <input checked  class="form-check-input" type="radio" name="flexRadioDefault" id="money_trnasfer">
                                                                <label class="form-check-label ms-2" for="money_trnasfer"></label>
                                                            </div>
                                                            <div>
                                                                <!-- title -->
                                                                <h5 class="mb-1 h6">Money Transfer</h5>
                                                                <p class="mb-0 small">Money Transfer</p>
                                                            </div>
                                                        </div>
                                                        <!-- check input -->
                                                        <div class="d-flex">
                                                            <div class="form-check">
                                                                <input checked  class="form-check-input" type="radio" name="flexRadioDefault" id="cash_on_delivery">
                                                                <label class="form-check-label ms-2" for="cash_on_delivery"></label>
                                                            </div>
                                                            
                                                            <div>
                                                                <!-- title -->
                                                                <h5 class="mb-1 h6">Cash on Delivery</h5>
                                                                <p class="mb-0 small">Cash on Delivery</p>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

<!-- end -->


                        </div>
                        <div class="row">
                            <div class="col">
                                <!-- Button -->
                                <div class="mt-5 d-flex justify-content-end">
                                    <!-- <a id = "prev" href="#" class="btn btn-outline-gray-400 text-muted collapsed" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                        Prev
                                    </a> -->
                                    <!-- <a id = "placeOrder" href="#" class="btn btn-primary ms-2">Place Order</a> -->
                                        <button class="btn btn-primary" type="submit">Place Order</button>
                                </div>

                            </div>
                        </div>
                    </div>
				</div>
                </form>
			</section>
		</main>


`;        
   }
   *script() {
yield html`

<script>

class Page extends MarketplaceLayout {

    constructor(params) {
        super(params);
    }



    async hookup() {
        await super.hookup();
    }


    async uponReady() {
        await super.uponReady();


        this.on('#sa_as_ba', 'change', (e) => {

            if (e.target.checked) {
                this.getElement('#shipping-address-accordion-secion').classList.add('d-none');
                return;
            }

            this.getElement('#shipping-address-accordion-secion').classList.remove('d-none');
        });

        this.on("#frmCheckout", "submit", this.onSubmitOrder);
                
        this.on("#prev", "click", this.onPrevClick);
        //R&D ONLY: //this.on("#sim1", "click", this.onSimulateFormFillupClick);
    }

    async readList() {
        var list = document.getElementById("myList");
        var items = list.getElementsByTagName("li");
        var itemTexts = [];
    
        for (var i = 0; i < items.length; i++) {
        var text = items[i].innerText;
        itemTexts.push(text);
        }
    
    //        
    }

    async onSubmitOrder(e) {
        e.preventDefault()
        e.stopPropagation()
        
        if (e.target.classList.contains("needs-validation")) {
            if (!e.target.checkValidity()) {
                e.target.classList.add("was-validated");
                alert("Please provide information correctly.");
                return;
            }            
        }



        if (sa_as_ba.checked) {
            sa_first_name.value = ba_first_name.value,
            sa_last_name.value = ba_last_name.value,
            sa_mobile.value = ba_mobile.value,
            sa_email.value = ba_email.value;
            sa_line1.value = ba_line1.value,
            sa_line2.value = ba_line2.value,
            sa_city.value = ba_city.value,
            sa_zip.value = ba_zip.value,
            sa_country.value = ba_country.value;
        }

        // (*) gather/
        let formData = {
            billing_address : {
                first_name: ba_first_name.value,
                last_name: ba_last_name.value,
                mobile: ba_mobile.value,
                email: ba_email.value,
                line1: ba_line1.value,
                line2: ba_line2.value,
                city: ba_city.value,
                zip: ba_zip.value,
                country: ba_country.value

            },
            
            sa_as_ba: sa_as_ba.checked,
            shipping_address : {
                first_name: sa_first_name.value,
                last_name: sa_last_name.value,
                line1: sa_line1.value,
                line2: sa_line2.value,
                city: sa_city.value,
                country: sa_country.value,
                zip: sa_zip.value,
                mobile: sa_mobile.value,
                email: sa_email.value,

            },
            delivery_instruction: delivery_instruction.value,
            payment_method: "money-transfer", //const, for the time being

        };
        // (*) loop through the cart summary and populate the formData.cart[] rows/


        // (*) validate/
        // PENDING
        // if (!this.validateForm("frmCheckout")) 
        //     this.throwAlert("Guidance", "Please Fill the form correctly")
        // ;


        // (*) fetchDbApi/
        let result = await this.fetchDbApi("/user/shopping/place-order", formData);
        
    //        

        this.assert((result), "Api Propagation Failed");
        this.assert((result.sales_order_id), "Sales Order ID could not be found.");

        //alert(result.sales_order_id)

        // STEP(*): clear MasterLayout > Cart info (necessary, if it is not dynamically loaded) 

        // STEP(*): take to thank you page / view placed order under /customer/order/id
        window.location.href = ~/user/shopping/order/~{result.sales_order_id}~;

    }

    onPrevClick(e) {
        window.history.back();
    }

    onSimulateFormFillupClick(e) {
        ba_first_name.value = "E"
        ba_last_name.value = "K"
        ba_line1.value = "5"
        ba_line2.value = "Z"
        ba_city.value = "c"
        ba_country.value = "bd"
        ba_zip.value = "4"
        ba_mobile.value = "1"
        ba_email.value = "a"
                
        sa_as_ba.checked = false

        sa_first_name.value = "E"
        sa_last_name.value = "K"
        sa_line1.value = "5"
        sa_line2.value = "Z"
        sa_city.value = "c"
        sa_country.value = "bd"
        sa_zip.value = "4"
        sa_mobile.value = "1"
        sa_email.value = "a"

        delivery_instruction.value = "Pls, ..."
        payment_method.value = "money-transfer"

    }

}

page = new Page();

</script>
`;
   }
}