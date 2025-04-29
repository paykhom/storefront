//`;namespace App\Views\Info;
  
import MarketplaceLayout from "../marketplace-layout";


export default class Retailer extends MarketplaceLayout {
  

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
                   <h1>Expand Your Reach as a Paykhom Retailer</h1>
                   <p class="lead">Partner with Paykhom and grow your business by tapping into our extensive network of customers across Bangladesh.</p>
                  <p>
                    We are dedicated to helping businesses in Bangladesh connect with customers. By joining Paykhom, you can expand your market reach and increase your revenue.
                  </p>
                  <a href="#whyJoin" class="btn btn-primary">Learn More</a>
                </div>
                  <div class="col-md-6">
                    <img  loading="lazy" data-src="/_assets/images/info/retailer.jpeg" width="100%"  alt="Retailer Image" class="img-fluid rounded">
                </div>
              </div>
          </div>
      </section>

       <section class="py-5" id="whyJoin">
          <div class="container-fluid">
              <h2 class="text-center mb-4">Why Join Paykhom as a Retailer?</h2>
                  <div class="row">
                     <div class="col-md-4 mb-4">
                          <div class="card h-100">
                              <div class="card-body">
                                  <h5 class="card-title"><i class="fas fa-globe text-primary me-2"></i>Extensive Market Reach</h5>
                                  <p class="card-text">Access millions of customers across Bangladesh and expand your sales potential with our platform.</p>
                              </div>
                          </div>
                      </div>
                      <div class="col-md-4 mb-4">
                          <div class="card h-100">
                               <div class="card-body">
                                     <h5 class="card-title"><i class="fas fa-tools text-primary me-2"></i>Integrated Tools</h5>
                                      <p class="card-text">Use our tools to easily manage your product listings, orders, and inventory. You can track earnings, and make informed business decisions.</p>
                              </div>
                          </div>
                    </div>
                   <div class="col-md-4 mb-4">
                         <div class="card h-100">
                             <div class="card-body">
                                <h5 class="card-title"><i class="fas fa-bullhorn text-primary me-2"></i>Marketing Support</h5>
                                 <p class="card-text">We will provide you with the resources and assistance to market your business to increase sales volume.</p>
                             </div>
                         </div>
                    </div>
                    <div class="col-md-4 mb-4">
                         <div class="card h-100">
                             <div class="card-body">
                                <h5 class="card-title"><i class="fas fa-user-tie text-primary me-2"></i>Dedicated Account Manager</h5>
                                  <p class="card-text">Get a dedicated account manager to help you through onboarding, selling, and navigating our platform.</p>
                             </div>
                          </div>
                      </div>
                     <div class="col-md-4 mb-4">
                       <div class="card h-100">
                               <div class="card-body">
                                 <h5 class="card-title"><i class="fas fa-rocket text-primary me-2"></i>Growth-Focused Platform</h5>
                                  <p class="card-text">We are focused on driving traffic and giving you more opportunities to succeed, because if you succeed, we succeed.</p>
                             </div>
                        </div>
                    </div>
                      <div class="col-md-4 mb-4">
                         <div class="card h-100">
                           <div class="card-body">
                                <h5 class="card-title"><i class="fas fa-percent text-primary me-2"></i>Competitive Fees & Payments</h5>
                                  <p class="card-text">Enjoy competitive rates and easy payment options, to ensure that your business grows with Paykhom.</p>
                            </div>
                          </div>
                      </div>
                 </div>
          </div>
      </section>


      <section class="bg-light py-5">
        <div class="container text-center">
           <h2>Get Started Today</h2>
             <p class="lead">Transform your business by joining us. Access our vast customer network and all the support and services that we can offer.</p>
              <a href="/info/contact" class="btn btn-primary">Contact Us</a>
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