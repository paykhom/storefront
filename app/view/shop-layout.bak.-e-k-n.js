import View from 'paykhom-fw/view';

export class MarketplaceLayout extends View /* TODO: Theme*/ {
   


   *style(){yield html``;}
   *content(){yield html``;}
   *script(){yield html``;}
   
    *head() {
yield html`
   
   `;    } 
    *template($params) { `<!DOCTYPE html>
<html lang="en-US" itemscope="itemscope" itemtype="http://schema.org/WebPage">
   <head>
      <!-- Required meta tags -->
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      ${this.render(this.head())}
      <meta content="Paykhom Limited" name="author"/>




      <!-- preload -->
      <!-- Favicon icon-->
      <link rel="preload" type="image/x-icon" href="/theme/freshcart/assets/images/favicon/favicon.ico" as="icon"/>
      

      <!-- images -->
      <link rel="preload" href="/_assets/images/info/bg-001-0-deg.png" as="image/png"/>

      <!-- Theme CSS -->
      <link rel="preload" href="/theme/freshcart/assets/css/theme.min.css" as="style"/>

      <!-- <link rel="preload" href="/theme/freshcart/assets/libs/tiny-slider/dist/tiny-slider.css" as="style"/>
      <link rel="preload" href="/theme/freshcart/assets/libs/slick-carousel/slick/slick.css" as="style"/>
      <link rel="preload" href="/theme/freshcart/assets/libs/slick-carousel/slick/slick-theme.css" as="style"/> -->

      <!-- Libs CSS -->
      <!-- <link rel="preload" href="/theme/freshcart/assets/libs/bootstrap-icons/font/bootstrap-icons.min.css" as="style"/>
      <link rel="preload" href="/theme/freshcart/assets/libs/feather-webfont/dist/feather-icons.css" as="style"/>
      <link rel="preload" href="/theme/freshcart/assets/libs/simplebar/dist/simplebar.min.css" as="style"/> -->

      <!-- /preload -->


      <link href="/theme/freshcart/assets/libs/tiny-slider/dist/tiny-slider.css" rel="stylesheet" />
      <link href="/theme/freshcart/assets/libs/slick-carousel/slick/slick.css" rel="stylesheet" />
      <link href="/theme/freshcart/assets/libs/slick-carousel/slick/slick-theme.css" rel="stylesheet" />
      <!-- Favicon icon-->
      <link rel="shortcut icon" type="image/x-icon" href="/theme/freshcart/assets/images/favicon/favicon.ico" />

      <!-- Libs CSS -->
      <link href="/theme/freshcart/assets/libs/bootstrap-icons/font/bootstrap-icons.min.css" rel="stylesheet" />
      <link href="/theme/freshcart/assets/libs/feather-webfont/dist/feather-icons.css" rel="stylesheet" />
      <link href="/theme/freshcart/assets/libs/simplebar/dist/simplebar.min.css" rel="stylesheet" />
      

      <link href="/_assets/pkg/fontawesome-free-6.7.2-web/css/all.css" rel="stylesheet" />

      <!-- Theme CSS -->
      <link rel="stylesheet" href="/theme/freshcart/assets/css/theme.min.css" />


      <style>
         /* EKN */
         /* body {
           display: none;
           transition: opacity 0.3s ease-in-out;
         }

         body.loaded{
            display: block;
            opacity:1;
         }
         */



         body {
            background-color: #bdcdfd;
            background: url(/_assets/images/info/bg-001-0-deg.png); 
            background-size: contain; 
            background-repeat: no-repeat            
         }
         
         body {
            overflow-y:scroll !important; /* amazing! */
         }
         body.modal-open {
            padding-right: 0px !important;
         }

         xmain {
            background-image: linear-gradient(#fff,#d5dbf5 24%,#f1e0da 47%,#ebe5f9 72%,#e4eef7)            
         }
         img {
            -webkit-filter: brightness(1) contrast(1.075) saturate(1.075);
            filter:  brightness(1) contrast(1.075) saturate(1.075);
         }

         img:hover {
            -webkit-filter: brightness(1) contrast(1.15) saturate(1.15);
            filter:  brightness(1) contrast(1.15) saturate(1.15);
         }
         
         /* /EKN */

      </style>
                   

      ${this.render(this.style())}

   </head>

   <!-- <body style="background-color: #f5f5f5"> -->
   <body>

      <!-- navigation -->
      <!-- <header class="bg-dark"> -->
      <header class="xbg-dark" style="background-color: #ddd0">

         <div class="container-fluid">
            
            <div class="row align-items-center xpt-4 xpb-4 xmt-4 xmt-lg-0">
               <div class="col-lg-3 col-md-12 mb-4 mb-md-0 text-center text-md-start">
                  <a  tooltip="Paykhom Limited" href="/">
                     <img  loading="lazy" data-src="/paykhom-nobg.png" style="margin-top: -8px; width: 64px" alt="Paykhom Limited"/>
                     <!-- <span style="xmargin-top: 8px; font-weight:bold; font-size: 24pt; color: lightgray">Paykhom</span> -->
                     <span style="xmargin-top: 8px; font-weight:bold; font-size: 24pt; color: royalblue">Paykhom</span>

                  </a>

                  <!-- 
                  <a href="/">
                     <div class="text-center">
                              <div>
                              <img  loading="lazy" data-src="/paykhom-nobg.png" style="width: 32px" alt="Paykhom Limited" />
                              </div>
                              <p class="mb-0 d-none d-xl-block small">Paykhom</p>
                     </div>                  
                  </a>                  
                  -->

               </div>

               <div class="col-lg-6 col-md-12">
                  <form id="frm_global_search" action="#">
                     <div class="input-group">
                        <input class="form-control" type="search" placeholder="Search for products" aria-label="Global Search" aria-describedby="btn_global_search" style="background-color: #ddd" />
                        <button class="btn btn-primary" type="button" id="btn_global_search">Search</button>

                        <div class="dropdown-menu">
                           <div class="search-details">
                              <ul class="nav nav-tabs">
                                    <li data-tab="tab-prod" class="active">Products</li>
                                    <li data-tab="tab-cat" class="">Categories</li>
                                 </ul>
                                 <div id="tab-prod" class="search-results" style="display: block;"><div class="search-item"><a href="https://www.startech.com.bd/amd-ryzen-7-5800x-gaming-desktop-pc"><div class="image"><img  loading="lazy" data-src="https://www.startech.com.bd/image/cache/catalog/desktop-pc/desktop-offer/ryzen-7-5800x-gaming-desktop-pc-0001-80x80.webp"></div><div class="name">AMD Ryzen 7 5800X Gaming Desktop PC</div><div class="price"><ins>124,999৳</ins> &nbsp; <del>127,200৳</del></div></a></div><div class="search-item"><a href="https://www.startech.com.bd/amd-ryzen-5-2400g-processor"><div class="image"><img  loading="lazy" data-src="https://www.startech.com.bd/image/cache/catalog/processor/amd/ryzen-5-2400g/ryzen-5-2400g-001-80x80.webp"></div><div class="name">AMD Ryzen 5 2400G Desktop Processor with Radeon RX Vega 11 Graphics</div><div class="price"><ins>7,400৳</ins> &nbsp; <del>8,000৳</del></div></a></div><div class="search-item"><a href="https://www.startech.com.bd/msi-a520m-a-pro-motherboard"><div class="image"><img  loading="lazy" data-src="https://www.startech.com.bd/image/cache/catalog/motherboard/msi/a520m-a-pro/a520m-a-pro-80x80.jpg"></div><div class="name">MSI A520M-A Pro AM4 AMD Micro-ATX Motherboard</div><div class="price"><ins>8,000৳</ins> &nbsp; <del>8,300৳</del></div></a></div><div class="search-item"><a href="https://www.startech.com.bd/asrock-b450m-hdv-r4-amd-motherboard"><div class="image"><img  loading="lazy" data-src="https://www.startech.com.bd/image/cache/catalog/motherboard/asrock/b450m-hdv-r4/b450m-hdv-r4-80x80.jpg"></div><div class="name">ASRock B450M-HDV R4.0 AMD Motherboard</div><div class="price">8,400৳</div></a></div><div class="search-item"><a href="https://www.startech.com.bd/asrock-a520m-hvs-motherboard"><div class="image"><img  loading="lazy" data-src="https://www.startech.com.bd/image/cache/catalog/motherboard/asrock/a520m-hvs/a520m-hvs-01-80x80.webp"></div><div class="name">ASRock A520M-HVS AMD AM4 Micro ATX Motherboard</div><div class="price"><ins>8,100৳</ins> &nbsp; <del>8,450৳</del></div></a></div><div class="search-item remainder-count"><a href="https://www.startech.com.bd/product/search?search=ryzen">See all results</a></div></div>
                                 <div id="tab-cat" class="search-results" style="display: none;"><div class="search-item"><a href="https://www.startech.com.bd/desktops/gaming-pc/amd-gaming-pc"><div class="image"><img  loading="lazy" data-src="https://www.startech.com.bd/image/cache/catalog/brand-logo/amd-01-80x80.png"></div><div class="name">RYZEN Gaming Desktop PC</div></a></div><div class="search-item"><a href="https://www.startech.com.bd/amd-ryzen-3-laptop"><div class="image"><img  loading="lazy" data-src="https://www.startech.com.bd/image/cache/catalog/brand-logo/amd-01-80x80.png"></div><div class="name">AMD Ryzen 3 Laptop</div></a></div><div class="search-item"><a href="https://www.startech.com.bd/amd-ryzen-5-laptop"><div class="image"><img  loading="lazy" data-src="https://www.startech.com.bd/image/cache/catalog/brand-logo/amd-01-80x80.png"></div><div class="name">AMD Ryzen 5 Laptop</div></a></div><div class="search-item"><a href="https://www.startech.com.bd/amd-ryzen-7-laptop"><div class="image"><img  loading="lazy" data-src="https://www.startech.com.bd/image/cache/catalog/brand-logo/amd-01-80x80.png"></div><div class="name">AMD Ryzen 7 Laptop</div></a></div><div class="search-item"><a href="https://www.startech.com.bd/amd-ryzen-9-laptop"><div class="image"><img  loading="lazy" data-src="https://www.startech.com.bd/image/cache/catalog/brand-logo/amd-01-80x80.png"></div><div class="name">AMD Ryzen 9 Laptop</div></a></div></div>
                           </div>

                        </div>                        



                     </div>
                  </form>
               </div>
               <div class="col-lg-3 col-md-12 xd-lg-block">
                  <div class="d-flex align-items-center justify-content-between ms-4 mt-4">



                     <!-- <div xclass="w-25 icon-hover py-4" class="text-center ms-6 icon-hover">
                        <button
                           class="navbar-toggler collapsed d-xxl-none"
                           type="button"
                           data-bs-toggle="offcanvas"
                           data-bs-target="#navbar-default"
                           aria-controls="navbar-default"
                           aria-expanded="false"
                           aria-label="Toggle navigation">
                           <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-text-indent-left text-primary" viewBox="0 0 16 16">
                              <path
                                 d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm.646 2.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L4.293 8 2.646 6.354a.5.5 0 0 1 0-.708zM7 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                           </svg>
                        </button>
                     </div>
                     -->

                     <div class="text-center ms-6">
                        <a data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" href="#" role="button" aria-controls="offcanvasRight" class="text-reset">
                           <!-- <div class="text-center">
                              <div>
                                 <i class="bi bi-cart2 fs-4"></i>
                              </div>
                              <p class="mb-0 d-none d-xl-block small">Cart</p>
                           </div> -->
                           <div class="lh-1">
                              <div class="mb-2">
                                 <i class="bi bi-archive fs-4"></i>
                              </div>
                              <p class="mb-0 d-none d-xl-block small">Cart</p>
                           </div>
                        </a>
                     </div>

                     <div class="text-center ms-6">
                        <a href="/user/shopping/order" class="text-reset">
                           <div class="lh-1">
                              <div class="mb-2">
                                 <i class="bi bi-archive fs-4"></i>
                              </div>
                              <p class="mb-0 d-none d-xl-block small">Orders</p>
                           </div>
                        </a>
                     </div>

                     <div class="text-center ms-6">
                        <div class="dropdown">
                           <a href="#" class="text-reset" data-bs-toggle="dropdown" aria-expanded="false">
                              <div class="lh-1">
                                 <div class="position-relative d-inline-block mb-2">
                                    <i class="bi bi-bell fs-4"></i>
                                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                       0
                                       <span class="visually-hidden">unread messages</span>
                                    </span>
                                 </div>
                                 <p class="mb-0 d-none d-xl-block small">Notification</p>
                              </div>
                           </a>

                           <div class="dropdown-menu dropdown-menu-lg p-0">
                              <div>
                                 <h6 class="px-4 border-bottom py-3 mb-0">Notification</h6>
                                 <p class="mb-0 px-4 py-3">
                                    No Notification to show
                                 </p>
                              </div>
                           </div>



                        </div>
                     </div>

                     
                     
                     <div class="text-center ms-6">
`; if(!this.session_state["isAuthenticated"]) { `

                        <a href="#" class="text-reset" data-bs-toggle="modal" data-bs-target="#login_modal">
                           <div class="lh-1">
                              <div class="mb-2">
                                 <i class="bi bi-person-circle fs-4"></i>
                              </div>
                              <p class="mb-0 d-none d-xl-block small">Login</p>
                           </div>
                        </a>
`; 
}
else {
yield html`
                        <a href="/logout" class="text-reset">
                           <div class="lh-1">
                              <div class="mb-2">
                                 <i class="bi bi-person-circle fs-4"></i>
                              </div>
                              <p class="mb-0 d-none d-xl-block small">Logout</p>
                           </div>

                        </a>

`;} 

yield html`

                     </div>

                     
                  </div>
               </div>
            </div>
         </div>
      </header>

      <!-- <nav class="navbar navbar-expand-lg navbar-light navbar-default p-0 p-sm-0 navbar-offcanvas-color" aria-label="Offcanvas navbar large" style="background-color: #ddd"> -->
      <nav class="navbar navbar-expand xnavbar-expand-xxl navbar-light navbar-default p-0 p-sm-0 navbar-offcanvas-color" aria-label="Offcanvas navbar large" style="background-color: #ddd0">
         <div class="container-fluid">
            <div class="offcanvas offcanvas-start" tabindex="-1" id="navbar-default" aria-labelledby="navbar-defaultLabel">
               <div class="offcanvas-header pb-1">
                  <a href="/"><img  loading="lazy" data-src="/paykhom-nobg.png" alt="Paykhom Limited" width="40px" />Paykhom Limited</a>
                  <button id="btn_close_cart" type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
               </div>
               <div class="offcanvas-body">
                  <div>
                     <ul class="navbar-nav align-items-start" style="text-wrap-mode: nowrap">
                        <li class="nav-item dropdown">
                           <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Electronics</a>
                           <ul class="dropdown-menu" style="overflow-y: scroll;max-height: 400px;">

                              <li class="nav-item">
                                 <a class="nav-link" href="/shopping/category/accessories/page/1">Accessories</a>
                              </li>
                              <li class="nav-item">
                                 <a class="nav-link" href="/shopping/category/appliance/page/1">Appliance</a>
                              </li>
                              <li class="nav-item">
                                 <a class="nav-link" href="/shopping/category/camera/page/1">Camera</a>
                              </li>
                              <li class="nav-item">
                                 <a class="nav-link" href="/shopping/category/component/page/1">Component</a>
                              </li>
                              <li class="nav-item">
                                 <a class="nav-link" href="/shopping/category/desktop/page/1">Desktop</a>
                              </li>
                              <li class="nav-item">
                                 <a class="nav-link" href="/shopping/category/gadget/page/1">Gadget</a>
                              </li>
                              <li class="nav-item">
                                 <a class="nav-link" href="/shopping/category/gaming/page/1">Gaming</a>
                              </li>
                              <li class="nav-item">
                                 <a class="nav-link" href="/shopping/category/laptop/page/1">Laptop</a>
                              </li>
                              <li class="nav-item">
                                 <a class="nav-link" href="/shopping/category/monitor/page/1">Monitor</a>
                              </li>
                              <li class="nav-item">
                                 <a class="nav-link" href="/shopping/category/networking/page/1">Networking</a>
                              </li>
                              <li class="nav-item">
                                 <a class="nav-link" href="/shopping/category/office-equipment/page/1">Office Equipment</a>
                              </li>
                              <li class="nav-item">
                                 <a class="nav-link" href="/shopping/category/phone/page/1">Phone</a>
                              </li>
                              <li class="nav-item">
                                 <a class="nav-link" href="/shopping/category/security/page/1">Security</a>
                              </li>
                              <li class="nav-item">
                                 <a class="nav-link" href="/shopping/category/server-storage/page/1">Server & Storage</a>
                              </li>
                              <li class="nav-item">
                                 <a class="nav-link" href="/shopping/category/software/page/1">Software</a>
                              </li>
                              <li class="nav-item">
                                 <a class="nav-link" href="/shopping/category/tablet/page/1">Tablet</a>
                              </li>
                              <li class="nav-item">
                                 <a class="nav-link" href="/shopping/category/tv/page/1">TV</a>
                              </li>
                              <li class="nav-item">
                                 <a class="nav-link" href="/shopping/category/ups/page/1">UPS</a>
                              </li>

                           </ul>



                        </li>


                        <!-- <li class="nav-item">
                           <a class="nav-link" href="/shopping/brand/page/1">Brands</a>
                        </li> -->
                        <!-- <li class="nav-item">
                           <a class="nav-link" href="/shopping/product/page/1">Products</a>
                        </li> -->

                        <li class="nav-item dropdown">

                           <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Account</a>
                           <ul class="dropdown-menu">
`; if(!this.session_state["isAuthenticated"]) { `
                              <li><a class="dropdown-item" href="/login">Login</a></li>
                              <li><a class="dropdown-item" href="/signup">Signup</a></li>
                              <li><a class="dropdown-item" href="/forgot-password">Forgot Password</a></li>
`; } `                        

                              <li class="dropdown-submenu dropend">
                                 <a class="dropdown-item dropdown-list-group-item dropdown-toggle" href="#">My Account</a>
                                 <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="/user/shopping/order">Orders</a></li>
                                    <li><a class="dropdown-item" href="/user/account/profile">Profile</a></li>
                                    <!-- <li><a class="dropdown-item" href="/user/address">Address</a></li> -->
                                    <!-- <li><a class="dropdown-item" href="#">Payment Method</a></li> -->
                                    <li><a class="dropdown-item" href="/user/account/notification">Notification</a></li>
                                 </ul>
                              </li>
                           </ul>
                        </li>
                        <!-- <li class="nav-item">
                           <a class="nav-link" href="/user/shopping/order">Dashboard</a>
                        </li> -->
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </nav>



      ${this.render(this.content())}



      <!-- Shop Cart -->

      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
         <div class="offcanvas-header border-bottom">
            <div class="text-start">
               <h5 id="offcanvasRightLabel" class="mb-0 fs-4">Your Shopping Cart</h5>
               <!-- <small>Location in 382480</small> -->
            </div>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
         </div>
         <div class="offcanvas-body">
            <div>
               <!-- alert -->
               <!-- <div class="alert alert-danger p-2" role="alert">
                  You’ve got FREE delivery. Start
                  <a href="#!" class="alert-link">checkout now!</a>
               </div> -->

               <ul id = "cart_body" class="list-group list-group-flush">
                  <!-- cart items... -->
               </ul>

					<div class="mb-5 card mt-6">
						<div class="card-body p-6">
							<!-- heading -->
							<h2 class="h5 mb-4">Summary</h2>
							<div class="card mb-2">
								<!-- list group -->
								<ul class="list-group list-group-flush">
									<!-- list group item -->
									<li class="list-group-item d-flex justify-content-between align-items-start">
										<div class="me-auto">
											<div>Subtotal</div>
										</div>
										<span data-state="cart_subtotal"></span>
									</li>

									<!-- list group item -->
									<li class="list-group-item d-flex justify-content-between align-items-start">
										<div class="me-auto">
											<div >Delivery Charge</div>
										</div>
										<span data-state="cart_delivery_charge"></span>
									</li>
									<!-- list group item -->
									<li class="list-group-item d-flex justify-content-between align-items-start">
										<div class="me-auto">
											<div class="fw-bold">Total</div>
										</div>
										<span class="fw-bold" data-state="cart_total"></span>
									</li>
								</ul>
							</div>
							<!-- <div class="d-grid mb-1 mt-4">
							</div> -->
							<!-- text -->
							<p>
								<small>
									By placing your order, you agree to be bound by the
									<a href="#!">Terms of Service</a>
									and
									<a href="#!">Privacy Policy.</a>
								</small>
							</p>

							<!-- heading -->
							
						</div>
					</div>

               <!-- btn -->
               <div class="d-flex justify-content-between mt-4">
                  <!-- <a href="#!" class="btn btn-primary btn-lg d-flex justify-content-between align-items-center">Continue Shopping</a> -->
                  <!-- <a href="#!" class="btn btn-dark">Update Cart</a> -->

                  <a href="/user/shopping/checkout" class="btn btn-primary btn-lg d-flex justify-content-between align-items-center cart-goto-checkout" >
                     Go to Checkout
                     <span class="fw-bold"  data-state="cart_total"></span>
                  </a>

               </div>
            </div>
         </div>
      </div>
      
      <!-- Modal : Signup -->

      <div class="modal fade" id="signup_modal" tabindex="-1" aria-labelledby="userModalLabel" aria-hidden="true">
         <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content p-4">
               <div class="modal-header border-0">
                  <h5 class="modal-title fs-3 fw-bold" id="userModalLabel">Sign Up</h5>

                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
               </div>
               <div class="modal-body">
               <form class="needs-validation" novalidate="">
                        <div class="row g-3">
                           <!-- col -->
                           <div class="col">
                              <!-- input -->
                              <label for="first_name_modal" class="form-label visually-hidden">First Name</label>
                              <input type="text" class="form-control" id="first_name_modal" placeholder="First Name" required="">
                              <div class="invalid-feedback">Please enter first name.</div>
                           </div>
                           <div class="col">
                              <!-- input -->
                              <label for="last_name_modal" class="form-label visually-hidden">Last Name</label>
                              <input type="text" class="form-control" id="last_name_modal" placeholder="Last Name" required="">
                              <div class="invalid-feedback">Please enter last name.</div>
                           </div>
                           <div class="col-12">
                              <!-- input -->
                              <label for="email_modal" class="form-label visually-hidden">Email address</label>
                              <input type="email" class="form-control" id="email_modal" placeholder="Email" required="">
                              <div class="invalid-feedback">Please enter email.</div>
                           </div>
                           <div class="col-12">
                              <!-- input -->
                              <label for="mobile_modal" class="form-label visually-hidden">Mobile</label>
                              <input type="email" class="form-control" id="mobile_modal" placeholder="Mobile" required="">
                              <div class="invalid-feedback">Please enter Mobile.</div>
                           </div>

                           <div class="col-12">
                              <div class="password-field position-relative">
                                 <label for="password_modal" class="form-label visually-hidden">Password</label>
                                 <div class="password-field position-relative">
                                    <input type="password" class="form-control fakePassword" id="password_modal" placeholder="Password" required="">
                                    <span><i class="bi bi-eye-slash passwordToggler"></i></span>
                                    <div class="invalid-feedback">Please enter password.</div>
                                 </div>
                              </div>
                           </div>

                           <div class="col-12">
                              <div class="password-field position-relative">
                                 <label for="confirm_password_modal" class="form-label visually-hidden">Confirm Password</label>
                                 <div class="password-field position-relative">
                                    <input type="password" class="form-control fakePassword" id="confirm_password_modal" placeholder="Confirm Password" required="">
                                    <span><i class="bi bi-eye-slash passwordToggler"></i></span>
                                    <div class="invalid-feedback">Please enter password again.</div>
                                 </div>
                              </div>
                           </div>


                           <!-- btn -->
                           <div id="btn_signup_modal" class="col-12 d-grid"><input type="button" value="Signup" class="btn btn-primary"></div>

                           <!-- text -->
                           <p>
                              <small>
                                 By continuing, you agree to our
                                 <a href="#!">Terms of Service</a>
                                 &amp;
                                 <a href="#!">Privacy Policy</a>
                              </small>
                           </p>
                        </div>
                     </form>
               </div>
               <div class="modal-footer border-0 justify-content-center">
                  Already have an account?
                  <a class="xbtn xbtn-primary" data-bs-toggle="modal" href="#login_modal" role="button">Login</a>
               </div>
            </div>
         </div>
      </div>

      <!-- Modal : Login -->
      <div class="modal fade" id="login_modal" tabindex="-1" aria-labelledby="userModalLabel" aria-hidden="true">
         <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content p-4">
               <div class="modal-header border-0">
                  <h5 class="modal-title fs-3 fw-bold" id="userModalLabel">Login</h5>

                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
               </div>
               <div class="modal-body">
                  <form>
                     <div class="mb-3">
                        <label for="email" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="login_email" placeholder="Enter Email address" required="" />
                     </div>

                     <div class="mb-5">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" class="form-control" id="login_password" placeholder="Enter Password" required="" />
                        <br>
                        <div class="d-flex justify-content-between">
                              <!-- form check -->
                              <div class="form-check">
                                 <input class="form-check-input" type="checkbox" value="" id="login_remember">
                                 <!-- label -->
                                 <label class="form-check-label" for="login_remember">Remember me</label>
                              </div>
                              <div>
                                 Forgot password?
                                 <a id="forgotPassword" href="/forgot-password?target-url=">Reset It</a>
                              </div>
                           </div>
                        <br>
                     
                        <small class="form-text">
                           By Signup, you agree to our
                           <a href="javascript:void(0)">Terms of Service</a>
                           &
                           <a href="javascript:void(0)">Privacy Policy</a>
                        </small>
                     </div>

                     <button id="btn_login_modal" type="submit" class="btn btn-primary">Login</button>
                  </form>
               </div>
               
               <div class="modal-footer border-0 justify-content-center">
                  Don't have an account?
                  <a class="xbtn xbtn-primary" data-bs-toggle="modal" href="#signup_modal" role="button">Sign up</a>
               </div>
            </div>
         </div>
      </div>


      <!-- 
      <div class="bg-white position-fixed bottom-0 w-100 z-1 shadow-lg d-block d-lg-none text-center">
         <div class="d-flex align-items-center">
            <div class="w-25 icon-hover py-4">
               <button
                  class="navbar-toggler collapsed d-lg-none"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#navbar-default"
                  aria-controls="navbar-default"
                  aria-expanded="false"
                  aria-label="Toggle navigation">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-text-indent-left text-primary" viewBox="0 0 16 16">
                     <path
                        d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm.646 2.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L4.293 8 2.646 6.354a.5.5 0 0 1 0-.708zM7 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                  </svg>
               </button>
            </div> 

            <div class="dropdown w-25 ms-2 py-4 icon-hover">
               <a href="#" class="text-inherit" data-bs-toggle="dropdown" aria-expanded="false">
                  <div class="text-center">
                     <div class="position-relative d-inline-block">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
                           <path
                              d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                        </svg>
                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                           1
                           <span class="visually-hidden">unread messages</span>
                        </span>
                     </div>
                  </div>
               </a>

               <div class="dropdown-menu dropdown-menu-lg p-0">
                  <div>
                     <h6 class="px-4 border-bottom py-3 mb-0">Notification</h6>
                     <p class="mb-0 px-4 py-3">
                        No Notification to show
                     </p>
                  </div>
               </div>
            </div>

            <div class="w-25 ms-2 py-4 icon-hover">
               <a href="javascript:void(0)" class="text-inherit" data-bs-toggle="modal" data-bs-target="#userModal">
                  <div class="text-center">
                     <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                           <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                           <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                        </svg>
                     </div>
                  </div>
               </a>
            </div>
            <div class="w-25 ms-2 py-4 icon-hover">
               <a href="#" class="text-inherit">
                  <div class="text-center">
                     <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-archive" viewBox="0 0 16 16">
                           <path
                              d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1V2zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5H2zm13-3H1v2h14V2zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                        </svg>
                     </div>
                  </div>
               </a>
            </div>
            <div class="w-25 ms-2 py-4 icon-hover">
               <a data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" href="#" role="button" aria-controls="offcanvasRight" class="text-inherit">
                  <div class="text-center">
                     <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-cart2" viewBox="0 0 16 16">
                           <path
                              d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                        </svg>
                     </div>
                  </div>
               </a>
            </div>
            <div class="w-25 ms-2 py-4 icon-hover">
               <a class="text-inherit" data-bs-toggle="offcanvas" href="#offcanvasCategory" role="button" aria-controls="offcanvasCategory">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-funnel" viewBox="0 0 16 16">
                     <path
                        d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z" />
                  </svg>
               </a>
            </div>
         </div>
      </div>
      -->


      <!-- Modal -->
      <div class="modal fade" id="xmodal-subscribe" tabindex="-1" aria-hidden="true">
         <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
               <div class="modal-body p-0">
                  <div class="d-flex align-items-center">
                     <div class="d-none d-lg-block">
                        <img  loading="lazy" data-src="/theme/freshcart/assets/images/banner/modal_img.jpg" alt="" class="img-fluid rounded-start" />
                     </div>
                     <div class="px-8 py-8 py-lg-0">
                        <div class="position-absolute end-0 top-0 m-6">
                           <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <span class="bg-light-danger text-danger badge rounded-pill mb-4 px-4 py-2">7 Day Super Sale</span>
                        <h2 class="display-6 fw-bold">
                           Discount up to
                           <br />
                           <span class="text-primary">50%</span>
                        </h2>
                        <p class="lead mb-5">Seven day of grate deals - what could be better?</p>

                        <div class="d-grid">
                           <a href="#" class="btn btn-primary" data-bs-dismiss="modal">Start Show Now</a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <!-- modal -->
      <!-- Modal -->
      <div class="modal fade" id="quickViewModal" tabindex="-1" aria-hidden="true">
         <div class="modal-dialog modal-xl modal-dialog-centered">
            <div class="modal-content">
               <div class="modal-body p-8">
                  <div class="position-absolute top-0 end-0 me-3 mt-3">
                     <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="row">
                     <div class="col-lg-6">
                        <!-- img slide -->
                        <div class="product productModal" id="productModal">
                           <div class="zoom" onmousemove="zoom(event)" style="background-image: url(/theme/freshcart/assets/images/products/product-single-img-1.jpg)">
                              <!-- img -->
                              <img  loading="lazy" data-src="/theme/freshcart/assets/images/products/product-single-img-1.jpg" alt="" />
                           </div>
                           <div>
                              <div class="zoom" onmousemove="zoom(event)" style="background-image: url(/theme/freshcart/assets/images/products/product-single-img-2.jpg)">
                                 <!-- img -->
                                 <img  loading="lazy" data-src="/theme/freshcart/assets/images/products/product-single-img-2.jpg" alt="" />
                              </div>
                           </div>
                           <div>
                              <div class="zoom" onmousemove="zoom(event)" style="background-image: url(/theme/freshcart/assets/images/products/product-single-img-3.jpg)">
                                 <!-- img -->
                                 <img  loading="lazy" data-src="/theme/freshcart/assets/images/products/product-single-img-3.jpg" alt="" />
                              </div>
                           </div>
                           <div>
                              <div class="zoom" onmousemove="zoom(event)" style="background-image: url(/theme/freshcart/assets/images/products/product-single-img-4.jpg)">
                                 <!-- img -->
                                 <img  loading="lazy" data-src="/theme/freshcart/assets/images/products/product-single-img-4.jpg" alt="" />
                              </div>
                           </div>
                        </div>
                        <!-- product tools -->
                        <div class="product-tools">
                           <div class="thumbnails row g-3" id="productModalThumbnails">
                              <div class="col-3" class="tns-nav-active">
                                 <div class="thumbnails-img">
                                    <!-- img -->
                                    <img  loading="lazy" data-src="/theme/freshcart/assets/images/products/product-single-img-1.jpg" alt="" />
                                 </div>
                              </div>
                              <div class="col-3">
                                 <div class="thumbnails-img">
                                    <!-- img -->
                                    <img  loading="lazy" data-src="/theme/freshcart/assets/images/products/product-single-img-2.jpg" alt="" />
                                 </div>
                              </div>
                              <div class="col-3">
                                 <div class="thumbnails-img">
                                    <!-- img -->
                                    <img  loading="lazy" data-src="/theme/freshcart/assets/images/products/product-single-img-3.jpg" alt="" />
                                 </div>
                              </div>
                              <div class="col-3">
                                 <div class="thumbnails-img">
                                    <!-- img -->
                                    <img  loading="lazy" data-src="/theme/freshcart/assets/images/products/product-single-img-4.jpg" alt="" />
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="col-lg-6">
                        <div class="ps-lg-8 mt-6 mt-lg-0">
                           <a href="#!" class="mb-4 d-block">Bakery Biscuits</a>
                           <h2 class="mb-1 h1">Napolitanke Ljesnjak</h2>
                           <div class="mb-4">
                              <small class="text-warning">
                                 <i class="bi bi-star-fill"></i>
                                 <i class="bi bi-star-fill"></i>
                                 <i class="bi bi-star-fill"></i>
                                 <i class="bi bi-star-fill"></i>
                                 <i class="bi bi-star-half"></i>
                              </small>
                              <a href="#" class="ms-2">(30 reviews)</a>
                           </div>
                           <div class="fs-4">
                              <span class="fw-bold text-dark">$32</span>
                              <span class="text-decoration-line-through text-muted">$35</span>
                              <span><small class="fs-6 ms-2 text-danger">26% Off</small></span>
                           </div>
                           <hr class="my-6" />
                           <div class="mb-4">
                              <button type="button" class="btn btn-outline-secondary">250g</button>
                              <button type="button" class="btn btn-outline-secondary">500g</button>
                              <button type="button" class="btn btn-outline-secondary">1kg</button>
                           </div>
                           <div>
                              <!-- input -->
                              <!-- input -->
                              <div class="input-group input-spinner">
                                 <input type="button" value="-" class="button-minus btn btn-sm" data-field="quantity" />
                                 <input type="number" step="1" max="10" value="1" name="quantity" class="quantity-field form-control-sm form-input" />
                                 <input type="button" value="+" class="button-plus btn btn-sm" data-field="quantity" />
                              </div>
                           </div>
                           <div class="mt-3 row justify-content-start g-2 align-items-center">
                              <div class="col-lg-4 col-md-5 col-6 d-grid">
                                 <!-- button -->
                                 <!-- btn -->
                                 <button type="button" class="btn btn-primary">
                                    <i class="feather-icon icon-shopping-bag me-2"></i>
                                    Add to cart
                                 </button>
                              </div>
                              <div class="col-md-4 col-5">
                                 <!-- btn -->
                                 <a class="btn btn-light" href="#" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Compare"><i class="bi bi-arrow-left-right"></i></a>
                                 <a class="btn btn-light" href="#!" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Wishlist"><i class="feather-icon icon-heart"></i></a>
                              </div>
                           </div>
                           <hr class="my-6" />
                           <div>
                              <table class="table table-borderless">
                                 <tbody>
                                    <tr>
                                       <td>Product Code:</td>
                                       <td>FBB00255</td>
                                    </tr>
                                    <tr>
                                       <td>Availability:</td>
                                       <td>In Stock</td>
                                    </tr>
                                    <tr>
                                       <td>Type:</td>
                                       <td>Fruits</td>
                                    </tr>
                                    <tr>
                                       <td>Shipping:</td>
                                       <td>
                                          <small>
                                             01 day shipping.
                                             <span class="text-muted">( Free pickup today)</span>
                                          </small>
                                       </td>
                                    </tr>
                                 </tbody>
                              </table>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <!-- Footer -->
      <!-- footer -->
      <footer class="footer bg-dark pb-6 pt-4 pt-md-12">
         <div class="container-fluid">
            <div class="row align-items-center">
               <div class="col-8 col-md-12 col-lg-4">
                  <!-- <a href="#"><img  loading="lazy" data-src="/paykhom-nobg.png" alt="" /></a> -->
                  <a  tooltip="Paykhom Limited" href="/">
                     <img  loading="lazy" data-src="/paykhom-nobg.png" style="margin-top: -8px; width: 64px" alt="Paykhom Limited"/>
                     <span style="xmargin-top: 8px; font-weight:bold; font-size: 24pt; color: lightgray">Paykhom</span>
                  </a>

               </div>
               <div class="col-4 col-md-12 col-lg-8 text-end">
                  <ul class="list-inline text-md-end mb-0 small">
                     <li class="list-inline-item me-2">
                        <a href="https://www.facebook.com/paykhom" class="social-links">
                           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                              <path
                                 d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                           </svg>
                        </a>
                     </li>
                     <!-- <li class="list-inline-item me-2">
                        <a href="#!" class="social-links">
                           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                              <path
                                 d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                           </svg>
                        </a>
                     </li>
                     <li class="list-inline-item">
                        <a href="#!" class="social-links">
                           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                              <path
                                 d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                           </svg>
                        </a>
                     </li> -->
                  </ul>
               </div>
            </div>
            <hr class="my-lg-8 opacity-25" />
            <div class="row g-4">
               <div class="col-xl-3 col-6">
                  <h6 class="mb-4 text-white">Get to Know Us</h6>
                  <!-- list -->
                  <ul class="nav flex-column">
                     <li class="nav-item mb-2"><a href="/info/company" class="nav-link">Company</a></li>
                     <li class="nav-item mb-2"><a href="/info/about" class="nav-link">About us</a></li>
                     <!-- <li class="nav-item mb-2"><a href="/blog" class="nav-link">Blog</a></li> -->
                     <li class="nav-item mb-2"><a href="/info/help" class="nav-link">Help Center</a></li>
                     <li class="nav-item mb-2"><a href="/info/value" class="nav-link">Our Value</a></li>
                     <li class="nav-item mb-2"><a href="/info/contact" class="nav-link">Contact us</a></li>
                  </ul>
               </div>
               <div class="col-xl-3 col-6">
                  <h6 class="mb-4 text-white">For Consumers</h6>
                  <ul class="nav flex-column">
                     <!-- list -->
                     <li class="nav-item mb-2"><a href="/info/payment" class="nav-link">Payments</a></li>
                     <li class="nav-item mb-2"><a href="/info/shipping" class="nav-link">Shipping</a></li>
                     <li class="nav-item mb-2"><a href="/info/return" class="nav-link">Product Returns</a></li>
                     <li class="nav-item mb-2"><a href="/info/faq" class="nav-link">FAQ</a></li>
                     <!-- <li class="nav-item mb-2"><a href="/user/shopping/checkout" class="nav-link">Shop Checkout</a></li> -->
                  </ul>
               </div>
               <div class="col-xl-3 col-6">
                  <h6 class="mb-4 text-white">Become an Entrepreneur</h6>
                  <ul class="nav flex-column">
                     <!-- list -->
                     <li class="nav-item mb-2"><a href="/info/opportunity" class="nav-link">Entrepreneur Opportunities</a></li>
                     <li class="nav-item mb-2"><a href="/info/entrepreneur" class="nav-link">Become an Entrepreneur</a></li>
                     <li class="nav-item mb-2"><a href="/info/earning" class="nav-link">Earnings</a></li>
                     <li class="nav-item mb-2"><a href="/info/idea" class="nav-link">Ideas &amp; Guides</a></li>
                     <li class="nav-item mb-2"><a href="/info/retailer" class="nav-link">New Retailers</a></li>
                  </ul>
               </div>
               <div class="col-xl-3 col-6">
                  <h6 class="mb-4 text-white">Paykhom Programs</h6>
                  <ul class="nav flex-column">
                     <!-- list -->
                     <li class="nav-item mb-2"><a href="/info/gift-card" class="nav-link">Gift Cards</a></li>
                     <li class="nav-item mb-2"><a href="/info/promo-and-coupon" class="nav-link">Promos & Coupons</a></li>
                     <li class="nav-item mb-2"><a href="/info/ad" class="nav-link">Paykhom Ads</a></li>
                     <li class="nav-item mb-2"><a href="/info/career" class="nav-link">Careers</a></li>
                  </ul>
               </div>
               



            </div>
            <hr class="mt-8 opacity-25" />

            <div class="row">
					
					<div class="col-12">
						<div style="width: 100%"><iframe width="100%" height="380" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=BTI%20Landmark,%20549/646,%20Zakir%20Hossain%20Road,%20Wireless%20More,%20Khulshi,%20Chittagong%204202,%20Bangladesh+(Paykhom%20Limited)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps trackers</a></iframe></div>

					</div>
					<!-- <div class="col-12" style="text-align:center">
						<p>Address: BTI Landmark, 549/646, Zakir Hossain Road, Khulshi, Chittagong - 4202, Bangladesh</p>

					</div> -->

				</div>

            <!-- <div> -->
               <div class="row gy-4 align-items-center">
                  <div class="col-md-6">
                     <span class="small text-muted">
                        © 2022
                        <span id="copyright">
                           -
                           <script>
                              document.getElementById("copyright").appendChild(document.createTextNode(new Date().getFullYear()));
                           </script>
                        </span>
                        Paykhom Limited. All rights reserved.
                     </span>
                  </div>
                  <div class="col-lg-6 text-end mb-2 mb-lg-0">
                     <ul class="list-inline mb-0">
                        <li class="list-inline-item text-light">
                           Payment Partners
                        </li>
                        <!-- <li class="list-inline-item">
                           <img  loading="lazy" data-src="/theme/freshcart/assets/images/payment/amazonpay.svg" alt="" />
                        </li> -->
                        <li class="list-inline-item">
                           <img  loading="lazy" data-src="/theme/freshcart/assets/images/payment/american-express.svg" alt="" />
                        </li>
                        <li class="list-inline-item">
                           <img  loading="lazy" data-src="/theme/freshcart/assets/images/payment//mastercard.svg" alt="" />
                        </li>
                        <!-- <li class="list-inline-item">
                           <img  loading="lazy" data-src="/theme/freshcart/assets/images/payment/paypal.svg" alt="" />
                        </li> -->
                        <li class="list-inline-item">
                           <img  loading="lazy" data-src="/theme/freshcart/assets/images/payment/visa.svg" alt="" />
                        </li>
                     </ul>
                  </div>
               </div>
            <!-- </div> -->
         </div>
      </footer>

      <!-- Javascript-->

      <script src="/pwa-manager.js" async></script> 

      <!-- Libs JS -->
      <!-- <script src="/theme/freshcart/assets/libs/jquery/dist/jquery.min.js"></script> -->
      <script src="/theme/freshcart/assets/libs/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
      <script src="/theme/freshcart/assets/libs/simplebar/dist/simplebar.min.js"></script>

      <!-- Theme JS -->
      <script src="/theme/freshcart/assets/js/theme.min.js"></script>

      <script src="/theme/freshcart/assets/js/vendors/jquery.min.js"></script>
      <!-- <script src="/theme/freshcart/assets/libs/slick-carousel/slick/slick.min.js"></script> -->
      <!-- <script src="/theme/freshcart/assets/js/vendors/slick-slider.js"></script> -->
      <!-- <script src="/theme/freshcart/assets/libs/tiny-slider/dist/min/tiny-slider.js"></script> -->
      <!-- <script src="/theme/freshcart/assets/js/vendors/tns-slider.js"></script> -->
      <script src="/theme/freshcart/assets/js/vendors/zoom.js"></script>
      <script src="/theme/freshcart/assets/js/vendors/password.js"></script>

      <!-- 
      <script src="../assets/js/vendors/validation.js"></script>
       -->
      <script src="/theme/freshcart/assets/js/vendors/countdown.js"></script>
      <!-- <script src="/theme/freshcart/assets/libs/sticky-sidebar/dist/sticky-sidebar.min.js"></script> -->
      <!-- <script src="/theme/freshcart/assets/js/vendors/sticky.js"></script> -->
      <script src="/theme/freshcart/assets/js/vendors/modal.js"></script>

      <script src="/_assets/pkg/fontawesome-free-6.7.2-web/css/all.js"></script>

      <script src="/micro-frontend-slim.js"></script>

		



      <script>

      // window.onload = function() {
      //    document.body.classList.add('loaded');
      // };
				
      class CartManager extends Component {
         constructor(args) {
         super(args) ;

         this.csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
         this.cartItemsContainer = document.getElementById("cart_body");
         this.cartItemCount = document.getElementById('cart-icon-count'); // Assuming you have this in header
         // this.addToCartButtons = document.querySelectorAll('.add-to-cart-button'); // moved to ProductView
         this.state.cart = {}; // yes, object, not array
         }

         async uponReady() {
            await this.fetchCart();

            /*
            //BUGGY

            document.addEventListener('CartUpdated', async (e) => {
               await this.fetchCart()
            });
            */
         }



         async rebindCartEventListeners() {
         //debugger;

            this.on('.btn-quantity-plus', 'click', this.onClickQuantityChange);
               this.on('.btn-quantity-minus', 'click', this.onClickQuantityChange);
               this.on('.btn-remove-product-from-cart', 'click', this.onClickItemRemove);
         }

         async onClickItemRemove(e) {
            e.preventDefault();
            e.stopPropagation();
            //OLD: const itemId = e.target.closest('.btn-remove-product-from-cart ').getAttribute('data-item-id');
            const itemId = e.target.closest('.btn-remove-product-from-cart').getAttribute('data-item-id');
            //debugger;
            await this.removeItemFromCart(itemId);
         }


         async onClickQuantityChange(e) {
         e.preventDefault();
         e.stopPropagation();

      let t = e.target;
      let qty = 0.0;
      let o = null, a = 0.0;
      let pvid = t.closest("div").getAttribute('data-product-variant-id');

      t.classList.contains("btn-quantity-plus") ? function (e) {


         o = t.closest("div").querySelector('input[name="' + "quantity" + '"]');
         a = parseInt(o.value, 10) || 0;


         o.value = ++a;

      }(e) : t.classList.contains("btn-quantity-minus") && function (e) {

         o = t.closest("div").querySelector('input[name="' + "quantity" + '"]');
         
         a = parseInt(o.value, 10) || 0;
         a
         a >= 2 && (o.value = --a);

      }(e)
      ;

      if(t.classList.contains("already-in-cart")) {
         //debugger;
         qty = a;
         await this.updateCartItem(pvid, qty);
      }

         }

         async apiRequest(url, method = 'POST', body = {}) {
            const options = {
            method,
            headers: {
               'Content-Type': 'application/json',
               'X-Requested-With': 'XMLHttpRequest',
            },
            };

            if (this.csrfToken) {
            options.headers['X-CSRF-TOKEN'] = this.csrfToken;
            }

            if (body) {
            options.body = JSON.stringify(body);
            }

            try {
            const response = await fetch(url, options);
            if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || ~HTTP error! status: ~{response.status}~);
            }
            let res = await response.json();
            return res;

            } 
            catch (error) {
            //console.error("API Request Error:", error);
            throw error;
            }
         }

         updateCartUI(cart) {
            
            //debugger;

            if (!this.cartItemsContainer) return;
            this.cartItemsContainer.innerHTML = '';

            if (cart && Object.keys(cart).length > 0) {

            for (const [key, value] of Object.entries(cart)) {
               const li = this.createCartItemElement(value);
               this.cartItemsContainer.appendChild(li);
            }

            } 
            else {
            //const li = document.createElement("li");
            //li.innerHTML = ""; //'Your cart is empty.';
            //this.cartItemsContainer.appendChild(li);
            }


            this.updateCartSummary(cart);
            this.updateCartItemCount(cart);

            this.rebindCartEventListeners();

            //dispatch custom event to trigger binding of update buttons etc, as populated html is new.
            //BUGGY: FIX_IT! this.dispatchCustomEvent(document, "CartUpdated", this.state.cart); //QUICK_FIX_PLS
         }


         createCartItemElement(item) {
            const li = document.createElement('li');
            li.classList.add("list-group-item", "py-3", "ps-0", "border-top");
            li.setAttribute('data-list-item', '');

            li.innerHTML = ~
            <div class="row align-items-center">
            <div class="col-6 col-md-6 col-lg-7">
            <div class="d-flex">
            <img data-list-item-field="product_media_path"  loading="lazy" data-src="~{item.product_media_path}" alt="Product Icon" class="icon-shape icon-xxl">
            <div class="ms-3">
               <a data-list-item-field="link_product_slug" href="~{item.link_product_slug}" class="text-inherit">
               <h6 class="mb-0" data-list-item-field="title">~{item.title}</h6>
               </a>
               <span><small class="text-muted" data-list-item-field="price">~{item.rate}</small></span>
               <div class="mt-2 small lh-1">
               <a class="text-decoration-none text-inherit btn-remove-product-from-cart" role="button" data-item-id="~{item.product_variant_id}">
                  <span class="me-1 align-text-bottom">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2 text-success">
                     <polyline points="3 6 5 6 21 6"></polyline>
                     <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                     <line x1="10" y1="11" x2="10" y2="17"></line>
                     <line x1="14" y1="11" x2="14" y2="17"></line>
                  </svg>
                  </span>
                  <span class="text-muted">Remove</span>
               </a>
               </div>
            </div>
            </div>
            </div>
            <div class="col-4 col-md-3 col-lg-3">
            <div class="input-group input-spinner" data-product-variant-id="~{item.product_variant_id}">
               <input type="button" value="-" class="button-minus btn btn-sm quantity-action btn-quantity-minus already-in-cart">
               <input data-list-item-field="quantity" type="number" step="1" min="1" value="~{Number(item.quantity).toFixed(0)}" name="quantity" class="quantity-field form-control-sm form-input">
               <input type="button" value="+" class="button-plus btn btn-sm quantity-action btn-quantity-plus already-in-cart">
            </div>
            </div>
            <div class="col-2 text-lg-end text-start text-md-end col-md-2">
            <span data-list-item-field="price_total" class="fw-bold">~{parseFloat(item.rate * item.quantity).toFixed(2)}</span>
            <input type="hidden" data-list-item-field="product_variant_id" value="~{item.product_variant_id}">
            <input type="hidden" data-list-item-field="price" value="~{item.rate}">
            </div>
            </div>
         ~;

            return li;
         }


         updateCartItemCount(cart) {
            if (this.cartItemCount) {
            const totalItems =  Object.keys(cart).length; //cart.reduce((acc, item) => acc + Number(item.quantity), 0);
            this.cartItemCount.textContent = totalItems;
         }
         }


         updateCartSummary(cart) {
            if (!cart) return;
         let cart_subtotal = 0;
            for (const [key, value] of Object.entries(cart)) {
            cart_subtotal += Number(value.rate * value.quantity);

            }




         const cart_delivery_charge = Number((cart_subtotal * 0.02).toFixed(2));
         const cart_total = cart_delivery_charge + cart_subtotal;

            document.querySelector('[data-state="cart_subtotal"]').textContent = cart_subtotal.toFixed(2);
            document.querySelector('[data-state="cart_delivery_charge"]').textContent = cart_delivery_charge.toFixed(2);
            document.querySelector('[data-state="cart_total"]').textContent = cart_total.toFixed(2);
            document.querySelector('.cart-goto-checkout').classList.toggle('d-none', cart_subtotal <= 0);

         }

         async fetchCart() {
            try {
            let resp = await this.apiRequest('/shopping/cart/get', 'POST');
            let cart = resp.cart;

            if (Array.isArray(cart) && cart.length === 0) {
            cart = {};
            }

            this.state.cart = cart;

            
            this.updateCartUI(cart);

            } 
            catch (error) {
            app.throwAlert(~Error fetching the cart: ~{error}~);
            }
         }

         dispatchCustomEvent(element, eventName, detail) {
            const event = new CustomEvent(eventName, {
            bubbles: true,
            cancelable: true,
            detail: detail
            });
            element.dispatchEvent(event);
         }


         async updateCartItem(itemId, quantity) {
            debugger; //QUICK_FIX_PLS

            try {
            this.state.cart[itemId].product_variant_id = itemId;
            this.state.cart[itemId].quantity = quantity;

            const response = await this.apiRequest(~/shopping/cart/update~, 'POST', this.state.cart[itemId]);
            
            this.state.cart = response.cart;

            //this.dispatchCustomEvent(document, "CartUpdated", this.state.cart);
            this.updateCartUI(this.state.cart);
            } 
            catch (error) {
            app.throwAlert(~Failed to update item: ${error}~);
            }
         }


         async removeItemFromCart(itemId) {
            try {
            const response = await this.apiRequest(~/shopping/cart/remove~, 'POST', {"product_variant_id": itemId});
            
            this.state.cart = response.cart;

            
            //this.dispatchCustomEvent(document, "CartUpdated", this.state.cart);
            this.updateCartUI(this.state.cart);
            } 
            catch (error) {
            app.throwAlert(~Failed to remove item: ${error}`);
            }
         }

         async addToCart(cartRow) {
         try {
            const response = await this.apiRequest('/shopping/cart/add', 'POST', cartRow);
            
            
            this.state.cart[cartRow.product_variant_id] = cartRow;

            //this.dispatchCustomEvent(document, "CartItemAdded", this.state.cart);
            this.updateCartUI(this.state.cart);
         } 
         catch (error) {
            app.throwAlert(`Error adding to cart: ${error}`);
         }
         }

         
      }


      </script>

      <script>
         

         class MarketplaceLayout extends AppPage {
            constructor(args) {
               super(args);
            }
         
            async login(formData) {
               let targetUrl = ""
               const res = await this.fetch('/login', formData);

               this.assert(res, "Login data submission failed");
               this.assert((res.ret_val > 0), "Login failed");

               //debugger;
               if (window.location.href.indexOf("target-url") > -1) {
                  // The URL contains "target-url"
                  // You can now retrieve its value or perform other actions
                  targetUrl = new URLSearchParams(window.location.search).get("target-url") || "";
                  targetUrl = decodeURIComponent(targetUrl); // Decode the URL
                  

                  if(targetUrl.length>0) {
                     window.location.href = targetUrl;
                  }
               }
               else {
                  window.location.href = "/";

               }

            }

            logout(payload) {
               //
            }

            async signup(formData) {
               // debugger;

               let targetUrl = "";
               const res = await this.fetch('/signup', formData);
               if (res.ret_val <= 0) {
                  if (res.error_message) {
                     alert (res.error_message);

                  }
                  else {
                     alert ("Signup Failed. Please Try Again.");

                  }

                  return; //EKN
               }        
               
               if (window.location.href.indexOf("target-url") > -1) {
                  targetUrl = new URLSearchParams(window.location.search).get("target-url") || "";
                  if(targetUrl.length>0) {
                     window.location.href = targetUrl;
                  }
               }
               else {
                  window.location.href = "/login";

               }

            }

            async uponReady() {
               await super.uponReady();

               this.cartManager = new CartManager();
               await this.cartManager.uponReady();

               this.on("#btn_login_modal", "click", this.onCLickButtonLoginModal);
               this.on("#btn_signup_modal", "click", this.onCLickButtonSignupModal);

               /* BUGGY: FIX_IT
               this.decorate();
         
         
            // Event listener for cart updates
               document.addEventListener('CartUpdated', () => {
               this.decorate(); //WHY WHY WHY : QUICK_FIX_PLS
               });
         
               ***************/
         
         
               // this.addCustomEventListener(document, "add-to-cart-button", this.onCustomClickAddToCart);
         
               //load cart items
               //await this.cartManager.fetchCart(); // moved to CartManager.init
         
            }
            
            async onCLickButtonLoginModal(e){
               e.preventDefault();
               e.stopPropagation();

               let formData = {
                  "email" : window.login_email.value,
                  "password"  : window.login_password.value,
                  "remember" : window.login_remember.checked

               }

               await this.login(formData);

            }

            async onCLickButtonSignupModal(e){
               e.preventDefault();
               e.stopPropagation();


               let formData = {
                  "first_name" : window.first_name_modal.value,
                  "last_name" : window.last_name_modal.value,
                  "email" : window.email_modal.value,
                  "mobile" : window.mobile_modal.value,
                  "password"  : window.password_modal.value,
                  "confirm_password"  : window.confirm_password_modal.value,

               }

               await this.signup(formData);
            }

            onCustomClickAddToCart(e) {
         
               // if (Number(document.querySelector('[data-state="cart_subtotal"]').innerText) <= 0) {
               //     document.querySelector('.cart-goto-checkout').classList.add('d-none');
               // }
               // else {
               //     document.querySelector('.cart-goto-checkout').classList.remove('d-none');
               // }
         
            }


            suffixTargetUrl() {

               let targetUrl = ''; // Replace with your actual target URL
               if (window.location.href.indexOf("target-url") > -1) {
                  // The URL contains "target-url"
                  // You can now retrieve its value or perform other actions
                  targetUrl = new URLSearchParams(window.location.search).get("target-url") || "";
               }

               const registerLink = document.getElementById('register');
               if (registerLink) {
                  const currentHref = registerLink.getAttribute('href');
                  const newHref = ~~{currentHref}?target-url=~{targetUrl}~;
                  registerLink.setAttribute('href', newHref);
               } 

               const resetLink = document.getElementById('forgotPassword');
               if (resetLink) {
                  const currentHref = resetLink.getAttribute('href');
                  const newHref = ~~{currentHref}?target-url=~{targetUrl}~;
                  resetLink.setAttribute('href', newHref);
               } 

            }
   

            decorate() {
               let isLoggedIn = this.getCookie("isLoggedIn") || "no";
               if (isLoggedIn === "yes") {
                  document.querySelectorAll(".menu-register").forEach(element => {
                     element.classList.add("d-none");
                  });
                  document.querySelectorAll(".menu-login").forEach(element => {
                     element.innerHTML = "Logout";
                     element.setAttribute("href", "/logout")
                  });
               } 
               else {
                  document.querySelectorAll(".menu-register").forEach(element => {
                     element.classList.remove("d-none");
                  });
                  document.querySelectorAll(".menu-login").forEach(element => {
                     element.innerHTML = "Login";
                     element.setAttribute("href", "/login")
                  });
               }
            }
         }   
         page = new MarketplaceLayout(); // just, the fall-back, if no Page is instantiated by a particular page
         ////////////////////////////////////////////


      </script>

      ${this.render(this.script())}

      
   </body>
</html>



`;	}
}
