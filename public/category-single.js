const               PRODUCT_LIST_VIEW = 'list';
const               PRODUCT_GRID_VIEW = 'grid';

class ProductView extends Component {
   constructor(args) {
      super(args);
      this.args = args;
   }

   template(args) {

      let content = "";

      for (let i = 0; i < args.data.length; i++) {
         content += this.createProductCard(this.args.data[i]);
      }
      
      if (this.args.type === PRODUCT_GRID_VIEW) {
         window.productViewContainer.setAttribute("class", "row g-4 row-cols-xl-4 row-cols-lg-3 row-cols-2 row-cols-md-2 mt-2 product-view-container")
      }
      else {
         window.productViewContainer.setAttribute("class", "row g-4 row-cols-1 mt-2 product-view-container")
      }

      return content;            
   }

   createProductCard(product) {
      if (this.args.type === PRODUCT_GRID_VIEW) {
         return `
         <div class="col">
         <div class="card card-product">
            <div class="card-body">
               <div class="text-center position-relative">
               <a href="shop-single.html">
                  <img src="/_assets/images/products/product-img-1.jpg" alt="${product.title}" class="mb-3 img-fluid">
               </a>
               <div class="card-product-action">
                  <a href="#!" class="btn-action" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                     <i class="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Quick View" data-bs-original-title="Quick View"></i>
                  </a>
                  <a href="shop-wishlist.html" class="btn-action" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Wishlist" data-bs-original-title="Wishlist">
                     <i class="bi bi-heart"></i>
                  </a>
                  <a href="#!" class="btn-action" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Compare" data-bs-original-title="Compare">
                     <i class="bi bi-arrow-left-right"></i>
                  </a>
               </div>
               </div>
               <h2 class="fs-6">
               <a href="shop-single.html" class="text-inherit text-decoration-none">${product.title}</a>
               </h2>
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
                  <span class="text-dark">${product.price}</span>
                  <span class="text-decoration-line-through text-muted">${product.list_price}</span>
               </div>
               <div>
                  <a href="#!" class="btn btn-primary btn-sm">
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
         return `
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
                                    <a href="shop-single.html">
                                       <!-- img -->
                                       <img src="/_assets/images/products/product-img-1.jpg" alt="Grocery Ecommerce Template" class="mb-3 img-fluid">
                                    </a>
                                 </div>
                              </div>
                              <div class="col-md-8 col-12 flex-grow-1">
                                 <!-- heading -->
                                 <div class="text-small mb-1">
                                    <a href="#!" class="text-decoration-none text-muted"><small>Snack &amp; Munchies</small></a>
                                 </div>
                                 <h2 class="fs-6"><a href="shop-single.html" class="text-inherit text-decoration-none">${product.title}</a></h2>
                                 <div>
                                    <!-- rating -->
                                    <small class="text-warning">
                                       <i class="bi bi-star-fill"></i>
                                       <i class="bi bi-star-fill"></i>
                                       <i class="bi bi-star-fill"></i>
                                       <i class="bi bi-star-fill"></i>
                                       <i class="bi bi-star-half"></i>
                                    </small>
                                    <span class="text-muted small">4.5(149)</span>
                                 </div>
                                 <div class="mt-6">
                                    <!-- price -->
                                    <div>
                                       <span class="text-dark">${product.price}</span>
                                       <span class="text-decoration-line-through text-muted">${product.list_price}</span>
                                    </div>
                                    <!-- btn -->
                                    <div class="mt-3">
                                       <a href="#!" class="btn btn-icon btn-sm btn-outline-gray-400 text-muted" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                                          <i class="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Quick View" data-bs-original-title="Quick View"></i>
                                       </a>
                                       <a href="shop-wishlist.html" class="btn btn-icon btn-sm btn-outline-gray-400 text-muted" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Wishlist" data-bs-original-title="Wishlist">
                                          <i class="bi bi-heart"></i>
                                       </a>
                                       <a href="#!" class="btn btn-icon btn-sm btn-outline-gray-400 text-muted" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Compare" data-bs-original-title="Compare">
                                          <i class="bi bi-arrow-left-right"></i>
                                       </a>
                                    </div>
                                    <!-- btn -->
                                    <div class="mt-2">
                                       <a href="#!" class="btn btn-primary">
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
//
class Page extends MasterLayout {
   constructor(args) {
      super(args);

      this.productViewType = PRODUCT_GRID_VIEW;

      this.productView = new ProductView();

      this.options = <?= json_encode($this->options) ?>;

                                             
         this.kv = {
            "page": <?= json_encode(($this->options['currentPage'])) ?>,
            "limit": <?= json_encode(($this->options['limit'])) ?>,
            "order": <?php echo json_encode(($this->options['orderBy'])) ?>,
            "view": <?php echo json_encode(($this->options['productViewType'])) ?>,
            "slug": <?php echo json_encode(($this->options['slug'])) ?>
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
            /*
            "department_id" : 1,
            "brand_id": 1,
            "shop_id": 1,
            
            "product_variant": {
                  "title": "4GB RAM",
                  "sku": "sku",
                  "price_low": 100,
                  "price_high": 1000,
                  "availability_id": [1, 2, 3],
               
                  "product_variant_attrib_value": {
                     "1": ["DDR4"],
                     "101": ["16MHz"]
                  }
            }
            */
         }
      };

      this.product_variant_attrib_value = {
              "1": ["DDR4", /*...*/],
              "101": ["16MHz", /*...*/]
       };
      this.product_variant_attrib_value = {};

   }

   //
   async uponReady() {
      this.on(".form-check-input-filter-av", "click", this.attribFilterOnClick);
      this.on("#categoryDataList",  "input", this.categoryOnInput);
      
      this.on(".productViewSwitch", "click", this.productViewSwitchOnClick);
      this.on("#howMany", "click", this.howManyOnClick);
      this.on("#orderBy", "click", this.orderByOnClick);

   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////

   async xrefreshProductsDataOld() {
      try {
         const response = await fetch("/api/dbfetch/ecom/product_variant/search", {
               method: 'POST', // HTTP method
               headers: {
                  'Content-Type': 'application/json', // Specify JSON content
                  'Accept': 'application/json', // Indicate the response format
               },
               body: JSON.stringify(this.productSearchParams), // Convert JavaScript object to JSON string
         });

         if (!response.ok) {
               throw new Error(`HTTP error! Status: ${response.status}`);
         }

         const data = (await response.json()).ret_data; // Parse JSON response
      
         window.productCount.innerText = data.length;
         this.productView.render(window.productViewContainer, {type: this.productViewType, data: data});

      } 
      catch (error) {
         console.error('Error:', error); // Handle errors
      }

   }


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

   //
   async categoryOnInput(ev) {
      ev.preventDefault();

      //alert("Here")
      /*
      const selectedOption = [...document.querySelectorAll('#categoryDataList option')]
      .find(option => option.value === this.value);
      const categoryId = selectedOption?.getAttribute('category_id') || 'Not found';
      console.log(`Category ID: ${categoryId}`);            
      */

      const inputValue = ev.target.value; // Get the current input value
      const options = document.querySelectorAll('#datalistOptions3 option'); // Get all <option> elements

      // Iterate through the <option> elements to find a match
      let selectedCategoryId = null;
      options.forEach(option => {
         if (option.value === inputValue) { // Match the input value with the option value
            selectedCategoryId = option.getAttribute('category_id'); // Get the category_id
         }
      });

      // Log or use the category_id
      if (selectedCategoryId) {
         console.log(`Selected Category ID: ${selectedCategoryId}`);
      } 
      else {
         console.log('No matching category_id found.');
      }
      this.productSearchParams.product.category_id = selectedCategoryId;

      await this.refreshProductsData();
   }

   async attribFilterOnClick(ev) {
      let attrib_id = ev.target.getAttribute("id");
      let value = ev.target.getAttribute("value");
      let isChecked = ev.target.checked; // Assuming a checkbox or similar input

      // Ensure this.product_variant_attrib_value is defined
      if (!this.product_variant_attrib_value) {
         this.product_variant_attrib_value = {};
      }

      // Ensure attrib_id exists in the object
      if (!this.product_variant_attrib_value[attrib_id]) {
         this.product_variant_attrib_value[attrib_id] = [];
      }

      if (isChecked) {
         // Add value if not already in the array
         if (!this.product_variant_attrib_value[attrib_id].includes(value)) {
               this.product_variant_attrib_value[attrib_id].push(value);
         }
      } 
      else {
         // Remove value if it exists in the array
         this.product_variant_attrib_value[attrib_id] = this.product_variant_attrib_value[attrib_id].filter(
               (item) => item !== value
         );

         // Remove attrib_id key if the array is empty
         if (this.product_variant_attrib_value[attrib_id].length === 0) {
               delete this.product_variant_attrib_value[attrib_id];
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


      this.productSearchParams.product.product_variant.product_variant_attrib_value = this.product_variant_attrib_value;

      console.log(JSON.stringify(this.product_variant_attrib_value));
      await this.refreshProductsData();

   }

   async refreshProductsData() {
      let offset = ((this.productSearchParams.page-1) * this.productSearchParams.limit);
      this.productSearchParams["offset"] = offset;


      let url = `/api/category/${this.productSearchParams.product.category_slug}/page/${this.productSearchParams.page}/limit/${this.productSearchParams.limit}/order/${this.productSearchParams.order}/view/${this.productViewType}`;

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

         const data = (await response.json()).ret_data; // Parse JSON response

         window.productCount.innerText = data.length;
         this.productView.render(window.productViewContainer, {type: this.productViewType, data: data});

      } 
      catch (error) {
         console.error('Error:', error); // Handle errors
      }

   }



}

//always the same
page = new Page();
