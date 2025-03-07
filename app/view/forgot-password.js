//`;namespace App\Views;
  
import MarketplaceLayout from "./marketplace-layout";


export default class ForgotPassword extends MarketplaceLayout {
  

   *head() {
      // return html`
      //     <title>Paykhom Limited</title
      //     <meta name="title" content="Paykhom Limited" />

      //     <meta name="description" content="Paykhom Limited" />

      //     <meta name="keywords" content="Paykhom Limited" />


         
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
         <!-- section -->
         <section class="my-lg-14 my-8">
            <!-- container -->
            <div class="container-fluid">
               <!-- row -->
               <div class="row justify-content-center align-items-center">
                  <div class="col-12 col-md-6 col-lg-4 order-lg-1 order-2">
                     <!-- img -->
                     <img  loading="lazy" data-src="../assets/images/svg-graphics/fp-g.svg" alt="" class="img-fluid">
                  </div>
                  <div class="col-12 col-md-6 offset-lg-1 col-lg-4 order-lg-2 order-1 d-flex align-items-center">
                     <div>
                        <div class="mb-lg-9 mb-5">
                           <!-- heading -->
                           <h1 class="mb-2 h2 fw-bold">Forgot your password?</h1>
                           <p>Please enter the email address associated with your account and We will email you a link to reset your password.</p>
                        </div>
                        <!-- form -->
                        <form class="needs-validation" novalidate="">
                           <!-- row -->
                           <div class="row g-3">
                              <!-- col -->
                              <div class="col-12">
                                 <!-- input -->
                                 <label for="email_or_mobile_num" class="form-label visually-hidden">Email or Mobile</label>
                                 <input type="email" class="form-control" id="email_or_mobile_num" placeholder="Email or Mobile" required="">
                                 <div class="invalid-feedback">Please enter your Email or Mobile number.</div>
                              </div>

                              <!-- btn -->
                              <div class="col-12 d-grid gap-2">
                                 <button id="forgot_password" type="submit" class="btn btn-primary">Forgot Password</button>
                                 <a href="#" class="btn btn-light">Back</a>
                              </div>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </main>

`;        
   }
   *script() {
yield html`
   <script>
      /* JAVASCRIPT ************************************************************************************************************* */
   class Page extends MarketplaceLayout {





      constructor(params) {
         super(params);
         //PENDING: this.formValidator = new FormValidator()

      }




      async hookup() {
         await super.hookup();
      }



      async uponReady() {
         await super.uponReady();

         this.on('#forgot_password', 'click', this.onClickForgotPassword);


      }

      async onClickForgotPassword(e) {
         let targetUrl = "";
         let formData = {
            "email_or_mobile_num" : window.email_or_mobile_num.value,
         }

         const res = await this.fetch('/forgot-password', formData);
         if (res.status !== true) {
            alert ("Submission Failed. Please Try Again.");
            return; //EKN
         }        
         window.location.href = "/reset-password";

      }

   }
   page = new Page();
  
   </script>
`;
   }
}