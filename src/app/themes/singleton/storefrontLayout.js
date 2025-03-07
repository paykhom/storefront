import View from '../view';

export default class StorefrontLayout extends View {
    // @ts-ignore
    constructor(args) {
        super(args);
        this.metaData = args?.meta || { title: "Paykhom Limited" };
    }

    *content() {
        yield ``;
    }
    
    *template() {
        yield `<!DOCTYPE html>
<html lang="en" data-bs-theme="light" data-pwa="true" dir="ltr"><head>
    <meta charset="utf-8">

    <!-- Viewport -->
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, viewport-fit=cover">

    <!-- SEO Meta Tags -->
    <title>Cartzilla | Single Product Store</title>
    <meta name="description" content="Cartzilla - Multipurpose E-Commerce Bootstrap HTML Template">
    <meta name="keywords" content="online shop, e-commerce, online store, market, multipurpose, product landing, cart, checkout, ui kit, light and dark mode, bootstrap, html5, css3, javascript, gallery, slider, mobile, pwa">
    <meta name="author" content="Createx Studio">

    <!-- Webmanifest + Favicon / App icons -->
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <link rel="manifest" href="/manifest.json">
    <link rel="icon" type="image/png" href="/themes/cartzilla/assets/app-icons/icon-32x32.png" sizes="32x32">
    <link rel="apple-touch-icon" href="/themes/cartzilla/assets/app-icons/icon-180x180.png">

    <!-- Theme switcher (color modes) -->
    <script src="/themes/cartzilla/assets/js/theme-switcher.js"></script>

    <!-- Preloaded local web font (Inter) -->
    <link rel="preload" href="/themes/cartzilla/assets/fonts/inter-variable-latin.woff2" as="font" type="font/woff2" crossorigin="">

    <!-- Font icons -->
    <link rel="preload" href="/themes/cartzilla/assets/icons/cartzilla-icons.woff2" as="font" type="font/woff2" crossorigin="">
    <link rel="stylesheet" href="/themes/cartzilla/assets/icons/cartzilla-icons.min.css">

    <!-- Vendor styles -->
    <link rel="stylesheet" href="/themes/cartzilla/assets/vendor/swiper/swiper-bundle.min.css">
    <link rel="stylesheet" href="/themes/cartzilla/assets/vendor/glightbox/glightbox.min.css">

    <!-- Bootstrap + Theme styles -->
    <link rel="preload" href="/themes/cartzilla/assets/css/theme.min.css" as="style">
    <link rel="preload" href="/themes/cartzilla/assets/css/theme.rtl.min.css" as="style">
    <link rel="stylesheet" href="/themes/cartzilla/assets/css/theme.min.css" id="theme-styles">

    <!-- Customizer -->
    <script src="/themes/cartzilla/assets/js/customizer.min.js"></script><style id="customizer-styles">:root,[data-bs-theme="light"]{}[data-bs-theme="dark"]{}.btn-primary{}.btn-success{}.btn-warning{}.btn-danger{}.btn-info{}.btn-outline-primary{}.btn-outline-success{}.btn-outline-warning{}.btn-outline-danger{}.btn-outline-info{}</style>
  <style type="text/css">
@font-face {
	font-family: 'Atlassian Sans';
	font-style: normal;
	font-weight: 400 653;
	font-display: swap;
	src:
		local('AtlassianSans'),
		local('Atlassian Sans Text'),
		url(https://ds-cdn.prod-east.frontend.public.atl-paas.net/assets/fonts/atlassian-sans/v1/AtlassianSans-latin.woff2)
			format('woff2');
	unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304,
		U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}</style></head>


  <!-- Body -->
  <body>
    <!-- Navigation bar (Page header) -->
    <header class="navbar-sticky sticky-top container z-fixed px-2 mt-3" data-sticky-element="">
      <div class="navbar navbar-expand-lg flex-nowrap bg-body rounded-pill shadow ps-0 mx-1">
        <div class="position-absolute top-0 start-0 w-100 h-100 bg-dark rounded-pill z-0 d-none d-block-dark"></div>

        <!-- Mobile offcanvas menu toggler (Hamburger) -->
        <button type="button" class="navbar-toggler ms-3" data-bs-toggle="offcanvas" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Navbar brand (Logo) -->
        <a class="navbar-brand position-relative z-1 ms-4 ms-sm-5 ms-lg-4 me-2 me-sm-0 me-lg-3" href="index.html">Cartzilla</a>

        <!-- Main navigation that turns into offcanvas on screens < 992px wide (lg breakpoint) -->
        <nav class="offcanvas offcanvas-start" id="navbarNav" tabindex="-1" aria-labelledby="navbarNavLabel">
          <div class="offcanvas-header py-3">
            <h5 class="offcanvas-title" id="navbarNavLabel">Browse Cartzilla</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body pt-3 pb-4 py-lg-0 mx-lg-auto">
            <ul class="navbar-nav position-relative">
              <li class="nav-item dropdown me-lg-n1 me-xl-0">
                <a class="nav-link dropdown-toggle fs-sm active" aria-current="page" href="#" role="button" data-bs-toggle="dropdown" data-bs-trigger="hover" aria-expanded="false">Home</a>
                <ul class="dropdown-menu" style="--cz-dropdown-spacer: 1rem">
                  <li class="hover-effect-opacity px-2 mx-n2">
                    <a class="dropdown-item d-block mb-0" href="home-electronics.html">
                      <span class="fw-medium">Electronics Store</span>
                      <span class="d-block fs-xs text-body-secondary">Megamenu + Hero slider</span>
                      <div class="d-none d-lg-block hover-effect-target position-absolute top-0 start-100 bg-body border border-light-subtle rounded rounded-start-0 transition-none invisible opacity-0 pt-2 px-2 ms-n2" style="width: 212px; height: calc(100% + 2px); margin-top: -1px">
                        <img class="position-relative z-2 d-none-dark" src="/themes/cartzilla/assets/img/mega-menu/demo-preview/electronics-light.jpg" alt="Electronics Store">
                        <img class="position-relative z-2 d-none d-block-dark" src="/themes/cartzilla/assets/img/mega-menu/demo-preview/electronics-dark.jpg" alt="Electronics Store">
                        <span class="position-absolute top-0 start-0 w-100 h-100 rounded rounded-start-0 d-none-dark" style="box-shadow: .875rem .5rem 2rem -.5rem #676f7b; opacity: .1"></span>
                        <span class="position-absolute top-0 start-0 w-100 h-100 rounded rounded-start-0 d-none d-block-dark" style="box-shadow: .875rem .5rem 1.875rem -.5rem #080b12; opacity: .25"></span>
                      </div>
                    </a>
                  </li>
                  <li class="hover-effect-opacity px-2 mx-n2">
                    <a class="dropdown-item d-block mb-0" href="home-fashion-v1.html">
                      <span class="fw-medium">Fashion Store v.1</span>
                      <span class="d-block fs-xs text-body-secondary">Hero promo slider</span>
                      <div class="d-none d-lg-block hover-effect-target position-absolute top-0 start-100 bg-body border border-light-subtle rounded rounded-start-0 transition-none invisible opacity-0 pt-2 px-2 ms-n2" style="width: 212px; height: calc(100% + 2px); margin-top: -1px">
                        <img class="position-relative z-2 d-none-dark" src="/themes/cartzilla/assets/img/mega-menu/demo-preview/fashion-1-light.jpg" alt="Fashion Store v.1">
                        <img class="position-relative z-2 d-none d-block-dark" src="/themes/cartzilla/assets/img/mega-menu/demo-preview/fashion-1-dark.jpg" alt="Fashion Store v.1">
                        <span class="position-absolute top-0 start-0 w-100 h-100 rounded rounded-start-0 d-none-dark" style="box-shadow: .875rem .5rem 2rem -.5rem #676f7b; opacity: .1"></span>
                        <span class="position-absolute top-0 start-0 w-100 h-100 rounded rounded-start-0 d-none d-block-dark" style="box-shadow: .875rem .5rem 1.875rem -.5rem #080b12; opacity: .25"></span>
                      </div>
                    </a>
                  </li>
                  <li class="hover-effect-opacity px-2 mx-n2">
                    <a class="dropdown-item d-block mb-0" href="home-fashion-v2.html">
                      <span class="fw-medium">Fashion Store v.2</span>
                      <span class="d-block fs-xs text-body-secondary">Hero banner with hotspots</span>
                      <div class="d-none d-lg-block hover-effect-target position-absolute top-0 start-100 bg-body border border-light-subtle rounded rounded-start-0 transition-none invisible opacity-0 pt-2 px-2 ms-n2" style="width: 212px; height: calc(100% + 2px); margin-top: -1px">
                        <img class="position-relative z-2 d-none-dark" src="/themes/cartzilla/assets/img/mega-menu/demo-preview/fashion-2-light.jpg" alt="Fashion Store v.2">
                        <img class="position-relative z-2 d-none d-block-dark" src="/themes/cartzilla/assets/img/mega-menu/demo-preview/fashion-2-dark.jpg" alt="Fashion Store v.2">
                        <span class="position-absolute top-0 start-0 w-100 h-100 rounded rounded-start-0 d-none-dark" style="box-shadow: .875rem .5rem 2rem -.5rem #676f7b; opacity: .1"></span>
                        <span class="position-absolute top-0 start-0 w-100 h-100 rounded rounded-start-0 d-none d-block-dark" style="box-shadow: .875rem .5rem 1.875rem -.5rem #080b12; opacity: .25"></span>
                      </div>
                    </a>
                  </li>
                  <li class="hover-effect-opacity px-2 mx-n2">
                    <a class="dropdown-item d-block mb-0" href="home-furniture.html">
                      <span class="fw-medium">Furniture Store</span>
                      <span class="d-block fs-xs text-body-secondary">Fancy product carousel</span>
                      <div class="d-none d-lg-block hover-effect-target position-absolute top-0 start-100 bg-body border border-light-subtle rounded rounded-start-0 transition-none invisible opacity-0 pt-2 px-2 ms-n2" style="width: 212px; height: calc(100% + 2px); margin-top: -1px">
                        <img class="position-relative z-2 d-none-dark" src="/themes/cartzilla/assets/img/mega-menu/demo-preview/furniture-light.jpg" alt="Furniture Store">
                        <img class="position-relative z-2 d-none d-block-dark" src="/themes/cartzilla/assets/img/mega-menu/demo-preview/furniture-dark.jpg" alt="Furniture Store">
                        <span class="position-absolute top-0 start-0 w-100 h-100 rounded rounded-start-0 d-none-dark" style="box-shadow: .875rem .5rem 2rem -.5rem #676f7b; opacity: .1"></span>
                        <span class="position-absolute top-0 start-0 w-100 h-100 rounded rounded-start-0 d-none d-block-dark" style="box-shadow: .875rem .5rem 1.875rem -.5rem #080b12; opacity: .25"></span>
                      </div>
                    </a>
                  </li>
                  <li class="hover-effect-opacity px-2 mx-n2">
                    <a class="dropdown-item d-block mb-0" href="home-grocery.html">
                      <span class="fw-medium">Grocery Store</span>
                      <span class="d-block fs-xs text-body-secondary">Hero slider + Category cards</span>
                      <div class="d-none d-lg-block hover-effect-target position-absolute top-0 start-100 bg-body border border-light-subtle rounded rounded-start-0 transition-none invisible opacity-0 pt-2 px-2 ms-n2" style="width: 212px; height: calc(100% + 2px); margin-top: -1px">
                        <img class="position-relative z-2 d-none-dark" src="/themes/cartzilla/assets/img/mega-menu/demo-preview/grocery-light.jpg" alt="Grocery Store">
                        <img class="position-relative z-2 d-none d-block-dark" src="/themes/cartzilla/assets/img/mega-menu/demo-preview/grocery-dark.jpg" alt="Grocery Store">
                        <span class="position-absolute top-0 start-0 w-100 h-100 rounded rounded-start-0 d-none-dark" style="box-shadow: .875rem .5rem 2rem -.5rem #676f7b; opacity: .1"></span>
                        <span class="position-absolute top-0 start-0 w-100 h-100 rounded rounded-start-0 d-none d-block-dark" style="box-shadow: .875rem .5rem 1.875rem -.5rem #080b12; opacity: .25"></span>
                      </div>
                    </a>
                  </li>
                  <li class="hover-effect-opacity px-2 mx-n2">
                    <a class="dropdown-item d-block mb-0" href="home-marketplace.html">
                      <span class="fw-medium">Marketplace</span>
                      <span class="d-block fs-xs text-body-secondary">Multi-vendor, digital goods</span>
                      <div class="d-none d-lg-block hover-effect-target position-absolute top-0 start-100 bg-body border border-light-subtle rounded rounded-start-0 transition-none invisible opacity-0 pt-2 px-2 ms-n2" style="width: 212px; height: calc(100% + 2px); margin-top: -1px">
                        <img class="position-relative z-2 d-none-dark" src="/themes/cartzilla/assets/img/mega-menu/demo-preview/marketplace-light.jpg" alt="Marketplace">
                        <img class="position-relative z-2 d-none d-block-dark" src="/themes/cartzilla/assets/img/mega-menu/demo-preview/marketplace-dark.jpg" alt="Marketplace">
                        <span class="position-absolute top-0 start-0 w-100 h-100 rounded rounded-start-0 d-none-dark" style="box-shadow: .875rem .5rem 2rem -.5rem #676f7b; opacity: .1"></span>
                        <span class="position-absolute top-0 start-0 w-100 h-100 rounded rounded-start-0 d-none d-block-dark" style="box-shadow: .875rem .5rem 1.875rem -.5rem #080b12; opacity: .25"></span>
                      </div>
                    </a>
                  </li>
                  <li class="hover-effect-opacity px-2 mx-n2">
                    <a class="dropdown-item d-block mb-0" href="home-single-store.html">
                      <span class="fw-medium">Single Product Store</span>
                      <span class="d-block fs-xs text-body-secondary">Single product / mono brand</span>
                      <div class="d-none d-lg-block hover-effect-target position-absolute top-0 start-100 bg-body border border-light-subtle rounded rounded-start-0 transition-none invisible opacity-0 pt-2 px-2 ms-n2" style="width: 212px; height: calc(100% + 2px); margin-top: -1px">
                        <img class="position-relative z-2 d-none-dark" src="/themes/cartzilla/assets/img/mega-menu/demo-preview/single-store-light.jpg" alt="Single Product Store">
                        <img class="position-relative z-2 d-none d-block-dark" src="/themes/cartzilla/assets/img/mega-menu/demo-preview/single-store-dark.jpg" alt="Single Product Store">
                        <span class="position-absolute top-0 start-0 w-100 h-100 rounded rounded-start-0 d-none-dark" style="box-shadow: .875rem .5rem 2rem -.5rem #676f7b; opacity: .1"></span>
                        <span class="position-absolute top-0 start-0 w-100 h-100 rounded rounded-start-0 d-none d-block-dark" style="box-shadow: .875rem .5rem 1.875rem -.5rem #080b12; opacity: .25"></span>
                      </div>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown position-static me-lg-n1 me-xl-0">
                <a class="nav-link dropdown-toggle fs-sm" href="#" role="button" data-bs-toggle="dropdown" data-bs-trigger="hover" aria-expanded="false">Shop</a>
                <div class="dropdown-menu p-4" style="--cz-dropdown-spacer: 1rem">
                  <div class="d-flex flex-column flex-lg-row gap-4">
                    <div style="min-width: 190px">
                      <div class="h6 mb-2">Electronics Store</div>
                      <ul class="nav flex-column gap-2 mt-0">
                        <li class="d-flex w-100 pt-1">
                          <a class="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-categories-electronics.html">Categories Page</a>
                        </li>
                        <li class="d-flex w-100 pt-1">
                          <a class="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-electronics.html">Catalog with Side Filters</a>
                        </li>
                        <li class="d-flex w-100 pt-1">
                          <a class="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-product-general-electronics.html">Product General Info</a>
                        </li>
                        <li class="d-flex w-100 pt-1">
                          <a class="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-product-details-electronics.html">Product Details</a>
                        </li>
                        <li class="d-flex w-100 pt-1">
                          <a class="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-product-reviews-electronics.html">Product Reviews</a>
                        </li>
                      </ul>
                      <div class="h6 pt-4 mb-2">Fashion Store</div>
                      <ul class="nav flex-column gap-2 mt-0">
                        <li class="d-flex w-100 pt-1">
                          <a class="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-fashion.html">Catalog with Side Filters</a>
                        </li>
                        <li class="d-flex w-100 pt-1">
                          <a class="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-product-fashion.html">Product Page</a>
                        </li>
                      </ul>
                      <div class="h6 pt-4 mb-2">Furniture Store</div>
                      <ul class="nav flex-column gap-2 mt-0">
                        <li class="d-flex w-100 pt-1">
                          <a class="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-furniture.html">Catalog with Top Filters</a>
                        </li>
                        <li class="d-flex w-100 pt-1">
                          <a class="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-product-furniture.html">Product Page</a>
                        </li>
                      </ul>
                    </div>
                    <div style="min-width: 190px">
                      <div class="h6 mb-2">Grocery Store</div>
                      <ul class="nav flex-column gap-2 mt-0">
                        <li class="d-flex w-100 pt-1">
                          <a class="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-grocery.html">Catalog with Side Filters</a>
                        </li>
                        <li class="d-flex w-100 pt-1">
                          <a class="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-product-grocery.html">Product Page</a>
                        </li>
                      </ul>
                      <div class="h6 pt-4 mb-2">Marketplace</div>
                      <ul class="nav flex-column gap-2 mt-0">
                        <li class="d-flex w-100 pt-1">
                          <a class="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-catalog-marketplace.html">Catalog with Top Filters</a>
                        </li>
                        <li class="d-flex w-100 pt-1">
                          <a class="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="shop-product-marketplace.html">Digital Product Page</a>
                        </li>
                        <li class="d-flex w-100 pt-1">
                          <a class="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="checkout-marketplace.html">Cart / Checkout</a>
                        </li>
                      </ul>
                    </div>
                    <div style="min-width: 190px">
                      <div class="h6 mb-2">Checkout v.1</div>
                      <ul class="nav flex-column gap-2 mt-0">
                        <li class="d-flex w-100 pt-1">
                          <a class="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="checkout-v1-cart.html">Shopping Cart</a>
                        </li>
                        <li class="d-flex w-100 pt-1">
                          <a class="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="checkout-v1-delivery-1.html">Delivery Info (Step 1)</a>
                        </li>
                        <li class="d-flex w-100 pt-1">
                          <a class="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="checkout-v1-delivery-2.html">Delivery Info (Step 2)</a>
                        </li>
                        <li class="d-flex w-100 pt-1">
                          <a class="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="checkout-v1-shipping.html">Shipping Address</a>
                        </li>
                        <li class="d-flex w-100 pt-1">
                          <a class="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="checkout-v1-payment.html">Payment</a>
                        </li>
                        <li class="d-flex w-100 pt-1">
                          <a class="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="checkout-v1-thankyou.html">Thank You Page</a>
                        </li>
                      </ul>
                      <div class="h6 pt-4 mb-2">Checkout v.2</div>
                      <ul class="nav flex-column gap-2 mt-0">
                        <li class="d-flex w-100 pt-1">
                          <a class="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="checkout-v2-cart.html">Shopping Cart</a>
                        </li>
                        <li class="d-flex w-100 pt-1">
                          <a class="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="checkout-v2-delivery.html">Delivery Info</a>
                        </li>
                        <li class="d-flex w-100 pt-1">
                          <a class="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="checkout-v2-pickup.html">Pickup from Store</a>
                        </li>
                        <li class="d-flex w-100 pt-1">
                          <a class="nav-link animate-underline animate-target d-inline fw-normal text-truncate p-0" href="checkout-v2-thankyou.html">Thank You Page</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li class="nav-item dropdown me-lg-n1 me-xl-0">
                <a class="nav-link dropdown-toggle fs-sm" href="#" role="button" data-bs-toggle="dropdown" data-bs-trigger="hover" data-bs-auto-close="outside" aria-expanded="false">Account</a>
                <ul class="dropdown-menu" style="--cz-dropdown-spacer: 1rem">
                  <li class="dropend">
                    <a class="dropdown-item dropdown-toggle" href="#!" role="button" data-bs-toggle="dropdown" data-bs-trigger="hover" aria-expanded="false">Auth Pages</a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="account-signin.html">Sign In</a></li>
                      <li><a class="dropdown-item" href="account-signup.html">Sign Up</a></li>
                      <li><a class="dropdown-item" href="account-password-recovery.html">Password Recovery</a></li>
                    </ul>
                  </li>
                  <li class="dropend">
                    <a class="dropdown-item dropdown-toggle" href="#!" role="button" data-bs-toggle="dropdown" data-bs-trigger="hover" aria-expanded="false">Shop User</a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="account-orders.html">Orders History</a></li>
                      <li><a class="dropdown-item" href="account-wishlist.html">Wishlist</a></li>
                      <li><a class="dropdown-item" href="account-payment.html">Payment Methods</a></li>
                      <li><a class="dropdown-item" href="account-reviews.html">My Reviews</a></li>
                      <li><a class="dropdown-item" href="account-info.html">Personal Info</a></li>
                      <li><a class="dropdown-item" href="account-addresses.html">Addresses</a></li>
                      <li><a class="dropdown-item" href="account-notifications.html">Notifications</a></li>
                    </ul>
                  </li>
                  <li class="dropend">
                    <a class="dropdown-item dropdown-toggle" href="#!" role="button" data-bs-toggle="dropdown" data-bs-trigger="hover" aria-expanded="false">Marketplace User</a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="account-marketplace-dashboard.html">Dashboard</a></li>
                      <li><a class="dropdown-item" href="account-marketplace-products.html">Products</a></li>
                      <li><a class="dropdown-item" href="account-marketplace-sales.html">Sales</a></li>
                      <li><a class="dropdown-item" href="account-marketplace-payouts.html">Payouts</a></li>
                      <li><a class="dropdown-item" href="account-marketplace-purchases.html">Purchases</a></li>
                      <li><a class="dropdown-item" href="account-marketplace-favorites.html">Favorites</a></li>
                      <li><a class="dropdown-item" href="account-marketplace-settings.html">Settings</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown me-lg-n1 me-xl-0">
                <a class="nav-link dropdown-toggle fs-sm" href="#" role="button" data-bs-toggle="dropdown" data-bs-trigger="hover" data-bs-auto-close="outside" aria-expanded="false">Pages</a>
                <ul class="dropdown-menu" style="--cz-dropdown-spacer: 1rem">
                  <li class="dropend">
                    <a class="dropdown-item dropdown-toggle" href="#!" role="button" data-bs-toggle="dropdown" data-bs-trigger="hover" aria-expanded="false">About</a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="about-v1.html">About v.1</a></li>
                      <li><a class="dropdown-item" href="about-v2.html">About v.2</a></li>
                    </ul>
                  </li>
                  <li class="dropend">
                    <a class="dropdown-item dropdown-toggle" href="#!" role="button" data-bs-toggle="dropdown" data-bs-trigger="hover" aria-expanded="false">Blog</a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="blog-grid-v1.html">Grid View v.1</a></li>
                      <li><a class="dropdown-item" href="blog-grid-v2.html">Grid View v.2</a></li>
                      <li><a class="dropdown-item" href="blog-list.html">List View</a></li>
                      <li><a class="dropdown-item" href="blog-single-v1.html">Single Post v.1</a></li>
                      <li><a class="dropdown-item" href="blog-single-v2.html">Single Post v.2</a></li>
                    </ul>
                  </li>
                  <li class="dropend">
                    <a class="dropdown-item dropdown-toggle" href="#!" role="button" data-bs-toggle="dropdown" data-bs-trigger="hover" aria-expanded="false">Contact</a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="contact-v1.html">Contact v.1</a></li>
                      <li><a class="dropdown-item" href="contact-v2.html">Contact v.2</a></li>
                      <li><a class="dropdown-item" href="contact-v3.html">Contact v.3</a></li>
                    </ul>
                  </li>
                  <li class="dropend">
                    <a class="dropdown-item dropdown-toggle" href="#!" role="button" data-bs-toggle="dropdown" data-bs-trigger="hover" aria-expanded="false">Help Center</a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="help-topics-v1.html">Help Topics v.1</a></li>
                      <li><a class="dropdown-item" href="help-topics-v2.html">Help Topics v.2</a></li>
                      <li><a class="dropdown-item" href="help-single-article-v1.html">Help Single Article v.1</a></li>
                      <li><a class="dropdown-item" href="help-single-article-v2.html">Help Single Article v.2</a></li>
                    </ul>
                  </li>
                  <li class="dropend">
                    <a class="dropdown-item dropdown-toggle" href="#!" role="button" data-bs-toggle="dropdown" data-bs-trigger="hover" aria-expanded="false">404 Error</a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="404-electronics.html">404 Electronics</a></li>
                      <li><a class="dropdown-item" href="404-fashion.html">404 Fashion</a></li>
                      <li><a class="dropdown-item" href="404-furniture.html">404 Furniture</a></li>
                      <li><a class="dropdown-item" href="404-grocery.html">404 Grocery</a></li>
                    </ul>
                  </li>
                  <li><a class="dropdown-item" href="terms-and-conditions.html">Terms &amp; Conditions</a></li>
                </ul>
              </li>
              <li class="nav-item me-lg-n2 me-xl-0">
                <a class="nav-link fs-sm" href="docs/installation.html">Docs</a>
              </li>
              <li class="nav-item me-lg-n2 me-xl-0">
                <a class="nav-link fs-sm" href="docs/typography.html">Components</a>
              </li>
            </ul>
          </div>
        </nav>

        <!-- Button group -->
        <div class="d-flex gap-sm-1 position-relative z-1">

          <!-- Theme switcher (light/dark/auto) -->
          <div class="dropdown me-1">
            <button type="button" class="theme-switcher btn btn-icon btn-outline-secondary fs-lg border-0 rounded-circle animate-scale" data-bs-toggle="dropdown" data-bs-display="dynamic" aria-expanded="false" aria-label="Toggle theme (light)">
              <span class="theme-icon-active d-flex animate-target">
                <i class="ci-sun"></i>
              </span>
            </button>
            <ul class="dropdown-menu start-50 translate-middle-x" style="--cz-dropdown-min-width: 9rem; --cz-dropdown-spacer: 1rem">
              <li>
                <button type="button" class="dropdown-item active" data-bs-theme-value="light" aria-pressed="true">
                  <span class="theme-icon d-flex fs-base me-2">
                    <i class="ci-sun"></i>
                  </span>
                  <span class="theme-label">Light</span>
                  <i class="item-active-indicator ci-check ms-auto"></i>
                </button>
              </li>
              <li>
                <button type="button" class="dropdown-item" data-bs-theme-value="dark" aria-pressed="false">
                  <span class="theme-icon d-flex fs-base me-2">
                    <i class="ci-moon"></i>
                  </span>
                  <span class="theme-label">Dark</span>
                  <i class="item-active-indicator ci-check ms-auto"></i>
                </button>
              </li>
              <li>
                <button type="button" class="dropdown-item" data-bs-theme-value="auto" aria-pressed="false">
                  <span class="theme-icon d-flex fs-base me-2">
                    <i class="ci-auto"></i>
                  </span>
                  <span class="theme-label">Auto</span>
                  <i class="item-active-indicator ci-check ms-auto"></i>
                </button>
              </li>
            </ul>
          </div>

          <!-- Cart button -->
          <button type="button" class="btn btn-warning rounded-pill" data-bs-toggle="offcanvas" data-bs-target="#shoppingCart" aria-controls="shoppingCart" aria-label="Shopping cart">
            Cart (0)
          </button>
        </div>
      </div>
    </header>


    <!-- Page content -->
    <main class="content-wrapper">

      <!-- Hero image section -->
      <section class="position-relative bg-body-tertiary overflow-hidden" style="border-bottom-right-radius: 48px; border-bottom-left-radius: 48px; margin-top: -80px; padding-top: 80px">

        <!-- Content -->
        <div class="container position-relative z-1 pt-5 pb-4 pb-sm-5">
          <div class="row py-md-4 py-lg-5 mt-xl-2 mb-xl-5">
            <div class="col-lg-6 pt-xxl-4">
              <h1 class="d-flex flex-column text-white text-uppercase fst-italic pb-lg-3 mb-lg-4" style="font-weight: 800">
                <span class="d-none d-lg-block" style="font-size: 120px">Modern</span>
                <span class="d-none d-lg-block" style="font-size: 120px">Reliable</span>
                <span class="d-none d-lg-block" style="font-size: 120px">Fresh</span>
                <span class="d-none d-md-block d-lg-none" style="font-size: 80px">Modern</span>
                <span class="d-none d-md-block d-lg-none" style="font-size: 80px">Reliable</span>
                <span class="d-none d-md-block d-lg-none" style="font-size: 80px">Fresh</span>
                <span class="d-md-none" style="font-size: 60px">Modern</span>
                <span class="d-md-none" style="font-size: 60px">Reliable</span>
                <span class="d-md-none" style="font-size: 60px">Fresh</span>
              </h1>
            </div>
            <div class="col-lg-6 d-flex justify-content-end pt-4">
              <div class="vstack justify-content-end align-items-end gap-2 gap-lg-3">
                <div class="d-flex align-items-center text-white rounded-pill bg-white bg-opacity-25 border border-white border-opacity-25 px-3 px-sm-4 mb-1" style="padding: 14px 0; box-shadow: 0 12px 12px -4px rgba(0,0,0, .05); -webkit-backdrop-filter: blur(8px); backdrop-filter: blur(8px)">
                  <i class="ci-sun fs-5 me-2"></i>
                  <div class="fw-medium">12 hours of hot comfort</div>
                </div>
                <div class="d-flex align-items-center text-white rounded-pill bg-white bg-opacity-25 border border-white border-opacity-25 px-3 px-sm-4 mb-1" style="padding: 14px 0; box-shadow: 0 12px 12px -4px rgba(0,0,0, .05); -webkit-backdrop-filter: blur(8px); backdrop-filter: blur(8px)">
                  <svg class="me-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"><path d="M9.396 13.337l-.755-.757V8.34l3.607-2.14 2.325.622c.054.014.108.021.162.021.276 0 .529-.184.603-.464.089-.333-.109-.676-.442-.765l-1.146-.307.93-.552c.297-.176.395-.56.219-.856s-.56-.395-.856-.219l-.883.524.274-1.083c.085-.335-.118-.675-.453-.759s-.675.118-.759.452l-.579 2.29-3.002 1.782V3.423l1.72-1.697c.246-.242.248-.638.006-.884S9.729.594 9.483.836l-.842.831V.625C8.641.28 8.361 0 8.016 0s-.625.28-.625.625v1.042L6.549.836c-.246-.242-.641-.24-.884.006s-.24.641.006.884l1.72 1.697v3.466L4.389 5.116l-.612-2.337c-.088-.334-.429-.534-.763-.446s-.534.429-.446.763l.293 1.117-.902-.533c-.297-.176-.68-.077-.856.22s-.077.68.22.856l.915.541-1.125.284c-.335.084-.537.424-.453.759.072.283.326.472.606.472.051 0 .102-.006.153-.019L3.768 6.2 6.79 7.985 3.748 9.79l-2.321-.614c-.334-.088-.676.111-.764.444s.111.676.444.764l1.133.3-.889.527c-.297.176-.395.56-.219.856.117.197.325.306.538.306.108 0 .218-.028.318-.088l.871-.517-.292 1.1c-.089.334.11.676.444.764a.64.64 0 0 0 .161.021c.277 0 .529-.185.604-.465l.618-2.331L7.39 9.079v3.495l-1.72 1.697c-.246.242-.248.638-.006.884.122.124.284.186.445.186a.62.62 0 0 0 .439-.18l.842-.831v1.042c0 .345.28.625.625.625s.625-.28.625-.625V14.35l.807.81a.62.62 0 0 0 .443.184.62.62 0 0 0 .441-.182c.244-.244.245-.639.002-.884l-.937-.94zm5.177-4.159l-2.277.609-1.588-.938c-.297-.176-.68-.077-.856.22s-.077.68.22.856l1.56.922.622 2.374c.074.281.327.467.604.467a.62.62 0 0 0 .159-.021c.334-.088.534-.429.446-.763l-.303-1.154.911.538a.62.62 0 0 0 .317.087c.214 0 .422-.11.539-.307.176-.297.077-.68-.22-.856l-.905-.534 1.092-.292c.333-.089.531-.432.442-.765s-.432-.531-.765-.442z"></path></svg>
                  <div class="fw-medium">24 hours of ice-cold refreshment</div>
                </div>
                <div class="d-flex align-items-center text-white rounded-pill bg-white bg-opacity-25 border border-white border-opacity-25 px-3 px-sm-4 mb-1" style="padding: 14px 0; box-shadow: 0 12px 12px -4px rgba(0,0,0, .05); -webkit-backdrop-filter: blur(8px); backdrop-filter: blur(8px)">
                  <i class="ci-leaf fs-5 me-2"></i>
                  <div class="fw-medium">The quality free from harmful chemicals</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Foreground image -->
        <img src="/themes/cartzilla/assets/img/home/single-product/hero/foreground.png" class="position-absolute top-0 start-0 w-100 h-100 object-fit-cover z-2 d-none d-md-block" alt="Foreground image">

        <!-- Background image -->
        <img src="/themes/cartzilla/assets/img/home/single-product/hero/background.jpg" class="position-absolute top-0 start-0 w-100 h-100 object-fit-cover" alt="Background image">
      </section>


      <!-- Features -->
      <section class="container pt-2 pt-sm-3 pt-md-4 pt-lg-5 pb-5 my-xxl-3">
        <div class="row justify-content-center pt-5 pb-4 pb-lg-5 mb-md-3 mb-lg-0">
          <div class="col-lg-6 text-center">
            <h2 class="display-4 mb-0">The clever choice for modern hydration</h2>
          </div>
        </div>
        <div class="row align-items-center justify-content-center pb-3 pb-lg-0 mb-4 mb-lg-5">
          <div class="col-md-4 mb-4 mb-md-0">
            <div class="vstack gap-4 gap-lg-5">
              <div class="vstack align-items-center gap-2 text-center">
                <svg class="text-dark-emphasis mb-xl-2" xmlns="http://www.w3.org/2000/svg" width="48" height="49" fill="currentColor"><path d="M25.745 31.172l-.944-.947v-5.3l4.509-2.675 2.907.778c.068.018.136.027.203.027a.78.78 0 0 0 .754-.579.78.78 0 0 0-.553-.957l-1.432-.383 1.163-.69a.781.781 0 1 0-.797-1.344l-1.104.655.343-1.354a.781.781 0 0 0-1.515-.383l-.724 2.862-3.753 2.227v-4.33l2.15-2.121a.781.781 0 1 0-1.097-1.112l-1.053 1.038v-1.303a.781.781 0 1 0-1.562 0v1.303l-1.053-1.039a.781.781 0 1 0-1.097 1.112l2.15 2.121v4.333l-3.752-2.217-.765-2.921a.781.781 0 0 0-1.512.396l.366 1.396-1.127-.666a.781.781 0 1 0-.795 1.345l1.144.676-1.407.355a.78.78 0 0 0-.566.949.78.78 0 0 0 .757.59.8.8 0 0 0 .192-.024l2.936-.741 3.777 2.231-3.803 2.257-2.901-.767a.781.781 0 1 0-.399 1.511l1.417.375-1.111.659a.78.78 0 0 0 .797 1.343l1.089-.646-.365 1.375a.78.78 0 1 0 1.511.401l.773-2.914 3.746-2.223v4.369l-2.15 2.121a.78.78 0 1 0 1.098 1.112l1.053-1.038v1.303a.781.781 0 1 0 1.563 0v-1.281l1.009 1.012a.78.78 0 1 0 1.107-1.103l-1.172-1.175zm6.471-5.2l-2.846.762-1.985-1.172a.781.781 0 1 0-.795 1.345l1.95 1.152.777 2.968a.78.78 0 1 0 1.512-.396l-.378-1.443 1.139.673a.78.78 0 0 0 .795-1.345l-1.131-.668 1.365-.366a.781.781 0 1 0-.404-1.509z"></path></svg>
                <h3 class="h6 mb-0">24 Hours cold drink</h3>
                <p class="mb-0">Your drinks stay at the perfect temperature</p>
              </div>
              <div class="vstack align-items-center gap-2 text-center">
                <svg class="text-dark-emphasis mb-xl-2" xmlns="http://www.w3.org/2000/svg" width="48" height="49" fill="currentColor"><path d="M23.78 16.14c-.361.005-.676.182-.865.486l-1.787 2.778a.78.78 0 0 1-1.077.234.78.78 0 0 1-.234-1.078l1.777-2.763a2.58 2.58 0 0 1 2.164-1.217c.889-.012 1.713.422 2.201 1.162l3.035 4.624.457-2.5a.78.78 0 0 1 .907-.627.78.78 0 0 1 .627.907l-.493 2.696c-.205 1.127-1.192 1.92-2.3 1.92-.139 0-.279-.012-.42-.038l-2.692-.522a.78.78 0 0 1-.617-.914.78.78 0 0 1 .914-.617l2.238.434-2.958-4.506a1.02 1.02 0 0 0-.877-.46zm-1.826 13.562h-5.359a1.02 1.02 0 0 1-.906-.526.98.98 0 0 1 .028-1.014l3.172-5.145.458 2.573a.78.78 0 0 0 .767.643c.045 0 .091-.004.138-.012a.78.78 0 0 0 .631-.904l-.509-2.86c-.226-1.269-1.441-2.117-2.709-1.893l-2.741.469a.78.78 0 0 0-.637.9.78.78 0 0 0 .9.637l2.401-.411-3.195 5.184c-.498.801-.522 1.77-.065 2.592a2.56 2.56 0 0 0 2.269 1.327h5.359a.78.78 0 0 0 .78-.78.78.78 0 0 0-.78-.78zm12.045-5.222c.016-.441-.32-.802-.75-.817-.196-.007-4.823-.146-7.527 2.558-1.033 1.032-1.553 2.153-1.545 3.332.005.787.245 1.43.454 1.877-.447.562-.871 1.16-1.27 1.795a.78.78 0 0 0 .246 1.075c.129.081.272.12.414.12a.78.78 0 0 0 .661-.365c1.436-2.287 3.135-3.988 5.194-5.199a.78.78 0 0 0 .276-1.067.78.78 0 0 0-1.067-.276c-1.185.698-2.281 1.562-3.279 2.586-.04-.173-.067-.358-.069-.554-.005-.756.351-1.482 1.088-2.219 1.634-1.633 4.292-2.002 5.596-2.082-.078 1.302-.443 3.955-2.084 5.595-.596.596-1.205.951-1.809 1.055a.78.78 0 0 0 .131 1.548.78.78 0 0 0 .133-.011c.928-.159 1.819-.66 2.648-1.489 2.561-2.561 2.572-6.846 2.56-7.459z"></path></svg>
                <h3 class="h6 mb-0">Eco-friendly and safe</h3>
                <p class="mb-0">The highest-quality free from harmful chemicals</p>
              </div>
            </div>
          </div>
          <div class="col-8 col-sm-6 col-md-4 mb-4 mb-md-0">
            <div class="ratio" style="--cz-aspect-ratio: calc(465 / 416 * 100%)">
              <img src="/themes/cartzilla/assets/img/home/single-product/01.png" alt="Image">
            </div>
          </div>
          <div class="col-md-4">
            <div class="vstack gap-4 gap-lg-5">
              <div class="vstack align-items-center gap-2 text-center">
                <svg class="text-dark-emphasis mb-xl-2" xmlns="http://www.w3.org/2000/svg" width="48" height="49" fill="none" stroke="currentColor" stroke-width="1.868" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"><path d="M15.781 15.89L33 33.109m-3.1-3.064c-1.147 1.84-3.186 3.064-5.51 3.064-3.586 0-6.494-2.915-6.494-6.511v-.199c0-1.467 1.198-3.613 2.566-5.584m1.888-2.517l2.041-2.408s6.494 7.095 6.494 10.509v.199l-.013.419"></path></svg>
                <h3 class="h6 mb-0">Leak-proof cap</h3>
                <p class="mb-0">Bottle without worrying about leaks</p>
              </div>
              <div class="vstack align-items-center gap-2 text-center">
                <svg class="text-dark-emphasis mb-xl-2" xmlns="http://www.w3.org/2000/svg" width="48" height="49" fill="currentColor"><path d="M29.82 24.539c-1.292 0-2.344 1.051-2.344 2.344s1.051 2.344 2.344 2.344h3.32c.013 0 .026-.001.039-.002l.039.002a.78.78 0 0 0 .781-.781v-6.133a3.12 3.12 0 0 0-1.295-2.531l-2.658-4.36a.78.78 0 0 0-1.079-.257l-1.96 1.216-.884-1.496a.78.78 0 0 0-1.078-.27l-7.526 4.574h-1.176a.78.78 0 0 1-.781-.762.78.78 0 0 1 .781-.762h1.445a.78.78 0 1 0 0-1.562h-1.445a2.35 2.35 0 0 0-2.28 1.801c-.041.095-.064.199-.064.309v.195.039 12.93a3.13 3.13 0 0 0 3.125 3.125h13.75a3.12 3.12 0 0 0 2.965-2.136.78.78 0 1 0-1.482-.494 1.56 1.56 0 0 1-1.483 1.067h-13.75c-.862 0-1.562-.701-1.562-1.562V20.616c.245.087.507.134.781.134h14.531c.861 0 1.563.701 1.563 1.563v2.227H29.82zm2.617 3.125H29.82a.78.78 0 1 1 0-1.562h2.617v1.563zm-11.909-8.477l4.653-2.828.832 1.408a.79.79 0 0 0 .057.113c.017.027.036.053.056.077l.726 1.23h-6.324zm8.139 0l-.864-1.462 1.319-.818 1.39 2.281h-1.845z"></path></svg>
                <h3 class="h6 mb-0">30-day money-back guarantee</h3>
                <p class="mb-0">We offer a full refund within 30 days</p>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center">
          <button type="button" class="btn btn-lg btn-dark rounded-pill">Buy Bottle from $20.00</button>
        </div>
      </section>


      <!-- Features -->
      <section class="container pt-2 pt-sm-3 pt-md-4 pt-lg-5 pb-5 my-xxl-3">
        <div class="row mb-4">
          <div class="col-md-5 order-md-2 mb-4 mb-md-0">
            <div class="position-relative h-100 bg-body-tertiary rounded-5 overflow-hidden">
              <div class="d-none d-md-block" style="height: 440px"></div>
              <div class="d-none d-sm-block d-md-none" style="height: 350px"></div>
              <div class="d-sm-none" style="height: 250px"></div>
              <img src="/themes/cartzilla/assets/img/home/single-product/02.jpg" class="position-absolute top-0 start-0 w-100 h-100 object-fit-cover" alt="Image">
            </div>
          </div>
          <div class="col-md-7 order-md-1">
            <div class="d-flex align-items-center h-100 bg-body-tertiary rounded-5 p-4 p-xl-5">
              <div class="p-sm-3 p-xxl-2">
                <h2 class="mb-lg-4">Temperature control</h2>
                <p class="fs-lg pb-sm-2 pb-lg-3">Experience the power of advanced insulation technology that keeps your drinks at just the right temperature all day long. Whether it's a hot summer day or a chilly morning, your beverages will stay perfectly chilled or warmly comforting. Say goodbye to lukewarm drinks!</p>
                <div class="d-flex flex-column flex-sm-row gap-2 gap-lg-3">
                  <div class="d-flex align-items-center text-body-emphasis bg-body rounded-pill shadow px-3" style="padding: 10px 0">
                    <svg class="flex-shrink-0 me-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"><path d="M9.396 13.337l-.755-.757V8.34l3.607-2.14 2.325.622c.054.014.108.021.162.021.276 0 .529-.184.603-.464.089-.333-.109-.676-.442-.765l-1.146-.307.93-.552c.297-.176.395-.56.219-.856s-.56-.395-.856-.219l-.883.524.274-1.083c.085-.335-.118-.675-.453-.759s-.675.118-.759.452l-.579 2.29-3.002 1.782V3.423l1.72-1.697c.246-.242.248-.638.006-.884S9.729.594 9.483.836l-.842.831V.625C8.641.28 8.361 0 8.016 0s-.625.28-.625.625v1.042L6.549.836c-.246-.242-.641-.24-.884.006s-.24.641.006.884l1.72 1.697v3.466L4.389 5.116l-.612-2.337c-.088-.334-.429-.534-.763-.446s-.534.429-.446.763l.293 1.117-.902-.533c-.297-.176-.68-.077-.856.22s-.077.68.22.856l.915.541-1.125.284c-.335.084-.537.424-.453.759.072.283.326.472.606.472.051 0 .102-.006.153-.019L3.768 6.2 6.79 7.985 3.748 9.79l-2.321-.614c-.334-.088-.676.111-.764.444s.111.676.444.764l1.133.3-.889.527c-.297.176-.395.56-.219.856.117.197.325.306.538.306.108 0 .218-.028.318-.088l.871-.517-.292 1.1c-.089.334.11.676.444.764a.64.64 0 0 0 .161.021c.277 0 .529-.185.604-.465l.618-2.331L7.39 9.079v3.495l-1.72 1.697c-.246.242-.248.638-.006.884.122.124.284.186.445.186a.62.62 0 0 0 .439-.18l.842-.831v1.042c0 .345.28.625.625.625s.625-.28.625-.625V14.35l.807.81a.62.62 0 0 0 .443.184.62.62 0 0 0 .441-.182c.244-.244.245-.639.002-.884l-.937-.94zm5.177-4.159l-2.277.609-1.588-.938c-.297-.176-.68-.077-.856.22s-.077.68.22.856l1.56.922.622 2.374c.074.281.327.467.604.467a.62.62 0 0 0 .159-.021c.334-.088.534-.429.446-.763l-.303-1.154.911.538a.62.62 0 0 0 .317.087c.214 0 .422-.11.539-.307.176-.297.077-.68-.22-.856l-.905-.534 1.092-.292c.333-.089.531-.432.442-.765s-.432-.531-.765-.442z"></path></svg>
                    <div class="fs-sm fw-medium">24 hours of ice-cold refreshment</div>
                  </div>
                  <div class="d-flex align-items-center text-body-emphasis bg-body rounded-pill shadow px-3" style="padding: 10px 0">
                    <i class="ci-sun me-2"></i>
                    <div class="fs-sm fw-medium">12 hours of hot comfort</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-5 mb-4 mb-md-0">
            <div class="position-relative h-100 bg-body-tertiary rounded-5 overflow-hidden">
              <div class="d-none d-md-block" style="height: 440px"></div>
              <div class="d-none d-sm-block d-md-none" style="height: 350px"></div>
              <div class="d-sm-none" style="height: 250px"></div>
              <img src="/themes/cartzilla/assets/img/home/single-product/03.jpg" class="position-absolute top-0 start-0 w-100 h-100 object-fit-cover" alt="Image">
              <div class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-end justify-content-end p-3 p-sm-4">
                <a class="btn btn-lg btn-light stretched-link rounded-pill" href="https://www.youtube.com/watch?v=ME5CirMkFZE" data-glightbox="" data-gallery="video1">
                  <i class="ci-play fs-lg me-2 ms-n1"></i>
                  Play
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-7">
            <div class="d-flex align-items-center h-100 bg-body-tertiary rounded-5 p-4 p-xl-5">
              <div class="p-sm-3 p-xxl-2">
                <div class="ratio ratio-1x1 mb-3 mb-sm-4" style="width: 92px">
                  <img src="/themes/cartzilla/assets/img/home/single-product/bpa-fee-light.png" class="d-none-dark" alt="Image">
                  <img src="/themes/cartzilla/assets/img/home/single-product/bpa-fee-dark.png" class="d-none d-block-dark" alt="Image">
                </div>
                <h2 class="mb-lg-4 pt-lg-3">A healthier way to hydrate</h2>
                <p class="fs-lg mb-0">Your health and well-being are our top priorities, which is why we've designed our metallic water bottles using the highest quality materials. Every sip from our bottles is a step towards a healthier lifestyle, free from harmful chemicals and contaminants.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <!-- Color options -->
      <section class="container pt-2 pt-sm-3 pt-md-4 pt-lg-5 pb-5 my-xxl-3">
        <div class="row align-items-end justify-content-center">
          <div class="col-md-5 mb-4 mb-md-0">
            <h2 class="display-4 pb-1 pb-sm-2 pb-lg-3 pb-xl-4">Express yourself with a rainbow of colors</h2>
            <div class="list-group list-group-borderless gap-2 pb-1 pb-sm-2 pb-lg-3 pb-xl-4 mb-3" role="tablist">
              <a class="list-group-item list-group-item-action d-flex align-items-center fs-xl fw-normal px-sm-4 active" href="#freshness" data-bs-toggle="list" role="tab" aria-controls="freshness" id="freshness-color" aria-selected="true" style="--cz-list-group-border-radius: 25px">
                <span class="border border-2 rounded-circle me-3" style="width: 24px; height: 24px; --cz-border-color: var(--cz-body-bg); background: linear-gradient(0deg, rgba(106,168,162,1) 0%, rgba(237,237,213,1) 100%)"></span>
                Freshness
                <span class="fw-semibold ps-3 ms-auto">$28.00</span>
              </a>
              <a class="list-group-item list-group-item-action d-flex align-items-center fs-xl fw-normal px-sm-4" href="#sunflower" data-bs-toggle="list" role="tab" aria-controls="sunflower" id="sunflower-color" aria-selected="false" tabindex="-1" style="--cz-list-group-border-radius: 25px">
                <span class="border border-2 rounded-circle me-3" style="width: 24px; height: 24px; --cz-border-color: var(--cz-body-bg); background: linear-gradient(0deg, rgba(195,72,82,1) 0%, rgba(250,227,152,1) 100%)"></span>
                Sunflower
                <span class="fw-semibold ps-3 ms-auto">$24.00</span>
              </a>
              <a class="list-group-item list-group-item-action d-flex align-items-center fs-xl fw-normal px-sm-4" href="#heavenly " data-bs-toggle="list" role="tab" aria-controls="heavenly" id="heavenly-color" aria-selected="false" tabindex="-1" style="--cz-list-group-border-radius: 25px">
                <span class="border border-2 rounded-circle me-3" style="width: 24px; height: 24px; --cz-border-color: var(--cz-body-bg); background: linear-gradient(0deg, rgba(56,125,154,1) 0%, rgba(237,244,243,1) 100%)"></span>
                Heavenly
                <span class="fw-semibold ps-3 ms-auto">$22.00</span>
              </a>
              <a class="list-group-item list-group-item-action d-flex align-items-center fs-xl fw-normal px-sm-4" href="#darkness" data-bs-toggle="list" role="tab" aria-controls="darkness" id="darkness-color" aria-selected="false" tabindex="-1" style="--cz-list-group-border-radius: 25px">
                <span class="border border-2 rounded-circle me-3" style="width: 24px; height: 24px; --cz-border-color: var(--cz-body-bg); background: linear-gradient(0deg, rgba(72,93,195,1) 0%, rgba(214,170,251,1) 100%)"></span>
                Darkness
                <span class="fw-semibold ps-3 ms-auto">$24.00</span>
              </a>
            </div>
            <p class="fs-sm mb-sm-4">We believe in the quality and performance of our bottles, and we want you to feel the same. We offer a <span class="fw-semibold text-body-emphasis">30-day money-back guarantee.</span></p>
            <button type="button" class="btn btn-lg btn-dark rounded-pill">Add to cart</button>
          </div>
          <div class="col-10 col-sm-8 col-md-7 col-xl-6 offset-xl-1">
            <div class="tab-content">
              <div class="tab-pane show active" id="freshness" role="tabpanel" aria-labelledby="freshness-color">
                <div class="ratio" style="--cz-aspect-ratio: calc(562 / 636 * 100%)">
                  <img src="/themes/cartzilla/assets/img/home/single-product/colors/freshness.png" alt="Freshness">
                </div>
              </div>
              <div class="tab-pane" id="sunflower" role="tabpanel" aria-labelledby="sunflower-color">
                <div class="ratio" style="--cz-aspect-ratio: calc(562 / 636 * 100%)">
                  <img src="/themes/cartzilla/assets/img/home/single-product/colors/sunflower.png" alt="Sunflower">
                </div>
              </div>
              <div class="tab-pane" id="heavenly" role="tabpanel" aria-labelledby="heavenly-color">
                <div class="ratio" style="--cz-aspect-ratio: calc(562 / 636 * 100%)">
                  <img src="/themes/cartzilla/assets/img/home/single-product/colors/heavenly.png" alt="Heavenly">
                </div>
              </div>
              <div class="tab-pane" id="darkness" role="tabpanel" aria-labelledby="darkness-color">
                <div class="ratio" style="--cz-aspect-ratio: calc(562 / 636 * 100%)">
                  <img src="/themes/cartzilla/assets/img/home/single-product/colors/darkness.png" alt="Darkness">
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <!-- Reviews -->
      <section class="pt-2 pt-sm-3 pt-md-4 pt-lg-5 pb-5 my-xxl-3">
        <div class="position-relative py-2 py-sm-3 py-md-4 py-lg-5">
          <div class="container position-relative z-2 py-5 my-xxl-3">

            <!-- Header -->
            <div class="d-flex flex-column flex-sm-row align-items-sm-center justify-content-between gap-2 gap-sm-4 pb-xl-0-3 mb-4 mb-xl-5">
              <h2 class="display-4 text-center text-sm-start mb-0">They are happy with Bottle</h2>
              <div class="nav justify-content-center justify-content-sm-start">
                <a class="nav-link fs-base position-relative text-center text-sm-start px-0" href="#!">
                  <span class="hover-effect-underline stretched-link">2000+ real reviews on our Instagram</span>
                  <i class="ci-chevron-right fs-lg ms-1 me-n1"></i>
                </a>
              </div>
            </div>

            <!-- Reviews grid -->
            <div class="row g-4">
              <div class="col-lg-4 d-flex flex-column flex-md-row flex-lg-column gap-4">

                <!-- Review -->
                <div class="card w-100 bg-transparent border-0 rounded-5 overflow-hidden p-xl-2">
                  <div class="card-body position-relative z-1 pb-1 pb-lg-2 pb-xl-3">
                    <div class="d-flex gap-1 text-warning mb-3">
                      <i class="ci-star-filled"></i>
                      <i class="ci-star-filled"></i>
                      <i class="ci-star-filled"></i>
                      <i class="ci-star-filled"></i>
                      <i class="ci-star-filled"></i>
                    </div>
                    <h3 class="h5 pb-2 mb-1">Perfect for daily use!</h3>
                    <p class="mb-0">I bought the metallic blue bottle, and it has quickly become my go-to for everything! It keeps my water cold all day, even during my long shifts at work. Absolutely love it 🤩</p>
                  </div>
                  <div class="card-footer position-relative z-1 d-flex align-items-center bg-transparent border-0 py-4">
                    <div class="ratio ratio-1x1 flex-shrink-0 bg-body-secondary rounded-circle overflow-hidden" style="width: 44px">
                      <img src="/themes/cartzilla/assets/img/home/single-product/reviews/ava01.jpg" alt="Avatar">
                    </div>
                    <div class="fs-sm ps-2 ms-1">
                      <div class="fw-semibold text-dark-emphasis">Jenny Wilson</div>
                      <div>Freshness Bottle</div>
                    </div>
                  </div>
                  <span class="position-absolute top-0 start-0 w-100 h-100 bg-white d-none-dark"></span>
                  <span class="position-absolute top-0 start-0 w-100 h-100 bg-white d-none d-block-dark" style="opacity: .08"></span>
                </div>

                <!-- Review -->
                <div class="card w-100 bg-transparent border-0 rounded-5 overflow-hidden p-xl-2">
                  <div class="card-body position-relative z-1 pb-1 pb-lg-2 pb-xl-3">
                    <div class="d-flex gap-1 text-warning mb-3">
                      <i class="ci-star-filled"></i>
                      <i class="ci-star-filled"></i>
                      <i class="ci-star-filled"></i>
                      <i class="ci-star-filled"></i>
                      <i class="ci-star-filled"></i>
                    </div>
                    <h3 class="h5 pb-2 mb-1">Stays fresh and odor-free</h3>
                    <p class="mb-0">I love that this bottle doesn't retain any odors or flavors from previous drinks. I switch between coffee, juice, and water, and it always tastes fresh. The durability is also impressive. I've dropped it a few times, and it still looks brand new! ✨</p>
                  </div>
                  <div class="card-footer position-relative z-1 d-flex align-items-center bg-transparent border-0 py-4">
                    <div class="ratio ratio-1x1 flex-shrink-0 bg-body-secondary rounded-circle overflow-hidden" style="width: 44px">
                      <img src="/themes/cartzilla/assets/img/home/single-product/reviews/ava02.jpg" alt="Avatar">
                    </div>
                    <div class="fs-sm ps-2 ms-1">
                      <div class="fw-semibold text-dark-emphasis">Jacob Jones</div>
                      <div>Freshness Bottle</div>
                    </div>
                  </div>
                  <span class="position-absolute top-0 start-0 w-100 h-100 bg-white d-none-dark"></span>
                  <span class="position-absolute top-0 start-0 w-100 h-100 bg-white d-none d-block-dark" style="opacity: .08"></span>
                </div>
              </div>
              <div class="col-lg-4 d-flex flex-column flex-md-row flex-lg-column gap-4">

                <!-- Review -->
                <div class="card w-100 bg-transparent border-0 rounded-5 overflow-hidden p-xl-2">
                  <div class="card-body position-relative z-1 pb-1 pb-lg-2 pb-xl-3">
                    <div class="d-flex gap-1 text-warning mb-3">
                      <i class="ci-star-filled"></i>
                      <i class="ci-star-filled"></i>
                      <i class="ci-star-filled"></i>
                      <i class="ci-star-filled"></i>
                      <i class="ci-star-filled"></i>
                    </div>
                    <h3 class="h5 pb-2 mb-1">Great for the gym</h3>
                    <p class="mb-0">I've taken this bottle to the gym every day for the past month, and it's still in perfect condition. The leak-proof design is a lifesaver, and the bright red color really stands out in my bag. Only wish it held a bit more water, but otherwise, it's fantastic!</p>
                  </div>
                  <div class="card-footer position-relative z-1 d-flex align-items-center bg-transparent border-0 py-4">
                    <div class="ratio ratio-1x1 flex-shrink-0 bg-body-secondary rounded-circle overflow-hidden" style="width: 44px">
                      <img src="/themes/cartzilla/assets/img/home/single-product/reviews/ava03.jpg" alt="Avatar">
                    </div>
                    <div class="fs-sm ps-2 ms-1">
                      <div class="fw-semibold text-dark-emphasis">Robert Fox</div>
                      <div>Heavenly Bottle</div>
                    </div>
                  </div>
                  <span class="position-absolute top-0 start-0 w-100 h-100 bg-white d-none-dark"></span>
                  <span class="position-absolute top-0 start-0 w-100 h-100 bg-white d-none d-block-dark" style="opacity: .08"></span>
                </div>

                <!-- Review -->
                <div class="card w-100 bg-transparent border-0 rounded-5 overflow-hidden p-xl-2">
                  <div class="card-body position-relative z-1 pb-1 pb-lg-2 pb-xl-3">
                    <div class="d-flex gap-1 text-warning mb-3">
                      <i class="ci-star-filled"></i>
                      <i class="ci-star-filled"></i>
                      <i class="ci-star-filled"></i>
                      <i class="ci-star-filled"></i>
                      <i class="ci-star-filled"></i>
                    </div>
                    <h3 class="h5 pb-2 mb-1">Perfect for travel</h3>
                    <p class="mb-0">I bought this bottle for a recent trip, and it was amazing 🔥. It kept my coffee hot during the entire flight and fit perfectly in my bag without leaking.</p>
                  </div>
                  <div class="card-footer position-relative z-1 d-flex align-items-center bg-transparent border-0 py-4">
                    <div class="ratio ratio-1x1 flex-shrink-0 bg-body-secondary rounded-circle overflow-hidden" style="width: 44px">
                      <img src="/themes/cartzilla/assets/img/home/single-product/reviews/ava04.jpg" alt="Avatar">
                    </div>
                    <div class="fs-sm ps-2 ms-1">
                      <div class="fw-semibold text-dark-emphasis">Leslie Alexander</div>
                      <div>Darkness Bottle</div>
                    </div>
                  </div>
                  <span class="position-absolute top-0 start-0 w-100 h-100 bg-white d-none-dark"></span>
                  <span class="position-absolute top-0 start-0 w-100 h-100 bg-white d-none d-block-dark" style="opacity: .08"></span>
                </div>
              </div>
              <div class="col-lg-4 d-flex flex-column flex-md-row flex-lg-column gap-4">

                <!-- Review -->
                <div class="card w-100 bg-transparent border-0 rounded-5 overflow-hidden p-xl-2">
                  <div class="card-body position-relative z-1 pb-1 pb-lg-2 pb-xl-3">
                    <div class="d-flex gap-1 text-warning mb-3">
                      <i class="ci-star-filled"></i>
                      <i class="ci-star-filled"></i>
                      <i class="ci-star-filled"></i>
                      <i class="ci-star-filled"></i>
                      <i class="ci-star-filled"></i>
                    </div>
                    <h3 class="h5 pb-2 mb-1">Stylish and functional</h3>
                    <p class="mb-0">I was looking for a bottle that was both stylish and durable, and this one exceeded my expectations ❤️. The rose gold finish is stunning, and it keeps my tea hot for hours.</p>
                  </div>
                  <div class="card-footer position-relative z-1 d-flex align-items-center bg-transparent border-0 py-4">
                    <div class="ratio ratio-1x1 flex-shrink-0 bg-body-secondary rounded-circle overflow-hidden" style="width: 44px">
                      <img src="/themes/cartzilla/assets/img/home/single-product/reviews/ava05.jpg" alt="Avatar">
                    </div>
                    <div class="fs-sm ps-2 ms-1">
                      <div class="fw-semibold text-dark-emphasis">Bessie Cooper</div>
                      <div>Sunflower Bottle</div>
                    </div>
                  </div>
                  <span class="position-absolute top-0 start-0 w-100 h-100 bg-white d-none-dark"></span>
                  <span class="position-absolute top-0 start-0 w-100 h-100 bg-white d-none d-block-dark" style="opacity: .08"></span>
                </div>

                <!-- Video review -->
                <div class="position-relative w-100 rounded-5 overflow-hidden">
                  <div class="d-lg-none" style="height: 300px"></div>
                  <div class="d-none d-lg-block" style="height: 364px"></div>
                  <div class="position-absolute top-0 start-0 w-100 h-100 z-3 p-4">
                    <a class="btn btn-lg btn-light stretched-link rounded-pill mt-xl-2 ms-xl-2" href="https://www.youtube.com/watch?v=ME5CirMkFZE" data-glightbox="" data-gallery="video2">
                      <i class="ci-play fs-lg me-2 ms-n1"></i>
                      Play
                    </a>
                  </div>
                  <div class="position-absolute top-0 start-0 d-flex align-items-end w-100 h-100 z-2 p-4">
                    <div class="mb-xl-2 ms-xl-2">
                      <div class="d-flex gap-1 text-warning mb-3">
                        <i class="ci-star-filled"></i>
                        <i class="ci-star-filled"></i>
                        <i class="ci-star-filled"></i>
                        <i class="ci-star-filled"></i>
                        <i class="ci-star-filled"></i>
                      </div>
                      <h3 class="h5 text-white mb-0">Keeps drinks cold for hours</h3>
                    </div>
                  </div>
                  <span class="position-absolute top-0 start-0 w-100 h-100 z-1" style="background: linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(0, 0, 0, 0.50) 100%)"></span>
                  <img src="/themes/cartzilla/assets/img/home/single-product/reviews/video.jpg" class="position-absolute top-0 start-0 w-100 h-100 object-fit-cover" alt="Image">
                </div>
              </div>
            </div>
          </div>

          <!-- Background color -->
          <div class="position-absolute top-0 start-0 w-100 h-100 d-none-dark" style="background: linear-gradient(90deg, rgba(249,235,200,1) 0%, rgba(252,202,197,1) 100%); border-top-right-radius: 48px; border-top-left-radius: 48px"></div>
          <div class="position-absolute top-0 start-0 w-100 h-100 d-none d-block-dark" style="background: linear-gradient(119deg, #333126 0%, #372e2f 52.24%); border-top-right-radius: 48px; border-top-left-radius: 48px"></div>
        </div>
      </section>


      <!-- Social networks + CTA -->
      <section class="container pt-2 pt-sm-3 pb-sm-2 pb-md-3 pt-md-4 py-lg-5 my-xxl-3">
        <div class="row g-3 g-sm-4 mb-3 mb-sm-4 mb-md-0">
          <div class="col-md-6 order-md-2 pt-md-5 mt-xl-2 mb-3 mb-md-0">
            <div class="text-center mx-auto" style="max-width: 500px">
              <h2 class="display-4 pb-1 pb-sm-2 pb-md-3 pb-lg-4">Buy Bottle now and get <span class="text-warning">25% off</span></h2>
              <button type="button" class="btn btn-lg btn-warning rounded-pill">Buy Bottle Now</button>
            </div>
          </div>
          <div class="col-6 col-md-3 order-md-1">
            <a class="d-flex hover-effect-scale position-relative fs-3 text-white bg-body-tertiary rounded-5 overflow-hidden text-decoration-none ms-auto mx-md-auto" href="#!" style="max-width: 196px">
              <i class="ci-youtube position-absolute top-50 start-50 translate-middle z-2"></i>
              <div class="ratio ratio-1x1 hover-effect-target">
                <img src="/themes/cartzilla/assets/img/home/single-product/socials/01.jpg" alt="Image">
              </div>
            </a>
          </div>
          <div class="col-6 col-md-3 order-md-3 pt-md-5 mt-lg-3 mt-xl-5">
            <a class="d-flex hover-effect-scale position-relative fs-3 text-white bg-body-tertiary rounded-5 overflow-hidden text-decoration-none me-auto mx-md-auto" href="#!" style="max-width: 196px">
              <i class="ci-facebook position-absolute top-50 start-50 translate-middle z-2"></i>
              <div class="ratio ratio-1x1 hover-effect-target">
                <img src="/themes/cartzilla/assets/img/home/single-product/socials/02.jpg" alt="Image">
              </div>
            </a>
          </div>
        </div>
        <div class="row g-3 g-sm-4 mt-md-n3 pb-5">
          <div class="col-6 col-md-3 offset-md-1 offset-lg-2">
            <a class="d-flex hover-effect-scale position-relative fs-3 text-white bg-body-tertiary rounded-5 overflow-hidden text-decoration-none ms-auto mx-md-auto" href="#!" style="max-width: 196px">
              <i class="ci-tiktok position-absolute top-50 start-50 translate-middle z-2"></i>
              <div class="ratio ratio-1x1 hover-effect-target">
                <img src="/themes/cartzilla/assets/img/home/single-product/socials/03.jpg" alt="Image">
              </div>
            </a>
          </div>
          <div class="col-6 col-md-3 offset-md-2 offset-lg-1 pt-md-5 mt-lg-3 mt-xl-5">
            <a class="d-flex hover-effect-scale position-relative fs-3 text-white bg-body-tertiary rounded-5 overflow-hidden text-decoration-none me-auto mx-md-auto" href="#!" style="max-width: 196px">
              <i class="ci-instagram position-absolute top-50 start-50 translate-middle z-2"></i>
              <div class="ratio ratio-1x1 hover-effect-target">
                <img src="/themes/cartzilla/assets/img/home/single-product/socials/04.jpg" alt="Image">
              </div>
            </a>
          </div>
        </div>
      </section>
    </main>


    <!-- Page footer -->
    <footer class="footer pb-4">
      <div class="container pb-sm-2 pb-md-3">
        <div class="position-relative py-3 px-4 pe-lg-3 pe-xxl-0">
          <div class="row align-items-center position-relative z-1">
            <div class="col-lg-4 col-xxl-5 order-lg-2 mb-2 mb-lg-0">
              <div class="nav justify-content-center justify-content-lg-start">
                <a class="nav-link animate-underline fs-xs px-3" href="#!">
                  <span class="animate-target">Privacy</span>
                </a>
                <a class="nav-link animate-underline fs-xs px-3" href="#!">
                  <span class="animate-target">Affiliates</span>
                </a>
                <a class="nav-link animate-underline fs-xs px-3" href="#!">
                  <span class="animate-target"> Terms of use</span>
                </a>
              </div>
            </div>
            <div class="col-lg-4 d-flex gap-2 gap-sm-3 justify-content-center order-lg-3 mb-2 mb-lg-0">
              <div>
                <img src="/themes/cartzilla/assets/img/payment-methods/visa-light-mode.svg" class="d-none-dark" alt="Visa">
                <img src="/themes/cartzilla/assets/img/payment-methods/visa-dark-mode.svg" class="d-none d-block-dark" alt="Visa">
              </div>
              <div>
                <img src="/themes/cartzilla/assets/img/payment-methods/paypal-light-mode.svg" class="d-none-dark" alt="PayPal">
                <img src="/themes/cartzilla/assets/img/payment-methods/paypal-dark-mode.svg" class="d-none d-block-dark" alt="PayPal">
              </div>
              <div>
                <img src="/themes/cartzilla/assets/img/payment-methods/mastercard.svg" alt="Mastercard">
              </div>
              <div>
                <img src="/themes/cartzilla/assets/img/payment-methods/google-pay-light-mode.svg" class="d-none-dark" alt="Google Pay">
                <img src="/themes/cartzilla/assets/img/payment-methods/google-pay-dark-mode.svg" class="d-none d-block-dark" alt="Google Pay">
              </div>
              <div>
                <img src="/themes/cartzilla/assets/img/payment-methods/apple-pay-light-mode.svg" class="d-none-dark" alt="Apple Pay">
                <img src="/themes/cartzilla/assets/img/payment-methods/apple-pay-dark-mode.svg" class="d-none d-block-dark" alt="Apple Pay">
              </div>
            </div>
            <div class="col-lg-4 col-xxl-3 order-lg-1">
              <p class="fs-xs text-center text-lg-start mb-0 order-md-1">
                © All rights reserved. Made by <span class="animate-underline"><a class="animate-target text-dark-emphasis text-decoration-none" href="https://createx.studio/" target="_blank" rel="noreferrer">Createx Studio</a></span>
              </p>
            </div>
          </div>
          <div class="position-absolute top-0 start-0 w-100 h-100 d-lg-none">
            <span class="position-absolute top-0 start-0 w-100 h-100 bg-white shadow rounded-5 d-none-dark"></span>
            <span class="position-absolute top-0 start-0 w-100 h-100 bg-body-tertiary rounded-5 d-none d-block-dark"></span>
          </div>
          <div class="position-absolute top-0 start-0 w-100 h-100 d-none d-lg-block">
            <span class="position-absolute top-0 start-0 w-100 h-100 bg-white shadow rounded-pill d-none-dark"></span>
            <span class="position-absolute top-0 start-0 w-100 h-100 bg-body-tertiary rounded-pill d-none d-block-dark"></span>
          </div>
        </div>
      </div>
    </footer>


    <!-- Back to top button -->
    <div class="floating-buttons position-fixed top-50 end-0 z-sticky me-3 me-xl-4 pb-4">
      <a class="btn-scroll-top btn btn-sm bg-body border-0 rounded-pill shadow animate-slide-end" href="#top">
        Top
        <i class="ci-arrow-right fs-base ms-1 me-n1 animate-target"></i>
        <span class="position-absolute top-0 start-0 w-100 h-100 border rounded-pill z-0"></span>
        <svg class="position-absolute top-0 start-0 w-100 h-100 z-1" viewBox="0 0 62 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x=".75" y=".75" width="60.5" height="30.5" rx="15.25" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" style="stroke-dasharray: 155.201; stroke-dashoffset: 155.201;"></rect>
        </svg>
      </a>
      <a class="btn btn-sm btn-outline-secondary text-uppercase bg-body rounded-pill shadow animate-rotate ms-2 me-n5" href="#customizer" style="font-size: .625rem; letter-spacing: .05rem;" data-bs-toggle="offcanvas" role="button" aria-controls="customizer">
        Customize<i class="ci-settings fs-base ms-1 me-n2 animate-target"></i>
      </a>
    </div>



    <!-- Customizer offcanvas -->
    <div class="offcanvas offcanvas-end" id="customizer" tabindex="-1">
      <div class="offcanvas-header border-bottom">
        <h4 class="h5 offcanvas-title">Customize theme</h4>
        <button class="btn-close" type="button" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">

        <!-- Customizer settings -->
        <div class="customizer-collapse collapse show" id="customizerSettings">

          <!-- Colors -->
          <div class="pb-4 mb-2">
            <div class="d-flex align-items-center mb-3">
              <i class="ci-paint text-body-tertiary fs-5 me-2"></i>
              <h5 class="fs-lg mb-0">Colors</h5>
            </div>
            <div class="row row-cols-2 g-3" id="theme-colors">
              <div class="col">
                <h6 class="fs-sm mb-2">Primary</h6>
                <div class="color-swatch d-flex border rounded gap-3 p-2" id="theme-primary" data-color-labels="[&quot;theme-primary&quot;, &quot;primary&quot;, &quot;primary-rgb&quot;]">
                  <input type="text" class="form-control bg-transparent border-0 rounded-0 p-1" value="#f55266">
                  <label for="primary" class="ratio ratio-1x1 flex-shrink-0 w-100 cursor-pointer rounded-circle" style="max-width: 38px; background-color: #f55266"></label>
                  <input type="color" class="visually-hidden" id="primary" value="#f55266">
                </div>
              </div>
              <div class="col">
                <h6 class="fs-sm mb-2">Success</h6>
                <div class="color-swatch d-flex border rounded gap-3 p-2" id="theme-success" data-color-labels="[&quot;theme-success&quot;, &quot;success&quot;, &quot;success-rgb&quot;]">
                  <input type="text" class="form-control bg-transparent border-0 rounded-0 p-1" value="#33b36b">
                  <label for="success" class="ratio ratio-1x1 flex-shrink-0 w-100 cursor-pointer rounded-circle" style="max-width: 38px; background-color: #33b36b"></label>
                  <input type="color" class="visually-hidden" id="success" value="#33b36b">
                </div>
              </div>
              <div class="col">
                <h6 class="fs-sm mb-2">Warning</h6>
                <div class="color-swatch d-flex border rounded gap-3 p-2" id="theme-warning" data-color-labels="[&quot;theme-warning&quot;, &quot;warning&quot;, &quot;warning-rgb&quot;]">
                  <input type="text" class="form-control bg-transparent border-0 rounded-0 p-1" value="#fc9231">
                  <label for="warning" class="ratio ratio-1x1 flex-shrink-0 w-100 cursor-pointer rounded-circle" style="max-width: 38px; background-color: #fc9231"></label>
                  <input type="color" class="visually-hidden" id="warning" value="#fc9231">
                </div>
              </div>
              <div class="col">
                <h6 class="fs-sm mb-2">Danger</h6>
                <div class="color-swatch d-flex border rounded gap-2 p-2" id="theme-danger" data-color-labels="[&quot;theme-danger&quot;, &quot;danger&quot;, &quot;danger-rgb&quot;]">
                  <input type="text" class="form-control bg-transparent border-0 rounded-0 p-1" value="#f03d3d">
                  <label for="danger" class="ratio ratio-1x1 flex-shrink-0 w-100 cursor-pointer rounded-circle" style="max-width: 38px; background-color: #f03d3d"></label>
                  <input type="color" class="visually-hidden" id="danger" value="#f03d3d">
                </div>
              </div>
              <div class="col">
                <h6 class="fs-sm mb-2">Info</h6>
                <div class="color-swatch d-flex border rounded gap-2 p-2" id="theme-info" data-color-labels="[&quot;theme-info&quot;, &quot;info&quot;, &quot;info-rgb&quot;]">
                  <input type="text" class="form-control bg-transparent border-0 rounded-0 p-1" value="#2f6ed5">
                  <label for="info" class="ratio ratio-1x1 flex-shrink-0 w-100 cursor-pointer rounded-circle" style="max-width: 38px; background-color: #2f6ed5"></label>
                  <input type="color" class="visually-hidden" id="info" value="#2f6ed5">
                </div>
              </div>
            </div>
          </div>

          <!-- Direction -->
          <div class="pb-4 mb-2">
            <div class="d-flex align-items-center pb-1 mb-2">
              <i class="ci-sort text-body-tertiary fs-lg me-2" style="transform: rotate(90deg)"></i>
              <h5 class="fs-lg mb-0">Direction</h5>
            </div>
            <div class="d-flex align-items-center justify-content-between border rounded p-3">
              <div class="me-3">
                <h6 class="mb-1">RTL</h6>
                <p class="fs-sm mb-0">Change text direction</p>
              </div>
              <div class="form-check form-switch m-0">
                <input type="checkbox" class="form-check-input" role="switch" id="rtl-switch">
              </div>
            </div>
            <div class="alert alert-info p-2 mt-2 mb-0">
              <div class="d-flex text-body-emphasis fs-xs py-1 pe-1">
                <i class="ci-info text-info fs-lg mb-2 mb-sm-0" style="margin-top: .125rem"></i>
                <div class="ps-2">To switch the text direction of your webpage from LTR to RTL, please consult the detailed instructions provided in the relevant section of our documentation.</div>
              </div>
            </div>
          </div>

          <!-- Border width -->
          <div class="pb-4 mb-2">
            <div class="d-flex align-items-center pb-1 mb-2">
              <i class="ci-menu text-body-tertiary fs-lg me-2"></i>
              <h5 class="fs-lg mb-0">Border width, px</h5>
            </div>
            <div class="slider-input d-flex align-items-center gap-3 border rounded p-3" id="border-input">
              <input type="range" class="form-range" min="0" max="10" step="1" value="1">
              <input type="number" class="form-control" id="border-width" min="0" max="10" value="1" style="max-width: 5.5rem">
            </div>
          </div>

          <!-- Rounding -->
          <div class="d-flex align-items-center pb-1 mb-2">
            <i class="ci-maximize text-body-tertiary fs-lg me-2"></i>
            <h5 class="fs-lg mb-0">Rounding, rem</h5>
          </div>
          <div class="slider-input d-flex align-items-center gap-3 border rounded p-3">
            <input type="range" class="form-range" min="0" max="5" step=".05" value="0.5">
            <input type="number" class="form-control" id="border-radius" min="0" max="5" step=".05" value="0.5" style="max-width: 5.5rem">
          </div>
        </div>

        <!-- Customizer code -->
        <div class="customizer-collapse collapse" id="customizerCode">
          <div class="nav mb-3">
            <a class="nav-link animate-underline fs-base p-0" href=".customizer-collapse" data-bs-toggle="collapse" aria-expanded="true" aria-controls="customizerSettings customizerCode">
              <i class="ci-chevron-left fs-lg ms-n1 me-1"></i>
              <span class="animate-target">Back to settings</span>
            </a>
          </div>
          <p class="fs-sm pb-1">To apply the provided styles to your webpage, enclose them within a <code>&lt;style&gt;</code> tag and insert this tag into the <code>&lt;head&gt;</code> section of your HTML document after the following link to the main stylesheet:<br><code>&lt;link href="/themes/cartzilla/assets/css/theme.min.css"&gt;</code></p>
          <div class="position-relative bg-body-tertiary rounded overflow-hidden pt-3">
            <div class="position-absolute top-0 start-0 w-100 p-3">
              <button type="button" class="btn btn-sm btn-outline-dark w-100" data-copy-text-from="#generated-styles" data-done-label="Code copied">
                <i class="ci-copy fs-sm me-1"></i>
                Copy code
              </button>
            </div>
            <pre class="text-wrap bg-transparent border-0 fs-xs text-body-emphasis p-4 pt-5" id="generated-styles"></pre>
          </div>
        </div>
      </div>

      <!-- Offcanvas footer (Action buttons) -->
      <div class="offcanvas-header border-top gap-3 d-none" id="customizer-btns">
        <button type="button" class="btn btn-lg btn-secondary w-100 fs-sm" id="customizer-reset">
          <i class="ci-trash fs-lg me-2 ms-n1"></i>
          Reset
        </button>
        <button class="btn btn-lg btn-primary hiding-collapse-toggle w-100 fs-sm collapsed" type="button" data-bs-toggle="collapse" data-bs-target=".customizer-collapse" aria-expanded="false" aria-controls="customizerSettings customizerCode">
          <i class="ci-code fs-lg me-2 ms-n1"></i>
          Show code
        </button>
      </div>
    </div>


    <!-- Shopping cart offcanvas (Empty state) -->
    <div class="offcanvas offcanvas-end pb-sm-2 px-sm-2" id="shoppingCart" tabindex="-1" aria-labelledby="shoppingCartLabel" style="width: 500px">
      <div class="offcanvas-header py-3 pt-lg-4">
        <h4 class="offcanvas-title" id="shoppingCartLabel">Shopping cart</h4>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body text-center">
        <svg class="d-block mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" width="60" viewBox="0 0 29.5 30"><path class="text-body-tertiary" d="M17.8 4c.4 0 .8-.3.8-.8v-2c0-.4-.3-.8-.8-.8-.4 0-.8.3-.8.8v2c0 .4.3.8.8.8zm3.2.6c.4.2.8 0 1-.4l.4-.9c.2-.4 0-.8-.4-1s-.8 0-1 .4l-.4.9c-.2.4 0 .9.4 1zm-7.5-.4c.2.4.6.6 1 .4s.6-.6.4-1l-.4-.9c-.2-.4-.6-.6-1-.4s-.6.6-.4 1l.4.9z" fill="currentColor"></path><path class="text-body-emphasis" d="M10.7 24.5c-1.5 0-2.8 1.2-2.8 2.8S9.2 30 10.7 30s2.8-1.2 2.8-2.8-1.2-2.7-2.8-2.7zm0 4c-.7 0-1.2-.6-1.2-1.2s.6-1.2 1.2-1.2 1.2.6 1.2 1.2-.5 1.2-1.2 1.2zm11.1-4c-1.5 0-2.8 1.2-2.8 2.8a2.73 2.73 0 0 0 2.8 2.8 2.73 2.73 0 0 0 2.8-2.8c0-1.6-1.3-2.8-2.8-2.8zm0 4c-.7 0-1.2-.6-1.2-1.2s.6-1.2 1.2-1.2 1.2.6 1.2 1.2-.6 1.2-1.2 1.2zM8.7 18h16c.3 0 .6-.2.7-.5l4-10c.2-.5-.2-1-.7-1H9.3c-.4 0-.8.3-.8.8s.4.7.8.7h18.3l-3.4 8.5H9.3L5.5 1C5.4.7 5.1.5 4.8.5h-4c-.5 0-.8.3-.8.7s.3.8.8.8h3.4l3.7 14.6a3.24 3.24 0 0 0-2.3 3.1C5.5 21.5 7 23 8.7 23h16c.4 0 .8-.3.8-.8s-.3-.8-.8-.8h-16a1.79 1.79 0 0 1-1.8-1.8c0-1 .9-1.6 1.8-1.6z" fill="currentColor"></path></svg>
        <h6 class="mb-2">Your shopping cart is currently empty!</h6>
        <p class="fs-sm mb-4">Add item(s) to the cart to proceed with your purchase.</p>
        <button type="button" class="btn btn-dark rounded-pill" data-bs-dismiss="offcanvas" aria-label="Close">Continue shopping</button>
      </div>
    </div>

    <!-- Vendor scripts -->
    <script src="/themes/cartzilla/assets/vendor/swiper/swiper-bundle.min.js"></script>
    <script src="/themes/cartzilla/assets/vendor/glightbox/glightbox.min.js"></script>

    <!-- Bootstrap + Theme scripts -->
    <script src="/themes/cartzilla/assets/js/theme.min.js"></script>
  

<div id="loom-companion-mv3" ext-id="liecbddmkiiihnedobmlmillhodjkdmb"><div id="shadow-host-companion"></div></div></body></html>
        `;
    }

}