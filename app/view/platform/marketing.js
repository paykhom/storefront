import MarketplaceLayout from '../marketplace-layout'; // Adjust path as needed
//import { Page } from 'paykhom-fw/app/view';

export default class  Marketing extends MarketplaceLayout {
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

    <!-- Hero Section: Highlight Pain Point, Offer Solution for Growth -->
    <section class="overflow-hidden">
      <div class="container pt-2 pt-sm-4 pb-sm-2 pb-md-4 py-xl-5 mt-5">
        <div class="row align-items-center py-5 mt-md-2 my-lg-3 my-xl-4 my-xxl-5">
          <div class="col-lg-7 order-lg-2 d-flex justify-content-center justify-content-lg-end mb-4 mb-md-5 mb-lg-0 pb-3 pb-md-0">
            <div class="parallax me-lg-n4 me-xl-n5" style="max-width: 667px;">
              <div class="parallax-layer" data-depth="0.1">
                <img src="/theme/around/assets/img/landing/business-consulting/hero/01.png" alt="Marketing Team">
              </div>
              <div class="parallax-layer" data-depth="-0.2">
                <img src="/theme/around/assets/img/landing/business-consulting/hero/02.png" alt="Growing Chart">
              </div>
              <div class="parallax-layer" data-depth="0.25">
                <img src="/theme/around/assets/img/landing/business-consulting/hero/03.png" alt="Connected Devices">
              </div>
            </div>
          </div>
          <div class="col-lg-5 order-lg-1">
            <h1 class="display-3 text-center text-lg-start pb-sm-2 pb-md-3">
              Unlock Sales Growth with Powerful Marketing Tools and Revenue
            </h1>
            <p class="fs-lg text-center text-lg-start pb-xl-2 mx-auto mx-lg-0 mb-5" style="max-width: 420px;">Tired of stagnant sales? Paykhom provides the marketing solutions you need to attract more customers, drive conversions, and skyrocket your revenue.</p>
            <div class="input-group mx-auto mx-lg-0" style="max-width: 420px;">
              <a class="btn btn-primary" href="/start">Explore Marketing Solutions</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  
    <!-- Compelling Statistics: Build Trust -->
    <section class="container pb-2 pb-sm-3 pb-md-4 pb-lg-5 mb-xl-3 mb-xxl-5">
      <div class="bg-light rounded-5 py-4 py-md-5 px-lg-5">
        <div class="row row-cols-2 row-cols-md-4 g-0">
          <div class="col d-md-flex justify-content-center text-center text-md-start position-relative">
            <div class="position-absolute top-50 end-0 translate-middle-y border-end" style="height: 60px;"></div>
            <div class="p-3 px-sm-0 py-sm-4">
              <div class="h2 display-5 text-primary mb-0">100%</div>
              <span>Guaranteed support for customer satisfaction.</span>
            </div>
          </div>
          <div class="col d-md-flex justify-content-center text-center text-md-start position-relative">
            <div class="position-absolute top-50 end-0 translate-middle-y border-end d-none d-md-block"
              style="height: 60px;"></div>
            <div class="p-3 px-sm-0 py-sm-4">
              <div class="h2 display-5 text-primary mb-0">30+</div>
              <span>Marketing tools at your fingertips</span>
            </div>
          </div>
          <div class="col d-md-flex justify-content-center text-center text-md-start position-relative">
            <div class="position-absolute top-50 end-0 translate-middle-y border-end" style="height: 60px;"></div>
            <div class="p-3 px-sm-0 py-sm-4">
              <div class="h2 display-5 text-primary mb-0">200%</div>
              <span>Potential revenue increase</span>
            </div>
          </div>
          <div class="col d-md-flex justify-content-center text-center text-md-start position-relative">
            <div class="p-3 px-sm-0 py-sm-4">
              <div class="h2 display-5 text-primary mb-0">5x</div>
              <span>Boost your marketing spend</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  
    <!-- Showcasing Solutions -->
    <section class="container py-5">
      <h2 class="h1 text-center">Fuel Your Marketing with Paykhom</h2>
      <p class="text-center pb-4 mb-2 mb-lg-3">
        Discover new sources to generate more leads and boost the traffic for revenue.
      </p>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
  
        <!-- Strategy -->
        <div class="col">
          <a class="card card-hover-primary border-0 h-100 text-decoration-none" href="#">
            <div class="card-body pb-0">
              <img src="/theme/around/assets/img/icons/marketing/strategy.png" width="45" alt="Icon" class="mb-3">
              <h3 class="h4 card-title">Increase Conversion Rates</h3>
              <p class="card-text">Maximize your sales and return to get the most from each customer who clicks your products.</p>
            </div>
            <div class="card-footer border-0 py-3 my-3 mb-sm-4">
              <div class="btn btn-lg btn-icon btn-outline-primary rounded-circle pe-none">
                <i class="ai-arrow-right"></i>
              </div>
            </div>
          </a>
        </div>
  
        <!-- Communication -->
        <div class="col">
          <a class="card card-hover-primary border-0 h-100 text-decoration-none" href="#">
            <div class="card-body pb-0">
              <img src="/theme/around/assets/img/icons/marketing/communication.png" width="45" alt="Icon" class="mb-3">
              <h3 class="h4 card-title">Make Powerful Partnerships</h3>
              <p class="card-text">Boost your brand's impact with partnerships that connect you to your target audience for exponential revenue and influence.</p>
            </div>
            <div class="card-footer border-0 py-3 my-3 mb-sm-4">
              <div class="btn btn-lg btn-icon btn-outline-primary rounded-circle pe-none">
                <i class="ai-arrow-right"></i>
              </div>
            </div>
          </a>
        </div>
  
        <!-- Web Marketing -->
        <div class="col">
          <div class="card card-hover-primary border-0 h-100 text-decoration-none" href="#">
            <div class="card-body pb-0">
              <img src="/theme/around/assets/img/icons/marketing/web-marketing.png" width="45" alt="Icon" class="mb-3">
              <h3 class="h4 card-title">Web Marketing</h3>
              <p class="card-text">Enhance your website's visibility with our comprehensive SEO solutions. Reach the audience you need to make maximum profit!</p>
            </div>
            <div class="card-footer border-0 py-3 my-3 mb-sm-4">
              <div class="btn btn-lg btn-icon btn-outline-primary rounded-circle pe-none">
                <i class="ai-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  
      <!-- Build Trust: Client Testimonial Carousel -->
      <section class="container pt-5 mt-md-3 mt-lg-2 mt-xl-4 mt-xxl-5">
        <h2 class="h1 text-center pt-3 pt-sm-4 pt-lg-5 pb-3 mb-3 mb-lg-4">Real Testimonials & Real Growth</h2>
        <div class="pb-4">
          <div class="swiper swiper-initialized swiper-horizontal swiper-backface-hidden" data-swiper-options="
            {
              "spaceBetween": 30,
              "loop": true,
              "navigation": {
                "prevEl": "#prev-testimonial",
                "nextEl": "#next-testimonial"
              }
            }
          ">
            <div class="swiper-wrapper" id="swiper-wrapper-8e34742bf7c69f58" aria-live="polite">
  
              <!-- Item -->
              <div class="swiper-slide swiper-slide-active" role="group" aria-label="1 / 3" data-swiper-slide-index="0" style="width: 512px; margin-right: 30px;">
                <p class="lead text-dark pb-3 mb-3">"Paykhom provides us with the detailed and accurate data we need to make strategic decisions. All tools are constantly being improved and contain a lot of useful and interesting information. Thanks to Around, we can constantly analyze data quickly, efficiently."</p>
                <div class="d-flex align-items-center">
                  <img class="rounded-circle" src="/theme/around/assets/img/avatar/30.jpg" width="60" alt="Jenny Wilson">
                  <div class="ps-3">
                    <h3 class="h4 mb-0">Jenny Wilson</h3>
                    <div class="fs-lg text-body-secondary">Head of Marketing</div>
                  </div>
                </div>
              </div>
  
              <!-- Item -->
              <div class="swiper-slide swiper-slide-next" role="group" aria-label="2 / 3" data-swiper-slide-index="1" style="width: 512px; margin-right: 30px;">
                <p class="lead text-dark pb-3 mb-3">"Turpis augue pulvinar est adipiscing netus. Arcu at aliquet venenatis elementum. Mi at gravida id nullam imperdiet a proin dolor. Egestas facilisis venenatis quisque viverra donec et. Augue convallis eu a volutpat sed ullamcorper. At dictumst sapien, tristique vitae nec massa."</p>
                <div class="d-flex align-items-center">
                  <img class="rounded-circle" src="/theme/around/assets/img/avatar/31.jpg" width="60" alt="Esther Howard">
                  <div class="ps-3">
                    <h3 class="h4 mb-0">Esther Howard</h3>
                    <div class="fs-lg text-body-secondary">CEO, Co-Founder</div>
                  </div>
                </div>
              </div>
  
              <!-- Item -->
              <div class="swiper-slide" role="group" aria-label="3 / 3" data-swiper-slide-index="2" style="width: 512px; margin-right: 30px;">
                <p class="lead text-dark pb-3 mb-3">"Cursus fames sollicitudin nunc eget sceler tortor. Sem amet, velit posuere ipsum id. Mi feugiat at vulputate vel pellentesque proin viverra. Massa, tellus orci, aenean nulla leo maecenas sed. Magna at aliquam dictum velit dolor phasellus donec et mi. Aenean adipiscing amet mauris."</p>
                <div class="d-flex align-items-center">
                  <img class="rounded-circle" src="/theme/around/assets/img/avatar/32.jpg" width="60" alt="Nick Wenirten">
                  <div class="ps-3">
                    <h3 class="h4 mb-0">Nick Wenirten</h3>
                    <div class="fs-lg text-body-secondary">Web Developer</div>
                  </div>
                </div>
              </div>
            </div>
          <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
  
          <!-- Slider control buttons (Preev / Next) -->
          <div class="d-flex justify-content-center justify-content-md-end pt-4">
            <button class="btn btn-icon btn-sm btn-outline-primary rounded-circle me-3" type="button" id="prev-testimonial" aria-label="Previous slide" tabindex="0" aria-controls="swiper-wrapper-8e34742bf7c69f58">
              <i class="ai-arrow-left"></i>
            </button>
            <button class="btn btn-icon btn-sm btn-outline-primary rounded-circle" type="button" id="next-testimonial" aria-label="Next slide" tabindex="0" aria-controls="swiper-wrapper-8e34742bf7c69f58">
              <i class="ai-arrow-right"></i>
            </button>
          </div>
        </div>
      </section>
  
  
      <!--  The Action Section -->
      <section class="bg-primary pb-2 pt-md-0">
          <div class="container py-5">
            <div class="row align-items-center">
  
              <!-- Text + images side -->
              <div class="col-lg-6 order-md-1">
                <h2 class="display-4 text-light mb-4">Take Control of Your Marketing Future.</h2>
                <p class="text-light fs-xl pb-3 mb-4">Use Paykhom's revenue solutions to make the money you want.</p>
              </div>
  
              <!-- Buttons side -->
              <div class="col-lg-5 col-md-6 order-md-2 text-md-end">
                <a href="/pricing" class="btn btn-lg btn-warning shadow-warning me-3 mt-1">Explore
                  Pricing</a>
                <a href="/contact/sales" class="btn btn-lg btn-outline-light mt-1">Contact Sales</a>
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