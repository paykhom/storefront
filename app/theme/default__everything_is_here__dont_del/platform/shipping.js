import MarketplaceLayout from '../marketplace-layout'; // Adjust path as needed
//import { Page } from 'paykhom-fw/modules/view';

export default class  Shipping extends MarketplaceLayout {
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
  <section class="container py-5 mt-5 mb-xl-3 mb-xxl-5">
    <div class="row pt-2">

      <!-- Text + CTA button -->
      <div class="col-lg-6 d-flex flex-column mb-4 mb-lg-0 pb-sm-3 pb-lg-0">
        <h1 class="display-1 text-uppercase fw-bold mt-auto mb-2">Streamline <span class="fw-normal">Your Business</span> with Powerful <span class="fw-normal">Shipping Solutions</span></h1>
        <p class="lead">Unlock seamless shipping integration with Paykhom. Manage orders, track shipments, and offer competitive rates, all within your Paykhom dashboard.</p>
        <div class="d-flex align-items-center py-4 py-lg-5">
          <a class="btn btn-lg btn-primary rounded-0 me-2 me-sm-3" href="/shipping">Explore Shipping Tools</a>
        </div>
        <ul class="nav mt-auto mx-n2 pt-sm-3 pt-lg-0">
          <li class="nav-item me-3">
            <a class="nav-link p-2" href="#">Learn about the tools</a>
          </li>
        </ul>
      </div>

      <!-- Services (Grid of cards) -->
      <div class="col-lg-6">
        <div class="row row-cols-1 row-cols-sm-2 g-1">

          <!-- Card -->
          <div class="col">
            <a class="card-flip" href="/shipping/order-management">
              <div class="card-flip-inner">
                <div class="card-flip-front" style="background-image: url(assets/img/shipping/order-management.jpg);">
                  <div class="d-flex flex-column h-100" data-bs-theme="light">
                    <h2 class="fs-lg fw-normal mb-0 mt-auto">Order Management</h2>
                  </div>
                </div>
                <div class="card-flip-back bg-secondary">
                  <div class="d-flex flex-column h-100 px-sm-2 pt-sm-2 px-lg-0 pt-lg-0 px-xl-3 pt-xl-3">
                    <h3 class="h4">Order Management</h3>
                    <p class="text-body mb-3">Centralize your orders. Import, fulfill, and track shipments directly within Paykhom, saving time and reducing errors.</p>
                    <div class="text-end pt-3 pt-sm-2 pt-xl-4 mt-auto me-sm-n2 me-lg-0 me-xl-n3">
                      <div class="btn btn-sm btn-icon btn-outline-primary rounded-circle">
                        <img src="data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.59 16.59L10 18L16 12L10 6L8.59 7.41L13.17 12L8.59 16.59Z' fill='currentColor'/%3E%3C/svg%3E" alt="Right Arrow" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <!-- Card -->
          <div class="col">
            <a class="card-flip" href="/shipping/shipping-rates">
              <div class="card-flip-inner">
                <div class="card-flip-front" style="background-image: url(assets/img/shipping/shipping-rates.jpg);">
                  <div class="d-flex flex-column h-100" data-bs-theme="light">
                    <h2 class="fs-lg fw-normal mb-0 mt-auto">Competitive Rates</h2>
                  </div>
                </div>
                <div class="card-flip-back bg-secondary">
                  <div class="d-flex flex-column h-100 px-sm-2 pt-sm-2 px-lg-0 pt-lg-0 px-xl-3 pt-xl-3">
                    <h3 class="h4">Competitive Rates</h3>
                    <ul class="text-body ps-4 mb-3">
                      <li class="mb-2">Negotiated rates from leading carriers</li>
                      <li class="mb-2">Display real-time rates at checkout</li>
                      <li class="mb-2">Reduce cart abandonment</li>
                      <li class="mb-1">Increase conversion rates</li>
                    </ul>
                    <div class="text-end pt-3 pt-sm-2 pt-xl-4 mt-auto me-sm-n2 me-lg-0 me-xl-n3">
                      <div class="btn btn-sm btn-icon btn-outline-primary rounded-circle">
                        <img src="data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.59 16.59L10 18L16 12L10 6L8.59 7.41L13.17 12L8.59 16.59Z' fill='currentColor'/%3E%3C/svg%3E" alt="Right Arrow" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <!-- Card -->
          <div class="col order-sm-2">
            <a class="card-flip" href="/shipping/tracking">
              <div class="card-flip-inner">
                <div class="card-flip-front" style="background-image: url(assets/img/shipping/tracking.jpg);">
                  <div class="d-flex flex-column h-100" data-bs-theme="light">
                    <h2 class="fs-lg fw-normal mb-0 mt-auto">Real-time Tracking</h2>
                  </div>
                </div>
                <div class="card-flip-back bg-secondary">
                  <div class="d-flex flex-column h-100 px-sm-2 pt-sm-2 px-lg-0 pt-lg-0 px-xl-3 pt-xl-3">
                    <h3 class="h4">Real-time Tracking</h3>
                    <p class="text-body mb-3">Keep your customers informed. Provide automated tracking updates and branded tracking pages for a superior customer experience.</p>
                    <div class="text-end pt-3 pt-sm-2 pt-xl-4 mt-auto me-sm-n2 me-lg-0 me-xl-n3">
                      <div class="btn btn-sm btn-icon btn-outline-primary rounded-circle">
                        <img src="data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.59 16.59L10 18L16 12L10 6L8.59 7.41L13.17 12L8.59 16.59Z' fill='currentColor'/%3E%3C/svg%3E" alt="Right Arrow" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <!-- Card -->
          <div class="col order-sm-1">
            <a class="card-flip" href="/shipping/carrier-integration">
              <div class="card-flip-inner">
                <div class="card-flip-front" style="background-image: url(assets/img/shipping/carrier-integration.jpg);">
                  <div class="d-flex flex-column h-100" data-bs-theme="light">
                    <h2 class="fs-lg fw-normal mb-0 mt-auto">Carrier Integration</h2>
                  </div>
                </div>
                <div class="card-flip-back bg-secondary">
                  <div class="d-flex flex-column h-100 px-sm-2 pt-sm-2 px-lg-0 pt-lg-0 px-xl-3 pt-xl-3">
                    <h3 class="h4">Carrier Integration</h3>
                    <ul class="text-body ps-4 mb-3">
                      <li class="mb-2">Connect with major shipping carriers</li>
                      <li class="mb-2">Automated label generation</li>
                      <li class="mb-2">Streamlined workflows</li>
                      <li class="mb-1">Reduce manual processes</li>
                    </ul>
                    <div class="text-end pt-3 pt-sm-2 pt-xl-4 mt-auto me-sm-n2 me-lg-0 me-xl-n3">
                      <div class="btn btn-sm btn-icon btn-outline-primary rounded-circle">
                        <img src="data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.59 16.59L10 18L16 12L10 6L8.59 7.41L13.17 12L8.59 16.59Z' fill='currentColor'/%3E%3C/svg%3E" alt="Right Arrow" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>


  <!-- About -->
  <section class="container py-md-4 py-lg-5 mb-xl-3 mb-xxl-5">
    <div class="row pt-sm-2">
      <div class="col-xl-10">
        <p class="fs-2 text-dark pb-md-2 mb-lg-5">From the moment an order is placed to the second it arrives at your customer's doorstep, we provide you with the tools you need to <span class="fw-semibold">create a seamless shipping experience.</span> Reduce costs, automate processes, and enhance customer satisfaction with Paykhom Shipping.</p>
      </div>
    </div>
    <div class="row pb-5">
      <div class="col-sm-4 col-lg-3 mb-3">
        <h3 class="display-1 mb-0 mb-sm-1">99%</h3>
        <span class="fs-sm">On-time Delivery Rate</span>
      </div>
      <div class="col-sm-4 col-lg-3 mb-3">
        <h3 class="display-1 mb-0 mb-sm-1">25%</h3>
        <span class="fs-sm">Average Shipping Cost Reduction</span>
      </div>
      <div class="col-sm-4 col-lg-3 mb-2 mb-sm-3">
        <h3 class="display-1 mb-0 mb-sm-1">4.8</h3>
        <span class="fs-sm">Average Customer Satisfaction Rating</span>
      </div>
    </div>
  </section>


  <!-- Our projects (Filterable masonry grid) -->
  <section class="container overflow-hidden pb-5 mb-2 mb-lg-3 mb-xl-4 mb-xxl-5">
    <div class="masonry-filterable">
      <div class="row pb-lg-4 mb-2 mb-sm-3">

        <!-- Page title -->
        <div class="col-xxl-3 col-lg-4 text-center text-lg-start">
          <h1>Shipping Integrations</h1>
          <p class="mb-4 mb-lg-0">Connect Paykhom with your favorite shipping providers to automate your workflows.</p>
        </div>

        <!-- Filters -->
        <div class="col-xxl-9 col-lg-8 d-flex">
          <ul class="masonry-filters nav nav-pills fs-sm flex-nowrap overflow-auto text-nowrap w-100 mx-auto me-lg-0 pb-3" style="max-width: 456px;">
            <li class="nav-item mb-0">
              <a class="nav-link border active" href="#" data-group="all">All</a>
            </li>
            <li class="nav-item mb-0">
              <a class="nav-link border" href="#" data-group="carriers">Carriers</a>
            </li>
            <li class="nav-item mb-0">
              <a class="nav-link border" href="#" data-group="platforms">Platforms</a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Grid of portfolio items -->
      <div class="masonry-grid shuffle" data-columns="2" style="position: relative; height: 2150.19px; transition: height 250ms cubic-bezier(0.4, 0, 0.2, 1);">

        <!-- Item -->
        <article class="masonry-grid-item pb-5 mb-md-2 mb-lg-4 mb-xl-5 shuffle-item shuffle-item--visible" data-groups="["carriers"]" style="position: absolute; top: 0px; visibility: visible; will-change: transform; left: 0px; opacity: 1; transform: translate(0px, 0px) scale(1); transition-duration: 250ms; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-property: transform, opacity;">
          <div class="zoom-effect position-relative border-bottom pb-3" style="max-width: 512px;">
            <div class="zoom-effect-wrapper">
              <div class="zoom-effect-img">
                <img src="/theme/around/assets/img/shipping/integrations/ups.jpg" alt="UPS Integration">
              </div>
            </div>
            <div class="pt-4 mt-lg-2">
              <h2 class="h4 mb-2">
                <a class="stretched-link" href="#">UPS</a>
              </h2>
              <div class="d-flex justify-content-between fs-lg text-body-secondary">
                <span>Shipping Carrier</span>
                <span>2023</span>
              </div>
            </div>
          </div>
        </article>

        <!-- Item -->
        <article class="masonry-grid-item pb-5 mb-md-2 mb-lg-4 mb-xl-5 shuffle-item shuffle-item--visible" data-groups="["platforms"]" style="position: absolute; top: 0px; visibility: visible; will-change: transform; left: 0px; opacity: 1; transform: translate(660px, 0px) scale(1); transition-duration: 250ms; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-property: transform, opacity;">
          <div class="zoom-effect position-relative border-bottom pb-3" style="max-width: 704px;">
            <div class="zoom-effect-wrapper">
              <div class="zoom-effect-img">
                <img src="/theme/around/assets/img/shipping/integrations/shopify.jpg" alt="Shopify Integration">
              </div>
            </div>
            <div class="pt-4 mt-lg-2">
              <h2 class="h4 mb-2">
                <a class="stretched-link" href="#">Shopify</a>
              </h2>
              <div class="d-flex justify-content-between fs-lg text-body-secondary">
                <span>E-commerce Platform</span>
                <span>2023</span>
              </div>
            </div>
          </div>
        </article>

        <!-- Item -->
        <article class="masonry-grid-item pb-5 mb-md-2 mb-lg-4 mb-xl-5 shuffle-item shuffle-item--visible" data-groups="["carriers"]" style="position: absolute; top: 0px; visibility: visible; will-change: transform; left: 0px; opacity: 1; transform: translate(0px, 678px) scale(1); transition-duration: 250ms; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-property: transform, opacity;">
          <div class="zoom-effect position-relative border-bottom pb-3" style="max-width: 467px;">
            <div class="zoom-effect-wrapper">
              <div class="zoom-effect-img">
                <img src="/theme/around/assets/img/shipping/integrations/fedex.jpg" alt="FedEx Integration">
              </div>
            </div>
            <div class="pt-4 mt-lg-2">
              <h2 class="h4 mb-2">
                <a class="stretched-link" href="#">FedEx</a>
              </h2>
              <div class="d-flex justify-content-between fs-lg text-body-secondary">
                <span>Shipping Carrier</span>
                <span>2023</span>
              </div>
            </div>
          </div>
        </article>

        <!-- Item -->
        <article class="masonry-grid-item pb-5 mb-md-2 mb-lg-4 mb-xl-5 shuffle-item shuffle-item--visible" data-groups="["platforms"]" style="position: absolute; top: 0px; visibility: visible; will-change: transform; left: 0px; opacity: 1; transform: translate(660px, 784px) scale(1); transition-duration: 250ms; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-property: transform, opacity;">
          <div class="zoom-effect position-relative border-bottom ms-auto pb-3" style="max-width: 605px;">
            <div class="zoom-effect-wrapper">
              <div class="zoom-effect-img">
                <img src="/theme/around/assets/img/shipping/integrations/woocommerce.jpg" alt="WooCommerce Integration">
              </div>
            </div>
            <div class="pt-4 mt-lg-2">
              <h2 class="h4 mb-2">
                <a class="stretched-link" href="#">WooCommerce</a>
              </h2>
              <div class="d-flex justify-content-between fs-lg text-body-secondary">
                <span>E-commerce Platform</span>
                <span>2023</span>
              </div>
            </div>
          </div>
        </article>

        <!-- Item -->
        <article class="masonry-grid-item pb-5 mb-md-2 mb-lg-4 mb-xl-5 shuffle-item shuffle-item--visible" data-groups="["carriers"]" style="position: absolute; top: 0px; visibility: visible; will-change: transform; left: 0px; opacity: 1; transform: translate(0px, 1365px) scale(1); transition-duration: 250ms; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-property: transform, opacity;">
          <div class="zoom-effect position-relative border-bottom pb-3" style="max-width: 550px;">
            <div class="zoom-effect-wrapper">
              <div class="zoom-effect-img">
                <img src="/theme/around/assets/img/shipping/integrations/usps.jpg" alt="USPS Integration">
              </div>
            </div>
            <div class="pt-4 mt-lg-2">
              <h2 class="h4 mb-2">
                <a class="stretched-link" href="#">USPS</a>
              </h2>
              <div class="d-flex justify-content-between fs-lg text-body-secondary">
                <span>Shipping Carrier</span>
                <span>2023</span>
              </div>
            </div>
          </div>
        </article>

        <!-- Item -->
        <article class="masonry-grid-item pb-5 mb-md-2 mb-lg-4 mb-xl-5 shuffle-item shuffle-item--visible" data-groups="["platforms"]" style="position: absolute; top: 0px; visibility: visible; will-change: transform; left: 0px; opacity: 1; transform: translate(660px, 1471px) scale(1); transition-duration: 250ms; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-property: transform, opacity;">
          <div class="zoom-effect position-relative border-bottom mx-auto pb-3" style="max-width: 470px;">
            <div class="zoom-effect-wrapper">
              <div class="zoom-effect-img">
                <img src="/theme/around/assets/img/shipping/integrations/magento.jpg" alt="Magento Integration">
              </div>
            </div>
            <div class="pt-4 mt-lg-2">
              <h2 class="h4 mb-2">
                <a class="stretched-link" href="#">Magento</a>
              </h2>
              <div class="d-flex justify-content-between fs-lg text-body-secondary">
                <span>E-commerce Platform</span>
                <span>2023</span>
              </div>
            </div>
          </div>
        </article>
      </div>

      <!-- Button -->
      <div class="text-center pb-sm-2 pb-md-4 mt-n1 mt-lg-n2">
        <a class="btn btn-lg btn-outline-dark rounded-0" href="/shipping/integrations">View All Shipping Integrations</a>
      </div>
    </div>
  </section>


  <!-- Clients (Logos autoplay slider) -->
  <section class="pt-sm-1 pt-lg-3 pt-xl-4">
    <div class="container text-center">
      <h2 class="h1">Trusted by Leading Businesses</h2>
      <p class="pb-1 pb-sm-2 pb-md-3 pb-lg-4 mb-3">Companies Relying on Paykhom for Shipping Success</p>
    </div>
    <div class="swiper pb-3 pb-sm-4 mb-xl-2 swiper-initialized swiper-horizontal swiper-free-mode swiper-backface-hidden" data-swiper-options="{
          "loop": true,
          "grabCursor": false,
          "centeredSlides": true,
          "autoplay": {
            "delay": 0,
            "disableOnInteraction": false
          },
          "freeMode": true,
          "speed": 10000,
          "freeModeMomentum": false,
          "breakpoints": {
            "0": { "slidesPerView": 2 },
            "600": { "slidesPerView": 3 },
            "800": { "slidesPerView": 4 },
            "1200": { "slidesPerView": 5 },
            "1400": { "slidesPerView": 6 },
            "1600": { "slidesPerView": 7 }
          }
        }">
      <div class="swiper-wrapper" style="transition-timing-function: linear !important; transition-duration: 10000ms; transform: translate3d(-520.571px, 0px, 0px);" id="swiper-wrapper-6528e10ae5a245be8" aria-live="off">
        <div class="swiper-slide" role="group" aria-label="8 / 9" data-swiper-slide-index="7" style="width: 260.286px;">
          <img class="d-block d-dark-mode-none mx-auto" src="/theme/around/assets/img/brands/puma-dark.svg" width="196" alt="Puma">
          <img class="d-none d-dark-mode-block mx-auto" src="/theme/around/assets/img/brands/puma-light.svg" width="196" alt="Puma">
        </div>
        <div class="swiper-slide" role="group" aria-label="9 / 9" data-swiper-slide-index="8" style="width: 260.286px;">
          <img class="d-block mx-auto" src="/theme/around/assets/img/brands/alpine.svg" width="196" alt="Alpine">
        </div>
        <div class="swiper-slide" role="group" aria-label="1 / 9" data-swiper-slide-index="0" style="width: 260.286px;">
          <img class="d-block d-dark-mode-none mx-auto" src="/theme/around/assets/img/brands/starcraft-dark.svg" width="196" alt="Starcraft">
          <img class="d-none d-dark-mode-block mx-auto" src="/theme/around/assets/img/brands/starcraft-light.svg" width="196" alt="Starcraft">
        </div>
        <div class="swiper-slide" role="group" aria-label="2 / 9" data-swiper-slide-index="1" style="width: 260.286px;">
          <img class="d-block mx-auto" src="/theme/around/assets/img/brands/auchan.svg" width="196" alt="Auchan">
        </div>
        <div class="swiper-slide swiper-slide-prev" role="group" aria-label="3 / 9" data-swiper-slide-index="2" style="width: 260.286px;">
          <img class="d-block mx-auto" src="/theme/around/assets/img/brands/klinos.svg" width="196" alt="Klinos">
        </div>
        <div class="swiper-slide swiper-slide-active" role="group" aria-label="4 / 9" data-swiper-slide-index="3" style="width: 260.286px;">
          <img class="d-block mx-auto" src="/theme/around/assets/img/brands/suzuki.svg" width="196" alt="Suzuki">
        </div>
        <div class="swiper-slide swiper-slide-next" role="group" aria-label="5 / 9" data-swiper-slide-index="4" style="width: 260.286px;">
          <img class="d-block mx-auto" src="/theme/around/assets/img/brands/airbnb.svg" width="196" alt="Airbnb">
        </div>




        <div class="swiper-slide" role="group" aria-label="6 / 9" data-swiper-slide-index="5" style="width: 260.286px;">
          <img class="d-block mx-auto" src="/theme/around/assets/img/brands/philips.svg" width="196" alt="Philips">
        </div>
        <div class="swiper-slide" role="group" aria-label="7 / 9" data-swiper-slide-index="6" style="width: 260.286px;">
          <img class="d-block mx-auto" src="/theme/around/assets/img/brands/careem.svg" width="196" alt="Careem">
        </div>
      </div>
      <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
    </div>
    <div class="swiper swiper-initialized swiper-horizontal swiper-free-mode swiper-rtl swiper-backface-hidden" dir="rtl" data-swiper-options="{
          "loop": true,
          "grabCursor": false,
          "centeredSlides": true,
          "autoplay": {
            "delay": 0,
            "disableOnInteraction": false
          },
          "freeMode": true,
          "speed": 8500,
          "freeModeMomentum": false,
          "breakpoints": {
            "0": { "slidesPerView": 2 },
            "600": { "slidesPerView": 3 },
            "800": { "slidesPerView": 4 },
            "1200": { "slidesPerView": 5 },
            "1400": { "slidesPerView": 6 },
            "1600": { "slidesPerView": 7 }
          }
        }">
      <div class="swiper-wrapper" style="transition-timing-function: linear !important; transition-duration: 8500ms; transform: translate3d(520.571px, 0px, 0px);" id="swiper-wrapper-8fc5582119270275" aria-live="off">
        <div class="swiper-slide" role="group" aria-label="8 / 9" data-swiper-slide-index="7" style="width: 260.286px;">
          <img class="d-block mx-auto" src="/theme/around/assets/img/brands/foster.svg" width="196" alt="Foster">
        </div>
        <div class="swiper-slide" role="group" aria-label="9 / 9" data-swiper-slide-index="8" style="width: 260.286px;">
          <img class="d-block d-dark-mode-none mx-auto" src="/theme/around/assets/img/brands/starcraft-dark.svg" width="196" alt="Starcraft">
          <img class="d-none d-dark-mode-block mx-auto" src="/theme/around/assets/img/brands/starcraft-light.svg" width="196" alt="Starcraft">
        </div>
        <div class="swiper-slide" role="group" aria-label="1 / 9" data-swiper-slide-index="0" style="width: 260.286px;">
          <img class="d-block mx-auto" src="/theme/around/assets/img/brands/heineken.svg" width="196" alt="Heineken">
        </div>
        <div class="swiper-slide" role="group" aria-label="2 / 9" data-swiper-slide-index="1" style="width: 260.286px;">
          <img class="d-block d-dark-mode-none mx-auto" src="/theme/around/assets/img/brands/champion-dark.svg" width="196" alt="Champion">
          <img class="d-none d-dark-mode-block mx-auto" src="/theme/around/assets/img/brands/champion-light.svg" width="196" alt="Champion">
        </div>
        <div class="swiper-slide swiper-slide-prev" role="group" aria-label="3 / 9" data-swiper-slide-index="2" style="width: 260.286px;">
          <img class="d-block mx-auto" src="/theme/around/assets/img/brands/auchan.svg" width="196" alt="Auchan">
        </div>
        <div class="swiper-slide swiper-slide-active" role="group" aria-label="4 / 9" data-swiper-slide-index="3" style="width: 260.286px;">
          <img class="d-block mx-auto" src="/theme/around/assets/img/brands/philips.svg" width="196" alt="Philips">
        </div>
        <div class="swiper-slide swiper-slide-next" role="group" aria-label="5 / 9" data-swiper-slide-index="4" style="width: 260.286px;">
          <img class="d-block mx-auto" src="/theme/around/assets/img/brands/airbnb.svg" width="196" alt="Airbnb">
        </div>




        <div class="swiper-slide" role="group" aria-label="6 / 9" data-swiper-slide-index="5" style="width: 260.286px;">
          <img class="d-block mx-auto" src="/theme/around/assets/img/brands/alpine.svg" width="196" alt="Alpine">
        </div>
        <div class="swiper-slide" role="group" aria-label="7 / 9" data-swiper-slide-index="6" style="width: 260.286px;">
          <img class="d-block d-dark-mode-none mx-auto" src="/theme/around/assets/img/brands/puma-dark.svg" width="196" alt="Puma">
          <img class="d-none d-dark-mode-block mx-auto" src="/theme/around/assets/img/brands/puma-light.svg" width="196" alt="Puma">
        </div>
      </div>
      <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
    </div>
  </section>


  <!-- Testimonials (Carousel) -->
  <section class="container position-relative z-2 py-5 mt-n3 mt-sm-0 mb-md-3 my-lg-3 my-xl-4 my-xxl-5">
    <div class="row py-md-4 py-lg-5">
      <div class="col-md-9 col-lg-7 order-md-2">

        <!-- Swiper slider -->
        <div class="swiper swiper-initialized swiper-horizontal swiper-autoheight swiper-backface-hidden" data-swiper-options="{
              "spaceBetween": 40,
              "loop": true,
              "bindedContent": true,
              "autoHeight": true,
              "pagination": {
                "el": ".testimonials-count",
                "type": "fraction"
              },
              "navigation": {
                "prevEl": "#prev-testimonial",
                "nextEl": "#next-testimonial"
              }
            }">
          








































          <div class="swiper-wrapper" id="swiper-wrapper-4c5a85c21076fdab" aria-live="polite" style="height: 287px;">

            <!-- Item -->
            <div class="swiper-slide swiper-slide-active" data-swiper-binded="#testimonial-1" role="group" aria-label="1 / 3" data-swiper-slide-index="0" style="width: 746px; margin-right: 40px;">
              <div class="d-flex d-md-none pt-3 mb-3">
                <i class="ai-quotes d-md-none text-primary display-3 mt-n2"></i>
                <div class="ps-3">
                  <h3 class="h5 mb-0">Sarah Miller</h3>
                  <p class="text-body-secondary mb-0">E-commerce Manager</p>
                </div>
              </div>
              <h2 class="mb-lg-4">Paykhom's shipping tools have transformed our order fulfillment process!</h2>
              <p class="lead mb-0">Integrating Paykhom has allowed us to automate label creation, get better rates, and track shipments with ease. Our customers are happier, and our team saves valuable time every day.</p>
            </div>

            <!-- Item -->
            <div class="swiper-slide swiper-slide-next" data-swiper-binded="#testimonial-2" role="group" aria-label="2 / 3" data-swiper-slide-index="1" style="width: 746px; margin-right: 40px;">
              <div class="d-flex d-md-none pt-3 mb-3">
<i class="ai-quotes d-md-none text-primary display-3 mt-n2"></i>
<div class="ps-3">
<h3 class="h5 mb-0">David Lee</h3>
<p class="text-body-secondary mb-0">Operations Director</p>
</div>
</div>
<h2 class="mb-lg-4">We've significantly reduced shipping costs thanks to Paykhom!</h2>
<p class="lead mb-0">The competitive shipping rates Paykhom provides have directly impacted our bottom line. We can now offer free shipping to more customers and still maintain healthy profit margins.</p>
</div>

<!-- Item -->
        <div class="swiper-slide" data-swiper-binded="#testimonial-3" role="group" aria-label="3 / 3" data-swiper-slide-index="2" style="width: 746px; margin-right: 40px;">
          <div class="d-flex d-md-none pt-3 mb-3">
            <i class="ai-quotes d-md-none text-primary display-3 mt-n2"></i>
            <div class="ps-3">
              <h3 class="h5 mb-0">Emily Chen</h3>
              <p class="text-body-secondary mb-0">CEO, E-commerce Startup</p>
            </div>
          </div>
          <h2 class="mb-lg-4">Tracking made easy for both us and our customers!</h2>
          <p class="lead mb-0">The real-time tracking features are a game-changer! Our customers love knowing exactly where their orders are, and it has greatly improved our customer satisfaction.</p>
        </div>

      </div>
      <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
    </div>
  </div>
  <div class="col-md-3 offset-lg-1 order-md-1 mt-n3">
    <i class="ai-quotes d-none d-md-block text-primary ms-n2 mb-1" style="font-size: 150px;"></i>

    <!-- Contnetn binded to slider (on screens > 768px) -->
    <div class="binded-content h-auto d-none d-md-block">
      <div class="binded-item h-auto active" id="testimonial-1">
        <h3 class="h5 mb-1">Sarah Miller</h3>
        <p class="text-body-secondary mb-0">E-commerce Manager</p>
      </div>
      <div class="binded-item h-auto" id="testimonial-2">
        <h3 class="h5 mb-1">David Lee</h3>
        <p class="text-body-secondary mb-0">Operations Director</p>
      </div>
      <div class="binded-item h-auto" id="testimonial-3">
        <h3 class="h5 mb-1">Emily Chen</h3>
        <p class="text-body-secondary mb-0">CEO, E-commerce Startup</p>
      </div>
    </div>

    <!-- Swiper controls (Prev / Next) -->
    <div class="d-flex align-items-center pb-2 pb-md-0 pt-4 mt-3">
      <button class="btn btn-icon btn-sm btn-outline-primary rounded-circle me-3" type="button" id="prev-testimonial" aria-label="Previous slide" tabindex="0" aria-controls="swiper-wrapper-4c5a85c21076fdab">
        <i class="ai-arrow-left"></i>
      </button>
      <div class="testimonials-count fw-medium flex-shrink-0 text-center swiper-pagination-fraction swiper-pagination-horizontal" style="width: 2.5rem;"><span class="swiper-pagination-current">1</span> / <span class="swiper-pagination-total">3</span></div>
      <button class="btn btn-icon btn-sm btn-outline-primary rounded-circle ms-3" type="button" id="next-testimonial" aria-label="Next slide" tabindex="0" aria-controls="swiper-wrapper-4c5a85c21076fdab">
        <i class="ai-arrow-right"></i>
      </button>
    </div>
  </div>
</div>
</section>
<!-- Team -->
<section class="container pt-2 pt-xxl-3 pb-5 mb-sm-2 mb-lg-3 mb-xl-4 mb-xxl-5">
<div class="row pb-md-3">
<div class="col-md-4 mb-2 mb-sm-3 mb-md-4 pb-2" style="margin-top: -120px;">
<div class="position-sticky top-0" style="padding-top: 120px;">
<h2 class="display-3 mb-0 mb-md-3 pb-lg-3">Ready to Ship with Paykhom?</h2>
<a class="btn btn-lg btn-link px-0" href="/shipping">
Explore our Shipping Solutions
<i class="ai-arrow-right ms-2"></i>
</a>
</div>
</div>
<div class="col-md-8">
<div class="row row-cols-1 row-cols-sm-2 g-4">
<!-- Item -->
      <div class="col">
        <div class="card-hover pb-3 mb-lg-2 mb-xl-3 me-sm-1 pe-xl-3">
          <div class="position-relative">
            <img src="/theme/around/assets/img/shipping/team/shipping-expert-1.jpg" alt="Shipping Expert">
            <div class="d-flex justify-content-center position-absolute start-0 bottom-0 w-100 px-3 mb-4 opacity-0">
              <a class="btn btn-light btn-icon btn-sm btn-linkedin rounded-circle mx-2" href="#" aria-label="LinkedIn">
                <i class="ai-linkedin"></i>
              </a>
            </div>
          </div>
          <div class="border-bottom pt-4 pb-3">
            <h3 class="h4 mb-2">Michael Brown</h3>
            <span class="fs-lg text-body-secondary">Shipping Solutions Consultant</span>
          </div>
        </div>
      </div>

      <!-- Item -->
      <div class="col">
        <div class="card-hover pb-3 mb-lg-2 mb-xl-3 ms-sm-1 ps-xl-3">
          <div class="position-relative">
            <img src="/theme/around/assets/img/shipping/team/shipping-expert-2.jpg" alt="Integration Specialist">
            <div class="d-flex justify-content-center position-absolute start-0 bottom-0 w-100 px-3 mb-4 opacity-0">
              <a class="btn btn-light btn-icon btn-sm btn-linkedin rounded-circle mx-2" href="#" aria-label="LinkedIn">
                <i class="ai-linkedin"></i>
              </a>
            </div>
          </div>
          <div class="border-bottom pt-4 pb-3">
            <h3 class="h4 mb-2">Ashley Davis</h3>
            <span class="fs-lg text-body-secondary">Shipping Integration Specialist</span>
          </div>
        </div>
      </div>

      <!-- Item -->
      <div class="col">
        <div class="card-hover pb-3 mb-lg-2 mb-xl-3 me-sm-1 pe-xl-3">
          <div class="position-relative">
            <img src="/theme/around/assets/img/shipping/team/shipping-expert-3.jpg" alt="Support Engineer">
            <div class="d-flex justify-content-center position-absolute start-0 bottom-0 w-100 px-3 mb-4 opacity-0">
              <a class="btn btn-light btn-icon btn-sm btn-stack-overflow rounded-circle mx-2" href="#" aria-label="Stack Overflow">
                <i class="ai-stack-overflow"></i>
              </a>
            </div>
          </div>
          <div class="border-bottom pt-4 pb-3">
            <h3 class="h4 mb-2">Robert Wilson</h3>
            <span class="fs-lg text-body-secondary">Shipping Support Engineer</span>
          </div>
        </div>
      </div>

      <!-- Item -->
      <div class="col">
        <div class="card-hover pb-3 mb-lg-2 mb-xl-3 ms-sm-1 ps-xl-3">
          <div class="position-relative">
            <img src="/theme/around/assets/img/shipping/team/shipping-expert-4.jpg" alt="Implementation Manager">
            <div class="d-flex justify-content-center position-absolute start-0 bottom-0 w-100 px-3 mb-4 opacity-0">
              <a class="btn btn-light btn-icon btn-sm btn-linkedin rounded-circle mx-2" href="#" aria-label="LinkedIn">
                <i class="ai-linkedin"></i>
              </a>
            </div>
          </div>
          <div class="border-bottom pt-4 pb-3">
            <h3 class="h4 mb-2">Jennifer Garcia</h3>
            <span class="fs-lg text-body-secondary">Shipping Implementation Manager</span>
          </div>
        </div>
      </div>

      <!-- Item -->
      <div class="col">
        <div class="card-hover pb-3 mb-lg-2 mb-xl-3 me-sm-1 pe-xl-3">
          <div class="position-relative">
            <img src="/theme/around/assets/img/shipping/team/shipping-expert-5.jpg" alt="Account Manager">
            <div class="d-flex justify-content-center position-absolute start-0 bottom-0 w-100 px-3 mb-4 opacity-0">
              <a class="btn btn-light btn-icon btn-sm btn-linkedin rounded-circle mx-2" href="#" aria-label="LinkedIn">
                <i class="ai-linkedin"></i>
              </a>
            </div>
          </div>
          <div class="border-bottom pt-4 pb-3">
            <h3 class="h4 mb-2">Brian Rodriguez</h3>
            <span class="fs-lg text-body-secondary">Shipping Account Manager</span>
          </div>
        </div>
      </div>

      <!-- Item -->
      <div class="col">
        <div class="card-hover pb-3 mb-lg-2 mb-xl-3 ms-sm-1 ps-xl-3">
          <div class="position-relative">
            <img src="/theme/around/assets/img/shipping/team/shipping-expert-6.jpg" alt="API Documentation">
            <div class="d-flex justify-content-center position-absolute start-0 bottom-0 w-100 px-3 mb-4 opacity-0">
              <a class="btn btn-light btn-icon btn-sm btn-stack-overflow rounded-circle mx-2" href="#" aria-label="Stack Overflow">
                <i class="ai-stack-overflow"></i>
              </a>
            </div>
          </div>
          <div class="border-bottom pt-4 pb-3">
            <h3 class="h4 mb-2">Jacob Williams</h3>
            <span class="fs-lg text-body-secondary">Shipping API Documentation</span>
          </div>
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