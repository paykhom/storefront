//`;namespace App\Views\Info;
  
import MarketplaceLayout from "../marketplace-layout";


export default class Company extends MarketplaceLayout {
  

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
                   <h1>About Paykhom</h1>
                   <p class="lead">We are an e-commerce startup in Bangladesh, serving both B2C and B2B markets. Our mission is to connect customers and businesses across the country through a reliable and efficient platform.</p>
                  <p>
                    Our vision is to revolutionize the way Bangladesh transacts, by providing access to products, and markets for all.
                  </p>
                  <a href="/info/contact" class="btn btn-primary">Contact Us</a>
                </div>
                <div class="col-md-6">
                  <img  loading="lazy" data-src="/paykhom-nobg.png" width="100%" alt="Company Image" class="img-fluid rounded">
               </div>
              </div>
          </div>
      </section>

      <section class="py-5">
          <div class="container-fluid">
              <h2>Our Values</h2>
              <div class="row">
                 <div class="col-md-4 mb-4">
                      <div class="card h-100">
                          <div class="card-body">
                              <h5 class="card-title"><i class="fa fa-check-circle text-primary me-2"></i>Customer Centricity</h5>
                              <p class="card-text">Our decisions always revolve around enhancing the experience for both our B2C and B2B customers.</p>
                          </div>
                      </div>
                   </div>
                   <div class="col-md-4 mb-4">
                      <div class="card h-100">
                           <div class="card-body">
                               <h5 class="card-title"><i class="fa fa-check-circle text-primary me-2"></i>Innovation</h5>
                               <p class="card-text">We embrace new ideas and technologies to constantly improve our platform and services.</p>
                           </div>
                      </div>
                  </div>
                  <div class="col-md-4 mb-4">
                     <div class="card h-100">
                          <div class="card-body">
                              <h5 class="card-title"><i class="fa fa-check-circle text-primary me-2"></i>Integrity</h5>
                              <p class="card-text">We believe in maintaining ethical practices and transparency in all our interactions.</p>
                          </div>
                      </div>
                  </div>

                   <div class="col-md-4 mb-4">
                       <div class="card h-100">
                          <div class="card-body">
                              <h5 class="card-title"><i class="fa fa-check-circle text-primary me-2"></i>Reliability</h5>
                              <p class="card-text">We aim to be a trustworthy and consistent platform for all our users and vendors.</p>
                          </div>
                       </div>
                  </div>
                  <div class="col-md-4 mb-4">
                       <div class="card h-100">
                          <div class="card-body">
                              <h5 class="card-title"><i class="fa fa-check-circle text-primary me-2"></i>Quality</h5>
                              <p class="card-text">We are dedicated to providing high-quality products and services for both our B2C and B2B clients.</p>
                           </div>
                       </div>
                   </div>
                   <div class="col-md-4 mb-4">
                       <div class="card h-100">
                          <div class="card-body">
                              <h5 class="card-title"><i class="fa fa-check-circle text-primary me-2"></i>Bangladesh First</h5>
                              <p class="card-text">We are dedicated to Bangladesh's progress, prosperity, and upliftment through the employment, products and revenue generated from Paykhom.</p>
                           </div>
                       </div>
                  </div>
              </div>
          </div>
      </section>

      <!-- <section class="bg-light py-5">
        <div class="container-fluid">
            <h2 class="text-center mb-4">Our Team</h2>
                <div class="row justify-content-center">
                    <div class="col-md-3 mb-4">
                       <div class="card h-100 text-center">
                         <img  loading="lazy" data-src="/images/team_member1.jpg" alt="Team Member 1" class="card-img-top rounded-circle img-thumbnail">
                           <div class="card-body">
                              <h5 class="card-title">John Doe</h5>
                              <p class="card-text small text-muted">CEO</p>
                           </div>
                        </div>
                    </div>
                  <div class="col-md-3 mb-4">
                    <div class="card h-100 text-center">
                         <img  loading="lazy" data-src="/images/team_member2.jpg" alt="Team Member 2" class="card-img-top rounded-circle img-thumbnail">
                         <div class="card-body">
                             <h5 class="card-title">Jane Smith</h5>
                             <p class="card-text small text-muted">CTO</p>
                           </div>
                      </div>
                 </div>
                   <div class="col-md-3 mb-4">
                      <div class="card h-100 text-center">
                         <img  loading="lazy" data-src="/images/team_member3.jpg" alt="Team Member 3" class="card-img-top rounded-circle img-thumbnail">
                           <div class="card-body">
                              <h5 class="card-title">David Lee</h5>
                              <p class="card-text small text-muted">CFO</p>
                           </div>
                       </div>
                   </div>
                </div>
          </div>
      </section> -->

      <section class="py-5">
          <div class="container text-center">
             <h2>Our Vision</h2>
              <p class="lead">To be the most trusted e-commerce platform in Bangladesh, empowering both customers and businesses through seamless connectivity and reliable service.</p>
              <a href="/info/b2c" class="btn btn-outline-secondary mx-2">Explore B2C</a>
              <a href="/info/b2b" class="btn btn-outline-secondary mx-2">Explore B2B</a>
          </div>
      </section>

      <section class="bg-light py-5">
          <div class="container text-center">
              <h2>Join Us</h2>
              <p>Are you a customer or business interested in becoming a part of our community? Sign up today or contact us for more information!</p>
              <a href="/info/contact" class="btn btn-primary">Contact Now!</a>
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