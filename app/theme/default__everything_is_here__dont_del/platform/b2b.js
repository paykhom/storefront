import MarketplaceLayout from '../marketplace-layout'; // Adjust path as needed
//import { Page } from 'paykhom-fw/modules/view';

export default class  B2B extends MarketplaceLayout {
    constructor(params) {
        super(params);
    }

    *style() {
        
yield html`
      <style>
      </style>
        `;
    }

    *content() {
        
yield html`
<main class="page-wrapper">

<!-- Hero Section: Focus on Benefits of B2B Ecommerce -->
<section class="jarallax min-vh-100 py-lg-3 py-xl-4 py-xxl-5" data-jarallax data-speed="0.65">

  <div class="container-fluid position-relative z-2 py-5 my-md-3 my-lg-5">
    <div class="row pb-3 pt-4 pt-sm-5">
      <div class="col-md-9 col-lg-7 col-xl-6 col-xxl-5 offset-lg-1 pt-5">
        <div class="card border-0 bg-primary rounded-1 py-2 py-sm-3 py-md-4" data-bs-theme="dark">
          <div class="card-body">
            <div class="mx-auto pt-2" style="max-width: 535px;">
              <h1 class="display-5 mb-4">The effective solutions for your B2B business</h1>
              <p class="fs-lg pb-4 pb-lg-5 mb-2" style="max-width: 410px;">Ready to power up your B2B sales? Paykhom helps you create frictionless payment processes
                for your professional partners.</p>
              <div class="d-flex flex-column flex-sm-row align-items-center pb-lg-2">
                <a class="btn btn-lg btn-light w-100 w-sm-auto me-sm-3 mb-3 mb-sm-0" href="#learn-more">Learn More</a>
              </div>
              <ul class="list-unstyled d-sm-flex mb-0 pt-4 pt-sm-5 mt-lg-2 mt-xl-4">
                <li class="d-flex mb-2 mb-sm-0 pe-sm-1 me-sm-3">
                  <i class="ai-check-alt text-white fs-4 mt-n1 me-2"></i>
                  Streamlined Order Process
                </li>
                <li class="d-flex">
                  <i class="ai-check-alt text-white fs-4 mt-n1 me-2"></i>
                  Secure & Scalable Transactions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="jarallax-container-0" class="jarallax-container"
      style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; overflow: hidden; z-index: -100; clip-path: polygon(0px 0px, 100% 0px, 100% 100%, 0px 100%);">
      <div class="jarallax-img"
        style="background-image: url(\"/theme/around/assets/img/landing/corporate/hero-bg.jpg\"); object-fit: cover; object-position: 50% 50%; max-width: none; position: fixed; top: 0px; left: 0px; width: 1501.11px; height: 774.652px; overflow: hidden; pointer-events: none; transform-style: preserve-3d; backface-visibility: hidden; margin-top: -221.826px; transform: translate3d(0px, 221.826px, 0px);"
        data-jarallax-original-styles="background-image: url(assets/img/landing/corporate/hero-bg.jpg);"></div>
    </div>
</section>

<!-- Key Benefits Section: Addressing B2B Pain Points -->
<section class="container pt-5 mt-lg-3 mt-xl-4 mt-xxl-5" id="learn-more">
  <h2 class="h1 text-center pt-2 pt-sm-3 pt-md-4 pt-xl-5 mt-lg-2 mt-xl-1">Power Your Business with Paykhom for B2B Ecommerce
  </h2>
  <p class="text-center pb-3 mb-3 mb-lg-4">
    Power up your B2B Sales by integrating solutions for payments, security and much more!
  </p>
  <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">

    <!-- Feature 1: Secure and Scalable Payments -->
    <div class="col">
      <div class="card card-hover h-100 border-0 bg-secondary rounded-1 text-decoration-none overflow-hidden">
        <div class="card-body">
          <img src="/theme/around/assets/img/icons/b2b/secure-payment.png" width="55" alt="Icon" class="mb-3">
          <h3 class="h5 mb-2">Secure Transactions</h3>
          <p class="fs-sm">Protect sensitive data with our advanced encryption and security protocols, so that you will never have your data leaked.</p>
        </div>
      </div>
    </div>

    <!-- Feature 2: Flexible Payment Options -->
    <div class="col">
      <div class="card card-hover h-100 border-0 bg-secondary rounded-1 text-decoration-none overflow-hidden">
        <div class="card-body">
          <img src="/theme/around/assets/img/icons/b2b/invoicing.png" width="55" alt="Icon" class="mb-3">
          <h3 class="h5 mb-2">Invoicing Support</h3>
          <p class="fs-sm">Streamline payments with a new invoicing system.</p>
        </div>
      </div>
    </div>

    <!-- Feature 3: Automated Payment Processing -->
    <div class="col">
      <div class="card card-hover h-100 border-0 bg-secondary rounded-1 text-decoration-none overflow-hidden">
        <div class="card-body">
          <img src="/theme/around/assets/img/icons/b2b/automated.png" width="55" alt="Icon" class="mb-3">
          <h3 class="h5 mb-2">Automated Payments</h3>
          <p class="fs-sm">Enable recurring payments and automated transactions to ensure consistent cash flow and simplify the billing process.</p>
        </div>
      </div>
    </div>

    <!-- Feature 4: Bulk Orders & Pricing -->
    <div class="col">
      <div class="card card-hover h-100 border-0 bg-secondary rounded-1 text-decoration-none overflow-hidden">
        <div class="card-body">
          <img src="/theme/around/assets/img/icons/b2b/bulk-order.png" width="55" alt="Icon" class="mb-3">
          <h3 class="h5 mb-2">Bulk Orders & Pricing</h3>
          <p class="fs-sm">Effectively manage large transactions and custom pricing arrangements with dedicated B2B tools.</p>
        </div>
      </div>
    </div>

      <!-- Feature 5: Robust Fraud Protection -->
      <div class="col">
          <div class="card card-hover h-100 border-0 bg-secondary rounded-1 text-decoration-none overflow-hidden">
            <div class="card-body">
              <img src="/theme/around/assets/img/icons/b2b/secure-payment.png" width="55" alt="Secure payments" class="mb-3">
              <h3 class="h5 mb-2">Fraud Protection</h3>
              <p class="fs-sm">Power up your customer satisfaction with secure payment gateways.</p>
            </div>
          </div>
        </div>

    <!-- Feature 6: Streamlined Workflow -->
    <div class="col">
      <div class="card card-hover h-100 border-0 bg-secondary rounded-1 text-decoration-none overflow-hidden">
        <div class="card-body">
          <img src="/theme/around/assets/img/icons/b2b/streamlined.png" width="55" alt="Icon" class="mb-3">
          <h3 class="h5 mb-2">Streamlined Integration</h3>
          <p class="fs-sm">Integrate our all in one checkout systems to ensure satisfaction with your current revenue process.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Social Proof - Case Studies and Client Quotes  -->
<!-- Repeatable Section -->
<section class="bg-secondary position-relative py-4 py-md-5" data-bs-theme="dark">
  <div class="container py-lg-3 py-xl-4">
    <div class="row align-items-md-center justify-content-center justify-content-xl-between py-xl-2 my-xxl-3">
      <div class="col-md-6 col-xl-5 text-center text-md-start pb-sm-2 pb-md-0 mb-4 mb-md-0">
        <h2 class="h1 text-light">"Paykhom transformed our B2B operations!"</h2>
        <ul class="fs-lg pb-2 mb-sm-3" style="list-style-type: disc;">
          <li>Incredibly customizable</li>
          <li>Easy to integrate with other systems</li>
          <li>Unparalleled customer support</li>
        </ul>
      </div>
      <div class="col-md-6 col-xl-5">
        <img class="d-block mx-auto" src="/theme/around/assets/img/portfolio/brands/champion-blue-light.svg" alt="Company Logo">
      </div>
    </div>
  </div>
</section>

<!-- Powerful Call-to-Action : Last Step -->
<section class="pt-2 pt-md-0">
  <div class="position-relative pt-lg-3 pt-xl-4 pt-xxl-5">
    <div class="container px-4 px-sm-5 px-md-0 position-relative z-2 pt-md-4 pt-lg-5 pb-sm-2 pb-md-3 pb-xl-4 pb-xxl-5"
      data-bs-theme="dark">
      <div class="row justify-content-center aos-init" data-aos="fade-up" data-aos-duration="500" data-aos-offset="300">
        <div class="col-md-10 col-lg-8 col-xl-7 col-xxl-6 text-center py-5">
          <h2 class="display-1 mb-4">Reimagine your B2B ecommerce sales today</h2>
          <p class="text-body fs-xl pb-3 mb-3 mb-lg-4">Streamline your business' sales, transactions and data with Paykhom.</p>
          <div class="d-sm-flex justify-content-center">
            <a class="btn btn-lg btn-warning rounded-pill w-100 w-sm-auto me-sm-4 mb-3 mb-sm-0" href="#">Start free 14-day
              trial</a>
            <a class="btn btn-lg btn-outline-warning rounded-pill w-100 w-sm-auto" href="#">Request a demo</a>
          </div>
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

      }

      async uponReady() {
         await super.uponReady();

      }

   }
   page = new Page();
  
   </script>
        `;
    }

    *template() {
        
yield html`
            ${this.render(this.header())}
            
            ${this.render(this.content())}
            
            ${this.render(this.footer())}
            
            ${this.render(this.style())}
            
            ${this.render(this.script())}
        `;
    }
}