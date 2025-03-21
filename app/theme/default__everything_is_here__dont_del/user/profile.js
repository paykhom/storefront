//`;namespace App\Views\User;
  
import UserLayout from "../user-layout";


export default class Profile extends UserLayout {
  

   *head() {
      yield this.render(super.head());      
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
   yield this.render(super.content());      

    //dd(session('order'));
yield html`

      <!-- CONTENT_REMOVED -->
      <div class="col-lg-9 col-md-8 col-12">
                     <div class="py-6 p-md-6 p-lg-10">
                        <div class="mb-6">
                           <!-- heading -->
                           <h2 class="mb-0">Account Setting</h2>
                        </div>
                        <div>
                           <!-- heading -->
                           <h5 class="mb-4">Account details</h5>
                           <div class="row">
                              <div class="col-lg-5">
                                 <!-- form -->
                                 <form>
                                    <!-- input -->
                                    <div class="mb-3">
                                       <label class="form-label">First Name</label>
                                       <input type="text" class="form-control" id="first_name" xplaceholder="jitu chauhan" value="${this.u["first_name"]}">
                                    </div>

                                    <div class="mb-3">
                                       <label class="form-label">Last Name</label>
                                       <input type="text" class="form-control" id="last_name" xplaceholder="jitu chauhan" value="${this.u["last_name"]}">
                                    </div>
                                    <!-- input -->
                                    <div class="mb-3">
                                       <label class="form-label">Email</label>
                                       <input type="email" class="form-control" id="email" xplaceholder="example@gmail.com" value="${this.u["email"]}">
                                       <input type="hidden" class="form-control" id="user_id" value="${this.u["user_id"]}">
                                    </div>
                                    <!-- input -->
                                    <div class="mb-5">
                                       <label class="form-label">Phone</label>
                                       <input type="text" class="form-control" id="mobile" xplaceholder="Phone number" value="${this.u["mobile"]}">
                                    </div>
                                    <!-- button -->
                                    <div class="mb-3">
                                       <button class="btn btn-primary" id="submit_info">Save Details</button>
                                    </div>
                                 </form>
                              </div>
                           </div>
                        </div>


                     </div>
                  </div>


`;        
   }
   *script() {
      yield this.render(super.script());      

yield html`
	<script>
	


   class Page extends UserLayout {
      constructor(params) {
         super(params);

      }

      async uponReady(){
         //PENDING: await super.uponReady();
         this.on("#submit_info", 'click', this.updateProfile);
      }

      async updateProfile(e){
         let data = {
            first_name : first_name.value,
            last_name :  last_name.value,
            email : email.value,
            mobile  : mobile.value,
            user_id : user_id.value
         }

         let res = await this.fetch("/user/account/update-profile", data);

         if(res.user_id){
            alert("All Information Saved successfully");
         }
         else{
            alert("Something went wrong! Please Try again.");
         }

      }
      

   }

   var page = new Page();

</script>


   <script>

`;
   }
}