import MarketplaceLayout from '../marketplace-layout'; // Adjust path as needed
//import { Page } from 'paykhom-fw/modules/view';

export default class  Pos extends MarketplaceLayout {
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

    <!-- Hero Section: Highlight Opportunity, Promise Solutions -->
    <section class="container py-5 mt-5 mb-xl-3 mb-xxl-5">
      <div class="row pt-2">
  
        <!-- Text + CTA button -->
        <div class="col-lg-6 d-flex flex-column mb-4 mb-lg-0 pb-sm-3 pb-lg-0">
          <h1 class="display-2 text-uppercase fw-bold mt-auto mb-2">Empower your Retail with a Point of Sale solution</h1>
          <p class="lead">Transform your sales process with Paykhom's POS system, integrating directly with your payments
            for faster, more secure transactions. Take your business to the next level and increase profits.</p>
          <div class="d-flex align-items-center py-4 py-lg-5">
            <a class="btn btn-lg btn-primary rounded-0 me-2 me-sm-3" href="/contact/sales">Talk to Sales</a>
          </div>
          
        </div>
  
        <!-- Services (Grid of cards) -->
        <div class="col-lg-6">
          <div class="row row-cols-1 row-cols-sm-2 g-1">
  
            <!-- Card -->
            <div class="col">
              <a class="card-flip" href="#">
                <div class="card-flip-inner">
                  <div class="card-flip-front" style="background-image: url(assets/img/pos/terminal-card-image.jpg);">
                    <div class="d-flex flex-column h-100" data-bs-theme="light">
                      <h2 class="fs-lg fw-normal mb-0 mt-auto">Increase your sales with better POS integration</h2>
                    </div>
                  </div>
                  <div class="card-flip-back bg-secondary">
                    <div class="d-flex flex-column h-100 px-sm-2 pt-sm-2 px-lg-0 pt-lg-0 px-xl-3 pt-xl-3">
                      <h3 class="h4">Modern In-Person Solution</h3>
                      <p class="text-body mb-3">Leo vitae sem eget eget at in vivamus placerat in sodales tristique a risusiis senectusic vitae sem eget eget at in vivamus placerat in sodales.</p>
                      <div class="text-end pt-3 pt-sm-2 pt-xl-4 mt-auto me-sm-n2 me-lg-0 me-xl-n3">
                        <div class="btn btn-sm btn-icon btn-outline-primary rounded-circle">
                          <i class="ai-arrow-right"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
  
            <!-- Card -->
            <div class="col">
              <a class="card-flip" href="#">
                <div class="card-flip-inner">
                  <div class="card-flip-front" style="background-image: url(assets/img/pos/quick-payment-image.jpg);">
                    <div class="d-flex flex-column h-100" data-bs-theme="light">
                      <h2 class="fs-lg fw-normal mb-0 mt-auto">All payment methods available for the business</h2>
                    </div>
                  </div>
                  <div class="card-flip-back bg-secondary">
                    <div class="d-flex flex-column h-100 px-sm-2 pt-sm-2 px-lg-0 pt-lg-0 px-xl-3 pt-xl-3">
                      <h3 class="h4">Variety of payments</h3>
                      <ul class="text-body ps-4 mb-3">
                        <li class="mb-2">Credit cards</li>
                        <li class="mb-2">Contactless payments</li>
                        <li class="mb-2">QR code payments</li>
                        <li class="mb-2">Mobile wallets (Apple Pay, Google Pay)</li>
                      </ul>
                      <div class="text-end pt-3 pt-sm-2 pt-xl-4 mt-auto me-sm-n2 me-lg-0 me-xl-n3">
                        <div class="btn btn-sm btn-icon btn-outline-primary rounded-circle">
                          <i class="ai-arrow-right"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
  
            <!-- Card -->
            <div class="col order-sm-2">
              <a class="card-flip" href="#">
                <div class="card-flip-inner">
                  <div class="card-flip-front" style="background-image: url(assets/img/pos/easy-to-use-image.jpg);">
                    <div class="d-flex flex-column h-100" data-bs-theme="light">
                      <h2 class="fs-lg fw-normal mb-0 mt-auto">Easy to use and get running!</h2>
                    </div>
                  </div>
                  <div class="card-flip-back bg-secondary">
                    <div class="d-flex flex-column h-100 px-sm-2 pt-sm-2 px-lg-0 pt-lg-0 px-xl-3 pt-xl-3">
                      <h3 class="h4">Easy Integration</h3>
                      <p class="text-body mb-3">Pharetra in morbi quis is massa maecenas arcu vulputate in pulvinar elit non nullage a, duis tortor mi massa ipsum in eu eu eget libero.</p>
                      <div class="text-end pt-3 pt-sm-2 pt-xl-4 mt-auto me-sm-n2 me-lg-0 me-xl-n3">
                        <div class="btn btn-sm btn-icon btn-outline-primary rounded-circle">
                          <i class="ai-arrow-right"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
  
            <!-- Card -->
            <div class="col order-sm-1">
              <a class="card-flip" href="#">
                <div class="card-flip-inner">
                  <div class="card-flip-front" style="background-image: url(assets/img/pos/reporting-image.jpg);">
                    <div class="d-flex flex-column h-100" data-bs-theme="light">
                      <h2 class="fs-lg fw-normal mb-0 mt-auto">Reporting like never before</h2>
                    </div>
                  </div>
                  <div class="card-flip-back bg-secondary">
                    <div class="d-flex flex-column h-100 px-sm-2 pt-sm-2 px-lg-0 pt-lg-0 px-xl-3 pt-xl-3">
                      <h3 class="h4">Reporting</h3>
                      <ul class="text-body ps-4 mb-3">
                        <li class="mb-2">Daily sales</li>
                        <li class="mb-2">Real time tracking</li>
                        <li class="mb-2">Transaction history</li>
                        <li class="mb-2">Product performance</li>
                      </ul>
                      <div class="text-end pt-3 pt-sm-2 pt-xl-4 mt-auto me-sm-n2 me-lg-0 me-xl-n3">
                        <div class="btn btn-sm btn-icon btn-outline-primary rounded-circle">
                          <i class="ai-arrow-right"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  
    <!-- Target Audience / Benefits -->
    <section class="container py-md-4 py-lg-5 mb-xl-3 mb-xxl-5">
      <div class="row pt-sm-2">
        <div class="col-xl-10">
          <h2 class="pb-md-2 mb-lg-5">Who Benefits from Paykhom POS?</h2>
          <p class="lead text-dark">Paykhom's Point of Sale solutions are ideal for businesses seeking a reliable and secure
            in-person payment system. With our simple integration process and dedicated support, we strive to assist businesses as much as possible.</p>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-4 pt-4">
          <i class="ai-store text-primary fs-3"></i>
          <h5 class="h4">Retail Stores</h5>
        </div>
        <div class="col-sm-4 pt-4">
          <i class="ai-restaurant text-primary fs-3"></i>
          <h5 class="h4">Restaurants</h5>
        </div>
        <div class="col-sm-4 pt-4">
          <i class="ai-bus text-primary fs-3"></i>
          <h5 class="h4">Service Businesses</h5>
        </div>
        <div class="col-sm-4 pt-4">
          <i class="ai-basket text-primary fs-3"></i>
          <h5 class="h4">Pop-Up Shops</h5>
        </div>
        <div class="col-sm-4 pt-4">
          <i class="ai-cart text-primary fs-3"></i>
          <h5 class="h4">All Types of Retail Environments</h5>
        </div>
      </div>
    </section>
  
    <!-- Key Features / Guarantee -->
    <section class="container overflow-hidden py-md-4 py-lg-5">
      <div class="row g-0 py-md-4">
        <div class="col-lg-6 order-lg-2 px-lg-5 pb-3 pb-md-0 mb-4 mb-md-0">
          <img src="/theme/around/assets/img/pos/point-of-sales.png" alt="Point of Sales integration for Paykhom">
        </div>
        <div class="col-lg-6 order-lg-1 pt-lg-4">
          <h2 class="h1 pt-xl-2 mt-md-2 mb-lg-4">Elevate Your Sales with Paykhom POS Today</h2>
          <p class="lead">Paykhom combines efficiency and security, giving customers and business owners alike a satisfying and effortless experience.</p>
          <ul class="list-unstyled pb-2 pb-lg-0 mb-4 mb-lg-5">
            <li class="d-flex pt-1 mt-2">
              <i class="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>
              Fast and secure transactions
            </li>
            <li class="d-flex pt-1 mt-2">
              <i class="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>
              Seamless software integrations
            </li>
            <li class="d-flex pt-1 mt-2">
              <i class="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>
              24/7 customer support
            </li>
          </ul>
          <a class="btn btn-lg btn-primary" href="/pricing">Contact Sales To Get Started</a>
        </div>
      </div>
    </section>
  
    <!-- Social Proof -->
    <!-- Testimonials go here -->
  
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