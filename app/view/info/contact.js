//`;namespace App\Views\Info;
  
import MarketplaceLayout from "../marketplace-layout";


export default class Contact extends MarketplaceLayout {
  

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
                               <h1>Get in touch</h1>
                                <p class="lead">We're here to help you.</p>
                               <p>Whether you have a question about our services, need support with your account, or want to explore partnership opportunities, our team is here for you. Reach out and let's make Paykhom a success for you.
                        </p>
                           </div>
                              <div class="col-md-6">
                                   <img  loading="lazy" data-src="/paykhom-nobg.png" width="100%" alt="Contact Us Image" class="img-fluid rounded">
                             </div>
                      </div>
                   </div>
                 </section>
             
                 <section class="section-padding">
                    <div class="container-fluid">
                       <div class="row">
                            <div class="col-md-12 text-center mb-4">
                             <h2>Contact Information</h2>
                             <p class="text-muted">Reach out to our support team for assistance.</p>
                       </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 text-center mb-6">
                             <div class="icon-box-icon"><i class="fa fa-envelope" aria-hidden="true"></i></div>
                             <h3>Email Us</h3>
                             <p>Drop us an email and our support team will get back to you within 24 hours.</p>
                               <a href="mailto:support@paykhom.com" class="btn btn-secondary btn-sm">info@paykhom.com</a>
                         </div>
                          <div class="col-md-6 text-center mb-6">
                            <div class="icon-box-icon"><i class="fa fa-phone-alt" aria-hidden="true"></i></div>
                            <h3>Call Us</h3>
                              <p>Call our support line for immediate assistance during business hours.</p>
                              <a href="tel:+880 1234567890" class="btn btn-secondary btn-sm">+8801534003442</a>
                          </div>
                    </div>
                 </div>
            </section>
            <!-- <section class="section-padding bg-light-gray">
                   <div class="container-fluid">
                      <div class="row">
                           <div class="col-md-12 text-center mb-4">
                            <h2>Send Us a Message</h2>
                          <p class="text-muted">Fill out the contact form below.</p>
                        </div>
                      </div>
                        <div class="row">
                            <div class="col-md-8 offset-md-2">
                                 <form>
                                       <div class="mb-3">
                                          <label for="name" class="form-label">Your Name</label>
                                            <input type="text" class="form-control" id="name" required>
                                       </div>
                                     <div class="mb-3">
                                         <label for="email" class="form-label">Your Email Address</label>
                                         <input type="email" class="form-control" id="email" required>
                                     </div>
                                     <div class="mb-3">
                                       <label for="subject" class="form-label">Subject</label>
                                        <input type="text" class="form-control" id="subject" required>
                                     </div>
                                    <div class="mb-3">
                                          <label for="message" class="form-label">Message</label>
                                          <textarea class="form-control" id="message" rows="5"></textarea>
                                       </div>
                                      <button class="btn btn-primary w-100">Send Message</button>
                                 </form>
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