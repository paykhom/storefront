//`;namespace App\Views\User;
  
//use App\Views\MasterLayout;


export default class Index extends MasterLayout {
  

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

CUSTOMER INDEX GOES HERE


`;        
   }
   *script() {
      yield this.render(super.script());

yield html`
`;
   }
}