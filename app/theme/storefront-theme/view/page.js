//`;namespace App\Views;
  
import MarketplaceLayout from "./marketplace-layout";


export default class Page extends MarketplaceLayout {
  

   *head() {
      return html`
          <title>${this.vw_page.title || "Paykhom Limited"}</title
          <meta name="title" content="${this.vw_page.meta_title || ""}" />

          <meta name="description" content="${this.vw_page.meta_description || ""}" />

          <meta name="keywords" content="${this.vw_page.meta_keywords || ""}" />


         
          `;
   }

   *style() {
      //pending: this.render(super.style())
yield html`
      <style>

      </style>

   ${this.vw_page.style || ""}
`;
   }

   



   
    
  *content() {
    //dd(session('order'));
yield html`${this.vw_page.body || ""}`;        
   }
   *script() {
yield html`
   ${this.vw_page.script || ""}
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