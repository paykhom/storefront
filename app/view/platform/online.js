import MarketplaceLayout from '../marketplace-layout'; // Adjust path as needed
//import { Page } from 'paykhom-fw/view';

export default class  Online extends MarketplaceLayout {
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

    <!-- Hero Section: State the Problem and Offer the Solution -->
    <section class="bg-primary bg-opacity-10 d-flex min-vh-100 overflow-hidden py-5">
      <div class="container d-flex justify-content-center pb-sm-3 py-md-4 py-xl-5">
        <div class="row align-items-center pt-5 mt-4 mt-xxl-0">
  
          <!-- Video + Parallax -->
          <div class="col-lg-6 mb-4 mb-lg-0 pb-3 pb-lg-0">
            <div class="parallax mx-auto mx-lg-0" style="max-width: 582px;">
              <div class="parallax-layer z-3" data-depth="0.1">
                <div class="position-relative bg-dark mx-auto"
                  style="max-width: 61%; padding: .3125rem; margin-bottom: 9.9%; border-radius: calc(var(--ar-border-radius) * 2.125);">
                  <video class="d-block w-100" autoplay loop muted
                    style="border-radius: calc(var(--ar-border-radius) * 1.875);">
                    <source src="/theme/around/assets/img/landing/marketing-agency/hero/video.mp4" type="video/mp4">
                  </video>
                </div>
              </div>
              <div class="parallax-layer" data-depth="0.3">
                <img src="/theme/around/assets/img/landing/marketing-agency/hero/shape01.svg" alt="Background shape">
              </div>
              <div class="parallax-layer z-2" data-depth="-0.1">
                <img src="/theme/around/assets/img/landing/marketing-agency/hero/shape02.svg" alt="Background shape">
              </div>
              <div class="parallax-layer" data-depth="-0.15">
                <img src="/theme/around/assets/img/landing/marketing-agency/hero/shape03.svg" alt="Background shape">
              </div>
              <div class="parallax-layer z-2" data-depth="-0.25">
                <img src="/theme/around/assets/img/landing/marketing-agency/hero/shape04.svg" alt="Background shape">
              </div>
            </div>
          </div>
  
          <!-- Problem, Agitation, Solution -->
          <div class="col-lg-6 text-center text-lg-start">
            <h1 class="display-4 pb-3 mb-4">Losing Customers Before They Even Checkout?</h1>
            <p class="lead">Don't let a clunky, confusing online payment process sabotage your sales. Paykhom offers seamless, secure online payment solutions to help you convert more visitors into paying customers.</p>
            <ul class="list-unstyled d-table text-start mx-auto mx-lg-0 mb-0">
              <li class="d-flex text-body pb-2 mb-1">
                <i class="ai-check-alt text-primary lead me-2"></i>
                Maximize Sales Conversions
              </li>
              <li class="d-flex text-body pb-2 mb-1">
                <i class="ai-check-alt text-primary lead me-2"></i>
                Provide a Secure, Trustworthy Experience
              </li>
              <li class="d-flex text-body pb-2 mb-1">
                <i class="ai-check-alt text-primary lead me-2"></i>
                Offer Flexible Payment Options
              </li>
            </ul>
            <div class="d-sm-flex justify-content-center justify-content-lg-start pt-5 mt-lg-2">
              <a class="btn btn-lg btn-primary w-100 w-sm-auto mb-2 mb-sm-0 me-sm-1" href="/accept-payments/online">Get
                Started with Online Payments</a>
              <a class="btn btn-lg btn-link" href="/pricing">
                View Pricing
                <i class="ai-arrow-right ms-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  
    <!-- Benefit-Driven Features -->
    <section class="container py-5 my-md-2 my-lg-3 my-xl-4 my-xxl-5">
      <div class="row align-items-center py-1 py-sm-3 py-md-4 my-lg-2">
        <div class="col-lg-4 offset-xl-1">
          <h2 class="h1 text-center text-lg-start pb-3 pb-lg-1">Power Up Your Online Sales</h2>
  
          <!-- Show on screens > 992px -->
          <ul class="list-unstyled d-none d-lg-block pb-3 mb-3 mb-lg-4">
            <li class="d-flex pt-2">
              <i class="ai-check-alt fs-4 text-primary mt-n1 me-2"></i>
              Boost Conversions with a Seamless Experience
            </li>
            <li class="d-flex pt-2">
              <i class="ai-check-alt fs-4 text-primary mt-n1 me-2"></i>
              Offer Global Reach with Multi-Currency Support
            </li>
            <li class="d-flex pt-2">
              <i class="ai-check-alt fs-4 text-primary mt-n1 me-2"></i>
              Protect Your Business with Advanced Fraud Prevention
            </li>
          </ul>
          <a class="btn btn-primary d-none d-lg-inline-flex" href="/accept-payments/online">See Our Payment Solutions</a>
        </div>
  
        <div class="col-lg-8 col-xl-7 col-xxl-6">
          <div class="row row-cols-1 row-cols-sm-2">
            <div class="col">
              <div class="card border-0 bg-primary bg-opacity-10">
                <div class="card-body">
                  <img src="/theme/around/assets/img/icons/sell/creditcard.png" width="45" alt="credit card" class="mb-3">
                  <h3 class="h4">Accept All Major Credit Cards</h3>
                  <p class="fs-sm">Offer your customers the flexibility they demand with comprehensive credit card support.</p>
                </div>
              </div>
              <div class="card border-0 bg-info bg-opacity-10 mt-4">
                <div class="card-body">
                  <img src="/theme/around/assets/img/icons/sell/currency.png" width="45" alt="icon" class="mb-3">
                  <h3 class="h4">Multi-Currency Support</h3>
                  <p class="fs-sm">Expand your global reach by accepting payments in multiple currencies with ease.</p>
                </div>
              </div>
            </div>
            <div class="col pt-lg-3">
              <div class="card border-0 bg-warning bg-opacity-10 mt-4 mt-sm-0 mt-lg-4">
                <div class="card-body">
                  <img src="/theme/around/assets/img/icons/sell/mobile.png" width="45" alt="icon" class="mb-3">
                  <h3 class="h4">Mobile-Optimized Checkout</h3>
                  <p class="fs-sm">Ensure a smooth and seamless experience for your mobile customers, driving conversions on any
                    device.</p>
                </div>
              </div>
              <div class="card border-0 bg-danger bg-opacity-10 mt-4">
                <div class="card-body">
                  <img src="/theme/around/assets/img/icons/sell/security.png" width="45" alt="icon" class="mb-3">
                  <h3 class="h4">Advanced Fraud Protection</h3>
                  <p class="fs-sm">Protect your business and your customers from fraudulent transactions with our robust security
                    features.</p>
                </div>
              </div>
            </div>
          </div>
  
          <!-- Show button on screens < 992px -->
          <div class="d-lg-none text-center pt-3 mt-3 mt-sm-4">
            <a class="btn btn-primary" href="#">See Our Payment Solutions</a>
          </div>
        </div>
      </div>
    </section>
  
    <!-- Social Proof: Short & Impactful Testimonials -->
    <!-- ****************** -->
  
    <!-- Guarantee + Call to Action -->
    <section class="bg-primary bg-opacity-10 py-5">
      <div class="container">
        <div class="text-center">
          <h2 class="h1 mb-4">Ready to Transform Your Online Sales?</h2>
          <p class="lead">Start accepting online payments with Paykhom and watch your business grow!</p>
          <a class="btn btn-lg btn-primary" href="/pricing">Explore Pricing & Get Started</a>
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
}