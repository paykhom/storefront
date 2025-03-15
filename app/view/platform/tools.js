import MarketplaceLayout from '../marketplace-layout'; // Adjust path as needed
//import { Page } from 'paykhom-fw/container/view';

export default class  Tools extends MarketplaceLayout {
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

<!-- Hero Section -->
<section class="bg-dark d-flex min-vh-100 position-relative overflow-hidden py-5" data-bs-theme="dark">
  <div class="container d-flex flex-column justify-content-center position-relative z-2 pt-sm-3 pt-md-4 pt-xl-5 pb-1 pb-sm-3 pb-lg-4 pb-xl-5">
    <div class="row flex-lg-nowrap align-items-center pb-5 pt-2 pt-lg-4 pt-xl-0 mt-lg-4 mt-xl-0">
      <div class="col-lg-7 order-lg-2 ms-lg-4 mb-2 mb-lg-0">
        <div class="parallax order-lg-2 mx-auto" style="max-width: 740px;">
          <div class="parallax-layer" data-depth="0.05">
            <img src="/theme/around/assets/img/landing/saas-2/hero/tools-hero-1.png" alt="Tools Collection" alt="Free Tools Visual">
          </div>
          <div class="parallax-layer" data-depth="-0.05">
            <img src="/theme/around/assets/img/landing/saas-2/hero/tools-hero-2.png" style="animation: rotate-cw 100s linear infinite;" alt="Tool Pattern">
          </div>
          <div class="parallax-layer z-2" data-depth="0.3">
            <img src="/theme/around/assets/img/landing/saas-2/hero/tools-hero-3.png" alt="Essential tools">
          </div>
        </div>
      </div>
      <div class="col-lg-5 order-lg-1 text-center text-lg-start me-xl-5">
        <span class="badge bg-success bg-opacity-10 text-success fs-sm">Equip Your Business for Success</span>
        <h1 class="display-4 py-3 my-2 mb-xl-3">Unlock Your Potential with Essential Business Tools</h1>
        <ul class="list-unstyled d-table text-start mx-auto mx-lg-0 mb-0">
          <li class="d-flex text-body pb-2 mb-1">
            <img src="/theme/around/assets/img/icons/check-alt.svg" width="20" height="20" class="text-primary lead me-2" alt="Check">
            Simplify your day-to-day tasks with our collection of free tools
          </li>
          <li class="d-flex text-body pb-2 mb-1">
            <img src="/theme/around/assets/img/icons/check-alt.svg" width="20" height="20" class="text-primary lead me-2" alt="Check">
            Empower your business with valuable payment-focused resources
          </li>
          <li class="d-flex text-body pb-2 mb-1">
            <img src="/theme/around/assets/img/icons/check-alt.svg" width="20" height="20" class="text-primary lead me-2" alt="Check">
            Drive growth and efficiency without breaking the bank
          </li>
        </ul>
        <div class="d-flex justify-content-center justify-content-lg-start pt-4 pt-xl-5">
          <div class="text-center">
            <a class="btn btn-lg btn-warning rounded-pill w-100 w-sm-auto" href="#tool-list">Explore Free Tools</a>
            <p class="text-body fs-sm pt-2 mt-sm-1 mb-0">Get started now – no cost!</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Tools List Section -->
<section class="container py-5" id="tool-list">
  <h2 class="h1 text-center mb-4">Essential Tools for Your Business Growth</h2>
  <p class="text-center lead mb-5">Take advantage of these free resources to streamline your operations, optimize payments, and grow your Paykhom powered business.</p>

  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">

    <!-- Currency Converter -->
    <div class="col">
      <div class="card border-0 h-100 shadow-sm">
        <div class="card-body text-center p-3">
          <img src="/theme/around/assets/img/icons/currency.svg" alt="Currency Converter" class="img-fluid mb-3" style="max-height: 50px;">
          <h5 class="mb-2">Currency Converter</h5>
          <p class="text-sm text-muted">Easily convert between different currencies to calculate international transaction fees.</p>
          <a href="/resources/tools/currency-converter" class="btn btn-sm btn-outline-primary">Use Tool</a>
        </div>
      </div>
    </div>

    <!-- Payment Link Generator -->
    <div class="col">
      <div class="card border-0 h-100 shadow-sm">
        <div class="card-body text-center p-3">
          <img src="/theme/around/assets/img/icons/link.svg" alt="Payment Link Generator" class="img-fluid mb-3" style="max-height: 50px;">
          <h5 class="mb-2">Payment Link Generator</h5>
          <p class="text-sm text-muted">Quickly generate secure payment links to share with customers via email or social media.</p>
          <a href="/resources/tools/payment-link-generator" class="btn btn-sm btn-outline-primary">Use Tool</a>
        </div>
      </div>
    </div>

    <!-- Fraud Score Calculator -->
    <div class="col">
      <div class="card border-0 h-100 shadow-sm">
        <div class="card-body text-center p-3">
          <img src="/theme/around/assets/img/icons/shield-alert.svg" alt="Fraud Score Calculator" class="img-fluid mb-3" style="max-height: 50px;">
          <h5 class="mb-2">Fraud Score Calculator</h5>
          <p class="text-sm text-muted">Estimate the risk associated with a transaction based on key parameters.</p>
          <a href="/resources/tools/fraud-score-calculator" class="btn btn-sm btn-outline-primary">Use Tool</a>
        </div>
      </div>
    </div>

    <!-- Business Name Generator-->
    <div class="col">
      <div class="card border-0 h-100 shadow-sm">
        <div class="card-body text-center p-3">
          <img src="/theme/around/assets/img/icons/logo.svg" alt="Business Name Generator" class="img-fluid mb-3" style="max-height: 50px;">
          <h5 class="mb-2">Business Name Generator</h5>
          <p class="text-sm text-muted">Estimate the risk associated with a transaction based on key parameters.</p>
          <a href="#" class="btn btn-sm btn-outline-primary">Use Tool</a>
        </div>
      </div>
    </div>

    <!-- Logo Maker -->
    <div class="col">
      <div class="card border-0 h-100 shadow-sm">
        <div class="card-body text-center p-3">
          <img src="/theme/around/assets/img/icons/graphic-design.svg" alt="Logo Maker" class="img-fluid mb-3" style="max-height: 50px;">
          <h5 class="mb-2">Logo Maker</h5>
          <p class="text-sm text-muted">Estimate the risk associated with a transaction based on key parameters.</p>
          <a href="#" class="btn btn-sm btn-outline-primary">Use Tool</a>
        </div>
      </div>
    </div>

      <!-- More placeholder tools can be added to showcase -->

  </div>
</section>

<!-- Call to Action Section -->
<section class="bg-primary py-5" data-bs-theme="dark">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-8 text-center">
        <h2 class="mb-4 text-white">Supercharge Your Business Today!</h2>
        <p class="lead text-white opacity-80">Explore our powerful platform and essential free tools. </p>
        <a href="#" class="btn btn-warning btn-lg">Start Your Free Trial</a>
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
}