import MarketplaceLayout from '../marketplace-layout'; // Adjust path as needed
//import { Page } from 'paykhom-fw/modules/view';

export default class  Sell extends MarketplaceLayout {
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

<!-- Hero Section: Hook, Problem/Agitation, Solution -->
<section>
  <div class="jarallax bg-dark min-vh-100 py-5" data-jarallax="" data-type="scroll-opacity" data-speed="0.7">
    <div class="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-40"></div>

    <div class="container position-relative z-5 py-sm-4 py-lg-5 mt-4">

      <!-- Text + Button: Attention, Interest, Desire, Action (AIDA) -->
      <div class="row pt-lg-2 py-xl-4 py-xxl-5 mb-md-4 mb-lg-5">
        <div class="col-md-10 col-lg-9 col-xl-8 col-xxl-7 pt-5 mb-5">
          <h1 class="display-2 text-light text-uppercase pb-sm-2 pb-md-3">Unlock Your Sales Potential. Start Selling with Paykhom Today!</h1>
          <p class="text-light opacity-70 pb-3 pb-md-4 mb-3" style="max-width: 520px;">Are you ready to take your business to the next level? Paykhom provides the tools you need to reach more customers, streamline your operations, and maximize your revenue.</p>
          <a class="btn btn-outline-light" href="/sell">Learn more about selling with Paykhom</a>
        </div>
      </div>
      <div class="d-flex align-items-center justify-content-between mb-3">
        <div class="fw-medium text-light text-uppercase">Why Choose Paykhom?</div>

        <!-- Slider prev/next buttons -->
        <div class="d-flex">
          <button class="btn btn-prev btn-icon btn-sm btn-outline-light rounded-circle ms-3" type="button" id="popular-prev"
            aria-label="Previous slide" tabindex="0" aria-controls="swiper-wrapper-292bf5e10aa7c64e5">
            <img src="data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z' fill='currentColor'/%3E%3C/svg%3E" alt="Previous Slide" />
          </button>
          <button class="btn btn-next btn-icon btn-sm btn-outline-light rounded-circle ms-3" type="button" id="popular-next"
            aria-label="Next slide" tabindex="0" aria-controls="swiper-wrapper-292bf5e10aa7c64e5">
            <img src="data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.59 16.59L10 18L16 12L10 6L8.59 7.41L13.17 12L8.59 16.59Z' fill='currentColor'/%3E%3C/svg%3E" alt="Next Slide" />
          </button>
        </div>
      </div>

      <!-- Slider (popular items) -->
      <div class="swiper swiper-initialized swiper-horizontal swiper-backface-hidden" data-swiper-options="{
            "slidesPerView": 1,
            "spaceBetween": 24,
            "loop": true,
            "navigation": {
              "prevEl": "#popular-prev",
              "nextEl": "#popular-next"
            },
            "breakpoints": {
              "500": {
                "slidesPerView": 2
              },
              "860": {
                "slidesPerView": 3
              },
              "1200": {
                "slidesPerView": 4
              }
            }
          }">
        <div class="swiper-wrapper" id="swiper-wrapper-292bf5e10aa7c64e5" aria-live="polite">

          <!-- Item -->
          <div class="swiper-slide h-auto swiper-slide-active" style="width: 306px; margin-right: 24px;" role="group"
            aria-label="1 / 5" data-swiper-slide-index="0">
            <a class="card h-100 border-0 rounded-1 text-decoration-none px-xxl-1" href="/pricing">
              <div class="card-body p-4 px-sm-3 px-md-4">
                <div class="d-flex align-items-center">
                  <img src="/theme/around/assets/img/icons/sell/handshake.png" width="97" alt="Product">
                  <div class="ps-3 ps-md-4">
                    <h3 class="fs-sm mb-2">Partnerships, That Drive Growth</h3>
                    <p class="fs-sm mb-0">Leverage partnerships to amplify your reach and boost sales.</p>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <!-- Item -->
          <div class="swiper-slide h-auto swiper-slide-next" style="width: 306px; margin-right: 24px;" role="group"
            aria-label="2 / 5" data-swiper-slide-index="1">
            <a class="card h-100 border-0 rounded-1 text-decoration-none px-xxl-1" href="/pricing">
              <div class="card-body p-4 px-sm-3 px-md-4">
                <div class="d-flex align-items-center">
                  <img src="/theme/around/assets/img/icons/sell/rocket.png" width="97" alt="Product">
                  <div class="ps-3 ps-md-4">
                    <h3 class="fs-sm mb-2">Simple Integration: Start Selling Fast</h3>
                    <p class="fs-sm mb-0">Get your store up and running with easy-to-use tools and documentation.</p>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <!-- Item -->
          <div class="swiper-slide h-auto" style="width: 306px; margin-right: 24px;" role="group" aria-label="3 / 5"
            data-swiper-slide-index="2">
            <a class="card h-100 border-0 rounded-1 text-decoration-none px-xxl-1" href="/pricing">
              <div class="card-body p-4 px-sm-3 px-md-4">
                <div class="d-flex align-items-center">
                  <img src="/theme/around/assets/img/icons/sell/global.png" width="97" alt="Product">
                  <div class="ps-4">
                    <h3 class="fs-sm mb-2">Global Reach: Expand Your Market</h3>
                    <p class="fs-sm mb-0">Sell your products around the world with our multi-currency support and international
                      shipping options.</p>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <!-- Item -->
          <div class="swiper-slide h-auto" style="width: 306px; margin-right: 24px;" role="group" aria-label="4 / 5"
            data-swiper-slide-index="3">
            <a class="card h-100 border-0 rounded-1 text-decoration-none px-xxl-1" href="/pricing">
              <div class="card-body p-4 px-sm-3 px-md-4">
                <div class="d-flex align-items-center">
                  <img src="/theme/around/assets/img/icons/sell/security.png" width="97" alt="Product">
                  <div class="ps-3 ps-md-4">
                    <h3 class="fs-sm mb-2">Trusted Platform: Secure Transactions</h3>
                    <p class="fs-sm mb-0">Rest easy knowing your transactions are protected with our robust security
                      measures.</p>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <!-- Item -->
          <div class="swiper-slide h-auto" role="group" aria-label="5 / 5" data-swiper-slide-index="4" style="width: 306px; margin-right: 24px;">
            <a class="card h-100 border-0 rounded-1 text-decoration-none px-xxl-1" href="/pricing">
              <div class="card-body p-4 px-sm-3 px-md-4">
                <div class="d-flex align-items-center">
                  <img src="/theme/around/assets/img/icons/sell/payment.png" width="97" alt="Product">
                  <div class="ps-3 ps-md-4">
                    <h3 class="fs-sm mb-2">Diverse Payment Options</h3>
                    <p class="fs-sm mb-0">Accept a wide variety of payments to better accommodate each and every customer.</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
      </div>
    </div>
    <div id="jarallax-container-0" class="jarallax-container"
      style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; overflow: hidden; z-index: -100; clip-path: polygon(0px 0px, 100% 0px, 100% 100%, 0px 100%);">
      <div class="jarallax-img"
        style="background-image: url("/theme/around/assets/img/landing/shop-1/hero/bg.jpg"); object-fit: cover; object-position: 50% 50%; max-width: none; position: fixed; top: 0px; left: 0px; width: 1501.11px; height: 805.631px; overflow: hidden; pointer-events: none; transform-style: preserve-3d; backface-visibility: hidden; margin-top: -229.316px; transform: translate3d(0px, 229.316px, 0px); opacity: 1;"
        data-jarallax-original-styles="background-image: url(assets/img/landing/shop-1/hero/bg.jpg);"></div>
    </div>
  </div>
</section>

<!-- Benefits Section: Feature -> Benefit, Social Proof -->
<section class="container py-5 my-lg-3 my-xl-4 my-xxl-5">
  <div class="row pt-2 py-md-4">
    <div class="col-lg-10 col-xl-9">
      <p class="lead text-dark pb-md-2 pb-lg-3 mb-2">Paykhom empowers you to scale your sales with confidence and ease. From streamlined online payments to in-person solutions, we provide the tools and support you need to succeed in today's competitive market.</p>
      <p>Join thousands of successful merchants who trust Paykhom to grow their businesses. Explore our platform today and see what Paykhom can do for you.</p>
      <a class="btn btn-lg btn-link px-0" href="/sell">
        Discover the Paykhom Advantage
        <i class="ai-arrow-right ms-2"></i>
      </a>
    </div>
  </div>
</section>

<!-- Core Offer Section: Value Proposition, Scarcity, Call to Action -->
<section class="container mt-n3 mt-sm-0 pb-5 mb-1 mb-sm-2 mb-lg-3 mb-xl-4 mb-xxl-5">
  <h2 class="h1 pb-3 mb-lg-4">Accept Payments, Your Way</h2>
  <p>It's easy to integrate Paykhom's solutions into your site for accepting payments, but here's how we do it:</p>
  <div class="row g-4 pb-2 pb-md-4">
    <div class="col-md-4">
      <div class="card zoom-effect h-100 border-0 rounded-1 overflow-hidden" style="min-height: 320px;">
        <span class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-10 z-2"></span>
        <div class="zoom-effect-wrapper rounded-1 position-absolute top-0 start-0 w-100 h-100">
          <div class="zoom-effect-img bg-size-cover bg-position-bottom-center position-absolute top-0 start-0 w-100 h-100"
            style="background-image: url(assets/img/icons/sell/online-payment.jpg);"></div>
        </div>
        <a class="card-body d-flex flex-column justify-content-end align-items-start position-absolute top-0 start-0 w-100 h-100 text-decoration-none z-3"
          href="/accept-payments/online">
          <span class="bg-light text-dark rounded-pill fs-sm fw-semibold lh-1 py-3 px-4">Accept Online Payments</span>
        </a>
      </div>
    </div>

    <div class="col-md-8">

      <!-- Card -->
      <div class="card zoom-effect border-0 rounded-1 overflow-hidden">
        <span class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-10 z-2"></span>
        <div class="zoom-effect-wrapper rounded-1">
          <img class="zoom-effect-img" src="/theme/around/assets/img/icons/sell/mobile-payment.jpg" alt="Category image">
        </div>
        <a class="card-body d-flex flex-column justify-content-end align-items-start position-absolute top-0 start-0 w-100 h-100 text-decoration-none z-3"
          href="/accept-payments/mobile">
          <span class="bg-light text-dark rounded-pill fs-sm fw-semibold lh-1 py-3 px-4">Mobile Payments Solutions</span>
        </a>
      </div>

      <div class="row g-4 pt-4">
        <div class="col-sm-6">

          <!-- Card -->
          <div class="card zoom-effect border-0 rounded-1 overflow-hidden">
            <span class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-10 z-2"></span>
            <div class="zoom-effect-wrapper rounded-1">
              <img class="zoom-effect-img" src="/theme/around/assets/img/icons/sell/international-payment.jpg" alt="Category image">
            </div>
            <a class="card-body d-flex flex-column justify-content-end align-items-start position-absolute top-0 start-0 w-100 h-100 text-decoration-none z-3"
              href="/accept-payments/international">
              <span class="bg-light text-dark rounded-pill fs-sm fw-semibold lh-1 py-3 px-4">Global Payment Gateways</span>
            </a>
          </div>
        </div>

        <div class="col-sm-6">

          <!-- Card -->
          <div class="card zoom-effect border-0 rounded-1 overflow-hidden">
            <span class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-10 z-2"></span>
            <div class="zoom-effect-wrapper rounded-1">
              <img class="zoom-effect-img" src="/theme/around/assets/img/icons/sell/pos-terminal.jpg" alt="Category image">
            </div>
            <a class="card-body d-flex flex-column justify-content-end align-items-start position-absolute top-0 start-0 w-100 h-100 text-decoration-none z-3"
              href="/accept-payments/in-person">
              <span class="bg-light text-dark rounded-pill fs-sm fw-semibold lh-1 py-3 px-4">In-Person Payments (POS)</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Testimonial Section: Authority, Build Trust -->
<!-- Add your testimonials below  -->

<!-- Banner Section: Guarantee + Call to Action -->
<section class="container pb-5 mb-lg-4 mb-xl-5">
  <div class="row pb-2 pb-sm-3 pb-md-4 mb-xlx-1">
    <div class="col-lg-6 mb-4 mb-lg-0">
      <div class="row pb-2 pb-sm-3 pb-lg-0 pb-xxl-2 mb-4 mb-lg-5">
        <div class="col-md-11 col-xl-10">
          <h2 class="h1 mb-lg-4">Ready to Power Up Your Sales?</h2>
          <p class="mb-0">You've got nothing to lose and everything to gain. Try Paykhom and see the results for
            yourself!</p>
        </div>
      </div>
      <div class="position-relative pt-5 pb-2 py-sm-5 px-4 ps-sm-5 pe-sm-0">
        <div class="bg-primary position-absolute top-0 start-0 h-100 rounded-1 opacity-30 d-none d-sm-block"
          style="width: calc(100% - 38px);"></div>
        <div class="bg-primary position-absolute top-0 start-0 w-100 h-100 rounded-1 opacity-30 d-sm-none"></div>
        <div class="d-sm-flex align-items-center position-relative z-2 py-xl-3 px-2 px-sm-0 ps-xl-3">
          <div class="text-center text-sm-start me-sm-n4 me-md-3 me-lg-n2">
            <div class="fs-xs text-uppercase pb-4 pb-md-5 mb-2 mb-md-0 mb-lg-3">Hurry!</div>
            <h2 class="pb-3 mb-md-4">Act now to receive a personalized demo and special onboarding.</h2>
            <div class="countdown d-flex flex-wrap flex-lg-nowrap justify-content-center justify-content-sm-start pb-4 pb-md-5 mb-2 mb-md-0 mb-lg-3"
              data-countdown-date="01/01/2026 12:00:00">
              <div class="text-center mb-2">
                <div class="bg-light rounded-1 p-2">
                  <div class="h2 fw-normal mb-0 mx-1" data-days="">365</div>
                </div>
                <span class="text-dark fs-sm">days</span>
              </div>
              <span class="text-white fs-2 mx-2">:</span>
              <div class="text-center mb-2">
                <div class="bg-light rounded-1 p-2">
                  <div class="h2 fw-normal mb-0 mx-1" data-hours="">24</div>
                </div>
                <span class="text-dark fs-sm">hours</span>
              </div>
              <span class="text-white fs-2 mx-2">:</span>
              <div class="text-center mb-2">
                <div class="bg-light rounded-1 p-2">
                  <div class="h2 fw-normal mb-0 mx-1" data-minutes="">00</div>
                </div>
                <span class="text-dark fs-sm">minutes</span>
              </div>
            </div>
            <a class="btn btn-outline-dark mb-lg-3" href="/contact/sales">Contact Sales Now</a>
          </div>
          <div class="flex-xl-shrink-0 mx-auto ms-lg-0 me-lg-n4" style="max-width: 362px;">
            <img src="/theme/around/assets/img/landing/shop-1/banner-2.png" alt="Image" class="d-block ms-n2 ms-sm-0" >
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="d-flex flex-column flex-md-row flex-lg-column h-100 ps-lg-4 me-md-4 me-lg-0 ms-lg-2">
        <div
          class="bg-secondary d-flex rounded-1 ps-4 ps-lg-5 py-2 py-md-3 py-lg-4 mb-4 mb-md-0 mb-lg-4 me-md-4 me-lg-0">
          <div class="d-flex flex-column ps-0 ps-sm-3 ps-md-0 ps-xl-3 py-4 me-n5 me-sm-0">
            <div class="fs-sm text-uppercase">Limited-Time Offer</div>
            <div class="my-auto me-md-n5">
              <div class="h3 display-2 mb-0">Exclusive Discount!</div>
              <div class="h2 mb-2">15% off Paykhom Premium</div>
              <div class="fs-sm">Upgrade to Paykhom Premium and unlock even more powerful tools to grow your
                sales. Offer valid for new subscribers only.</div>
            </div>
          </div><img class="d-block my-2" src="/theme/around/assets/img/landing/shop-1/banner-1.png" width="235" alt="Image">
        </div>
        <div class="d-flex align-items-center border rounded-1 p-4 p-lg-5 mt-lg-auto">
          <div class="pt-3 pb-2 px-sm-3 px-md-2 px-lg-0 px-xl-3">
            <h3 class="h2 mb-2">Ready to get started?</h3>
            <p class="fs-sm pb-3 mb-3">Subscribe to our newsletter for even more ways to boost sales</p>
            <div class="input-group input-group-sm" style="max-width: 360px;">
              <input class="form-control" type="email" placeholder="Your email">
              <button class="btn btn-primary" type="button">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Blog (Content Marketing - Build Credibility, Educate) -->
<!-- Include Blog content here-->

<!-- Social Proof Section: Testimonials/Trust Badges -->
<!-- Add Instagram or other content here -->

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