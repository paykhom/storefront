//`;namespace App\Views\User;
  
//use App\Views\MasterLayout;


export default class OrderAll extends MasterLayout {
  

   *head() {
      // return html`
      //     <title>Paykhom Mondi</title
      //     <meta name="title" content="Paykhom Mondi" />

      //     <meta name="description" content="Paykhom Mondi" />

      //     <meta name="keywords" content="Paykhom Mondi" />


         
      //     `;
   }

   *style() {
      yield this.render(super.style());

yield html`
      <style>
      </style>

`;
   }

   



   
    
  *content() {
    //dd(session('order'));
yield html`

                <div class="col-lg-9 col-md-8 col-12">
                     <div class="py-6 p-md-6 p-lg-10">
                        <!-- heading -->
                        <h2 class="mb-6">Your Orders</h2>

                        <div class="table-responsive-xxl border-0" style="overflow : hidden;">
                           <!-- Table -->
                           <table class="table mb-0 text-nowrap table-centered">
                              <!-- Table Head -->
                              <thead class="bg-light">
                                 <tr>
                                    <th>Order Id</th>
                                    <th>Name</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th>Amount</th>
                                    <th></th>
                                 </tr>
                              </thead>
                              <tbody>
                                 <!-- Table body -->
                                 <!-- s.sales_id, u.full_name, s.created_at, sos.title as sales_status_title, s.total -->
`; foreach(this.so as $o) { `
                                    <tr>
                                    <td class="align-middle border-top-0">
                                       <a href="#" class="text-inherit">`$o["sales_id"] `</a>
                                    </td>
                                    <td class="align-middle border-top-0">`$o["full_name"] `</td>
                                    <td class="align-middle border-top-0">`$o["created_at"] `</td>
                                    <td class="align-middle border-top-0">`$o["sales_status_title"] `</td>
                                    <!-- <td class="align-middle border-top-0">
                                       <span class="badge bg-warning">Processing</span>
                                    </td> -->
                                    <td class="align-middle border-top-0 text-end">`$o["total"] `</td>
                                    <td class="text-muted align-middle border-top-0">
                                       <a href="/user/shopping/order/`$o["sales_id"] `" class="text-inherit" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="View"><i class="feather-icon icon-eye"></i></a>
                                    </td>
                                 </tr>
`; } `
                              </tbody>
                           </table>
                        </div>
                     </div>
                  </div>


`;        
   }
   *script() {
      yield this.render(super.script());

yield html`

`;
   }
   
   *siteFooter() {
      yield this.render(super.siteFooter());

   }

}   

