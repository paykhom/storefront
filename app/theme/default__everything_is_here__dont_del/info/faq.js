//`;namespace App\Views\Info;
  
import MarketplaceLayout from "../marketplace-layout";


export default class Faq extends MarketplaceLayout {
  

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
                             <h1>Frequently Asked Questions</h1>
                            <p class="lead">Answers to common questions about Paykhom.</p>
                            <p>We are committed to making your experience with Paykhom seamless. Here you’ll find detailed answers to our most frequently asked questions by both our B2C and B2B customers. If your question is still not covered here, do not hesitate to contact us for more clarification.</p>
                           <a href="/info/contact" class="btn btn-primary">Contact Us</a>
                        </div>
                           <div class="col-md-6">
                              <img  loading="lazy" data-src="/_assets/images/info/faq.jpg" width="100%"  alt="FAQ Image" class="img-fluid rounded">
                         </div>
                     </div>
                 </div>
           </section>
           
            <section class="section-padding">
                <div class="container-fluid">
                  <div class="row">
                       <div class="col-md-12 text-center">
                           <h2>General Questions</h2>
                       </div>
                    </div>
                     <div class="row">
                      <div class="col-md-6 mb-4">
                            <div class="accordion" id="faqAccordion1">
                              <div class="accordion-item">
                                   <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            What is Paykhom?
                                        </button>
                                   </h2>
                                     <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion1">
                                     <div class="accordion-body">
                                         Paykhom is an ecommerce startup in Bangladesh that aims to provide a reliable and easy-to-use online platform for both B2C and B2B customers to connect and do business.
                                     </div>
                                  </div>
                              </div>
                               <div class="accordion-item">
                                     <h2 class="accordion-header" id="headingTwo">
                                         <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                               Do I need to register to purchase?
                                          </button>
                                    </h2>
                                   <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion1">
                                        <div class="accordion-body">
                                          Yes, for B2C customers, we require an account registration for secure tracking and management of your purchases. B2B customers may also require specific verification processes.
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
                                            How can I sell on Paykhom?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion2">
                                       <div class="accordion-body">
                                          To start selling on Paykhom, visit our seller registration page to create a seller account. Once your account has been created you can start adding your product listings and start selling.
                                     </div>
                                    </div>
                               </div>
                            <div class="accordion-item">
                                  <h2 class="accordion-header" id="headingFour">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            Is Paykhom available nationwide?
                                        </button>
                                    </h2>
                                   <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#faqAccordion2">
                                       <div class="accordion-body">
                                       Yes, Paykhom is available across Bangladesh. We work with multiple logistics providers to deliver products and orders nationwide.
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
                        <div class="col-md-12 text-center">
                             <h2>Order-Related Questions</h2>
                         </div>
                   </div>
                    <div class="row">
                          <div class="col-md-6 mb-4">
                            <div class="accordion" id="faqAccordion3">
                               <div class="accordion-item">
                                   <h2 class="accordion-header" id="headingFive">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                                              How do I cancel my order?
                                       </button>
                                  </h2>
                                   <div id="collapseFive" class="accordion-collapse collapse show" aria-labelledby="headingFive" data-bs-parent="#faqAccordion3">
                                     <div class="accordion-body">
                                          You can cancel your order by going to the 'Orders History' page and selecting "Cancel" option if your order has not been processed or shipped. Once an order has been shipped you cannot cancel it.
                                      </div>
                                 </div>
                            </div>
                            <div class="accordion-item">
                                 <h2 class="accordion-header" id="headingSix">
                                     <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                           What if my order is not delivered on time?
                                      </button>
                                 </h2>
                                   <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#faqAccordion3">
                                      <div class="accordion-body">
                                       We’re working hard with logistics to ensure fast delivery. If your delivery exceeds the expected time contact our support team for help.
                                  </div>
                                 </div>
                           </div>
                             </div>
                        </div>
                           <div class="col-md-6 mb-4">
                               <div class="accordion" id="faqAccordion4">
                                   <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingSeven">
                                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                                  What if I received the wrong product?
                                          </button>
                                     </h2>
                                    <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#faqAccordion4">
                                        <div class="accordion-body">
                                          If you received an item different from what you ordered, go to the 'Order History' and choose the 'Return' option and then we will guide you on the return process.
                                    </div>
                                    </div>
                               </div>
                             <div class="accordion-item">
                                  <h2 class="accordion-header" id="headingEight">
                                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                          Can I combine different seller’s products into a single order?
                                       </button>
                                  </h2>
                                  <div id="collapseEight" class="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#faqAccordion4">
                                      <div class="accordion-body">
                                       You may combine products from different sellers into a single order. However, please be aware that different items may arrive in separate deliveries as they are provided from different sources.
                                   </div>
                                  </div>
                              </div>
                           </div>
                       </div>
                   </div>
                </div>
            </section>
            
            <section class="section-padding">
                <div class="container-fluid">
                  <div class="row">
                     <div class="col-md-12 text-center">
                          <h2>Still have questions?</h2>
                           <p class="text-muted">Contact our support team for further help.</p>
                     </div>
                  </div>
                  <div class="row justify-content-center">
                      <div class="col-md-6 text-center mb-4">
                           <div class="icon-box-icon"><i class="fa fa-headset" aria-hidden="true"></i></div>
                             <h3>Contact Support</h3>
                                <p>Reach out to our dedicated support team through the contact form for personalized assistance.</p>
                             <a href="/info/contact" class="btn btn-primary">Contact Now</a>
                       </div>

                    </div>
                  </div>
              </section>
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