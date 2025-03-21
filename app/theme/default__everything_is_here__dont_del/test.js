      /* JAVASCRIPT ************************************************************************************************************* */
      
      const               PRODUCT_LIST_VIEW = 'list';
      const               PRODUCT_GRID_VIEW = 'grid';

      class ProductView extends Component {
         constructor(args) {
            super(args);
            this.args = args;
         }

         *template(args) {
            this.args = args;
            
            let content = "";

            for (let i = 0; i < args.data.length; i++) {
               //content += this.createProductCard(this.args.data[i]);
               content += this.render(this.createProductCard(this.args.data[i]));

            }
            
            if (this.args.type === PRODUCT_GRID_VIEW) {
               this.container.setAttribute("class", "row g-4 row-cols-xxl-6 row-cols-xl-6 row-cols-lg-4 row-cols-2 row-cols-md-2 mt-2 product-view-container")
            }
            else {
               this.container.setAttribute("class", "row g-4 row-cols-1 mt-2 product-view-container")
            }

            yield content;            
         }

         *createProductCard(product) {
            if (this.args.type === PRODUCT_GRID_VIEW) {
               yield `
               <div class="col">
               <div class="card card-product">
                  <div class="card-body">
                     <div class="text-center position-relative">
                     <a href="/shopping/product-variant/${product.slug}">
                        <img  xloading="lazy" src="${product.logo_image}" alt="${product.title}" class="mb-3 img-fluid">
                     </a>
                     </div>
                     <h2 class="fs-6">
                        <a href="/shopping/product-variant/${product.slug}" class="text-inherit text-decoration-none">${product.title}</a>
                     
                     </h2>
                     <div>
                     <!-- <small class="text-warning">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-half"></i>
                     </small>
                     <span class="text-muted small">4.5(149)</span>
                     </div> -->
                     <div class="d-flex justify-content-between align-items-center mt-3">
                     <div>
                        <span class="text-dark">${product.price}</span>
                        <span class="text-decoration-line-through text-muted">${product.list_price}</span>
                     </div>
                     <div>
                        <a href="#!" class="btn btn-primary btn-sm pvs-btn-add-to-cart" data-product-variant-id="${product.product_variant_id}"  data-product-variant-id="${product.product_variant_id}" data-product-price="${product.price}" data-product-title="${product.title}" data-product-media-path="/theme/freshcart/assets/images/product-single-img-1.jpg" data-product-link-product-slug="${product.slug}" data-product-list-price="${product.list_price}">
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
            `;

            }
            else {
               yield `
                        <!-- col -->
                        <div class="col">
                           <!-- card -->
                           <div class="card card-product">
                              <!-- card body -->
                              <div class="card-body">
                                 <div class="row align-items-center">
                                    <!-- col -->
                                    <div class="col-md-4 col-12">
                                       <div class="text-center position-relative">
                                          <!-- 
                                          <div class="position-absolute top-0">
                                             
                                             <span class="badge bg-danger">Sale</span>
                                          </div> 
                                          -->
                                          <a href="/shopping/product-variant/${product.slug}">
                                             <!-- img -->
                                             <img  xloading="lazy" src="${product.logo_image}" alt="" class="mb-3 img-fluid">
                                          </a>
                                       </div>
                                    </div>
                                    <div class="col-md-8 col-12 flex-grow-1">
                                       <!-- heading -->
                                       <div class="text-small mb-1">
                                          <!-- <a href="#!" class="text-decoration-none text-muted"><small>Snack &amp; Munchies</small></a> -->
                                       </div>
                                       <h2 class="fs-6">
                                          <a href="/shopping/product-variant/${product.slug}" class="text-inherit text-decoration-none">${product.title}</a>
                                       </h2>
                                     <!--  <div>
                                          <small class="text-warning">
                                             <i class="bi bi-star-fill"></i>
                                             <i class="bi bi-star-fill"></i>
                                             <i class="bi bi-star-fill"></i>
                                             <i class="bi bi-star-fill"></i>
                                             <i class="bi bi-star-half"></i>
                                          </small>
                                          <span class="text-muted small">4.5(149)</span>
                                       </div> -->
                                       <div class="mt-6">
                                          <!-- price -->
                                          <div>
                                             <span class="text-dark">${product.price}</span>
                                             <span class="text-decoration-line-through text-muted">${product.list_price}</span>
                                          </div>
                                          <div class="mt-2">
                                             <a href="#!" class="btn btn-primary pvs-btn-add-to-cart"  data-product-variant-id="${product.product_variant_id}"  data-product-variant-id="${product.product_variant_id}" data-product-price="${product.price}" data-product-title="${product.title}" data-product-media-path="/theme/freshcart/assets/images/product-single-img-1.jpg" data-product-link-product-slug="${product.slug}" data-product-list-price="${product.list_price}">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-bag me-2">
                                                   <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                                                   <line x1="3" y1="6" x2="21" y2="6"></line>
                                                   <path d="M16 10a4 4 0 0 1-8 0"></path>
                                                </svg>
                                                Add to Cart
                                             </a>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
               
               `;
            }
         }         
      }
      
      class Page extends MarketplaceLayout {
         constructor(args) {
            super(args);

            this.productViewType = PRODUCT_GRID_VIEW;

            this.productView = new ProductView();

            //this.options = `(this.options)`;
            //TO BE CONVERTED this.options = <?= json_encode($this->options) ?>;
            this.options = {};

                                                   
               this.kv = {
                  "page": this.options['currentPage'],
                  "limit": this.options['limit'],
                  "order": this.options['orderBy'],
                  "view": this.options['productViewType'],
                  "slug": this.options['slug']
               };
               this.kv.order = this.kv.order.trim(); //QUICK_FIX
               this.kv.view = this.kv.view.trim(); //QUICK_FIX
               this.kv.slug = this.kv.slug.trim(); //QUICK_FIX
                   
            let offset = ((this.kv.page-1) * this.kv.limit);

            this.productSearchParams = {
               "offset": offset,
               "limit": this.kv.limit,
               "order": this.kv.order,
               "page": this.kv.page,
               "view": this.kv.view,

               "product" : {
                  "category_slug": this.kv.slug,
                  "product_variant": {
                        "product_variant_detail": {
                        }
                  }
               }
            };

            //this.product_variant_detail = {};
            this.product_variant_detail = `(this.pvav, true)`;
            if (Array.isArray(this.product_variant_detail) && this.product_variant_detail.length == 0) {
               this.product_variant_detail = {};
            }
         }

         //
         async uponReady() {
            super.uponReady();

            this.on(".form-check-input-filter-av", "click", this.attribFilterOnClick);
            
            this.on(".productViewSwitch", "click", this.productViewSwitchOnClick);
            this.on("#howMany", "click", this.howManyOnClick);
            this.on("#orderBy", "click", this.orderByOnClick);
            this.on(".filter-label", "click", this.filterLabelOnClick);
            this.on("#btn_global_search", "click", this.onClickGlobalSearch);
            
            //this.on("div.noUi-touch-area", "mouseup", this.onChangePriceRange)

            // Attach the 'update' event to call refreshData with new values
            
            /*
            var slider = document.getElementById('priceRange');            
            
            slider.noUiSlider.on('update', async function (values, handle) {
               //alert("Yes");
               //page.productSearchParams.product.product_variant.price_low =  parseFloat((values[0] || 1).replace(/[^0-9\.]/g, '')); ;
               //page.productSearchParams.product.product_variant.price_high = parseFloat((values[1] || 999999).replace(/[^0-9\.]/g, '')); ;
               

               if (!page.productSearchParams.product) {
                  page.productSearchParams.product = {};
               } 
               if (!page.productSearchParams.product.product_variant) {
                  page.productSearchParams.product.product_variant = {};
               } 

               page.productSearchParams.product.product_variant.price_low = parseFloat((values[0] || 1).replace(/[^0-9\.]/g, '')); ;
               page.productSearchParams.product.product_variant.price_high = parseFloat((values[1] || 999999).replace(/[^0-9\.]/g, '')); ;
               


               await page.refreshProductsData(); // 'this' might need binding if not in correct context
            }.bind(page)); // Binding 'this' to ensure correct context if necessary
            */
            this.rebindEvents();
         }


         rebindEvents() {
            this.on('.pvs-btn-add-to-cart', 'click', this.onClickAddToCart);

         }
         
         async xonChangePriceRange(e) {
            let v = document.getElementById("priceRange").noUiSlider.get();
            
            //await this.refreshProductsData()
         }

         async onClickGlobalSearch(e) {
            // title param passing : PENDING
            await this.refreshProductsData();
         }

            async onClickAddToCart(e) {
                        e.preventDefault();
                        //e.stopPropagation();

  


                        const product_variant_id = Number(e.target.getAttribute('data-product-variant-id'));
                        const quantity = 1;

                        const price = Number(e.target.getAttribute('data-product-price'));
                    const title = e.target.getAttribute('data-product-title');


                        const product_media_path = e.target.getAttribute('data-product-media-path');
                    const link_product_slug = e.target.getAttribute('data-product-link-product-slug');
                    const list_price = Number(e.target.getAttribute('data-product-list-price')).toFixed(4);



                    const UOM_PIECE = 5;
                    const CURRENCY_BDT = 1;


                        const payload = {
                            product_variant_id: product_variant_id,
                            "title": title,
                            particulars: "Default",
                            quantity: quantity.toFixed(4),
                            uom_id: UOM_PIECE,
                            currency_id: CURRENCY_BDT,
                            rate: price.toFixed(4),
                            total: (quantity.toFixed(4) * price.toFixed(4)).toFixed(4),
                            product_media_path: product_media_path,
                            link_product_slug: link_product_slug,
                            list_price: list_price,

                        };

                        await this.cartManager.addToCart(payload);

                        new bootstrap.Offcanvas(offcanvasRight).show();

            }

         async filterLabelOnClick(e) {
            e.preventDefault();
            e.stopPropagation();

            let el = e.target;
            if (el.nodeName === "SPAN") return;

            let elBody = el.parentNode.querySelector(".filter-body")
            if (elBody.classList.contains("show")) {
               elBody.classList.remove("show");
            } 
            else {
                  elBody.classList.add("show");
            }
                  
            let elLabel = el.parentNode.querySelector(".filter-label")
            if (elLabel.classList.contains("show")) {
               elLabel.classList.remove("show");
            } 
            else {
                  elLabel.classList.add("show");
            }
                  
         }

         ///////////////////////////////////////////////////////////////////////////////////////////////////////


         async howManyOnClick(ev) {
            ev.preventDefault();

            let lim = parseInt(ev.target.value);
            this.productSearchParams.limit = lim;

            await this.refreshProductsData();
         }

         async orderByOnClick(ev) {
            ev.preventDefault();

            let order = ev.target.value;
            this.productSearchParams.order = order;

            await this.refreshProductsData();
         }

         async productViewSwitchOnClick(ev) {
            ev.preventDefault();

            // <a id="productListViewAnchor" href="" class="text-muted me-3 productViewSwitch"><i id="productListView" class="bi bi-list-ul"></i></a>
            //                      <a id="productGridViewAnchor" href="" class="me-3 active productViewSwitch"><i id="productGridView" class="bi bi-grid"></i></a>

            let id = ev.target.getAttribute("id");
            if (id === "productListView") {
               this.productViewType = PRODUCT_LIST_VIEW;

               //window.productListView.setAttribute("class",  "bi bi-list-ul");
               window.productListViewAnchor.setAttribute("class",  "me-3 active productViewSwitch");

               //window.productGridView.setAttribute("class",  "bi bi-grid");
               window.productGridViewAnchor.setAttribute("class",  "text-muted me-3 productViewSwitch");

            }
            else {
               this.productViewType = PRODUCT_GRID_VIEW;

               //window.productListView.setAttribute("class",  "bi bi-list-ul");
               window.productListViewAnchor.setAttribute("class",  "text-muted me-3 productViewSwitch");

               //window.productGridView.setAttribute("class",  "bi bi-grid");
               window.productGridViewAnchor.setAttribute("class",  "me-3 active productViewSwitch");

            }
            await this.refreshProductsData();

         }


         async attribFilterOnClick(ev) {
            let attrib_id = ev.target.getAttribute("id").split("_")[1];
            let value = ev.target.getAttribute("value");
            let isChecked = ev.target.checked; // Assuming a checkbox or similar input

            // Ensure this.product_variant_detail is defined
            if (!this.product_variant_detail) {
               this.product_variant_detail = {};
            }

            // Ensure attrib_id exists in the object

            if (!this.product_variant_detail[attrib_id]) {
               this.product_variant_detail[attrib_id] = [];
            }

            if (isChecked) {
               // Add value if not already in the array
               if (!this.product_variant_detail[attrib_id].includes(value)) {
                     this.product_variant_detail[attrib_id].push(value);
               }
            } 
            else {
               // Remove value if it exists in the array
               this.product_variant_detail[attrib_id] = this.product_variant_detail[attrib_id].filter(
                     (item) => item !== value
               );

               // Remove attrib_id key if the array is empty
               if (this.product_variant_detail[attrib_id].length === 0) {
                     delete this.product_variant_detail[attrib_id];
               }
            }

            if (!this.productSearchParams) {
               this.productSearchParams = { product: { product_variant: {} } };
            } 
            else if (!this.productSearchParams.product) {
               this.productSearchParams.product = { product_variant: {} };
            } 
            else if (!this.productSearchParams.product.product_variant) {
               this.productSearchParams.product.product_variant = {};
            }


            this.productSearchParams.product.product_variant.product_variant_detail = this.product_variant_detail;
            this.productSearchParams.product.product_variant.price_low = this.price_low;
            this.productSearchParams.product.product_variant.price_high = this.price_high;
            

            
            await this.refreshProductsData();

         }

         async refreshProductsData() {
            let offset = ((this.productSearchParams.page-1) * this.productSearchParams.limit);
            this.productSearchParams['offset'] = offset;
            
            let url = `/shopping/category/${this.productSearchParams.product.category_slug}/page/${this.productSearchParams.page}/limit/${this.productSearchParams.limit}/order/${this.productSearchParams.order}/view/${this.productViewType}`;

            try {
               const response = await fetch(
                  url, 
                  {
                     method: 'POST', // HTTP method
                     headers: {
                        'Content-Type': 'application/json', // Specify JSON content
                        'Accept': 'application/json', // Indicate the response format
                     },
                     body: JSON.stringify(this.productSearchParams), // Convert JavaScript object to JSON string
                  }
               );

               if (!response.ok) {
                     throw new Error(`HTTP error! Status: ${response.status}`);
               }

               const json = (await response.json());
               const data = json.searchResult.ret_data; // Parse JSON response
               const paginationHtml = json.paginationHtml;
               const rowCount = json.searchResult.row_count;
               
               // PENDING!!! 
               //const htmlPagination = json.htmlPagination;
               //window.paginationContainer.innerHTML = htmlPagination
               // /PENDING!!!
               
               window.productCount.innerText = rowCount;
               this.productView.render("productViewContainer", {type: this.productViewType, data: data});

               document.getElementById("paginationContainer").innerHTML = paginationHtml;

               this.rebindEvents();
            } 
            catch (error) {
               //console.error('Error:', error); // Handle errors
            }

         }



      }

      //always the same
      page = new Page();


      class Test extends Tdd {
         constructor(args) {
            super(args);
         }

         uponReady() {
            super.uponReady();
            
            // INCLUDE TEST UNITS HERE 
            this.include(this.testOne);
            // /INCLUDE TEST UNITS HERE 

         }

         testOne() {
            let res = true
            this.assertCase("res eq true", (res === true));
         }

      
      }

      tdd = new Test();
