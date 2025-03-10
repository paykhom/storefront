import MarketplaceLayout from '../marketplace-layout'; // Adjust path as needed
export default class  Signup extends MarketplaceLayout {
    constructor(args) {
        super(args);
    }

    *style() {
        
yield html`
            <style>
            </style>
        `;
    }

    *content() {
        
yield html`
<main>
         <!-- section -->
         <section class="my-lg-14 my-8">
            <div class="container-fluid">
               <!-- row -->
               <div class="row justify-content-center align-items-center">
                  <div class="col-12 col-md-6 col-lg-4 order-lg-1 order-2">
                     <!-- img -->
                     <img  loading="lazy" data-src="/theme/freshcart/assets/images/svg-graphics/signin-g.svg" alt="" class="img-fluid">
                  </div>
                  <!-- col -->
                  <div class="col-12 col-md-6 offset-lg-1 col-lg-4 order-lg-2 order-1">
                     <div class="mb-lg-9 mb-5">
                        <h1 class="mb-1 h2 fw-bold">Paykhom Limited</h1>
                        <p>Welcome back to Paykhom Limited! Enter your email to get started.</p>
                     </div>

                     <form class="needs-validation" novalidate="" id = "frmLogin">
                        <div class="row g-3">
                           <!-- row -->

                           <div class="col-12">
                              <!-- input -->
                              <label for="email" class="form-label visually-hidden">Email address</label>
                              <input type="email" class="form-control" id="email" placeholder="Email" required="" data-validation="required">
                              <div class="invalid-feedback">Please enter name.</div>
                           </div>
                           <div class="col-12">
                              <!-- input -->
                              <div class="password-field position-relative">
                                 <label for="password" class="form-label visually-hidden">Password</label>
                                 <div class="password-field position-relative">
                                    <input type="password" class="form-control fakePassword" id="password" placeholder="*****" required=""  data-validation="required">
                                    <span><i class="bi bi-eye-slash passwordToggler"></i></span>
                                    <div class="invalid-feedback">Please enter password.</div>
                                 </div>
                              </div>
                           </div>
                           <div class="d-flex justify-content-between">
                              <!-- form check -->
                              <div class="form-check">
                                 <input class="form-check-input" type="checkbox" value="" id="remember">
                                 <!-- label -->
                                 <label class="form-check-label" for="remember">Remember me</label>
                              </div>
                              <div>
                                 Forgot password?
                                 <a id="forgotPassword" href="/forgot-password">Reset It</a>
                              </div>
                           </div>
                           <!-- btn -->
                           <div class="col-12 d-grid"><button type="button" id = "login" class="btn btn-primary">Login</button></div>
                           <!-- link -->
                           <div>
                              Don’t have an account?
                              <a id = "register" href="/register">Register</a>
                           </div>
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




      async hookup() {
         await super.hookup();
      }



      async uponReady() {
         await super.uponReady();

         this.suffixTargetUrl();      
         this.on('#login', 'click', this.onClickLogin);


      }

      async onClickLogin(e) {
         e.preventDefault();
         e.stopPropagation();

         let formData = {
            "email" : window.email.value,
            "password"  : window.password.value,
            "remember" : window.remember.checked

         }

         await this.login(formData);

      }

   }
   page = new Page();
  
   </script>
        `;
    }
}