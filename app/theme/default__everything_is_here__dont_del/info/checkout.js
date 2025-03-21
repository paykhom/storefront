//`;namespace App\Views\Info;
  
import MarketplaceLayout from "../marketplace-layout";


export default class Checkout extends MarketplaceLayout {
  

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

<div class="container-fluid">
        <div class="row">
             <div class="col-md-12">
                 <section class="section-padding bg-light-gray">
                     <div class="container-fluid">
                          <div class="row">
                              <div class="col-md-6">
                                  <h1>Checkout</h1>
                                  <p class="lead">Secure and seamless checkout.</p>
                                  <p>Complete your order through our secure checkout process. We support many payment and delivery options to make it convenient for you.</p>

                               </div>
                               <div class="col-md-6">
                                  <img  loading="lazy" data-src="/_assets/images/info/checkout.jpg" width="100%"  alt="Checkout Image" class="img-fluid rounded">
                              </div>
                       </div>
                  </div>
            </section>
            <section class="section-padding">
              <div class="container-fluid">
                <div class="row">
                       <div class="col-md-12 text-center mb-4">
                          <h2>Billing Details</h2>
                       </div>
                    </div>
                 <div class="row">
                  <div class="col-md-6">
                      <form>
                        <div class="mb-3">
                            <label for="firstName" class="form-label">First Name</label>
                            <input type="text" class="form-control" id="firstName" required>
                        </div>
                        <div class="mb-3">
                            <label for="lastName" class="form-label">Last Name</label>
                            <input type="text" class="form-control" id="lastName" required>
                          </div>
                          <div class="mb-3">
                              <label for="address" class="form-label">Address</label>
                              <textarea class="form-control" id="address" rows="3"></textarea>
                           </div>
                    </div>
                      <div class="col-md-6">
                           <div class="mb-3">
                                <label for="email" class="form-label">Email Address</label>
                            <input type="email" class="form-control" id="email" required>
                            </div>
                            <div class="mb-3">
                              <label for="phone" class="form-label">Phone Number</label>
                            <input type="tel" class="form-control" id="phone" required>
                            </div>
                           <div class="mb-3">
                              <label for="city" class="form-label">City</label>
                              <input type="text" class="form-control" id="city">
                           </div>
                       </div>
                  </div>
                  
                    
              </div>
         </section>
         <section class="section-padding bg-light-gray">
           <div class="container-fluid">
              <div class="row">
                 <div class="col-md-12 text-center mb-4">
                      <h2>Delivery & Payment</h2>
                   </div>
                </div>
                 <div class="row">
                    <div class="col-md-6 mb-4">
                     <h3>Select Delivery Option</h3>
                     <div class="form-check">
                       <input class="form-check-input" type="radio" name="delivery" id="standardDelivery" checked>
                        <label class="form-check-label" for="standardDelivery">
                           Standard Delivery
                        </label>
                     </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="delivery" id="expressDelivery">
                            <label class="form-check-label" for="expressDelivery">
                              Express Delivery
                            </label>
                        </div>
                     <div class="form-check">
                            <input class="form-check-input" type="radio" name="delivery" id="localPickup">
                              <label class="form-check-label" for="localPickup">
                               Local Pick-up
                            </label>
                        </div>
                    </div>
                     <div class="col-md-6 mb-4">
                        <h3>Select Payment Method</h3>
                            <div class="form-check">
                               <input class="form-check-input" type="radio" name="payment" id="creditCard" checked>
                               <label class="form-check-label" for="creditCard">Credit/Debit Card</label>
                           </div>
                           <div class="form-check">
                              <input class="form-check-input" type="radio" name="payment" id="mobilePayment">
                              <label class="form-check-label" for="mobilePayment">Mobile Payment</label>
                            </div>
                           <div class="form-check">
                                 <input class="form-check-input" type="radio" name="payment" id="bankTransfer">
                                 <label class="form-check-label" for="bankTransfer">Bank Transfer</label>
                             </div>
                      </div>
                 </div>
                 </div>
           </section>
           <section class="section-padding">
                 <div class="container-fluid">
                     <div class="row">
                            <div class="col-md-12">
                                 <button class="btn btn-success btn-lg w-100">Place Order</button>
                            </div>
                     </div>
                  </div>
         </section>

           
           
         </div>
       </div>
    </div>


`;        
   }
   *script() {
yield html`

<script>

class Page extends MarketplaceLayout {

    constructor(params) {
        super(params);
    }



    async uponReady() {
        await super.uponReady();
    }


}

page = new Page();

</script>
`;
   }
}