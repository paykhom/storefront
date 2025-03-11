import MarketplaceLayout from '../marketplace-layout'; // Adjust path as needed
//import { Page } from 'paykhom-fw/app/view';

export default class  Apps extends MarketplaceLayout {
    constructor(params) {
        super(params);
    }

    *header() {
      yield html``;
    }

    *footer() {
      yield html``;
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
            <img src="/theme/around/assets/img/landing/saas-2/hero/integration-layer-1.png" alt="Integration Visual">
          </div>
          <div class="parallax-layer" data-depth="-0.05">
            <img src="/theme/around/assets/img/landing/saas-2/hero/integration-layer-2.png" style="animation: rotate-cw 100s linear infinite;" alt="Integration Pattern">
          </div>
          <div class="parallax-layer z-2" data-depth="0.3">
            <img src="/theme/around/assets/img/landing/saas-2/hero/integration-layer-3.png" alt="Connected Apps">
          </div>
        </div>
      </div>
      <div class="col-lg-5 order-lg-1 text-center text-lg-start me-xl-5">
        <span class="badge bg-success bg-opacity-10 text-success fs-sm">Unlock the Power of Paykhom Integrations</span>
        <h1 class="display-4 py-3 my-2 mb-xl-3">Connect Paykhom to Your Favorite Tools & Grow Faster</h1>
        <ul class="list-unstyled d-table text-start mx-auto mx-lg-0 mb-0">
          <li class="d-flex text-body pb-2 mb-1">
            <i class="ai-check-alt text-primary lead me-2"></i>
            Seamless integration with popular e-commerce platforms
          </li>
          <li class="d-flex text-body pb-2 mb-1">
            <i class="ai-check-alt text-primary lead me-2"></i>
            Expand functionality with accounting & CRM apps
          </li>
          <li class="d-flex text-body pb-2 mb-1">
            <i class="ai-check-alt text-primary lead me-2"></i>
            Automate workflows and streamline operations
          </li>
        </ul>
        <div class="d-flex justify-content-center justify-content-lg-start pt-4 pt-xl-5">
          <div class="text-center">
            <a class="btn btn-lg btn-primary rounded-pill w-100 w-sm-auto" href="#integration-list">Explore Integrations</a>
            <p class="text-body fs-sm pt-2 mt-sm-1 mb-0">Supercharge your payment processing today!</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<!-- Integrations List Section -->
<section class="container py-5" id="integration-list">
    <h2 class="h1 text-center mb-4">Seamlessly Connect with the Tools You Already Use</h2>
    <p class="text-center lead mb-5">Paykhom integrates with leading platforms to streamline your workflow and maximize efficiency.</p>

    <div class="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 g-4">

        <!-- Integration Card (Example - repeat for each) -->
        <div class="col">
            <div class="card border-0 h-100 shadow-sm">
                <div class="card-body text-center p-3">
                    <img src="/theme/around/assets/img/integrations/shopify.png" alt="Shopify" class="img-fluid mb-3" style="max-height: 50px;">
                    <h5 class="mb-2">Shopify</h5>
                    <p class="text-sm text-muted">Accept payments directly within your Shopify store.</p>
                    <a href="#" class="btn btn-sm btn-outline-primary">Learn More</a>
                </div>
            </div>
        </div>

        <!-- Integration Card (Example - repeat for each) -->
        <div class="col">
            <div class="card border-0 h-100 shadow-sm">
                <div class="card-body text-center p-3">
                    <img src="/theme/around/assets/img/integrations/quickbooks.png" alt="QuickBooks" class="img-fluid mb-3" style="max-height: 50px;">
                    <h5 class="mb-2">QuickBooks</h5>
                    <p class="text-sm text-muted">Automatically sync your Paykhom transactions with QuickBooks for easy accounting.</p>
                    <a href="#" class="btn btn-sm btn-outline-primary">Learn More</a>
                </div>
            </div>
        </div>

        <div class="col">
            <div class="card border-0 h-100 shadow-sm">
                <div class="card-body text-center p-3">
                    <img src="/theme/around/assets/img/integrations/woocommerce.png" alt="WooCommerce" class="img-fluid mb-3" style="max-height: 50px;">
                    <h5 class="mb-2">WooCommerce</h5>
                    <p class="text-sm text-muted">Seamless Payment Solution for your woocommerce based online store.</p>
                    <a href="#" class="btn btn-sm btn-outline-primary">Learn More</a>
                </div>
            </div>
        </div>

        <div class="col">
            <div class="card border-0 h-100 shadow-sm">
                <div class="card-body text-center p-3">
                    <img src="/theme/around/assets/img/integrations/zoho.png" alt="Zoho CRM" class="img-fluid mb-3" style="max-height: 50px;">
                    <h5 class="mb-2">Zoho CRM</h5>
                    <p class="text-sm text-muted">Track payment data directly in your Zoho CRM for a complete customer view.</p>
                    <a href="#" class="btn btn-sm btn-outline-primary">Learn More</a>
                </div>
            </div>
        </div>

        <div class="col">
            <div class="card border-0 h-100 shadow-sm">
                <div class="card-body text-center p-3">
                    <img src="/theme/around/assets/img/integrations/mailchimp.png" alt="MailChimp" class="img-fluid mb-3" style="max-height: 50px;">
                    <h5 class="mb-2">MailChimp</h5>
                    <p class="text-sm text-muted">Mailchimp for your Email marketing strategy.</p>
                    <a href="#" class="btn btn-sm btn-outline-primary">Learn More</a>
                </div>
            </div>
        </div>


    </div>
    <div class="text-center pt-5">
         <a href="#" class="btn btn-lg btn-outline-primary rounded-pill">View All Integrations</a>
    </div>
</section>

 <!-- Call to Action Section -->
 <section class="bg-secondary py-5">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-8 text-center">
                <h2 class="mb-4">Ready to Connect Paykhom to Your Business?</h2>
                <p class="lead">Start streamlining your workflow and boosting your productivity today!</p>
                <a href="#" class="btn btn-warning btn-lg">Start Free Trial</a>
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