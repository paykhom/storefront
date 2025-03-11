import MarketplaceLayout from '../marketplace-layout'; // Adjust path as needed
//import { Page } from 'paykhom-fw/app/view';

export default class  Theme extends MarketplaceLayout {
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

<!-- Navbar. Remove 'fixed-top' class to make the navigation bar scrollable with the page -->



<!-- Hero Section -->
<section class="container pt-5 pb-4 mb-lg-3 my-xl-4 my-xxl-5">
  <div class="row align-items-center pt-2 pt-sm-3 pt-md-4 mt-lg-2">
    <div class="col-md-6 order-md-2">
      <img src="/theme/around/assets/img/landing/saas-1/hero/themes-hero.png" alt="Beautiful Store Themes" class="img-fluid" data-aos="fade-left" data-aos-duration="600">
    </div>
    <div class="col-md-6 order-md-1">
      <h1 class="display-4 mb-3">Create a Stunning Online Store That Converts</h1>
      <p class="lead mb-4">Your online store's design is your digital storefront. Make a lasting first impression with our professionally designed themes, built for conversions and a seamless customer experience.</p>
      <a href="#theme-gallery" class="btn btn-primary btn-lg">Browse Our Themes</a>
    </div>
  </div>
</section>

<!-- Value Proposition Section -->
<section class="container py-5 my-lg-3 my-xl-4 my-xxl-5 bg-secondary">
  <div class="row justify-content-center text-center">
    <div class="col-lg-8">
      <h2>Why Choose Our Themes?</h2>
      <p class="lead">We don't just offer beautiful designs. We build themes with your business goals in mind.</p>
    </div>
  </div>
  <div class="row row-cols-1 row-cols-md-3 g-4 py-4">
    <div class="col">
      <div class="card border-0 h-100">
        <div class="card-body text-center">
          <img src="/theme/around/assets/img/icons/conversion.svg" alt="Conversion Optimized" class="mb-3" width="50">
          <h3 class="h5">Conversion Optimized</h3>
          <p>Designed to guide your customers through the purchase process, maximizing your sales potential.</p>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card border-0 h-100">
        <div class="card-body text-center">
          <img src="/theme/around/assets/img/icons/responsive.svg" alt="Fully Responsive" class="mb-3" width="50">
          <h3 class="h5">Fully Responsive</h3>
          <p>Looks amazing on any device - desktop, tablet, or smartphone - ensuring a seamless shopping experience.</p>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card border-0 h-100">
        <div class="card-body text-center">
          <img src="/theme/around/assets/img/icons/customize.svg" alt="Easy to Customize" class="mb-3" width="50">
          <h3 class="h5">Easy to Customize</h3>
          <p>Customize your theme to perfectly match your brand with our intuitive theme settings and drag-and-drop interface.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Theme Gallery Section -->
<section class="container py-5 my-lg-3 my-xl-4 my-xxl-5" id="theme-gallery">
  <h2 class="text-center mb-4">Browse Our Theme Collection</h2>
  <p class="text-center lead mb-5">Find the perfect theme to showcase your products and tell your brand story.</p>

  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
    <!-- Example Theme Card (Repeat for each theme) -->
    <div class="col">
      <div class="card h-100">
        <img src="/theme/around/assets/img/themes/theme-1.jpg" class="card-img-top" alt="Theme 1 Preview">
        <div class="card-body">
          <h5 class="card-title">Minimalist Chic</h5>
          <p class="card-text">A clean and modern theme perfect for showcasing product photography.</p>
          <a href="#" class="btn btn-primary">Preview Theme</a>
        </div>
      </div>
    </div>
    <!-- End Example Theme Card -->

    <!-- Repeat the theme card structure for each theme in your collection -->
     <div class="col">
      <div class="card h-100">
        <img src="/theme/around/assets/img/themes/theme-2.jpg" class="card-img-top" alt="Theme 2 Preview">
        <div class="card-body">
          <h5 class="card-title">Bold & Vibrant</h5>
          <p class="card-text">A perfect theme to attract your visitors attention.</p>
          <a href="#" class="btn btn-primary">Preview Theme</a>
        </div>
      </div>
    </div>

     <div class="col">
      <div class="card h-100">
        <img src="/theme/around/assets/img/themes/theme-3.jpg" class="card-img-top" alt="Theme 3 Preview">
        <div class="card-body">
          <h5 class="card-title">Sophisticated Look</h5>
          <p class="card-text">Attract sophisticated visitors.</p>
          <a href="#" class="btn btn-primary">Preview Theme</a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Call to Action Section -->
<section class="container py-5 my-lg-3 my-xl-4 my-xxl-5 bg-primary text-white text-center">
  <h2>Ready to Build Your Dream Store?</h2>
  <p class="lead">Choose a theme and start selling today!</p>
  <a href="#" class="btn btn-warning btn-lg">Start Your Free Trial</a>
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