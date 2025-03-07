//`;namespace App\Views;


export default class SaasLayout extends MasterLayout /* TODO: Theme*/ {

	*head() {
        yield this.render(super.head());
yield html`

`;    }
	*style() {
        yield this.render(super.style());

    }

    *header() {
        yield this.render(super.header());

    }

	*content() {
        yield this.render(super.content());

yield html`		
    <!-- --> 

`;	}

    *script() {
        yield this.render(super.script());
yield html`
	<script>
         class SaasLayout extends MasterLayout {
            constructor(args) {
               super(args);
            }

            async uponReady() {
               await super.uponReady();
         	}


         }   

         page = new SaasLayout(); // just, the fall-back, if no Page is instantiated by a particular page
         ////////////////////////////////////////////

   	</script>

`;
    }
}