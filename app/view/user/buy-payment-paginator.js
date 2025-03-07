//`;namespace App\Views\User;

import UserLayout from "../user-layout";

export default class BuyPaymentPaginator extends UserLayout {
    

    *head() {
        yield this.render(super.head());
    }

    *style() {
        yield this.render(super.style());
        yield html`
        <style>
           /* Add your custom styles here */
        </style>
        `;    }

    *content() {
        yield this.render(super.content());
        yield html`
        <div class="page-header">
            <div class="add-item d-flex">
                <div class="page-title">
                    <h4>Buy &gt; Payments</h4>
                    <h6>Manage Buy Payments</h6>
                </div>
            </div>
            <ul class="table-top-head">
                <li>
                    <a data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Pdf" data-bs-original-title="Pdf"><img  loading="lazy" data-src="/theme/dp/assets/img/icons/pdf.svg" alt="img"></a>
                </li>
                <li>
                    <a data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Excel" data-bs-original-title="Excel"><img  loading="lazy" data-src="/theme/dp/assets/img/icons/excel.svg" alt="img"></a>
                </li>
                <li>
                    <a data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Print" data-bs-original-title="Print"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-printer feather-rotate-ccw"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg></a>
                </li>
                <li>
                    <a data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Refresh" data-bs-original-title="Refresh"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-rotate-ccw"><polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path></svg></a>
                </li>
                <li>
                    <a data-bs-toggle="tooltip" data-bs-placement="top" id="collapse-header" aria-label="Collapse" data-bs-original-title="Collapse"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-up"><polyline points="18 15 12 9 6 15"></polyline></svg></a>
                </li>
            </ul>
            <!-- <div class="page-btn">
                 <a href="#" class="btn btn-added" onclick="page.onClickAddNew(this)" data-bs-toggle="modal" data-bs-target="#add-buy-payment-modal"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle me-2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>Add New</a>
            </div> -->
            
        </div>

        <div class="card table-list-card">
            <div class="card-body">
                <div class="table-responsive product-list">
                    <table class="table datanew dataTable no-footer" id="myDataTable" aria-describedby="myDataTable_info">
                        <thead>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
         <!-- Add Buy Payment Modal -->
        <div class="modal fade" id="add-buy-payment-modal" tabindex="-1" aria-labelledby="addBuyPaymentModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="addBuyPaymentModalLabel">Add New Buy Payment</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                       
                        <form id="add-buy-payment-form">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="buy_id">Buy ID</label>
                                        <input type="text" class="form-control" id="buy_id" name="buy_id" required>
                                    </div>
                                </div>
                                 <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="user_id">User ID</label>
                                        <input type="text" class="form-control" id="user_id" name="user_id" required>
                                    </div>
                                </div>

                                 <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="buy_payment_date">Payment Date</label>
                                         <input type="date" class="form-control" id="buy_payment_date" name="buy_payment_date" required>
                                    </div>
                                </div>
                                  <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="payment_method_id">Payment Method ID</label>
                                         <input type="text" class="form-control" id="payment_method_id" name="payment_method_id" required>
                                    </div>
                                </div>
                                   <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="buy_payment_amount">Payment Amount</label>
                                         <input type="number" class="form-control" id="buy_payment_amount" name="buy_payment_amount" required step="0.01">
                                    </div>
                                </div>
                                   <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="buy_payment_status_id">Payment Status</label>
                                        <select class="form-select" id="buy_payment_status_id" name="buy_payment_status_id" required>
                                           <option value="1">Pending</option>
                                           <option value="2">Paid</option>
                                           <option value="3">Failed</option>
                                           <option value="4">Refunded</option>
                                        </select>
                                    </div>
                                </div>
                                  <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="currency_id">Currency</label>
                                          <select class="form-select" id="currency_id" name="currency_id" required>
                                           <option value="1">USD</option>
                                           <option value="2">EUR</option>
                                            <option value="3">NGN</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="col-md-12">
                                     <div class="form-group">
                                        <label for="buy_payment_reason">Payment Reason</label>
                                        <textarea class="form-control" id="buy_payment_reason" name="buy_payment_reason" rows="3"></textarea>
                                    </div>
                                </div>
                                  <div class="col-md-12">
                                     <div class="form-group">
                                        <label for="narration">Narration</label>
                                        <textarea class="form-control" id="narration" name="narration" rows="3"></textarea>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary mt-3">Save Payment</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        `;    }

    *script() {
        yield this.render(super.script());
        yield html`
        <script>
            class Page extends UserLayout {
                constructor(params) {
                    super(params);
                }

                async uponReady() {
                    await super.uponReady();
                    let table = new DataTable(
                        '#myDataTable',
                        {
                            xbFilter: true,
                            xsDom: 'fBtlpi',
                            xordering: true,
                            xinitComplete: (settings, json)=>{
                                $('.dataTables_filter').appendTo('#tableSearch');
                                $('.dataTables_filter').appendTo('.search-input');
                            },
                            ajax: '/dtx/ecom/buy_payment/search', // Replace with your actual API endpoint
                            processing: false,
                            serverSide: true,
                            pageLength: 25,
                            columns: [
                                {
                                    title: "Select",
                                    data: null,
                                    orderable: false,
                                    render: function () {
                                        return ~
                                            <label class="checkboxs">
                                                <input type="checkbox">
                                                <span class="checkmarks"></span>
                                            </label>
                                        ~;
                                    }
                                },
                                { data: 'buy_payment_id', title: "ID" },
                                { data: 'buy_id', title: 'Buy ID' },
                                { data: 'user_id', title: "User ID" },
                                { data: 'buy_payment_date', title: "Payment Date" , render: (data) => data ? moment(data).format('YYYY-MM-DD') : ''},
                                { data: 'payment_method_id', title: "Method ID" },
                                { data: 'buy_payment_amount', title: "Amount", render: $.fn.dataTable.render.number(',', '.', 2, '$')},
                                { data: 'buy_payment_status_id', title: "Status ID" },
                                { data: 'currency_id', title: "Currency ID" },
                                { data: 'created_by', title: "Created By"},
                                  { data: 'narration', title: "Narration"},
                                {
                                    data: null,
                                    title: "Action",
                                    orderable: false,
                                    render: function (data, type, row) {
                                        return ~
                                            <div class="edit-delete-action">
                                                 <a class="me-2 edit-icon p-2" href="/user/shopping/payment/editor/~{row.sales_receipt_id}">
                                                	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit">
                                                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                                                </svg>
                                                </a>
                                                <a class="confirm-text p-2" href="#" onclick="page.onClickDeleteRow(~{row.buy_payment_id})">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2">
                                                    <polyline points="3 6 5 6 21 6"></polyline>
                                                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                                    <line x1="10" y1="11" x2="10" y2="17"></line>
                                                    <line x1="14" y1="11" x2="14" y2="17"></line>
                                                </svg>
                                                </a>
                                            </div>
                                        ~;
                                    },
                                     createdCell: function (td, cellData, rowData, row, col) {
                                        $(td).addClass('action-table-data'); // Add the desired class to the td element
                                    }
                                }
                            ],
							initComplete: function() {
								// You can add any initialization logic here, like custom filter dropdowns etc.
							}
                        }
                    );

                    // Handle form submission for adding a new payment
					$('#add-buy-payment-form').on('submit', async function (e) {
						e.preventDefault();
						const formData = $(this).serializeArray();
						const apiURL = '/dtx/ecom/buy_payment/create';
						const method = 'POST';
                        try {
                            const response = await page.fetchApi(apiURL,method,formData);
							if(response.status == 200){
								$('#add-buy-payment-modal').modal('hide');
								page.alert('Payment created successfully',"success")
                                table.ajax.reload(); // Refresh DataTable

							}else{
                                
								page.alert('Error creating payment',"danger")
							}
                        } catch (error) {
                             page.alert('Error:' + error,"danger")
							//console.error('Error:', error);
                        }
					});
                }
                async onClickDeleteRow(id) {
                    if (confirm("Are you sure you want to delete this payment?")) {
                        try {
                             const apiURL = ~/dtx/ecom/buy_payment/~{id}~;
                             const method = 'DELETE';
                            const response = await page.fetchApi(apiURL,method);
                            if (response.status === 200) {
                                page.alert('Payment deleted successfully',"success")
                                $('#myDataTable').DataTable().ajax.reload(); // Refresh DataTable
                            } else {
                                 page.alert('Error deleting payment',"danger")
                                //console.error('Error deleting payment:', response);
                            }
                        } catch (error) {
                             page.alert('Error:' + error,"danger")
                            //console.error('Error:', error);
                        }
                    }
                }

                async onClickEditRow(id) {
                   try {
                         const apiURL = ~/dtx/ecom/buy_payment/~{id}~;
                        const paymentDetails = await page.fetchApi(apiURL);
                          if(paymentDetails && paymentDetails.status==200){
                            const data = paymentDetails.data;
                            
                             $('#add-buy-payment-modal').modal('show');
                             $('#addBuyPaymentModalLabel').text('Edit Buy Payment');
                             $('#buy_id').val(data.buy_id);
                             $('#user_id').val(data.user_id);
                              $('#buy_payment_date').val(moment(data.buy_payment_date).format('YYYY-MM-DD'));
                             $('#payment_method_id').val(data.payment_method_id);
                             $('#buy_payment_amount').val(data.buy_payment_amount);
                             $('#buy_payment_status_id').val(data.buy_payment_status_id);
                             $('#currency_id').val(data.currency_id);
                             $('#buy_payment_reason').val(data.buy_payment_reason);
                             $('#narration').val(data.narration);
                                    //  update button text to Update
                             $('#add-buy-payment-form button[type="submit"]').text('Update Payment');
                             $('#add-buy-payment-form').off('submit').on('submit', function (e) {
                                    e.preventDefault();
                                   page.onUpdatePayment(id);
                             });
                            }
                            else{
                                 page.alert('Error:' + paymentDetails.message,"danger")
                                
                            }
                        } catch (error) {
                            page.alert('Error:' + error,"danger")
                            //console.error('Error:', error);
                        }

                }
               async onUpdatePayment(id){
                    const formData = $('#add-buy-payment-form').serializeArray();
                    const apiURL = ~/dtx/ecom/buy_payment/~{id}~;
					const method = 'PUT';
                      try {
                            const response = await page.fetchApi(apiURL,method,formData);
                             if(response.status == 200){
                                 $('#add-buy-payment-modal').modal('hide');
                                 $('#addBuyPaymentModalLabel').text('Add New Buy Payment');
                                 $('#add-buy-payment-form').trigger("reset");
								 page.alert('Payment updated successfully',"success")
                                   $('#add-buy-payment-form button[type="submit"]').text('Save Payment');
                                 $('#add-buy-payment-form').off('submit').on('submit', function (e) {
                                        e.preventDefault();
                                        page.onSubmitAddPayment();
                                 });
                                $('#myDataTable').DataTable().ajax.reload(); // Refresh DataTable
                            }else{
                                  page.alert('Error updating payment',"danger")
								
                            }
                        } catch (error) {
                              page.alert('Error:' + error,"danger")
							//console.error('Error:', error);
                        }
                }

                onSubmitAddPayment(){
                    const formData = $('#add-buy-payment-form').serializeArray();
					const apiURL = '/dtx/ecom/buy_payment/create';
					const method = 'POST';
                        try {
                           page.fetchApi(apiURL,method,formData)
								.then(response => {
									if(response.status == 200){
										$('#add-buy-payment-modal').modal('hide');
                                         $('#add-buy-payment-form').trigger("reset");
										page.alert('Payment created successfully',"success")
										 $('#myDataTable').DataTable().ajax.reload(); // Refresh DataTable
									}else{
                                         page.alert('Error creating payment',"danger")
                                         

									}
								})
                        } catch (error) {
                              page.alert('Error:' + error,"danger")
							//console.error('Error:', error);
                        }
                }
            }
           page = new Page();
        </script>
        `;    }
}