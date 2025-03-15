import MarketplaceLayout from '../marketplace-layout'; // Adjust path as needed
//import { Page } from 'paykhom-fw/container/view';

export default class  Domains extends MarketplaceLayout {
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

                <!-- Hero -->
                <section class="bg-dark d-flex min-vh-100 position-relative overflow-hidden py-5" data-bs-theme="dark">
                    <div class="container d-flex flex-column justify-content-center position-relative z-2 pt-sm-3 pt-md-4 pt-xl-5 pb-1 pb-sm-3 pb-lg-4 pb-xl-5">
                        <div class="row flex-lg-nowrap align-items-center pb-5 pt-2 pt-lg-4 pt-xl-0 mt-lg-4 mt-xl-0">
                            <div class="col-lg-7 order-lg-2 ms-lg-4 mb-2 mb-lg-0">
                                <div class="parallax order-lg-2 mx-auto" style="max-width: 740px; transform: translate3d(0px, 0px, 0px) rotate(0.0001deg); transform-style: preserve-3d; backface-visibility: hidden; pointer-events: none;">
                                    <div class="parallax-layer" data-depth="0.05" style="transform: translate3d(3.4px, -3.6px, 0px); transform-style: preserve-3d; backface-visibility: hidden; position: relative; display: block; left: 0px; top: 0px;">
                                        <img src="/theme/around/assets/img/landing/saas-2/hero/01.png" alt="Layer">
                                    </div>
                                    <div class="parallax-layer" data-depth="-0.05" style="transform: translate3d(-3.4px, 3.6px, 0px); transform-style: preserve-3d; backface-visibility: hidden; position: absolute; display: block; left: 0px; top: 0px;">
                                        <img src="/theme/around/assets/img/landing/saas-2/hero/02.png" style="animation: rotate-cw 100s linear infinite;" alt="Layer">
                                    </div>
                                    <div class="parallax-layer z-2" data-depth="0.3" style="transform: translate3d(20.2px, -21.3px, 0px); transform-style: preserve-3d; backface-visibility: hidden; position: absolute; display: block; left: 0px; top: 0px;">
                                        <img src="/theme/around/assets/img/landing/saas-2/hero/03.png" alt="Layer"></div>
                                    <div class="parallax-layer z-2" data-depth="0.15" style="transform: translate3d(10.1px, -10.7px, 0px); transform-style: preserve-3d; backface-visibility: hidden; position: absolute; display: block; left: 0px; top: 0px;">
                                        <img src="/theme/around/assets/img/landing/saas-2/hero/04.png" alt="Layer">
                                    </div>
                                    <div class="parallax-layer z-2" data-depth="0.4" style="transform: translate3d(27px, -28.4px, 0px); transform-style: preserve-3d; backface-visibility: hidden; position: absolute; display: block; left: 0px; top: 0px;">
                                        <img src="/theme/around/assets/img/landing/saas-2/hero/05.png" alt="Layer">
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-5 order-lg-1 text-center text-lg-start me-xl-5">
                                <span class="badge bg-warning bg-opacity-10 text-warning fs-sm">Unlock Your Payment Potential with Paykhom </span>
                                <h1 class="display-4 py-3 my-2 mb-xl-3">Your Journey to Seamless Payments Starts Here</h1>
                                <ul class="list-unstyled d-table text-start mx-auto mx-lg-0 mb-0">
                                    <li class="d-flex text-body pb-2 mb-1">
                                        <img src="/theme/around/assets/img/icons/check-alt.svg" class="ai-check-alt text-primary lead me-2" width="24" height="24">
                                        Effortlessly integrate payment solutions tailored for your business.
                                    </li>
                                    <li class="d-flex text-body pb-2 mb-1">
                                        <img src="/theme/around/assets/img/icons/check-alt.svg" class="ai-check-alt text-primary lead me-2" width="24" height="24">
                                        Scale confidently with flexible pricing and dedicated support.
                                    </li>
                                    <li class="d-flex text-body pb-2 mb-1">
                                        <img src="/theme/around/assets/img/icons/check-alt.svg" class="ai-check-alt text-primary lead me-2" width="24" height="24">
                                        Find the tools and resources you need to build a thriving payment ecosystem.
                                    </li>
                                </ul>
                                <div class="d-flex justify-content-center justify-content-lg-start pt-4 pt-xl-5">
                                    <div class="text-center">
                                        <a class="btn btn-lg btn-primary rounded-pill w-100 w-sm-auto" href="/start">Get Started with Paykhom</a>
                                        <p class="text-body fs-sm pt-2 mt-sm-1 mb-0">Explore our resources and start building today!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row row-cols-3 row-cols-sm-4 row-cols-lg-5 row-cols-xl-6 justify-content-center align-items-center g-4 pt-lg-3 pt-xl-4">
                            <div class="col">
                                <img class="d-block my-1 mx-auto" src="/theme/around/assets/img/landing/saas-1/brands/foster-light.svg" width="145" alt="Foster">
                            </div>
                            <div class="col">
                                <img class="d-block my-1 mx-auto" src="/theme/around/assets/img/landing/saas-1/brands/klinos-light.svg" width="140" alt="Klinos">
                            </div>
                            <div class="col">
                                <img class="d-block my-1 mx-auto" src="/theme/around/assets/img/landing/saas-1/brands/champion-light.svg" width="160" alt="Champion">
                            </div>
                            <div class="col">
                                <img class="d-block my-1 mx-auto" src="/theme/around/assets/img/landing/saas-1/brands/airbnb-light.svg" width="130" alt="Airbnb">
                            </div>
                            <div class="col">
                                <img class="d-block my-1 mx-auto" src="/theme/around/assets/img/landing/saas-1/brands/starcraft-light.svg" width="160" alt="Starcraft">
                            </div>
                            <div class="col">
                                <img class="d-block my-1 mx-auto" src="/theme/around/assets/img/landing/saas-1/brands/alpine-light.svg" width="150" alt="Alpine">
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Features -->
                <section class="bg-secondary py-5">
                    <div class="container mt-1 py-md-2 py-lg-4 py-xxl-5">
                        <h2 class="h1 text-center pt-1 pt-sm-4">Your Toolkit for Payment Success</h2>
                        <p class="text-center mx-auto pb-3 mb-3 mb-lg-4" style="max-width: 480px;">We're here to empower you with the resources and tools you need to launch, manage, and grow your payment processing capabilities. Let's get started!</p>

                        <div class="row g-4 pb-2 pb-sm-4 mb-sm-2">

                            <!-- Item: Get Started with Paykhom -->
                            <div class="col-md-6">
                                <div class="card border-0 h-100">
                                    <div class="card-body">
                                        <a href="/start">
                                            <img class="d-dark-mode-none" src="/theme/around/assets/img/icons/building-wrench.svg" alt="Get Started" width="64">
                                            <img class="d-none d-dark-mode-block" src="/theme/around/assets/img/icons/building-wrench-dark.svg" alt="Get Started" width="64">
                                        </a>
                                        <div class="pt-3 mt-2 mt-lg-3">
                                            <h3><a href="/start">Get Started with Paykhom</a></h3>
                                            <p class="mb-0">Explore our payment solutions and find the perfect fit for your unique business needs. From startups to enterprises, we've got you covered.</p>
                                            <a href="/start" class="btn btn-link p-0">Discover solutions <img src="/theme/around/assets/img/icons/arrow-right.svg" width = "24"></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Item: Explore Developer Tools -->
                            <div class="col-md-6">
                                <div class="card border-0 h-100">
                                    <div class="card-body">
                                        <a href="/developers/api">
                                            <img class="d-dark-mode-none" src="/theme/around/assets/img/icons/tools.svg" alt="Developer Tools" width="64">
                                            <img class="d-none d-dark-mode-block" src="/theme/around/assets/img/icons/tools-dark.svg" alt="Developer Tools" width="64">
                                        </a>
                                        <div class="pt-3 mt-2 mt-lg-3">
                                            <h3><a href="/developers/api">Explore Developer Tools</a></h3>
                                            <p class="mb-0">Dive into our comprehensive API documentation and SDKs to seamlessly integrate Paykhom into your existing platform.</p>
                                            <a href="/developers/api" class="btn btn-link p-0">Explore API<img src="/theme/around/assets/img/icons/arrow-right.svg" width = "24"></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Item: Pricing & Plans -->
                            <div class="col-md-6">
                                <div class="card border-0 h-100">
                                    <div class="card-body">
                                        <a href="/pricing">
                                            <img class="d-dark-mode-none" src="/theme/around/assets/img/icons/calculator.svg" alt="Pricing" width="64">
                                            <img class="d-none d-dark-mode-block" src="/theme/around/assets/img/icons/calculator-dark.svg" alt="Pricing" width="64">
                                        </a>
                                        <div class="pt-3 mt-2 mt-lg-3">
                                            <h3><a href="/pricing">Pricing & Plans</a></h3>
                                            <p class="mb-0">Find the perfect pricing plan that scales with your business. Transparent and competitive rates designed for your growth.</p>
                                            <a href="/pricing" class="btn btn-link p-0">View pricing<img src="/theme/around/assets/img/icons/arrow-right.svg" width = "24"></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Item: Talk to Sales -->
                            <div class="col-md-6">
                                <div class="card border-0 h-100">
                                    <div class="card-body">
                                        <a href="/contact/sales">
                                            <img class="d-dark-mode-none" src="/theme/around/assets/img/icons/question-mark.svg" alt="Talk to Sales" width="64">
                                            <img class="d-none d-dark-mode-block" src="/theme/around/assets/img/icons/question-mark-dark.svg" alt="Talk to Sales" width="64">
                                        </a>
                                        <div class="pt-3 mt-2 mt-lg-3">
                                            <h3><a href="/contact/sales">Talk to Sales</a></h3>
                                            <p class="mb-0">Need a personalized solution? Connect with our expert sales team to discuss your specific requirements.</p>
                                            <a href="/contact/sales" class="btn btn-link p-0">Contact us <img src="/theme/around/assets/img/icons/arrow-right.svg" width = "24"></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Item: Explore Integrations -->
                            <div class="col-md-6">
                                <div class="card border-0 h-100">
                                    <div class="card-body">
                                        <a href="/integrations">
                                            <img class="d-dark-mode-none" src="/theme/around/assets/img/icons/integrations.svg" alt="Explore Integrations" width="64">
                                            <img class="d-none d-dark-mode-block" src="/theme/around/assets/img/icons/integrations-dark.svg" alt="Explore Integrations" width="64">
                                        </a>
                                        <div class="pt-3 mt-2 mt-lg-3">
                                            <h3><a href="/integrations">Explore Integrations</a></h3>
                                            <p class="mb-0">Connect Paykhom with your favorite platforms and streamline your workflow. See our growing list of seamless integrations.</p>
                                            <a href="/integrations" class="btn btn-link p-0">View Integrations <img src="/theme/around/assets/img/icons/arrow-right.svg" width = "24"></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Item: Domains and Hosting -->
                            <div class="col-md-6">
                                <div class="card border-0 h-100">
                                    <div class="card-body">
                                        <a href="/domains">
                                            <img class="d-dark-mode-none" src="/theme/around/assets/img/icons/domain.svg" alt="Domains" width="64">
                                            <img class="d-none d-dark-mode-block" src="/theme/around/assets/img/icons/domain-dark.svg" alt="Domains" width="64">
                                        </a>
                                        <div class="pt-3 mt-2 mt-lg-3">
                                            <h3><a href="/domains">Domains & Hosting</a></h3>
                                            <p class="mb-0">Connect a custom domain or purchase one through us. Enjoy secure hosting options and rock-solid security protocols for your peace of mind.</p>
                                            <a href="/domains" class="btn btn-link p-0">Learn about domains <img src="/theme/around/assets/img/icons/arrow-right.svg" width = "24"></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <!-- CTA -->
                <section class="pt-2 pt-md-0">
                    <div class="position-relative pt-lg-3 pt-xl-4 pt-xxl-5">
                        <div class="bg-primary position-absolute top-0 start-0 w-100 h-100 rounded-5 d-md-none aos-init" data-aos="zoom-in" data-aos-duration="700" data-aos-offset="300"></div>
                        <div class="bg-primary position-absolute top-0 start-0 w-100 h-100 d-none d-md-block aos-init" style="border-radius: 5rem 5rem 0 0;" data-aos="zoom-in" data-aos-duration="700" data-aos-offset="300"></div>
                        <div class="container px-4 px-sm-5 px-md-0 position-relative z-2 pt-md-4 pt-lg-5 pb-sm-2 pb-md-3 pb-xl-4 pb-xxl-5" data-bs-theme="dark">
                            <div class="row justify-content-center aos-init" data-aos="fade-up" data-aos-duration="500" data-aos-offset="300">
                                <div class="col-md-10 col-lg-8 col-xl-7 col-xxl-6 text-center py-5">
                                    <h2 class="display-1 mb-4">Ready to simplify your payments and grow your business?</h2>
                                    <p class="text-body fs-xl pb-3 mb-3 mb-lg-4">Paykhom empowers you with the tools, resources, and support you need to create a seamless payment experience for your customers.</p>
                                    <div class="d-sm-flex justify-content-center">
                                        <a class="btn btn-lg btn-warning rounded-pill w-100 w-sm-auto me-sm-4 mb-3 mb-sm-0" href="/start">Start Building Now</a>
                                        <a class="btn btn-lg btn-outline-warning rounded-pill w-100 w-sm-auto" href="/contact/sales">Contact Sales</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="position-relative z-2 px-md-5">
                            <img class="d-block d-dark-mode-none mx-auto" src="/theme/around/assets/img/landing/saas-2/dash-light.png" width="1076" alt="Image">
                            <img class="d-none d-dark-mode-block mx-auto" src="/theme/around/assets/img/landing/saas-2/dash-dark.png" width="1076" alt="Image">
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