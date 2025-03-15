import MarketplaceLayout from '../marketplace-layout'; // Adjust path as needed
//import { Page } from 'paykhom-fw/container/view';

export default class  Finance extends MarketplaceLayout {
    // @ts-ignore
    constructor(params) {
        super(params);
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

                <!-- Hero -->
                <section class="bg-primary bg-opacity-10 d-flex overflow-hidden py-5">
                    <div class="container d-flex justify-content-center py-md-4 py-xl-5">
                        <div class="row align-items-center">

                            <!-- Content -->
                            <div class="col-lg-6 text-center text-lg-start pe-lg-5">
                                <h1 class="display-3 mb-4">Take Control of Your Finances with Streamlined <span class="fw-normal">Finance Tools</span></h1>
                                <p class="lead pb-3 mb-4">Simplify your financial management with Paykhom. Access tools for accounting, bookkeeping, and tax preparation, all within a single platform.</p>
                                <a class="btn btn-lg btn-primary rounded-pill" href="/manage-finances">Explore Finance Tools</a>
                            </div>

                            <!-- Image -->
                            <div class="col-lg-6">
                                <img src="/theme/around/assets/img/manage/finance-tools-hero.png" alt="Paykhom Finance Tools Dashboard" class="img-fluid rounded-5 shadow-lg">
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Key Features -->
                <section class="container py-5">
                    <h2 class="h1 text-center mb-5">Streamline Your Finances</h2>
                    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">

                        <!-- Feature Item -->
                        <div class="col">
                            <div class="card h-100 border-0 shadow-sm">
                                <div class="card-body p-4">
                                    <img src="/theme/around/assets/img/manage/accounting-icon.png" alt="Accounting Icon" class="mb-3" width="50">
                                    <h3 class="h5 mb-3">Simplified Accounting</h3>
                                    <p>Automate your accounting tasks with intuitive tools for tracking income, expenses, and profits.</p>
                                </div>
                            </div>
                        </div>

                        <!-- Feature Item -->
                        <div class="col">
                            <div class="card h-100 border-0 shadow-sm">
                                <div class="card-body p-4">
                                    <img src="/theme/around/assets/img/manage/bookkeeping-icon.png" alt="Bookkeeping Icon" class="mb-3" width="50">
                                    <h3 class="h5 mb-3">Automated Bookkeeping</h3>
                                    <p>Keep your books accurate and up-to-date with automated transaction categorization and reconciliation.</p>
                                </div>
                            </div>
                        </div>

                        <!-- Feature Item -->
                        <div class="col">
                            <div class="card h-100 border-0 shadow-sm">
                                <div class="card-body p-4">
                                    <img src="/theme/around/assets/img/manage/tax-prep-icon.png" alt="Tax Prep Icon" class="mb-3" width="50">
                                    <h3 class="h5 mb-3">Tax Preparation Tools</h3>
                                    <p>Simplify your tax filing process with tools for generating reports, tracking deductions, and preparing returns.</p>
                                </div>
                            </div>
                        </div>

                        <!-- Feature Item -->
                        <div class="col">
                            <div class="card h-100 border-0 shadow-sm">
                                <div class="card-body p-4">
                                    <img src="/theme/around/assets/img/manage/invoice-icon.png" alt="Invoice Icon" class="mb-3" width="50">
                                    <h3 class="h5 mb-3">Invoice Management</h3>
                                    <p>Create, send, and track invoices effortlessly. Automate payment reminders to get paid on time.</p>
                                </div>
                            </div>
                        </div>

                        <!-- Feature Item -->
                        <div class="col">
                            <div class="card h-100 border-0 shadow-sm">
                                <div class="card-body p-4">
                                    <img src="/theme/around/assets/img/manage/expense-icon.png" alt="Expense Tracking Icon" class="mb-3" width="50">
                                    <h3 class="h5 mb-3">Expense Tracking</h3>
                                    <p>Effortlessly track your expenses, categorize transactions, and generate insightful reports to manage your budget effectively.</p>
                                </div>
                            </div>
                        </div>

                        <!-- Feature Item -->
                        <div class="col">
                            <div class="card h-100 border-0 shadow-sm">
                                <div class="card-body p-4">
                                    <img src="/theme/around/assets/img/manage/bank-icon.png" alt="Bank Connection Icon" class="mb-3" width="50">
                                    <h3 class="h5 mb-3">Secure Bank Connections</h3>
                                    <p>Connect your bank accounts securely and automatically import transactions for real-time insights.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                <!-- Benefits -->
                <section class="container py-5">
                    <h2 class="h1 text-center mb-5">Benefits of Managing Your Finances with Paykhom</h2>
                    <div class="row row-cols-1 row-cols-md-2 g-4">

                        <!-- Benefit Item -->
                        <div class="col">
                            <div class="d-flex align-items-start">
                                <img src="/theme/around/assets/img/manage/efficiency-icon.png" alt="Increased Efficiency Icon" class="me-3" width="40">
                                <div>
                                    <h3 class="h5 mb-2">Increased Efficiency</h3>
                                    <p>Automate routine tasks and streamline your workflow, freeing up valuable time to focus on growing your business.</p>
                                </div>
                            </div>
                        </div>

                        <!-- Benefit Item -->
                        <div class="col">
                            <div class="d-flex align-items-start">
                                <img src="/theme/around/assets/img/manage/accuracy-icon.png" alt="Improved Accuracy Icon" class="me-3" width="40">
                                <div>
                                    <h3 class="h5 mb-2">Improved Accuracy</h3>
                                    <p>Reduce errors and ensure accurate financial reporting with automated processes and data validation.</p>
                                </div>
                            </div>
                        </div>

                        <!-- Benefit Item -->
                        <div class="col">
                            <div class="d-flex align-items-start">
                                <img src="/theme/around/assets/img/manage/compliance-icon.png" alt="Compliance Icon" class="me-3" width="40">
                                <div>
                                    <h3 class="h5 mb-2">Simplified Compliance</h3>
                                    <p>Stay compliant with tax regulations and industry standards with automatically generated reports and audit trails.</p>
                                </div>
                            </div>
                        </div>

                        <!-- Benefit Item -->
                        <div class="col">
                            <div class="d-flex align-items-start">
                                <img src="/theme/around/assets/img/manage/visibility-icon.png" alt="Improved Visibility Icon" class="me-3" width="40">
                                <div>
                                    <h3 class="h5 mb-2">Enhanced Financial Visibility</h3>
                                    <p>Gain a clear overview of your financial performance, enabling you to make informed decisions and optimize your profitability.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Call to Action (CTA) -->
                <section class="bg-primary bg-opacity-10 py-5">
                    <div class="container text-center">
                        <h2 class="h1 mb-4">Ready to Simplify Your Finances?</h2>
                        <p class="lead mb-4">Take control of your financial future with Paykhom's comprehensive suite of finance tools.</p>
                        <a class="btn btn-lg btn-primary rounded-pill" href="/manage-finances">Explore Finance Solutions</a>
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