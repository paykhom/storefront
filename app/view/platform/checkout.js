import MarketplaceLayout from '../marketplace-layout'; // Adjust path as needed

export default class  Checkout extends MarketplaceLayout {
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

                <!-- Hero Section: Picture Problem/Agitation, then Propose Solution -->
                <section class="position-relative mt-5">
                    <div class="position-absolute w-100 h-100 top-0 start-0 bg-size-cover bg-position-center mt-4"
                        style="background-image: url(assets/img/landing/shop-2/hero-cta.jpg);"></div>
                    <div class="container position-relative z-2 text-center pt-2 pt-sm-4 pt-lg-5">
                        <h1 class="display-1 text-white pt-5 mt-3">Ready for a Checkout Experience That's as Smooth as Silk?</h1>
                        <p class="text-white fs-xl opacity-90 mx-auto pb-3 pb-md-0 mb-4 mb-md-5" style="max-width: 640px;">Stop losing customers at the last hurdle! Paykhom delivers a frictionless, high-converting checkout process, designed to maximize your sales and customer satisfaction. Get ready for a checkout flow so sleek, so efficient, it'll make you wonder how you ever did business without it.</p>
                        <a class="btn btn-light rounded-pill" href="/checkout">Optimize Your Checkout Now</a>
                    </div>
                    <div class="d-none d-lg-block" style="height: 360px;"></div>
                    <div class="d-none d-md-block d-lg-none" style="height: 260px;"></div>
                    <div class="d-md-none" style="height: 160px;"></div>
                </section>

                <!-- Core Offer Section: Showcasing Key Selling Points -->
                <section class="container pt-5 mt-md-2 mt-lg-4 mt-xl-5">
                    <div class="row">
                        <div class="col-lg-3 pb-3 mb-3 mb-md-4">
                            <h2 class="h1 mt-n2 mt-lg-0 mb-2 mb-lg-4">Unlock Conversion Power</h2>
                            <p class="fs-lg mb-4">Discover how Paykhom's checkout can turn more browsers into buyers.</p>
                            <a class="btn btn-dark rounded-pill" href="/checkout">See What's Possible</a>
                        </div>

                        <div class="col-lg-9">
                            <div class="row row-cols-1 row-cols-md-2 g-4">
                                <!-- Feature 1 -->
                                <div class="col">
                                    <div class="card border-0 h-100">
                                        <div class="card-body">
                                            <img src="/theme/around/assets/img/icons/checkout/optimized.png" width="60" alt="Icon" class="mb-3">
                                            <h3 class="h5">Mobile-Optimized Design</h3>
                                            <p>Seamless and responsive checkout on any device. Reach customers wherever they are.</p>
                                        </div>
                                    </div>
                                </div>

                                <!-- Feature 2 -->
                                <div class="col">
                                    <div class="card border-0 h-100">
                                        <div class="card-body">
                                            <img src="/theme/around/assets/img/icons/checkout/security.png" width="60" alt="Icon" class="mb-3">
                                            <h3 class="h5">Trust & Security Built-In</h3>
                                            <p>Assure your customers their transactions are safe and secure. Build trust and encourage repeat business.</p>
                                        </div>
                                    </div>
                                </div>

                                <!-- Feature 3 -->
                                <div class="col">
                                    <div class="card border-0 h-100">
                                        <div class="card-body">
                                            <img src="/theme/around/assets/img/icons/checkout/conversion.png" width="60" alt="Icon" class="mb-3">
                                            <h3 class="h5">Simplified Process, Higher Conversions</h3>
                                            <p>Reduce cart abandonment with a clear and intuitive checkout flow.</p>
                                        </div>
                                    </div>
                                </div>

                                <!-- Feature 4 -->
                                <div class="col">
                                    <div class="card border-0 h-100">
                                        <div class="card-body">
                                            <img src="/theme/around/assets/img/icons/checkout/integrations.png" width="60" alt="Icon" class="mb-3">
                                            <h3 class="h5">Seamless Integrations</h3>
                                            <p>Integrates effortlessly with your existing platform and tools for a hassle-free setup.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Benefits Section: Solving Problems -->
                <section class="container pt-5 mt-lg-3 mt-xl-4 mt-xxl-5">
                    <div class="row g-4 pt-2 pt-sm-3 pt-md-4 pt-xl-5 mt-sm-2 mt-md-3 mt-xl-0">
                        <div class="col-sm-6 col-lg-4">
                            <h2 class="display-2">Checkout Process</h2>
                            <p class="fs-xl mb-0">It doesn't get any better when you use our checkout process.</p>
                        </div>
                        <div class="col-sm-6 col-lg-4">
                            <img class="rounded-5" src="/theme/around/assets/img/landing/shop-2/gallery/01.jpg" alt="Image">
                        </div>
                        <div class="col-sm-6 col-lg-4">
                            <img class="rounded-5" src="/theme/around/assets/img/landing/shop-2/gallery/02.jpg" alt="Image">
                        </div>
                        <div class="col-sm-6 col-lg-4">
                            <img class="rounded-5" src="/theme/around/assets/img/landing/shop-2/gallery/03.jpg" alt="Image">
                        </div>
                        <div class="col-sm-6 col-lg-4 d-flex align-items-center">
                            <p class="fs-xl text-center mb-0">In recent years, we've dedicated ourselves to the best checkout experience and it really works!</p>
                        </div>
                        <div class="col-sm-6 col-lg-4">
                            <img class="rounded-5" src="/theme/around/assets/img/landing/shop-2/gallery/04.jpg" alt="Image">
                        </div>
                    </div>
                </section>

                <!-- Actionable Section -->
                <section class="container pb-5 mb-lg-3 mb-xl-4 mb-xxl-5">
                    <h2 class="h1 text-md-center pb-2 pb-sm-3 pb-lg-4">Give Your Business a checkout Boost</h2>
                    <div class="row pb-2 pb-sm-3 pb-md-4 pb-xl-5 mb-lg-2">
                        <div class="col-sm-7 col-md-5 col-lg-6 mb-4 mb-md-0">
                            <div class="h-100 bg-size-cover bg-position-center rounded-5 me-md-4 me-xl-5" style="background-image: url(assets/img/landing/shop-2/popular/preview.jpg);">
                                <div class="ratio ratio-16x9"></div>
                            </div>
                        </div>
                        <div class="col-md-7 col-lg-6 py-md-4">
                            <div class="py-xl-2">
                                <h3>Secure Your Business Today!</h3>
                                <p>With the checkout process we've set up, you won't have any issues on your website!<br>Assorted box of 15 macarons composed of:</p>
                                <a class="btn btn-dark rounded-pill" href="#">Order now</a>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Awards (Social Proof) -->
                <section class="container py-5 my-md-2 my-lg-4 my-xl-5">
                    <h2 class="h1 text-md-center pb-2 pb-sm-3 pb-lg-4">As seen on...</h2>
                    <div class="overflow-auto" data-simplebar="init"><div class="simplebar-wrapper" style="margin: 0px;"><div class="simplebar-height-auto-observer-wrapper"><div class="simplebar-height-auto-observer"></div></div><div class="simplebar-mask"><div class="simplebar-offset" style="right: 0px; bottom: 0px;"><div class="simplebar-content-wrapper" tabindex="0" role="region" aria-label="scrollable content" style="height: auto; overflow: hidden;"><div class="simplebar-content" style="padding: 0px;">
                        <div class="row row-cols-4 g-0 py-3 my-sm-3" style="min-width: 600px;">
                            <div class="col">
                                <img class="d-block mx-auto" src="/theme/around/assets/img/landing/shop-2/awards/01.png" width="226" alt="Award">
                            </div>
                            <div class="col">
                                <img class="d-block mx-auto" src="/theme/around/assets/img/landing/shop-2/awards/02.png" width="226" alt="Award">
                            </div>
                            <div class="col">
                                <img class="d-block d-dark-mode-none mx-auto" src="/theme/around/assets/img/landing/shop-2/awards/03-light.png" width="226" alt="Award">
                                <img class="d-none d-dark-mode-block mx-auto" src="/theme/around/assets/img/landing/shop-2/awards/03-dark.png" width="226" alt="Award">
                            </div>
                            <div class="col">
                                <img class="d-block mx-auto" src="/theme/around/assets/img/landing/shop-2/awards/04.png" width="226" alt="Award">
                            </div>
                        </div>
                    </div></div></div></div><div class="simplebar-placeholder" style="width: 1296px; height: 164px;"></div></div><div class="simplebar-track simplebar-horizontal" style="visibility: hidden;"><div class="simplebar-scrollbar" style="width: 0px; display: none;"></div></div><div class="simplebar-track simplebar-vertical" style="visibility: hidden;"><div class="simplebar-scrollbar" style="height: 0px; display: none;"></div></div></div>
                </section>

                <!-- Final CTA: Guarantee + Direct Action -->
                <section class="py-5 bg-size-cover bg-position-center"
                    style="background-image: url(assets/img/landing/shop-2/cta-bg.jpg);">
                    <div class="container py-md-3 py-lg-5 my-xl-3 my-xxl-5">
                        <div class="row pt-2 pb-3 py-sm-4 py-md-5">
                            <div class="col-9 col-sm-8 col-md-6 col-lg-5 col-xl-4">
                                <h2 class="h1 mb-md-4" data-bs-theme="light">Transform Your Checkout Today. Zero Risk.</h2>
                                <p class="fs-lg text-dark opacity-70 pb-3 pb-sm-4 mb-3" data-bs-theme="light">Try Paykhom's enhanced checkout completely risk-free. If you're not satisfied with the results, we'll refund your investment.</p>
                                <a class="btn btn-dark rounded-pill" href="#" data-bs-theme="light">Start Free 14-Day Trial</a>
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