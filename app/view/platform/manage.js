import MarketplaceLayout from '../marketplace-layout'; // Adjust path as needed
//import { Page } from 'paykhom-fw/container/view';

export default class  Manage extends MarketplaceLayout {
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

          <!-- Hero -->
          <section class="bg-gradient-primary pt-5 pb-4 pb-lg-5">
              <div class="container pt-md-2 pt-lg-4 pt-xl-5 pb-2 pb-sm-3 pb-md-4">
                  <div class="row pt-5 mt-5 pt-md-2 pt-lg-3 pt-xl-4 pb-2 pb-sm-3 pb-md-4">
                      <div class="col-lg-8 col-xl-7 col-xxl-6">
                          <h1 class="display-3 text-white">Manage Your Finances. <br> Effortlessly.</h1>
                          <p class="lead text-white opacity-80">Take control of your financial ecosystem with Paykhom's powerful management tools. Track, analyze, and protect your payments – all in one place.</p>
                          <div class="d-flex align-items-center justify-content-start pt-3">
                              <a href="#features" class="btn btn-lg btn-warning rounded-pill me-3">Explore Features</a>
                          </div>
                      </div>
                      <div class="col-lg-4 col-xl-5 d-none d-lg-block">
                          <img src="/theme/around/assets/img/landing/saas-1/hero/hero-img.png" alt="Manage Finances Dashboard" class="img-fluid">
                      </div>
                  </div>
              </div>
          </section>

          <!-- Key Benefits Section -->
          <section id="features" class="container py-5 my-lg-3 my-xl-4 my-xxl-5">
              <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                  <!-- Track Transactions & Reports -->
                  <div class="col">
                      <div class="card h-100 shadow-sm border-0">
                          <div class="card-body text-center">
                              <img src="/theme/around/assets/img/icons/chart.svg" alt="Chart Icon" width="60" class="mb-3">
                              <h3 class="h5 card-title">Track Transactions & Reports</h3>
                              <p class="card-text">Access real-time transaction reporting to monitor your revenue and financial performance. </p>
                              <a href="/manage-finances/reporting" class="btn btn-link stretched-link">Learn More</a>
                          </div>
                      </div>
                  </div>

                  <!-- Understand Performance with Analytics -->
                  <div class="col">
                      <div class="card h-100 shadow-sm border-0">
                          <div class="card-body text-center">
                              <img src="/theme/around/assets/img/icons/graph.svg" alt="Graph Icon" width="60" class="mb-3">
                              <h3 class="h5 card-title">Real Time Analytics</h3>
                              <p class="card-text">Dive deep into your payment data with comprehensive analytics tools and real-time insights.</p>
                              <a href="/manage-finances/analytics" class="btn btn-link stretched-link">Learn More</a>
                          </div>
                      </div>
                  </div>

                  <!-- Protect Against Fraud -->
                  <div class="col">
                      <div class="card h-100 shadow-sm border-0">
                          <div class="card-body text-center">
                              <img src="/theme/around/assets/img/icons/fraud.svg" alt="Fraud Icon" width="60" class="mb-3">
                              <h3 class="h5 card-title">Protect Against Fraud</h3>
                              <p class="card-text">Minimize risk with advanced fraud prevention tools and customizable risk management settings.</p>
                              <a href="/manage-finances/fraud-prevention" class="btn btn-link stretched-link">Learn More</a>
                          </div>
                      </div>
                  </div>

                  <!-- Payment Card Industry (PCI) Compliance -->
                  <div class="col">
                      <div class="card h-100 shadow-sm border-0">
                          <div class="card-body text-center">
                              <img src="/theme/around/assets/img/icons/security.svg" alt="Security Icon" width="60" class="mb-3">
                              <h3 class="h5 card-title">PCI Compliance</h3>
                              <p class="card-text">Ensure secure transactions and protect sensitive data with our Payment Card Industry (PCI) Compliance measures.</p>
                              <a href="/manage-finances/pci-compliance" class="btn btn-link stretched-link">Learn More</a>
                          </div>
                      </div>
                  </div>

                   <!-- Payment Management Portal -->
                   <div class="col">
                      <div class="card h-100 shadow-sm border-0">
                          <div class="card-body text-center">
                              <img src="/theme/around/assets/img/icons/user-interface.svg" alt="User Interface Icon" width="60" class="mb-3">
                              <h3 class="h5 card-title">Payment Management Portal</h3>
                              <p class="card-text">Take complete control of your payment. Track each transaction and customize.</p>
                              <a href="/manage-finances/payment-management-portal" class="btn btn-link stretched-link">Learn More</a>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

          <!-- Simplify Your Financial Workflow -->
          <section class="container py-5">
              <div class="row align-items-center">
                  <div class="col-md-6">
                      <img src="/theme/around/assets/img/landing/saas-1/features/feature-1.png" alt="Simplified Workflow" class="img-fluid rounded-4 shadow-sm">
                  </div>
                  <div class="col-md-6">
                      <h2>Simplify Your Financial Workflow</h2>
                      <p>Paykhom's finance management tools are designed to make your life easier. Spend less time on paperwork and more time on what matters: growing your business.</p>
                      <ul class="list-unstyled">
                          <li class="d-flex align-items-center mb-2"><img src="/theme/around/assets/img/icons/check-circle.svg" width="20" class="me-2"> Automated reporting for easy reconciliation</li>
                          <li class="d-flex align-items-center mb-2"><img src="/theme/around/assets/img/icons/check-circle.svg" width="20" class="me-2"> Customizable dashboards for quick insights</li>
                          <li class="d-flex align-items-center mb-2"><img src="/theme/around/assets/img/icons/check-circle.svg" width="20" class="me-2"> Secure platform to protect sensitive financial data</li>
                      </ul>
                  </div>
              </div>
          </section>

          <!-- Ready to Take Control? -->
          <section class="bg-secondary py-5">
              <div class="container text-center">
                  <h2>Ready to Take Control of Your Finances?</h2>
                  <p>Sign up for Paykhom today and start managing your payments with ease.</p>
                  <a href="/pricing" class="btn btn-lg btn-primary rounded-pill">Get Started Now</a>
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