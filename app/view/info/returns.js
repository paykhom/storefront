//`;namespace App\Views\Info;
  
import MarketplaceLayout from "../marketplace-layout";


export default class Returns extends MarketplaceLayout {
  

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
      </style>

`;
   }

   



   
    
  *content() {
    //dd(session('order'));
yield html`

<div class="container-fluid">
       <div class="row">
           <div class="col-md-12">
                 <section class="section-padding bg-light-gray">
                      <div class="container-fluid">
                           <div class="row">
                                <div class="col-md-6">
                                    <h1>Easy and Fair Returns</h1>
                                     <p class="lead">Our return policy is designed with you in mind.</p>
                                   <p>We at Paykhom understand that sometimes returns are necessary. That’s why our return policy strives to be as fair and convenient as possible, making sure you can easily manage returns with the support that you need. </p>
                                     <a href="/info/contact" class="btn btn-primary">Contact Support</a>
                               </div>
                              <div class="col-md-6">
                                   <img  loading="lazy" data-src="/_assets/images/info/refund.jpeg" width="100%" alt="Return Policy Illustration" class="img-fluid rounded">
                             </div>
                        </div>
                     </div>
                     <br/>
              </section>
               <section class="section-padding">
                    <div class="container-fluid">
                        <div class="row">
                           <div class="col-md-12 text-center">
                              <h2>Returns Eligibility</h2>
                           </div>
                      </div>
                     <div class="row">
                          <div class="col-md-4 mb-4 text-center">
                            <div class="icon-box-icon"><i class="fa fa-undo" aria-hidden="true"></i></div>
                             <h3>15-Day Window</h3>
                            <p>Most items are eligible for return within 15 days from the date of delivery.</p>
                       </div>
                         <div class="col-md-4 mb-4 text-center">
                             <div class="icon-box-icon"><i class="fa fa-box-open" aria-hidden="true"></i></div>
                             <h3>Unused Items</h3>
                           <p>Returned products must be in their original packaging, unused, and in resalable condition.</p>
                         </div>
                          <div class="col-md-4 mb-4 text-center">
                             <div class="icon-box-icon"><i class="fa fa-exclamation-circle" aria-hidden="true"></i></div>
                             <h3>Exceptions May Apply</h3>
                            <p>Specific item categories like perishables and hygiene products may not qualify for returns due to the nature of the items. </p>
                          </div>

                     </div>
                </div>
           </section>
           <section class="section-padding bg-light-gray">
            <div class="container-fluid">
                  <div class="row">
                      <div class="col-md-12 text-center">
                            <h2>The Return Process</h2>
                            <br>
                       </div>
                   </div>
                   <div class="row">
                        <div class="col-md-6 mb-4">
                                 <h3>Step 1: Initiate a Return</h3>
                                 <p>Go to your 'Order History' within your profile and select the "Return" option for the specific item you want to return.</p>
                        </div>
                         <div class="col-md-6 mb-4">
                              <h3>Step 2: Verify and Ship</h3>
                              <p>Once your return is approved, we will provide you with the necessary return labels or a shipment reference id.</p>
                           </div>
                       </div>
                     <div class="row">
                        <div class="col-md-6 mb-4">
                           <h3>Step 3: Inspection & Approval</h3>
                           <p>Upon receiving your return, we will inspect the item. If approved, we will process your refund accordingly.</p>
                         </div>
                         <div class="col-md-6 mb-4">
                             <h3>Step 4: Receive your Refund</h3>
                             <p>You will receive your refund in the original payment method within a few business days after your return is accepted</p>
                        </div>
                     </div>
                </div>
         </section>

       <section class="section-padding">
            <div class="container-fluid">
              <div class="row">
                 <div class="col-md-6 order-2 order-md-1">
                      <img  loading="lazy" data-src="/_assets/images/info/refund2.jpeg" width="100%"  alt="Return Policy Image" class="img-fluid rounded">
                 </div>
                  <div class="col-md-6 order-1 order-md-2">
                      <h2>Refunds and Exchange</h2>
                           <p>Refunds will be processed once a returned item has been successfully received by our return center and checked. We typically handle refunds within 3-5 business days to your original payment method. Exchanges may be considered subject to stock availability and are offered on a case-by-case basis, so contact us with the form.</p>
                          </div>
               </div>
           </div>
           <br/>
 
      </section>
         </div>
       </div>
    </div>


`;        
   }
   *script() {
yield html`

<script>

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