//`;namespace App\Views\User;
  
import MarketplaceLayout from "../marketplace-layout";


export default class Cart extends MarketplaceLayout {
  

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

`; foreach(this.checkout["cart"]??[] as $item) { `
                                 
					             <li class="list-group-item py-3 py-lg-0 px-0 border-top">
					                <!-- row -->
					                <div class="row align-items-center">
					                   <div class="col-3 col-md-2">
					                      <!-- img --> <img  loading="lazy" data-src="`$item["product_media_path"]??"" `" alt="Ecommerce"
					 class="img-fluid">
					                   </div>
					                   <div class="col-4 col-md-5">
					                      <!-- title -->
					                      <a href="#" class="text-inherit">
					 <h6 class="mb-0">`$item["title"] `</h6>
					                      </a>
					                      <span><small class="text-muted">.98 / lb</small></span>
					                      <!-- text -->
					                      <div class="mt-2 small lh-1">
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
                                                </div>
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
                                                <span class="fw-bold">`$item["price"] `</span>
                                            </div>
                                        </div>
                                    </li>

`; } `
					</ul>
					<!-- btn -->
					  <div class="d-flex justify-content-between mt-4 d-none">
					     <a href="#!" class="btn btn-primary">Continue Shopping</a>
					     <!-- <a href="#!" class="btn btn-dark">Update Cart</a> -->
					  </div>
					 </div>
				 </div>

                       
`; if (count(this.checkout["cart"]??[]) > 0) { `

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
					           <span>${this.checkout["total_amount"]??0}</span>
					        </li>
					        <!-- list group item -->
					   <li class="list-group-item d-flex justify-content-between align-items-start">
					      <div class="me-auto">
					         <div>Service Fee</div>
					      </div>
					      <span>${this.checkout["total_delivery_charge"]??0}</span>
					   </li>
					   <!-- list group item -->
					   <li class="list-group-item d-flex justify-content-between align-items-start">
					      <div class="me-auto">
					         <div class="fw-bold">Total</div>
					      </div>
					      <span class="fw-bold">${this.checkout["total_grand"]??0}</span>
					   </li>
					    </ul>
					 </div>
					 <div class="d-grid mb-1 mt-4 d-none">
					    <!-- btn -->
					    <button class="btn btn-primary btn-lg d-flex justify-content-between align-items-center" type="submit">
					    Go to Checkout <span class="fw-bold">${this.checkout["cart"]["total_grand"]??0}</span></button>
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

                     <div class="d-flex justify-content-between mt-4">
                  <!-- <a href="#!" class="btn btn-primary btn-lg d-flex justify-content-between align-items-center">Continue Shopping</a> -->
                  <!-- <a href="#!" class="btn btn-dark">Update Cart</a> -->

                  <a href="/user/shopping/checkout" class="btn btn-primary btn-lg d-flex justify-content-between align-items-center cart-goto-checkout">
                     Go to Checkout
                     <span class="fw-bold" data-state="cart_total"></span>
                  </a>

               </div>

					</div>

`; } `


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

export default class Page extends MarketplaceLayout {

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
        this.assert((result.sales_id), "Sales Order ID could not be found.");

        //alert(result.sales_id)

        // STEP(*): clear MasterLayout > Cart info (necessary, if it is not dynamically loaded) 

        // STEP(*): take to thank you page / view placed order under /customer/order/id
        window.location.href = ~/user/shopping/order/~{result.sales_id}~;

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