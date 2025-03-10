//`;namespace App\Views;
  
import MarketplaceLayout from "../marketplace-layout";


export default class ResetPassword extends MarketplaceLayout {
  

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
                     <img  loading="lazy" data-src="/theme/freshcart/assets/images/svg-graphics/signup-g.svg" alt="" class="img-fluid">
                  </div>
                  <!-- col -->
                  <div class="col-12 col-md-6 offset-lg-1 col-lg-4 order-lg-2 order-1">
                     <div class="mb-lg-9 mb-5">
                        <h1 class="mb-1 h2 fw-bold">Get Started Shopping</h1>
                        <p>Welcome to Paykhom! Enter your email to get started.</p>
                     </div>
                     <!-- form -->
                     <form class="needs-validation" novalidate="">
                        <div class="row g-3">
                           <!-- col -->
                           <div class="col-12">
                              <!-- input -->
                              <label for="otp" class="form-label visually-hidden">OTP</label>
                              <input type="email" class="form-control" id="otp" placeholder="OTP" required="">
                              <div class="invalid-feedback">Please enter the OTP we sent you to your Email.</div>
                           </div>
                           <div class="col-12">
                              <!-- input -->
                              <label for="email" class="form-label visually-hidden">Email</label>
                              <input type="email" class="form-control" id="email" placeholder="Email" required="">
                              <div class="invalid-feedback">Please enter your Email.</div>
                           </div>

                           <div class="col-12">
                              <div class="password-field position-relative">
                                 <label for="password" class="form-label visually-hidden">Password</label>
                                 <div class="password-field position-relative">
                                    <input type="password" class="form-control fakePassword" id="password" placeholder="Password" required="">
                                    <span><i class="bi bi-eye-slash passwordToggler"></i></span>
                                    <div class="invalid-feedback">Please enter password.</div>
                                 </div>
                              </div>
                           </div>

                           <div class="col-12">
                              <div class="password-field position-relative">
                                 <label for="confirm_password" class="form-label visually-hidden">Confirm Password</label>
                                 <div class="password-field position-relative">
                                    <input type="password" class="form-control fakePassword" id="confirm_password" placeholder="Confirm Password" required="">
                                    <span><i class="bi bi-eye-slash passwordToggler"></i></span>
                                    <div class="invalid-feedback">Please enter password again.</div>
                                 </div>
                              </div>
                           </div>


                           <!-- btn -->
                           <div class="col-12 d-grid"><input id="reset_password"  type="button" value="Reset Password" class="btn btn-primary"></div>

                           <!-- text -->
                           <p>
                              <small>
                                 By continuing, you agree to our
                                 <a href="#!">Terms of Service</a>
                                 &amp;
                                 <a href="#!">Privacy Policy</a>
                              </small>
                           </p>
                        </div>
                     </form>
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




      async uponReady() {
         await super.uponReady();

         this.on('#reset_password', 'click', this.onClickResetPassword);


      }

      async onClickResetPassword(e) {
         e.preventDefault();
         e.stopPropagation();

         // debugger;

         let targetUrl = "";
         let formData = {
            "otp" : window.otp.value,
            "email" : window.email.value,
            "password"  : window.password.value,
            "confirm_password"  : window.confirm_password.value,

         }

         const res = await this.fetch('/reset-password', formData);
         if (res.status !== true) {
            alert ("Submission Failed. Please Try Again.");
            return; //EKN
         }        
          
         if (window.location.href.indexOf("target-url") > -1) {
            targetUrl = new URLSearchParams(window.location.search).get("target-url") || "";
            if(targetUrl.length>0) {
               window.location.href = targetUrl;
            }
         }
         else {
            window.location.href = "/login";

         }
      }
   }
   page = new Page();
  
   </script>
`;
   }
}