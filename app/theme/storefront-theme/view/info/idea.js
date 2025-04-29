//`;namespace App\Views\Info;
  
import MarketplaceLayout from "../marketplace-layout";


export default class Idea extends MarketplaceLayout {
  

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
             <h1>Explore Ideas and Guides</h1>
              <p class="lead">Unlock your full potential as a business or consumer with curated guides and ideas.</p>
            <p>
                We believe knowledge is power, and that through relevant knowledge and guides, you can be empowered to make the best decisions for your business or for your personal needs.
                </p>
                <a href="#ideas" class="btn btn-primary">See Ideas and Guides</a>
           </div>
             <div class="col-md-6">
                <img  loading="lazy" data-src="/_assets/images/info/idea.webp" width="100%"  alt="Ideas and Guides Image" class="img-fluid rounded">
            </div>
        </div>
    </div>
</section>

<section class="py-5" id="ideas">
  <div class="container-fluid">
    <h2 class="text-center mb-4">Ideas and Guides</h2>
     <div class="row">
          <div class="col-md-4 mb-4">
                 <div class="card h-100">
                    <div class="card-body">
                      <h5 class="card-title"><i class="fas fa-lightbulb text-primary me-2"></i> Guides for B2C Users</h5>
                      <p class="card-text">
                          Get tips and ideas for choosing the right products, using our platform effectively and making the best purchases.
                        </p>
                      <a href="/info/contact" class="btn btn-sm btn-outline-primary">Read More</a>
                    </div>
                 </div>
            </div>
            <div class="col-md-4 mb-4">
                <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title"><i class="fas fa-handshake text-primary me-2"></i> Guides for B2B Vendors</h5>
                        <p class="card-text">Learn about different techniques, and ideas on how you can grow your business by becoming a seller on Paykhom.</p>
                           <a href="/info/contact" class="btn btn-sm btn-outline-primary">Read More</a>
                    </div>
                 </div>
              </div>
            <div class="col-md-4 mb-4">
                  <div class="card h-100">
                      <div class="card-body">
                            <h5 class="card-title"><i class="fas fa-tools text-primary me-2"></i> Ideas for Service Providers</h5>
                            <p class="card-text">Find the best ways to use our platforms to offer your services, find more opportunities, and grow your business.</p>
                           <a href="/info/contact" class="btn btn-sm btn-outline-primary">Read More</a>
                      </div>
                 </div>
            </div>
            <div class="col-md-4 mb-4">
                   <div class="card h-100">
                         <div class="card-body">
                              <h5 class="card-title"><i class="fas fa-truck text-primary me-2"></i> Ideas for Logistics Companies</h5>
                              <p class="card-text">Check our insights on how you can use our network to expand your delivery network, find new clients, and make more profits.</p>
                              <a href="/info/contact" class="btn btn-sm btn-outline-primary">Read More</a>
                         </div>
                     </div>
                </div>
               <div class="col-md-4 mb-4">
                    <div class="card h-100">
                        <div class="card-body">
                             <h5 class="card-title"><i class="fas fa-bullhorn text-primary me-2"></i> Guides for Marketing Partners</h5>
                               <p class="card-text">Learn the best strategies for reaching customers and helping us gain greater market reach while earning attractive commissions.</p>
                             <a href="/info/contact" class="btn btn-sm btn-outline-primary">Read More</a>
                        </div>
                    </div>
              </div>
              <div class="col-md-4 mb-4">
                  <div class="card h-100">
                     <div class="card-body">
                        <h5 class="card-title"><i class="fas fa-code text-primary me-2"></i> Ideas for Technology Partners</h5>
                          <p class="card-text">Learn how you can use your technical expertise with Paykhom's platform and find new ways to use our tools effectively to drive profits for you.</p>
                          <a href="/info/contact" class="btn btn-sm btn-outline-primary">Read More</a>
                      </div>
                 </div>
            </div>
        </div>
  </div>
 </section>
 
<section class="py-5">
    <div class="container text-center">
        <h2 >Stay Informed</h2>
         <p class="lead">Want to learn more? Contact us today for all the information needed to help you make the best decision.</p>
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