import MarketplaceLayout from './marketplace-layout'; // Adjust path as needed

export default class  Index extends MarketplaceLayout {
    constructor(params) {
        super(params);
    }

    *style() {
        
yield html`
      <style>
         .ekn {

         }

         .my-border {
            border: 1px solid #f1f1f1; 
            padding: 4px;
         }


         .filter-container {

         }

         .filter-container .filter-label {

            
         }

      .filter-container .filter-label:after {
         xfont-family: 'Material Icons';
         xcontent: "\e5cf";
         content: ">";
         transform: rotate(270deg);      
         font-weight: bold;   
         xfont-size: 20px;
         xheight: 100%;
         xwidth: 24px;
         float: right;
         xposition: relative;
         xright: 10px;
         x-webkit-transition: all 300ms linear;
         x-moz-transition: all 300ms linear;
         x-o-transition: all 300ms linear;
         xtransition: all 300ms linear;
      }         

         .filter-container .filter-body {
            display:none;
            max-height: 92px;
            overflow: auto;
         }

         .filter-container .filter-label.show:after {
            transform: rotate(90deg);         }

         .filter-container .filter-body.show {
            display:block;
         }

         .child-list {
            padding: 0;
            width: 100%;
            margin: 0 0 15px;
            background: #fff;
         }
         .child-list a {
            display: inline-block;
            line-height: 34px;
            padding: 0 14px;
            color: #111;
            border: 1px solid #ddd;
            border-radius: 30px;
            margin: 0 5px 5px 0;
            font-size: 13px;
            font-weight: normal;
         }         
         
         .child-list a:hover {
            background: #3749bb;
            border: 1px solid #3749bb;
            color: #fff;
            text-decoration: none;
         }         

      </style>
        `;
    }

    *content() {
        
yield html`
   <main>
      <!-- Hero Section -->

      <!-- /Hero Section -->
      
      <!-- New Arrivals Section -->
      <section class="my-lg-14 my-8 xd-none for-the-time-being">
         <!-- <div class="mt-8 mb-lg-14 mb-8"> -->
         <div class="container-fluid">
            <!-- row -->
            <div class="row">
               <div class="col-12">
                  <div class="mb-8">
                     <!-- heading -->
                     <h3 class="mb-0">New Arrivals</h3>
                  </div>
               </div>
            </div>
            <!-- row -->
            <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xxl-6 g-6">
               <!-- col -->
               <div class="col">
                  <a href="" class="text-decoration-none text-inherit">
                     <!-- card -->
                     <div class="card card-product">
                        <div class="card-body text-center py-8">
                           <!-- img -->
                           <img width="100%" class="mb-3" />
                           <!-- text -->
                           <div class="text-truncate">\${cat["title"]}</div>
                        </div>
                     </div>
                  </a>
               </div>
            </div>
            <div class="row">
               <div class="col-12">
                  <br />
                  <div id="paginationContainer"> \${this.paginationHtml} </div>
               </div>
            </div>
         </div>
      </section>

      <!-- /New Arrivals Section -->

      <!-- Shop by Brands Section -->
      <section class="my-lg-14 my-8 xd-none for-the-time-being">
         <!-- <div class="mt-8 mb-lg-14 mb-8"> -->
         <div class="container-fluid">
            <!-- row -->
            <div class="row">
               <div class="col-12">
                  <div class="mb-8">
                     <!-- heading -->
                     <h3 class="mb-0">Shop by Brands</h3>
                  </div>
               </div>
            </div>
            <!-- row -->
            <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xxl-6 g-6">
               <!-- col -->
               <div class="col">
                  <a href="" class="text-decoration-none text-inherit">
                     <!-- card -->
                     <div class="card card-product">
                        <div class="card-body text-center py-8">
                           <!-- img -->
                           <img width="100%" class="mb-3" />
                           <!-- text -->
                           <div class="text-truncate">\${cat["title"]}</div>
                        </div>
                     </div>
                  </a>
               </div>
            </div>
            <div class="row">
               <div class="col-12">
                  <br />
                  <div id="paginationContainer"> \${this.paginationHtml} </div>
               </div>
            </div>
         </div>
      </section>

      <!-- /Shop by Brands Section -->

      <!-- Bestsellers Section -->
      <section class="my-lg-14 my-8 xd-none for-the-time-being">
         <!-- <div class="mt-8 mb-lg-14 mb-8"> -->
         <div class="container-fluid">
            <!-- row -->
            <div class="row">
               <div class="col-12">
                  <div class="mb-8">
                     <!-- heading -->
                     <h3 class="mb-0">Bestsellers</h3>
                  </div>
               </div>
            </div>
            <!-- row -->
            <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xxl-6 g-6">
               <!-- col -->
               <div class="col">
                  <a href="" class="text-decoration-none text-inherit">
                     <!-- card -->
                     <div class="card card-product">
                        <div class="card-body text-center py-8">
                           <!-- img -->
                           <img width="100%" class="mb-3" />
                           <!-- text -->
                           <div class="text-truncate">\${cat["title"]}</div>
                        </div>
                     </div>
                  </a>
               </div>
            </div>
            <div class="row">
               <div class="col-12">
                  <br />
                  <div id="paginationContainer"> \${this.paginationHtml} </div>
               </div>
            </div>
         </div>
      </section>

      <!-- /Bestsellers Section -->

      <!-- Trending Products Section -->
      <section class="my-lg-14 my-8 xd-none for-the-time-being">
         <!-- <div class="mt-8 mb-lg-14 mb-8"> -->
         <div class="container-fluid">
            <!-- row -->
            <div class="row">
               <div class="col-12">
                  <div class="mb-8">
                     <!-- heading -->
                     <h3 class="mb-0">Trending Products</h3>
                  </div>
               </div>
            </div>
            <!-- row -->
            <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xxl-6 g-6">
               <!-- col -->
               <div class="col">
                  <a href="" class="text-decoration-none text-inherit">
                     <!-- card -->
                     <div class="card card-product">
                        <div class="card-body text-center py-8">
                           <!-- img -->
                           <img width="100%" class="mb-3" />
                           <!-- text -->
                           <div class="text-truncate">\${cat["title"]}</div>
                        </div>
                     </div>
                  </a>
               </div>
            </div>
            <div class="row">
               <div class="col-12">
                  <br />
                  <div id="paginationContainer"> \${this.paginationHtml} </div>
               </div>
            </div>
         </div>
      </section>

      <!-- /Trending Products Section -->

      <!-- Special Offer for You Section -->
      <section class="my-lg-14 my-8 xd-none for-the-time-being">
         <!-- <div class="mt-8 mb-lg-14 mb-8"> -->
         <div class="container-fluid">
            <!-- row -->
            <div class="row">
               <div class="col-12">
                  <div class="mb-8">
                     <!-- heading -->
                     <h3 class="mb-0">Special Offer for You</h3>
                  </div>
               </div>
            </div>
            <!-- row -->
            <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xxl-6 g-6">
               <!-- col -->
               <div class="col">
                  <a href="" class="text-decoration-none text-inherit">
                     <!-- card -->
                     <div class="card card-product">
                        <div class="card-body text-center py-8">
                           <!-- img -->
                           <img width="100%" class="mb-3" />
                           <!-- text -->
                           <div class="text-truncate">\${cat["title"]}</div>
                        </div>
                     </div>
                  </a>
               </div>
            </div>
            <div class="row">
               <div class="col-12">
                  <br />
                  <div id="paginationContainer"> \${this.paginationHtml} </div>
               </div>
            </div>
         </div>
      </section>

      <!-- /Special Offer for You Section -->

      <!-- Popular Products Products Section -->
      <section class="my-lg-14 my-8 xd-none for-the-time-being">
         <!-- <div class="mt-8 mb-lg-14 mb-8"> -->
         <div class="container-fluid">
            <!-- row -->
            <div class="row">
               <div class="col-12">
                  <div class="mb-8">
                     <!-- heading -->
                     <h3 class="mb-0">Popular Products</h3>
                  </div>
               </div>
            </div>
            <!-- row -->
            <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xxl-6 g-6">
               <!-- col -->
               <div class="col">
                  <a href="" class="text-decoration-none text-inherit">
                     <!-- card -->
                     <div class="card card-product">
                        <div class="card-body text-center py-8">
                           <!-- img -->
                           <img width="100%" class="mb-3" />
                           <!-- text -->
                           <div class="text-truncate">\${cat["title"]}</div>
                        </div>
                     </div>
                  </a>
               </div>
            </div>
            <div class="row">
               <div class="col-12">
                  <br />
                  <div id="paginationContainer"> \${this.paginationHtml} </div>
               </div>
            </div>
         </div>
      </section>

      <!-- /Popular Products Products Section -->

      <!-- This Weeks Highlights Section -->
      <section class="my-lg-14 my-8 xd-none for-the-time-being">
         <!-- <div class="mt-8 mb-lg-14 mb-8"> -->
         <div class="container-fluid">
            <!-- row -->
            <div class="row">
               <div class="col-12">
                  <div class="mb-8">
                     <!-- heading -->
                     <h3 class="mb-0">This Week's Highlights</h3>
                  </div>
               </div>
            </div>
            <!-- row -->
            <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xxl-6 g-6">
               <!-- col -->
               <div class="col">
                  <a href="" class="text-decoration-none text-inherit">
                     <!-- card -->
                     <div class="card card-product">
                        <div class="card-body text-center py-8">
                           <!-- img -->
                           <img width="100%" class="mb-3" />
                           <!-- text -->
                           <div class="text-truncate">\${cat["title"]}</div>
                        </div>
                     </div>
                  </a>
               </div>
            </div>
            <div class="row">
               <div class="col-12">
                  <br />
                  <div id="paginationContainer"> \${this.paginationHtml} </div>
               </div>
            </div>
         </div>
      </section>

      <!-- /This Weeks Highlights Section -->

      <!-- Shop by Lifestyle  Section -->
      <section class="my-lg-14 my-8 xd-none for-the-time-being">
         <!-- <div class="mt-8 mb-lg-14 mb-8"> -->
         <div class="container-fluid">
            <!-- row -->
            <div class="row">
               <div class="col-12">
                  <div class="mb-8">
                     <!-- heading -->
                     <h3 class="mb-0">Shop by Lifestyle</h3>
                  </div>
               </div>
            </div>
            <!-- row -->
            <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xxl-6 g-6">
               <!-- col -->
               <div class="col">
                  <a href="" class="text-decoration-none text-inherit">
                     <!-- card -->
                     <div class="card card-product">
                        <div class="card-body text-center py-8">
                           <!-- img -->
                           <img width="100%" class="mb-3" />
                           <!-- text -->
                           <div class="text-truncate">\${cat["title"]}</div>
                        </div>
                     </div>
                  </a>
               </div>
            </div>
            <div class="row">
               <div class="col-12">
                  <br />
                  <div id="paginationContainer"> \${this.paginationHtml} </div>
               </div>
            </div>
         </div>
      </section>

      <!-- /Shop by Lifestyle  Section -->

      <!-- Category Section/ -->
      <section class="my-lg-14 my-8 xd-none for-the-time-being">
         <!-- <div class="mt-8 mb-lg-14 mb-8"> -->
        <div class="container-fluid">
          <!-- row -->
          <div class="row">
            <div class="col-12">
              <div class="mb-8">
                <!-- heading -->
                <h3 class="mb-0">Shop by Category</h3>
              </div>
            </div>
          </div>
          <!-- row -->
          <div
            class="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xxl-6 g-6"
          >
          
`;          
      for (var i = 0; i < this.cat.length; i++) {
         var cat = this.cat[i];

      yield html`

            <!-- col -->
            <div class="col">
              <a
                href="/shopping/category/${cat["slug"]}/page/1"
                class="text-decoration-none text-inherit"
              >
                <!-- card -->
                <div class="card card-product">
                  <div class="card-body text-center py-8">
                    <!-- img -->
                    <img
                      src="${cat['logo_image']}"
                      alt="${cat['title']}"
                      width="100%"
                      class="mb-3"
                    />
                    <!-- text -->
                    <div class="text-truncate">\${cat["title"]}</div>
                  </div>
                </div>
              </a>
            </div>
          
`
} 

yield html`
          
          </div>
          <div class="row">
            <div class="col-12">
              <br/>
              <div id="paginationContainer">
              ${this.paginationHtml}
              </div>
          </div>          
        </div>
      </div>
    <!-- </div> -->

      </section>

      <section class="d-none for-the-time-being">
         <div class="container-fluid">
            <div class="row mt-4">
               <div class="col-12 col-md-6 mb-3 mb-lg-0">
                  <div>
                     <div class="py-10 px-8 rounded" style="background: url(/theme/freshcart/assets/images/banner/grocery-banner.png) no-repeat; background-size: cover; background-position: center">
                        <div>
                           <h3 class="fw-bold mb-1">Fruits &amp; Vegetables</h3>
                           <p class="mb-4">
                              Get Upto
                              <span class="fw-bold">30%</span>
                              Off
                           </p>
                           <!-- <a href="#!" class="btn btn-dark">Shop Now</a> -->
                        </div>
                     </div>
                  </div>
               </div>
               <div class="col-12 col-md-6">
                  <div>
                     <div class="py-10 px-8 rounded" style="background: url(/theme/freshcart/assets/images/banner/grocery-banner-2.jpg) no-repeat; background-size: cover; background-position: center">
                        <div>
                           <h3 class="fw-bold mb-1">Freshly Baked Buns</h3>
                           <p class="mb-4">
                              Get Upto
                              <span class="fw-bold">25%</span>
                              Off
                           </p>
                           <!-- <a href="#!" class="btn btn-dark">Shop Now</a> -->
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <br>
      </section>




         <section class="mb-lg-14 mb-8 xd-none for-the-time-being">
            <div class="container-fluid">
               <!-- row -->
               <div class="row">
               <div class="col-12">
               <div class="mt-8">
                  <!-- heading -->
                  <h3 class="mb-0">Latest Arrivals</h3>
               </div>
               </div>
            </div>


               <div id="productViewContainer" class="row g-4 row-cols-xl-4 row-cols-lg-3 row-cols-2 row-cols-md-2 mt-2 product-view-container">
`;
    for (var i = 0; i < this.products.length; i++) {
        var product = this.products[i];    
yield html`                                 

                        <!-- col -->
                        <div class="col">
                              <div class="card card-product" style="height: 500px; display: flex; flex-direction: column; justify-content: space-between;">
                                 <div class="card-body">
                                       <div class="text-center position-relative">
                                          <a href="/shopping/product-variant/${product['slug']}">
                                             <img  loading="lazy" data-src="${product['logo_image']}" alt="" class="mb-3 img-fluid" style="max-height: 200px; width: 100%; object-fit: cover;">
                                          </a>
                                       </div>
                                       <h2 class="fs-6" style="min-height: 50px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                                          <a href="/shopping/product-variant/${product['slug']}" class="text-inherit text-decoration-none">${product['title']}</a>
                                       </h2>
                                       <ul style = "max-height: 100px;">
`
  let count = 0;
  //FIX IT: NOT WORKING
  //foreach ($product["inventory_detail"]??[] as $item) {
    for (var j = 0; j < (product["inventory_detail"] || []).length; j++) {
        var item = product["inventory_detail"][j];

    if(count >= 3) {
        break; // exit loop after processing the first 5 items
    }
yield html`
											<li title="${item['value']}" style=" white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"><b>${item['attrib_title']}:&nbsp;</b>${item['value']}</li>

`
    count++;
  }
yield html`
                                       </ul>
                                       <div>
                                          <small class="text-warning">
                                             <i class="bi bi-star-fill"></i>
                                             <i class="bi bi-star-fill"></i>
                                             <i class="bi bi-star-fill"></i>
                                             <i class="bi bi-star-fill"></i>
                                             <i class="bi bi-star-half"></i>
                                          </small>
                                          <span class="text-muted small">4.5(149)</span>
                                       </div>
                                       <div class="d-flex justify-content-between align-items-center mt-3">
                                          <div>
                                             <span class="text-dark">${product['price']}</span>
                                             <span class="text-decoration-line-through text-muted">${product['list_price']}</span>
                                          </div>
                                          <div>
                                             <a href="#!" class="btn btn-primary btn-sm pvs-btn-add-to-cart" data-product-variant-id="${product['inventory_detail']}" data-product-price="${product['price']}" data-product-title="${product['title']}" data-product-media-path="/theme/freshcart/assets/images/product-single-img-1.jpg" data-product-link-product-slug="${product['slug']}" data-product-list-price="${product["list_price"]}">
                                                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus">
                                                      <line x1="12" y1="5" x2="12" y2="19"></line>
                                                      <line x1="5" y1="12" x2="19" y2="12"></line>
                                                   </svg>
                                                   Add
                                             </a>
                                          </div>
                                       </div>
                                 </div>
                              </div>
                           </div>

`
      } 

yield html`

                     </div>

            </div>
            <br/>

         </section>         

         <section class="d-none for-the-time-being mt-8">
            <div class="container-fluid">
               <!-- row -->
               <div class="table-responsive-xl pb-6 pb-xl-0">
                  <div class="row xflex-nowrap">
                     <div class="col-12 col-xl-4 col-lg-4">
                        <div class="p-8 mb-3 rounded" style="background: url(/theme/freshcart/assets/images/banner/ad-banner-1.jpg) no-repeat; background-size: cover">
                           <div>
                              <h3 class="mb-0 fw-bold">
                                 10% cashback on
                                 <br>
                                 personal care
                              </h3>
                              <div class="mt-4 mb-5 fs-5">
                                 <p class="mb-0">Max cashback: \$12</p>
                                 <span>
                                    Code:
                                    <span class="fw-bold text-dark">CARE12</span>
                                 </span>
                              </div>
                              <!-- <a href="#" class="btn btn-dark">Shop Now</a> -->
                           </div>
                        </div>
                     </div>
                     <div class="col-12 col-xl-4 col-lg-4">
                        <div class="p-8 mb-3 rounded" style="background: url(/theme/freshcart/assets/images/banner/ad-banner-2.jpg) no-repeat; background-size: cover">
                           <!-- Banner Content -->
                           <div>
                              <!-- Banner Content -->
                              <h3 class="fw-bold mb-3">
                                 Say yes to
                                 <br>
                                 season’s fresh
                              </h3>
                              <div class="mt-4 mb-5 fs-5">
                                 <p class="fs-5 mb-0">
                                    Refresh your day
                                    <br>
                                    the fruity way
                                 </p>
                              </div>

                              <!-- <a href="#" class="btn btn-dark">Shop Now</a> -->
                           </div>
                        </div>
                     </div>
                     <div class="col-12 col-xl-4 col-lg-4">
                        <div class="p-8 mb-3 rounded" style="background: url(/theme/freshcart/assets/images/banner/ad-banner-3.jpg) no-repeat; background-size: cover">
                           <div>
                              <!-- Banner Content -->
                              <h3 class="fw-bold mb-3">
                                 When in doubt,
                                 <br>
                                 eat ice cream
                              </h3>
                              <div class="mt-4 mb-5 fs-5">
                                 <p class="fs-5 mb-0">
                                    Enjoy a scoop of
                                    <br>
                                    summer today
                                 </p>
                              </div>

                              <!-- <a href="#" class="btn btn-dark">Shop Now</a> -->
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         



         <section class="d-none for-the-time-being my-lg-14 my-8">
            <div class="container-fluid">
               <div class="row">
                  <div class="col-md-6 col-lg-3" xstyle="background-color: #ccc">
                     <div class="card">
                        <div class="card-body" style="min-height:200px">
                           <div class="mb-8 mb-xl-0">
                              <div class="mb-6"><img  loading="lazy" data-src="assets/images/icons/clock.svg" alt=""></div>
                              <h3 class="h5 mb-3">10 minute grocery now</h3>
                              <p>Get your order delivered to your doorstep at the earliest from Paykhom pickup stores near you.</p>
                           </div>

                        </div>
                     </div>
                  </div>
                  <div class="col-md-6 col-lg-3" xstyle="background-color: #ccc">
                     <div class="card">
                        <div class="card-body" style="min-height:200px">
                           <div class="mb-8 mb-xl-0">
                              <div class="mb-6"><img  loading="lazy" data-src="assets/images/icons/gift.svg" alt=""></div>
                              <h3 class="h5 mb-3">Best Prices &amp; Offers</h3>
                              <p>Cheaper prices than your local supermarket, great cashback offers to top it off. Get best pricess &amp; offers.</p>
                           </div>
                           
                        </div>
                     </div>

                  </div>
                  <div class="col-md-6 col-lg-3" xstyle="background-color: #ccc">
                     <div class="card">
                        <div class="card-body" style="min-height:200px">
                           <div class="mb-8 mb-xl-0">
                              <div class="mb-6"><img  loading="lazy" data-src="assets/images/icons/package.svg" alt=""></div>
                              <h3 class="h5 mb-3">Wide Assortment</h3>
                              <p>Choose from 5000+ products across food, personal care, household, bakery, veg and non-veg &amp; other categories.</p>
                           </div>
                           
                        </div>
                     </div>

                  </div>
                  <div class="col-md-6 col-lg-3" xstyle="background-color: #ccc">
                     <div class="card">
                        <div class="card-body" style="min-height:200px">
                           <div class="mb-8 mb-xl-0">
                              <div class="mb-6"><img  loading="lazy" data-src="assets/images/icons/refresh-cw.svg" alt=""></div>
                              <h3 class="h5 mb-3">Easy Returns</h3>
                              <p>
                                 Not satisfied with a product? Return it at the doorstep &amp; get a refund within hours. No questions asked
                                 policy.
                                 
                              </p>
                           </div>
                           
                        </div>
                     </div>

                  </div>
               </div>
            </div>
         </section>

         <section class="d-none for-the-time-being">
            <div class="container-fluid">
               <div class="row">
                  <div class="col-12">
                     <div class="mb-4 xbg-light d-lg-flex justify-content-between align-items-center rounded" style="background-color: #ddd">
                        <div class="p-10">
                           <h2 class="mb-1 fw-bold">One Stop Grocery Shop</h2>
                           <p class="mb-0 lead">
                              Shopping for your furry friend? Find food,
                              <br>
                              treats, and more in one easy spot.
                           </p>
                           <!-- <a href="#" class="btn btn-dark mt-5">Get Discount on Share</a> -->
                        </div>
                        <div class="p-6 d-lg-block d-none"><img  loading="lazy" data-src="/theme/freshcart/assets/images/svg-graphics/store-graphics.svg" alt="" class="img-fluid"></div>
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
         //PENDING: this.formValidator = new FormValidator()

      }




      async hookup() {
         await super.hookup();
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