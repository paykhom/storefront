import MarketplaceLayout from '../marketplace-layout'; // Adjust path as needed
//import { Page } from 'paykhom-fw/view';

export default class  Orders extends MarketplaceLayout {
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

        <!-- Hero: Get a Clear Picture of Your Orders -->
        <section class="bg-gradient-primary pt-5 pb-4" data-bs-theme="dark">
            <div class="container pt-5">
                <div class="row align-items-center">
                    <div class="col-md-6 text-center text-md-start">
                        <h1 class="display-4 text-white">Track and Manage Your Orders With Ease</h1>
                        <p class="lead text-white opacity-80">Gain full visibility into your order pipeline, from placement to fulfillment, with our user-friendly dashboard.</p>
                        <a href="#order-list" class="btn btn-warning mt-3">See Order List</a>
                    </div>
                    <div class="col-md-6">
                        <img src="/theme/around/assets/img/landing/saas-2/manage/orders-hero.png" class="img-fluid" alt="Order Overview" data-aos="fade-left">
                    </div>
                </div>
            </div>
        </section>

        <!-- Benefits -->
        <section class="container py-5">
            <h2 class="text-center mb-4">Take Control of Your Order Flow</h2>
            <p class="text-center mb-5">Optimize your business decisions based on reliable data from each transaction.</p>

            <div class="row">
                <div class="col-lg-4 mb-4">
                    <div class="card shadow-sm h-100">
                        <div class="card-body">
                            <img src="/theme/around/assets/img/icons/report.png" width="50" alt="Real-Time Visibility" class="mb-3">
                            <h3 class="h5 card-title">Real-Time Order Visibility</h3>
                            <p class="card-text">Track the status of every order in real-time, from placement to fulfillment.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 mb-4">
                    <div class="card shadow-sm h-100">
                        <div class="card-body">
                            <img src="/theme/around/assets/img/icons/organization.png" width="50" alt="Centralized Management" class="mb-3">
                            <h3 class="h5 card-title">Centralized Order Management</h3>
                            <p class="card-text">Consolidate all your orders into one easy-to-use platform.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 mb-4">
                    <div class="card shadow-sm h-100">
                        <div class="card-body">
                            <img src="/theme/around/assets/img/icons/time.png" width="50" alt="Streamlined Operations" class="mb-3">
                            <h3 class="h5 card-title">Streamlined Operations</h3>
                            <p class="card-text">Reduce manual tasks and improve order fulfillment efficiency.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Order List Example -->
        <section class="bg-secondary py-5" id="order-list">
            <div class="container">
                <h2 class="text-center mb-4">Example Order View</h2>

                <!-- Table -->
                <div class="table-responsive">
                    <table class="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>Customer</th>
                                <th>Date</th>
                                <th>Amount</th>
                                <th>Status</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>#12345</td>
                                <td>John Doe</td>
                                <td>2024-01-26</td>
                                <td>$79.99</td>
                                <td>Processing</td>
                                <td><a href="#" class="btn btn-sm btn-primary">View</a></td>
                            </tr>
                            <tr>
                                <td>#12346</td>
                                <td>Jane Smith</td>
                                <td>2024-01-25</td>
                                <td>$125.00</td>
                                <td>Shipped</td>
                                <td><a href="#" class="btn btn-sm btn-primary">View</a></td>
                            </tr>
                            <tr>
                                <td>#12347</td>
                                <td>David Lee</td>
                                <td>2024-01-24</td>
                                <td>$49.50</td>
                                <td>Delivered</td>
                                <td><a href="#" class="btn btn-sm btn-primary">View</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>

        <!-- Call to Action -->
        <section class="bg-primary py-5" data-bs-theme="dark">
            <div class="container text-center">
                <h2 class="text-white">Gain Full Control of Your Payment Workflow</h2>
                <p class="text-white opacity-80">Start managing your payment and customer orders with ease!</p>
                <a href="/pricing" class="btn btn-warning btn-lg mt-3">Discover Paykhom's Features</a>
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