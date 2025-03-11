import MarketplaceLayout from '../marketplace-layout'; // Adjust path as needed
//import { Page } from 'paykhom-fw/app/view';

export default class  Website extends MarketplaceLayout {
    constructor(args) {
        super(args);
    }

    *style() {
        
yield html`
            <style>
            </style>
        `;
    }

    *content() {
        
yield html`
<main class="page-wrapper">

    <!-- Hero Section -->
    <section class="bg-gradient-to-bottom pt-5 pb-5">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-6">
                    <h1 class="display-4 fw-bold">[Your Platform Name]'s Website Builder: Effortless E-commerce, No Code Needed</h1>
                    <p class="lead">Create a stunning, high-converting online store with our intuitive drag-and-drop builder.  No technical skills? No problem! Launch your dream e-commerce business today.</p>
                    <a href="[Link to Start Free Trial]" class="btn btn-primary btn-lg">Start Building Your Store Now</a>
                </div>
                <div class="col-md-6">
                    <img src="/theme/around/assets/images/website-builder.jpg" alt="Drag and Drop Interface" class="img-fluid rounded shadow-lg">
                </div>
            </div>
        </div>
    </section>

    <!-- Key Features Section -->
    <section class="container mt-5 mb-5">
        <h2 class="text-center mb-4">Why Choose Our Website Builder?</h2>
        <div class="row">
            <div class="col-md-4">
                <div class="card mb-4">
                    <img src="/theme/around/assets/images/drag-drop.jpg" class="card-img-top" alt="Easy Drag & Drop">
                    <div class="card-body">
                        <h5 class="card-title">Effortless Drag & Drop</h5>
                        <p class="card-text">Simply drag and drop elements to create your perfect store layout. Customize everything without touching a line of code.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card mb-4">
                    <img src="/theme/around/assets/images/responsive.jpg" class="card-img-top" alt="Mobile Responsive Design">
                    <div class="card-body">
                        <h5 class="card-title">Fully Mobile Responsive</h5>
                        <p class="card-text">Your store will look amazing on any device - desktop, tablet, or smartphone - ensuring a seamless shopping experience for all your customers.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card mb-4">
                    <img src="/theme/around/assets/images/customize.jpg" class="card-img-top" alt="Customizable Templates">
                    <div class="card-body">
                        <h5 class="card-title">Stunning Templates</h5>
                        <p class="card-text">Choose from a wide variety of professionally designed templates, easily customizable to match your brand.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Testimonial Section -->
    <section class="bg-light py-5">
        <div class="container">
            <h2 class="text-center mb-4">See What Our Customers Are Saying</h2>
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="card">
                        <div class="card-body">
                            <p class="card-text">"[Your Platform Name]'s website builder made it incredibly easy to create my online store.  I had no technical experience, and I was able to build a professional-looking site in just a few hours!"</p>
                            <footer class="blockquote-footer">
                                [Merchant Name], <cite title="Source Title">[Store Name]</cite>
                            </footer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Call to Action Section -->
    <section class="container mt-5 mb-5">
        <div class="jumbotron bg-primary text-white rounded p-5">
            <h2 class="display-4">Stop Dreaming, Start Building!</h2>
            <p class="lead">Create your beautiful e-commerce website with [Your Platform Name]'s drag-and-drop builder and start selling today!</p>
            <a href="[Link to Start Free Trial]" class="btn btn-light btn-lg">Get Started for Free</a>
        </div>
    </section>

   </main>
        `;
    }

    *script() {
        
yield html`
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