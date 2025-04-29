//`;namespace App\Views\Info;
  
import MarketplaceLayout from "../marketplace-layout";


export default class Shipping extends MarketplaceLayout {
  

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
                                 <h1>Shipping and Delivery</h1>
                                  <p class="lead">Everything you need to know about getting your products.</p>
                                  <p>At Paykhom, we understand the importance of prompt and reliable shipping. We provide a range of delivery options to ensure that your orders reach you, or your customers, in a timely fashion. Our aim is to make shipping as effortless as possible.</p>
                                   <a href="/info/contact" class="btn btn-primary">Contact Support</a>
                             </div>
                            <div class="col-md-6">
                                <img  loading="lazy" data-src="/_assets/images/info/shipment.jpeg" width="100%"  alt="Delivery Options" class="img-fluid rounded">
                            </div>
                      </div>
                </div>
                <br/>
           </section>
           <section class="section-padding">
            
             <div class="container-fluid">
                    <div class="row">
                         <div class="col-md-12 text-center">
                           <h2>Our Shipping Options</h2>
                        </div>
                     </div>
                     <div class="row">
                         <div class="col-md-6 mb-4">
                              <div class="icon-box-icon"><i class="fa fa-truck" aria-hidden="true"></i></div>
                                  <h3>Standard Delivery</h3>
                                     <p>Our reliable standard delivery option delivers your orders within 3-5 business days to most locations across Bangladesh.</p>
                         </div>
                          <div class="col-md-6 mb-4">
                            <div class="icon-box-icon"><i class="fa fa-shipping-fast" aria-hidden="true"></i></div>
                              <h3>Express Delivery</h3>
                             <p>Need your order quicker? Choose express delivery to get your order within 1-2 business days.</p>
                           </div>
                     </div>
                     <div class="row">
                           <div class="col-md-6 mb-4">
                            <div class="icon-box-icon"><i class="fa fa-map-marker-alt" aria-hidden="true"></i></div>
                            <h3>Local Pickup</h3>
                            <p>For those within reach, we also offer a free local pickup options from our designated distribution centers.</p>
                        </div>
                          <div class="col-md-6 mb-4">
                             <div class="icon-box-icon"><i class="fa fa-truck-loading" aria-hidden="true"></i></div>
                              <h3>B2B Delivery</h3>
                             <p>For our B2B partners, we offer customized freight delivery options, contact our team to plan the most suitable option.</p>
                           </div>
                   </div>
                </div>
          </section>

         <section class="section-padding bg-light-gray">
            <div class="container-fluid">
                <div class="row">
                      <div class="col-md-6">
                             <img  loading="lazy" data-src="/_assets/images/info/tracking-shipment.jpg" width="100%"  alt="Track Your Shipment" class="img-fluid rounded">
                        </div>
                        <div class="col-md-6">
                         <h2>Tracking Your Shipment</h2>
                            <p>You can easily track your shipment using the tracking number that you will receive after processing your order. You can track your order directly through our platform or by using the logistics provider's website.</p>
                       </div>

                   </div>
           </div>
           <br/>

       </section>
         <section class="section-padding">
                 <div class="container-fluid">
                    <div class="row">
                         <div class="col-md-12 text-center">
                             <h2>Important Shipping Information</h2>
                        </div>
                   </div>
                   <div class="row">
                        <div class="col-md-4 mb-4">
                           <h3>Shipping Costs</h3>
                             <p>Shipping costs vary based on delivery distance, weight, and delivery options selected. Exact costs are calculated before checkout.</p>
                       </div>
                       <div class="col-md-4 mb-4">
                         <h3>Delivery Times</h3>
                            <p>Delivery times are estimates and may vary due to unforeseen delays. Please review tracking information.</p>
                       </div>
                     <div class="col-md-4 mb-4">
                           <h3>Contactless Delivery</h3>
                            <p>We offer contactless delivery as a measure to ensure the health and safety of both our delivery team and our customers.</p>
                      </div>

                   </div>
                 </div>
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