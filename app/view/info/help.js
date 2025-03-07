//`;namespace App\Views\Info;
  
import MarketplaceLayout from "../marketplace-layout";


export default class Help extends MarketplaceLayout {
  

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
                          <h1>Welcome to Paykhom Help Center</h1>
                            <p class="lead">How can we assist you today?</p>
                            <p>We're committed to providing you with the support you need to make the most out of Paykhom. Browse through our resources to find answers to your questions, or reach out to our support team.</p>
                        </div>
                        <div class="col-md-6">
                           <img  loading="lazy" data-src="/_assets/images/info/help.webp" width="100%"  alt="Help Center Image" class="img-fluid rounded">
                        </div>
                     </div>
                 </div>
            </section>
             <section class="section-padding">
                <div class="container-fluid">
                   <div class="row">
                        <div class="col-md-12 text-center mb-4">
                           <h2>Frequently Asked Questions</h2>
                        </div>
                    </div>
                    <div class="row">
                         <div class="col-md-6 mb-4">
                            <div class="accordion" id="faqAccordion1">
                              <div class="accordion-item">
                                 <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                       What payment methods do you accept?
                                    </button>
                                 </h2>
                                  <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion1">
                                     <div class="accordion-body">
                                       We currently accept all major credit and debit cards, along with popular mobile payment solutions like bKash, Nagad, and Rocket.
                                     </div>
                                  </div>
                              </div>
                              <div class="accordion-item">
                                <h2 class="accordion-header" id="headingTwo">
                                   <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                     How can I track my order?
                                   </button>
                                 </h2>
                                 <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion1">
                                     <div class="accordion-body">
                                      You can track your order through the "My Orders" section in your account. Simply log in and you will find the tracking information there.
                                  </div>
                                 </div>
                              </div>
                            </div>
                         </div>
                        <div class="col-md-6 mb-4">
                           <div class="accordion" id="faqAccordion2">
                              <div class="accordion-item">
                                  <h2 class="accordion-header" id="headingThree">
                                     <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                         What is your return policy?
                                    </button>
                                  </h2>
                                 <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion2">
                                     <div class="accordion-body">
                                      We offer a 15-day return policy for most products. Please refer to our 'Returns' page for more details and exceptions.
                                  </div>
                                  </div>
                              </div>
                             <div class="accordion-item">
                                <h2 class="accordion-header" id="headingFour">
                                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                       How do I create a business account?
                                    </button>
                                </h2>
                                 <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#faqAccordion2">
                                    <div class="accordion-body">
                                      To create a business account, visit our registration page and select the business account option. Follow the steps to provide necessary business information.
                                  </div>
                                </div>
                             </div>
                           </div>
                        </div>
                    </div>
                 </div>
            </section>
            <section class="section-padding bg-light-gray">
                <div class="container-fluid">
                     <div class="row">
                        <div class="col-md-12 text-center mb-4">
                           <h2>Explore our Guides</h2>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4 mb-4 text-center">
                           <div class="icon-box-icon"><i class="fa fa-shopping-cart" aria-hidden="true"></i></div>
                            <h3>For Buyers</h3>
                             <p>New to our platform? Our buyer's guide will assist you in making a smooth and informed purchase.</p>
                             <a href="#" class="btn btn-secondary btn-sm">Read More</a>
                        </div>
                         <div class="col-md-4 mb-4 text-center">
                            <div class="icon-box-icon"><i class="fa fa-store" aria-hidden="true"></i></div>
                            <h3>For Sellers</h3>
                           <p>If you're a seller, use our detailed guides for setting up your store and optimizing your products.</p>
                            <a href="#" class="btn btn-secondary btn-sm">Read More</a>
                         </div>
                        <div class="col-md-4 mb-4 text-center">
                            <div class="icon-box-icon"><i class="fa fa-shield-alt" aria-hidden="true"></i></div>
                            <h3>Security FAQs</h3>
                             <p>Learn how we ensure secure transactions and protect your information.</p>
                             <a href="#" class="btn btn-secondary btn-sm">Read More</a>
                         </div>
                    </div>
                </div>
           </section>

             <!-- <section class="section-padding">
              <div class="container-fluid">
                  <div class="row">
                       <div class="col-md-12 text-center">
                            <h2>Still Need Help?</h2>
                            <p class="text-muted">Get in touch with our support team.</p>
                       </div>
                   </div>
                   <div class="row">
                      <div class="col-md-6 text-center mb-4">
                            <div class="icon-box-icon"><i class="fa fa-headset" aria-hidden="true"></i></div>
                           <h3>Contact Support</h3>
                           <p>Our dedicated support team is here to assist you with any questions or issues you may have.</p>
                            <a href="/info/contact" class="btn btn-primary">Contact Now</a>
                       </div>
                      <div class="col-md-6 text-center mb-4">
                             <div class="icon-box-icon"><i class="fa fa-search" aria-hidden="true"></i></div>
                            <h3>Browse All FAQs</h3>
                           <p>Explore our collection of help articles.</p>
                           <a href="#" class="btn btn-secondary">View FAQs</a>
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