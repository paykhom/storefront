//`;namespace App\Views;

import MasterLayout from "./master-layout";


export default class CustomerLayout extends MasterLayout /* TODO: Theme*/ {

	*head() {
        ////;
yield html`
    ${this.render(super.head())}
`;    }
	*style() {
        yield html`${this.render(super.style())}`;

    }

    *header() {
        yield html`${this.render(super.header())}`;

    }

	*content() {
        

yield html`
    ${this.render(super.content())}
    <!-- --> 

`;	}

    *script() {
        yield this.render(super.script());

yield html`
	<script>
         class CustomerLayout extends MasterLayout {
            constructor(args) {
               super(args);
            }
            async uponReady() {
               await super.uponReady();
         	}
         }   

         page = new CustomerLayout(); // just, the fall-back, if no Page is instantiated by a particular page
         ////////////////////////////////////////////

   	</script>

`;
    }
}