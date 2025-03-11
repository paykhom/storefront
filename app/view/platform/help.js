import MarketplaceLayout from '../marketplace-layout'; // Adjust path as needed
//import { Page } from 'paykhom-fw/app/view';

export default class  Help extends MarketplaceLayout {
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

                <!-- Hero: We're Here to Help -->
                <section class="bg-gradient-primary pt-5 pb-4" data-bs-theme="dark">
                    <div class="container pt-5">
                        <div class="row align-items-center">
                            <div class="col-md-6 text-center text-md-start">
                                <h1 class="display-4 text-white">Need Help? Find Answers Quickly</h1>
                                <p class="lead text-white opacity-80">We're here to support you every step of the way. Access our comprehensive Help Center for frequently asked questions and expert guidance.</p>
                                <a href="/resources/help-center" class="btn btn-warning mt-3">Visit the Help Center</a>
                            </div>
                            <div class="col-md-6">
                                <img src="/theme/around/assets/img/landing/saas-2/resources/help-hero.png" class="img-fluid" alt="Help Center" data-aos="fade-left">
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Search Bar -->
                <section class="container py-5">
                    <div class="row justify-content-center">
                        <div class="col-md-8">
                            <div class="input-group">
                                <input type="text" class="form-control form-control-lg" placeholder="Search for answers..." aria-label="Search">
                                <button class="btn btn-primary" type="button">Search</button>
                            </div>
                            <p class="text-center mt-3">Or browse our categories below:</p>
                        </div>
                    </div>
                </section>

                <!-- Help Categories -->
                <section class="bg-secondary py-5">
                    <div class="container">
                        <div class="row row-cols-1 row-cols-md-3 g-4">
                            <div class="col">
                                <div class="card shadow-sm h-100">
                                    <div class="card-body text-center">
                                        <img src="/theme/around/assets/img/icons/account.png" width="50" alt="Account Management" class="mb-3">
                                        <h3 class="h6 card-title">Account Management</h3>
                                        <p class="card-text">Manage your profile, update settings, and control your account preferences.</p>
                                        <a href="/resources/help-center/account" class="btn btn-link stretched-link">Learn More <img src="/theme/around/assets/img/icons/arrow-right.png" width="16" alt="Arrow Right"></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card shadow-sm h-100">
                                    <div class="card-body text-center">
                                        <img src="/theme/around/assets/img/icons/payment.png" width="50" alt="Payment Processing" class="mb-3">
                                        <h3 class="h6 card-title">Payment Processing</h3>
                                        <p class="card-text">Get help with accepting payments, managing transactions, and understanding fees.</p>
                                        <a href="/resources/help-center/payments" class="btn btn-link stretched-link">View Payment FAQs <img src="/theme/around/assets/img/icons/arrow-right.png" width="16" alt="Arrow Right"></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card shadow-sm h-100">
                                    <div class="card-body text-center">
                                        <img src="/theme/around/assets/img/icons/api.png" width="50" alt="API Documentation" class="mb-3">
                                        <h3 class="h6 card-title">API Documentation</h3>
                                        <p class="card-text">Access detailed documentation, guides, and code samples for integrating with our API.</p>
                                        <a href="/resources/help-center/api" class="btn btn-link stretched-link">Explore API Docs <img src="/theme/around/assets/img/icons/arrow-right.png" width="16" alt="Arrow Right"></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Call to Action -->
                <section class="container py-5">
                    <div class="row justify-content-center">
                        <div class="col-md-8 text-center">
                            <h2>Still Need Help?</h2>
                            <p>Contact our support team for personalized assistance.</p>
                            <a href="/contact/support" class="btn btn-primary btn-lg">Contact Support</a>
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