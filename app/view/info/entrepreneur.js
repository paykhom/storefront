//`;namespace App\Views\Info;
  
import MarketplaceLayout from "../marketplace-layout";


export default class Entrepreneur extends MarketplaceLayout {
  

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
                      <h1>Partner with Paykhom</h1>
                      <p class="lead">Explore various entrepreneurial opportunities at Paykhom and take the next leap in your career.</p>
                      <p>
                           We are looking for dynamic individuals who are looking to grow their own businesses with Paykhom in the various forms that we can offer.
                         </p>
                       <a href="#explore" class="btn btn-primary">Explore Opportunities</a>
                  </div>
                   <div class="col-md-6">
                        <img  loading="lazy" data-src="/_assets/images/info/partner.jpeg" width="100%"  alt="Entrepreneur Image" class="img-fluid rounded">
                    </div>
                </div>
            </div>
        </section>

        <section class="py-5" id="explore">
            <div class="container-fluid">
                <h2 class="text-center mb-4">Explore Opportunities</h2>
                    <div class="row">
                     <div class="col-md-4 mb-4">
                         <div class="card h-100">
                            <div class="card-body">
                                 <h5 class="card-title"><i class="fas fa-store text-primary me-2"></i> Become a Seller</h5>
                                 <p class="card-text">Reach a wider customer base by selling your products on the Paykhom platform.</p>
                                <a href="/info/contact" class="btn btn-sm btn-outline-primary">Learn More</a>
                             </div>
                          </div>
                    </div>
                   <div class="col-md-4 mb-4">
                          <div class="card h-100">
                            <div class="card-body">
                                  <h5 class="card-title"><i class="fas fa-handshake text-primary me-2"></i> Partner with us</h5>
                                    <p class="card-text">Take part in our journey by partnering to provide services to Paykhom.</p>
                                      <a href="/info/contact" class="btn btn-sm btn-outline-primary">Learn More</a>
                            </div>
                          </div>
                    </div>
                     <div class="col-md-4 mb-4">
                           <div class="card h-100">
                                 <div class="card-body">
                                      <h5 class="card-title"><i class="fas fa-truck text-primary me-2"></i> Become a Logistics Partner</h5>
                                       <p class="card-text">Help us make deliveries across Bangladesh and make a good income. </p>
                                      <a href="/info/contact" class="btn btn-sm btn-outline-primary">Learn More</a>
                                  </div>
                             </div>
                     </div>
                      <div class="col-md-4 mb-4">
                         <div class="card h-100">
                            <div class="card-body">
                                  <h5 class="card-title"><i class="fas fa-bullhorn text-primary me-2"></i> Become a Marketing Partner</h5>
                                    <p class="card-text">Use your marketing skills and help us grow our brand and reach more customers.</p>
                                  <a href="/info/contact" class="btn btn-sm btn-outline-primary">Learn More</a>
                              </div>
                         </div>
                      </div>
                      <div class="col-md-4 mb-4">
                           <div class="card h-100">
                               <div class="card-body">
                                  <h5 class="card-title"><i class="fas fa-code text-primary me-2"></i> Become a Technical Partner</h5>
                                    <p class="card-text">Use your technical skills to further expand our technological reach and shape the future.</p>
                                  <a href="/info/contact" class="btn btn-sm btn-outline-primary">Learn More</a>
                               </div>
                         </div>
                    </div>
                       <div class="col-md-4 mb-4">
                          <div class="card h-100">
                            <div class="card-body">
                                   <h5 class="card-title"><i class="fas fa-user-tie text-primary me-2"></i> Become a Consultant</h5>
                                  <p class="card-text">Use your expertise to advise our company and help us grow in the most effective way. </p>
                                  <a href="/info/contact" class="btn btn-sm btn-outline-primary">Learn More</a>
                            </div>
                         </div>
                    </div>
                    </div>
             </div>
         </section>

         <section class="py-5">
                <div class="container text-center">
                     <h2>Ready to Start Your Journey?</h2>
                      <p class="lead">Whether you're a seller, service provider, logistics expert, or a consultant, there is a space for you at Paykhom.</p>
                   <a href="/info/contact" class="btn btn-outline-secondary">Get In Touch</a>
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