//`;namespace App\Views\Info;
  
import MarketplaceLayout from "../marketplace-layout";


export default class About extends MarketplaceLayout {
  

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
                        <h1>About Paykhom</h1>
                        <p class="lead">Empowering Businesses in Bangladesh with Seamless Ecommerce Solutions</p>
                        <p>Paykhom is a dynamic ecommerce startup based in Bangladesh, dedicated to providing comprehensive B2C and B2B solutions. We are passionate about driving growth and innovation for businesses, large and small, through our robust and user-friendly platform. Our mission is to create a thriving digital marketplace that connects sellers and buyers efficiently.</p>
                        <a href="/info/contact" class="btn btn-primary">Contact Us</a>
                    </div>
                    <div class="col-md-6">
                      <img  loading="lazy" data-src="/paykhom-nobg.png" width="100%" alt="About Us Image" class="img-fluid rounded">
                    </div>
                </div>
            </div>
        </section>

        <section class="section-padding bg-light-gray">
            <div class="container-fluid">
              <div class="row">
                 <div class="col-md-6 order-2 order-md-1">
                      <img  loading="lazy" data-src="/_assets/images/info/develop-company-vision.jpg" width="100%" alt="About Us Image" class="img-fluid rounded">
                  </div>
                   <div class="col-md-6 order-1 order-md-2">
                        <h2>Our Vision</h2>
                        <p>Our vision is to be the leading ecommerce platform in Bangladesh, recognized for our commitment to empowering local businesses and contributing to economic growth. We aim to create a sustainable ecosystem where businesses can thrive in the digital age.</p>
                        
                         <h2>Our Mission</h2>
                        <p>Our mission is to provide a seamless, secure, and efficient ecommerce experience for both B2C and B2B customers. We strive to empower businesses in Bangladesh by providing them with the tools and support they need to succeed in the digital marketplace. </p>
                  </div>
              </div>
            </div>
            <br/>
      </section>
        
        <section class="section-padding">
             <div class="container-fluid">
                 <div class="row">
                      <div class="col-md-12 text-center">
                        <h2>Our Key Pillars</h2>
                      </div>
                 </div>
                 <div class="row">
                    <div class="col-md-4 text-center">
                        <div class="icon-box-icon"><i class="fa fa-rocket" aria-hidden="true"></i></div>
                        <h3>Innovation</h3>
                        <p>We constantly strive to bring innovative solutions to the ecommerce space, enhancing both the seller and buyer experience.</p>
                    </div>
                    <div class="col-md-4 text-center">
                       <div class="icon-box-icon"><i class="fa fa-check" aria-hidden="true"></i></div>
                        <h3>Reliability</h3>
                        <p>We are committed to maintaining a reliable and trustworthy platform, ensuring smooth transactions and secure interactions for all users.</p>
                    </div>
                     <div class="col-md-4 text-center">
                        <div class="icon-box-icon"><i class="fa fa-user-group" aria-hidden="true"></i></div>
                        <h3>Customer-Centric</h3>
                        <p>Our focus is always on our customers. We are dedicated to providing excellent support and ensuring that our platform meets their diverse needs.</p>
                    </div>

                 </div>
             </div>
        </section>

       <!-- <section class="section-padding">
                <div class="container-fluid">
                  <div class="row">
                       <div class="col-md-12 text-center">
                            <h2>Meet Our Team</h2>
                            <p class="text-muted">A dedicated team of innovators.</p>
                       </div>
                   </div>
                   <div class="row">
                      <div class="col-md-3 text-center mb-4">
                        <img  loading="lazy" data-src="https://placehold.co/150x150/ff8/000" alt="Team Member" class="rounded-circle mb-3" >
                           <h4>John Doe</h4>
                           <p class="text-muted">CEO</p>
                      </div>
                     <div class="col-md-3 text-center mb-4">
                           <img  loading="lazy" data-src="https://placehold.co/150x150/ff0/000" alt="Team Member" class="rounded-circle mb-3" >
                           <h4>Jane Smith</h4>
                           <p class="text-muted">CTO</p>
                       </div>
                        <div class="col-md-3 text-center mb-4">
                            <img  loading="lazy" data-src="https://placehold.co/150x150/0ff/000" alt="Team Member" class="rounded-circle mb-3" >
                            <h4>Peter Jones</h4>
                            <p class="text-muted">COO</p>
                       </div>
                        <div class="col-md-3 text-center mb-4">
                           <img  loading="lazy" data-src="https://placehold.co/150x150/f0f/000" alt="Team Member" class="rounded-circle mb-3" >
                             <h4>Emily White</h4>
                             <p class="text-muted">Marketing Head</p>
                        </div>
                  </div>
                </div>
           </section> -->

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