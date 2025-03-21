import MarketplaceLayout from '../marketplace-layout'; // Adjust path as needed
//import { Page } from 'paykhom-fw/modules/view';

export default class  Enterprise extends MarketplaceLayout {
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
                <section class="pt-5" style="background: linear-gradient(176.14deg, #f8f7e1 2.64%, #feeae7 94.95%);">
                    <div class="container pt-5" data-bs-theme="light">
                        <div class="row align-items-center justify-content-center pt-3 pt-sm-4 mt-sm-3">
                            <div class="col-sm-9 col-md-8 col-lg-7 offset-lg-1 order-md-2 pb-3 pb-sm-0 mt-md-n5 mb-4 mb-sm-5">
                                <div class="ps-md-4 ps-lg-0 mt-md-n4 mt-lg-n5">
                                    <h1 class="display-5 mb-lg-4">Unlock Scalable Growth with <span class="text-dark fw-bolder" data-bs-theme="light">Paykhom Enterprise</span></h1>
                                    <p class="text-body fs-lg">Power your enterprise with robust payment solutions designed for scale, security, and comprehensive financial management.</p>
                                    <div style="max-width: 24rem;">
                                        <div class="d-table text-dark mx-auto" data-bs-theme="light">
                                            <div class="ms-n4">
                                                <img width="41" height="63" src="/theme/around/assets/img/icons/enterprise-icon.png" alt="Enterprise Icon">
                                            </div>
                                        </div>
                                        <div class="d-flex">
                                            <div class="pe-3 me-sm-3">
                                                <h3 class="h5 fw-bold mb-4">Custom Solutions</h3>
                                                <a class="btn btn-lg btn-primary px-4" href="/contact/sales">
                                                    <span class="text-light px-sm-2">Get a Quote</span>
                                                </a>
                                            </div>
                                            <div>
                                                <div class="d-table position-relative text-dark mt-n3 mb-2" data-bs-theme="light">
                                                    <h3 class="h5 fw-bold mb-0 position-absolute start-50 top-50 translate-middle">Enterprise Grade</h3>
                                                    <img width="110" height="61" src="/theme/around/assets/img/decorative/enterprise-decorative.png" alt="Enterprise Decorative">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6 col-sm-5 col-md-4 order-md-1">
                                <img src="/theme/around/assets/img/enterprise/hero-image.png" width="416" alt="Enterprise Solutions">
                            </div>
                        </div>
                    </div>
                </section>

                <!-- About - The Problem -->
                <section class="container pt-5 mt-lg-3 mt-xl-4 mt-xxl-5">
                    <div class="pt-2 pt-sm-3 mt-md-3" style="max-width: 60rem;">
                        <h2 class="pb-3 mb-2 mb-sm-3 mb-lg-4">Is Your Payment Infrastructure Holding You Back? <span class="text-primary">Enterprises Face Unique Challenges.</span></h2>
                        <p class="fs-lg">Legacy payment systems often lack the flexibility and scalability required for rapid growth.  Dealing with fragmented solutions, complex compliance requirements, and limited financial visibility can hinder innovation and profitability.</p>
                    </div>
                </section>

                <!-- Features -->
                <section class="container py-5 my-lg-3 my-xl-4 my-xxl-5 aos-init" data-aos="fade-up" data-aos-duration="600" data-aos-offset="280" data-disable-parallax-down="md">
                    <div class="row align-items-xl-center py-2 py-sm-3 my-md-3 mb-lg-4 mb-xl-5">
                        <div class="col-md-6 pb-4 pb-md-0 mb-3 mb-md-0">
                            <img class="rounded-4" src="/theme/around/assets/img/enterprise/features-dashboard.png" alt="Enterprise Dashboard">
                        </div>
                        <div class="col-md-6 col-xl-5 offset-xl-1 aos-init" data-aos="fade-up" data-aos-duration="850" data-aos-offset="180" data-disable-parallax-down="md">
                            <div class="ps-md-4 ps-xl-0">
                                <h2 class="h1 pb-3 mb-2 mb-md-3 mb-xl-4">Paykhom Enterprise:  The Solution You Need</h2>
                                <ul class="list-unstyled pb-1 pb-xl-2">
                                    <li class="d-flex fs-lg pb-1 mb-3">
                                        <img src="/theme/around/assets/img/icons/scalable-icon.png" width="24" height="24" class="mt-n1 me-3" alt="Scalable Icon">
                                        Scalable Infrastructure: Handle massive transaction volumes and peak periods without disruption.
                                    </li>
                                    <li class="d-flex fs-lg pb-1 mb-3">
                                        <img src="/theme/around/assets/img/icons/custom-icon.png" width="24" height="24" class="mt-n1 me-3" alt="Customizable Icon">
                                        Customizable Solutions:  Tailor payment flows and functionalities to meet your unique business requirements.
                                    </li>
                                    <li class="d-flex fs-lg pb-1 mb-3">
                                        <img src="/theme/around/assets/img/icons/secure-icon.png" width="24" height="24" class="mt-n1 me-3" alt="Secure Icon">
                                        Enhanced Security: Leverage advanced fraud prevention tools and PCI DSS compliance to safeguard sensitive data.
                                    </li>
                                    <li class="d-flex fs-lg pb-1 mb-3">
                                        <img src="/theme/around/assets/img/icons/reporting-icon.png" width="24" height="24" class="mt-n1 me-3" alt="Reporting Icon">
                                        Comprehensive Reporting:  Gain real-time financial insights with powerful dashboards and customizable reports.
                                    </li>
                                    <li class="d-flex fs-lg pb-1 mb-3">
                                        <img src="/theme/around/assets/img/icons/global-icon.png" width="24" height="24" class="mt-n1 me-3" alt="Global Icon">
                                        Global Reach: Expand into new markets with support for a wide range of currencies and payment methods.
                                    </li>
                                </ul>
                                <p class="text-body mb-lg-4">Paykhom Enterprise provides the tools and support you need to optimize your payment operations and drive sustainable growth.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Guides (Carousel on screens < 992px) - Case Studies -->
                <section class="position-relative py-2 py-sm-3 py-md-4 py-lg-5">
                    <div class="bg-secondary position-absolute top-0 start-0 w-100 h-100 d-none d-xxl-block" style="border-top-left-radius: 8rem; border-bottom-right-radius: 8rem;"></div>
                    <div class="bg-secondary position-absolute top-0 start-0 w-100 h-100 d-none d-lg-block d-xxl-none" style="border-top-left-radius: 4rem; border-bottom-right-radius: 4rem;"></div>
                    <div class="bg-secondary position-absolute top-0 start-0 w-100 h-100 d-lg-none" style="border-top-left-radius: 2.25rem; border-bottom-right-radius: 2.25rem;"></div>
                    <div class="container position-relative z-2 py-5 mt-xl-2 mb-lg-2 mb-xl-3 mb-xxl-5 mt-xxl-4">
                        <h2 class="h1 pt-xxl-1 pb-4 mb-2 mb-lg-3">Enterprise Success Stories</h2>

                        <!-- Swiper slider -->
                        <div class="swiper swiper-initialized swiper-horizontal swiper-backface-hidden" data-swiper-options="
                            {
                            "spaceBetween": 24,
                            "pagination": {
                                "el": ".swiper-pagination",
                                "clickable": true
                            },
                            "breakpoints": {
                                "576": { "slidesPerView": 1.5 },
                                "992": { "slidesPerView": 2 }
                            }
                            }
                        ">
                            <div class="swiper-wrapper" id="swiper-wrapper-8d649d487f6094fa" aria-live="polite">

                                <!-- Item -->
                                <div class="swiper-slide h-auto swiper-slide-active" role="group" aria-label="1 / 3" style="width: 416px; margin-right: 24px;">
                                    <div class="card h-100 border-0 rounded-4 pb-3">
                                        <div class="position-relative" data-bs-theme="light">
                                            <img class="rounded-4 rounded-bottom-0" src="/theme/around/assets/img/enterprise/case-study-1.png" alt="Case Study Image">
                                        </div>
                                        <div class="card-body pb-4">
                                            <h3 class="h4">Global E-commerce Giant Reduces Fraud by 40% with Paykhom</h3>
                                            <p>See how Paykhom's advanced fraud prevention helped a leading online retailer significantly decrease chargebacks and protect revenue.</p>
                                        </div>
                                        <div class="card-footer border-0 pt-0">
                                            <a class="btn btn-outline-primary w-100" href="#">Read More</a>
                                        </div>
                                    </div>
                                </div>

                                <!-- Item -->
                                <div class="swiper-slide h-auto swiper-slide-next" role="group" aria-label="2 / 3" style="width: 416px; margin-right: 24px;">
                                    <div class="card h-100 border-0 rounded-4 pb-3">
                                        <div class="position-relative" data-bs-theme="light">
                                            <img class="rounded-4 rounded-bottom-0" src="/theme/around/assets/img/enterprise/case-study-2.png" alt="Case Study Image">
                                        </div>
                                        <div class="card-body pb-4">
                                            <h3 class="h4">Financial Institution Streamlines Payment Operations and Improves Compliance</h3>
                                            <p>Discover how a major bank leveraged Paykhom to centralize their payment processing and achieve seamless PCI compliance.</p>
                                        </div>
                                        <div class="card-footer border-0 pt-0">
                                            <a class="btn btn-outline-primary w-100" href="#">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Pagination (bullets) -->
                            <div class="swiper-pagination position-relative bottom-0 mt-2 pt-4 d-lg-none swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal swiper-pagination-lock"><span class="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex="0" role="button" aria-label="Go to slide 1" aria-current="true"></span></div>
                            <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                        </div>
                    </div>
                </section>

                <!-- Results -->
                <section class="container py-5 my-lg-3 my-xl-4 my-xxl-5">
                    <div class="row py-2 py-sm-3 my-md-3">
                        <div class="col-lg-5 col-xl-4 pb-2 pb-sm-0 mb-4 mb-sm-5 mb-lg-0 aos-init" data-aos="fade-up" data-aos-duration="600" data-aos-offset="280" data-disable-parallax-down="md">
                            <h2 class="h1 pb-3 mb-lg-4">Achieve Measurable Results with Paykhom Enterprise</h2>
                        </div>
                        <div class="col-lg-7 col-xxl-6 offset-xl-1 offset-xxl-2">
                            <div class="row row-cols-1 row-cols-sm-2 gy-4 gy-lg-5">
                                <div class="col aos-init" data-aos="fade-up" data-aos-offset="280" data-disable-parallax-down="md">
                                    <div class="pe-sm-2 pe-md-4 me-xl-3">
                                        <div class="d-inline-block bg-primary                                         text-light rounded p-3 mb-3 mb-md-4"><img src="/theme/around/assets/img/icons/percent-icon.png" width="32" height="32" alt="Percent Icon"></div>
                                        <h3 class="h5 fw-bold mb-2">Reduced Transaction Costs</h3>
                                        <p class="fs-lg mb-2">Optimize your payment fees and processing costs with our efficient platform.</p>
                                    </div>
                                </div>
                                <div class="col aos-init" data-aos="fade-up" data-aos-delay="250" data-aos-offset="280" data-disable-parallax-down="md">
                                    <div class="pe-sm-2 pe-md-4 me-xl-3">
                                        <div class="d-inline-block bg-primary text-light rounded p-3 mb-3 mb-md-4"><img src="/theme/around/assets/img/icons/performance-icon.png" width="32" height="32" alt="Performance Icon"></div>
                                        <h3 class="h5 fw-bold mb-2">Increased Conversion Rates</h3>
                                        <p class="fs-lg mb-2">Offer a seamless and secure checkout experience to boost sales and customer loyalty.</p>
                                    </div>
                                </div>
                                <div class="col aos-init" data-aos="fade-up" data-aos-delay="500" data-disable-parallax-down="md">
                                    <div class="pe-sm-2 pe-md-4 me-xl-3">
                                        <div class="d-inline-block bg-primary text-light rounded p-3 mb-3 mb-md-4"><img src="/theme/around/assets/img/icons/fraud-icon.png" width="32" height="32" alt="Fraud Icon"></div>
                                        <h3 class="h5 fw-bold mb-2">Lowered Fraud Risks</h3>
                                        <p class="fs-lg mb-2">Protect your business and customers with our cutting-edge fraud prevention solutions.</p>
                                    </div>
                                </div>
                                <div class="col aos-init" data-aos="fade-up" data-aos-delay="700" data-disable-parallax-down="md">
                                    <div class="pe-sm-2 pe-md-4 me-xl-3">
                                        <div class="d-inline-block bg-primary text-light rounded p-3 mb-3 mb-md-4"><img src="/theme/around/assets/img/icons/scale-icon.png" width="32" height="32" alt="Scale Icon"></div>
                                        <h3 class="h5 fw-bold mb-2">Enhanced Scalability</h3>
                                        <p class="fs-lg mb-2">Easily scale your payment infrastructure as your business grows, without compromising performance or security.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Subscription - Newsletter -->
                <section class="container position-relative py-5 my-lg-3 my-xl-4 my-xxl-5">
                    <div class="position-absolute top-0 end-0 d-none d-md-block" style="animation: rotate-cw 70s linear infinite; margin-top: -190px; margin-right: 100px;">
                        <img class="text-danger" width="306" height="306" src="/theme/around/assets/img/decorative/geometric-icon.png" alt="Geometric Icon" >
                    </div>
                    <div class="pb-3 pt-2 py-sm-3 my-md-3 my-lg-4" style="max-width: 40rem;">
                        <h2 class="h1">Stay Informed on the Latest Trends in Enterprise Payments</h2>
                        <p class="fs-lg pb-2 pb-sm-3 pb-lg-4">Get exclusive insights, industry news, and product updates delivered directly to your inbox.</p>
                        <div class="input-group input-group-lg">
                            <input class="form-control" type="email" placeholder="Enter your email address">
                            <button class="btn btn-primary" type="button">Subscribe</button>
                        </div>
                    </div>
                </section>

                <!-- CTA -->
                <section class="position-relative overflow-hidden" data-bs-theme="light">
                    <div class="position-absolute top-0 start-0 w-100 h-100 aos-init" data-aos="zoom-in" data-aos-duration="600" data-aos-offset="300" data-disable-parallax-down="md">
                        <div class="container-start position-absolute top-0 start-0 w-100 h-100 d-none d-xxl-block" style="transform: rotate(-180deg); border-top-right-radius: 7rem; border-bottom-right-radius: 7rem; background: linear-gradient(176.14deg, #f8f7e1 2.64%, #feeae7 94.95%);"></div>
                        <div class="container-start position-absolute top-0 start-0 w-100 h-100 d-lg-block d-xxl-none" style="transform: rotate(-180deg); border-top-right-radius: 4rem; border-bottom-right-radius: 4rem; background: linear-gradient(176.14deg, #f8f7e1 2.64%, #feeae7 94.95%);"></div>
                        <div class="container-start position-absolute top-0 start-0 w-100 h-100 d-sm-block d-lg-none" style="transform: rotate(-180deg); border-top-right-radius: 2.25rem; border-bottom-right-radius: 2.25rem; background: linear-gradient(176.14deg, #f8f7e1 2.64%, #feeae7 94.95%);"></div>
                    </div>
                    <div class="container position-relative z-2 pt-5">
                        <div class="row align-items-center justify-content-center pt-1 pt-sm-3 pt-md-4">
                            <div class="col-md-6 col-xl-5 offset-md-1 pb-3 pb-sm-0 mt-md-n5 mb-4 mb-sm-5 aos-init" data-aos="fade-up" data-aos-duration="850" data-aos-offset="180" data-disable-parallax-down="md">
                                <div class="mx-auto" style="max-width: 25rem;">
                                    <h2 class="display-5 pb-5 mb-2">Ready to Transform Your Enterprise Payments?</h2>
                                    <p class="fs-lg pb-2">Contact our sales team to learn how Paykhom Enterprise can help you achieve your business goals.</p>
                                    <div class="d-flex">
                                        <div class="pe-3 me-lg-3">
                                            <a class="btn btn-lg btn-primary px-4" href="/contact/sales">
                                                <span class="text-light px-sm-2">Request a Demo</span>
                                            </a>
                                        </div>
                                        <div>
                                            <a class="btn btn-lg btn-outline-primary px-4" href="/contact/sales">
                                                <span class="text-dark px-sm-2">Contact Sales</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-8 col-sm-6 col-md-5 col-xl-6 d-flex justify-content-end aos-init" data-aos="fade-up" data-aos-duration="600" data-aos-offset="250" data-disable-parallax-down="md">
                                <img src="/theme/around/assets/img/enterprise/cta-image.png" width="457" alt="Contact Us">
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Instagram - Optional - Replace with Client Logos / Testimonials -->
                <section class="pt-2 pt-sm-4 pt-md-5">
                    <div class="container pt-5 mt-1 mt-sm-0 mt-lg-2 mt-xl-4 mt-xxl-5">
                        <div class="d-flex position-relative align-items-center">
                            <img class="btn btn-icon btn-primary stretched-link me-3 me-sm-4" src="/theme/around/assets/img/icons/logos-icon.png" alt="Logos Icon"  width="24" height="24" />
                            <h2 class="mb-0">Trusted By Leading Enterprises</h2>
                        </div>
                    </div>
                    <div class="overflow-auto" data-simplebar="init">
                        <div class="simplebar-wrapper" style="margin: 0px;">
                            <div class="simplebar-height-auto-observer-wrapper">
                                <div class="simplebar-height-auto-observer"></div>
                            </div>
                            <div class="simplebar-mask">
                                <div class="simplebar-offset" style="right: 0px; bottom: 0px;">
                                    <div class="simplebar-content-wrapper" tabindex="0" role="region" aria-label="scrollable content" style="height: auto; overflow: hidden;">
                                        <div class="simplebar-content" style="padding: 0px;">
                                            <div class="row row-cols-8 g-0 pt-4 pb-2 pb-xl-0 mt-2 mt-lg-3" style="min-width: 1200px;">
                                                <!-- Items -->
                                                <div class="col">
                                                    <a class="card-hover zoom-effect d-block position-relative" href="#">
                                                        <div class="zoom-effect-wrapper">
                                                            <img class="zoom-effect-img" src="/theme/around/assets/img/logos/logo-1.png" alt="Logo 1">
                                                        </div>
                                                    </a>
                                                </div>
                                                <!-- Item -->
                                                <div class="col">
                                                    <a class="card-hover zoom-effect d-block position-relative" href="#">
                                                        <div class="zoom-effect-wrapper">
                                                            <img class="zoom-effect-img" src="/theme/around/assets/img/logos/logo-2.png" alt="Logo 2">
                                                        </div>
                                                    </a>
                                                </div>
                                                <!-- Item -->
                                                <div class="col">
                                                    <a class="card-hover zoom-effect d-block position-relative" href="#">
                                                        <div class="zoom-effect-wrapper">
                                                            <img class="zoom-effect-img" src="/theme/around/assets/img/logos/logo-3.png" alt="Logo 3">
                                                        </div>
                                                    </a>
                                                </div>
                                                <!-- Item -->
                                                <div class="col">
                                                    <a class="card-hover zoom-effect d-block position-relative" href="#">
                                                        <div class="zoom-effect-wrapper">
                                                            <img class="zoom-effect-img" src="/theme/around/assets/img/logos/logo-4.png" alt="Logo 4">
                                                        </div>
                                                    </a>
                                                </div>
                                                <!-- Item -->
                                                <div class="col">
                                                    <a class="card-hover zoom-effect d-block position-relative" href="#">
                                                        <div class="zoom-effect-wrapper">
                                                            <img class="zoom-effect-img" src="/theme/around/assets/img/logos/logo-5.png" alt="Logo 5">
                                                        </div>
                                                    </a>
                                                </div>
                                                <!-- Item -->
                                                <div class="col">
                                                    <a class="card-hover zoom-effect d-block position-relative" href="#">
                                                        <div class="zoom-effect-wrapper">
                                                            <img class="zoom-effect-img" src="/theme/around/assets/img/logos/logo-6.png" alt="Logo 6">
                                                        </div>
                                                    </a>
                                                </div>
                                                <!-- Item -->
                                                <div class="col">
                                                    <a class="card-hover zoom-effect d-block position-relative" href="#">
                                                        <div class="zoom-effect-wrapper">
                                                            <img class="zoom-effect-img" src="/theme/around/assets/img/logos/logo-7.png" alt="Logo 7">
                                                        </div>
                                                    </a>
                                                </div>
                                                <!-- Item -->
                                                <div class="col">
                                                    <a class="card-hover zoom-effect d-block position-relative" href="#">
                                                        <div class="zoom-effect-wrapper">
                                                            <img class="zoom-effect-img" src="/theme/around/assets/img/logos/logo-8.png" alt="Logo 8">
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="simplebar-placeholder" style="width: 1822px; height: 268px;"></div>
                            </div>
                            <div class="simplebar-track simplebar-horizontal" style="visibility: hidden;">
                                <div class="simplebar-scrollbar" style="width: 0px; display: none;"></div>
                            </div>
                            <div class="simplebar-track simplebar-vertical" style="visibility: hidden;">
                                <div class="simplebar-scrollbar" style="height: 0px; display: none;"></div>
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