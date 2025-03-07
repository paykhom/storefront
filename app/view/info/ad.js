//`;namespace App\Views\Info;
  
import MarketplaceLayout from "../marketplace-layout";


export default class Ad extends MarketplaceLayout {
  

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
                       <h1>Advertise with Paykhom</h1>
                       <p class="lead">Reach new customers and grow your brand through effective advertising on our platform.</p>
                       <p>
                          Paykhom allows vendors and B2C customers alike to advertise to their target market to promote products and get a greater market reach. You will gain valuable insights to make informed choices on how best to spend your advertising budget.
                         </p>
                       <a href="#options" class="btn btn-primary">See Ad Options</a>
                   </div>
                    <div class="col-md-6">
                        <img  loading="lazy" data-src="/_assets/images/info/ad2.webp" width="100%"  alt="Advertising Image" class="img-fluid rounded">
                   </div>
                </div>
            </div>
        </section>
          
          <section class="py-5" id="options">
             <div class="container-fluid">
                  <h2 class="text-center mb-4">Advertising Options</h2>
                    <div class="row">
                     <div class="col-md-4 mb-4">
                         <div class="card h-100">
                                  <div class="card-body">
                                      <h5 class="card-title"><i class="fas fa-bullhorn text-primary me-2"></i>Featured Listings</h5>
                                       <p class="card-text">Increase your visibility by featuring your products at the top of relevant search results and categories.</p>
                                       <!-- <a href="/info/contact" class="btn btn-sm btn-outline-primary">Contact for Pricing</a> -->
                                  </div>
                            </div>
                      </div>
                      <div class="col-md-4 mb-4">
                           <div class="card h-100">
                               <div class="card-body">
                                   <h5 class="card-title"><i class="fas fa-image text-primary me-2"></i> Banner Ads</h5>
                                     <p class="card-text">Place your banner ads on high traffic pages within the Paykhom website to increase awareness for your products.</p>
                                     <!-- <a href="/info/contact" class="btn btn-sm btn-outline-primary">Contact for Pricing</a> -->
                                  </div>
                           </div>
                       </div>
                     <div class="col-md-4 mb-4">
                            <div class="card h-100">
                               <div class="card-body">
                                   <h5 class="card-title"><i class="fas fa-envelope text-primary me-2"></i> Sponsored Emails</h5>
                                  <p class="card-text">Reach the inbox of our subscribers through targeted and sponsored email campaigns to engage potential customers.</p>
                                    <!-- <a href="/info/contact" class="btn btn-sm btn-outline-primary">Contact for Pricing</a> -->
                                </div>
                            </div>
                        </div>
                    
                       <div class="col-md-4 mb-4">
                            <div class="card h-100">
                                <div class="card-body">
                                     <h5 class="card-title"><i class="fas fa-video text-primary me-2"></i> Sponsored Videos</h5>
                                     <p class="card-text">Showcase your product through engaging videos. Share them on relevant category and product pages.</p>
                                    <!-- <a href="/info/contact" class="btn btn-sm btn-outline-primary">Contact for Pricing</a> -->
                                 </div>
                           </div>
                       </div>
                     <div class="col-md-4 mb-4">
                            <div class="card h-100">
                                <div class="card-body">
                                  <h5 class="card-title"><i class="fas fa-chart-bar text-primary me-2"></i> Targeted Advertising</h5>
                                   <p class="card-text">We can narrow down your target demographic, reach them directly, and maximize the results of your marketing campaigns.</p>
                                    <!-- <a href="/info/contact" class="btn btn-sm btn-outline-primary">Contact for Pricing</a> -->
                                </div>
                             </div>
                         </div>
                         <div class="col-md-4 mb-4">
                           <div class="card h-100">
                            <div class="card-body">
                                  <h5 class="card-title"><i class="fas fa-file-alt text-primary me-2"></i> Blog Sponsorships</h5>
                                   <p class="card-text">Publish sponsored posts on our blog and reach customers through informational content and reviews.</p>
                                   <!-- <a href="/info/contact" class="btn btn-sm btn-outline-primary">Contact for Pricing</a> -->
                               </div>
                           </div>
                        </div>
                   </div>
              </div>
         </section>

         <section class="bg-light py-5">
            <div class="container text-center">
                <h2>Get Your Ad Campaign Started</h2>
                  <p class="lead">Contact us to learn how you can advertise your business or products on Paykhom.</p>
               <a href="/info/contact" class="btn btn-outline-secondary">Contact Us</a>
            </div>
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



    async uponReady() {
        await super.uponReady();
    }


}

page = new Page();

</script>
`;
   }
}