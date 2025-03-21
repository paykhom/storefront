//`;namespace App\Views\Info;
  
import MarketplaceLayout from "../marketplace-layout";


export default class Promo extends MarketplaceLayout {
  

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
        
        <section class="bg-light py-5">
             <div class="container-fluid">
                 <div class="row align-items-center">
                     <div class="col-md-6">
                         <h1>Exclusive Promotions and Coupons</h1>
                         <p class="lead">Unlock amazing deals with our special promotions and coupons for both B2C and B2B customers.</p>
                        <p>
                          Paykhom is constantly working with our sellers and providers to get you the best deals. Check this page for new promotions and exclusive coupon codes for you to maximize your purchasing power.
                      </p>
                     
                        <a href="#coupons" class="btn btn-primary">See Offers</a>
                     </div>
                      <div class="col-md-6">
                         <img  loading="lazy" data-src="/_assets/images/info/couponss.webp" width="100%"  alt="Promotions and Coupons Image" class="img-fluid rounded">
                     </div>
                 </div>
             </div>
         </section>
 
         <section class="py-5" id="coupons">
           <div class="container-fluid">
                  <h2 class="text-center mb-4">Current Promotions</h2>
                  <div class="row">
                      <div class="col-md-6 mb-4">
                         <div class="card h-100">
                           <div class="card-body">
                               <h5 class="card-title"><i class="fas fa-tag text-primary me-2"></i> B2C Promotion 1 - Get 15% Off</h5>
                               <p class="card-text">Use Code 'B2C15' and get 15% of selected purchases above 1000 BDT.</p>
                              <!-- <a href="/info/contact" class="btn btn-sm btn-outline-primary">Copy Code</a> -->
                             </div>
                         </div>
                        </div>
                        <div class="col-md-6 mb-4">
                              <div class="card h-100">
                                   <div class="card-body">
                                        <h5 class="card-title"><i class="fas fa-tag text-primary me-2"></i> B2C Promotion 2 - Flash Sale</h5>
                                        <p class="card-text">Check out our flash sale section where you can get unbelievable prices on selected products.</p>
                                        <!-- <a href="/info/contact" class="btn btn-sm btn-outline-primary">Check it out</a> -->
                                   </div>
                              </div>
                         </div>
                        <div class="col-md-6 mb-4">
                             <div class="card h-100">
                                  <div class="card-body">
                                      <h5 class="card-title"><i class="fas fa-tag text-primary me-2"></i> B2B Promotion 1 - Free Consultation</h5>
                                      <p class="card-text">Contact us today and get a free consultation to help you set up your store on Paykhom.</p>
                                       <!-- <a href="/info/contact" class="btn btn-sm btn-outline-primary">Get a Free Consultation</a> -->
                                   </div>
                             </div>
                       </div>
                        <div class="col-md-6 mb-4">
                           <div class="card h-100">
                              <div class="card-body">
                                    <h5 class="card-title"><i class="fas fa-tag text-primary me-2"></i> B2B Promotion 2 - Free Shipping</h5>
                                    <p class="card-text">New vendors can enjoy free shipping for the first three months of their operations. Contact us to learn more!</p>
                                   <!-- <a href="/info/contact" class="btn btn-sm btn-outline-primary">Contact Us</a> -->
                              </div>
                         </div>
                     </div>
                   </div>
             </div>
        </section>
 
          <section class="py-5">
              <div class="container text-center">
                   <h2>Never Miss a Deal</h2>
                    <p class="lead">Subscribe to our newsletter or contact us to receive timely notifications of new promotions and coupon codes</p>
                     <a href="/info/contact" class="btn btn-outline-secondary">Contact Us</a>
                 </div>
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



    async uponReady() {
        await super.uponReady();
    }


}

page = new Page();

</script>
`;
   }
}