import MarketplaceLayout from '../marketplace-layout'; // Adjust path as needed
//import { Page } from 'paykhom-fw/container/view';

export default class  Pricing extends MarketplaceLayout {
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

    <!-- Pricing plans -->
    <section class="container py-5 mt-5 mb-lg-3 mb-xl-4 mb-xxl-5">

        <!-- Page title -->
        <div class="text-center pb-3 pt-lg-2 pt-xl-4 my-1 my-sm-3 my-lg-4">
            <h1 class="display-2">Power Up Your Payments with Paykhom</h1>
            <p class="fs-lg mb-0">Choose the plan that unlocks your business potential and scales with your success.</p>
        </div>

        <!-- Plans -->
        <div class="row row-cols-1 row-cols-md-3 flex-wrap justify-content-center pb-4">

            <!-- Plan: Startup -->
            <div class="col mb-4" style="min-width: 19rem;">
                <div class="card h-100 py-lg-4 shadow-sm">
                    <div class="card-body w-100 mx-auto text-center" style="max-width: 23rem;">
                        <h3>Startup</h3>
                        <div class="display-4 text-primary">$0</div>
                        <div class="mb-3">Free Forever</div>
                        <p class="mb-4">Perfect for new businesses getting off the ground. Test the waters with essential features, zero monthly commitment, and scalable options for future growth.</p>

                        <ul class="list-unstyled mb-4">
                            <li><img src="/theme/around/assets/img/icons/check.svg" width="20" class="me-2" alt="Check"> Basic Payment Gateway Access</li>
                            <li><img src="/theme/around/assets/img/icons/check.svg" width="20" class="me-2" alt="Check"> Limited Transaction Volume</li>
                            <li><img src="/theme/around/assets/img/icons/x.svg" width="20" class="me-2" alt="X"> Advanced Fraud Protection</li>
                            <li><img src="/theme/around/assets/img/icons/x.svg" width="20" class="me-2" alt="X"> Dedicated Support</li>
                        </ul>

                        <button class="btn btn-outline-primary w-100" type="button">Get Started Free</button>
                    </div>
                </div>
            </div>

            <!-- Plan: Growth -->
            <div class="col mb-4" style="min-width: 19rem;">
                <div class="card border-primary bg-primary text-white h-100 py-lg-4 shadow">
                    <div class="card-body w-100 mx-auto text-center" style="max-width: 23rem;">
                        <h3 class="text-light">Growth</h3>
                        <div class="display-4 text-light">$99</div>
                        <div class="text-light opacity-70 mb-3">per month</div>
                        <p class="text-light opacity-70 mb-4">Unleash your full payment potential with more transaction volume, priority support, and advanced fraud protection. Scale confidently with a plan designed for growing businesses.</p>

                        <ul class="list-unstyled mb-4">
                            <li><img src="/theme/around/assets/img/icons/check.svg" width="20" class="me-2" alt="Check"> Everything in Startup, plus:</li>
                            <li><img src="/theme/around/assets/img/icons/check.svg" width="20" class="me-2" alt="Check"> Increased Transaction Volume</li>
                            <li><img src="/theme/around/assets/img/icons/check.svg" width="20" class="me-2" alt="Check"> Advanced Fraud Protection</li>
                            <li><img src="/theme/around/assets/img/icons/check.svg" width="20" class="me-2" alt="Check"> Priority Email Support</li>
                        </ul>

                        <button class="btn btn-light w-100" type="button">Upgrade to Growth</button>
                    </div>
                </div>
            </div>

            <!-- Plan: Enterprise -->
            <div class="col mb-4" style="min-width: 19rem;">
                <div class="card h-100 py-lg-4 shadow-sm">
                    <div class="card-body w-100 mx-auto text-center" style="max-width: 23rem;">
                        <h3>Enterprise</h3>
                        <div class="display-4 text-primary">Custom</div>
                        <div class="mb-3">Contact Us</div>
                        <p class="mb-4">Tailored solutions designed for high-volume businesses with complex needs. Get custom pricing, dedicated support, and enterprise-grade features to optimize your payment processing.</p>

                        <ul class="list-unstyled mb-4">
                            <li><img src="/theme/around/assets/img/icons/check.svg" width="20" class="me-2" alt="Check"> Everything in Growth, plus:</li>
                            <li><img src="/theme/around/assets/img/icons/check.svg" width="20" class="me-2" alt="Check"> Unlimited Transaction Volume</li>
                            <li><img src="/theme/around/assets/img/icons/check.svg" width="20" class="me-2" alt="Check"> Dedicated Account Manager</li>
                            <li><img src="/theme/around/assets/img/icons/check.svg" width="20" class="me-2" alt="Check"> Custom Integrations</li>
                        </ul>
                        <button class="btn btn-primary w-100" type="button">Contact Sales</button>
                    </div>
                </div>
            </div>
        </div>


        <!-- Comparison table -->
        <div class="text-center pt-md-1 pt-lg-2">
            <button class="btn btn-more btn-link fs-4" type="button" data-show-label="See a Detailed Comparison"
                data-hide-label="Hide Comparison" data-bs-toggle="collapse" data-bs-target="#comparePlans"
                aria-label="Compare plans">See a Detailed Comparison</button>
        </div>
        <div class="collapse" id="comparePlans">
            <div class="table-responsive pt-sm-2 pt-lg-3">
                <table class="table text-center text-nowrap">
                    <thead>
                        <tr>
                            <th scope="col" class="border-0 py-3"> </th>
                            <th scope="col" class="border-0 py-3"><span class="h5 mb-0">Startup</span></th>
                            <th scope="col" class="border-0 py-3"><span class="h5 mb-0">Growth</span></th>
                            <th scope="col" class="border-0 py-3"><span class="h5 mb-0">Enterprise</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row" class="border-0 bg-secondary rounded-3 rounded-end-0 text-start py-3 ps-4">
                                <span class="text-body fw-medium">Monthly Fee</span>
                            </th>
                            <td class="border-0 bg-secondary py-3"><span class="text-dark">$0</span></td>
                            <td class="border-0 bg-secondary py-3"><span class="text-dark">$99</span></td>
                            <td class="border-0 rounded-3 rounded-start-0 bg-secondary py-3"><span
                                    class="text-dark">Custom</span></td>
                        </tr>
                        <tr>
                            <th scope="row" class="border-0 text-start py-3 ps-4">
                                <span class="d-flex align-items-center text-body fw-medium">
                                    Transaction Fee
                                    <img src="/theme/around/assets/img/icons/info.svg" width="16" class="ms-2" alt="Info" data-bs-toggle="popover"
                                        data-bs-trigger="hover" data-bs-placement="right" data-bs-html="true"
                                        data-bs-content="Fee charged per successful transaction.">
                                </span>
                            </th>
                            <td class="border-0 py-3"><span class="text-dark">2.9% + $0.30</span></td>
                            <td class="border-0 py-3"><span class="text-dark">2.5% + $0.25</span></td>
                            <td class="border-0 py-3"><span class="text-dark">Negotiated Rates</span></td>
                        </tr>
                        <tr>
                            <th scope="row" class="border-0 bg-secondary rounded-3 rounded-end-0 text-start py-3 ps-4">
                                <span class="d-flex align-items-center text-body fw-medium">
                                    Monthly Transaction Volume
                                    <img src="/theme/around/assets/img/icons/info.svg" width="16" class="ms-2" alt="Info" data-bs-toggle="popover"
                                        data-bs-trigger="hover" data-bs-placement="right" data-bs-html="true"
                                        data-bs-content="The maximum amount of transactions you can process per month before incurring overage fees.">
                                </span>
                            </th>
                            <td class="border-0 bg-secondary py-3"><span class="text-dark">$1,000</span></td>
                            <td class="border-0 bg-secondary py-3"><span class="text-dark">$10,000</span></td>
                            <td class="border-0 rounded-3 rounded-start-0 bg-secondary py-3"><span
                                    class="text-dark">Unlimited</span></td>
                        </tr>
                        <tr>
                            <th scope="row" class="border-0 text-start py-3 ps-4">
                                <span class="d-flex align-items-center text-body fw-medium">
                                    Payment Gateway
                                    <img src="/theme/around/assets/img/icons/info.svg" width="16" class="ms-2" alt="Info" data-bs-toggle="popover"
                                        data-bs-trigger="hover" data-bs-placement="right" data-bs-html="true"
                                        data-bs-content="Securely process online payments directly on your website or app.">
                                </span>
                            </th>
                            <td class="border-0 py-3"><img src="/theme/around/assets/img/icons/check.svg" width="20" class="me-2"
                                    alt="Check"></td>
                            <td class="border-0 py-3"><img src="/theme/around/assets/img/icons/check.svg" width="20" class="me-2"
                                    alt="Check"></td>
                            <td class="border-0 py-3"><img src="/theme/around/assets/img/icons/check.svg" width="20" class="me-2"
                                    alt="Check"></td>
                        </tr>
                        <tr>
                            <th scope="col" class="border-0 text-start pt-4 pb-3 ps-4">
                                <div class="h5 pt-1 mb-0">Security</div>
                            </th>
                            <th scope="col" class="border-0 py-3"> </th>
                            <th scope="col" class="border-0 py-3"> </th>
                            <th scope="col" class="border-0 py-3"> </th>
                        </tr>
                        <tr>
                            <th scope="row" class="border-0 bg-secondary rounded-3 rounded-end-0 text-start py-3 ps-4">
                                <span class="text-body fw-medium">Fraud Protection</span>
                            </th>
                            <td class="border-0 bg-secondary py-3"><img src="/theme/around/assets/img/icons/x.svg" width="20"
                                    class="me-2" alt="X"></td>
                            <td class="border-0 bg-secondary py-3"><img src="/theme/around/assets/img/icons/check.svg" width="20"
                                    class="me-2" alt="Check"></td>
                            <td class="border-0 rounded-3 rounded-start-0 bg-secondary py-3"><img
                                    src="/theme/around/assets/img/icons/check.svg" width="20" class="me-2" alt="Check"></td>
                        </tr>
                        <tr>
                            <th scope="row" class="border-0 text-start py-3 ps-4">
                                <span class="d-flex align-items-center text-body fw-medium">
                                    PCI Compliance
                                    <img src="/theme/around/assets/img/icons/info.svg" width="16" class="ms-2" alt="Info" data-bs-toggle="popover"
                                        data-bs-trigger="hover" data-bs-placement="right" data-bs-html="true"
                                        data-bs-content="We handle PCI compliance, so you don't have to.">
                                </span>
                            </th>
                            <td class="border-0 py-3"><img src="/theme/around/assets/img/icons/check.svg" width="20" class="me-2"
                                    alt="Check"></td>
                            <td class="border-0 py-3"><img src="/theme/around/assets/img/icons/check.svg" width="20" class="me-2"
                                    alt="Check"></td>
                            <td class="border-0 py-3"><img src="/theme/around/assets/img/icons/check.svg" width="20" class="me-2"
                                    alt="Check"></td>
                        </tr>
                        <tr>
                            <th scope="col" class="border-0 text-start pt-4 pb-3 ps-4">
                                <div class="h5 pt-3 mb-0">Support</div>
                            </th>
                            <th scope="col" class="border-0 py-3"> </th>
                            <th scope="col" class="border-0 py-3"> </th>
                            <th scope="col" class="border-0 py-3"> </th>
                        </tr>
                        <tr>
                            <th scope="row" class="border-0 bg-secondary rounded-3 rounded-end-0 text-start py-3 ps-4">
                                <span class="text-body fw-medium">Email Support</span>
                            </th>
                            <td class="border-0 bg-secondary py-3">Standard</td>
                            <td class="border-0 bg-secondary py-3">Priority</td>
                            <td class="border-0 rounded-3 rounded-start-0 bg-secondary py-3">Priority</td>
                        </tr>
                        <tr>
                            <th scope="row" class="border-0 text-start py-3 ps-4">
                                <span class="text-body fw-medium">Dedicated Account Manager</span>
                            </th>
                            <td class="border-0 py-3"><img src="/theme/around/assets/img/icons/x.svg" width="20" class="me-2"
                                    alt="X"></td>
                            <td class="border-0 py-3"><img src="/theme/around/assets/img/icons/x.svg" width="20" class="me-2"
                                    alt="X"></td>
                            <td class="border-0 py-3"><img src="/theme/around/assets/img/icons/check.svg" width="20" class="me-2"
                                    alt="Check"></td>
                        </tr>
                        <tr>
                            <td class="border-0 pt-4"> </td>
                            <td class="border-0 pt-4">
                                <button class="btn btn-outline-primary mt-3" type="button">Get Started Free</button>
                            </td>
                            <td class="border-0 pt-4">
                                <button class="btn btn-primary mt-3" type="button">Upgrade to Growth</button>
                            </td>
                            <td class="border-0 pt-4">
                                <button class="btn btn-primary mt-3" type="button">Contact Sales</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>


    <!-- Ready to get started CTA -->
    <section class="container py-5 my-4 bg-secondary rounded-3">
        <div class="row align-items-center">
            <div class="col-md-8 text-center text-md-start">
                <h2 class="h3 mb-3">Ready to take your payments to the next level?</h2>
                <p class="mb-0">It only takes a few minutes to get started with Paykhom.</p>
            </div>
            <div class="col-md-4 text-center text-md-end">
                <a href="#" class="btn btn-primary btn-lg">Get Started Now</a>
            </div>
        </div>
    </section>

    <!-- FAQs -->
    <section class="container py-5">
        <h2 class="text-center mb-4">Frequently Asked Questions</h2>

        <div class="row justify-content-center">
            <div class="col-lg-8">
                <div class="accordion" id="pricingFaq">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                What payment methods do you support?
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                            data-bs-parent="#pricingFaq">
                            <div class="accordion-body">
                                We support all major credit and debit cards, including Visa, Mastercard, American Express,
                                and Discover. We also support digital wallets like Apple Pay and Google Pay, as well as
                                ACH payments for US businesses.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Are there any setup fees or hidden costs?
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                            data-bs-parent="#pricingFaq">
                            <div class="accordion-body">
                                No, we don't have any setup fees or hidden costs. Our pricing is transparent and straightforward.
                                You only pay the monthly fee for your plan (if applicable) and the transaction fees for each
                                successful payment.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Can I change my plan later?
                            </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                            data-bs-parent="#pricingFaq">
                            <div class="accordion-body">
                                Yes, you can upgrade or downgrade your plan at any time. The changes will take effect immediately.
                                If you upgrade, you'll be charged a prorated amount for the remainder of the month. If you
                                downgrade, the changes will be reflected in your next billing cycle.
                            </div>
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
}