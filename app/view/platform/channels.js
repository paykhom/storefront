import MarketplaceLayout from '../marketplace-layout'; // Adjust path as needed
//import { Page } from 'paykhom-fw/app/view';

export default class  Channels extends MarketplaceLayout {
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
<section class="bg-primary bg-opacity-10 d-flex min-vh-100 overflow-hidden py-5">
  <div class="container d-flex justify-content-center pb-sm-3 py-md-4 py-xl-5">
    <div class="row align-items-center pt-5 mt-4 mt-xxl-0">

      <!-- Video + Parallax -->
      <div class="col-lg-6 mb-4 mb-lg-0 pb-3 pb-lg-0">
        <div class="parallax mx-auto mx-lg-0" style="max-width: 582px;">
          <div class="parallax-layer z-3" data-depth="0.1">
            <div class="position-relative bg-dark mx-auto"
              style="max-width: 61%; padding: .3125rem; margin-bottom: 9.9%; border-radius: calc(var(--ar-border-radius) * 2.125);">
              <video class="d-block w-100" autoplay loop muted
                style="border-radius: calc(var(--ar-border-radius) * 1.875);">
                <source src="/theme/around/assets/img/landing/marketing-agency/hero/video.mp4" type="video/mp4">
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

      <div class="col-lg-6 text-center text-lg-start">
        <h1 class="display-4 pb-3 mb-4">Reach More Customers. <br><span class="fw-normal">Sell on the Channels They Use Every Day.</span></h1>
        <p class="lead">Maximize your revenue by expanding your online presence. Paykhom empowers you to accept payments seamlessly across multiple platforms, engaging new audiences and increasing your customer base.</p>
        <div class="d-sm-flex justify-content-center justify-content-lg-start pt-5 mt-lg-2">
          <a class="btn btn-lg btn-primary w-100 w-sm-auto mb-2 mb-sm-0 me-sm-1" href="/start">Explore all payment solutions</a>
          <a class="btn btn-lg btn-link" href="/integrations">
            See our Integrations
            <i class="ai-arrow-right ms-2"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Multiple Channel Strategies -->
<section class="container py-5 my-md-2 my-lg-3 my-xl-4 my-xxl-5">
  <div class="row pt-sm-2">
    <div class="col-xl-10">
      <p class="fs-2 text-dark pb-md-2 mb-lg-5">Ready to increase sales? Paykhom has you covered: </p>
    </div>
  </div>

  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 pb-4">

    <!-- Feature 1: E-commerce Websites-->
    <div class="col">
      <div class="card h-100 border-0 bg-secondary rounded-3 p-3">
        <div class="card-body">
          <img src="/theme/around/assets/img/icons/channels/website.png" width="48" alt="Icon" class="mb-3">
          <h3 class="h5 mb-2">E-commerce Websites</h3>
          <p>Offer a secure and branded payment experience directly on your website. Integrated seamlessly with your store to ensure customer satisfaction.</p>
          <a class="btn btn-link p-0" href="/accept-payments/online">Learn More</a>
        </div>
      </div>
    </div>

    <!-- Feature 2: Social Media -->
    <div class="col">
      <div class="card h-100 border-0 bg-secondary rounded-3 p-3">
        <div class="card-body">
          <img src="/theme/around/assets/img/icons/channels/social.png" width="48" alt="Icon" class="mb-3">
          <h3 class="h5 mb-2">Social Media Platforms</h3>
          <p>Sell directly to your audience where they spend their time. Integrate Paykhom with Instagram, Facebook, and more for easy sales.</p>
          <a class="btn btn-link p-0" href="/integrations">Connect with Social</a>
        </div>
      </div>
    </div>

    <!-- Feature 3: Email Marketing -->
    <div class="col">
      <div class="card h-100 border-0 bg-secondary rounded-3 p-3">
        <div class="card-body">
          <img src="/theme/around/assets/img/icons/channels/email.png" width="48" alt="Icon" class="mb-3">
          <h3 class="h5 mb-2">Email Marketing</h3>
          <p>Embed payment links in your email campaigns to make it effortless for customers to purchase directly from your promotions.</p>
          <a class="btn btn-link p-0" href="/resources/tools/payment-link-generator">Generate Payment Links</a>
        </div>
      </div>
    </div>

    <!-- Feature 4: Mobile Apps -->
    <div class="col">
      <div class="card h-100 border-0 bg-secondary rounded-3 p-3">
        <div class="card-body">
          <img src="/theme/around/assets/img/icons/channels/mobile.png" width="48" alt="Icon" class="mb-3">
          <h3 class="h5 mb-2">Mobile Apps</h3>
          <p>Take advantage of our Mobile SDKs and payment links to boost your in-app purchases and user satisfaction.</p>
          <a class="btn btn-link p-0" href="/accept-payments/mobile">Explore Mobile Solutions</a>
        </div>
      </div>
    </div>

      <!-- Feature 5: Mobile Apps -->
      <div class="col">
        <div class="card h-100 border-0 bg-secondary rounded-3 p-3">
          <div class="card-body">
            <img src="/theme/around/assets/img/icons/channels/international.png" width="48" alt="Icon" class="mb-3">
            <h3 class="h5 mb-2">Offer Global Reach</h3>
            <p>Engage customers from around the world and increase your customer base and profits!</p>
            <a class="btn btn-link p-0" href="/accept-payments/international">Explore global payment options</a>
          </div>
        </div>
      </div>

        <!-- Feature 6: Mobile Apps -->
        <div class="col">
          <div class="card h-100 border-0 bg-secondary rounded-3 p-3">
            <div class="card-body">
              <img src="/theme/around/assets/img/icons/channels/recurring.png" width="48" alt="Icon" class="mb-3">
              <h3 class="h5 mb-2">Recurring Payments</h3>
              <p>Boost profits with ease by offering subscriptions and recurring payment options to your customers.</p>
              <a class="btn btn-link p-0" href="/accept-payments/recurring">Setup Recurring Payments</a>
            </div>
          </div>
        </div>
  </div>
</section>


<!-- Persuasion: Testimonials -->
<section class="container" style="padding-top: 1.5rem !important; padding-bottom: 1.5rem !important;">
  <h2 class="h1 text-center pb-3 pt-2 pt-sm-3 pt-md-4 pt-lg-5 mt-md-3 mt-lg-0 mb-3 mb-lg-4">Don't just take our word for it...</h2>
        <!-- Text and img -->
      
      <div class="swiper-slide" data-swiper-binded="#testimonial-1" role="group" aria-label="1 / 3" style="width: 746px; margin-right: 40px;" data-swiper-slide-index="0">
        <div class="d-flex d-md-none pt-3 mb-3">
          <i class="ai-quotes d-md-none text-primary display-3 mt-n2"></i>
          <div class="ps-3">
            <h3 class="h5 mb-0">Lilia Bocouse</h3>
            <p class="text-body-secondary mb-0">Head of Marketing</p>
          </div>
        </div>
        <p class="text-center lead mb-0">“Around provides us with the detailed and accurate data we need to make strategic decisions. All tools are constantly being improved and contain a lot of useful and interesting information. Thanks to Around, we can constantly analyze our big data quickly and efficiently.”</p>
      </div>
</section>

<!-- Final Call to Action -->
<section class="bg-primary bg-opacity-10 py-5">
  <div class="container text-center">
    <h2 class="h1 mb-4">Ready to Unlock Multi-Channel Sales Success?</h2>
    <p class="lead">Start expanding your reach and boosting your revenue with Paykhom today.</p>
    <a class="btn btn-lg btn-primary" href="/contact/sales">Contact Sales</a>
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

    *template() {
        
yield html`
            ${this.render(this.header())}
            
            ${this.render(this.content())}
            
            ${this.render(this.footer())}
            
            ${this.render(this.style())}
            
            ${this.render(this.script())}
        `;
    }
}