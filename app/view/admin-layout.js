import MasterLayout from "./master-layout";


export default class AdminLayout extends MasterLayout /* TODO: Theme*/ {

	*head() {
        
yield html`
    ${this.render(super.head())}

`;    }
	*style() {
        yield html`
                ${this.render(super.style())}

        `;
    }

    *header() {
        yield html`
            ${this.render(super.header())}
        `;

    }

	*content() {
        

yield html`
    ${this.render(super.content())}

`;	}

    *script() {
        
yield html`
    ${this.render(super.script())}
	<script>
         class AdminLayout extends MasterLayout {
            constructor(args) {
               super(args);
            }
            async uponReady() {
               await super.uponReady();
         	}
         }   

         page = new AdminLayout(); // just, the fall-back, if no Page is instantiated by a particular page
         ////////////////////////////////////////////

   	</script>

`;
    }
}


