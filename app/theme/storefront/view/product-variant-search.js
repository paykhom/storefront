import MarketplaceLayout from "./marketplace-layout";


export default class ProductVariantSearch extends MarketplaceLayout {
  

   *head() {
      // return html`
      //     <title>Paykhom Mondi</title
      //     <meta name="title" content="Paykhom Mondi" />

      //     <meta name="description" content="Paykhom Mondi" />

      //     <meta name="keywords" content="Paykhom Mondi" />


         
      //     `;
   }

   *style() {
yield html`

      <style>
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

      <style>
         .my-scrollbar {
         overflow-y: auto; /* Enable vertical scrolling when needed */
         max-height: 200px; /* Adjust as needed */
         }

         /* For WebKit browsers (Chrome, Safari, newer Edge) */
         .my-scrollbar::-webkit-scrollbar {
         width: 8px; /* Adjust for desired slimness */
         }

         .my-scrollbar::-webkit-scrollbar-track {
         background-color: #f1f1f1; /* Light gray track color */
         }

         .my-scrollbar::-webkit-scrollbar-thumb {
         background-color: #aaa; /* Gray thumb color */
         border-radius: 4px; /* Optional: Round the thumb corners */
         }

         .my-scrollbar::-webkit-scrollbar-thumb:hover {
         background-color: #888; /* Darker gray on hover (optional) */
         }

         /* For Firefox */
         .my-scrollbar {
         scrollbar-width: thin; /* Make the scrollbar thinner */
         scrollbar-color: #aaa #f1f1f1; /* thumb-color track-color */
         }

         /* Remove the scrollbar buttons (arrows) - WebKit */
         .my-scrollbar::-webkit-scrollbar-button {
         display: none;
         }         
      </style>
`;
   }

   



   
    
  *content() {
    //dd(session('order'));
yield html`



<main>
         <!-- section-->
         <div class="xmt-4" style = "background-color: #ddd0">
            <div class="container-fluid">
               <!-- row -->
               <div class="row">
                  <div class="col-12">
                     <nav aria-label="breadcrumb" style="padding-left: 8px; padding-bottom: 8px">
                        <ol class="breadcrumb mb-0">
                           <li class="xbreadcrumb-item"><a href="/">Home</a>&nbsp;/&nbsp;</li>
                           <li class="xbreadcrumb-item"><a href="/shopping/category/page/1">Category</a>&nbsp;/&nbsp;</li>
                           <li class="xbreadcrumb-item">${this.category_title}</li>
                        </ol>
                     </nav>
                  </div>
               </div>

               <!-- <div class="row">
                  <div class="col-12">
                     <h5>${this.category_title}</h5>
                     <p>${this.category_description}</p>

                  </div>
               </div> -->

               <div class="row">
                  <div class="col-12 child-list" style="background-color: #ddd0; padding-left: 22px">
`; 
//foreach(this.sub_categories??[] as $cat) { 
for (const cat of this.sub_categories ?? []) {

   yield html`
                     <a style="border: 1px solid gray" href="/shopping/category/${cat['slug']}/page/1">${cat['title']}(${cat['tally']})</a>
`; 
} 
   yield html`
            
                  </div>

               </div>

            </div>
         </div>
         <!-- section -->
         <div class="xmt-4 mb-lg-14 mb-8 bg-bt-gray">
            <!-- container -->
            <div class="container-fluid">
               <!-- row -->
               <div class="row xgx-10">
                  <!-- col -->
                  <aside class="col-lg-3 col-md-4 mb-6 mb-md-0 d-none">
                     <div class="offcanvas offcanvas-start offcanvas-collapse w-md-50" tabindex="-1" id="offcanvasCategory" aria-labelledby="offcanvasCategoryLabel">
                        <div class="offcanvas-header d-lg-none">
                           <h5 class="offcanvas-title" id="offcanvasCategoryLabel">Filter</h5>
                           <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>




                        <div class="offcanvas-body ps-lg-2 pt-lg-0">

                           <!---
                           <div class="mb-8 mt-8" style="max-width: 390px;">
                              <h5 class="mb-3">Price</h5>
                              <div>
                                 <div id="priceRange" class="mb-3"></div>
                                 <small class="text-muted">Price:</small>
                                 <span id="priceRange-value" class="small"></span>
                              </div>
                           </div>
                           -->








                           <div class="mb-8 mt-8" style="max-width: 390px;">
                                 <h5 class="mb-3">Availability</h5>
                                 
                                 <!-- form check -->
                                    <div class="form-check mb-2">
                                       <!-- input -->
                                       <input class="form-check-input" type="checkbox" value="5" data-value="in-stock" id="availability_instock" checked />
                                       <label class="form-check-label" for="availability_instock">In Stock</label>
                                    </div>
                                 <!-- form check -->
                                    <div class="form-check mb-2">
                                       <!-- input -->
                                       <input class="form-check-input" type="checkbox" value="2" data-value="out-of-stock" id="availability_outofstock" />
                                       <label class="form-check-label" for="availability_outofstock">Out of Stock</label>
                                    </div>
                                 <!-- form check -->
                                    <div class="form-check mb-2">
                                       <!-- input -->
                                       <input class="form-check-input" type="checkbox" value="3" data-value="sold-out" id="availability_soldout" />
                                       <label class="form-check-label" for="availability_soldout">Sold Out</label>
                                    </div>
                                 <!-- form check -->
                                    <div class="form-check mb-2">
                                       <!-- input -->
                                       <input class="form-check-input" type="checkbox" value="4" data-value="call-for-price" id="availability_callforprice" />
                                       <label class="form-check-label" for="availability_callforprice">Call for Price</label>
                                    </div>
                                 <!-- form check -->
                                    <div class="form-check mb-2">
                                       <!-- input -->
                                       <input class="form-check-input" type="checkbox" value="1" data-value="discontinued" id="availability_discontinued" />
                                       <label class="form-check-label" for="availability_discontinued">Discontinued</label>
                                    </div>
                                 <!-- form check -->
                                    <div class="form-check mb-2">
                                       <!-- input -->
                                       <input class="form-check-input" type="checkbox" value="6" data-value="pre-order" id="availability_preorder" />
                                       <label class="form-check-label" for="availability_preorder">Pre Order</label>
                                    </div>
                                 <!-- form check -->
                                    <div class="form-check mb-2">
                                       <!-- input -->
                                       <input class="form-check-input" type="checkbox" value="7" data-value="up-coming" id="availability_upcoming" />
                                       <label class="form-check-label" for="availability_upcoming">Upcoming</label>
                                    </div>
                              </div>


                              

`; 
let cx = 0;
//foreach(this.attribs??[] as $attrib) { 
for (const attrib of this.attribs ?? []) {
   
   break; // intentionally, by ekn

   if (cx <= 10) {
      cx++;
   }
   else {
      continue;
   }                           
   yield html`
                           <div class="mb-8 filter-container ws-box bg-bt-white my-border" xstyle="border: 1px solid #f1f1f1; padding: 4px">
                              <div class="filter-label" style="border-bottom: 1px solid #f2f4f8">
                                 <span class="h5 mb-3">${attrib['title']}</span>
                              </div>
                              <!-- <div class="my-4">
                                 
                                 <input type="search" class="form-control" placeholder="Search by store">
                              </div> -->
                              <div class="my-scrollbar filter-body show">

   `; 
   //foreach($attrib['attrib_value']??[] as $av) { 
   for (const av of attrib['attrib_value'] ?? []) {

      yield html`

                                 <!-- form check -->
                              <div class="form-check mb-2 mt-1 ms-1">
                                 <!-- input -->
                                 <input class="form-check-input form-check-input-filter-av" type="checkbox" value="${av['content']}" id="apav_${attrib['attrib_id']}" ${(this.pvav.hasOwnProperty(attrib.attrib_id) && 
 this.pvav[attrib.attrib_id].includes(av.content)) 
  ? "checked" 
  : ""} >
                                 <label class="form-check-label" for="apav_${attrib['attrib_id']}">${av['content']}</label>
                              </div>
   `; 
   }    
   yield html`

                              </div>

                           </div>
`; 
}    
yield html`

                        </div>
                     </div>
                  </aside>
                  <section class="col-lg-12 col-md-12">
                     <!-- card
                     <div class="card mb-4 bg-light border-0">
                        <div class="card-body xp-9">
                           <h2 class="mb-0 fs-1">${this.category_title}</h2>
                        </div>
                     </div>
                     -->
                     <!-- list icon -->
                     <div class="d-lg-flex justify-content-between align-items-center">
                        <div class="mb-3 mb-lg-0">
                           <p class="mb-0">
                              <span class="h5" style="xtext-weight:bold">${this.category_title} / </span>
                              <span id="productCount" class="text-dark">${this.options['rowCount']}</span>
                              Products found
                           </p>
                        </div>

                        <!-- icon -->
                        <div class="d-md-flex justify-content-between align-items-center">
                           <div class="d-none for-the-time-being d-flex align-items-center justify-content-between">
                              <div>
`;
if (this.options['productViewType'] == 'grid') {
yield html`                                 
                                 <a id="productListViewAnchor" href="" class="text-muted me-3 productViewSwitch"><i id="productListView" class="bi bi-list-ul"></i></a>
                                 <a id="productGridViewAnchor" href="" class="me-3 active productViewSwitch"><i id="productGridView" class="bi bi-grid"></i></a>
`;
} 
else {
yield html`                                 
                                 <a id="productListViewAnchor" href="" class="me-3 active productViewSwitch"><i id="productListView" class="bi bi-list-ul"></i></a>
                                 <a id="productGridViewAnchor" href="" class="text-muted me-3 productViewSwitch"><i id="productGridView" class="bi bi-grid"></i></a>
`;
}
yield html`
                                 <!-- <a id="productListViewAnchor" href="" class="text-muted me-3 productViewSwitch"><i id="productListView" class="bi bi-list-ul"></i></a>
                                 <a id="productGridViewAnchor" href="" class="me-3 active productViewSwitch"><i id="productGridView" class="bi bi-grid"></i></a> -->
                              </div>
                              <div class="ms-2 d-lg-none">
                                 <a class="btn btn-outline-gray-400 text-muted" data-bs-toggle="offcanvas" href="#offcanvasCategory" role="button" aria-controls="offcanvasCategory">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-filter me-2">
                                       <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                                    </svg>
                                    Filters
                                 </a>
                              </div>
                           </div>

                           <div class="d-flex mt-2 mt-lg-0">
                              <div class="me-2 flex-grow-1">
                                 <!-- select option -->
                                 <!-- 
                                 <select id="howMany" class="form-select">
                                    <option selected value="2">Show: 2</option>
                                    <option value="4">4</option>
                                    <option value="20">20</option>
                                    <option value="40">40</option>
                                 </select> 
                                 -->

                                 <select id="howMany" class="form-select">
                                    <option value="24" ${this.options['limit'] == 24 ? 'selected' : ''}>24</option>
                                    <option value="48" ${this.options['limit'] == 48 ? 'selected' : ''}>48</option>
                                    <option value="100" ${this.options['limit'] == 100 ? 'selected' : ''}>100</option>
                                 </select>



                              </div>
                              <div>


                                 <select id="orderBy" class="form-select">
                                    <option value="pl2h" ${this.options['orderBy'] == 'pl2h' ? 'selected' : ''}>Price: Low to High</option>
                                    <option value="ph2l" ${this.options['orderBy'] == 'ph2l' ? 'selected' : ''}>Price: High to Low</option>
                                    <option value="idh2l" ${this.options['orderBy'] == 'idh2l' ? 'selected' : ''}>Latest Arrivals</option>
                                 </select>

                              </div>
                           </div>
                        </div>
                     </div>
                     <!-- row -->
                     <div id="productViewContainer" class="${(this.options['productViewType'] === 'grid' 
  ? 'row g-4 row-cols-xxl-6 row-cols-xl-6 row-cols-lg-4 row-cols-2 row-cols-md-2 mt-2 product-view-container' 
  : 'row g-4 row-cols-1 mt-2 product-view-container')}">

`; 
   //foreach(this.products??[] as $product) { 
   for (const product of this.products ?? []) {

      if (this.options['productViewType'] == 'grid') {
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
                                       <h2 class="fs-6" style="height: 150px; overflow: hidden; text-overflow: ellipsis; white-space: normal;">
                                          <a href="/shopping/product-variant/${product['slug']}" class="text-inherit text-decoration-none">${product['title']}</a>
                                       </h2>
                                       <ul style = "max-height: 100px;">
`;  
  let count = 0;
  //FIX IT: NOT WORKING
  //foreach ($product['product_variant_detail']??[] as $item) {
  for (const item of product['product_variant_detail'] ?? []) {

    if(count >= 3) {
        break; // exit loop after processing the first 5 items
    }
    yield html`
    											<li title="${item['content']}" style=" white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"><b>${item['attrib_title']}:&nbsp;</b>${item['content']}</li>

`;    
   count++;
  }
   yield html`
                                       </ul>
                                       <!-- <div>
                                          <small class="text-warning">
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
                                             <span class="text-dark">${product['price']}</span>
                                             <span class="text-decoration-line-through text-muted">${product['list_price']}</span>
                                          </div>
                                          <div>
                                             <a 
                                                href="#!" 
                                                class="btn btn-primary btn-sm pvs-btn-add-to-cart" 
                                                data-product-variant-id="${product['product_variant_id']}" 
                                                data-product-price="${product['price']}" 
                                                data-product-title="${product['title']}" 
                                                data-product-media-path="${product['logo_image']}" 
                                                data-product-link-product-slug="${product['slug']}" 
                                                data-product-list-price="${product['list_price']}">
                                                   <!-- <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus">
                                                      <line x1="12" y1="5" x2="12" y2="19"></line>
                                                      <line x1="5" y1="12" x2="19" y2="12"></line>
                                                   </svg> -->
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
yield html`                                 
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
                                          <a href="/shopping/product-variant/${product['slug']}">
                                             <!-- img -->
                                             <img  loading="lazy" data-src="${product['logo_image']}" alt="" class="mb-3 img-fluid">
                                          </a>
                                       </div>
                                    </div>
                                    <div class="col-md-8 col-12 flex-grow-1">
                                       <!-- heading -->
                                       <div class="text-small mb-1">
                                          <a href="#!" class="text-decoration-none text-muted"><small>Snack &amp; Munchies</small></a>
                                       </div>
                                       <h2 class="fs-6">
                                          <a href="/shopping/product-variant/${product['slug']}" class="text-inherit text-decoration-none">${product['title']}</a>
                                       </h2>
                                       
                                       <!-- <div>
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
                                             <span class="text-dark">${product['price']}</span>
                                             <span class="text-decoration-line-through text-muted">${product['list_price']}</span>
                                          </div>
                                          <div class="mt-2">
                                             <a href="#!" class="btn btn-primary pvs-btn-add-to-cart"  data-product-variant-id="${product['product_variant_id']}" data-product-price="${product['price']}" data-product-title="${product['title']}" data-product-media-path="/theme/freshcart/assets/images/product-single-img-1.jpg" data-product-link-product-slug="${product['slug']}" data-product-list-price="${product['list_price']}">
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

`;      }
   } 
yield html`

                     </div>
                     <br/>
                     <div id="paginationContainer">
                        <!-- ${"this.paginationHtml"}  -->

                     </div>
                     
                  </section>
               </div>
            </div>
         </div>
      </main>


`;        
   }
   *script() {
yield html`

   <script>
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
               yield ~
               <div class="col">
               <div class="card card-product">
                  <div class="card-body">
                     <div class="text-center position-relative">
                     <a href="/shopping/product-variant/~{product.slug}">
                        <img  xloading="lazy" src="~{product.logo_image}" alt="~{product.title}" class="mb-3 img-fluid">
                     </a>
                     </div>
                     <h2 class="fs-6">
                        <a href="/shopping/product-variant/~{product.slug}" class="text-inherit text-decoration-none">~{product.title}</a>
                     
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
                        <span class="text-dark">~{product.price}</span>
                        <span class="text-decoration-line-through text-muted">~{product.list_price}</span>
                     </div>
                     <div>
                        <a href="#!" class="btn btn-primary btn-sm pvs-btn-add-to-cart" data-product-variant-id="~{product.product_variant_id}"  data-product-variant-id="~{product.product_variant_id}" data-product-price="~{product.price}" data-product-title="~{product.title}" data-product-media-path="/theme/freshcart/assets/images/product-single-img-1.jpg" data-product-link-product-slug="~{product.slug}" data-product-list-price="~{product.list_price}">
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
            ~;

            }
            else {
               yield ~
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
                                          <a href="/shopping/product-variant/~{product.slug}">
                                             <!-- img -->
                                             <img  xloading="lazy" src="~{product.logo_image}" alt="" class="mb-3 img-fluid">
                                          </a>
                                       </div>
                                    </div>
                                    <div class="col-md-8 col-12 flex-grow-1">
                                       <!-- heading -->
                                       <div class="text-small mb-1">
                                          <!-- <a href="#!" class="text-decoration-none text-muted"><small>Snack &amp; Munchies</small></a> -->
                                       </div>
                                       <h2 class="fs-6">
                                          <a href="/shopping/product-variant/~{product.slug}" class="text-inherit text-decoration-none">~{product.title}</a>
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
                                             <span class="text-dark">~{product.price}</span>
                                             <span class="text-decoration-line-through text-muted">~{product.list_price}</span>
                                          </div>
                                          <div class="mt-2">
                                             <a href="#!" class="btn btn-primary pvs-btn-add-to-cart"  data-product-variant-id="~{product.product_variant_id}"  data-product-variant-id="~{product.product_variant_id}" data-product-price="~{product.price}" data-product-title="~{product.title}" data-product-media-path="/theme/freshcart/assets/images/product-single-img-1.jpg" data-product-link-product-slug="~{product.slug}" data-product-list-price="~{product.list_price}">
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
               
               ~;
            }
         }         
      }
      
      class Page extends MarketplaceLayout {
         constructor(args) {
            super(args);

            this.productViewType = PRODUCT_GRID_VIEW;

            this.productView = new ProductView();

            this.options = ${JSON.stringify(this.options)};

                                                   
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
            this.product_variant_detail = ${JSON.stringify(this.pvav)};
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
            
            let url = ~/shopping/category/~{this.productSearchParams.product.category_slug}/page/~{this.productSearchParams.page}/limit/~{this.productSearchParams.limit}/order/~{this.productSearchParams.order}/view/~{this.productViewType}~;

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
                     throw new Error(~HTTP error! Status: ~{response.status}~);
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

   </script>
`;
   }
}