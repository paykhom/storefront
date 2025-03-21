//`;namespace App\Views\Info;
  
import MarketplaceLayout from "../marketplace-layout";


export default class Value extends MarketplaceLayout {
  

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
                         <h1>Why Choose Paykhom?</h1>
                          <p class="lead">We deliver value, growth, and success.</p>
                         <p>At Paykhom, we go beyond being just an e-commerce platform; we're your strategic partner in the digital marketplace. We provide a comprehensive set of values and features that create a unique space for businesses and shoppers to thrive in Bangladesh. Choose Paykhom and witness the difference in online trade and growth.</p>
                         <a href="/info/contact" class="btn btn-primary">Contact Us</a>
                      </div>
                     <div class="col-md-6">
                        <img  loading="lazy" data-src="/_assets/images/info/values.webp" width="100%"  alt="Why Choose Paykhom" class="img-fluid rounded">
                     </div>
                  </div>
                </div>
           </section>

         <section class="section-padding">
            <div class="container-fluid">
                 <div class="row">
                      <div class="col-md-12 text-center">
                          <h2>Our Core Values</h2>
                       </div>
                 </div>
                 <div class="row">
                    <div class="col-md-4 text-center">
                       <div class="icon-box-icon"><i class="fa fa-bolt" aria-hidden="true"></i></div>
                        <h3>Efficiency</h3>
                        <p>We streamline the e-commerce process to be as efficient as possible, saving our customers both time and resources.</p>
                    </div>
                     <div class="col-md-4 text-center">
                         <div class="icon-box-icon"><i class="fa fa-lock" aria-hidden="true"></i></div>
                        <h3>Security</h3>
                        <p>We prioritize the security of your information and transactions, utilizing advanced encryption and data protection protocols.</p>
                    </div>
                     <div class="col-md-4 text-center">
                         <div class="icon-box-icon"><i class="fa fa-globe" aria-hidden="true"></i></div>
                        <h3>Accessibility</h3>
                        <p>We aim to provide everyone access to the digital marketplace. Our services are built to be inclusive for a broad range of users.</p>
                    </div>

                 </div>
             </div>
         </section>

          <!-- <section class="section-padding bg-light-gray">
            <div class="container-fluid">
                  <div class="row">
                      <div class="col-md-12 text-center">
                        <h2>Benefits of Paykhom</h2>
                    </div>
                  </div>
               <div class="row">
                      <div class="col-md-4 mb-4 text-center">
                            <div class="icon-box-icon"><i class="fa fa-check" aria-hidden="true"></i></div>
                           <h3>Expanded Market Reach</h3>
                           <p>Reach a wider customer base across Bangladesh, expanding beyond traditional geographical limitations.</p>
                       </div>
                       <div class="col-md-4 mb-4 text-center">
                         <div class="icon-box-icon"><i class="fa fa-bullhorn" aria-hidden="true"></i></div>
                            <h3>Enhanced Brand Visibility</h3>
                             <p>Elevate your brand's online presence through targeted marketing tools and a robust platform.</p>
                       </div>
                        <div class="col-md-4 mb-4 text-center">
                              <div class="icon-box-icon"><i class="fa fa-chart-line" aria-hidden="true"></i></div>
                            <h3>Increased Sales</h3>
                             <p>Drive revenue growth by tapping into the growing e-commerce market and attracting more customers.</p>
                        </div>
                    </div>
                     <div class="row">
                      <div class="col-md-4 mb-4 text-center">
                            <div class="icon-box-icon"><i class="fa fa-user-check" aria-hidden="true"></i></div>
                           <h3>Trusted Platform</h3>
                           <p>Built with a secure and trustworthy platform that creates trust and confidence with your customers.</p>
                       </div>
                       <div class="col-md-4 mb-4 text-center">
                           <div class="icon-box-icon"><i class="fa fa-comments" aria-hidden="true"></i></div>
                           <h3>Customer Support</h3>
                           <p>Access to professional customer support to answer any questions or concerns that your business may have.</p>
                       </div>
                       <div class="col-md-4 mb-4 text-center">
                           <div class="icon-box-icon"><i class="fa fa-hand-holding-usd" aria-hidden="true"></i></div>
                          <h3>Competitive Prices</h3>
                           <p>Access to a diverse range of products that allow you to compare costs and have the best pricing.</p>
                       </div>
                   </div>
                </div>
          </section> -->

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