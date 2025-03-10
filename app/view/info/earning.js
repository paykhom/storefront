//`;namespace App\Views\Info;
  
import MarketplaceLayout from "../marketplace-layout";


export default class Earning extends MarketplaceLayout {
  

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
                        <h1>Unlock Your Earning Potential</h1>
                       <p class="lead">Discover diverse ways to earn with Paykhom and grow your business.</p>
                       <p>
                           We offer multiple ways for you to unlock your earning potential, whether you are a seller, service provider, or logistics expert. We are happy to support you on your journey.
                       </p>
                       <a href="#waysToEarn" class="btn btn-primary">Explore Ways to Earn</a>
                   </div>
                    <div class="col-md-6">
                        <img  loading="lazy" data-src="/_assets/images/info/earning.webp" width="100%"  alt="Earning Opportunities Image" class="img-fluid rounded">
                    </div>
                </div>
            </div>
        </section>

        <section class="py-5" id="waysToEarn">
            <div class="container-fluid">
                <h2 class="text-center mb-4">How to Earn with Paykhom</h2>
                <div class="row">
                    <div class="col-md-4 mb-4">
                           <div class="card h-100">
                              <div class="card-body">
                                 <h5 class="card-title"><i class="fas fa-store text-primary me-2"></i> Sell Your Products</h5>
                                    <p class="card-text">Reach millions of customers across Bangladesh by selling your products on Paykhom. Set your prices, manage your inventory, and track your earnings.</p>
                                </div>
                           </div>
                       </div>
                   <div class="col-md-4 mb-4">
                            <div class="card h-100">
                                 <div class="card-body">
                                      <h5 class="card-title"><i class="fas fa-tools text-primary me-2"></i> Provide Services</h5>
                                       <p class="card-text">Offer specialized services to our wide customer base, and let us handle the rest. From installations to specialized solutions.</p>
                                   </div>
                            </div>
                     </div>
                       <div class="col-md-4 mb-4">
                           <div class="card h-100">
                               <div class="card-body">
                                  <h5 class="card-title"><i class="fas fa-truck text-primary me-2"></i> Become a Delivery Partner</h5>
                                   <p class="card-text">Partner with us to provide fast and reliable delivery services. Manage your routes efficiently and earn competitive rates.</p>
                               </div>
                          </div>
                      </div>
                    <div class="col-md-4 mb-4">
                           <div class="card h-100">
                                <div class="card-body">
                                      <h5 class="card-title"><i class="fas fa-bullhorn text-primary me-2"></i> Become a Marketing Partner</h5>
                                        <p class="card-text">Use your marketing skills to drive new customers to the Paykhom platform and receive commissions on sales.</p>
                                  </div>
                             </div>
                       </div>
                      <div class="col-md-4 mb-4">
                           <div class="card h-100">
                               <div class="card-body">
                                    <h5 class="card-title"><i class="fas fa-code text-primary me-2"></i> Become an Integrations Partner</h5>
                                   <p class="card-text">Help businesses integrate their processes into the Paykhom platform and get a slice of the transaction.</p>
                              </div>
                         </div>
                       </div>
                       <div class="col-md-4 mb-4">
                          <div class="card h-100">
                              <div class="card-body">
                                  <h5 class="card-title"><i class="fas fa-hand-holding-usd text-primary me-2"></i> Become a Referral Partner</h5>
                                     <p class="card-text">Invite new customers or sellers to join the Paykhom platform. Help us grow and earn a referral fee for every successful referral.</p>
                                </div>
                           </div>
                     </div>
                </div>
            </div>
        </section>
        
         <section class="py-5">
            <div class="container text-center">
                <h2 >Start Earning Today</h2>
                 <p class="lead">Transform your skills into a reliable revenue stream by joining us as a partner on Paykhom.</p>
                 <a href="/signup" class="btn btn-outline-secondary">Get Started</a>
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