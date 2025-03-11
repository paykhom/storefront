import MarketplaceLayout from '../marketplace-layout'; // Adjust path as needed
//import { Page } from 'paykhom-fw/app/view';

export default class  International extends MarketplaceLayout {
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

                <!-- Hero Section: Focus on Global Opportunity -->
                <section class="bg-primary bg-opacity-10 d-flex min-vh-100 overflow-hidden py-5">
                    <div class="container d-flex justify-content-center pb-sm-3 py-md-4 py-xl-5">
                        <div class="row align-items-center pt-5 mt-4 mt-xxl-0">

                            <div class="col-lg-6 mb-4 mb-lg-0 pb-3 pb-lg-0">
                                <div class="parallax mx-auto mx-lg-0" style="max-width: 582px;">
                                    <div class="parallax-layer z-3" data-depth="0.1">
                                        <div class="position-relative bg-dark mx-auto" style="max-width: 61%; padding: .3125rem; margin-bottom: 9.9%; border-radius: calc(var(--ar-border-radius) * 2.125);">
                                            <video class="d-block w-100" autoplay loop muted
                                                style="border-radius: calc(var(--ar-border-radius) * 1.875);">
                                                <source src="/theme/around/assets/img/selling/global-hero-video.mp4" type="video/mp4">
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

                            <!-- Compelling Value Proposition -->
                            <div class="col-lg-6 text-center text-lg-start">
                                <h1 class="display-3 pb-3 mb-4">Unlock Global Markets. Scale Your Sales with Us!</h1>
                                <p class="lead">Go Global with Paykhom: Expand your business beyond borders with Paykhom, a new international revenue system.</p>
                                <p>Ready to tap into the vast potential of international sales? Unlock new revenue streams and reach customers worldwide with our cutting-edge payment solutions.</p>
                                <div class="d-sm-flex justify-content-center justify-content-lg-start pt-5 mt-lg-2">
                                    <a class="btn btn-lg btn-primary w-100 w-sm-auto mb-2 mb-sm-0 me-sm-1" href="/grow-business/global-markets">Explore Global Markets</a>
                                    <a class="btn btn-lg btn-link" href="/pricing">
                                        Pricing Details
                                        <i class="ai-arrow-right ms-2"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Key Benefits Section: Overcoming Objections -->
                <section class="container py-5 my-md-2 my-lg-3 my-xl-4 my-xxl-5">
                    <h2 class="h1 text-center">Global Challenges, Local Solutions</h2>
                    <div class="row row-cols-1 row-cols-md-2 g-4">

                        <!-- Secure & Compliant Payments -->
                        <div class="col">
                            <div class="card border-0 h-100">
                                <div class="card-body">
                                    <img src="/theme/around/assets/img/icons/international/secure.png" width="60" alt="Secure payments" class="mb-3">
                                    <h3 class="h5">Secure & Compliant Payments</h3>
                                    <p>Navigate international regulations and ensure secure transactions across borders. Expand your business with confidence.</p>
                                </div>
                            </div>
                        </div>

                        <!-- Multi-Currency Support -->
                        <div class="col">
                            <div class="card border-0 h-100">
                                <div class="card-body">
                                    <img src="/theme/around/assets/img/icons/international/currency.png" width="60" alt="Multi-currency support" class="mb-3">
                                    <h3 class="h5">Multi-Currency Support</h3>
                                    <p>Accept payments in multiple currencies to reduce friction for your global customers and increase conversion rates.</p>
                                </div>
                            </div>
                        </div>

                        <!-- Localized Payment Methods -->
                        <div class="col">
                            <div class="card border-0 h-100">
                                <div class="card-body">
                                    <img src="/theme/around/assets/img/icons/international/globe.png" width="60" alt="Local payment methods" class="mb-3">
                                    <h3 class="h5">Localized Payment Methods</h3>
                                    <p>Connect to a network that processes all sorts of payments all over the world.</p>
                                </div>
                            </div>
                        </div>

                        <!-- Fraud Protection -->
                        <div class="col">
                            <div class="card border-0 h-100">
                                <div class="card-body">
                                    <img src="/theme/around/assets/img/icons/international/fraud.png" width="60" alt="Fraud protection" class="mb-3">
                                    <h3 class="h5">Robust Fraud Protection</h3>
                                    <p>Protect your business from fraudulent activity with our advanced risk management tools tailored for global transactions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Overcome Objections and Build Desire: Showcasing What Makes Paykhom Unique -->
                <section class="py-5">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-6">
                                <img src="/theme/around/assets/img/selling/team-connects.jpg" alt="team connecting over POS integration">
                            </div>
                            <div class="col-lg-6 ps-5">
                                <h2 class="h1 pt-xl-2 mt-md-2 mb-lg-4">Why Partner with Paykhom for International Sales?</h2>
                                <ul class="list-unstyled pb-2 pb-lg-0 mb-4 mb-lg-5">
                                    <li class="d-flex pt-1 mt-2">
                                        <i class="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>
                                        Expert Global Support: Navigate the intricacies of cross-border payments with ease.
                                    </li>
                                    <li class="d-flex pt-1 mt-2">
                                        <i class="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>
                                        Increased Conversion Rates: Provide a seamless, localized payment experience for international
                                        customers.
                                    </li>
                                    <li class="d-flex pt-1 mt-2">
                                        <i class="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>
                                        Simplified Compliance: Stay ahead of regulatory changes with our built-in compliance features.
                                    </li>
                                </ul>
                                <a class="btn btn-lg btn-primary" href="/contact/sales">Contact Our Sales Team</a>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Trust Building: Social Proof & Client Logos (carousel) -->

                <!-- Strong Call to Action: Driving Conversions -->
                <section class="bg-dark pt-2 pt-md-0" data-bs-theme="dark">
                    <div class="position-relative py-lg-3 py-xl-4 py-xxl-5">
                        <div class="container px-4 px-sm-5 px-md-0 position-relative z-2 pt-md-4 pt-lg-5 pb-sm-2 pb-md-3 pb-xl-4 pb-xxl-5">
                            <div class="row justify-content-center" data-aos="fade-up" data-aos-duration="500" data-aos-offset="300">
                                <div class="col-md-10 col-lg-8 col-xl-7 col-xxl-6 text-center py-5">
                                    <h2 class="display-1 mb-4">Expand Your Horizon, Expand Your Profits</h2>
                                    <p class="text-body fs-xl pb-3 mb-3 mb-lg-4">With a safe, reliable, and secure global revenue system, you can make the profit you desire.</p>
                                    <div class="d-sm-flex justify-content-center">
                                        <a class="btn btn-lg btn-warning rounded-pill w-100 w-sm-auto me-sm-4 mb-3 mb-sm-0" href="/start">Start 14-Day Trial</a>
                                        <a class="btn btn-lg btn-outline-warning rounded-pill w-100 w-sm-auto" href="/contact/sales">Speak to an Expert</a>
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