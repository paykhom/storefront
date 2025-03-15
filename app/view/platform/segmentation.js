import MarketplaceLayout from '../marketplace-layout'; // Adjust path as needed
//import { Page } from 'paykhom-fw/container/view';

export default class  Segmentation extends MarketplaceLayout {
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
      

      <!-- Hero section -->
      <section class="position-relative bg-dark pt-lg-4 pt-xl-5">
        <div class="jarallax position-absolute top-0 start-0 w-100 h-100" data-jarallax="" data-speed="0.4">
          <div id="jarallax-container-0" class="jarallax-container" style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; overflow: hidden; z-index: -100; clip-path: polygon(0px 0px, 100% 0px, 100% 100%, 0px 100%);"><div class="jarallax-img" style="background-image: url("/theme/around/assets/img/landing/saas-4/hero-bg-pattern.png"); object-fit: cover; object-position: 50% 50%; max-width: none; position: fixed; top: 0px; left: 0px; width: 1821.61px; height: 724.672px; overflow: hidden; pointer-events: none; transform-style: preserve-3d; backface-visibility: hidden; margin-top: -88.8358px; transform: translate3d(0px, 88.8358px, 0px);" data-jarallax-original-styles="background-image: url(assets/img/landing/saas-4/hero-bg-pattern.png);"></div></div></div>
        <div class="container position-relative z-2 pt-2 pt-sm-4 pt-md-5">
          <div class="row justify-content-center pt-5">
            <div class="col-lg-9 col-xl-8 text-center pt-5 mt-1">
              <a href="#" class="d-inline-flex align-items-center fs-sm fw-semibold text-decoration-none bg-warning bg-opacity-10 text-warning rounded-pill py-2 px-3">
                <span class="fw-semibold lh-sm">Know your Audience</span>
                <i class="ai-arrow-right fs-lg ms-2 me-n1"></i>
              </a>
              <h1 class="display-4 text-white pt-3 mt-3 mb-4">Unlock Growth with Audience Segmentation</h1>
              <p class="text-white opacity-70 fs-xl">Target the right customers, personalize your messaging, and maximize your ROI with our powerful segmentation tools.</p>
            </div>
          </div>
        </div>
        <div class="d-none d-lg-block" style="height: 480px;"></div>
        <div class="d-lg-none" style="height: 400px;"></div>
        <div class="d-flex position-absolute bottom-0 start-0 w-100 overflow-hidden mb-n1" style="color: var(--ar-body-bg);">
          <div class="position-relative start-50 translate-middle-x flex-shrink-0" style="width: 3774px;">
            <img src="data:image/svg+xml,%3Csvg width='3774' height='201' viewBox='0 0 3774 201' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 200.003C0 200.003 1137.52 0.188224 1873.5 0.000134392C2614.84 -0.189325 3774 200.003 3774 200.003H0Z' fill='%23fff'/%3E%3C/svg%3E" alt="decorative element" />
          </div>
        </div>
      </section>


      <!-- Categories (Slider) - Segmentation Benefits -->
      <section class="container position-relative z-3">
        <div class="d-none d-lg-block" style="margin-top: -428px;"></div>
        <div class=" d-lg-none" style="margin-top: -370px;"></div>
        <div class="swiper swiper-initialized swiper-horizontal swiper-backface-hidden" data-swiper-options="{
          "slidesPerView": 1,
          "spaceBetween": 24,
          "pagination": {
            "el": ".swiper-pagination",
            "clickable": true
          },
          "breakpoints": {
            "560": {
              "slidesPerView": 2
            },
            "960": {
              "slidesPerView": 3
            }
          }
        }">
          <div class="swiper-wrapper" id="swiper-wrapper-b166b461066d517f5" aria-live="polite">

            <!-- Item -->
            <div class="swiper-slide swiper-slide-active" role="group" aria-label="1 / 5" style="width: 416px; margin-right: 24px;">
              <a href="#" class="card card-hover zoom-effect border-0 rounded-5 overflow-hidden">
                <span class="position-absolute top-0 start-0 w-100 h-100 z-1" style="background: linear-gradient(180deg, rgba(18, 21, 25, 0.00) 35.56%, #121519 95.3%);"></span>
                <div class="position-absolute bottom-0 w-100 z-2 p-4">
                  <div class="px-md-3">
                    <h3 class="h4 text-white mb-0">Targeted Marketing</h3>
                    <div class="d-flex align-items-center justify-content-between opacity-0">
                      <span class="text-white fs-xs text-truncate opacity-70 pe-3">Deliver personalized campaigns that resonate.</span>
                      <i class="ai-circle-arrow-right fs-3 text-primary"></i>
                    </div>
                  </div>
                </div>
                <div class="zoom-effect-wrapper">
                  <div class="zoom-effect-img">
                    <img src="/theme/around/assets/img/landing/saas-4/categories/marketing.jpg" alt="Targeted Marketing">
                  </div>
                </div>
              </a>
            </div>

            <!-- Item -->
            <div class="swiper-slide swiper-slide-next" role="group" aria-label="2 / 5" style="width: 416px; margin-right: 24px;">
              <a href="#" class="card card-hover zoom-effect border-0 rounded-5 overflow-hidden">
                <span class="position-absolute top-0 start-0 w-100 h-100 z-1" style="background: linear-gradient(180deg, rgba(18, 21, 25, 0.00) 35.56%, #121519 95.3%);"></span>
                <div class="position-absolute bottom-0 w-100 z-2 p-4">
                  <div class="px-md-3">
                    <h3 class="h4 text-white mb-0">Increased Conversions</h3>
                    <div class="d-flex align-items-center justify-content-between opacity-0">
                      <span class="text-white fs-xs text-truncate opacity-70 pe-3">Improve conversion rates by focusing on the right audience.</span>
                      <i class="ai-circle-arrow-right fs-3 text-primary"></i>
                    </div>
                  </div>
                </div>
                <div class="zoom-effect-wrapper">
                  <div class="zoom-effect-img">
                    <img src="/theme/around/assets/img/landing/saas-4/categories/ecommerce.jpg" alt="Increased Conversions">
                  </div>
                </div>
              </a>
            </div>

            <!-- Item -->
            <div class="swiper-slide" role="group" aria-label="3 / 5" style="width: 416px; margin-right: 24px;">
              <a href="#" class="card card-hover zoom-effect border-0 rounded-5 overflow-hidden">
                <span class="position-absolute top-0 start-0 w-100 h-100 z-1" style="background: linear-gradient(180deg, rgba(18, 21, 25, 0.00) 35.56%, #121519 95.3%);"></span>
                <div class="position-absolute bottom-0 w-100 z-2 p-4">
                  <div class="px-md-3">
                    <h3 class="h4 text-white mb-0">Personalized Experiences</h3>
                    <div class="d-flex align-items-center justify-content-between opacity-0">
                      <span class="text-white fs-xs text-truncate opacity-70 pe-3">Create custom payment flows and offers.</span>
                      <i class="ai-circle-arrow-right fs-3 text-primary"></i>
                    </div>
                  </div>
                </div>
                <div class="zoom-effect-wrapper">
                  <div class="zoom-effect-img">
                    <img src="/theme/around/assets/img/landing/saas-4/categories/transportation.jpg" alt="Personalized Experiences">
                  </div>
                </div>
              </a>
            </div>

            <!-- Item -->
            <div class="swiper-slide" role="group" aria-label="4 / 5" style="width: 416px; margin-right: 24px;">
              <a href="#" class="card card-hover zoom-effect border-0 rounded-5 overflow-hidden">
                <span class="position-absolute top-0 start-0 w-100 h-100 z-1" style="background: linear-gradient(180deg, rgba(18, 21, 25, 0.00) 35.56%, #121519 95.3%);"></span>
                <div class="position-absolute bottom-0 w-100 z-2 p-4">
                  <div class="px-md-3">
                    <h3 class="h4 text-white mb-0">Reduced Churn</h3>
                    <div class="d-flex align-items-center justify-content-between opacity-0">
                      <span class="text-white fs-xs text-truncate opacity-70 pe-3">Improve customer retention by addressing specific needs.</span>
                      <i class="ai-circle-arrow-right fs-3 text-primary"></i>
                    </div>
                  </div>
                </div>
                <div class="zoom-effect-wrapper">
                  <div class="zoom-effect-img">
                    <img src="/theme/around/assets/img/landing/saas-4/categories/robotics.jpg" alt="Reduced Churn">
                  </div>
                </div>
              </a>
            </div>

            <!-- Item -->
            <div class="swiper-slide" role="group" aria-label="5 / 5" style="width: 416px; margin-right: 24px;">
              <a href="#" class="card card-hover zoom-effect border-0 rounded-5 overflow-hidden">
                <span class="position-absolute top-0 start-0 w-100 h-100 z-1" style="background: linear-gradient(180deg, rgba(18, 21, 25, 0.00) 35.56%, #121519 95.3%);"></span>
                <div class="position-absolute bottom-0 w-100 z-2 p-4">
                  <div class="px-md-3">
                    <h3 class="h4 text-white mb-0">Optimized Payment Strategies</h3>
                    <div class="d-flex align-items-center justify-content-between opacity-0">
                      <span class="text-white fs-xs text-truncate opacity-70 pe-3">Tailor payment options to your customer segments.</span>
                      <i class="ai-circle-arrow-right fs-3 text-primary"></i>
                    </div>
                  </div>
                </div>
                <div class="zoom-effect-wrapper">
                  <div class="zoom-effect-img">
                    <img src="/theme/around/assets/img/landing/saas-4/categories/programming.jpg" alt="Optimized Payment Strategies">
                  </div>
                </div>
              </a>
            </div>
          </div>

          <!-- Pagination (bullets) -->
          <div class="swiper-pagination position-relative bottom-0 pt-2 pt-md-3 mt-4 swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"><span class="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex="0" role="button" aria-label="Go to slide 1" aria-current="true"></span><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 2"></span><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 3"></span></div>
        <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
      </section>


      <!-- Use cases -->
      <section class="position-relative overflow-hidden py-5">
        <span class="position-absolute top-0 start-0 w-100 h-100 d-dark-mode-none" style="background: linear-gradient(141deg, rgba(255, 255, 255, .01) 17.3%, #f6f9fc 78.21%);"></span>
        <div class="position-absolute top-0 start-0 w-100 h-100 d-none d-dark-mode-block" style="background: linear-gradient(141deg, rgba(18, 21, 25, .00) 17.3%, rgba(255, 255, 255, .03) 78.21%);"></div>

        <div class="container position-relative z-2 pt-3 pt-md-4 pt-lg-5 mt-lg-2 mt-xl-4">
          <h2 class="h1 text-center pb-1 mb-2">Segment Your Audience for Maximum Impact</h2>
          <p class="fs-lg text-center pb-lg-2">Uncover valuable insights, improve your conversion rates, and build lasting customer relationships with our segmentation tools.</p>


          <!-- Use case - Example 1: Ecommerce - Personalized Offers -->
          <div class="row align-items-center justify-content-center py-4 py-md-5 my-1 my-sm-3 my-md-0 my-xl-3">
            <div class="col-11 col-sm-9 col-md-7 col-lg-6 offset-lg-1 order-md-2 pb-2 pb-sm-3 pb-md-0 mb-4 mb-md-0">
              <div class="parallax" style="max-width: 636px; transform: translate3d(0px, 0px, 0px) rotate(0.0001deg); transform-style: preserve-3d; backface-visibility: hidden; pointer-events: none;">
                <div class="parallax-layer" data-depth="0" style="transform: translate3d(0px, 0px, 0px); transform-style: preserve-3d; backface-visibility: hidden; position: relative; display: block; left: 0px; top: 0px;">
                  <div class="ratio" style="--ar-aspect-ratio: 89.6%"></div>
                </div>
                <div class="parallax-layer" style="padding-right: 24.2%; transform: translate3d(4.2px, -5.5px, 0px); transform-style: preserve-3d; backface-visibility: hidden; position: absolute; display: block; left: 0px; top: 0px;" data-depth="0.1">
                  <img src="/theme/around/assets/img/landing/saas-4/use-cases/data-analysis/line-chart-light.png" class="d-dark-mode-none position-relative rounded-4" style="top: 27.5%; max-width: 482px; box-shadow: 0 12px 48px -8px rgba(189, 196, 221, .35);" alt="Ecommerce - Personalized Offers">
                  <img src="/theme/around/assets/img/landing/saas-4/use-cases/data-analysis/line-chart-dark.png" class="d-none d-dark-mode-block position-relative rounded-4" style="top: 27.5%; max-width: 482px; box-shadow: 0 12px 48px -8px rgba(0, 0, 0, .25);" alt="Ecommerce - Personalized Offers">
                </div>
                <div class="parallax-layer" style="padding-left: 45.75%; transform: translate3d(-5px, 6.6px, 0px); transform-style: preserve-3d; backface-visibility: hidden; position: absolute; display: block; left: 0px; top: 0px;" data-depth="-0.12">
                  <img src="/theme/around/assets/img/landing/saas-4/use-cases/data-analysis/bar-chart-light.png" class="d-dark-mode-none position-relative rounded-4" style="max-width: 345px; box-shadow: 0 0 48px -4px rgba(189, 196, 221, .35);" alt="Ecommerce - Personalized Offers">
                  <img src="/theme/around/assets/img/landing/saas-4/use-cases/data-analysis/bar-chart-dark.png" class="d-none d-dark-mode-block position-relative rounded-4" style="max-width: 345px; box-shadow: 0 12px 48px -8px rgba(0, 0, 0, .35);" alt="Ecommerce - Personalized Offers">
                </div>
                <div class="parallax-layer" style="padding-right: 7.547%; padding-left: 44.97%; transform: translate3d(12.6px, -16.6px, 0px); transform-style: preserve-3d; backface-visibility: hidden; position: absolute; display: block; left: 0px; top: 0px;" data-depth="0.3">
                  <img src="/theme/around/assets/img/landing/saas-4/use-cases/data-analysis/donut-chart-light.png" class="d-dark-mode-none position-relative rounded-4" style="top: 60.75%; max-width: 302px; box-shadow: 0 0 48px -4px rgba(189, 196, 221, .35);" alt="Ecommerce - Personalized Offers">
                  <img src="/theme/around/assets/img/landing/saas-4/use-cases/data-analysis/donut-chart-dark.png" class="d-none d-dark-mode-block position-relative rounded-4" style="top: 60.75%; max-width: 302px; box-shadow: 0 -12px 48px -8px rgba(0, 0, 0, .35);" alt="Ecommerce - Personalized Offers">
                </div>
              </div>
            </div>
            <div class="col-md-5 col-xl-4 offset-xl-1 order-md-1 text-center text-md-start">
              <h3 class="h2 mb-lg-4">E-commerce: Boost Sales with Personalized Offers</h3>
              <p class="fs-lg pb-lg-2 mb-4">Segment your customers based on purchase history, browsing behavior, and demographics to deliver targeted promotions and product recommendations. Increase your sales by up to 20%.</p>
              <a href="#" class="btn btn-outline-primary rounded-pill">
                Learn more
                <i class="ai-arrow-right fs-lg ms-2 me-n1"></i>
              </a>
            </div>
          </div>


          <!-- Use case - Example 2: Subscription Services - Reduce Churn -->
          <div class="row align-items-center justify-content-center justify-content-md-start py-4 py-md-5 my-2 my-sm-3 my-md-0 my-xl-3">
            <div class="col-11 col-sm-9 col-md-7 col-lg-6 pb-2 pb-sm-3 pb-md-0 mb-4 mb-md-0">
              <div class="parallax" style="max-width: 636px; transform: translate3d(0px, 0px, 0px) rotate(0.0001deg); transform-style: preserve-3d; backface-visibility: hidden; pointer-events: none;">
                <div class="parallax-layer" data-depth="0.05" style="transform: translate3d(2.1px, -2.8px, 0px); transform-style: preserve-3d; backface-visibility: hidden; position: relative; display: block; left: 0px; top: 0px;">
                  <img src="/theme/around/assets/img/landing/saas-4/use-cases/task-automation/circle-1.png" alt="Subscription Services - Reduce Churn">
                </div>
                <div class="parallax-layer" data-depth="0.1" style="transform: translate3d(4.2px, -5.6px, 0px); transform-style: preserve-3d; backface-visibility: hidden; position: absolute; display: block; left: 0px; top: 0px;">
                  <img src="/theme/around/assets/img/landing/saas-4/use-cases/task-automation/circle-2.png" alt="Subscription Services - Reduce Churn">
                </div>
                <div class="parallax-layer" data-depth="0.15" style="transform: translate3d(6.3px, -8.4px, 0px); transform-style: preserve-3d; backface-visibility: hidden; position: absolute; display: block; left: 0px; top: 0px;">
                  <img src="/theme/around/assets/img/landing/saas-4/use-cases/task-automation/circle-3.png" alt="Subscription Services - Reduce Churn">
                </div>
                <div class="parallax-layer" data-depth="0.2" style="transform: translate3d(8.4px, -11.2px, 0px); transform-style: preserve-3d; backface-visibility: hidden; position: absolute; display: block; left: 0px; top: 0px;">
                  <div class="position-absolute top-50 start-50 translate-middle bg-primary rounded-circle p-4">
                    <div class="h1 text-white lh-1 p-sm-1 p-lg-3 m-1">AI</div>
                  </div>
                </div>
                <div class="parallax-layer" style="padding-right: 28.7%; padding-left: 57%; transform: translate3d(12.6px, -16.8px, 0px); transform-style: preserve-3d; backface-visibility: hidden; position: absolute; display: block; left: 0px; top: 0px;" data-depth="0.3">
                  <div class="position-relative">
                    <div class="ratio ratio-1x1"></div>
                    <span class="position-absolute top-0 start-0 w-100 h-100 bg-white rounded-circle d-dark-mode-none" style="box-shadow: 0 12px 48px -8px rgba(189, 196, 221, .35);"></span>
                    <span class="position-absolute top-0 start-0 w-100 h-100 rounded-circle d-none d-dark-mode-block" style="background-color: #1c2126;"></span>
                    <svg class="position-absolute top-0 start-0 z-2 text-dark" viewBox="0 0 92 91" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M46.4935 24.9077C34.8988 24.9077 25.4961 34.3472 25.4961 45.9917C25.4961 55.3052 31.5126 63.2065 39.8601 65.9968C40.9101 66.1911 41.2933 65.5401 41.2933 64.981C41.2933 64.4796 41.275 63.154 41.2645 61.3952C35.4238 62.6683 34.1901 58.5681 34.1901 58.5681C33.2372 56.1321 31.8591 55.4837 31.8591 55.4837C29.9507 54.1765 32.0008 54.2027 32.0008 54.2027C34.1087 54.3523 35.2165 56.3762 35.2165 56.3762C37.0907 59.5971 40.1331 58.6678 41.3301 58.1271C41.5191 56.7647 42.0625 55.8355 42.6636 55.3078C38.0016 54.775 33.0981 52.9663 33.0981 44.8892C33.0981 42.5871 33.9171 40.705 35.2611 39.2297C35.0432 38.6968 34.324 36.5522 35.4658 33.6516C35.4658 33.6516 37.2298 33.0846 41.2408 35.812C42.9156 35.3447 44.7111 35.1111 46.4987 35.1032C48.2811 35.1137 50.0792 35.3447 51.7566 35.8146C55.765 33.0872 57.5263 33.6542 57.5263 33.6542C58.6708 36.5575 57.9516 38.6995 57.7363 39.2323C59.083 40.7076 59.8941 42.5897 59.8941 44.8918C59.8941 52.99 54.9853 54.7723 50.3076 55.2947C51.061 55.9457 51.733 57.232 51.733 59.1981C51.733 62.0173 51.7067 64.2906 51.7067 64.981C51.7067 65.5453 52.0847 66.2016 53.1505 65.9942C61.4848 63.2012 67.4961 55.3026 67.4961 45.9917C67.4961 34.3472 58.0933 24.9077 46.4935 24.9077Z"></path></svg>
                  </div>
                </div>
            <div class="parallax-layer" style="padding-right: 60%; padding-left: 27.6%; transform: translate3d(18.9px, -25.3px, 0px); transform-style: preserve-3d; backface-visibility: hidden; position: absolute; display: block; left: 0px; top: 0px;" data-depth="0.45">
                  <div class="position-relative" style="top: 13.3%;">
                    <div class="ratio ratio-1x1"></div>
                    <span class="position-absolute top-0 start-0 w-100 h-100 bg-white rounded-circle d-dark-mode-none" style="box-shadow: 0 12px 48px -8px rgba(189, 196, 221, .35);"></span>
                    <span class="position-absolute top-0 start-0 w-100 h-100 rounded-circle d-none d-dark-mode-block" style="background-color: #1c2126;"></span>
                    <svg class="position-absolute top-0 start-0 z-2" viewBox="0 0 72 71" xmlns="http://www.w3.org/2000/svg" fill="#0061ff"><path d="M35.8477 27.045L27.8477 32.1402L35.8477 37.2356L27.8477 42.3308L19.8477 37.2356L27.8477 32.1402L19.8477 27.045L27.8477 21.9498L35.8477 27.045Z"></path><path d="M27.8237 44.0212L35.8237 38.926L43.8237 44.0212L35.8237 49.1164L27.8237 44.0212Z"></path><path d="M35.8477 37.2356L43.8477 32.1402L35.8477 27.045L43.8477 21.9498L51.8477 27.045L43.8477 32.1402L51.8477 37.2356L43.8477 42.3308L35.8477 37.2356Z"></path></svg>
                  </div>
                </div>
                <div class="parallax-layer" style="padding-right: 73.3%; padding-left: 11.1%; transform: translate3d(10.5px, -14px, 0px); transform-style: preserve-3d; backface-visibility: hidden; position: absolute; display: block; left: 0px; top: 0px;" data-depth="0.25">
                  <div class="position-relative" style="top: 30.7%;">
                    <div class="ratio ratio-1x1"></div>
                    <span class="position-absolute top-0 start-0 w-100 h-100 bg-white rounded-circle d-dark-mode-none" style="box-shadow: 0 12px 48px -8px rgba(189, 196, 221, .35);"></span>
                    <span class="position-absolute top-0 start-0 w-100 h-100 rounded-circle d-none d-dark-mode-block" style="background-color: #1c2126;"></span>
                    <svg class="position-absolute top-0 start-0 z-2" viewBox="0 0 102 102" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M33.1883 66.9909H39.8702V50.7636L35.4948 43.1234L30.3247 43.6045V64.1273C30.3247 65.7094 31.6062 66.9909 33.1883 66.9909Z" fill="#0085f7"></path><path d="M62.7793 66.9909H69.4612C71.0433 66.9909 72.3248 65.7094 72.3248 64.1273V43.6045L67.1621 43.1234L62.7794 50.7636V66.9909H62.7793Z" fill="#00a94b"></path><path d="M62.7794 38.3545L58.8545 45.8442L62.7794 50.7636L72.3249 43.6045V39.7863C72.3249 36.2473 68.2848 34.2261 65.4522 36.35L62.7794 38.3545Z" fill="#ffbc00"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M39.8704 50.7636L36.1304 42.8632L39.8704 38.3545L51.3249 46.9454L62.7795 38.3545V50.7636L51.3249 59.3545L39.8704 50.7636Z" fill="#ff4131"></path><path d="M30.3247 39.7863V43.6045L39.8702 50.7636V38.3545L37.1974 36.35C34.3648 34.2261 30.3247 36.2473 30.3247 39.7863Z" fill="#e51c19"></path></svg>
                  </div>
                </div>
                <div class="parallax-layer" style="padding-right: 68.2%; padding-left: 21%; transform: translate3d(16.8px, -22.5px, 0px); transform-style: preserve-3d; backface-visibility: hidden; position: absolute; display: block; left: 0px; top: 0px;" data-depth="0.4">
                  <div class="position-relative" style="top: 52.9%;">
                    <div class="ratio ratio-1x1"></div>
                    <span class="position-absolute top-0 start-0 w-100 h-100 bg-white rounded-circle d-dark-mode-none" style="box-shadow: 0 12px 48px -8px rgba(189, 196, 221, .4);"></span>
                    <span class="position-absolute top-0 start-0 w-100 h-100 rounded-circle d-none d-dark-mode-block" style="background-color: #1c2126;"></span>
                    <svg class="position-absolute top-0 start-0 z-2" viewBox="0 0 72 71" xmlns="http://www.w3.org/2000/svg" fill="#0061ff"><path d="M35.8477 27.045L27.8477 32.1402L35.8477 37.2356L27.8477 42.3308L19.8477 37.2356L27.8477 32.1402L19.8477 27.045L27.8477 21.9498L35.8477 27.045Z"></path><path d="M27.8237 44.0212L35.8237 38.926L43.8237 44.0212L35.8237 49.1164L27.8237 44.0212Z"></path><path d="M35.8477 37.2356L43.8477 32.1402L35.8477 27.045L43.8477 21.9498L51.8477 27.045L43.8477 32.1402L51.8477 37.2356L43.8477 42.3308L35.8477 37.2356Z"></path></svg>
                  </div>
                </div>
                <div class="parallax-layer" style="padding-right: 16%; padding-left: 71.4%; transform: translate3d(12.6px, -16.8px, 0px); transform-style: preserve-3d; backface-visibility: hidden; position: absolute; display: block; left: 0px; top: 0px;" data-depth="0.3">
                  <div class="position-relative" style="top: 67.6%;">
                    <div class="ratio ratio-1x1"></div>
                    <span class="position-absolute top-0 start-0 w-100 h-100 bg-white rounded-circle d-dark-mode-none" style="box-shadow: 0 12px 48px -8px rgba(189, 196, 221, .35);"></span>
                    <span class="position-absolute top-0 start-0 w-100 h-100 rounded-circle d-none d-dark-mode-block" style="background-color: #1c2126;"></span>
                    <svg class="position-absolute top-0 start-0 z-2" viewBox="0 0 82 81" fill="#5865f2" xmlns="http://www.w3.org/2000/svg"><path d="M55.3042 27.7464C52.7547 26.5766 50.0208 25.7147 47.1623 25.2211C47.1103 25.2115 47.0582 25.2354 47.0314 25.2829C46.6798 25.9083 46.2903 26.7241 46.0176 27.3654C42.9431 26.905 39.8844 26.905 36.873 27.3654C36.6002 26.7099 36.1966 25.9083 35.8434 25.2829C35.8166 25.2369 35.7645 25.2131 35.7125 25.2211C32.8556 25.7131 30.1217 26.575 27.5706 27.7464C27.5485 27.7559 27.5296 27.7718 27.5171 27.7924C22.3314 35.5397 20.9108 43.0965 21.6077 50.5597C21.6108 50.5961 21.6313 50.6311 21.6597 50.6533C25.081 53.1659 28.3953 54.6912 31.6478 55.7023C31.6999 55.7182 31.755 55.6992 31.7881 55.6563C32.5575 54.6056 33.2434 53.4977 33.8314 52.3326C33.8661 52.2644 33.833 52.1834 33.762 52.1565C32.6742 51.7438 31.6383 51.2406 30.6418 50.6693C30.563 50.6233 30.5567 50.5105 30.6292 50.4565C30.8389 50.2994 31.0487 50.1359 31.2489 49.9708C31.2852 49.9407 31.3356 49.9343 31.3782 49.9533C37.9245 52.9422 45.0116 52.9422 51.4806 49.9533C51.5231 49.9327 51.5736 49.9391 51.6114 49.9692C51.8117 50.1343 52.0214 50.2993 52.2327 50.4565C52.3052 50.5104 52.3004 50.6232 52.2217 50.6692C51.2252 51.2517 50.1893 51.7437 49.0999 52.1548C49.0289 52.1818 48.9974 52.2643 49.0321 52.3325C49.6328 53.496 50.3187 54.6039 51.0738 55.6547C51.1054 55.6991 51.1621 55.7182 51.2142 55.7022C54.4825 54.6912 57.7967 53.1658 61.2181 50.6532C61.2481 50.6311 61.267 50.5977 61.2701 50.5612C62.1042 41.933 59.8731 34.4381 55.356 27.794C55.3451 27.7718 55.3262 27.7559 55.3042 27.7464ZM34.8092 46.0154C32.8383 46.0154 31.2143 44.206 31.2143 41.9838C31.2143 39.7617 32.8067 37.9522 34.8092 37.9522C36.8272 37.9522 38.4355 39.7775 38.4039 41.9838C38.4039 44.206 36.8114 46.0154 34.8092 46.0154ZM48.1003 46.0154C46.1296 46.0154 44.5056 44.206 44.5056 41.9838C44.5056 39.7617 46.098 37.9522 48.1003 37.9522C50.1185 37.9522 51.7267 39.7775 51.6952 41.9838C51.6952 44.206 50.1185 46.0154 48.1003 46.0154Z"></path></svg>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-5 col-xl-4 offset-lg-1 text-center text-md-start">
              <h3 class="h2 mb-lg-4">Automated Chatbots and Customer Support</h3>
              <p class="fs-lg pb-lg-2 mb-4">Improve customer satisfaction and reduce support costs. Segment your customers and tailor chatbot interactions for specific needs and issues.</p>
              <a href="#" class="btn btn-outline-primary rounded-pill">
                Learn more
                <i class="ai-arrow-right fs-lg ms-2 me-n1"></i>
              </a>
            </div>
          </div>


          <!-- More button -->
          <div class="d-flex flex-column flex-sm-row align-items-center justify-content-center gap-3 gap-sm-4 pt-4 pb-3 py-md-5 my-1 my-sm-3 my-md-0 mt-xl-3 mb-xl-4">
            <div class="fs-xl">And many more use cases...</div>
            <a href="#" class="btn btn-lg btn-outline-primary rounded-pill">Explore all use cases</a>
          </div>
        </div>
      </section>


      <!-- Pricing / Comparison -->
      <section class="position-relative bg-dark pt-2 pt-lg-4 pt-xl-5" style="background: linear-gradient(90deg, #121519 0%, #191C20 51.04%, #121519 100%);
      ">
        <div class="jarallax position-absolute top-0 start-0 w-100 h-100" data-jarallax="" data-speed="0.4">
          <div id="jarallax-container-1" class="jarallax-container" style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; overflow: hidden; z-index: -100; clip-path: polygon(0px 0px, 100% 0px, 100% 100%, 0px 100%);"><div class="jarallax-img" style="background-image: url("/theme/around/assets/img/landing/saas-4/pricing-bg-pattern.png"); object-fit: cover; object-position: 50% 50%; max-width: none; position: fixed; top: 0px; left: 0px; width: 1821.61px; height: 791.597px; overflow: hidden; pointer-events: none; transform-style: preserve-3d; backface-visibility: hidden; margin-top: -122.299px; transform: translate3d(0px, 2854.45px, 0px);" data-jarallax-original-styles="background-image: url(assets/img/landing/saas-4/pricing-bg-pattern.png);"></div></div></div>
        <div class="container position-relative z-2 pt-5" data-bs-theme="dark">
          <h2 class="h1 text-center pt-2 pt-sm-3 pb-4 pb-md-5 mb-2 mb-md-0 mb-lg-2">Around vs Custom development</h2>

          <!-- Table visible on screens > 768px -->
          <div class="position-relative ms-n4 ms-md-0 d-none d-md-block">

            <div class="position-absolute top-0 start-50 translate-middle-x h-100 bg-secondary rounded-3 rounded-bottom-0 d-none d-lg-block" style="width: 342px;"></div>
            <div class="position-absolute top-0 start-50 translate-middle-x h-100 bg-secondary rounded-3 rounded-bottom-0 d-lg-none" style="width: 300px;"></div>

            <!-- Row -->
            <div class="row row-cols-3 align-items-center position-relative z-2 g-0">
              <div class="col"> </div>
              <div class="col py-2 py-md-3">
                <div class="text-center py-4 mx-auto" style="width: 264px;">
                  <h3 class="h4 mb-sm-4">Around</h3>
                  <a href="#" class="btn btn-primary w-100 rounded-pill mb-2">Get started - Free</a>
                  <p class="text-body fs-xs mb-0">Our pricing starts at as low as $1,299 per team</p>
                </div>
              </div>
              <div class="col text-center pe-lg-5">
                <h3 class="h4 pt-3 pt-md-4 mb-0 mx-auto" style="width: 264px;">Building In-House</h3>
              </div>
              <div class="position-relative w-100 opacity-40">
                <span class="position-absolute top-0 start-0 w-100" style="height: 1px; background: linear-gradient(270deg, #121519 0%, rgba(11, 15, 25, 0) 54.17%, #121519 98.44%);"></span>
                <span class="d-block w-100 bg-primary" style="height: 1px;"></span>
              </div>
            </div>

            <!-- Row -->
            <div class="row row-cols-3 align-items-center position-relative z-2 g-0">
              <div class="col py-3 py-md-4 ps-lg-5">
                <div class="text-white opacity-80 fs-lg py-1 px-4 mx-auto" style="width: 208px;">Data Models Infrastructure Cost</div>
              </div>
              <div class="col py-3 py-md-4">
                <div class="text-center py-1 px-4 mx-auto" style="width: 264px;">
                  <div class="text-white fs-lg fw-semibold">Included</div>
                  <div class="text-body fs-xs">Cloud hosted AI/ML capacities</div>
                </div>
              </div>
              <div class="col py-3 py-md-4 pe-lg-5">
                <div class="text-center py-1 px-4 mx-auto" style="width: 264px;">
                  <div class="text-white fs-lg fw-semibold">From $10k to $50k</div>
                  <div class="text-body fs-xs">per month</div>
                </div>
              </div>
              <div class="position-relative w-100 opacity-40">
                <span class="position-absolute top-0 start-0 w-100 h-1" style="height: 1px; background: linear-gradient(270deg, #121519 0%, rgba(11, 15, 25, 0) 54.17%, #121519 98.44%);"></span>
                <span class="d-block w-100 bg-primary" style="height: 1px;"></span>
              </div>
            </div>

            <!-- Row -->
            <div class="row row-cols-3 align-items-center position-relative z-2 g-0">
              <div class="col py-3 py-md-4 ps-lg-5">
                <div class="text-white opacity-80 fs-lg py-1 px-4 mx-auto" style="width: 208px;">Engineering Cost</div>
              </div>
              <div class="col py-3 py-md-4">
                <div class="text-center py-1 px-4 mx-auto" style="width: 264px;">
                  <div class="text-white fs-lg fw-semibold">Included</div>
                  <div class="text-body fs-xs">with our premium plans</div>
                </div>
              </div>
              <div class="col py-3 py-md-4 pe-lg-5">
                <div class="text-center py-1 px-4 mx-auto" style="width: 264px;">
                  <div class="text-white fs-lg fw-semibold">From $25k to $30k</div>
                  <div class="text-body fs-xs">per engineer per month</div>
                </div>
              </div>
              <div class="position-relative w-100 opacity-40">
                <span class="position-absolute top-0 start-0 w-100 h-1" style="height: 1px; background: linear-gradient(270deg, #121519 0%, rgba(11, 15, 25, 0) 54.17%, #121519 98.44%);"></span>
                <span class="d-block w-100 bg-primary" style="height: 1px;"></span>
              </div>
            </div>

            <!-- Row -->
            <div class="row row-cols-3 align-items-center position-relative z-2 g-0">
              <div class="col py-3 py-md-4 ps-lg-5">
                <div class="text-white opacity-80 fs-lg py-1 px-4 mx-auto" style="width: 208px;">Time to Implement</div>
              </div>
              <div class="col py-4">
                <div class="text-center py-1 px-4 mx-auto" style="width: 264px;">
                  <div class="text-white fs-lg fw-semibold">Get started in minutes</div>
                </div>
              </div>
              <div class="col py-3 py-md-4 pe-lg-5">
                <div class="text-center py-1 px-4 mx-auto" style="width: 264px;">
                  <div class="text-white fs-lg fw-semibold">Average 6-9 months</div>
                  <div class="text-body fs-xs">depends on team qualification</div>
                </div>
              </div>
              <div class="position-relative w-100 opacity-40">
                <span class="position-absolute top-0 start-0 w-100 h-1" style="height: 1px; background: linear-gradient(270deg, #121519 0%, rgba(11, 15, 25, 0) 54.17%, #121519 98.44%);"></span>
                <span class="d-block w-100 bg-primary" style="height: 1px;"></span>
              </div>
            </div>

            <!-- Row -->
            <div class="row row-cols-3 align-items-center position-relative z-2 g-0">
              <div class="col py-3 py-md-4 ps-lg-5">
                <div class="text-white opacity-80 fs-lg py-1 px-4 mx-auto" style="width: 208px;">Maintenance & Operational Cost</div>
              </div>
              <div class="col py-3 py-md-4">
                <div class="text-center py-1 px-4 mx-auto" style="width: 264px;">
                  <div class="text-white fs-lg fw-semibold">Included</div>
                  <div class="text-body fs-xs">with our premium plans</div>
                </div>
              </div>
              <div class="col py-3 py-md-4 pe-lg-5">
                <div class="text-center py-1 px-4 mx-auto" style="width: 264px;">
                  <div class="text-white fs-lg fw-semibold">Average $20k</div>
                  <div class="text-body fs-xs">per engineer per month</div>
                </div>
              </div>
              <div class="position-relative w-100 opacity-40">
                <span class="position-absolute top-0 start-0 w-100 h-1" style="height: 1px; background: linear-gradient(270deg, #121519 0%, rgba(11, 15, 25, 0) 54.17%, #121519 98.44%);"></span>
                <span class="d-block w-100 bg-primary" style="height: 1px;"></span>
              </div>
            </div>
          </div>

          <!-- Tbale visible on screens < 768px -->
          <table class="table table-layout-fixed d-md-none" style="--ar-table-bg: transparent;">
            <thead>
              <tr>
                <th scope="col" class="text-center">
                  <div class="h5">Around</div>
                  <a href="#" class="btn btn-sm btn-primary w-100 rounded-pill mb-2">Get started - Free</a>
                  <p class="text-body fs-xs mb-0">Our pricing starts at as low as $1,299 per team</p>
                </th>
                <th scope="col" class="align-middle text-center">
                  <div class="h5 mb-0">Building In-House</div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" colspan="2" class="bg-secondary text-white text-center">Data Models Infrastructure Cost</th>
              </tr>
              <tr>
                <td class="text-center">
                  <div class="text-white fw-semibold">Included</div>
                  <div class="text-body fs-xs">Cloud hosted AI/ML capacities</div>
                </td>
                <td class="text-center">
                  <div class="text-white fw-semibold">From $10k to $50k</div>
                  <div class="text-body fs-xs">per month</div>
                </td>
              </tr>
              <tr>
                <th scope="row" colspan="2" class="bg-secondary text-white text-center">
                  Engineering Cost
                </th>
              </tr>
              <tr>
                <td class="text-center">
                  <div class="text-white fw-semibold">Included</div>
                  <div class="text-body fs-xs">with our premium plans</div>
                </td>
                <td class="text-center">
                  <div class="text-white fw-semibold">From $25k to $30k</div>
                  <div class="text-body fs-xs">per engineer per month</div>
                </td>
              </tr>
              <tr>
                <th scope="row" colspan="2" class="bg-secondary text-white text-center">
                  Time to Implement
                </th>
              </tr>
              <tr>
                <td class="text-center">
                                    <div class="text-white fw-semibold">Get started in minutes</div>
                </td>
                <td class="text-center">
                  <div class="text-white fw-semibold">Average 6-9 months</div>
                  <div class="text-body fs-xs">depends on team qualification</div>
                </td>
              </tr>
              <tr>
                <th scope="row" colspan="2" class="bg-secondary text-white text-center">
                  Maintenance & Operational Cost
                </th>
              </tr>
              <tr>
                <td class="text-center">
                  <div class="text-white fw-semibold">Included</div>
                  <div class="text-body fs-xs">with our premium plans</div>
                </td>
                <td class="text-center">
                  <div class="text-white fw-semibold">Average $20k</div>
                  <div class="text-body fs-xs">per engineer per month</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="d-none d-md-block" style="height: 300px;"></div>
        <div class="d-md-none" style="height: 260px;"></div>
        <div class="d-flex position-absolute bottom-0 start-0 w-100 overflow-hidden mb-n1" style="color: var(--ar-body-bg);">
          <div class="position-relative start-50 translate-middle-x flex-shrink-0" style="width: 3774px;">
            <img src="data:image/svg+xml,%3Csvg width='3774' height='201' viewBox='0 0 3774 201' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 200.003C0 200.003 1137.52 0.188224 1873.5 0.000134392C2614.84 -0.189325 3774 200.003 3774 200.003H0Z' fill='%23fff'/%3E%3C/svg%3E" alt="decorative element" />
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