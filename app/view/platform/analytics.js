import MarketplaceLayout from '../marketplace-layout'; // Adjust path as needed
//import { Page } from 'paykhom-fw/app/view';

export default class  Analytics extends MarketplaceLayout {
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
                <section class="bg-primary bg-opacity-10 d-flex overflow-hidden py-5">
                    <div class="container d-flex justify-content-center py-md-4 py-xl-5">
                        <div class="row align-items-center">
                            <!-- Content -->
                            <div class="col-lg-6 text-center text-lg-start pe-lg-5">
                                <h1 class="display-3 mb-4">Unlock Payment Insights with Powerful <span class="fw-normal">Analytics</span></h1>
                                <p class="lead pb-3 mb-4">Transform raw transaction data into actionable insights. Track key metrics, understand customer behavior, and optimize your payment strategies with Paykhom Analytics.</p>
                                <a class="btn btn-lg btn-primary rounded-pill" href="/manage-finances/analytics">Explore Analytics Features</a>
                            </div>
                            <!-- Image -->
                            <div class="col-lg-6">
                                <img src="/theme/around/assets/img/manage/analytics-dashboard.png" alt="Paykhom Analytics Dashboard" class="img-fluid rounded-5 shadow-lg">
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Key Features -->
                <section class="container py-5">
                    <h2 class="h1 text-center mb-5">Key Analytics Features</h2>
                    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                        <!-- Feature Item -->
                        <div class="col">
                            <div class="card h-100 border-0 shadow-sm">
                                <div class="card-body p-4">
                                    <img src="/theme/around/assets/img/manage/transaction-reporting-icon.png" alt="Transaction Reporting Icon" class="mb-3" width="50">
                                    <h3 class="h5 mb-3">Real-Time Transaction Reporting</h3>
                                    <p>Gain a live view of your payment activity. Monitor transactions as they happen and identify trends instantly.</p>
                                </div>
                            </div>
                        </div>
                        <!-- Feature Item -->
                        <div class="col">
                            <div class="card h-100 border-0 shadow-sm">
                                <div class="card-body p-4">
                                    <img src="/theme/around/assets/img/manage/performance-analytics-icon.png" alt="Performance Analytics Icon" class="mb-3" width="50">
                                    <h3 class="h5 mb-3">Performance Analysis</h3>
                                    <p>Dive deep into your payment performance. Track key metrics like conversion rates, average transaction values, and payment method success rates.</p>
                                </div>
                            </div>
                        </div>
                        <!-- Feature Item -->
                        <div class="col">
                            <div class="card h-100 border-0 shadow-sm">
                                <div class="card-body p-4">
                                    <img src="/theme/around/assets/img/manage/customer-segmentation-icon.png" alt="Customer Segmentation Icon" class="mb-3" width="50">
                                    <h3 class="h5 mb-3">Customer Segmentation</h3>
                                    <p>Understand your customers better. Segment your audience based on payment behavior and personalize their payment experience.</p>
                                </div>
                            </div>
                        </div>
                        <!-- Feature Item -->
                        <div class="col">
                            <div class="card h-100 border-0 shadow-sm">
                                <div class="card-body p-4">
                                    <img src="/theme/around/assets/img/manage/fraud-detection-icon.png" alt="Fraud Detection Icon" class="mb-3" width="50">
                                    <h3 class="h5 mb-3">Fraud Detection & Risk Management</h3>
                                    <p>Protect your business from fraud. Identify suspicious transactions and implement preventative measures with advanced risk analysis tools.</p>
                                </div>
                            </div>
                        </div>
                        <!-- Feature Item -->
                        <div class="col">
                            <div class="card h-100 border-0 shadow-sm">
                                <div class="card-body p-4">
                                    <img src="/theme/around/assets/img/manage/custom-dashboards-icon.png" alt="Custom Dashboards Icon" class="mb-3" width="50">
                                    <h3 class="h5 mb-3">Customizable Dashboards</h3>
                                    <p>Visualize the data that matters most. Create custom dashboards to monitor the metrics that are critical to your business success.</p>
                                </div>
                            </div>
                        </div>
                        <!-- Feature Item -->
                        <div class="col">
                            <div class="card h-100 border-0 shadow-sm">
                                <div class="card-body p-4">
                                    <img src="/theme/around/assets/img/manage/data-export-icon.png" alt="Data Export Icon" class="mb-3" width="50">
                                    <h3 class="h5 mb-3">Data Export Capabilities</h3>
                                    <p>Take your data with you. Easily export reports in various formats for further analysis and integration with other business systems.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Benefits -->
                <section class="container py-5">
                    <h2 class="h1 text-center mb-5">Benefits of Using Paykhom Analytics</h2>
                    <div class="row row-cols-1 row-cols-md-2 g-4">
                        <!-- Benefit Item -->
                        <div class="col">
                            <div class="d-flex align-items-start">
                                <img src="/theme/around/assets/img/manage/improved-decision-making-icon.png" alt="Improved Decision Making Icon" class="me-3" width="40">
                                <div>
                                    <h3 class="h5 mb-2">Improved Decision-Making</h3>
                                    <p>Make data-driven decisions to optimize your payment processes and improve your bottom line.</p>
                                </div>
                            </div>
                        </div>
                        <!-- Benefit Item -->
                        <div class="col">
                            <div class="d-flex align-items-start">
                                <img src="/theme/around/assets/img/manage/increased-revenue-icon.png" alt="Increased Revenue Icon" class="me-3" width="40">
                                <div>
                                    <h3 class="h5 mb-2">Increased Revenue</h3>
                                    <p>Identify opportunities to boost sales by understanding customer preferences and optimizing payment options.</p>
                                </div>
                            </div>
                        </div>
                        <!-- Benefit Item -->
                        <div class="col">
                            <div class="d-flex align-items-start">
                                <img src="/theme/around/assets/img/manage/reduced-fraud-icon.png" alt="Reduced Fraud Icon" class="me-3" width="40">
                                <div>
                                    <h3 class="h5 mb-2">Reduced Fraud</h3>
                                    <p>Proactively identify and mitigate fraudulent activities, protecting your business and your customers.</p>
                                </div>
                            </div>
                        </div>
                        <!-- Benefit Item -->
                        <div class="col">
                            <div class="d-flex align-items-start">
                                <img src="/theme/around/assets/img/manage/enhanced-customer-experience-icon.png" alt="Enhanced Customer Experience Icon" class="me-3" width="40">
                                <div>
                                    <h3 class="h5 mb-2">Enhanced Customer Experience</h3>
                                    <p>Personalize the payment experience based on customer behavior, leading to higher satisfaction and loyalty.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Case Studies (Slider) -->
                <section class="container pt-5">
                    <h2 class="h1 text-center mb-5">Success Stories</h2>
                    <div class="swiper swiper-initialized swiper-horizontal swiper-backface-hidden" data-swiper-options='{
                        "spaceBetween": 40,
                        "loop": true,
                        "breakpoints": {
                            "576": { "slidesPerView": 1 },
                            "992": { "slidesPerView": 2 }
                        }
                    }'>
                        <div class="swiper-wrapper" id="swiper-wrapper-case-studies" aria-live="polite">
                            <!-- Case Study Item -->
                            <div class="swiper-slide" role="group" aria-label="1 / 2">
                                <div class="card h-100 border-0 shadow-sm">
                                    <img src="/theme/around/assets/img/manage/case-study-online-retail.jpg" class="card-img-top" alt="Online Retail Case Study">
                                    <div class="card-body p-4">
                                        <h3 class="h5 mb-3">Online Retailer Boosts Conversion Rates by 15% with Paykhom Analytics</h3>
                                        <p class="card-text">Learn how a leading online retailer used Paykhom Analytics to identify and address payment friction points, resulting in a significant increase in conversion rates.</p>
                                    </div>
                                    <div class="card-footer p-4">
                                        <a href="#" class="btn btn-link">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <!-- Case Study Item -->
                            <div class="swiper-slide" role="group" aria-label="2 / 2">
                                <div class="card h-100 border-0 shadow-sm">
                                    <img src="/theme/around/assets/img/manage/case-study-saas.jpg" class="card-img-top" alt="SaaS Case Study">
                                    <div class="card-body p-4">
                                        <h3 class="h5 mb-3">SaaS Company Reduces Churn by 10% by Analyzing Payment Decline Data</h3>
                                        <p class="card-text">Discover how a growing SaaS company leveraged Paykhom Analytics to understand why customers were churning and implemented strategies to improve retention.</p>
                                    </div>
                                    <div class="card-footer p-4">
                                        <a href="#" class="btn btn-link">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                    </div>
                </section>

                <!-- Ready to Get Started CTA -->
                <section class="bg-primary bg-opacity-10 py-5">
                    <div class="container text-center">
                        <h2 class="h1 mb-4">Ready to Unlock Payment Insights?</h2>
                        <p class="lead mb-4">Empower your business with Paykhom Analytics and make data-driven decisions that drive growth.</p>
                        <a class="btn btn-lg btn-primary rounded-pill" href="/manage-finances/analytics">Get Started Today</a>
                    </div>
                </section>
            </main>
        `;
    }

    *script() {
        
yield html`
            <script>
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