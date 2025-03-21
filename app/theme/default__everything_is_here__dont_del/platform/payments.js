import MarketplaceLayout from '../marketplace-layout'; // Adjust path as needed
//import { Page } from 'paykhom-fw/modules/view';

export default class  Payments extends MarketplaceLayout {
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
    <main class="page-wrapper">

    <!-- Hero Section: Hook with Benefits -->
    <section class="jarallax min-vh-100 py-lg-3 py-xl-4 py-xxl-5" data-jarallax data-speed="0.65">
  
      <div class="container-fluid position-relative z-2 py-5 my-md-3 my-lg-5">
        <div class="row pb-3 pt-4 pt-sm-5">
          <div class="col-md-9 col-lg-7 col-xl-6 col-xxl-5 offset-lg-1 pt-5">
            <div class="card border-0 bg-primary rounded-1 py-2 py-sm-3 py-md-4" data-bs-theme="dark">
              <div class="card-body">
                <div class="mx-auto pt-2" style="max-width: 535px;">
                  <h1 class="display-5 mb-4">Streamline Your Revenue with Flexible Payment Power</h1>
                  <p class="fs-lg pb-4 pb-lg-5 mb-2" style="max-width: 410px;">Unlock the potential to sell more with Paykhom’s ability to manage multiple different payments.</p>
                  <div class="d-flex flex-column flex-sm-row align-items-center pb-lg-2">
                    <a class="btn btn-lg btn-light w-100 w-sm-auto me-sm-3 mb-3 mb-sm-0" href="#benefits">Discover the Options</a>
                  </div>
                  <ul class="list-unstyled d-sm-flex mb-0 pt-4 pt-sm-5 mt-lg-2 mt-xl-4">
                    <li class="d-flex mb-2 mb-sm-0 pe-sm-1 me-sm-3">
                      <i class="ai-check-alt text-white fs-4 mt-n1 me-2"></i>
                      Reach More Customers
                    </li>
                    <li class="d-flex">
                      <i class="ai-check-alt text-white fs-4 mt-n1 me-2"></i>
                      Boost Conversions
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
            style="background-image: url("/theme/around/assets/img/landing/corporate/hero-bg.jpg"); object-fit: cover; object-position: 50% 50%; max-width: none; position: fixed; top: 0px; left: 0px; width: 1501.11px; height: 774.652px; overflow: hidden; pointer-events: none; transform-style: preserve-3d; backface-visibility: hidden; margin-top: -221.826px; transform: translate3d(0px, 221.826px, 0px);"
            data-jarallax-original-styles="background-image: url(assets/img/landing/corporate/hero-bg.jpg);"></div>
        </div>
    </section>
  
    <!-- Showcase All Benefits & Options: Feature -->
    <section class="container py-5 my-lg-3 my-xl-4 my-xxl-5" id="benefits">
      <h2 class="h1 text-center pt-2 pt-sm-3 pt-md-4 pt-xl-5 mt-lg-2 mt-xl-1">Comprehensive Payment Solutions</h2>
      <p class="text-center pb-3 mb-3 mb-lg-4">
        We offer everything you need to ensure your business makes money!
      </p>
  
      <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
        <!-- Card 1: Online Payments -->
        <div class="col">
          <div class="card card-hover h-100 border-0 bg-secondary rounded-1 text-decoration-none overflow-hidden">
            <div class="card-body">
              <img src="/theme/around/assets/img/icons/payment-methods/credit-card.png" width="45" alt="Credit Card icon" class="mb-3">
              <h3 class="h5 mb-2">Credit Card Processing</h3>
              <p class="fs-sm">Enable reliable payment processing.</p>
            </div>
          </div>
        </div>
  
        <!-- Card 2: In-Person Payments -->
        <div class="col">
          <div class="card card-hover h-100 border-0 bg-secondary rounded-1 text-decoration-none overflow-hidden">
            <div class="card-body">
              <img src="/theme/around/assets/img/icons/payment-methods/pos.png" width="45" alt="In person icon" class="mb-3">
              <h3 class="h5 mb-2">In-Person Payments</h3>
              <p class="fs-sm">Offer in-person payments that can help to improve customer satisfaction and give users more control over payments.</p>
            </div>
          </div>
        </div>
  
        <!-- Card 3: Mobile Payments -->
        <div class="col">
          <div class="card card-hover h-100 border-0 bg-secondary rounded-1 text-decoration-none overflow-hidden">
            <div class="card-body">
              <img src="/theme/around/assets/img/icons/payment-methods/mobile-payment.png" width="45" alt="mobile payments icon" class="mb-3">
              <h3 class="h5 mb-2">Mobile Payments</h3>
              <p class="fs-sm">Give a great mobile experience through apps and SDKs, reaching customers whenever, wherever!</p>
            </div>
          </div>
        </div>
  
        <!-- Card 4: International Payments -->
        <div class="col">
          <div class="card card-hover h-100 border-0 bg-secondary rounded-1 text-decoration-none overflow-hidden">
            <div class="card-body">
              <img src="/theme/around/assets/img/icons/payment-methods/global-payment.png" width="45" alt="global payments icon" class="mb-3">
              <h3 class="h5 mb-2">International Payments</h3>
              <p class="fs-sm">Go global and start to acquire customers from around the world with these options for customers across the globe.</p>
            </div>
          </div>
        </div>
  
        <!-- Card 5: Recurring Billing -->
        <div class="col">
          <div class="card card-hover h-100 border-0 bg-secondary rounded-1 text-decoration-none overflow-hidden">
            <div class="card-body">
              <img src="/theme/around/assets/img/icons/payment-methods/recurring.png" width="45" alt="Recurring Payments icon" class="mb-3">
              <h3 class="h5 mb-2">Recurring Payments</h3>
              <p class="fs-sm">Subscription payments are another powerful tool for any business!</p>
            </div>
          </div>
        </div>
  
        <!-- Card 6: Split Payments-->
        <div class="col">
          <div class="card card-hover h-100 border-0 bg-secondary rounded-1 text-decoration-none overflow-hidden">
            <div class="card-body">
              <img src="/theme/around/assets/img/icons/payment-methods/marketplace.png" width="45" alt="Split payments icon" class="mb-3">
              <h3 class="h5 mb-2">On-Demand Marketplace</h3>
              <p class="fs-sm">Paykhom is fully equipped to make transactions seamless.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  
    <!-- Persuasion: Authority + Building Credibility -->
    <section class="container py-5 my-lg-3 my-xl-4 my-xxl-5">
      <div class="row align-items-center mb-2 pt-2">
        <div class="col-md-6">
          <h2 class="h1">Trusted by Leading Businesses</h2>
          <p class="lead pb-3">We have solutions that help you make money and generate more income!.</p>
          <a class="btn btn-link" href="#">
            View Case Studies
            <i class="ai-arrow-right ms-2"></i>
          </a>
        </div>
        <div class="col-md-6">
          <img src="/theme/around/assets/img/payment-methods/many-payment-methods.png" width="120" alt="Paykhom users">
        </div>
      </div>
    </section>
  
    <!-- Social Proof -->
    <!-- Implement Testimonials Slider -->
  
  
    <!-- Closing: Call to Action, Reinforce Main Benefit -->
    <section class="bg-secondary py-5">
      <div class="container text-center">
        <h2 class="h1 mb-4">Ready to Maximize Your Revenue Potential?</h2>
        <p class="lead">Start offering more payment options and watch your business grow!</p>
        <a class="btn btn-lg btn-primary" href="/pricing">Explore Paykhom's Pricing</a>
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
}