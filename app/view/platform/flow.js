import MarketplaceLayout from '../marketplace-layout'; // Adjust path as needed
//import { Page } from 'paykhom-fw/app/view';

export default class  Flow extends MarketplaceLayout {
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

                <!-- Hero: Orchestrate Your Business Success -->
                <section class="bg-gradient-primary pt-5 pb-4" data-bs-theme="dark">
                    <div class="container pt-5">
                        <div class="row align-items-center">
                            <div class="col-md-6 text-center text-md-start">
                                <h1 class="display-4 text-white">Master Workflow Automation to Elevate Your Business</h1>
                                <p class="lead text-white opacity-80">Optimize your payment processes and unlock new levels of efficiency. Discover how Paykhom can streamline your operations.</p>
                                <a href="#automation-examples" class="btn btn-warning mt-3">See Automation in Action</a>
                            </div>
                            <div class="col-md-6">
                                <img src="/theme/around/assets/img/landing/saas-2/manage/flow-hero.png" class="img-fluid" alt="Workflow Automation" data-aos="fade-left">
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Key Benefits of Automation -->
                <section class="container py-5">
                    <h2 class="text-center mb-4">Benefits of Streamlined Automation</h2>
                    <p class="text-center mb-5">
                        Automate workflows to optimize your business and accelerate payment processing.
                    </p>

                    <div class="row">
                        <div class="col-lg-4 mb-4">
                            <div class="card shadow-sm h-100">
                                <div class="card-body">
                                    <img src="/theme/around/assets/img/icons/time.png" width="50" alt="Time Savings" class="mb-3">
                                    <h3 class="h5 card-title">Significant Time Savings</h3>
                                    <p class="card-text">Reduce manual tasks and free up valuable time for your team to focus on strategic initiatives.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 mb-4">
                            <div class="card shadow-sm h-100">
                                <div class="card-body">
                                    <img src="/theme/around/assets/img/icons/efficiency.png" width="50" alt="Increased Efficiency" class="mb-3">
                                    <h3 class="h5 card-title">Increased Operational Efficiency</h3>
                                    <p class="card-text">Improve accuracy and reduce errors by automating repetitive processes and routine tasks.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 mb-4">
                            <div class="card shadow-sm h-100">
                                <div class="card-body">
                                    <img src="/theme/around/assets/img/icons/scale.png" width="50" alt="Scalability" class="mb-3">
                                    <h3 class="h5 card-title">Enhanced Scalability</h3>
                                    <p class="card-text">Easily adapt to changing business needs and accommodate growth without adding significant overhead.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Automation Examples -->
                <section class="bg-secondary py-5" id="automation-examples">
                    <div class="container">
                        <h2 class="text-center mb-4">Automation in Action</h2>
                        <p class="text-center mb-5">See how you can streamline your business and accelerate success with Paykhom's features.</p>

                        <div class="row">
                            <div class="col-md-6 mb-4">
                                <div class="card shadow-sm h-100">
                                    <div class="card-body">
                                        <img src="/theme/around/assets/img/icons/reporting.png" width="50" alt="Automated Reporting" class="mb-3">
                                        <h3 class="h5 card-title">Automated Reporting</h3>
                                        <p class="card-text">Automatically generate reports for your payment system on how many times they paid and from where it is, reducing manual reporting time.</p>
                                        <a href="/manage-finances/reporting" class="btn btn-primary">Learn more</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 mb-4">
                                <div class="card shadow-sm h-100">
                                    <div class="card-body">
                                        <img src="/theme/around/assets/img/icons/fraud.png" width="50" alt="Fraud Detection" class="mb-3">
                                        <h3 class="h5 card-title">Real Time Analytics</h3>
                                        <p class="card-text">Analyze your fraud score for your costumers with the data we will provide to reduce fraud.</p>
                                        <a href="/manage-finances/fraud-prevention" class="btn btn-primary">Learn more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Call to Action -->
                <section class="bg-primary py-5" data-bs-theme="dark">
                    <div class="container text-center">
                        <h2 class="text-white">Transform Your Business with Payment Automation</h2>
                        <p class="text-white opacity-80">Discover the power of Paykhom and unlock unparalleled efficiency and growth for your business.</p>
                        <a href="/pricing" class="btn btn-warning btn-lg mt-3">Explore Paykhom's Pricing</a>
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