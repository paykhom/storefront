import MarketplaceLayout from '../marketplace-layout'; // Adjust path as needed
//import { Page } from 'paykhom-fw/container/view';

export default class  Fulfillment extends MarketplaceLayout {
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

                <!-- Hero: Revolutionize Your Order Management -->
                <section class="bg-gradient-primary pt-5 pb-4" data-bs-theme="dark">
                    <div class="container pt-5">
                        <div class="row align-items-center">
                            <div class="col-md-6 text-center text-md-start">
                                <h1 class="display-4 text-white">Fulfillment Solutions That Scale With You</h1>
                                <p class="lead text-white opacity-80">Optimize your order process and make sure everything is done in time and securely for your costumers.</p>
                                <a href="#solutions-cta" class="btn btn-warning mt-3">Get fulfillment!</a>
                            </div>
                            <div class="col-md-6">
                                <img src="/theme/around/assets/img/landing/saas-2/manage/fulfillment-hero.png" class="img-fluid" alt="Fulfillment Solutions" data-aos="fade-left">
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Fulfillment Benefits -->
                <section class="container py-5">
                    <h2 class="text-center mb-4">The Power of Automated Order Fulfillment</h2>
                    <p class="text-center mb-5">See the time you save with Paykhom Fulfillment and focus on other work for your business.</p>

                    <div class="row">
                        <div class="col-lg-4 mb-4">
                            <div class="card shadow-sm h-100">
                                <div class="card-body">
                                    <img src="/theme/around/assets/img/icons/package.png" width="50" alt="Efficient Shipping" class="mb-3">
                                    <h3 class="h5 card-title">Efficient Order Shipping</h3>
                                    <p class="card-text">Orders are processed on a good time and delivered on the time and date you have selected for. </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 mb-4">
                            <div class="card shadow-sm h-100">
                                <div class="card-body">
                                    <img src="/theme/around/assets/img/icons/tracking.png" width="50" alt="Real-time Tracking" class="mb-3">
                                    <h3 class="h5 card-title">Real-time Trackings for you and costumers</h3>
                                    <p class="card-text">Follow up orders from anywhere, in which stage it is?</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 mb-4">
                            <div class="card shadow-sm h-100">
                                <div class="card-body">
                                    <img src="/theme/around/assets/img/icons/customer-service.png" width="50" alt="Dedicated Support" class="mb-3">
                                    <h3 class="h5 card-title">Customer Oriented Fulfillment</h3>
                                    <p class="card-text">Costumers feel more secure about their orders and what´s the status of them.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Features -->
                <section class="bg-secondary py-5">
                    <div class="container">
                        <h2 class="text-center mb-4">Automation for Your Business</h2>
                        <p class="text-center mb-5">Check the features we have to make you life more easier.</p>

                        <div class="row">
                            <div class="col-md-6 mb-4">
                                <div class="card shadow-sm h-100">
                                    <div class="card-body">
                                        <img src="/theme/around/assets/img/icons/reporting.png" width="50" alt="Automated Reporting" class="mb-3">
                                        <h3 class="h5 card-title">Ship From Anywhere</h3>
                                        <p class="card-text">Ship with our fulfillment to anywhere it´s what you need!.</p>
                                        <a href="/manage-finances/reporting" class="btn btn-primary">Explore Benefits</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 mb-4">
                                <div class="card shadow-sm h-100">
                                    <div class="card-body">
                                        <img src="/theme/around/assets/img/icons/inventory.png" width="50" alt="Fraud Detection" class="mb-3">
                                        <h3 class="h5 card-title">Inventory Management</h3>
                                        <p class="card-text">Track your inventory stock and sell them faster.</p>
                                        <a href="/manage-finances/fraud-prevention" class="btn btn-primary">Learn more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Call to Action -->
                <section class="bg-primary py-5" data-bs-theme="dark" id="solutions-cta">
                    <div class="container text-center">
                        <h2 class="text-white">Unlock the Efficiency of Automated Fulfillment</h2>
                        <p class="text-white opacity-80">Get fulfillment for your business today.</p>
                        <a href="/pricing" class="btn btn-warning btn-lg mt-3">Explore Paykhom's Features</a>
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