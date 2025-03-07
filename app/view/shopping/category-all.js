//`;namespace App\Views\Shopping;

import MarketplaceLayout from "../marketplace-layout";

export default class CategoryAll extends MarketplaceLayout {
  

  *head() {
    /*
    return html`
        <title>Paykhom Mondi</title
        <meta name="title" content="Paykhom Mondi" />

        <meta name="description" content="Paykhom Mondi" />

        <meta name="keywords" content="Paykhom Mondi" />
        
        `;
    */
  }

  *style() {
yield html`
      <style>
         .eknFromCategoryAll {

         }
      </style>
`;  }

  *script() {
    yield html`
    <script>
      /* silence is golden */   
    </script> 

    `;  }
    
  *content() {
yield html`

      <div class="mt-8 mb-lg-14 mb-8">
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
          
          `; foreach(this.cat??[] as $cat) { `

            <!-- col -->
            <div class="col">
              <a
                href="/shopping/category/`$cat["slug"] `/page/1"
                class="text-decoration-none text-inherit"
              >
                <!-- card -->
                <div class="card card-product">
                  <div class="card-body text-center py-8">
                    <!-- img -->
                    <img
                      src="`$cat["logo_image"]??"" `"
                      alt="`$cat["title"] `"
                      width="100%"
                      class="mb-3"
                    />
                    <!-- text -->
                    <div class="text-truncate">`$cat["title"] `</div>
                  </div>
                </div>
              </a>
            </div>
          
          `; } `
          
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
    </div>
      
`;  }
}
