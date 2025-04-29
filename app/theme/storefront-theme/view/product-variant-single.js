import MarketplaceLayout from "./marketplace-layout";

export default class ProductVariantSingle extends MarketplaceLayout {

	*style(){
yield html`
		<style>
			/* .product {
				background-image: url(/_media/${this.product['product_media'] ?? "no_image.jpg"});
			} */

			.table
			{
				display: table;
				border-collapse: separate;
				box-sizing: border-box;
				text-indent: initial;
				unicode-bidi: isolate;
				border-spacing: 2px;
				border-color: gray;
			}

			.tbody {
                display: table-row-group;
                vertical-align: middle;
                unicode-bidi: isolate;
                border-color: inherit;
                }

			.product-price-options 
    			{
            display: flex;
            justify-content: space-between;
            padding-bottom: 20px;
			box-sizing: border-box;
    			}
			

				.child-list {
            padding: 0;
            width: 100%;
            margin: 0 0 15px;
            xbackground: #fff;
         }

				.child-list span {
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
         
         /* .child-list a:hover {
            background: #3749bb;
            border: 1px solid #3749bb;
            color: #fff;
            text-decoration: none;
         } 		 */
		</style>
`;	
}


	* head() {
		yield html`
        <title>${this.product['title']} - Paykhom Mondi</title>
		<meta property="og:image:alt" content="${this.product['title']}">
		<meta property="og:image" content="${this.origin}/_media/${this.product['product_media'] ?? "no_image.jpg"}">
		<meta content="${this.product['product_media'] ?? "no_image.jpg"}">
		<meta property="og:title" content="${this.product['title']}>
		<meta property="og:url" content="/product/${this.product['slug']}>
		<meta property="og:site_name" content="Paykhom Mondi">
		<meta name="description" property="og:description">
		<meta name="???" content="${this.product['description']}">

        <meta name="title" content="${this.product['title']} - Paykhom Mondi">
         <meta name="description" content="${this.product['description']}" >
        <meta name="keywords" content="${this.product['title']} | Paykhom Mondi" >

        `;	
		}

	*	content() {

		yield html`



<main>
			<div class="mt-4">
				<div class="container-fluid">
					<!-- row -->
					<div class="row">
						<!-- col -->
						<div class="col-12">
							<!-- breadcrumb -->
							<nav aria-label="breadcrumb">
								<ol class="breadcrumb mb-0">
									<li class="breadcrumb-item"><a href="/">Home</a></li>
									<li class="breadcrumb-item"><a href="/shopping/category/${this.product['category_slug']}</page/1">${this.product['category_title']}</a></li>

									<li class="breadcrumb-item active" aria-current="page">${this.product['title']}</li>
								</ol>
							</nav>
						</div>
					</div>
				</div>
			</div>
			<section class="mt-8">
				<div class="container-fluid">
					<div class="row">
						<div class="col-xxl-5 col-xl-5 col-lg-5  col-md-5 col-sm-12">
							<div xclass="zoom" xonmousemove="zoom(event)" xstyle="background-image: url(/theme/freshcart/assets/images/product-single-img-1.jpg)">
											<!-- img -->
											<img class="img-fluid" loading="lazy" data-src="${this.product['logo_image']}" alt="" style="width:100%">
							</div>
						</div>
						<div class="col-xxl-7 col-xl-7 col-lg-7 col-md-7 col-sm-12">
							<div class="ps-lg-10 mt-6 mt-md-0">
								<!-- content -->
								<!-- heading -->
								<h1 id="product__title" data-product-title="${this.product['title']} class="mb-1">${this.product['title']}</h1>
								<div class="child-list">
									<span id="product__list_price" data-product-list-price="${this.product['list_price']}" style="color:red" >Regular Price: <b style="text-decoration: line-through">${this.product['list_price']}</b>&nbsp;</span>
									<span style="color:blue"><b>${((((this.product['price']?? 0) == 0? 0: (this.product['list_price'] / this.product['price'])) - 1) * 100 ,2).toFixed(2)}</b>% Off&nbsp;</span>
									<span id="product__price" data-product-price="${this.product['price']}" style="color:green" >Price: <b>${this.product['price']}</b>&nbsp;</span>
									<span id="inventory_id" data-product-variant-id="${this.product['inventory_id']}">Product Code: <b>${this.product['inventory_id']}</b>&nbsp;</span>
									<span >Brand: <b>${this.product['brand_title']}</b>&nbsp;</span>
									<span >Status: <b>${this.product['availability_title']}</b>&nbsp;</span>


									<span class="d-none" id="product__product_media_path" data-product-media-path="${this.product['logo_image']}"></span>									
									<span class="d-none" id="product__link_product_slug" data-product-link-product-slug="${this.product['slug']}"></span>									
								</div>



								<div class="product-short-info">
										

									<div class="short-description" itemprop="offers" itemscope="" itemtype="http://schema.org/Offer">
                            				<link itemprop="availability" href="http://schema.org/InStock">
                            				<link itemprop="itemCondition" href="http://schema.org/NewCondition">
											<meta itemprop="priceCurrency" content="BDT">
											<meta itemprop="price" content="23199.0000">
										<h2>Key Features</h2>					
										<ul>
`;  
  let count = 0;
  //foreach (this.product['inventory_detail']??[] as $item) {
	for(let item of this.product['inventory_detail']??[]) {
    if(count >= 5) {
        break; // exit loop after processing the first 5 items
    }											
	yield html`<li><b>${item['attrib_title']}:&nbsp;</b>${item['content']}</li>

`;    
count++;
  }											
  	yield html`<li class="view-more" data-area="specification"><a href="#view-more-info">View More Info</a></li>
										</ul>
									</div>
                        		</div>
								<!-- hr -->
								<hr class="my-6">
								<!-- <div class="mb-5">
									<button type="button" class="btn btn-outline-secondary">250g</button>
									
									<button type="button" class="btn btn-outline-secondary">500g</button>
									
									<button type="button" class="btn btn-outline-secondary">1kg</button>
								</div> -->

								
								<div>
									<!-- input -->
									<div class="input-group input-spinner" data-product-variant-id="${this.product['inventory_id']}">
									<input type="button" value="-" class="button-minus btn btn-sm btn-quantity-minus" data-field="quantity">
                              <input id="product_quantity" type="number" data-product-variant-id="${this.product['inventory_id']}" step="1" max="10" value="1" name="quantity" class="quantity-field form-control-sm form-input">
                              <input type="button" value="+" class="button-plus btn btn-sm btn-quantity-plus" data-field="quantity">
									</div>
								</div>


								<div class="mt-3 row justify-content-start g-2 align-items-center">
                           <div class="col-xxl-4 col-lg-4 col-md-5 col-5 d-grid">
                              <!-- button -->
                              <!-- btn -->
                              <button type="button" class="btn btn-primary  btn-add-to-cart" data-product-variant-id="${this.product['inventory_id']}">
                                 <i class="feather-icon icon-shopping-bag me-2"></i>
                                 Add to cart
                              </button>
                           </div>
                     		</div>
																 
								<div class="mt-8">
									<!-- dropdown -->

									<h5>Share it: </h5>

									<hr/>

									<div class="d-flex gap-3 ">
										<div class="transition-all hover:opacity-[0.8]">
											<a href="#" class="btn-share-on-social-media" data-preformat="https://www.facebook.com/sharer/sharer.php?u=%s" aria-label="Facebook" xrole="button" xtabindex="0">
												<svg width="40" height="40" viewBox="0 0 40 40" fill="none"
													xmlns="http://www.w3.org/2000/svg">
													<rect width="40" height="40" rx="20" fill="#1877F2"></rect>
													<path d="M21.4986 29V20.4181H24.4381L24.8821 17.0017H21.4986V14.8337C21.4653 14.3953 21.5875 13.9591 21.8439 13.6008C22.0271 13.4412 22.2423 13.3221 22.4752 13.2512C22.7081 13.1803 22.9535 13.1592 23.1952 13.1895L25 13.1751V10.1366C24.1276 10.0349 23.2493 9.99091 22.371 10.0051C21.7836 9.9769 21.1966 10.0663 20.6447 10.2681C20.0928 10.4698 19.5874 10.7797 19.1583 11.1793C18.7403 11.6214 18.4178 12.1439 18.2108 12.7146C18.0039 13.2854 17.9169 13.8922 17.9551 14.4977V17.0017H15V20.4073H17.9539V28.9892L21.4986 29Z" fill="white"></path>
												</svg>
											</a>
										</div>
										<!-- <div class="transition-all hover:opacity-[0.8]">
											<a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmondi.paykhom.com%2Fchinigura-chaal&amp;amp;text=" aria-label="Twitter" role="button" tabindex="0">
												<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
													<rect width="40" height="40" rx="20" fill="#1A1A1A"></rect>
													<path d="M10.0479 11L17.7698 20.9281L10 29H11.7482L18.5524 21.9329L24.0488 29H30L21.8431 18.5142L29.0766 11H27.3274L21.0625 17.5084L16 11H10.0479ZM12.62 12.239H15.3546L27.4279 27.761H24.6933L12.62 12.239Z" fill="white" stroke="white" stroke-miterlimit="10"></path>
												</svg>
											</a>
										</div>
										<div class="transition-all hover:opacity-[0.8]">
											<a href="https://pinterest.com/pin/create/button/?url=https%3A%2F%2Fmondi.paykhom.com%2Fchinigura-chaal&amp;amp;media=https%3A%2F%2Fmondi.paykhom.com%2Fcache%2Fmedium%2Fproduct%2F2%2FXfrBVFhoiKPrVBCbHovLOh66R32N5T2ClfTKFcnS.webp&amp;amp;description=" aria-label="Pinterest" role="button" tabindex="0">
												<svg width="40" height="40" viewBox="0 0 40 40" fill="none"
													xmlns="http://www.w3.org/2000/svg">
 													<g clip-path="url(#clip0_1607_44738)">
														<path d="M0 19.9998C0 28.1892 4.92467 35.2247 11.9717 38.3179C11.9154 36.9213 11.9617 35.2448 12.3198 33.7253C12.7043 32.1018 14.8932 22.8275 14.8932 22.8275C14.8932 22.8275 14.2543 21.5505 14.2543 19.6632C14.2543 16.6994 15.9721 14.4859 18.1115 14.4859C19.9307 14.4859 20.8096 15.8522 20.8096 17.4884C20.8096 19.3171 19.6432 22.0525 19.0434 24.586C18.5423 26.7076 20.1071 28.438 22.2001 28.438C25.9894 28.438 28.5416 23.5711 28.5416 17.8047C28.5416 13.4214 25.5893 10.1405 20.2195 10.1405C14.1526 10.1405 10.3731 14.6648 10.3731 19.7184C10.3731 21.4608 10.8868 22.6895 11.6915 23.6411C12.0615 24.0781 12.1129 24.2539 11.979 24.7557C11.8831 25.1237 11.6628 26.0096 11.5715 26.3607C11.4384 26.8672 11.0279 27.0483 10.5701 26.8613C7.77575 25.7206 6.47435 22.6605 6.47435 19.2206C6.47435 13.5393 11.2659 6.727 20.7684 6.727C28.4043 6.727 33.43 12.2525 33.43 18.1837C33.43 26.0293 29.0682 31.8905 22.6385 31.8905C20.4793 31.8905 18.4482 30.7234 17.7524 29.3976C17.7524 29.3976 16.5913 34.0056 16.3454 34.8955C15.9213 36.4374 15.0913 37.9786 14.3324 39.1799C16.1312 39.7108 18.0313 40 20.0007 40C31.045 40 40 31.0457 40 19.9998C40 8.95429 31.045 0 20.0007 0C8.95528 0 0 8.95429 0 19.9998Z" fill="#CB1F27"></path>
													</g>
													<defs>
														<clipPath id="clip0_1607_44738">
															<rect width="40" height="40" rx="20" fill="white"></rect>
														</clipPath>
													</defs>
												</svg>
											</a>
										</div>
										<div class="transition-all hover:opacity-[0.8]">
											<a href="https://www.linkedin.com/shareArticle?mini=true&amp;amp;url=https%3A%2F%2Fmondi.paykhom.com%2Fchinigura-chaal&amp;amp;title=Chinigura+Chaal&amp;amp;summary=" aria-label="Linkedin" role="button" tabindex="0">
												<svg width="40" height="40" viewBox="0 0 40 40" fill="none"
													xmlns="http://www.w3.org/2000/svg">
													<rect width="40" height="40" rx="20" fill="#1D8DEE"></rect>
													<path d="M30.9981 31H26.443V23.8541C26.443 22.1501 26.4126 19.9565 24.074 19.9565C21.7015 19.9565 21.3385 21.813 21.3385 23.73V30.9994H16.7835V16.3046H21.1563V18.3128C22.0466 16.7878 23.7695 15.8736 25.532 15.9392C30.1487 15.9392 31 18.9811 31 22.9386L30.9981 31ZM11.6439 14.2959C10.1938 14.2959 9 13.1007 9 11.648C9 10.1953 10.1933 9 11.6434 9C13.0933 9 14.2865 10.1951 14.2867 11.6474C14.2867 13.0998 13.0938 14.2957 11.6439 14.2959ZM13.9214 31H9.36164V16.3046H13.9214V31Z" fill="white"></path>
												</svg>
											</a>
										</div>
										<div class="transition-all hover:opacity-[0.8]">
											<a href="whatsapp://send?text=+https%3A%2F%2Fmondi.paykhom.com%2Fchinigura-chaal" data-action="share/whatsapp/share" target="_blank" aria-label="Whatsapp" role="button" tabindex="0">
												<svg width="40" height="40" viewBox="0 0 40 40" fill="none"
													xmlns="http://www.w3.org/2000/svg">
 													<rect width="40" height="40" rx="20" fill="url(#paint0_linear_2569_5464)"></rect>
													<path d="M7 33L8.83631 26.3234C7.70317 24.3691 7.10776 22.1537 7.10885 19.8819C7.11212 12.7796 12.9193 7 20.0544 7C23.517 7.00108 26.7672 8.34333 29.212 10.7787C31.6557 13.214 33.0011 16.451 33 19.8938C32.9967 26.9973 27.1896 32.7768 20.0544 32.7768C17.8883 32.7758 15.7537 32.2352 13.863 31.2082L7 33ZM14.1809 28.8758C16.0052 29.9537 17.7468 30.5993 20.0501 30.6004C25.9802 30.6004 30.811 25.7969 30.8143 19.8917C30.8165 13.9745 26.0085 9.1775 20.0588 9.17533C14.1243 9.17533 9.29674 13.9788 9.29457 19.883C9.29348 22.2934 10.0032 24.0982 11.1951 25.9865L10.1077 29.9385L14.1809 28.8758ZM26.5756 22.9564C26.4951 22.8221 26.2796 22.7419 25.9552 22.5805C25.6319 22.4191 24.0416 21.6402 23.7444 21.5329C23.4484 21.4257 23.2329 21.3715 23.0162 21.6943C22.8007 22.0161 22.1803 22.7419 21.992 22.9564C21.8036 23.1709 21.6142 23.198 21.291 23.0366C20.9677 22.8752 19.9249 22.5361 18.6894 21.4387C17.7283 20.585 17.0785 19.5309 16.8901 19.2081C16.7018 18.8863 16.8706 18.7119 17.0316 18.5516C17.1775 18.4075 17.3549 18.1757 17.5171 17.9872C17.6815 17.8008 17.7348 17.6665 17.8437 17.4509C17.9514 17.2364 17.8981 17.0479 17.8165 16.8865C17.7348 16.7262 17.0883 15.1413 16.8194 14.4967C16.556 13.8694 16.2893 13.9539 16.0912 13.9442L15.4707 13.9333C15.2552 13.9333 14.9047 14.0135 14.6086 14.3363C14.3126 14.6592 13.4766 15.437 13.4766 17.0219C13.4766 18.6068 14.6359 20.1376 14.797 20.3521C14.9591 20.5666 17.0774 23.8188 20.3222 25.213C21.0939 25.5445 21.697 25.7428 22.1661 25.8912C22.9411 26.136 23.6465 26.1013 24.2038 26.019C24.8253 25.9269 26.1174 25.2401 26.3873 24.4883C26.6573 23.7353 26.6573 23.0907 26.5756 22.9564Z" fill="white"></path>
													<defs>
														<linearGradient id="paint0_linear_2569_5464" x1="19.5928" y1="2.40043" x2="19.7955" y2="36.5829" gradientUnits="userSpaceOnUse">
															<stop stop-color="#57D163"></stop>
															<stop offset="1" stop-color="#23B33A"></stop>
														</linearGradient>
													</defs>
												</svg>
											</a>
										</div> -->
									</div>

									<!-- <div class=" d-none dropdown">
										<a class="btn btn-outline-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Share</a>

										<ul class="dropdown-menu">
											<li>
												<a class="dropdown-item btn-share-on-social-media"href="#">
													<i class="bi bi-facebook me-2"></i>
													Facebook
												</a>
											</li>
											<li>
												<a class="dropdown-item btn-share-on-social-media" data-preformat="https://www.facebook.com/sharer/sharer.php?u=%s" href="#">
													<i class="bi bi-twitter me-2"></i>
													Twitter
												</a>
											</li>
											<li>
												<a class="dropdown-item btn-share-on-social-media" data-preformat="https://www.facebook.com/sharer/sharer.php?u=%s" href="#">
													<i class="bi bi-instagram me-2"></i>
													Instagram
												</a>
											</li>
										</ul>
									</div> -->
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section class="mt-lg-14 mt-8">
				<div class="container-fluid">
					<div class="row">
						<div class="col-md-12">
							<ul id="view-more-info" class="nav nav-pills nav-lb-tab d-none" id="myTab" role="tablist">
								<!-- nav item -->
								<li class="nav-item" role="presentation">
									<!-- btn -->
									<button class="nav-link active" id="product-tab" data-bs-toggle="tab" data-bs-target="#product-tab-pane" type="button" role="tab" aria-controls="product-tab-pane" aria-selected="true">
										Product Details
									</button>
								</li>
								


								<li class="nav-item xd-none" role="presentation">
									<button class="nav-link" id="details-tab" data-bs-toggle="tab" data-bs-target="#details-tab-pane" type="button" role="tab" aria-controls="details-tab-pane" aria-selected="false" tabindex="-1">
										Information
									</button>
								</li>
								

								<li class="nav-item xd-none" role="presentation">
									<button class="nav-link" id="reviews-tab" data-bs-toggle="tab" data-bs-target="#reviews-tab-pane" type="button" role="tab" aria-controls="reviews-tab-pane" aria-selected="false" tabindex="-1">
										Reviews
									</button>
								</li>




								<!-- nav item -->
								<!-- <li class="nav-item" role="presentation">
									<button class="nav-link" id="sellerInfo-tab" data-bs-toggle="tab" data-bs-target="#sellerInfo-tab-pane" type="button" role="tab" aria-controls="sellerInfo-tab-pane" aria-selected="false" disabled="" tabindex="-1">
										Seller Info
									</button>
								</li> -->
							</ul>
							<!-- tab content -->
							<div class="tab-content d-none" id="myTabContent">
								<!-- tab pane -->
								<div class="tab-pane fade show active" id="product-tab-pane" role="tabpanel" aria-labelledby="product-tab" tabindex="0">
									<div class="my-8">
									${this.product['product_content']}	

									${this.product['description']}	
                                    </div>
								</div>
								<!-- tab pane -->
								<div class="tab-pane fade" id="details-tab-pane" role="tabpanel" aria-labelledby="details-tab" tabindex="0">
									<div class="my-8">
										<div class="row">
											<div class="col-12">
												<h4 class="mb-4">Details</h4>
											</div>
											<div class="col-12 col-lg-6">
												<table class="table table-striped">
													<!-- table -->
													<tbody>
														<tr>
															<th>Weight</th>
															<td>1000 Grams</td>
														</tr>
														<tr>
															<th>Ingredient Type</th>
															<td>Vegetarian</td>
														</tr>
														<tr>
															<th>Brand</th>
															<td>Dmart</td>
														</tr>
														<tr>
															<th>Item Package Quantity</th>
															<td>1</td>
														</tr>
														<tr>
															<th>Form</th>
															<td>Larry the Bird</td>
														</tr>
														<tr>
															<th>Manufacturer</th>
															<td>Dmart</td>
														</tr>
														<tr>
															<th>Net Quantity</th>
															<td>340.0 Gram</td>
														</tr>
														<tr>
															<th>Product Dimensions</th>
															<td>9.6 x 7.49 x 18.49 cm</td>
														</tr>
													</tbody>
												</table>
											</div>
											<div class="col-12 col-lg-6">
												<table class="table table-striped">
													<!-- table -->
													<tbody>
														<tr>
															<th>ASIN</th>
															<td>SB0025UJ75W</td>
														</tr>
														<tr>
															<th>Best Sellers Rank</th>
															<td>#2 in Fruits</td>
														</tr>
														<tr>
															<th>Date First Available</th>
															<td>30 April 2022</td>
														</tr>
														<tr>
															<th>Item Weight</th>
															<td>500g</td>
														</tr>
														<tr>
															<th>Generic Name</th>
															<td>Banana Robusta</td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
									</div>
								</div>
								<!-- tab pane -->
								<div class="tab-pane fade" id="reviews-tab-pane" role="tabpanel" aria-labelledby="reviews-tab" tabindex="0">
									<div class="my-8">
										<!-- row -->
										<div class="row">
											<div class="col-md-4">
												<div class="me-lg-12 mb-6 mb-md-0">
													<div class="mb-5">
														<!-- title -->
														<h4 class="mb-3">Customer reviews</h4>
														<span>
															<!-- rating -->
															<small class="text-warning">
																<i class="bi bi-star-fill"></i>
																<i class="bi bi-star-fill"></i>
																<i class="bi bi-star-fill"></i>
																<i class="bi bi-star-fill"></i>
																<i class="bi bi-star-half"></i>
															</small>
															<span class="ms-3">4.1 out of 5</span>
															<small class="ms-3">130 global ratings</small>
														</span>
													</div>
													<div class="mb-8">
														<!-- progress -->
														<div class="d-flex align-items-center mb-2">
															<div class="text-nowrap me-3 text-muted">
																<span class="d-inline-block align-middle text-muted">5</span>
																<i class="bi bi-star-fill ms-1 small text-warning"></i>
															</div>
															<div class="w-100">
																<div class="progress" style="height: 6px">
																	<div class="progress-bar bg-warning" role="progressbar" style="width: 60%" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
																</div>
															</div>
															<span class="text-muted ms-3">53%</span>
														</div>
														<!-- progress -->
														<div class="d-flex align-items-center mb-2">
															<div class="text-nowrap me-3 text-muted">
																<span class="d-inline-block align-middle text-muted">4</span>
																<i class="bi bi-star-fill ms-1 small text-warning"></i>
															</div>
															<div class="w-100">
																<div class="progress" style="height: 6px">
																	<div class="progress-bar bg-warning" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="50"></div>
																</div>
															</div>
															<span class="text-muted ms-3">22%</span>
														</div>
														<!-- progress -->
														<div class="d-flex align-items-center mb-2">
															<div class="text-nowrap me-3 text-muted">
																<span class="d-inline-block align-middle text-muted">3</span>
																<i class="bi bi-star-fill ms-1 small text-warning"></i>
															</div>
															<div class="w-100">
																<div class="progress" style="height: 6px">
																	<div class="progress-bar bg-warning" role="progressbar" style="width: 35%" aria-valuenow="35" aria-valuemin="0" aria-valuemax="35"></div>
																</div>
															</div>
															<span class="text-muted ms-3">14%</span>
														</div>
														<!-- progress -->
														<div class="d-flex align-items-center mb-2">
															<div class="text-nowrap me-3 text-muted">
																<span class="d-inline-block align-middle text-muted">2</span>
																<i class="bi bi-star-fill ms-1 small text-warning"></i>
															</div>
															<div class="w-100">
																<div class="progress" style="height: 6px">
																	<div class="progress-bar bg-warning" role="progressbar" style="width: 22%" aria-valuenow="22" aria-valuemin="0" aria-valuemax="22"></div>
																</div>
															</div>
															<span class="text-muted ms-3">5%</span>
														</div>
														<!-- progress -->
														<div class="d-flex align-items-center mb-2">
															<div class="text-nowrap me-3 text-muted">
																<span class="d-inline-block align-middle text-muted">1</span>
																<i class="bi bi-star-fill ms-1 small text-warning"></i>
															</div>
															<div class="w-100">
																<div class="progress" style="height: 6px">
																	<div class="progress-bar bg-warning" role="progressbar" style="width: 14%" aria-valuenow="14" aria-valuemin="0" aria-valuemax="14"></div>
																</div>
															</div>
															<span class="text-muted ms-3">7%</span>
														</div>
													</div>
													<!-- <div class="d-grid">
														<h4>Review this product</h4>
														<p class="mb-0">Share your thoughts with other customers.</p>
														<a href="#" class="btn btn-outline-gray-400 mt-4 text-muted">Write the Review</a>
													</div> -->
												</div>
											</div>
											<!-- col -->
											<div class="col-md-8">
												
											</div>
										</div>
									</div>
								</div>
								<!-- tab pane -->
								<div class="tab-pane fade" id="sellerInfo-tab-pane" role="tabpanel" aria-labelledby="sellerInfo-tab" tabindex="0">...</div>
							</div>

							<!-- product details section -->
							<section class="">
								<div class="my-8">
									<h4 class="mb-4">Product Details</h4>
										${this.product['product_content']}	
										
										${this.product['description']}	
								</div>

							</section>
							<!-- /product details section -->


							<!-- attribs section -->
							<section class="">
								<div class="my-8">
									<div class="row">
										<div class="col-12">
											<h4 class="mb-4">Product Features</h4>
											<table class="table table-striped">
												<!-- table -->
												<tbody>
													
												<tr>
														<th>Feature</th>
														<th>Particulars</th>
												</tr>



`;  
  //foreach (this.product['inventory_detail']??[] as $item) {
  for(let item of this.product['inventory_detail']??[]) {
yield html`
														<tr>
															<td>${item['attrib_title']}</td>
															<td>${item['content']}</td>
														</tr>
`;  }
yield html`</tbody>
												</table>

										</div>
									</div>
								</div>
							</section>
							<!-- /attribs section -->
							<!-- price_description section -->
							<section class="">
							<div class="section-head">
        						<h2>What is the price of ${this.product['title']} in Bangladesh?</h2>
							</div>
							<p>The latest price of ${this.product['title']} in Bangladesh is ${this.product['price']}. You can buy the ${this.product['title']} at best price from our website or visit any of our showrooms.</p>
							</section>
							<!-- /price_description section -->
							 <br>

							<!-- reviews section -->
							<section class="">
							<div class="section-head">
        						<h2>Reviews of ${this.product['title']}</h2>
							</div>
							<br>
							<div class="row">
                                 <div class="col-md-4">
                                    <div class="me-lg-12 mb-6 mb-md-0">
                                       <div class="mb-5">
                                          <!-- title -->
                                          <h4 class="mb-3">Customer reviews</h4>
                                          <span>
                                             <!-- rating -->
                                             <small class="text-warning">
                                                <i class="bi bi-star-fill"></i>
                                                <i class="bi bi-star-fill"></i>
                                                <i class="bi bi-star-fill"></i>
                                                <i class="bi bi-star-fill"></i>
                                                <i class="bi bi-star-half"></i>
                                             </small>
                                             <span class="ms-3">4.1 out of 5</span>
                                             <small class="ms-3">11,130 global ratings</small>
                                          </span>
                                       </div>
                                       <div class="mb-8">
                                          <!-- progress -->
                                          <div class="d-flex align-items-center mb-2">
                                             <div class="text-nowrap me-3 text-muted">
                                                <span class="d-inline-block align-middle text-muted">5</span>
                                                <i class="bi bi-star-fill ms-1 small text-warning"></i>
                                             </div>
                                             <div class="w-100">
                                                <div class="progress" style="height: 6px">
                                                   <div class="progress-bar bg-warning" role="progressbar" style="width: 60%" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                             </div>
                                             <span class="text-muted ms-3">53%</span>
                                          </div>
                                          <!-- progress -->
                                          <div class="d-flex align-items-center mb-2">
                                             <div class="text-nowrap me-3 text-muted">
                                                <span class="d-inline-block align-middle text-muted">4</span>
                                                <i class="bi bi-star-fill ms-1 small text-warning"></i>
                                             </div>
                                             <div class="w-100">
                                                <div class="progress" style="height: 6px">
                                                   <div class="progress-bar bg-warning" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="50"></div>
                                                </div>
                                             </div>
                                             <span class="text-muted ms-3">22%</span>
                                          </div>
                                          <!-- progress -->
                                          <div class="d-flex align-items-center mb-2">
                                             <div class="text-nowrap me-3 text-muted">
                                                <span class="d-inline-block align-middle text-muted">3</span>
                                                <i class="bi bi-star-fill ms-1 small text-warning"></i>
                                             </div>
                                             <div class="w-100">
                                                <div class="progress" style="height: 6px">
                                                   <div class="progress-bar bg-warning" role="progressbar" style="width: 35%" aria-valuenow="35" aria-valuemin="0" aria-valuemax="35"></div>
                                                </div>
                                             </div>
                                             <span class="text-muted ms-3">14%</span>
                                          </div>
                                          <!-- progress -->
                                          <div class="d-flex align-items-center mb-2">
                                             <div class="text-nowrap me-3 text-muted">
                                                <span class="d-inline-block align-middle text-muted">2</span>
                                                <i class="bi bi-star-fill ms-1 small text-warning"></i>
                                             </div>
                                             <div class="w-100">
                                                <div class="progress" style="height: 6px">
                                                   <div class="progress-bar bg-warning" role="progressbar" style="width: 22%" aria-valuenow="22" aria-valuemin="0" aria-valuemax="22"></div>
                                                </div>
                                             </div>
                                             <span class="text-muted ms-3">5%</span>
                                          </div>
                                          <!-- progress -->
                                          <div class="d-flex align-items-center mb-2">
                                             <div class="text-nowrap me-3 text-muted">
                                                <span class="d-inline-block align-middle text-muted">1</span>
                                                <i class="bi bi-star-fill ms-1 small text-warning"></i>
                                             </div>
                                             <div class="w-100">
                                                <div class="progress" style="height: 6px">
                                                   <div class="progress-bar bg-warning" role="progressbar" style="width: 14%" aria-valuenow="14" aria-valuemin="0" aria-valuemax="14"></div>
                                                </div>
                                             </div>
                                             <span class="text-muted ms-3">7%</span>
                                          </div>
                                       </div>
                                       
                                    </div>
                                 </div>
                                 <!-- col -->
                                 <div class="col-md-8">
                                    
                                    <div>
                                       <!-- rating -->
                                       <h4 class="mb-3">Create Review</h4>
                                       
                                       <!-- form control -->
                                       <div class="border-bottom py-4 mb-4">
                                          <h5>Add a headline</h5>
                                          <input type="text" class="form-control" placeholder="What’s most important to know">
                                       </div>
                                       
                                       <div class="py-4 mb-4">
                                          <!-- heading -->
                                          <h5>Add a written review</h5>
                                          <textarea class="form-control" rows="3" placeholder="What did you like or dislike? What did you use this product for?"></textarea>
                                       </div>
                                       <!-- button -->
                                       <div class="d-flex justify-content-end">
                                          <a href="#" class="btn btn-primary">Submit Review</a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
							</section>
							<!-- /reviews section -->

							<!-- questions section -->
							<section class="">
    							
							</section>
							<!-- /questions section -->


							<!--  Ask questions section -->
							  <br>

							<section class="ask-question q-n-r-section bg-white m-tb-15" id="ask-question">
								<div class="section-head">
       								 <h2>Frequently Asked Questions (FAQs)</h2>
    							</div>

<p class="ng-star-inserted"><strong class="ng-star-inserted"><span class="ng-star-inserted">Q: How long will it take to ship my order?</span></strong></p>
<ul class="ng-star-inserted">
<li class="ng-star-inserted">
<p class="ng-star-inserted"><span class="ng-star-inserted">Shipping times vary depending on your location and the shipping option you choose at checkout. You'll see estimated delivery dates before completing your purchase. Generally, orders are processed within 1-2 business days and shipping takes 3-7 business days. You will receive a tracking number when your order ships.</span></p>
</li>
</ul>
<p class="ng-star-inserted"><strong class="ng-star-inserted"><span class="ng-star-inserted">Q: What is your return policy?</span></strong></p>
<ul class="ng-star-inserted">
<li class="ng-star-inserted">
<p class="ng-star-inserted"><span class="ng-star-inserted">We want you to be happy with your purchase! We offer a 30-day return policy for most items, provided they are in their original condition and packaging. Please see our full return policy page for details and any exceptions.</span></p>
</li>
</ul>
<p class="ng-star-inserted"><strong class="ng-star-inserted"><span class="ng-star-inserted">Q: How can I track my order?</span></strong></p>
<ul class="ng-star-inserted">
<li class="ng-star-inserted">
<p class="ng-star-inserted"><span class="ng-star-inserted">Once your order ships, you'll receive an email with a tracking number. You can use this number to track your package on the carrier's website.</span></p>
</li>
</ul>
<p class="ng-star-inserted"><strong class="ng-star-inserted"><span class="ng-star-inserted">Q: What payment methods do you accept?</span></strong></p>
<ul class="ng-star-inserted">
<li class="ng-star-inserted">
<p class="ng-star-inserted"><span class="ng-star-inserted">We accept a variety of payment methods, including Visa, Mastercard, bKash, Nagad, Rocket, Upay, Cash-on-Delivery (COD), TT, Pay Order and Bank Account Transfers. You'll see the available options at checkout.</span></p>
</li>
</ul>
<p class="ng-star-inserted"><strong class="ng-star-inserted"><span class="ng-star-inserted">Q: Is this product covered by a warranty?</span></strong></p>
<ul class="ng-star-inserted">
<li class="ng-star-inserted">
<p class="ng-star-inserted"><span class="ng-star-inserted">Many of our products come with a 1-year warranty or more, against manufacturing defects. See the warranty details included with your product for more information. Please note that this product does not come with a formal warranty, but we are committed to excellent customer service. Warranty information, if applicable, is located under the product specifications on this page.</span></p>
</li>
</ul>
<p class="ng-star-inserted"><strong class="ng-star-inserted"><span class="ng-star-inserted">Q: What if I receive a damaged item?</span></strong></p>
<ul class="ng-star-inserted">
<li class="ng-star-inserted">
<p class="ng-star-inserted"><span class="ng-star-inserted">If your order arrives damaged, please contact our customer service team within 48 hours of receiving the package with photos of the damage and packaging. We'll arrange a replacement or a refund for you.</span></p>
</li>
</ul>
<p class="ng-star-inserted"><strong class="ng-star-inserted"><span class="ng-star-inserted">Q: How can I contact customer support?</span></strong></p>
<ul class="ng-star-inserted">
<li class="ng-star-inserted">
<p class="ng-star-inserted"><span class="ng-star-inserted">You can reach our customer support team via email, phone, live chat. Email us at&nbsp;</span>support@Paykhom.com, call us at +8801534003442, or use the chat icon available on this site. We're happy to help with any questions!</span></p>
</li>
</ul>
<p class="ng-star-inserted"><strong class="ng-star-inserted"><span class="ng-star-inserted">Q: Is my payment information secure?</span></strong></p>
<ul class="ng-star-inserted">
<li class="ng-star-inserted">
<p class="ng-star-inserted"><span class="ng-star-inserted">Yes! We use secure and trusted payment gateways and your payment information is processed via encrypted channels for your protection. We do not store your payment details on our servers.</span></p>
</li>
</ul>

							</section>
							<!--  /Ask questions section -->
							

							


						</div>
					</div>
				</div>
			</section>

		</main>

        `;	}

	*script() {
yield html`
	<script>
	


		class Page extends MarketplaceLayout {
			constructor(args) {
			super(args);
				this.addToCartButtons = document.querySelectorAll('.btn-add-to-cart');
			}

			async uponReady() {
				await super.uponReady();

				this.on('.btn-share-on-social-media', 'click', this.onClickShareOnFacebook);
				this.on('.btn-add-to-cart', 'click', this.onClickAddToCart);

			}

			async onClickAddToCart(e) {
						e.preventDefault();
						e.stopPropagation();

						const inventory_id = Number(document.getElementById("inventory_id").getAttribute('data-product-variant-id'));
						const quantity = Number(document.getElementById(~product_quantity~).value);

						const price = Number(window.product__price.getAttribute('data-product-price'));
					const title = window.product__title.getAttribute('data-product-title');


						const product_media_path = window.product__product_media_path.getAttribute('data-product-media-path');
					const link_product_slug = window.product__link_product_slug.getAttribute('data-product-link-product-slug');
					const list_price = Number(window.product__list_price.getAttribute('data-product-list-price')).toFixed(4);


					const UOM_PIECE = 5;
					const CURRENCY_BDT = 1;


						const payload = {
							inventory_id: inventory_id,
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




			async onClickShareOnFacebook(e) {
				e.preventDefault();
				e.stopPropagation();

				const preformat = e.currentTarget.getAttribute('data-preformat');
				const url = preformat.replace('%s', location.href);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.target = '_blank';
				a.href = url;
				document.body.appendChild(a);
				a.click();
				a.remove();
			}
		}

	var page = new Page();

	</script>


		<script>


	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





`;	}
}
