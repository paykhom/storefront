import MarketplaceLayout from '../marketplace-layout'; // Adjust path as needed
//import { Page } from 'paykhom-fw/view';

export default class  Inbox extends MarketplaceLayout {
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

                <!-- Hero Section: Highlight Opportunity, Promise Solutions -->
                <section class="position-relative min-vh-100 py-5" data-bs-theme="light">

                    <!-- Background Image Slider -->
                    <div class="swiper swiper-scale-effect position-absolute top-0 start-0 w-100 h-100 swiper-fade" data-swiper-options="{
                            "effect": "fade",
                            "speed": 800,
                            "autoplay": {
                            "delay": 7000,
                            "disableOnInteraction": false
                            },
                            "pagination": {
                            "el": ".swiper-pagination",
                            "clickable": true
                            }
                        }">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <div class="swiper-slide-cover bg-position-top-center"
                                    style="background-image: url(assets/img/selling/socialmedia/social-media-hero1.png);"></div>
                            </div>
                            <div class="swiper-slide">
                                <div class="swiper-slide-cover bg-position-top-center"
                                    style="background-image: url(assets/img/selling/socialmedia/social-media-hero2.png);"></div>
                            </div>
                            <div class="swiper-slide">
                                <div class="swiper-slide-cover bg-position-top-center"
                                    style="background-image: url(assets/img/selling/socialmedia/social-media-hero3.png);"></div>
                            </div>
                        </div>
                        <div class="swiper-pagination mb-4"></div>
                    </div>

                    <!-- Content with Contact Form: Capturing Leads Immediately -->
                    <div class="container position-relative z-2 py-lg-3 py-xl-5 my-5">
                        <div class="row pt-md-3 py-xxl-5 my-5">
                            <div class="col py-5 mb-md-4 mb-lg-5">
                                <h1 class="display-1 text-uppercase mb-4">
                                    Harness the power of Facebook & Instagram. 
                                </h1>
                                <p class="d-block text-body fs-xl pb-2 mb-4 mb-md-5" style="max-width: 500px;">Start to improve sales with the right tools, all in one easy access area.</p>
                                <div class="position-relative d-inline-flex align-items-center">
                                    <a class="btn btn-lg btn-primary rounded-circle stretched-link" href="/contact/sales" aria-label="Contact us">
                                        <i class="ai-message"></i>
                                    </a>
                                    <span class="text-body fs-lg fw-semibold ms-3">Speak to Sales</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Problem: Increase conversion rate, traffic  -->
                <!-- Benefits - What's in it for them (WIIFM) -->
                <section class="container py-5 mt-lg-3 mt-xl-4 mt-xxl-5">
                    <div class="row gy-4">
                        <div class="col-sm-6 col-lg-4 d-flex align-items-start">
                            <img src="/theme/around/assets/img/icons/social/Reach.png" width="40" alt="Reach icon" class="me-3 mt-1">
                            <div>
                                <h3 class="h5">Reach Your Target Audience</h3>
                                <p>Target demographically and see your ROI increase!</p>
                            </div>
                        </div>

                        <div class="col-sm-6 col-lg-4 d-flex align-items-start">
                            <img src="/theme/around/assets/img/icons/social/traffic.png" width="40" alt="Traffic icon" class="me-3 mt-1">
                            <div>
                                <h3 class="h5">Boost Website Traffic</h3>
                                <p>Generate more leads to better sell your product.</p>
                            </div>
                        </div>

                        <div class="col-sm-6 col-lg-4 d-flex align-items-start">
                            <img src="/theme/around/assets/img/icons/social/revenue.png" width="40" alt="Revenue icon" class="me-3 mt-1">
                            <div>
                                <h3 class="h5">Drive More Sales</h3>
                                <p>Generate more revenue from new and diverse customers.</p>
                            </div>
                        </div>
                </section>

                <!-- Showcase Features and Benefits: Before and After Scenario-->
                <!-- Make a better website traffic system -->
                <section class="container py-5">
                    <h2 class="h1 text-center">Maximize Your Social Presence Today!</h2>
                    <div class="row align-items-center">
                        <div class="col-md-6">
                            <img src="/theme/around/assets/img/selling/no-marketing.jpg" alt="Old ways to promote revenue">
                        </div>
                        <div class="col-md-6">
                            <img src="/theme/around/assets/img/selling/boost-marketing.jpg" alt="boost sales">
                        </div>
                    </div>
                </section>

                <!-- Testimonials & Case Studies: Authority-->
                <!-- Social Media Reviews are a proven way to engage -->

                    <!-- A call to action -->
                    <section class="bg-primary py-5" data-bs-theme="dark">
                        <div class="container">
                            <div class="text-center">
                            <h2 class="h1 mb-4">What are you waiting for?</h2>
                            <p class="lead">Sign up today and make your money tommorow.</p>
                            <a class="btn btn-lg btn-warning" href="/pricing">Generate more revenue now!</a>
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