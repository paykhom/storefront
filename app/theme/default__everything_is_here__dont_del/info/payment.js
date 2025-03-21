//`;namespace App\Views\Info;
  
import MarketplaceLayout from "../marketplace-layout";


export default class Payment extends MarketplaceLayout {
  

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
                             <h1>Flexible Payment Options</h1>
                            <p class="lead">Choose the payment method that suits you best.</p>
                             <p>Paykhom provides multiple secure and convenient payment methods to ensure that your transaction is smooth. Whether you are a buyer or a supplier, we strive to make the payment process as simple as possible.</p>
                             <a href="/info/contact" class="btn btn-primary">Contact Support</a>
                          </div>
                          <div class="col-md-6">
                               <img  loading="lazy" data-src="/_assets/images/info/payment.jpg" width="100%" alt="Payment Methods" class="img-fluid rounded">
                          </div>
                      </div>
                </div>
         </section>
          <section class="section-padding">
             <div class="container-fluid">
                 <div class="row">
                      <div class="col-md-12 text-center">
                        <h2>Accepted Payment Methods</h2>
                       </div>
                   </div>
                    <div class="row">
                        <div class="col-md-4 text-center">
                           <div class="icon-box-icon"><i class="fa fa-credit-card" aria-hidden="true"></i></div>
                           <h3>Credit & Debit Cards</h3>
                             <p>We accept all major credit and debit cards for quick and secure payments.</p>
                         </div>
                         <div class="col-md-4 text-center">
                            <div class="icon-box-icon"><i class="fa fa-mobile-alt" aria-hidden="true"></i></div>
                            <h3>Mobile Payments</h3>
                            <p>Pay conveniently through popular local mobile payment services such as bKash, Nagad, and Rocket.</p>
                         </div>
                        <div class="col-md-4 text-center">
                             <div class="icon-box-icon"><i class="fa fa-university" aria-hidden="true"></i></div>
                             <h3>Bank Transfers</h3>
                           <p>Direct bank transfers are also available for businesses that prefer this method.</p>
                        </div>
                    </div>
                 </div>
           </section>

          <section class="section-padding bg-light-gray">
              <div class="container-fluid">
                  <div class="row">
                      <div class="col-md-6">
                           <h2>Secure Payments</h2>
                            <p>Your security is our top priority. All payment transactions are encrypted and processed through secure gateways. We work with trusted partners to ensure the safety of your financial information.</p>
                        </div>
                         <div class="col-md-6">
                             <img  loading="lazy" data-src="/_assets/images/info/secure-payment.png" width="100%"  alt="Secure Payment Image" class="img-fluid rounded">
                         </div>
                     </div>
                      
                 </div>
                 <br/>
            </section>
             <!-- <section class="section-padding">
                <div class="container-fluid">
                    <div class="row">
                         <div class="col-md-12 text-center">
                               <h2>Tips for Secure Transactions</h2>
                         </div>
                   </div>
                    <div class="row">
                        <div class="col-md-4 mb-4">
                          <h3>Verify Seller Details</h3>
                            <p>Before making a payment, always ensure the seller's information is verified on the platform.</p>
                        </div>
                          <div class="col-md-4 mb-4">
                              <h3>Use Secure Networks</h3>
                            <p>Ensure your device is connected to a trusted and secure network, especially when making payments.</p>
                          </div>
                         <div class="col-md-4 mb-4">
                            <h3>Check Payment Confirmation</h3>
                             <p>Always confirm the payment confirmation details before concluding the transaction.</p>
                          </div>
                    </div>
                </div>
            </section> -->
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