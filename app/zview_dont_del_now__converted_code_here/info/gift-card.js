//`;namespace App\Views\Info;
  
import MarketplaceLayout from "../marketplace-layout";


export default class GiftCard extends MarketplaceLayout {
  

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
                        <h1>The Perfect Gift, Every Time</h1>
                        <p class="lead">Give the gift of choice with Paykhom gift cards. Ideal for all types of occasions, for consumers or businesses.</p>
                        <p>
                           Paykhom gift cards are the perfect way to celebrate a special occasion, a holiday, or show appreciation for someone's help. Give them the power of choice with a gift card.
                          </p>
                       <a href="#benefits" class="btn btn-primary">Explore Benefits</a>
                    </div>
                     <div class="col-md-6">
                        <img  loading="lazy" data-src="/_assets/images/info/gift.webp" width="100%"  alt="Gift Card Image" class="img-fluid rounded">
                     </div>
                </div>
            </div>
        </section>

       <section class="py-5" id="benefits">
           <div class="container-fluid">
                <h2 class="text-center mb-4">Why Choose Paykhom Gift Cards?</h2>
                    <div class="row">
                    <div class="col-md-4 mb-4">
                         <div class="card h-100">
                            <div class="card-body">
                                <h5 class="card-title"><i class="fas fa-gift text-primary me-2"></i>Perfect for Any Occasion</h5>
                                   <p class="card-text">Ideal for birthdays, anniversaries, holidays, and corporate gifts. Paykhom Gift Cards offer a versatile way to give a gift that never expires.</p>
                                </div>
                          </div>
                    </div>
                    <div class="col-md-4 mb-4">
                        <div class="card h-100">
                            <div class="card-body">
                                  <h5 class="card-title"><i class="fas fa-wallet text-primary me-2"></i>Flexible Spending Options</h5>
                                   <p class="card-text">Recipients can choose from a vast selection of products on our platform, making it convenient and personalizable.</p>
                                </div>
                            </div>
                    </div>
                     <div class="col-md-4 mb-4">
                           <div class="card h-100">
                              <div class="card-body">
                                     <h5 class="card-title"><i class="fas fa-user-check text-primary me-2"></i>Trusted & Convenient</h5>
                                       <p class="card-text">Paykhom is a well known, trusted and secure platform. Our gift cards ensure a safe and easy way to purchase goods and services.</p>
                                  </div>
                           </div>
                        </div>
                       <div class="col-md-4 mb-4">
                           <div class="card h-100">
                              <div class="card-body">
                                  <h5 class="card-title"><i class="fas fa-business-time text-primary me-2"></i>Easy Management</h5>
                                  <p class="card-text">Our gift cards can be bought quickly and easily through our platform and delivered electronically by email.</p>
                               </div>
                         </div>
                     </div>
                   <div class="col-md-4 mb-4">
                          <div class="card h-100">
                             <div class="card-body">
                                  <h5 class="card-title"><i class="fas fa-users text-primary me-2"></i>Perfect for B2C or B2B</h5>
                                    <p class="card-text">Paykhom gift cards are perfect whether you're a consumer buying for yourself or family, or if you are a business providing employee incentives or gifts for clients.</p>
                               </div>
                           </div>
                     </div>
                       <div class="col-md-4 mb-4">
                         <div class="card h-100">
                              <div class="card-body">
                                 <h5 class="card-title"><i class="fas fa-star text-primary me-2"></i>Unmatched Versatility</h5>
                                  <p class="card-text">Give the perfect gift every time by providing your recipients access to a massive selection of options.</p>
                             </div>
                         </div>
                    </div>
                    </div>
              </div>
          </section>

        <!-- <section class="bg-light py-5">
              <div class="container text-center">
                   <h2>Buy a Gift Card Today</h2>
                    <p class="lead">Ready to give the gift of endless choice? Explore our options and buy a gift card now.</p>
                   <a href="/info/contact" class="btn btn-primary">Purchase Gift Cards</a>
               </div>
       </section> -->

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



    async uponReady() {
        await super.uponReady();
    }


}

page = new Page();

</script>
`;
   }
}