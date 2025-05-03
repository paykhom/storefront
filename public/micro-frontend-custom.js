"use strict";


const USR_ROLE__LA1 = 3;
const USR_ROLE__LA2 = 4;
const USR_ROLE__LM = 5;

class CustomAppDocument extends AppDocument {
	constructor() {
		super();
		this.model = new ModelAdapter();
	}

	async uponReady() {
		await super.uponReady();
		//this.on("#search_input", "keyup", this.onSearch);

		/* REPLACED BY codes inside DOMContentLoaded
		try {
			window.back.textContent = "< Back"

		}
		catch {

		}
		this.on("#back", "click", this.onBackClick);
		*/
	}

	renderTable(tableIdentifier, data, offsetField, offsetState) {
		const table = document.querySelector(tableIdentifier);
		const tableHead = table.querySelector("thead");
		const tableHeadCells = tableHead.querySelectorAll("th");
		const tableBody = table.querySelector("tbody");
		const fieldNames = [];

		tableBody.innerHTML = "";
		tableHeadCells.forEach((cell) => {
			fieldNames.push(cell.getAttribute("data-field"));
		});

		data.forEach((obj) => {
			let row = tableBody.insertRow();
			(offsetState = obj[offsetField]),
				fieldNames.forEach((fieldName) => {
					let cell = row.insertCell();
					if (obj[fieldName]) {
						/*if (obj.hasOwnProperty(fieldName))*/ //if(obj[fieldName])
						cell.textContent = obj[fieldName];
					}
				});
		});
	}

	async populateCombo(fetchUrl, payload, elSelect, k, v, defaultValue = null) {
		//let payload = {};
		let hc = app.locateService(HttpClient);
		let resp = await hc.fetch("POST", fetchUrl, {
			body: JSON.stringify(payload),
		});
		let data = resp.output;
		if (data.error) {
			app.alert(app.extractGracefulError(data.error));
			return;
		}

		//console.log(data);
		if (data === null) {
			//toast...
			return;
		}

		data = data.ret_data;

		// debugger;

		let selectItems =  elSelect.innerHTML;

		// TYPEOF NULL IS "OBJECT" if(typeof defaultValue === "object"){

			if(defaultValue && typeof defaultValue === "object"){
				selectItems = Object.keys(defaultValue).map((key) =>`<option value="${key}">${defaultValue[key]}</option>`).join("");
			}

		for (let i = 0; i < data.length; i++) {
			let e = data[i];
			let each_item = `<option value="${e[k]}">${e[v]}</option>`;
				// elSelect.innerHTML += each_item;
				selectItems += each_item;
		}

		elSelect.innerHTML = selectItems;

	}

	renderPageFields(data) {
		let el = null;
		for (const k in data) {
			el = document.getElementById(k);
			if (el == null) {
				let radio_names = document.getElementsByName(k);
				radio_names.forEach((radio) => {
					if (data[k] != null) {
						radio.value == data[k].toString()
							? (radio.checked = true)
							: null;
					}
				});
				continue;
			}
			switch (true) {
				case el.nodeName == ("SPAN" || "TD"):
					el.textContent = data[k];
					console.log("SPAN added");
					break;
				case el.nodeName == "TD":
					el.textContent = data[k];
					console.log("TD added");
					break;
				case el.nodeName == "A":

					//el.href = (data[k] ? data[k] : "#") ;  //PENDING:EKN + "?" (new Date()).getTime();

					// NOT WORKING
					var href = (data[k] ? data[k] : "#");
					href += ((href.includes('?') ? "&" : "?") + "timestamp=" + (new Date()).getTime());
					el.href = href;
					console.log(href);
					// /NOT WORKING



					data[k] ? null : el.removeAttribute("download");
					console.log("A added");
					break;
				case el.type == "checkbox":
					el.checked = data[k];
					console.log("checkbox populated");
					break;
				default:
					el.value = data[k];
					console.log("input populated");
					break;
			}
			// switch (el.nodeName) {
			//     case "SPAN":
			//         el.textContent = data[k];
			//     case "INPUT":
			//         el.value = data[k];
			// }
			//console.log(`${k}: ${ret_data[0][k]}`);
		}
	}

	onBackClick(e) {
		//alert("going back to the future");
		e.preventDefault();
		history.back();
	}
}

class DeclineComponent extends AppComponent {
	constructor(application_id, usr_role, property_id) {
		super();
		this.state.usr_role = usr_role;
		this.state.application_id = application_id;
		this.state.property_id = property_id;
	}

	async uponReady() {
		await super.uponReady();

		//on....
	}

	// render(el_id, data) {
	//     this.state.placeholer_id = el_id;
	//     // debugger;
	//     let html = `

	//         <div class="form_wrapper add_modal d-none" id="decline_app_pri_comp" style="width:450px;">

	//         <div class="row">
	//             <div class="text-center mt-4 h3">
	//                 Decline Application
	//             </div>

	//             <div class=" text-center  ">
	//                 You are about to decline the application for user ${data.user_id}. Please provide a reason for the declined application below, this will be sent to Leasing Admin 1 and they will notify the user.
	//             </div>

	//         </div>
	//         <div class="row mt-3">

	//             <form class="col-lg-12 ">
	//                 <div class="row  my-3">

	//                     <div class="col-md-12 col-lg-12">
	//                         <label for="text_area_reason ">Reason:</label>
	//                         <textarea id="declination_reason_note" type="text" rows="6" xplaceholder="Type message here..." class="form-control bg-light" for="text_area_reason" id="text_area_reason"></textarea>
	//                     </div>

	//                 </div>
	//                 <div class="d-flex justify-content-between pt-3">
	//                     <div class="col-lg-4 col-sm-3">
	//                         <button id ="btn_cancel_declination" type="button" class="close_decline_app_modal btn btn-custom-dark-invert"> Cancel </button>

	//                     </div>
	//                     <div class="col-lg-4 col-sm-3">
	//                         <button type="button" id="btn_confirm_declination" class="btn btn-custom-red "> Decline </button>
	//                     </div>
	//                 </div>

	//             </form>

	//         </div>

	//         </div>

	//         <div class="form_wrapper add_modal d-none" id="decline_app_sub_comp" style="width:500px">
	//             <div class="d-flex justify-content-center">
	//                 <div class="text-center mt-4 h2 ">
	//                 Application Declined
	//                 </div>
	//             </div>
	//             <div class="text-center mt-4 ">
	//             User ${data.user_id} has been notified about their unsuccessful application.        </div>
	//             <div class="mb-3 row mt-3">

	//                 <div class="col-12 col-lg-12 mt-4">
	//                     <button id="btn_close_declination" type="button" class="close_decline_app_modal btn btn-custom-dark px-3 mt-1">Close</button>
	//                 </div>
	//             </div>

	//         </div>
	//         <div class="modal_bg_overlay close_decline_app_modal"></div>

	//         `;
	//         window[el_id].innerHTML = html;

	//         this.hookup();
	//     }
	//render
	render(el_id, data) {
		this.state.placeholer_id = el_id;
		this.user_id = data.user_id;
		// debugger;
		let html = `
            <section class="modal fade" id="${el_id}_decline_modal">
                <div class=" modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-body">
                            <div class="row">
                                <div class="text-center mt-4 h3">
                                    Decline Application
                                </div>

                                <div class=" text-center  ">
                                    You are about to decline the application for user ${data.user_id}. Please provide a reason for the declined application below, this will be sent to
									${(this.state.usr_role == USR_ROLE__LA1) ? " the user directly." : " Leasing Admin 1 and they will notify the user."} 
									 
                                </div>

                            </div>
                            <div class="row mt-3">
                                <form class="col-lg-12 ">
                                    <div class="row  my-3">
                
                                        <div class="col-md-12 col-lg-12">
                                            <label for="text_area_reason ">Reason:</label>
                                            <textarea id="declination_reason_note" type="text" rows="6" xplaceholder="Type message here..." class="form-control bg-light" for="text_area_reason" id="text_area_reason"></textarea>
                                        </div>
                
                                    </div>
                                    <div class="d-flex justify-content-center justify-content-sm-between pt-3 flex-wrap gap-2 gap-sm-auto">
                                        <div class="">
                                            <button id ="btn_cancel_declination" type="button" class="close_decline_app_modal btn btn-custom-dark-invert px-5 rounded-pill"> Cancel </button>
                
                                        </div>
                                        <div class="">
                                            <button type="button" id="btn_confirm_declination" class="btn btn-custom-red px-5 rounded-pill"> Decline </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
           </section>


           <section class="modal fade" id="${el_id}_decline_success_modal">
                <div class=" modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-body">
                        <div class="d-flex justify-content-center">
                            <div class="text-center mt-4 h2 ">
                                Application Declined
                            </div>
                        </div>
                        <div class="text-center mt-4 ">User <span id="user_id"></span> has been notified about their unsuccessful application.</div>
                        <div class="mb-3 row mt-3">
                            <div class="col-12 col-lg-12 mt-1">
                                <div class="d-flex justify-content-center align-items-center">
                                    <button id="btn_close_declination_cl" type="button" xdata-bs-dismiss="modal" class="xclose_decline_app_modal btn btn-custom-dark px-5 rounded-pill">Close</button>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
           </section>
    

        `;
		window[el_id].innerHTML = html;

		this.hookup();
	}

	hookup() {
		this.on("#btn_cancel_declination", "click", this.onClickCancel);
		this.on("#btn_confirm_declination", "click", this.onClickConfirm);
		this.on("#btn_close_declination_cl", "click", this.onClickClose);
	}

	async show() {
		let resp;
		if (this.state.usr_role == USR_ROLE__LA1) {
			let hc = app.locateService(HttpClient);
			let url =
				"/api/leasing-admin-one/application/view-declination-reason";
			let payload = {
				application_id: this.state.application_id,
			};

			resp = await hc.fetch(
				"POST",
				url,
				{
					body: JSON.stringify(payload),
				},
				{}
			);

			let data = resp.output;
			declination_reason_note.value = data.ret_data[0].declination_reason;
		}

		//debugger;
		// open_modal(window.leasing_admin_two_declined_application_modal)
		// open_modal(window.decline_app_pri_comp);
		var modalapp = new bootstrap.Modal(
			document.getElementById(this.state.placeholer_id + "_decline_modal")
		);
		modalapp.show();
		//close_modal(window.decline_app_pri_comp);
	}

	hide() {
		// open_modal(window.decline_app_pri_comp)
		// close_modal(window.leasing_admin_two_declined_application_modal);
		// close_modal(window.decline_app_sub_comp)
		var hideModal = bootstrap.Modal.getInstance(
			document.getElementById(
				this.state.placeholer_id + "_decline_modal"
			),
			{}
		);
		// register_modal.show();
		hideModal.hide();
	}

	onClickCancel() {
		this.hide();
	}

	xonClickDecline() {
		open_modal(window.decline_app_sub_comp);
		close_modal(window.decline_app_pri_comp);
	}

	async onClickConfirm() {
		//fetch
		//
		let url = "";
		switch (this.state.usr_role) {
			case USR_ROLE__LA1:
				url = "/api/leasing-admin-one/application/action/decline";
				break;

			case USR_ROLE__LA2:
				url = "/api/leasing-admin-two/application/action/decline";
				break;

			case USR_ROLE__LM:
				url = "/api/leasing-manager/application/action/decline";
				break;
		}

		let hc = app.locateService(HttpClient);
		let payload = {
			application_id: this.state.application_id,
			action_note: window.declination_reason_note.value,
		};

		let resp = await hc.fetch(
			"POST",
			url,
			{
				body: JSON.stringify(payload),
			},
			{}
		);

		let data = resp.output;
		if (data.error) {
			app.alert(app.extractGracefulError(data.error));
			return;
		}
		console.log(data);

		if (data === null) {
			//toast...
			return;
		}
		// alert("success");
		// debugger;
		user_id.innerText = this.user_id;//"xxxxxx"//data.ret_val;
		var hideModal = bootstrap.Modal.getInstance(
			document.getElementById(
				this.state.placeholer_id + "_decline_modal"
			),
			{}
		);
		// register_modal.show();
		hideModal.hide();

		var modalapp = new bootstrap.Modal(
			document.getElementById(
				this.state.placeholer_id + "_decline_success_modal"
			)
		);
		modalapp.show();
		// open_modal(window.decline_app_sub_comp)
		// close_modal(window.decline_app_pri_comp);
	}

	onClickClose() {
		// close_modal(window.decline_app_sub_comp);
		// close_modal(window.decline_app_pri_comp);
		// close_modal(window.leasing_admin_two_declined_application_modal);

		if (this.state.usr_role == USR_ROLE__LA1) {
			window.location =
				"/leasing-admin-one/applications-new?property_id=" +
				this.state.property_id;
		} else if (this.state.usr_role == USR_ROLE__LA2) {
			window.location =
				"/leasing-admin-two/new_applications?property_id=" +
				this.state.property_id;
		} else if (this.state.usr_role == USR_ROLE__LM) {
			window.location =
				"/leasing-manager/new_application?property_id=" +
				this.state.property_id;
		}
	}
}

class RecommendComponent extends AppComponent {
	constructor(application_id, usr_role, property_id) {
		super();
		this.state.usr_role = usr_role;
		this.state.application_id = application_id;
		this.state.property_id = property_id;
	}

	async uponReady() {
		await super.uponReady();

		//on....
	}

	//render
	// render(el_id, data) {
	//     this.state.placeholer_id = el_id;
	//     let html = `

	//     <div class="form_wrapper add_modal " style="width:450px;">

	//         <div class="row">
	//             <div class="text-center mt-4 h3">
	//                 Notify Tenant
	//             </div>

	//             <div id="recommendation_note" class=" text-center  ">
	//                 A notification will be sent to user  ${data.user_id} to update them about the status of their application.

	//             </div>

	//         </div>
	//         <div class="row mt-3">
	//             <button type="button" id="btn_confirm_recommendation" class="close_notify_tenant_modal btn btn-primary"> Notify Tenant </button>

	//         </div>
	//     </div>

	//     <div class="modal_bg_overlay close_notify_tenant_modal"></div>

	//     `;
	//     window[el_id].innerHTML = html;

	//     this.hookup();
	// }
	render(el_id, data) {
		this.state.placeholer_id = el_id;
		let html = `

        <section class="modal fade" id="${el_id}_modal">
            <div class=" modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body">
                        <div class="row my-3">
                            <div class="col-md-12">
                                <div class="text-center mb-3 dm_sans_700 font_30">
                                    Notify Tenant
                                </div>
                                <div id="recommendation_note" class=" text-center mb-3 dm_sans_500 font_15">
                                    A notification will be sent to user  ${data.user_id} to update them about the status of their application.
                                </div>

                                <div class="d-flex justify-content-center">
                                    <button class="btn btn-primary px-5 rounded-5" id="btn_confirm_recommendation"  >Notify Tenant</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       </section>


        `;
		window[el_id].innerHTML = html;

		this.hookup();
	}
	hookup() {
		this.on("#btn_confirm_recommendation", "click", this.onClickConfirm);
	}

	show() {
		// debugger;
		// console.log(window[this.state.placeholer_id])
		var modalapp = new bootstrap.Modal(
			document.getElementById(this.state.placeholer_id + "_modal")
		);
		modalapp.show();
		// open_modal(window[this.state.placeholer_id])
	}

	async onClickConfirm(e) {
		// debugger;

		this.onClickClose();

		let boRcNote = {};
		let hasError = false;

		let url = "";


		let elx;

		switch (this.state.usr_role) {
			case USR_ROLE__LA1:
				url = "/api/leasing-admin-one/application/action/recommend";
				elx = document.getElementsByName('la1_recommendation_tick');
				boRcNote.la1_recommendation_note = window.la1_recommendation_note.value;

				// if(!boRcNote.la1_recommendation_note){
				// 	app.alert("Recommendation note can't be empty");
				// 	hasError = true;
				// }
				

				break;

			case USR_ROLE__LA2:
				url = "/api/leasing-admin-two/application/action/recommend";
				elx = document.getElementsByName('la2_recommendation_tick');

				boRcNote.la2_recommendation_note = window.la2_recommendation_note.value;
				
				// if(!boRcNote.la2_recommendation_note){
				// 	app.alert("Recommendation note can't be empty");
				// 	hasError = true;
				// }
				
				break;

			case USR_ROLE__LM:
				console.log("from approve");
				url = "/api/leasing-manager/application/action/approve";
				elx = [{ checked: true }];
				boRcNote.lm_approval_note = window.lm_approval_note.value;

				// if(!boRcNote.lm_approval_note){
				// 	app.alert("Recommendation note can't be empty");
				// 	hasError = true;
				// }
				break;
		}

		// let el = document.getElementsByName('la1_recommendation_tick');

		if(hasError){
			return;
		}

		let hc = app.locateService(HttpClient);
		let payload = {
			application_id: this.state.application_id,
			action_note: window.recommendation_note.innerText,
			application_status_subtype_val: elx[0].checked ? "true" : "false", //text val,
			...boRcNote
		};


		console.log();
		let resp = await hc.fetch("POST", url, {
			body: JSON.stringify(payload),
		});
		let data = resp.output;

		if (data.error) {
			app.alert(app.extractGracefulError(data.error));
			return;
		}

		console.log(data);

		if (data === null) {
			//toast...
			return;
		}
		// debugger;

		if (data.error) {
			app.alert(app.extractGracefulError(data.error));
			return;
		}

		if (this.state.usr_role == USR_ROLE__LA1) {
			window.location =
				"/leasing-admin-one/applications-new?property_id=" +
				this.state.property_id;
		} else if (this.state.usr_role == USR_ROLE__LA2) {
			window.location =
				"/leasing-admin-two/new_applications?property_id=" +
				this.state.property_id;
		} else if (this.state.usr_role == USR_ROLE__LM) {
			window.location =
				"/leasing-manager/new_application?property_id=" +
				this.state.property_id;
		}
		// debugger;
	}

	onClickClose() {
		// close_modal(window[this.state.placeholer_id])
		var hideModal = bootstrap.Modal.getInstance(
			document.getElementById(this.state.placeholer_id + "_modal"),
			{}
		);
		// register_modal.show();
		hideModal.hide();
	}
}

class SaveToWaitListComponent extends AppComponent {
	constructor(application_id, usr_role, property_id) {
		super();
		this.state.usr_role = usr_role;
		this.state.application_id = application_id;
		this.state.property_id = property_id;
	}

	async uponReady() {
		await super.uponReady();

		//on....
	}

	//render
	// render(el_id, data) {
	//     this.state.placeholer_id = el_id;
	//     let html = `

	//     <div class="form_wrapper add_modal " style="width:450px;">

	//         <div class="row">
	//             <div class="text-center mt-4 h3">
	//                 Notify Tenant
	//             </div>

	//             <div class=" text-center  ">
	//                 A notification will be sent to user  ${data.user_id} to update them about the status of their application.

	//             </div>

	//         </div>
	//         <div class="row mt-3">
	//             <button type="button" id="btn_confirm_save_w" class="close_notify_tenant_modal btn btn-primary"> Notify Tenant </button>

	//         </div>
	//     </div>

	//     <div class="modal_bg_overlay close_notify_tenant_modal"></div>

	//     `;
	//     window[el_id].innerHTML = html;

	//     this.hookup();
	// }

	render(el_id, data) {
		this.state.placeholer_id = el_id;
		let html = `
        <section class="modal fade" id="${el_id}_modal">
            <div class=" modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body">
                        <div class="row my-3">
                            <div class="col-md-12">
                                <div class="text-center mb-3 dm_sans_700 font_30">
                                    Notify Tenant
                                </div>
                                <div class=" text-center mb-3 dm_sans_500 font_15">
                                    A notification will be sent to user  ${data.user_id} to update them about the status of their application.
                                </div>

                                <div class="d-flex justify-content-center">
                                    <button class="btn btn-primary px-5 rounded-5" id="btn_confirm_save_w"  >Notify Tenant</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        `;
		window[el_id].innerHTML = html;

		this.hookup();
	}

	hookup() {
		this.on("#btn_confirm_save_w", "click", this.onClickConfirm);
	}

	show() {
		//debugger;
		var modalapp = new bootstrap.Modal(
			document.getElementById(this.state.placeholer_id + "_modal"),
			{}
		);
		modalapp.show();
		// open_modal(window[this.state.placeholer_id])
		// console.log('from 499 of waitlist ');
	}

	async onClickConfirm() {
		this.onClickClose();

		console.log("from conclick confirm");
		let url = "";
		switch (this.state.usr_role) {
			case USR_ROLE__LA1:
				url =
					"/api/leasing-admin-one/application/action/send-to-waitlist";
				break;

			case USR_ROLE__LA2:
				url =
					"/api/leasing-admin-two/application/action/send-to-waitlist";
				break;

			case USR_ROLE__LM:
				url =
					"/api/leasing-manager/application/action/send-to-waitlist";
				break;
		}

		let hc = app.locateService(HttpClient);
		let payload = {
			application_id: this.state.application_id,
			action_note: window.declination_reason_note.value,
		};

		let resp = await hc.fetch(
			"POST",
			url,
			{
				body: JSON.stringify(payload),
			},
			{}
		);

		let data = resp.output;
		if (data.error) {
			app.alert(app.extractGracefulError(data.error));
			return;
		}
		console.log(data);
		// return;

		if (data === null) {
			//toast...
			return;
		}
		//alert("success");
		if (this.state.usr_role == USR_ROLE__LA1) {
			window.location =
				"/leasing-admin-one/applications-new?property_id=" +
				this.state.property_id;
		} else if (this.state.usr_role == USR_ROLE__LA2) {
			window.location =
				"/leasing-admin-two/new_applications?property_id=" +
				this.state.property_id;
		} else if (this.state.usr_role == USR_ROLE__LM) {
			window.location =
				"/leasing-manager/new_application?property_id=" +
				this.state.property_id;
		}
		// debugger;
	}

	onClickClose() {
		// close_modal(window[this.state.placeholer_id])
		var hideModal = bootstrap.Modal.getInstance(
			document.getElementById(this.state.placeholer_id + "_modal"),
			{}
		);
		// register_modal.show();
		hideModal.hide();
	}
}

class LeaseReminingPopupComponent extends AppComponent {
	// "lease_m2_before_end_date": "2023-07-03",
	//         "lease_m3_before_end_date": "2023-06-03",
	//         "lease_m6_before_end_date": "2023-03-05",
	// lease_end_date: "2023-09-11"

	constructor() {
		super();
	}

	async uponReady() {
		await super.uponReady();
		//on....
	}

	render(el_id, month_remaining) {

		// "lease_m2_before_end_date": "2023-07-03",
		//         "lease_m3_before_end_date": "2023-06-03",
		//         "lease_m6_before_end_date": "2023-03-05",
		// lease_end_date: "2023-09-11"
		// const lease2mBeforeEnd = new Date(data.lease_m2_before_end_date);
		// const lease3mBeforeEnd = new Date(data.lease_m3_before_end_date);
		// const lease6mBeforeEnd = new Date(data.lease_m6_before_end_date);
		// const leaseEndDate = new Date(data.lease_m6_before_end_date);

		// const lease2mBeforeEnd = new Date("2023-07-03");
		// const lease3mBeforeEnd = new Date("2023-06-03");
		// const lease6mBeforeEnd = new Date("2023-03-05");
		// const leaseEndDate = new Date("2023-09-11");

		// console.log("Lease remaining popup showing with : " ,data);


		this.state.placeholer_id = el_id;


		let html = `
        <section class="modal fade" id="${el_id}_modal">
            <div class=" modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body">
							<div class="row justify-content-center">

								<div class="px-3">

									<div class="mb-4">
										<div class="text-dark text-center dm_sans_700 font_25">
											Lease: Only ${month_remaining} months remaining!
										</div>
										<div class="text-secondary font_18  dm_sans_500">
											<span id="sender_trigger_timestamp"></span>
										</div>
									</div>

									<div class="mb-4">
										<div class="text-dark dm_sans_700 font_22">
											Your lease is going to expire.
										</div>
										<div class="text-dark font_20  dm_sans_500">
											Your lease only has ${month_remaining} months remaining. Please contact
											your leasing adminsitrator for further
											information regarding lease arrangements.
										</div>
									</div>


									<div class="mb-4">
										<div class="remind_msg text-dark font_20  dm_sans_500">

										</div>
									</div>

									<div class="d-flex flex-column flex-md-row  align-items-center  justify-content-around w-100 px-8 gap-0 gap-md-2">

										<div class=" mt-1 mt-md-4 w-100">
											<a href="/tenant/contact" class=" btn btn-custom-dark mt-1 dm_sans_700 px-5 xpy-2" style="width:100%; border-radius:24px">Contact
												Us</a>
										</div>

										<div class="mt-1 mt-md-4 w-100" >
											<a id="btn_confirm_save_w" class="btn btn-primary h_45 px-5 mt-1 dm_sans_700 px-5" style="width:auto">Close</a>
										</div>
									</div>
								</div>
							</div>
					</div>
				</div>
            </div>
        </section>


        `;


		window[el_id].innerHTML = html;

		this.hookup();
	}

	hookup() {
		this.on("#btn_confirm_save_w", "click", this.onClickConfirm);
	}

	show() {
		// debugger;
		var modalapp = new bootstrap.Modal(
			document.getElementById(this.state.placeholer_id + "_modal"),
			{}
		);
		modalapp.show();
		// open_modal(window[this.state.placeholer_id])
		// console.log('from 499 of waitlist ');
	}

	async onClickConfirm() {
		this.onClickClose();

		// debugger;
	}

	onClickClose() {
		// close_modal(window[this.state.placeholer_id])
		var hideModal = bootstrap.Modal.getInstance(
			document.getElementById(this.state.placeholer_id + "_modal"),
			{}
		);
		// register_modal.show();
		hideModal.hide();
	}
}

class RequestReviewComponent extends AppComponent {
	constructor(usr_role, property_id) {
		super();
		this.state.usr_role = usr_role;
		this.state.property_id = property_id;
	}

	async uponReady() {
		await super.uponReady();
	}

	//render
	// render(el_id, data) {
	//     this.state.placeholer_id = el_id;
	//     let html = `

	//     <div class="form_wrapper add_modal " style="width:450px;">

	//         <div class="row">
	//             <div class="text-center mt-4 h3">
	//                 Request Review
	//             </div>

	//             <div class=" text-center  ">
	//                 A unit is now available, user <span id="user_id"></span> will be asked to review teir application information and update any outdated information.
	//             </div>

	//         </div>
	//         <div class="row mt-3">
	//             <button type="submit" id="close_btn_request_review" class=" btn btn-primary"> Close </button>

	//         </div>
	//     </div>

	//     <div class="modal_bg_overlay close_request_review_modal"></div>

	//     `;
	//     window[el_id].innerHTML = html;

	//     this.hookup();
	// }
	render(el_id, data) {
		this.state.placeholer_id = el_id;
		let html = `

        <section class="modal fade" id="${el_id}_modal">
            <div class=" modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body">
                        <div class="row my-3">
                            <div class="col-md-12">
                                <div class="text-center mb-3 dm_sans_700 font_30">
                                     Request Review
                                </div>
                                <div  class=" text-center mb-3 dm_sans_500 font_15">
                                    A unit is now available, user <span id="user_id"></span> will be asked to review teir application information and update any outdated information.
                                </div>

                                <div class="d-flex justify-content-center">
                                    <button class="btn btn-primary px-5 rounded-5" id="close_btn_request_review"  >Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        `;
		window[el_id].innerHTML = html;

		this.hookup();
	}
	hookup() {
		this.on("#close_btn_request_review", "click", this.onClickConfirm);
	}

	show(dat) {
		this.state.application_id = dat.application_id;
		user_id.innerText = dat.user_id;

		//debugger;
		// open_modal(window.request_review_modal)
		var modalapp = new bootstrap.Modal(
			document.getElementById(this.state.placeholer_id + "_modal"),
			{}
		);
		modalapp.show();
		console.log("running show");
	}

	async onClickConfirm() {
		this.onClickClose();
		console.log("from conclick confirm");
		let url = "";
		switch (this.state.usr_role) {
			case USR_ROLE__LA1:
				url =
					"/api/leasing-admin-one/application/action/request-review";
				break;

			case USR_ROLE__LA2:
				url =
					"/api/leasing-admin-two/application/action/request-review";
				break;

			case USR_ROLE__LM:
				url = "/api/leasing-manager/application/action/request-review";
				break;
		}

		let hc = app.locateService(HttpClient);
		let payload = {
			application_id: this.state.application_id,
			action_note: "",
		};
		console.log(payload);
		let resp = await hc.fetch("POST", url, {
			body: JSON.stringify(payload),
		});

		let data = resp.output;
		if (data.error) {
			app.alert(app.extractGracefulError(data.error));
			return;
		}
		console.log(data);
		// return;

		if (data === null) {
			//toast...
			return;
		}
		//alert("success");
		// debugger;
		if (this.state.usr_role == USR_ROLE__LA1) {
			window.location =
				"/leasing-admin-one/applications-new?property_id=" +
				this.state.property_id;
		} else if (this.state.usr_role == USR_ROLE__LA2) {
			window.location =
				"/leasing-admin-two/new_applications?property_id=" +
				this.state.property_id;
		} else if (this.state.usr_role == USR_ROLE__LM) {
			window.location =
				"/leasing-manager/new_application?property_id=" +
				this.state.property_id;
		}
	}

	onClickClose() {
		// close_modal(window.request_review_modal)
		var hideModal = bootstrap.Modal.getInstance(
			document.getElementById(this.state.placeholer_id + "_modal"),
			{}
		);
		// register_modal.show();
		hideModal.hide();
	}
}

class SendReminderComponent extends AppComponent {
	constructor(usr_role, property_id) {
		super();
		this.state.usr_role = usr_role;
		this.state.property_id = property_id;
	}

	async uponReady() {
		await super.uponReady();
	}

	//render
	// render(el_id, data) {
	//     this.state.placeholer_id = el_id;
	//     let html = `

	//     <div class="form_wrapper add_modal " style="width:450px;">

	//         <div class="row">
	//             <div class="text-center mt-4 h3">
	//                 Send Reminder
	//             </div>

	//             <div class=" text-center  ">
	//                 A reminder will be sent user ${data.user_id} to remind them to pay their deposit within 7 days of the request of forfeit the available unit.
	//             </div>

	//         </div>
	//         <div class="row mt-3">
	//             <button type="submit" id="close_btn_request_review" class=" btn btn-primary"> Close </button>

	//         </div>
	//     </div>

	//     <div class="modal_bg_overlay close_request_review_modal"></div>

	//     `;
	//     window[el_id].innerHTML = html;

	//     this.hookup();
	// }

	render(el_id, data) {
		this.state.placeholer_id = el_id;
		let html = `

        <section class="modal fade" id="${el_id}_modal">
            <div class=" modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body">
                        <div class="row my-3">
                            <div class="col-md-12">
                                <div class="text-center mb-3 dm_sans_700 font_30">
                                    Send Reminder
                                </div>
                                <div class=" text-center mb-3 dm_sans_500 font_15">
                                    A reminder will be sent user <span id="tenant_id"></span>  to remind them to pay their deposit within 7 days of the request of forfeit the available unit.
                                </div>

                                <div class="d-flex justify-content-center">
                                    <button class="btn btn-primary px-5 rounded-5" id="close_btn_request_review"  >Notify Tenant</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        `;
		window[el_id].innerHTML = html;

		this.hookup();
	}

	hookup() {
		this.on("#close_btn_request_review", "click", this.onClickConfirm);
	}

	show(dat) {
		this.state.application_id = dat.application_id;
		tenant_id.innerText = dat.tenant_id;
		//debugger;
		// open_modal(window.send_reminder_modal)
		var modalapp = new bootstrap.Modal(
			document.getElementById(this.state.placeholer_id + "_modal"),
			{}
		);
		modalapp.show();
		console.log("running show");
	}

	async onClickConfirm() {
		this.onClickClose();
		console.log("from conclick confirm");
		let url = "";
		switch (this.state.usr_role) {
			case USR_ROLE__LA1:
				url =
					"/api/leasing-admin-one/application/action/remind-deposit";
				break;

			case USR_ROLE__LA2:
				url =
					"/api/leasing-admin-two/application/action/remind-deposit";
				break;

			case USR_ROLE__LM:
				url = "/api/leasing-manager/application/action/remind-deposit";
				break;
		}

		let hc = app.locateService(HttpClient);
		let payload = {
			application_id: this.state.application_id,
			action_note: "",
		};
		console.log(payload);
		let resp = await hc.fetch("POST", url, {
			body: JSON.stringify(payload),
		});

		let data = resp.output;
		if (data.error) {
			app.alert(app.extractGracefulError(data.error));
			return;
		}
		console.log(data);
		// return;

		if (data === null) {
			//toast...
			return;
		}
		//alert("success");
		// debugger;
		if (this.state.usr_role == USR_ROLE__LA1) {
			window.location =
				"/leasing-admin-one/applications-new?property_id=" +
				this.state.property_id;
		} else if (this.state.usr_role == USR_ROLE__LA2) {
			window.location =
				"/leasing-admin-two/new_applications?property_id=" +
				this.state.property_id;
		} else if (this.state.usr_role == USR_ROLE__LM) {
			window.location =
				"/leasing-manager/new_application?property_id=" +
				this.state.property_id;
		}
	}

	onClickClose() {
		// close_modal(window.send_reminder_modal)
		var hideModal = bootstrap.Modal.getInstance(
			document.getElementById(this.state.placeholer_id + "_modal"),
			{}
		);
		// register_modal.show();
		hideModal.hide();
	}
}

class RequestDocumentComponent extends AppComponent {
	constructor(application_id, usr_role, property_id) {
		super();
		this.state.usr_role = usr_role;
		this.state.application_id = application_id;
		this.state.property_id = property_id;
	}

	async uponReady() {
		await super.uponReady();
	}

	//render
	// render(el_id, data) {
	//     this.state.placeholer_id = el_id;
	//     let list = ``
	//     data.list.forEach((e) => {
	//         list += `<li>${e}</li>`
	//     })
	//     let html = `

	//     <div class="form_wrapper add_modal" style="width:450px;">

	//         <div class="row">
	//             <div class="text-center mt-4 h3">
	//                 Outstanding Documentation
	//             </div>

	//             <div class=" text-center  " id="note">
	//                 A request has been sent to user
	//                 ${data.user_id} to upload the
	//                 missing documentation.

	//             </div>

	//             <div>
	//                 <ul>
	//                     ${list}
	//                 </ul>
	//             </div>

	//             <div class=" text-center  ">
	//                 Their application maybe reviewed again when they have correctly uploaded the required documentation

	//             </div>

	//         </div>
	//         <div class="row mt-3">
	//             <button id="btn_send_document_request" type="button" class="close_request_documentation_modal btn btn-primary">CLOSE</button>

	//         </div>
	//     </div>

	//     <div class="modal_bg_overlay close_request_documentation_modal"></div>

	//     `;
	//     window[el_id].innerHTML = html;

	//     this.hookup();
	// }

	render(el_id, data) {
		this.state.placeholer_id = el_id;
		let list = ``;
		data.list.forEach((e) => {
			list += `<li>${e}</li>`;
		});
		let html = `
        <section class="modal fade" id="${el_id}_modal">
            <div class=" modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body">
                        <div class="row my-3">
                            <div class="col-md-12">
                                <div class="text-center mb-3 dm_sans_700 font_30">
                                    Outstanding Documentation
                                </div>
                                <div class=" text-center mb-3 dm_sans_500 font_15">
                                A request <div class="d-inline-block dm_sans_500 font_15" id="hasbeen_willbe">has been</div> sent to user
                                ${data.user_id} to upload the
                                missing documentation.
                                </div>

                                <div class="mb-3 dm_sans_500 font_15">
                                    <ul>
                                        ${list}
                                    </ul>
                                </div>
                                <div class=" text-center mb-3 " id="input_or_text">
                                    Their application maybe reviewed again when they have correctly uploaded the required documentation
                
                                </div>
                                <div class="d-flex justify-content-around" id="action_area">
                                    <button class="btn btn-primary px-5" id="btn_send_document_requesty" >CLOSE</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        `;
		window[el_id].innerHTML = html;

		this.hookup();
	}

	renderConfirmation(el_id, data) {
		this.state.placeholer_id = el_id;
		let list = ``;
		data.list.forEach((e) => {
			list += `<li>${e}</li>`;
		});
		let html = `
        <section class="modal fade" id="${el_id}_modal">
            <div class=" modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body">
                        <div class="row my-3">
                            <div class="col-md-12">
                                <div class="text-center mb-3 dm_sans_700 font_30">
                                    Outstanding Documentation
                                </div>
                                <div class=" text-center mb-3 dm_sans_500 font_15">
                                A request has been sent to user
                                ${data.user_id} to upload the
                                missing documentation.
                                </div>

                                <div class="mb-3 dm_sans_500 font_15">
                                    <ul>
                                        ${list}
                                    </ul>
                                </div>
                                <div class=" text-center mb-3 ">
                                    Their application maybe reviewed again when they have correctly uploaded the required documentation
                
                                </div>
                                <div class="d-flex justify-content-center">
                                    <button class="btn btn-primary px-5" id="btn_send_document_requesty" >CLOSE</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        `;
		window[this.state.placeholer_id].innerHTML = html;

		this.hookup();
	}

	hookup() {
		this.on("#btn_send_document_requesty", "click", this.onClickConfirm);
	}

	async show(payload) {
		this.state.payload = payload;
		this.state.documents_requested = payload.documents_requested;


		// <div class=" text-center mb-3 d-flex w-100" id="input_or_text"><textarea maxlength="150" placeholder="Type message here." class="col-12 p-2"></textarea></div>


		window.hasbeen_willbe.innerHTML = "will be";
		window.input_or_text.innerHTML = `<div class="px-3"><textarea id="la1_documents_requested_msg" maxlength="1000" placeholder="Type message here." class="col-12 p-2"  style="border-radius:12px"></textarea></div>`;

		window.action_area.innerHTML = `
		<button class="btn btn-custom-dark px-5" id="btn_cancel" style="border-radius:18px">CANCEL</button>
		<button class="btn btn-primary px-5" id="btn_send_document_requesty" >SEND</button>`;


		this.on("#btn_send_document_requesty", "click", this.onClickConfirm);
		this.on("#btn_cancel", "click", ()=>this.onClickClose(false));

		//TODO: onClickConfirm need to be enabled after clicking confirm...........
		// let err = await this.onClickConfirm();
		// if (err) return;

		// debugger;
		var modalapp = new bootstrap.Modal(
			document.getElementById(this.state.placeholer_id + "_modal"),
			{}
		);
		modalapp.show();
		// open_modal(window.request_documentation_modal)
		console.log("running show");

	}

	async onClickConfirm() {
		//debugger;

		console.log("from conclick confirm");
		let url = "";
		switch (this.state.usr_role) {
			case USR_ROLE__LA1:
				url = "/api/leasing-admin-one/application/action/request-docs";
				break;

			case USR_ROLE__LA2:
				url = "/api/leasing-admin-two/application/action/request-docs";
				break;

			case USR_ROLE__LM:
				url = "/api/leasing-manager/application/action/request-docs";
				break;
		}

		let hc = app.locateService(HttpClient);
		let payload = {
			application_id: this.state.application_id,
			action_note: "", //note.innerText
			la1_documents_requested_msg: window.la1_documents_requested_msg.value,
			documents_requested: this.state.documents_requested,
			...this.state.payload
		};
		console.log(payload);
		let resp = await hc.fetch("POST", url, {
			body: JSON.stringify(payload),
		});

		let data = resp.output;

		if (data === null) {
			//toast...
			return;
		}

		if (data.error) {
			app.alert(app.extractGracefulError(data.error));
			return data.error;
		}
		// console.log(data);
		// return;

		//alert("success");
		// debugger;


		window.hasbeen_willbe.innerHTML = "has be";
		window.input_or_text.innerHTML = `Their application maybe reviewed again when they have correctly uploaded the required documentation`;

		window.action_area.innerHTML = `<button class="btn btn-primary px-5" id="btn_send_document_requesty" >CLOSE</button>`;
		this.on("#btn_send_document_requesty", "click", this.onClickClose);
	}

	onClickClose(redirect = true) {
		// close_modal(window.request_documentation_modal)
		var hideModal = bootstrap.Modal.getInstance(
			document.getElementById(this.state.placeholer_id + "_modal"),
			{}
		);
		// register_modal.show();
		hideModal.hide();

		// debugger;
		if(!redirect){
			return;
		}

		if (this.state.usr_role == USR_ROLE__LA1) {
			window.location =
				"/leasing-admin-one/applications-new?property_id=" +
				this.state.property_id;
		} else if (this.state.usr_role == USR_ROLE__LA2) {
			window.location =
				"/leasing-admin-two/new_applications?property_id=" +
				this.state.property_id;
		} else if (this.state.usr_role == USR_ROLE__LM) {
			window.location =
				"/leasing-manager/new_application?property_id=" +
				this.state.property_id;
		}

	}
}

class RequestDepositComponent extends AppComponent {
	constructor(application_id, usr_role, property_id) {
		super();
		this.state.usr_role = usr_role;
		this.state.application_id = application_id;
		this.state.property_id = property_id;
	}

	async uponReady() {
		await super.uponReady();
	}

	render(el_id, data) {
		this.state.placeholer_id = el_id;
		let list = ``;
		// data.user_id.forEach((e)=>{
		//     list += `<li>${e}</li>`
		// })
		let html = `
        <section class="modal fade" id="${el_id}_modal">
            <div class=" modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body">
                        <div class="row my-3">
                            <div class="col-md-12">
                                <div class="text-center mb-3 dm_sans_700 font_30">
                                    Notification Sent
                                </div>
                                <div class=" text-center mb-3 dm_sans_500 font_15"  id="note">
                                User 
                                ${data.user_id} has been notified to pay a deposit of 
                          
                                </div>
                                <div class="d-flex justify-content-center align-items-center my-3">
								<span class="text-bold h3">R</span><span id="deposit_amount" class="text-bold h3"></span>
                                </div>
                             
                                <div class="d-flex justify-content-center">
                                    <button id="btn_send_deposit_request" type="button" class="close_request_documentation_modal btn btn-primary">CLOSE</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        `;
		window[el_id].innerHTML = html;

		this.hookup();
	}
	hookup() {
		this.on("#btn_send_deposit_request", "click", this.onClickConfirm);
	}

	show(data) {
		//debugger;
		this.state.unique_tpn_id_num =
			data.data_for_component.unique_tpn_id_num;
		this.state.bo_request_deposit_amount =
			data.data_for_component.bo_request_deposit_amount;
		this.state.bo_request_deposit_reference =
			data.data_for_component.bo_request_deposit_reference;
		this.state.bo_request_deposit_note =
			data.data_for_component.bo_request_deposit_note;

		// window.deposit_amount.textContent = this.state.bo_request_deposit_amount;
		this.state.application_id = data.data_for_component.application_id;
		deposit_amount.innerText = this.state.bo_request_deposit_amount;
		// open_modal(window.notify_tenant_modal)
		var modalapp = new bootstrap.Modal(
			document.getElementById(this.state.placeholer_id + "_modal"),
			{}
		);
		modalapp.show();
		console.log("running show");
		console.log("FROM REQDEPComp", data);
	}

	async onClickConfirm() {
		debugger;
		this.onClickClose();

		// ==============================
		// ------ THIS SECTION HAS BEEN MOVED TO REQUEST_DEPOSIT.BLADE.PHP BEFORE SHOWING THE DIALOG
		// ==============================
		// console.log("from conclick confirm");
		// let url = "";
		// switch (this.state.usr_role) {
		// 	case USR_ROLE__LA1:
		// 		url = "/api/leasing-admin-one/application/action/request-pop";
		// 		break;

		// 	case USR_ROLE__LA2:
		// 		url = "/api/leasing-admin-two/application/action/request-pop";
		// 		break;

		// 	case USR_ROLE__LM:
		// 		url = "/api/leasing-manager/application/action/request-pop";
		// 		break;
		// }

		// let hc = app.locateService(HttpClient);
		// let payload = {
		// 	application_id: this.state.application_id,
		// 	unique_tpn_id_num: this.state.unique_tpn_id_num,
		// 	bo_request_deposit_amount: this.state.bo_request_deposit_amount,
		// 	bo_request_deposit_reference:
		// 		this.state.bo_request_deposit_reference,
		// 	bo_request_deposit_note: this.state.bo_request_deposit_note,
		// };
		// console.log(payload);
		// let resp = await hc.fetch("POST", url, {
		// 	body: JSON.stringify(payload),
		// });

		// let data = resp.output;

		// if (data.error) {
		// 	app.alert(app.extractGracefulError(data.error));
		// 	return;
		// }
		// console.log(data);
		// // return;

		// if (data === null) {
		// 	//toast...
		// 	return;
		// }

		// alert("success");
		// debugger;
		if (this.state.usr_role == USR_ROLE__LA1) {
			window.location =
				"/leasing-admin-one/applications-approved?property_id=" +
				this.state.property_id;
		} else if (this.state.usr_role == USR_ROLE__LA2) {
			window.location =
				"/leasing-admin-two/new_applications?property_id=" +
				this.state.property_id;
		} else if (this.state.usr_role == USR_ROLE__LM) {
			window.location =
				"/leasing-manager/new_application?property_id=" +
				this.state.property_id;
		}
	}

	onClickClose() {
		// close_modal(window.notify_tenant_modal)
		var hide_modal = bootstrap.Modal.getInstance(
			document.getElementById(this.state.placeholer_id + "_modal"),
			{}
		);
		hide_modal.hide();
	}
}

class ViewReasonComponent extends AppComponent {
	constructor(usr_role, property_id) {
		super();
		this.state.usr_role = usr_role;
		this.state.property_id = property_id;
	}

	async uponReady() {
		await super.uponReady();
	}

	// render(el_id, data) {
	//     this.state.placeholer_id = el_id;
	//     let html = `

	//         <div class="form_wrapper add_modal d-none" id="view_reason_to_tennat_pri_comp" style="width:500px;">

	//             <div class="row">
	//                 <div class="text-center mt-4 h3">
	//                     Application Declined
	//                 </div>

	//                 <div class="text-start mt-2 text-secondary">
	//                     Date Submited:<span class="text-dark ms-2" id="submission_date"> </span>
	//                 </div>

	//                 <div class="text-start mt-2 text-secondary">
	//                     Date Decline:<span class="text-dark ms-2" id="date_declined"> </span>
	//                 </div>

	//                 <div class="text-start mt-2 text-secondary">
	//                     Declined by :<span class="text-dark ms-2" id="declined_by"> </span>
	//                 </div>

	//             </div>
	//             <div class="row mt-3">
	//                 <div class="mb-3">
	//                     <label for="exampleFormControlTextarea1" class="form-label text-dark p-0 m-0">Reason:</label>
	//                     <textarea class="form-control bg-light" id="exampleFormControlTextarea1" rows="4">  </textarea>
	//                 </div>
	//             </div>
	//             <div class="row mt-3">

	//             <form class=" ">

	//                 <div class="d-flex justify-content-between">

	//                     <div class="col-lg-5">
	//                         <button type="button"  class="close_decline_terminate_modal btn btn-custom-dark"> Close </button>
	//                     </div>

	//                     <div class="col-lg-5">
	//                         <button type="button" id="successfully_decline_terminate_modal" class=" btn btn-primary"> Request Review </button>
	//                     </div>
	//                 </div>
	//             </form>

	//                 </div>

	//             </div>

	//             <div class="form_wrapper add_modal d-none" id="view_reason_to_tennat_sub_comp" style="width:450px;">

	//                 <div class="row">
	//                     <div class="text-center mt-4 h3">
	//                         Request Review
	//                     </div>

	//                     <div class="text-center mt-4 ">
	//                         User 235689 has been notified to review their application adn update it according to the provided reason.
	//                     </div>

	//                 </div>
	//                 <div class="row mt-3">

	//                     <form class="col-lg-12 mx-auto">

	//                         <div class="col-lg-12">
	//                             <div class="d-flex justify-content-around">

	//                                 <div class="col-lg-4">
	//                                     <button type="button" id="close_btn" class=" btn btn-primary"> Close </button>
	//                                 </div>
	//                             </div>

	//                         </div>
	//                     </form>

	//                 </div>

	//             </div>

	//             <div class="modal_bg_overlay close_decline_terminate_modal"></div>

	//     `;

	//render
	render(el_id, data) {
		this.state.placeholer_id = el_id;
		console.log("placeholder state value of modal  viewReasonComponent is: ", el_id, this.state.placeholer_id);
		let html = `
                
        <section class="modal fade" id="${el_id}_modal">
            <div class=" modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body">
                        <div class="row">
                            <div class="text-center mt-4 h3">
                                Application Declined
                            </div>

                            <div class="text-start mt-2 text-secondary">
                                Date Submited:<span class="text-dark ms-2" id="submission_date"> </span>
                            </div>

                            <div class="text-start mt-2 text-secondary">
                                Date Decline:<span class="text-dark ms-2" id="date_declined"> </span>
                            </div>

                            <div class="text-start mt-2 text-secondary">
                                Declined by :<span class="text-dark ms-2" id="declined_by"> </span>
                            </div>
                        </div>
                        
                        <div class="row mt-3">
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label text-dark p-0 m-0">Reason:</label>
                                <textarea class="form-control bg-light" id="declination_reason" rows="4">  </textarea>
                            </div>
                        </div>

                        <div class="row mt-3">

                            <form class=" ">
            
                                <div class="d-flex justify-content-between">
            
                                    <div class="">
                                        <button type="button"  xdata-bs-dismiss="modal"  id="notify_tenant" class=" xclose_decline_terminate_modal btn btn-custom-dark rounded-5"> Notify Tenant </button>
                                    </div>
            
                                    <div class="">
                                        <button type="button" id="successfully_decline_terminate_modal" class=" btn btn-primary rounded-5"> Request Review </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        
        <section class="modal fade" id="${el_id}_modal_view_reason_to_tennat_sub_comp">
            <div class=" modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body">
                        <div class="row my-3">
                            <div class="col-md-12">
                                <div class="text-center mb-3 dm_sans_700 font_30">
                                    Request Review
                                </div>
                                <div class=" text-center mb-3 dm_sans_500 font_15">
                                    User  <span class="tenant_id"></span> has been notified to review their application adn update it according to the provided reason.
                                </div>

                                <div class="d-flex justify-content-center">
                                    <button class="btn btn-primary px-5 rounded-5"  data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section class="modal fade" id="${el_id}_decline_success_modal">
            <div class=" modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body">
                    <div class="d-flex justify-content-center">
                        <div class="text-center mt-4 h2 ">
                            Application Declined
                        </div>
                    </div>
                    <div class="text-center mt-4 ">User <span class="tenant_id"></span> has been notified about their unsuccessful application.</div>
                    <div class="mb-3 row mt-3">
                        <div class="col-12 col-lg-12 mt-1">
                            <div class="d-flex justify-content-center align-items-center">
                                <button id="btn_close_declination_cl" type="button" data-bs-dismiss="modal" class="xclose_decline_app_modal btn btn-custom-dark px-5 rounded-pill">Close</button>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
           

        `;
		window[el_id].innerHTML = html;

		this.hookup();
	}

	hookup() {
		this.on(".close_decline_terminate_modal", "click", this.onClickCancel);
		this.on(
			"#successfully_decline_terminate_modal",
			"click",
			this.onClickConfirm
		);
		this.on("#notify_tenant", "click", this.onNotifyTenant);
		this.on("#btn_close_declination_cl", "click", this.onClickClose);
	}
	confirmDecline() {
		var hide_modal = bootstrap.Modal.getInstance(
			document.getElementById(this.state.placeholer_id + "_modal"),
			{}
		);
		hide_modal.hide();

		var modalappagain = new bootstrap.Modal(
			document.getElementById(
				this.state.placeholer_id +
				"_modal_view_reason_to_tennat_sub_comp"
			),
			{}
		);
		try {
			modalappagain.show();
		} catch (e) {

		}

		// close_modal(window.view_reason_to_tennat_pri_comp);
		// open_modal(window.view_reason_to_tennat_sub_comp)
	}

	async onNotifyTenant() {
		//fetch
		let url = "/api/leasing-admin-one/application/action/decline";

		let hc = app.locateService(HttpClient);
		let payload = {
			application_id: this.state.application_id,
			action_note: window.declination_reason.value,
		};

		let resp = await hc.fetch(
			"POST",
			url,
			{
				body: JSON.stringify(payload),
			},
			{}
		);

		let data = resp.output;
		if (data.error) {
			app.alert(app.extractGracefulError(data.error));
			return;
		}
		console.log(data);

		if (data === null) {
			//toast...
			return;
		}
		// alert("success");
		// debugger;
		var hideModal = bootstrap.Modal.getInstance(
			document.getElementById(this.state.placeholer_id + "_modal"),
			{}
		);
		// register_modal.show();
		hideModal.hide();

		var modalapp = new bootstrap.Modal(
			document.getElementById(
				this.state.placeholer_id + "_decline_success_modal"
			)
		);
		modalapp.show();
		// open_modal(window.decline_app_sub_comp)
		// close_modal(window.decline_app_pri_comp);
	}

	show(data) {
		console.log("showing tenant notification info for : ", data);
		this.state.application_id = data.application_id;
		this.state.submission_time = data.submission_time;
		this.state.submission_timestamp = data.submission_timestamp;

		submission_date.innerText = data.submission_date;
		date_declined.innerText = data.date_declined;
		declined_by.innerText = data.declined_by_lm;

		//to cover all element require tenant_id to fill. => bappi
		document.querySelectorAll('.tenant_id').forEach(e => {
			e.innerHTML = data.tenant_id;
		});
		//NOT WORKING.....    // tenant_id.innerHTML = data.tenant_id;



		//debugger;
		declination_reason.innerText = data.declination_reason;
		console.log(data);
		//debugger;
		// open_modal(window.leasing_admin_one_view_reason_modal)
		var modalapp = new bootstrap.Modal(
			document.getElementById(this.state.placeholer_id + "_modal"),
			{}
		);
		modalapp.show();
		// open_modal(window.view_reason_to_tennat_pri_comp);
	}

	hide() {
		// close_modal(window.leasing_admin_one_view_reason_modal);
		// close_modal(window.view_reason_to_tennat_pri_comp)
		// close_modal(window.view_reason_to_tennat_sub_comp)
		var hideModal = bootstrap.Modal.getInstance(
			document.getElementById(this.state.placeholer_id + "_modal"),
			{}
		);
		// register_modal.show();
		hideModal.hide();

		var hideModalagain = bootstrap.Modal.getInstance(
			document.getElementById(
				this.state.placeholer_id +
				"_modal_view_reason_to_tennat_sub_comp"
			),
			{}
		);
		// register_modal.show();
		hideModalagain.hide();
	}

	onClickCancel() {
		this.hide();
	}

	async onClickConfirm() {
		//fetch
		console.log("from conclick confirm");
		let url =
			"/api/leasing-admin-one/application/action/request-review-after-declination";
		// switch (this.state.usr_role) {
		//     case USR_ROLE__LA1:
		//         url = "/api/leasing-admin-one/application/action/request-review";
		//         break;

		//     case USR_ROLE__LA2:
		//         url = "/api/leasing-admin-two/application/action/request-review";
		//         break;

		//     case USR_ROLE__LM:
		//         url = "/api/leasing-manager/application/action/request-review";
		//         break;

		// }

		let hc = app.locateService(HttpClient);
		let payload = {
			application_id: this.state.application_id,
			action_note: window.declination_reason.value,
		};
		console.log(payload);
		let resp = await hc.fetch("POST", url, {
			body: JSON.stringify(payload),
		});

		let data = resp.output;
		if (data.error) {
			app.alert(app.extractGracefulError(data.error));
			return;
		}
		console.log(data);
		// return;

		if (data === null) {
			//toast...
			return;
		}
		//alert("success");
		// debugger;
		// if (this.state.usr_role == USR_ROLE__LA1) {
		//     window.location =
		//         "/leasing-admin-one/applications-declined?property_id=" +
		//         this.state.property_id;
		// } else if (this.state.usr_role == USR_ROLE__LA2) {
		//     window.location =
		//         "/leasing-admin-two/applications-declined?property_id=" +
		//         this.state.property_id;
		// } else if (this.state.usr_role == USR_ROLE__LM) {
		//     window.location =
		//         "/leasing-manager/applications-declined?property_id=" +
		//         this.state.property_id;
		// }

		this.confirmDecline();
	}

	onClickClose() {

		if (this.state.usr_role == USR_ROLE__LA1) {
			window.location =
				"/leasing-admin-one/applications-declined?property_id=" +
				this.state.property_id;
		} else if (this.state.usr_role == USR_ROLE__LA2) {
			window.location =
				"/leasing-admin-two/applications-declined?property_id=" +
				this.state.property_id;
		} else if (this.state.usr_role == USR_ROLE__LM) {
			window.location =
				"/leasing-manager/applications-declined?property_id=" +
				this.state.property_id;
		}



		// debugger
		// this.onClickConfirm();
		// close_modal(window.leasing_admin_one_view_reason_modal);
		// close_modal(window.view_reason_to_tennat_pri_comp)
		// close_modal(window.view_reason_to_tennat_sub_comp)
		//debugger
		// var hideModal = bootstrap.Modal.getInstance(
		//     document.getElementById(this.state.placeholer_id + "_modal"),
		//     {}
		// );
		// register_modal.show();
		// try{

		// hideModal.hide();
		// var hideModalagain = bootstrap.Modal.getInstance(
		//     document.getElementById(
		//         this.state.placeholer_id +
		//             "_modal_view_reason_to_tennat_sub_comp"
		//     ),
		//     {}
		// );
		// register_modal.show();
		// hideModalagain.hide();
		// }catch(e){

		// }

	}
}

class CreateLeaseComponent extends AppComponent {
	constructor(application_id, usr_role) {
		super();
		this.state.usr_role = usr_role;
		this.state.application_id = application_id;
	}

	async uponReady() {
		await super.uponReady();
	}

	//render
	// render(el_id, data) {
	//     this.state.placeholer_id = el_id;
	//     let html = `
	//     <div class="form_wrapper add_modal " style="width:450px;">

	//         <div class="row">
	//             <div class="text-center mt-4 h3">
	//                 Lease Complete
	//             </div>

	//             <div class=" text-center  ">
	//                 A copy of the lease will be sent to uesr <span id="user_id"></span> . The user will be notified to sign the lease to complete the process.
	//             </div>

	//         </div>
	//         <div class="d-flex justify-content-around">
	//             <div class="col-lg-4 mt-3">
	//                 <button type="button" id="close_btn" class="close_create_lease_modal btn btn-custom-dark"> Close </button>

	//             </div>
	//             <div class="col-lg-4 mt-3">
	//                 <button type="button" id="notify_tenant" class="close_create_lease_modal btn btn-primary"> Notify Tenant </button>

	//             </div>
	//         </div>
	//         </div>

	//     <div class="modal_bg_overlay close_create_lease_modal"></div>

	//     `;
	//     window[el_id].innerHTML = html;

	//     this.hookup();
	// }

	render(el_id, data) {
		
		this.state.placeholer_id = el_id;
		let html = `
        <section class="modal fade" id="${el_id}_modal">
            <div class=" modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body px-5">
                        <div class="row">
                            <div class="text-center mt-4 dm_sans_700 font_25">
                                Lease Complete!
                            </div>
            
                            <div class=" text-center text-dark dm_sans_500 font_18 mt-3 ">
                                A copy of the lease will be sent to uesr ${data.user_id} . The user will be notified to sign the lease to complete the process.
                            </div>
            
                        </div>
                        <div class="row my-3">
                            <div class="col-md-12">
                                <div class="d-flex justify-content-center">
                                    <button type="button" id="notify_tenant" class="btn btn-primary px-5 rounded-pill dm_sans_700"> Notify Tenant </button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
        `;
		window[el_id].innerHTML = html;

		this.hookup();
	}

	hookup() {
		this.on("#close_btn", "click", this.onClickCancel);
		this.on("#notify_tenant", "click", this.onClickConfirm);
	}
	show(data) {
		// console.log(data);
		// user_id.innerText = data.user_id;
		this.state.data = data;
		//debugger;
		// open_modal(window.admin_add_porject_modal)
		var modalapp = new bootstrap.Modal(
			document.getElementById(this.state.placeholer_id + "_modal"),
			{}
		);
		modalapp.show();
	}

	hide() {
		// close_modal(window.admin_add_porject_modal);
		var hideModal = bootstrap.Modal.getInstance(
			document.getElementById(this.state.placeholer_id + "_modal"),
			{}
		);
		hideModal.hide();
	}

	onClickCancel() {
		this.hide();
	}

	async onClickConfirm() {
		this.hide();
		//fetch
		console.log("from conclick confirm");
		let url = "";
		switch (this.state.usr_role) {
			case USR_ROLE__LA1:
				url = "/api/leasing-admin-one/application/create-lease-init";
				break;
			/* NOT APPLICABLE
			case USR_ROLE__LA2:
				url = "/api/leasing-admin-two/application/update-lease-init";
				break;

			case USR_ROLE__LM:
				url = "/api/leasing-manager/application/update-lease-init";
				break;
			*/
		}

		let hc = app.locateService(HttpClient);
		let payload = {
			application_id: this.state.application_id,
			...this.state.data,
		};



		console.log("from component");
		console.log(payload);
		// return ;
		let resp = await hc.fetch("POST", url, {
			body: JSON.stringify(payload),
		});

		let data = resp.output;
		if (data.error) {
			app.alert(app.extractGracefulError(data.error));
			return;
		}
		console.log(data);
		// return;

		if (data === null || data.error != (null || undefined)) {
			//toast...
			app.alert("Something went wrong");
			return;
		}
		//alert("success");

		history.back();
		return;
		// debugger;
		if (this.state.usr_role == USR_ROLE__LA1) {
			window.location =
				"/leasing-admin-one/applications-complete?property_id=" +
				this.state.data.property_id;
		} else if (this.state.usr_role == USR_ROLE__LA2) {
			window.location =
				"/leasing-admin-two/applications-complete?property_id=" +
				this.state.data.property_id;
		} else if (this.state.usr_role == USR_ROLE__LM) {
			window.location =
				"/leasing-manager/applications-complete?property_id=" +
				this.state.data.property_id;
		}
	}
}

class UploadLeaseComponent extends AppComponent {
	constructor(property_id, usr_role) {
		super();
		this.state.usr_role = usr_role;
		this.state.property_id = property_id;
		this.hc = app.locateService(HttpClient);
	}

	async uponReady() {
		await super.uponReady();

		

		console.log(successfully_added_admin_project_modal_toggler);
	}

	render(el_id, data) {
		this.state.placeholer_id = el_id;
		let html = `
            <section class="modal fade" id="${el_id}_modal">
                <div class=" modal-dialog modal-dialog-centered"  style="width:95%; max-width:780px;">
                    <div class="modal-content">
                        <div class="modal-body">
                            <div class="row my-3">
                                <div class="col-md-12 px-2 px-md-5">
                                    <div class="text-center mb-3 dm_sans_700 font_30">
                                        Upload Documentation  
                                    </div>
                                    <div class=" container">
                                        <div class="col-12 col-lg-12 my-3  ">
                                            <div class="text-center h5 text-secodary">
                                                Please upload a copy of the following documentation:
                                            </div>
                                        </div>
                    
                                        <div class="row mb-3 "> 


												<div class="cardNotifications mt-0 pb-3">

													<div class="card-body xpy-2">
														<div class="row align-items-center">
															<div class="col-sm-6">
																<div class="row">
																	<div class="form-check">
																		<input class="form-check-input-la1" required type="checkbox"
																			id="lease_doc_training_declaration_tick"  disabled>
																		<label class="form-check-label"
																			for="lease_doc_training_declaration_tick">
																			Training declaration
																		</label>
																	</div>
																</div>
															</div>
															<div class="col-sm-6  d-flex align-items-center">
																<div class="container xpb-3">
				
																	<div
																		class="input-group custom-file-button d-flex align-items-center justify-content-end ">
																		<input type="file" required-pending class="form-control upload-input"
																			id="lease_doc_training_declaration"
																			name="lease_doc_training_declaration" hidden>
																		<label class="" for="lease_doc_training_declaration" style="height:45px; ">
																			<svg width="200" height="45" viewBox="0 0 200 45"
																				fill="none" xmlns="http://www.w3.org/2000/svg">
																				<rect width="200" height="45" rx="22.5"
																					fill="#231F20" />
																				<path
																					d="M85.3877 15.2031H88.0156V23.6582C88.0156 24.6426 87.8047 25.4717 87.3828 26.1455C86.9668 26.8193 86.3896 27.3262 85.6514 27.666C84.9189 28.0059 84.0752 28.1758 83.1201 28.1758C82.165 28.1758 81.3154 28.0059 80.5713 27.666C79.833 27.3262 79.2529 26.8193 78.8311 26.1455C78.415 25.4717 78.207 24.6426 78.207 23.6582V15.2031H80.8438V23.6582C80.8438 24.2324 80.9346 24.7012 81.1162 25.0645C81.2979 25.4277 81.5586 25.6943 81.8984 25.8643C82.2441 26.0342 82.6514 26.1191 83.1201 26.1191C83.6006 26.1191 84.0078 26.0342 84.3418 25.8643C84.6816 25.6943 84.9395 25.4277 85.1152 25.0645C85.2969 24.7012 85.3877 24.2324 85.3877 23.6582V15.2031ZM95.1699 23.4385H91.9092V21.3818H95.1699C95.6738 21.3818 96.084 21.2998 96.4004 21.1357C96.7168 20.9658 96.9482 20.7314 97.0947 20.4326C97.2412 20.1338 97.3145 19.7969 97.3145 19.4219C97.3145 19.041 97.2412 18.6865 97.0947 18.3584C96.9482 18.0303 96.7168 17.7666 96.4004 17.5674C96.084 17.3682 95.6738 17.2686 95.1699 17.2686H92.8232V28H90.1865V15.2031H95.1699C96.1719 15.2031 97.0303 15.3848 97.7451 15.748C98.4658 16.1055 99.0166 16.6006 99.3975 17.2334C99.7783 17.8662 99.9688 18.5898 99.9688 19.4043C99.9688 20.2305 99.7783 20.9453 99.3975 21.5488C99.0166 22.1523 98.4658 22.6182 97.7451 22.9463C97.0303 23.2744 96.1719 23.4385 95.1699 23.4385ZM110.015 25.9434V28H103.572V25.9434H110.015ZM104.425 15.2031V28H101.788V15.2031H104.425ZM121.458 21.3027V21.9092C121.458 22.8818 121.326 23.7549 121.062 24.5283C120.799 25.3018 120.427 25.9609 119.946 26.5059C119.466 27.0449 118.892 27.458 118.224 27.7451C117.562 28.0322 116.826 28.1758 116.018 28.1758C115.215 28.1758 114.479 28.0322 113.812 27.7451C113.149 27.458 112.575 27.0449 112.089 26.5059C111.603 25.9609 111.225 25.3018 110.955 24.5283C110.691 23.7549 110.56 22.8818 110.56 21.9092V21.3027C110.56 20.3242 110.691 19.4512 110.955 18.6836C111.219 17.9102 111.591 17.251 112.071 16.7061C112.558 16.1611 113.132 15.7451 113.794 15.458C114.462 15.1709 115.197 15.0273 116 15.0273C116.809 15.0273 117.544 15.1709 118.206 15.458C118.874 15.7451 119.448 16.1611 119.929 16.7061C120.415 17.251 120.79 17.9102 121.054 18.6836C121.323 19.4512 121.458 20.3242 121.458 21.3027ZM118.795 21.9092V21.2852C118.795 20.6055 118.733 20.0078 118.61 19.4922C118.487 18.9766 118.306 18.543 118.065 18.1914C117.825 17.8398 117.532 17.5762 117.187 17.4004C116.841 17.2188 116.445 17.1279 116 17.1279C115.555 17.1279 115.159 17.2188 114.813 17.4004C114.474 17.5762 114.184 17.8398 113.943 18.1914C113.709 18.543 113.53 18.9766 113.407 19.4922C113.284 20.0078 113.223 20.6055 113.223 21.2852V21.9092C113.223 22.583 113.284 23.1807 113.407 23.7021C113.53 24.2178 113.712 24.6543 113.952 25.0117C114.192 25.3633 114.485 25.6299 114.831 25.8115C115.177 25.9932 115.572 26.084 116.018 26.084C116.463 26.084 116.858 25.9932 117.204 25.8115C117.55 25.6299 117.84 25.3633 118.074 25.0117C118.309 24.6543 118.487 24.2178 118.61 23.7021C118.733 23.1807 118.795 22.583 118.795 21.9092ZM128.366 17.3916L124.886 28H122.082L126.837 15.2031H128.621L128.366 17.3916ZM131.258 28L127.769 17.3916L127.487 15.2031H129.289L134.07 28H131.258ZM131.1 23.2363V25.3018H124.341V23.2363H131.1ZM139.186 28H136.399L136.417 25.9434H139.186C139.877 25.9434 140.46 25.7881 140.935 25.4775C141.409 25.1611 141.767 24.7012 142.007 24.0977C142.253 23.4941 142.376 22.7646 142.376 21.9092V21.2852C142.376 20.6289 142.306 20.0518 142.165 19.5537C142.03 19.0557 141.828 18.6367 141.559 18.2969C141.289 17.957 140.958 17.7021 140.565 17.5322C140.173 17.3564 139.722 17.2686 139.212 17.2686H136.347V15.2031H139.212C140.067 15.2031 140.85 15.3496 141.559 15.6426C142.273 15.9297 142.892 16.3428 143.413 16.8818C143.935 17.4209 144.336 18.0654 144.617 18.8154C144.904 19.5596 145.048 20.3887 145.048 21.3027V21.9092C145.048 22.8174 144.904 23.6465 144.617 24.3965C144.336 25.1465 143.935 25.791 143.413 26.3301C142.897 26.8633 142.279 27.2764 141.559 27.5693C140.844 27.8564 140.053 28 139.186 28ZM137.894 15.2031V28H135.257V15.2031H137.894Z"
																					fill="#FBFBFB" />
																				<path
																					d="M60.875 24.1075V27.6C60.875 27.9117 60.983 28.1727 61.199 28.3832C61.4143 28.5944 61.6812 28.7 62 28.7C62.3188 28.7 62.5861 28.5944 62.8021 28.3832C63.0174 28.1727 63.125 27.9117 63.125 27.6V24.1075L64.1375 25.0975C64.25 25.2075 64.3767 25.29 64.5177 25.345C64.658 25.4 64.7986 25.4227 64.9396 25.4132C65.0799 25.4044 65.2156 25.3725 65.3469 25.3175C65.4781 25.2625 65.6 25.18 65.7125 25.07C65.9188 24.85 66.0267 24.5933 66.0365 24.3C66.0455 24.0067 65.9375 23.75 65.7125 23.53L62.7875 20.67C62.675 20.56 62.5531 20.4819 62.4219 20.4357C62.2906 20.3902 62.15 20.3675 62 20.3675C61.85 20.3675 61.7094 20.3902 61.5781 20.4357C61.4469 20.4819 61.325 20.56 61.2125 20.67L58.2875 23.53C58.0625 23.75 57.9549 24.0067 57.9646 24.3C57.9736 24.5933 58.0906 24.85 58.3156 25.07C58.5406 25.2717 58.8031 25.3773 59.1031 25.3868C59.4031 25.3956 59.6656 25.29 59.8906 25.07L60.875 24.1075ZM55.25 32C54.6312 32 54.1017 31.7848 53.6615 31.3543C53.2205 30.9231 53 30.405 53 29.8V12.2C53 11.595 53.2205 11.0769 53.6615 10.6457C54.1017 10.2152 54.6312 10 55.25 10H63.3219C63.6219 10 63.908 10.055 64.1803 10.165C64.4517 10.275 64.6906 10.4308 64.8969 10.6325L70.3531 15.9675C70.5594 16.1692 70.7188 16.4027 70.8313 16.6682C70.9438 16.9344 71 17.2142 71 17.5075V29.8C71 30.405 70.7799 30.9231 70.3396 31.3543C69.8986 31.7848 69.3687 32 68.75 32H55.25ZM63.125 16.6V12.2H55.25V29.8H68.75V17.7H64.25C63.9312 17.7 63.6643 17.5944 63.449 17.3832C63.233 17.1727 63.125 16.9117 63.125 16.6ZM55.25 12.2V17.7V12.2V29.8V12.2Z"
																					fill="#FBFBFB" />
																			</svg>
																		</label>
																	</div>
				
																</div>
															</div>
														</div>
													</div>
												</div>

												<div class="cardNotifications mt-0 pb-3">

													<div class="card-body xpy-2">
														<div class="row align-items-center">
															<div class="col-sm-6">
																<div class="row">
																	<div class="form-check">
																		<input class="form-check-input-la1" required type="checkbox"
																			id="lease_doc_unit_allocation_form_tick"  disabled>
																		<label class="form-check-label"
																			for="lease_doc_unit_allocation_form_tick">
																			Unit allocation form
																		</label>
																	</div>
																</div>
															</div>
															<div class="col-sm-6  d-flex align-items-center">
																<div class="container xpb-3">

																	<div
																		class="input-group custom-file-button d-flex align-items-center justify-content-end ">
																		<input type="file" required-pending class="form-control upload-input"
																			id="lease_doc_unit_allocation_form"
																			name="lease_doc_unit_allocation_form" hidden>
																		<label class="" for="lease_doc_unit_allocation_form"  style="height:45px; ">
																			<svg width="200" height="45" viewBox="0 0 200 45"
																				fill="none" xmlns="http://www.w3.org/2000/svg">
																				<rect width="200" height="45" rx="22.5"
																					fill="#231F20" />
																				<path
																					d="M85.3877 15.2031H88.0156V23.6582C88.0156 24.6426 87.8047 25.4717 87.3828 26.1455C86.9668 26.8193 86.3896 27.3262 85.6514 27.666C84.9189 28.0059 84.0752 28.1758 83.1201 28.1758C82.165 28.1758 81.3154 28.0059 80.5713 27.666C79.833 27.3262 79.2529 26.8193 78.8311 26.1455C78.415 25.4717 78.207 24.6426 78.207 23.6582V15.2031H80.8438V23.6582C80.8438 24.2324 80.9346 24.7012 81.1162 25.0645C81.2979 25.4277 81.5586 25.6943 81.8984 25.8643C82.2441 26.0342 82.6514 26.1191 83.1201 26.1191C83.6006 26.1191 84.0078 26.0342 84.3418 25.8643C84.6816 25.6943 84.9395 25.4277 85.1152 25.0645C85.2969 24.7012 85.3877 24.2324 85.3877 23.6582V15.2031ZM95.1699 23.4385H91.9092V21.3818H95.1699C95.6738 21.3818 96.084 21.2998 96.4004 21.1357C96.7168 20.9658 96.9482 20.7314 97.0947 20.4326C97.2412 20.1338 97.3145 19.7969 97.3145 19.4219C97.3145 19.041 97.2412 18.6865 97.0947 18.3584C96.9482 18.0303 96.7168 17.7666 96.4004 17.5674C96.084 17.3682 95.6738 17.2686 95.1699 17.2686H92.8232V28H90.1865V15.2031H95.1699C96.1719 15.2031 97.0303 15.3848 97.7451 15.748C98.4658 16.1055 99.0166 16.6006 99.3975 17.2334C99.7783 17.8662 99.9688 18.5898 99.9688 19.4043C99.9688 20.2305 99.7783 20.9453 99.3975 21.5488C99.0166 22.1523 98.4658 22.6182 97.7451 22.9463C97.0303 23.2744 96.1719 23.4385 95.1699 23.4385ZM110.015 25.9434V28H103.572V25.9434H110.015ZM104.425 15.2031V28H101.788V15.2031H104.425ZM121.458 21.3027V21.9092C121.458 22.8818 121.326 23.7549 121.062 24.5283C120.799 25.3018 120.427 25.9609 119.946 26.5059C119.466 27.0449 118.892 27.458 118.224 27.7451C117.562 28.0322 116.826 28.1758 116.018 28.1758C115.215 28.1758 114.479 28.0322 113.812 27.7451C113.149 27.458 112.575 27.0449 112.089 26.5059C111.603 25.9609 111.225 25.3018 110.955 24.5283C110.691 23.7549 110.56 22.8818 110.56 21.9092V21.3027C110.56 20.3242 110.691 19.4512 110.955 18.6836C111.219 17.9102 111.591 17.251 112.071 16.7061C112.558 16.1611 113.132 15.7451 113.794 15.458C114.462 15.1709 115.197 15.0273 116 15.0273C116.809 15.0273 117.544 15.1709 118.206 15.458C118.874 15.7451 119.448 16.1611 119.929 16.7061C120.415 17.251 120.79 17.9102 121.054 18.6836C121.323 19.4512 121.458 20.3242 121.458 21.3027ZM118.795 21.9092V21.2852C118.795 20.6055 118.733 20.0078 118.61 19.4922C118.487 18.9766 118.306 18.543 118.065 18.1914C117.825 17.8398 117.532 17.5762 117.187 17.4004C116.841 17.2188 116.445 17.1279 116 17.1279C115.555 17.1279 115.159 17.2188 114.813 17.4004C114.474 17.5762 114.184 17.8398 113.943 18.1914C113.709 18.543 113.53 18.9766 113.407 19.4922C113.284 20.0078 113.223 20.6055 113.223 21.2852V21.9092C113.223 22.583 113.284 23.1807 113.407 23.7021C113.53 24.2178 113.712 24.6543 113.952 25.0117C114.192 25.3633 114.485 25.6299 114.831 25.8115C115.177 25.9932 115.572 26.084 116.018 26.084C116.463 26.084 116.858 25.9932 117.204 25.8115C117.55 25.6299 117.84 25.3633 118.074 25.0117C118.309 24.6543 118.487 24.2178 118.61 23.7021C118.733 23.1807 118.795 22.583 118.795 21.9092ZM128.366 17.3916L124.886 28H122.082L126.837 15.2031H128.621L128.366 17.3916ZM131.258 28L127.769 17.3916L127.487 15.2031H129.289L134.07 28H131.258ZM131.1 23.2363V25.3018H124.341V23.2363H131.1ZM139.186 28H136.399L136.417 25.9434H139.186C139.877 25.9434 140.46 25.7881 140.935 25.4775C141.409 25.1611 141.767 24.7012 142.007 24.0977C142.253 23.4941 142.376 22.7646 142.376 21.9092V21.2852C142.376 20.6289 142.306 20.0518 142.165 19.5537C142.03 19.0557 141.828 18.6367 141.559 18.2969C141.289 17.957 140.958 17.7021 140.565 17.5322C140.173 17.3564 139.722 17.2686 139.212 17.2686H136.347V15.2031H139.212C140.067 15.2031 140.85 15.3496 141.559 15.6426C142.273 15.9297 142.892 16.3428 143.413 16.8818C143.935 17.4209 144.336 18.0654 144.617 18.8154C144.904 19.5596 145.048 20.3887 145.048 21.3027V21.9092C145.048 22.8174 144.904 23.6465 144.617 24.3965C144.336 25.1465 143.935 25.791 143.413 26.3301C142.897 26.8633 142.279 27.2764 141.559 27.5693C140.844 27.8564 140.053 28 139.186 28ZM137.894 15.2031V28H135.257V15.2031H137.894Z"
																					fill="#FBFBFB" />
																				<path
																					d="M60.875 24.1075V27.6C60.875 27.9117 60.983 28.1727 61.199 28.3832C61.4143 28.5944 61.6812 28.7 62 28.7C62.3188 28.7 62.5861 28.5944 62.8021 28.3832C63.0174 28.1727 63.125 27.9117 63.125 27.6V24.1075L64.1375 25.0975C64.25 25.2075 64.3767 25.29 64.5177 25.345C64.658 25.4 64.7986 25.4227 64.9396 25.4132C65.0799 25.4044 65.2156 25.3725 65.3469 25.3175C65.4781 25.2625 65.6 25.18 65.7125 25.07C65.9188 24.85 66.0267 24.5933 66.0365 24.3C66.0455 24.0067 65.9375 23.75 65.7125 23.53L62.7875 20.67C62.675 20.56 62.5531 20.4819 62.4219 20.4357C62.2906 20.3902 62.15 20.3675 62 20.3675C61.85 20.3675 61.7094 20.3902 61.5781 20.4357C61.4469 20.4819 61.325 20.56 61.2125 20.67L58.2875 23.53C58.0625 23.75 57.9549 24.0067 57.9646 24.3C57.9736 24.5933 58.0906 24.85 58.3156 25.07C58.5406 25.2717 58.8031 25.3773 59.1031 25.3868C59.4031 25.3956 59.6656 25.29 59.8906 25.07L60.875 24.1075ZM55.25 32C54.6312 32 54.1017 31.7848 53.6615 31.3543C53.2205 30.9231 53 30.405 53 29.8V12.2C53 11.595 53.2205 11.0769 53.6615 10.6457C54.1017 10.2152 54.6312 10 55.25 10H63.3219C63.6219 10 63.908 10.055 64.1803 10.165C64.4517 10.275 64.6906 10.4308 64.8969 10.6325L70.3531 15.9675C70.5594 16.1692 70.7188 16.4027 70.8313 16.6682C70.9438 16.9344 71 17.2142 71 17.5075V29.8C71 30.405 70.7799 30.9231 70.3396 31.3543C69.8986 31.7848 69.3687 32 68.75 32H55.25ZM63.125 16.6V12.2H55.25V29.8H68.75V17.7H64.25C63.9312 17.7 63.6643 17.5944 63.449 17.3832C63.233 17.1727 63.125 16.9117 63.125 16.6ZM55.25 12.2V17.7V12.2V29.8V12.2Z"
																					fill="#FBFBFB" />
																			</svg>
																		</label>
																	</div>

																</div>
															</div>
														</div>
													</div>
												</div>




												<div class="cardNotifications mt-0 pb-3">

													<div class="card-body xpy-2">
														<div class="row align-items-center">
															<div class="col-sm-6">
																<div class="row">
																	<div class="form-check">
																		<input class="form-check-input-la1" required type="checkbox"
																			id="lease_doc_entry_snaglist_tick"  disabled>
																		<label class="form-check-label"
																			for="lease_doc_entry_snaglist_tick">
																			Entry Snaglist
																		</label>
																	</div>
																</div>
															</div>
															<div class="col-sm-6  d-flex align-items-center">
																<div class="container xpb-3">

																	<div
																		class="input-group custom-file-button d-flex align-items-center justify-content-end ">
																		<input type="file" required-pending class="form-control upload-input"
																			id="lease_doc_entry_snaglist"
																			name="lease_doc_entry_snaglist" hidden>
																		<label class="" for="lease_doc_entry_snaglist"  style="height:45px; ">
																			<svg width="200" height="45" viewBox="0 0 200 45"
																				fill="none" xmlns="http://www.w3.org/2000/svg">
																				<rect width="200" height="45" rx="22.5"
																					fill="#231F20" />
																				<path
																					d="M85.3877 15.2031H88.0156V23.6582C88.0156 24.6426 87.8047 25.4717 87.3828 26.1455C86.9668 26.8193 86.3896 27.3262 85.6514 27.666C84.9189 28.0059 84.0752 28.1758 83.1201 28.1758C82.165 28.1758 81.3154 28.0059 80.5713 27.666C79.833 27.3262 79.2529 26.8193 78.8311 26.1455C78.415 25.4717 78.207 24.6426 78.207 23.6582V15.2031H80.8438V23.6582C80.8438 24.2324 80.9346 24.7012 81.1162 25.0645C81.2979 25.4277 81.5586 25.6943 81.8984 25.8643C82.2441 26.0342 82.6514 26.1191 83.1201 26.1191C83.6006 26.1191 84.0078 26.0342 84.3418 25.8643C84.6816 25.6943 84.9395 25.4277 85.1152 25.0645C85.2969 24.7012 85.3877 24.2324 85.3877 23.6582V15.2031ZM95.1699 23.4385H91.9092V21.3818H95.1699C95.6738 21.3818 96.084 21.2998 96.4004 21.1357C96.7168 20.9658 96.9482 20.7314 97.0947 20.4326C97.2412 20.1338 97.3145 19.7969 97.3145 19.4219C97.3145 19.041 97.2412 18.6865 97.0947 18.3584C96.9482 18.0303 96.7168 17.7666 96.4004 17.5674C96.084 17.3682 95.6738 17.2686 95.1699 17.2686H92.8232V28H90.1865V15.2031H95.1699C96.1719 15.2031 97.0303 15.3848 97.7451 15.748C98.4658 16.1055 99.0166 16.6006 99.3975 17.2334C99.7783 17.8662 99.9688 18.5898 99.9688 19.4043C99.9688 20.2305 99.7783 20.9453 99.3975 21.5488C99.0166 22.1523 98.4658 22.6182 97.7451 22.9463C97.0303 23.2744 96.1719 23.4385 95.1699 23.4385ZM110.015 25.9434V28H103.572V25.9434H110.015ZM104.425 15.2031V28H101.788V15.2031H104.425ZM121.458 21.3027V21.9092C121.458 22.8818 121.326 23.7549 121.062 24.5283C120.799 25.3018 120.427 25.9609 119.946 26.5059C119.466 27.0449 118.892 27.458 118.224 27.7451C117.562 28.0322 116.826 28.1758 116.018 28.1758C115.215 28.1758 114.479 28.0322 113.812 27.7451C113.149 27.458 112.575 27.0449 112.089 26.5059C111.603 25.9609 111.225 25.3018 110.955 24.5283C110.691 23.7549 110.56 22.8818 110.56 21.9092V21.3027C110.56 20.3242 110.691 19.4512 110.955 18.6836C111.219 17.9102 111.591 17.251 112.071 16.7061C112.558 16.1611 113.132 15.7451 113.794 15.458C114.462 15.1709 115.197 15.0273 116 15.0273C116.809 15.0273 117.544 15.1709 118.206 15.458C118.874 15.7451 119.448 16.1611 119.929 16.7061C120.415 17.251 120.79 17.9102 121.054 18.6836C121.323 19.4512 121.458 20.3242 121.458 21.3027ZM118.795 21.9092V21.2852C118.795 20.6055 118.733 20.0078 118.61 19.4922C118.487 18.9766 118.306 18.543 118.065 18.1914C117.825 17.8398 117.532 17.5762 117.187 17.4004C116.841 17.2188 116.445 17.1279 116 17.1279C115.555 17.1279 115.159 17.2188 114.813 17.4004C114.474 17.5762 114.184 17.8398 113.943 18.1914C113.709 18.543 113.53 18.9766 113.407 19.4922C113.284 20.0078 113.223 20.6055 113.223 21.2852V21.9092C113.223 22.583 113.284 23.1807 113.407 23.7021C113.53 24.2178 113.712 24.6543 113.952 25.0117C114.192 25.3633 114.485 25.6299 114.831 25.8115C115.177 25.9932 115.572 26.084 116.018 26.084C116.463 26.084 116.858 25.9932 117.204 25.8115C117.55 25.6299 117.84 25.3633 118.074 25.0117C118.309 24.6543 118.487 24.2178 118.61 23.7021C118.733 23.1807 118.795 22.583 118.795 21.9092ZM128.366 17.3916L124.886 28H122.082L126.837 15.2031H128.621L128.366 17.3916ZM131.258 28L127.769 17.3916L127.487 15.2031H129.289L134.07 28H131.258ZM131.1 23.2363V25.3018H124.341V23.2363H131.1ZM139.186 28H136.399L136.417 25.9434H139.186C139.877 25.9434 140.46 25.7881 140.935 25.4775C141.409 25.1611 141.767 24.7012 142.007 24.0977C142.253 23.4941 142.376 22.7646 142.376 21.9092V21.2852C142.376 20.6289 142.306 20.0518 142.165 19.5537C142.03 19.0557 141.828 18.6367 141.559 18.2969C141.289 17.957 140.958 17.7021 140.565 17.5322C140.173 17.3564 139.722 17.2686 139.212 17.2686H136.347V15.2031H139.212C140.067 15.2031 140.85 15.3496 141.559 15.6426C142.273 15.9297 142.892 16.3428 143.413 16.8818C143.935 17.4209 144.336 18.0654 144.617 18.8154C144.904 19.5596 145.048 20.3887 145.048 21.3027V21.9092C145.048 22.8174 144.904 23.6465 144.617 24.3965C144.336 25.1465 143.935 25.791 143.413 26.3301C142.897 26.8633 142.279 27.2764 141.559 27.5693C140.844 27.8564 140.053 28 139.186 28ZM137.894 15.2031V28H135.257V15.2031H137.894Z"
																					fill="#FBFBFB" />
																				<path
																					d="M60.875 24.1075V27.6C60.875 27.9117 60.983 28.1727 61.199 28.3832C61.4143 28.5944 61.6812 28.7 62 28.7C62.3188 28.7 62.5861 28.5944 62.8021 28.3832C63.0174 28.1727 63.125 27.9117 63.125 27.6V24.1075L64.1375 25.0975C64.25 25.2075 64.3767 25.29 64.5177 25.345C64.658 25.4 64.7986 25.4227 64.9396 25.4132C65.0799 25.4044 65.2156 25.3725 65.3469 25.3175C65.4781 25.2625 65.6 25.18 65.7125 25.07C65.9188 24.85 66.0267 24.5933 66.0365 24.3C66.0455 24.0067 65.9375 23.75 65.7125 23.53L62.7875 20.67C62.675 20.56 62.5531 20.4819 62.4219 20.4357C62.2906 20.3902 62.15 20.3675 62 20.3675C61.85 20.3675 61.7094 20.3902 61.5781 20.4357C61.4469 20.4819 61.325 20.56 61.2125 20.67L58.2875 23.53C58.0625 23.75 57.9549 24.0067 57.9646 24.3C57.9736 24.5933 58.0906 24.85 58.3156 25.07C58.5406 25.2717 58.8031 25.3773 59.1031 25.3868C59.4031 25.3956 59.6656 25.29 59.8906 25.07L60.875 24.1075ZM55.25 32C54.6312 32 54.1017 31.7848 53.6615 31.3543C53.2205 30.9231 53 30.405 53 29.8V12.2C53 11.595 53.2205 11.0769 53.6615 10.6457C54.1017 10.2152 54.6312 10 55.25 10H63.3219C63.6219 10 63.908 10.055 64.1803 10.165C64.4517 10.275 64.6906 10.4308 64.8969 10.6325L70.3531 15.9675C70.5594 16.1692 70.7188 16.4027 70.8313 16.6682C70.9438 16.9344 71 17.2142 71 17.5075V29.8C71 30.405 70.7799 30.9231 70.3396 31.3543C69.8986 31.7848 69.3687 32 68.75 32H55.25ZM63.125 16.6V12.2H55.25V29.8H68.75V17.7H64.25C63.9312 17.7 63.6643 17.5944 63.449 17.3832C63.233 17.1727 63.125 16.9117 63.125 16.6ZM55.25 12.2V17.7V12.2V29.8V12.2Z"
																					fill="#FBFBFB" />
																			</svg>
																		</label>
																	</div>

																</div>
															</div>
														</div>
													</div>
												</div>
												

												<div class="cardNotifications mt-0 pb-3 cond_app_spo_filter d-none">

													<div class="card-body xpy-2">
														<div class="row align-items-center">
															<div class="col-sm-6">
																<div class="row">
																	<div class="form-check">
																		<input class="form-check-input-la1" required type="checkbox"
																			id="lease_doc_physically_signed_lease_agreement_tick"  disabled>
																		<label class="form-check-label"
																			for="lease_doc_physically_signed_lease_agreement_tick">
																			Signed lease agreement
																		</label>
																	</div>
																</div>
															</div>
															<div class="col-sm-6  d-flex align-items-center">
																<div class="container xpb-3">

																	<div
																		class="input-group custom-file-button d-flex align-items-center justify-content-end ">
																		<input type="file" required-pending class="form-control upload-input"
																			id="lease_doc_physically_signed_lease_agreement"
																			name="lease_doc_physically_signed_lease_agreement" hidden>
																		<label class="" for="lease_doc_physically_signed_lease_agreement" style="height:45px; ">
																			<svg width="200" height="45" viewBox="0 0 200 45"
																				fill="none" xmlns="http://www.w3.org/2000/svg">
																				<rect width="200" height="45" rx="22.5"
																					fill="#231F20" />
																				<path
																					d="M85.3877 15.2031H88.0156V23.6582C88.0156 24.6426 87.8047 25.4717 87.3828 26.1455C86.9668 26.8193 86.3896 27.3262 85.6514 27.666C84.9189 28.0059 84.0752 28.1758 83.1201 28.1758C82.165 28.1758 81.3154 28.0059 80.5713 27.666C79.833 27.3262 79.2529 26.8193 78.8311 26.1455C78.415 25.4717 78.207 24.6426 78.207 23.6582V15.2031H80.8438V23.6582C80.8438 24.2324 80.9346 24.7012 81.1162 25.0645C81.2979 25.4277 81.5586 25.6943 81.8984 25.8643C82.2441 26.0342 82.6514 26.1191 83.1201 26.1191C83.6006 26.1191 84.0078 26.0342 84.3418 25.8643C84.6816 25.6943 84.9395 25.4277 85.1152 25.0645C85.2969 24.7012 85.3877 24.2324 85.3877 23.6582V15.2031ZM95.1699 23.4385H91.9092V21.3818H95.1699C95.6738 21.3818 96.084 21.2998 96.4004 21.1357C96.7168 20.9658 96.9482 20.7314 97.0947 20.4326C97.2412 20.1338 97.3145 19.7969 97.3145 19.4219C97.3145 19.041 97.2412 18.6865 97.0947 18.3584C96.9482 18.0303 96.7168 17.7666 96.4004 17.5674C96.084 17.3682 95.6738 17.2686 95.1699 17.2686H92.8232V28H90.1865V15.2031H95.1699C96.1719 15.2031 97.0303 15.3848 97.7451 15.748C98.4658 16.1055 99.0166 16.6006 99.3975 17.2334C99.7783 17.8662 99.9688 18.5898 99.9688 19.4043C99.9688 20.2305 99.7783 20.9453 99.3975 21.5488C99.0166 22.1523 98.4658 22.6182 97.7451 22.9463C97.0303 23.2744 96.1719 23.4385 95.1699 23.4385ZM110.015 25.9434V28H103.572V25.9434H110.015ZM104.425 15.2031V28H101.788V15.2031H104.425ZM121.458 21.3027V21.9092C121.458 22.8818 121.326 23.7549 121.062 24.5283C120.799 25.3018 120.427 25.9609 119.946 26.5059C119.466 27.0449 118.892 27.458 118.224 27.7451C117.562 28.0322 116.826 28.1758 116.018 28.1758C115.215 28.1758 114.479 28.0322 113.812 27.7451C113.149 27.458 112.575 27.0449 112.089 26.5059C111.603 25.9609 111.225 25.3018 110.955 24.5283C110.691 23.7549 110.56 22.8818 110.56 21.9092V21.3027C110.56 20.3242 110.691 19.4512 110.955 18.6836C111.219 17.9102 111.591 17.251 112.071 16.7061C112.558 16.1611 113.132 15.7451 113.794 15.458C114.462 15.1709 115.197 15.0273 116 15.0273C116.809 15.0273 117.544 15.1709 118.206 15.458C118.874 15.7451 119.448 16.1611 119.929 16.7061C120.415 17.251 120.79 17.9102 121.054 18.6836C121.323 19.4512 121.458 20.3242 121.458 21.3027ZM118.795 21.9092V21.2852C118.795 20.6055 118.733 20.0078 118.61 19.4922C118.487 18.9766 118.306 18.543 118.065 18.1914C117.825 17.8398 117.532 17.5762 117.187 17.4004C116.841 17.2188 116.445 17.1279 116 17.1279C115.555 17.1279 115.159 17.2188 114.813 17.4004C114.474 17.5762 114.184 17.8398 113.943 18.1914C113.709 18.543 113.53 18.9766 113.407 19.4922C113.284 20.0078 113.223 20.6055 113.223 21.2852V21.9092C113.223 22.583 113.284 23.1807 113.407 23.7021C113.53 24.2178 113.712 24.6543 113.952 25.0117C114.192 25.3633 114.485 25.6299 114.831 25.8115C115.177 25.9932 115.572 26.084 116.018 26.084C116.463 26.084 116.858 25.9932 117.204 25.8115C117.55 25.6299 117.84 25.3633 118.074 25.0117C118.309 24.6543 118.487 24.2178 118.61 23.7021C118.733 23.1807 118.795 22.583 118.795 21.9092ZM128.366 17.3916L124.886 28H122.082L126.837 15.2031H128.621L128.366 17.3916ZM131.258 28L127.769 17.3916L127.487 15.2031H129.289L134.07 28H131.258ZM131.1 23.2363V25.3018H124.341V23.2363H131.1ZM139.186 28H136.399L136.417 25.9434H139.186C139.877 25.9434 140.46 25.7881 140.935 25.4775C141.409 25.1611 141.767 24.7012 142.007 24.0977C142.253 23.4941 142.376 22.7646 142.376 21.9092V21.2852C142.376 20.6289 142.306 20.0518 142.165 19.5537C142.03 19.0557 141.828 18.6367 141.559 18.2969C141.289 17.957 140.958 17.7021 140.565 17.5322C140.173 17.3564 139.722 17.2686 139.212 17.2686H136.347V15.2031H139.212C140.067 15.2031 140.85 15.3496 141.559 15.6426C142.273 15.9297 142.892 16.3428 143.413 16.8818C143.935 17.4209 144.336 18.0654 144.617 18.8154C144.904 19.5596 145.048 20.3887 145.048 21.3027V21.9092C145.048 22.8174 144.904 23.6465 144.617 24.3965C144.336 25.1465 143.935 25.791 143.413 26.3301C142.897 26.8633 142.279 27.2764 141.559 27.5693C140.844 27.8564 140.053 28 139.186 28ZM137.894 15.2031V28H135.257V15.2031H137.894Z"
																					fill="#FBFBFB" />
																				<path
																					d="M60.875 24.1075V27.6C60.875 27.9117 60.983 28.1727 61.199 28.3832C61.4143 28.5944 61.6812 28.7 62 28.7C62.3188 28.7 62.5861 28.5944 62.8021 28.3832C63.0174 28.1727 63.125 27.9117 63.125 27.6V24.1075L64.1375 25.0975C64.25 25.2075 64.3767 25.29 64.5177 25.345C64.658 25.4 64.7986 25.4227 64.9396 25.4132C65.0799 25.4044 65.2156 25.3725 65.3469 25.3175C65.4781 25.2625 65.6 25.18 65.7125 25.07C65.9188 24.85 66.0267 24.5933 66.0365 24.3C66.0455 24.0067 65.9375 23.75 65.7125 23.53L62.7875 20.67C62.675 20.56 62.5531 20.4819 62.4219 20.4357C62.2906 20.3902 62.15 20.3675 62 20.3675C61.85 20.3675 61.7094 20.3902 61.5781 20.4357C61.4469 20.4819 61.325 20.56 61.2125 20.67L58.2875 23.53C58.0625 23.75 57.9549 24.0067 57.9646 24.3C57.9736 24.5933 58.0906 24.85 58.3156 25.07C58.5406 25.2717 58.8031 25.3773 59.1031 25.3868C59.4031 25.3956 59.6656 25.29 59.8906 25.07L60.875 24.1075ZM55.25 32C54.6312 32 54.1017 31.7848 53.6615 31.3543C53.2205 30.9231 53 30.405 53 29.8V12.2C53 11.595 53.2205 11.0769 53.6615 10.6457C54.1017 10.2152 54.6312 10 55.25 10H63.3219C63.6219 10 63.908 10.055 64.1803 10.165C64.4517 10.275 64.6906 10.4308 64.8969 10.6325L70.3531 15.9675C70.5594 16.1692 70.7188 16.4027 70.8313 16.6682C70.9438 16.9344 71 17.2142 71 17.5075V29.8C71 30.405 70.7799 30.9231 70.3396 31.3543C69.8986 31.7848 69.3687 32 68.75 32H55.25ZM63.125 16.6V12.2H55.25V29.8H68.75V17.7H64.25C63.9312 17.7 63.6643 17.5944 63.449 17.3832C63.233 17.1727 63.125 16.9117 63.125 16.6ZM55.25 12.2V17.7V12.2V29.8V12.2Z"
																					fill="#FBFBFB" />
																			</svg>
																		</label>
																	</div>

																</div>
															</div>
														</div>
													</div>
												</div>

                                        </div> 

										<div class="col-12">
												<div class="xform-check d-flex">
													<input class="xform-check-input" required type="checkbox"
														id="doc_upload_confirmation_tick" >
													<label class="form-check-label "
														for="doc_upload_confirmation_tick">
														I confirm that the above documentation has been uploaded correctly.
													</label>
												</div>
										</div>


                                        <div class="pb-2">
                    
                                            <form class="d-flex flex-wrap align-items-center justify-content-around">
                                                
                    
                                                    <div class="xcol-6 xcol-lg-6 mt-4">
                                                        <button type="button" id="btn_save_upload_documentation" class=" btn btn-custom-dark-invert px-3 mt-1 " style="border-radius:22px; min-width:180px">Save</button>
                                                    </div>
                                                    <div class="xcol-6 xcol-lg-6 mt-4">
                                                        <div class="d-flex justify-content-end align-items-center">
                                                            <button type="button" id="btn_complete_or_submit" class="btn btn-primary px-3 mt-1" style="min-width: 200px;" disabled>Complete</button>
                                                        </div>
                                                    </div> 
                                            </form>
                                        </div>
                    
    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section class="modal fade" id="${el_id}_modal_upload_success_married">
                <div class=" modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-body px-5">
                            <div class="row my-3">
                                <div class="col-md-12">
								<div class="text-center mb-3 dm_sans_700 font_30">
									Lease Agreement Completed!
								</div>
								<div class="text-center mb-3 h5 text-secondary">
									A notification will be sent to user <span id="tenant_id_musuccess2"></span> to notify them that they
									can now view the fully signed lease agreement.
								</div>
                                    <div class="d-flex justify-content-center">
                                        <button id="btn_notify_tenant_post_action" class="btn btn-primary px-5 rounded-5"  xdata-bs-dismiss="modal">NOTIFY TENANT</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section class="modal fade" id="${el_id}_modal_upload_success_individual">
                <div class=" modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-body px-5">
                            <div class="row my-3">
                                <div class="col-md-12">
								<div class="text-center mb-3 dm_sans_700 font_30">
									Documentation Submitted
								</div>
								<div class="text-center mb-3 h5 text-secondary">
									Documentation for user <span id="tenant_id_musuccess"></span> has been successfully submitted.
								</div>
                                    <div class="d-flex justify-content-center">
                                        <button id="btn_close_modal_success" class="btn btn-primary px-5 rounded-5"   xdata-bs-dismiss="modal">CLOSE</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            `;
		window[el_id].innerHTML = html;
		// if(upload_input.image_path!=(null||undefined)){successfully_added_admin_project_modal_toggler.disabled = false}


		var modalapp = new bootstrap.Modal(
			document.getElementById(this.state.placeholer_id + "_modal"),
			{}
		);
		
		let modalSuccessMarried = new bootstrap.Modal(
			document.getElementById(this.state.placeholer_id + "_modal_upload_success_married"),
			{}
		);



		let modalSuccessIndividual = new bootstrap.Modal(
				document.getElementById(this.state.placeholer_id + "_modal_upload_success_individual"),
				{}
		);
		
		this.state.modalapp = modalapp;
		this.state.modalSuccessMarried = modalSuccessMarried;
		this.state.modalSuccessIndividual = modalSuccessIndividual;

		this.hookup();
	}

	

	hookup() {
		this.on("input[type='file']", "change", this.onClickUpload);
		this.on(".close_project_modal", "click", this.onClickCancel);
		

		this.on("#btn_complete_or_submit",'click', this.onClickConfirm.bind(this));

		this.on("#btn_close_modal_success", 'click', ()=>{
			try{

				this.state.modalSuccessMarried.hide();
				this.state.modalSuccessIndividual.hide();

			}catch(e){

			}
		});
		this.on("#btn_notify_tenant_post_action", 'click', this.onClickNotifyTenant.bind(this));
	
		this.on(".custom_file_upload", "click", this.onfile);
		this.on("#btn_save_upload_documentation", "click", this.onSaveClicked.bind(this));
	}
	show(data, onUpdate = ()=>{}) {
		console.log(data);
		this.state.application_id = data.app_id;
		this.state.tenant_id = data.tenant_id;
		this.state.onUpdate = onUpdate;
		// user_id.innerText = data.user_id
		// this.state.data = data;
		//debugger;
		// open_modal(window.admin_add_porject_modal)

		this.state.modalapp.show();
		// var modalappagain = new bootstrap.Modal(document.getElementById(this.state.placeholer_id+"_modal_upload_success"), {});
		// modalappagain.show();
		// open_modal(window.add_project_pri_comp)



		if(sel_filter_app.value == '1'){
			document.querySelectorAll('.cond_app_spo_filter').forEach(e=>{e.classList.add('d-none');});
			btn_complete_or_submit.innerHTML = "SUBMIT";

		}else{
			btn_complete_or_submit.innerHTML = "COMPLETE";

			 if(sel_spo_filter_app.value == '2'){
                    lease_doc_physically_signed_lease_agreement.disabled = false;
                    let label = document.querySelector('label[for="lease_doc_physically_signed_lease_agreement_tick"]');
                    // label.classList.add('text-decoration-line-through');
                    label.style.color = 'black';
					btn_complete_or_submit.disabled = true;

                }else{
                    lease_doc_physically_signed_lease_agreement.disabled = true;
                    let label = document.querySelector('label[for="lease_doc_physically_signed_lease_agreement_tick"]');
                    // label.classList.add('text-decoration-line-through');
                    label.style.color = '#999';
					btn_complete_or_submit.disabled = true;
                }
		}

		const tdata= data.data_json;
		const tickToFilter = [
			'lease_doc_training_declaration_tick',
			'lease_doc_unit_allocation_form_tick',
			'lease_doc_entry_snaglist_tick'
			];

			if(sel_filter_app.value=='2' && sel_spo_filter_app.value=='2'){
				tickToFilter.push('lease_doc_physically_signed_lease_agreement_tick');

			}else{

				window.lease_doc_physically_signed_lease_agreement_tick.checked = false;
				let label = document.querySelector('label[for="lease_doc_physically_signed_lease_agreement_tick"]');
				label.classList.remove('text-decoration-line-through');
				label.style.color = 'black';
			}

		tickToFilter.forEach((tick, index, arr)=>{
			// debugger;
			if(tdata[tick]){
				//enable and check tick checkbox
				window[tick].checked = true;
				// window[tick].disabled = false;


				//disable upload button 

				if(arr.length==4){
					if(index < arr.length - 1){ // 3 2
						//not last one true
						window[tick.replace('_tick', '')].disabled = true;
					}else{
						//last one true
						window[tick.replace('_tick', '')].disabled = false;
						btn_complete_or_submit.disabled = false;
					}
				} else{
					//to re enable if disabled by another filter
					window[tick.replace('_tick', '')].disabled = false;
				}
				

				//dimm the label text
				let label = document.querySelector('label[for="'+tick+'"]');
				label.classList.add('text-decoration-line-through');
				label.style.color = '#999';
			}else{

				window[tick].checked = false;
				// window[tick].disabled = true;
				// if(arr.length==3){
					window[tick.replace('_tick', '')].disabled = false;
				// }
				let label = document.querySelector('label[for="'+tick+'"]');
				label.classList.remove('text-decoration-line-through');
				label.style.color = 'black';
			}

		});

	}

	hide() {
		// close_modal(window.admin_add_porject_modal);
		// close_modal(window.add_project_pri_comp);
		// close_modal(window.add_project_sub_comp);
		// debugger;
		if(this.state.modalapp){
			this.state.modalapp.hide();
			return;
		}
		var hideModal = bootstrap.Modal.getInstance(
			document.getElementById(this.state.placeholer_id + "_modal"),
			{}
		);
		// register_modal.show();
		hideModal.hide();

		var hideModalagain = bootstrap.Modal.getInstance(
			document.getElementById(
				this.state.placeholer_id + "_modal_upload_success"
			),
			{}
		);
		if(!hideModalagain) return;
		// register_modal.show();
		hideModalagain.hide();
	}

	async onSaveClicked(){
		let payload = {
			application_id: this.state.application_id,
			lease_doc_training_declaration_filepath: this.state.lease_doc_training_declaration_filepath,
			lease_doc_training_declaration_tick: this.state.lease_doc_training_declaration_tick,

			//entry_snaglist
			lease_doc_entry_snaglist_filepath: this.state.lease_doc_entry_snaglist_filepath,
			lease_doc_entry_snaglist_tick:this.state.lease_doc_entry_snaglist_tick,


			lease_doc_unit_allocation_form_filepath: this.state.lease_doc_unit_allocation_form_filepath,
			lease_doc_unit_allocation_form_tick:this.state.lease_doc_unit_allocation_form_tick,

			lease_doc_physically_signed_lease_agreement_filepath:this.state.lease_doc_physically_signed_lease_agreement_filepath,
			lease_doc_physically_signed_lease_agreement_tick:this.state.lease_doc_physically_signed_lease_agreement_tick,
		};

		// debugger;

		// if(!doc_upload_confirmation_tick.checked){
		// 	app.alert("Please confirm that documentation has been uploaded correctly");
		// 	return;
		// }
		
		let url = "/api/leasing-admin-one/application/upload-lease-documents";

		// switch (this.state.usr_role) {
		// 	case USR_ROLE__LA1:
		// 		url = "/api/leasing-admin-one/application/upload-leasex";
		// 		break;

		// 	case USR_ROLE__LA2:
		// 		url = "/api/leasing-admin-two/application/update-lease-initx";
		// 		break;

		// 	case USR_ROLE__LM:
		// 		url = "/api/leasing-manager/application/update-lease-initx";
		// 		break;
		// }

		let resp = await this.hc.fetch("POST", url, {
			body: JSON.stringify(payload),
		});

		const data = resp.output;

		if(!data){
			return;
		}
		if(data.error){
			app.alert(app.extractGracefulError(data.error));
			return;
		}

		this.hide();


		this.state.onUpdate();


	}

	onClickCancel() {
		this.hide();
	}
	onfile() {
		console.log("clicked");
		let file_inputs = document.querySelectorAll("input[type='file']");
		file_inputs[0].click();
	}
	onClickUpload(
		filename,
		url = `/api/pub/upload_tenant_doc_by_bo/${this.state.tenant_id}`
	) {
		console.log("uploading");
		// return
		debugger;

		const file = filename.target.files[0];
		const docId = filename.target.id;

		let formData = new FormData();
		formData.append("image", file);
		formData.append("filename", docId+"_filepath");


		if ( docId == "lease_doc_physically_signed_lease_agreement" && !file.name.includes(".pdf")){
			app.alert("Only PDF file's are allowed");
			return;
		}

		

		fetch(url, {
			method: "POST",
			body: formData,
		})
			.then((response) => response.json())
			.then((data) => {
				
				if (!data || data.error) {
					app.alert(app.extractGracefulError(data.error));
					return;
				}

				// debugger;

				console.log(data);
				this.state[filename.target.id+"_filepath"] = data.image_path;
				this.state[filename.target.id+"_tick"] = true;
				// upload_input.image_path = data.image_path;
				// successfully_added_admin_project_modal_toggler.disabled = false;
				window[filename.target.id+"_tick"].checked = true;
				// window[filename.target.id+"_tick"].disabled = false;
				let label = document.querySelector('label[for="'+filename.target.id+'_tick"]');
				label.classList.add('text-decoration-line-through');
				label.style.color = '#999';
				// filename.target.disabled = true;

				if(window.sel_filter_app.value == '1'){
						if(lease_doc_training_declaration_tick.checked && 
							lease_doc_unit_allocation_form_tick.checked && 
							lease_doc_entry_snaglist_tick.checked ){
							btn_complete_or_submit.disabled = false;
					}
					return;
				}

				if(lease_doc_training_declaration_tick.checked && 
					lease_doc_unit_allocation_form_tick.checked && 
					lease_doc_entry_snaglist_tick.checked && 
					lease_doc_physically_signed_lease_agreement_tick.checked){
						btn_complete_or_submit.disabled = false;
				}
				


			})
			.catch((error) => {
				console.error(error);
			});
	}

	async onClickConfirm() {
		// this.hide();
		//fetch

		if(!doc_upload_confirmation_tick.checked){

			app.alert("Please confirm that documentation has been uploaded correctly");
			return;
		}

		console.log("from conclick confirm");
		console.log(this.state.application_id);
		let url = "";
		switch (this.state.usr_role) {
			case USR_ROLE__LA1:
				url = "/api/leasing-admin-one/application/upload-lease-documents";
				break;

			case USR_ROLE__LA2:
				url = "/api/leasing-admin-two/application/update-lease-initx";
				break;

			case USR_ROLE__LM:
				url = "/api/leasing-manager/application/update-lease-initx";
				break;
		}


		let hc = app.locateService(HttpClient);
		let payload = {
			application_id: this.state.application_id,
			lease_doc_training_declaration_filepath: this.state.lease_doc_training_declaration_filepath,
			lease_doc_training_declaration_tick: this.state.lease_doc_training_declaration_tick,

			lease_doc_entry_snaglist_filepath: this.state.lease_doc_entry_snaglist_filepath,
			lease_doc_entry_snaglist_tick:this.state.lease_doc_entry_snaglist_tick,

			lease_doc_unit_allocation_form_filepath: this.state.lease_doc_unit_allocation_form_filepath,
			lease_doc_unit_allocation_form_tick:this.state.lease_doc_unit_allocation_form_tick,

			lease_doc_physically_signed_lease_agreement_filepath:this.state.lease_doc_physically_signed_lease_agreement_filepath,
			lease_doc_physically_signed_lease_agreement_tick:this.state.lease_doc_physically_signed_lease_agreement_tick,
		};
		console.log("from component");
		console.log(payload);
		// return ;
		let resp = await hc.fetch("POST", url, {
			body: JSON.stringify(payload),
		});

		let data = resp.output;

		if (data === null) {
			//toast...
			return;
		}

		if (data.error) {
			app.alert(app.extractGracefulError(data.error));
			return;
		}
		console.log(data);
		// return;

		//alert("success");

		this.hide();
		
		//btn_notify_tenant_post_action
		//tenant_id_musuccess

		tenant_id_musuccess.innerText = this.state.tenant_id;
		tenant_id_musuccess2.innerText = this.state.tenant_id;

		//TODO:  will be conditional for married and individual

		this.state.onUpdate();

		if(sel_filter_app.value == '1'){
			this.state.modalSuccessIndividual.show();
		}else{
			this.state.modalSuccessMarried.show();
		}


	}

	async onClickNotifyTenant(){

		// this.hide();
		//fetch
		// console.log("from conclick confirm");
		let url = "";
		switch (this.state.usr_role) {
			case USR_ROLE__LA1:
				url = "/api/leasing-admin-one/application/complete-physically-signed-lease";
				break;
			/* NOT APPLICABLE
			case USR_ROLE__LA2:
				url = "/api/leasing-admin-two/application/update-lease-init";
				break;

			case USR_ROLE__LM:
				url = "/api/leasing-manager/application/update-lease-init";
				break;
			*/
		}

		let hc = app.locateService(HttpClient);
		let payload = {
			application_id: this.state.application_id,
			...this.state.data,
		};



		console.log("from component");
		console.log(payload);
		// return ;
		let resp = await hc.fetch("POST", url, {
			body: JSON.stringify(payload),
		});

		let data = resp.output;
		if (data.error) {
			app.alert(app.extractGracefulError(data.error));
			return;
		}
		console.log(data);
		// return;

		if (data === null || data.error != (null || undefined)) {
			//toast...
			app.alert("Something went wrong");
			return;
		}
		//alert("success");

		// history.back();
		// return;

		try{
			this.state.modalSuccessMarried.hide();
			this.state.modalSuccessIndividual.hide();

		}catch(e){

		}


		
		// <tr data-tenant-id="${each_t.tenant_id}"> 

		// debugger;

		// document.querySelector(`tr[data-tenant-id="${this.state.tenant_id}]`)
		// .classList.add('d-none');
		const tenant_row = document.querySelector(`tr[data-tenant-id="${this.state.tenant_id}"]`);
		tenant_row.remove();

		const tce = window.complete_application; //.textContent;
		
		debugger;

		tce.textContent =  tce.textContent.replace(/\((\d)+\)/, (_, number) => `(${Math.min(0,parseInt(number) - 1)})`);


		// window.location.reload();

	}

	xonClickUploadConfirm() {
		var modal_hide = bootstrap.Modal.getInstance(
			document.getElementById(this.state.placeholer_id + "_modal"),
			{}
		);
		modal_hide.hide();

		var modalappagain = new bootstrap.Modal(
			document.getElementById(
				this.state.placeholer_id + "_modal_upload_success"
			),
			{}
		);
		modalappagain.show();
		// close_modal(window.add_project_pri_comp);
		// open_modal(window.add_project_sub_comp);

		this.onClickConfirm();
	}
}

class SendAlertLeaseComponent extends AppComponent {
	constructor(property_id, usr_role) {
		super();
		this.state.usr_role = usr_role;
		this.state.property_id = property_id;
	}

	async uponReady() {
		await super.uponReady();
	}

	//render
	// render(el_id, data) {
	//     this.state.application_id = data.application_id
	//     let title = "";
	//     this.state.placeholer_id = el_id;
	//     switch (data.time_remaining_type_const){
	//         case 1: //6m
	//             title = "6 Months Remaining";
	//             break;
	//         case 2: //3m
	//             title = "3 Months Remaining";
	//             break;
	//         case 3: //2m
	//             title = "60 Days Remaining";
	//             break;
	//     }

	//     let html = `
	//         <div class="form_wrapper add_modal d-none" id="send_alert_to_tennat_pri_comp" style="width:450px;">
	//             <div class="row">
	//                 <div class="text-center mt-4 h3">
	//                     Send Alert
	//                 </div>

	//                 <div class=" text-center  ">
	//                     Notify user ${data.tenant_id} that their lease only has
	//                 </div>

	//                 <div class=" text-center  h4 mt-3">
	//                     <b>${data.alert_type_enum} Months Remaining</b>
	//                 </div>

	//             </div>
	//             <div class="row mt-3">

	//                 <form class="col-lg-12 mx-auto">

	//                     <div class="col-lg-12">
	//                         <div class="d-flex justify-content-around">

	//                             <div class="col-lg-4">
	//                                 <button type="button" class="close_send_alert_modal btn btn-custom-dark-invert"> Cancel </button>
	//                             </div>

	//                             <div class="col-lg-4">
	//                                 <button type="button" id="successfully_leasing_admin_one_send_alert_to_tenant_toggler" class="btn btn-primary"> SEND ALERT </button>
	//                             </div>
	//                         </div>

	//                     </div>
	//                 </form>

	//             </div>

	//         </div>

	//         <div class="form_wrapper add_modal d-none" id="send_alert_to_tennat_sub_comp" style="width:450px;">

	//             <div class="row">
	//                 <div class="text-center mt-4 h3">
	//                     Alert Successfully Sent
	//                 </div>

	//             </div>
	//             <div class="row mt-3">
	//                 <button type="button" id="send_alert" class=" btn btn-custom-dark"> Close </button>

	//             </div>

	//         </div>
	//         <div class="modal_bg_overlay close_send_alert_modal"></div>
	//     `;
	//     window[el_id].innerHTML = html;

	//     this.hookup();
	// }

	render(el_id, data) {
		this.state.application_id = data.application_id;
		this.state.alert_type_enum = data.alert_type_enum;
		let title = "";
		this.state.placeholer_id = el_id;
		switch (data.time_remaining_type_const) {
			case 1: //6m
				title = "6 Months Remaining";
				break;
			case 2: //3m
				title = "3 Months Remaining";
				break;
			case 3: //2m
				title = "60 Days Remaining";
				break;
		}

		let html = `
            <section class="modal fade" id="${el_id}_modal_alert">
                <div class=" modal-dialog modal-dialog-centered">
                    <div class="modal-content border border-0">
                        <div class="modal-body">
                            <div class="row">
                                <div class="text-center mt-4 h3">
                                    Send Alert
                                </div>

                                <div class=" text-center  ">
                                    Notify user ${data.tenant_id} that their lease only has
                                </div>

                                <div class=" text-center  h4 mt-3">
                                    <b>${data.alert_type_enum} Months Remaining</b>
                                </div>

                            </div>
                            <div class="row mt-3">

                                <form class="col-lg-12 mx-auto">

                                    <div class="col-lg-12">
                                        <div class="d-flex justify-content-center gap-2 gap-sm-5 flex-wrap">

                                            <div class="">
                                                <button type="button" data-bs-dismiss="modal" class="xclose_send_alert_modal btn btn-custom-dark-invert px-5 rounded-pill dm_sans_700"> Cancel </button>
                                            </div>

                                            <div class="">
                                                <button type="button" id="send_alert" class="btn btn-primary px-5 rounded-pill dm_sans_700"> SEND ALERT </button>
                                            </div>
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="modal fade" id="${el_id}_modal_alert_success">
                <div class=" modal-dialog modal-dialog-centered">
                    <div class="modal-content border border-0">
                        <div class="modal-body">
                            <div class="row">
                                <div class="text-center mt-4 h3">
                                    Alert Successfully Sent
                                </div>

                            </div>
                            <div class="row mt-3">
                                <div class="col-md-12">
                                    <div class="d-flex justify-content-center align-items-center">
                                        <button type="button" data-bs-dismiss="modal" class=" btn btn-custom-dark px-5 rounded-pill"> Close </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
		window[el_id].innerHTML = html;

		this.hookup();
	}

	hookup() {
		this.on("#close_btn", "click", this.onClickCancel);
		this.on(".close_send_alert_modal", "click", this.onClickCancel);
		this.on(
			"#successfully_leasing_admin_one_send_alert_to_tenant_toggler",
			"click",
			this.onClickAlertModal
		);
		this.on("#send_alert", "click", this.onClickConfirm);
	}
	show(data) {
		// console.log(data);
		// user_id.innerText = data.user_id
		// this.state.data = data;
		//debugger;
		// open_modal(window.leasing_admin_one_send_alert_modal)
		// open_modal(window.send_alert_to_tennat_pri_comp)

		var modalapp = new bootstrap.Modal(
			document.getElementById(this.state.placeholer_id + "_modal_alert"),
			{}
		);
		modalapp.show();
	}

	hide() {
		close_modal(window.leasing_admin_one_send_alert_modal);
		close_modal(window.send_alert_to_tennat_pri_comp);
		close_modal(window.send_alert_to_tennat_sub_comp);
	}

	onClickCancel() {
		this.hide();
	}

	async onClickConfirm() {
		// this.hide();
		//fetch
		console.log("from conclick confirm");
		let url = "";
		// return;
		switch (this.state.usr_role) {
			case USR_ROLE__LA1:
				url =
					"/api/leasing-admin-one/application/action/lease-expire-alert";
				break;

			case USR_ROLE__LA2:
				url =
					"/api/leasing-admin-two/application/action/lease-expire-alert";
				break;

			case USR_ROLE__LM:
				url =
					"/api/leasing-manager/application/action/lease-expire-alert";
				break;
		}

		let hc = app.locateService(HttpClient);
		let payload = {
			application_id: this.state.application_id,
			action_note: "Lease Ending Alert By " + this.state.usr_role,
			alert_type_enum: this.state.alert_type_enum,
		};
		console.log("from component");
		console.log(payload);
		// return ;
		let resp = await hc.fetch("POST", url, {
			body: JSON.stringify(payload),
		});

		let data = resp.output;
		if (data.error) {
			app.alert(app.extractGracefulError(data.error));
			return;
		}
		console.log(data);
		// return;

		if (data === null || data.error != (null || undefined)) {
			//toast...
			app.alert(
				data.error
					? app.extractGracefulError(data.error)
					: "Something went wrong."
			);
			return;
		}

		var hideModal = bootstrap.Modal.getInstance(
			document.getElementById(this.state.placeholer_id + "_modal_alert"),
			{}
		);
		// register_modal.show();
		hideModal.hide();

		var modalapp = new bootstrap.Modal(
			document.getElementById(
				this.state.placeholer_id + "_modal_alert_success"
			),
			{}
		);
		modalapp.show();
		//alert("success");

		// window.location.reload();

		// debugger;
		// if (this.state.usr_role == USR_ROLE__LA1) {
		//     window.location = '/leasing-admin-one/applications-complete?property_id=' + this.state.data.property_id;

		// } else if (this.state.usr_role == USR_ROLE__LA2) {
		//     window.location = '/leasing-admin-two/applications-complete?property_id=' + this.state.data.property_id;

		// }
		// else if (this.state.usr_role == USR_ROLE__LM) {
		//     window.location = '/leasing-manager/applications-complete?property_id=' + this.state.data.property_id;

		// }
	}

	onClickAlertModal() {
		close_modal(window.send_alert_to_tennat_pri_comp);
		open_modal(window.send_alert_to_tennat_sub_comp);
	}
}

class TerminateLeaseComponent extends AppComponent {
	constructor(property_id, usr_role, is_request) {
		super();
		this.state.usr_role = usr_role;
		this.state.property_id = property_id;
		this.state.is_request = is_request;
	}

	async uponReady() {
		await super.uponReady();
	}

	//render
	render(el_id, data) {
		this.state.placeholer_id = el_id;
		let html = `
            <div class="form_wrapper add_modal d-none" id="terminate_lease_to_tennat_pri_comp" style="width:100%;max-width:450px;">

            <div class="row">
                <div class="text-center mt-4 h3">
                    Terminate Lease
                </div>

                <div class=" text-center  ">
                    Are you sure you want to terminate the lease for user ${data.tenant_id}? Please enter the effective date to allow the user one calendar months notice, as stated in the lease agreement.
                </div>

            </div>
            <div class="row mt-3">

                <form class="col-lg-12 mx-auto">
                    <div class="row  my-3 d-flex justify-content-center">

                        <div class="col-md-3 col-lg-12">
                            <input type="date" class="form-control bg-light" xplaceholder="YYYY/MM/DD" id="date"> 

                        </div>

                    </div>
                    <div class="col-lg-12">
                        <div class="d-flex justify-content-center justify-content-sm-around flex-wrap gap-2 gap-sm-4">

                            <div class="col-lg-4">
                                <button type="button" class="close_popup_terminate_lease_modal btn btn-custom-dark-invert"> Cancel </button>
                            </div>

                            <div class="col-lg-4">
                                <button type="button" id="successfully_leasing_admin_one_terminate_lease_to_tenant_toggler" class="btn btn-custom-red"> Terminate </button>
                            </div>
                        </div>

                    </div>
                </form>



                </div>

            </div>


            <div class="form_wrapper add_modal d-none" id="terminate_lease_to_tennat_sub_comp" style="width:450px;">

                <div class="row">
                    <div class="text-center mt-4 h3">
                        Lease Successfully Terminated
                    </div>

                    <div class="text-center mt-4 h5">
                        The user has been notified about the termination of their lease agreement.
                    </div>

                </div>
                <div class="row mt-3">

                    <form class="col-lg-12 mx-auto">

                        <div class="col-lg-12">
                            <div class="d-flex justify-content-around">

                                <div class="col-lg-4">
                                    <button type="button" id="terminate" class=" btn btn-custom-dark"> Close </button>
                                </div>
                            </div>

                        </div>
                    </form>



                </div>

            </div>

            <div class="modal_bg_overlay close_popup_terminate_lease_modal" style="position:fixed;top:0;left:0"></div>
        `;
		window[el_id].innerHTML = html;

		this.hookup();
	}

	hookup() {
		this.on("#close_btn", "click", this.onClickCancel);
		this.on(
			".close_popup_terminate_lease_modal",
			"click",
			this.onClickCancel
		);

		// old
		//this.on("#successfully_leasing_admin_one_terminate_lease_to_tenant_toggler", "click", this.onClickAlertModal);
		//this.on("#terminate", "click", this.onClickConfirm);

		// new
		this.on(
			"#successfully_leasing_admin_one_terminate_lease_to_tenant_toggler",
			"click",
			this.onClickConfirm
		);
		this.on("#terminate", "click", this.onClickAlertModal);
	}

	show(data) {
		console.log(data);
		// user_id.innerText = data.user_id
		this.state.application_id = data.application_id;
		//debugger;
		open_modal(window.leasing_admin_one_terminate_lease_modal);
		open_modal(window.terminate_lease_to_tennat_pri_comp);
	}

	hide() {
		close_modal(window.leasing_admin_one_terminate_lease_modal);
		close_modal(window.terminate_lease_to_tennat_pri_comp);
		close_modal(window.terminate_lease_to_tennat_sub_comp);
	}

	onClickCancel() {
		this.hide();
	}

	async onClickConfirm() {
		this.hide();

		debugger;

		if (date.value.length == 0) {
			app.alert("Please Enter date");
			return;
		}
		//fetch
		console.log("from conclick confirm");
		let url = "";
		let url_suffix = "termination-request-accepted";
		if (this.state.is_request == false) {
			url_suffix = "terminate-lease";
		} else {
			url_suffix = "termination-request-accepted";
		}

		//test throw url_suffix;

		switch (this.state.usr_role) {
			case USR_ROLE__LA1:
				// url = "/api/leasing-admin-one/application/action/terminate-lease";
				url = "/api/leasing-admin-one/application/action/" + url_suffix;
				break;

			case USR_ROLE__LA2:
				url = "/api/leasing-admin-two/application/action/" + url_suffix;
				break;

			case USR_ROLE__LM:
				url = "/api/leasing-manager/application/action/" + url_suffix;
				break;
		}

		//test throw url;

		let hc = app.locateService(HttpClient);
		let payload = {
			// "application_id": 30,
			application_id: this.state.application_id,
			action_note: "Lease Terminated By " + this.state.usr_role,
			lease_termination_date: date.value,
		};
		console.log("from component");
		console.log(payload);

		// return ;
		let resp = await hc.fetch("POST", url, {
			body: JSON.stringify(payload),
		});

		let data = resp.output;

		if (data.error) {
			app.alert(app.extractGracefulError(data.error));
			return;
		}

		// <tr binded-with="${each_t.application_id}">
		try {
			const row = document.querySelector(`tr[binded-with="${this.state.application_id}"]`);
			row.remove();
		} catch (e) {
			console.log("error deleting row", e);
		}

		console.log(data);
		// return;
		open_modal(window.leasing_admin_one_terminate_lease_modal);
		close_modal(window.terminate_lease_to_tennat_pri_comp);
		open_modal(window.terminate_lease_to_tennat_sub_comp);
	}

	async onClickAlertModal() {
		this.hide();
		await page.paginate(1000, 0);
	}
}

class DeclineTerminateRequestComponent extends AppComponent {
	constructor(property_id, usr_role) {
		super();
		this.state.usr_role = usr_role;
		this.state.property_id = property_id;
	}

	async uponReady() {
		await super.uponReady();
	}

	//render
	render(el_id, data) {
		this.state.placeholer_id = el_id;
		let html = `
            <div class="form_wrapper add_modal d-none" id="decline_terminate_lease_to_tennat_pri_comp" style="width:450px;">

            <div class="row">
                <div class="text-center mt-4 h3">
                Are you sure?
                </div>

                <div class="text-center mt-4 h5">
                    Are you sure you want to decline the lease termination request for user ${data.tenant_id}?
                </div>

            </div>
            <div class="row mt-3">

                <form class="col-lg-12 mx-auto">

                    <div class="col-lg-12">
                        <div class="d-flex justify-content-center justify-content-sm-around flex-wrap">

                            <div class="col-lg-4">
                                <button type="button" class="close_decline_terminate_modal btn btn-custom-dark"> Cancel </button>
                            </div>

                            <div class="col-lg-4">
                                <button type="button" id="successfully_decline_terminate_modal" class=" btn btn-custom-dark"> Yes </button>
                            </div>
                        </div>

                    </div>
                </form>



                    </div>

                </div>

                <div class="form_wrapper add_modal m-0 m-sm-auto d-none" id="decline_terminate_lease_to_tennat_sub_comp" style="width:100%; max-width:450px;">

                    <div class="row">
                        <div class="text-center mt-4 h3">
                        Termination Declined
                        </div>

                        <div class="text-center mt-4 h5">
                        The lease termination request for user ${data.tenant_id} has been declined.
                        </div>

                    </div>
                    <div class="row mt-3">

                        <form class="col-lg-12 mx-auto">

                            <div class="col-lg-12">
                                <div class="d-flex justify-content-around">

                                    <div class="col-lg-4">
                                        <button type="button" id="decline_termination" class="close_decline_terminate_modal btn btn-custom-dark"> Close </button>
                                    </div>
                                </div>

                            </div>
                        </form>



                    </div>

                </div>

                <div class="modal_bg_overlay close_decline_terminate_modal" style="position:fixed;top:0;left:0"></div>
        `;
		window[el_id].innerHTML = html;

		this.hookup();
	}

	hookup() {
		this.on("#close_btn", "click", this.onClickCancel);
		this.on(".close_decline_terminate_modal", "click", this.onClickCancel);
		// this.on("#successfully_decline_terminate_modal", "click", this.onClickAlertModal);

		// //last msg ok button
		this.on("#decline_termination", "click", this.onClickCloseAfterDecline);

		this.on(
			"#successfully_decline_terminate_modal",
			"click",
			this.onClickConfirm
		);

		//last msg ok button
		// this.on("#decline_termination", "click", this.onClickAlertModal);
	}
	show(data) {
		// console.log(data);
		// user_id.innerText = data.user_id
		this.state.application_id = data.application_id;
		console.log("FROM COMPONENT", data);
		//debugger;
		open_modal(window.leasing_admin_one_decline_terminate_lease_modal);
		open_modal(window.decline_terminate_lease_to_tennat_pri_comp);
	}

	hide() {
		close_modal(window.leasing_admin_one_decline_terminate_lease_modal);
		close_modal(window.decline_terminate_lease_to_tennat_pri_comp);
		close_modal(window.decline_terminate_lease_to_tennat_sub_comp);
	}

	onClickCancel() {
		this.hide();
	}

	async onClickCloseAfterDecline() {
		this.hide();
		await page.paginate(1000, 0);
	}

	async onClickConfirm() {
		this.hide();
		//fetch
		console.log("from conclick confirm");
		let url = "";
		// return;
		switch (this.state.usr_role) {
			case USR_ROLE__LA1:
				url =
					"/api/leasing-admin-one/application/action/termination-request-declined";
				break;

			case USR_ROLE__LA2:
				url =
					"/api/leasing-admin-two/application/action/termination-request-declined";
				break;

			case USR_ROLE__LM:
				url =
					"/api/leasing-manager/application/action/termination-request-declined";
				break;
		}

		let hc = app.locateService(HttpClient);
		let payload = {
			// "application_id": 22,
			application_id: this.state.application_id,
			action_note:
				" Termination Request Declined By " + this.state.usr_role,
		};
		console.log("from component");
		console.log(payload);
		// return ;
		let resp = await hc.fetch("POST", url, {
			body: JSON.stringify(payload),
		});

		let data = resp.output;
		//  debugger
		if (data === null) {
			app.alert("No data found.");
			return;
		}
		if (data.error) {
			app.alert(app.extractGracefulError(data.error));
			return;
		}

		// <tr binded-with="${each_t.application_id}">
		try {
			const row = document.querySelector(`tr[binded-with="${this.state.application_id}"]`);
			row.remove();
		} catch (e) {
			console.log("error deleting row", e);
		}

		open_modal(window.leasing_admin_one_decline_terminate_lease_modal);
		open_modal(window.decline_terminate_lease_to_tennat_pri_comp);
		open_modal(window.decline_terminate_lease_to_tennat_sub_comp);
	}

	onClickAlertModal() {
		close_modal(window.decline_terminate_lease_to_tennat_pri_comp);
		open_modal(window.decline_terminate_lease_to_tennat_sub_comp);
	}
}

class ViewLeaseInfoComponent extends AppComponent {
	constructor(usr_role, property_id) {
		super();
		this.state.usr_role = usr_role;
		this.state.property_id = property_id;
	}

	async uponReady() {
		await super.uponReady();
	}

	//render
	render(el_id, data) {
		this.state.placeholer_id = el_id;
		let html = ` <div class="form_wrapper add_modal ms-0 ms-sm-auto" style="width:100%; max-width:800px;overflow-wrap:anywhere;">

         <div class="row">
             <div class="col-lg-6 m-0 p-0 p-sm-auto">
                 <div class="h5">
                     Lease Information:

                 </div>

                 <div class="h6 text-secondary mt-3">
                     Project: <span class="text-dark"> ${data.property_category_name} </span>
                 </div>

                 
                 <div class="h6 text-secondary mt-3 d-flex ">
                 
                    <div class="h6 text-secondary text-nowrap">Property: &nbsp;&nbsp;</div>
                     <span class="text-dark text-wrap" > ${data.property_name}, ${data.address_line1 || ""}, ${data.address_line2 || ""}, </span>
                 </div>

                 <div class="h6 text-secondary mt-3">
                     Unit Type:<span class="text-dark"> ${data.unit_type_title}</span>
                 </div>

                 <div class="h6 text-secondary mt-3">
                     Tariff:<span class="text-dark">${data.lease_monthly_rental} </span>
                 </div>

                 <div class="h6 text-secondary mt-3">
                     Start Date:<span class="text-dark">${data.lease_open_date}</span>
                 </div>

                 <div class="h6 text-secondary mt-3">
                     End Date:<span class="text-dark">${data.lease_end_date}</span>
                 </div>

                 <div class="h6 text-secondary mt-3">
                     Term Period:<span class="text-dark">${data.lease_duration} </span>
                 </div>
             </div>

             <div class="col-lg-6">
                 <div class="h5">
                     User ID:

                 </div>
                 <div class="h6">
                     ${data.tenant_id}
                 </div>

                 <div class="h6 text-secondary mt-3">
                     Tenant Information:
                 </div>

                 <div class="h6 text-secondary mt-3">
                     Name: <span class="text-dark"> ${data.name}</span>
                 </div>

                 <div class="h6 text-secondary mt-3">
                     Surname: <span class="text-dark"> ${data.surname}</span>
                 </div>

                 <div class="h6 text-secondary mt-3">
                     Phone Number: <span class="text-dark">${data.contact_num}</span>
                 </div>

                 <div class="h6 text-secondary mt-3">
                     Email Address: <span class="text-dark"> ${data.email} </span>
                 </div>

             </div>

         </div>
         <div class="row mt-3">

             <form class="col-lg-12 mx-auto ">

                 <div class="col-lg-12">
                     <div class="d-flex justify-content-center gap-2 gap-sm-auto justify-content-sm-around flex-wrap">

                         <div class="col-lg-4">
                             <button type="button" class="close_user_lease_info_modal btn btn-custom-dark"> Close </button>
                         </div>

                         <div class="col-lg-4">
                             <a href="${data.marital_status_type_id == 2? data.lease_doc_physically_signed_lease_agreement_filepath: data.lease_agreement_filepath + "?timestamp=" + (new Date()).getTime()}" target="_blank" class="close_user_lease_info_modal btn btn-primary"> VIEW LEASE AGREEMENT </a>
                         </div>
                     </div>

                 </div>
             </form>



         </div>

     </div>
     
     <div class="modal_bg_overlay close_user_lease_info_modal" style="position:fixed;left:0;top:0;"></div>`;
		window[el_id].innerHTML = html;

		this.hookup();
	}

	hookup() {
		this.on(".close_user_lease_info_modal", "click", this.onClickCancel);
		this.on(
			"#view_lease_agreement",
			"click",
			this.onClickViewLeaseAgreement
		);
		this.on("#close_btn", "click", this.onClickClose);
	}
	onClickViewLeaseAgreement() {
		console.log("view lease agreement");
		// close_modal(window.view_reason_to_tennat_pri_comp);
		// open_modal(window.view_reason_to_tennat_sub_comp)
	}
	show(data) {
		console.log("data");
		// this.state.application_id =  data.application_id
		// this.state.submission_time =  data.submission_time
		// this.state.submission_timestamp =  data.submission_timestamp

		// submission_date.innerText = data.submission_date
		// date_declined.innerText = data.date_declined
		// declined_by.innerText = data.declined_by_lm
		//debugger;
		open_modal(window.user_lease_info_modal);
		// open_modal(window.view_reason_to_tennat_pri_comp);
	}

	hide() {
		close_modal(window.user_lease_info_modal);
		// close_modal(window.view_reason_to_tennat_pri_comp)
		// close_modal(window.view_reason_to_tennat_sub_comp)
	}

	onClickCancel() {
		this.hide();
	}

	onClickClose() {
		close_modal(window.user_lease_info_modal);
		// close_modal(window.view_reason_to_tennat_pri_comp)
		// close_modal(window.view_reason_to_tennat_sub_comp)
	}
}


class CreateLeaseAgreementInitialPopup extends AppComponent {
	constructor() {
		super();
	}

	async uponReady() {
		await super.uponReady();
	}

	render(el_id, data) {
		this.state.placeholer_id = el_id;
		let html = ` 
        <section class="modal fade" id="${el_id}_modal">
            <div class=" modal-dialog modal-dialog-centered">
                <div class="modal-content border border-0">
                    <div class="modal-body">
                        <div class="row my-3">
                            <div class="col-md-12">
                                <div class="text-center mb-3 dm_sans_700 font_30">
                                Create Lease Agreement
                                </div>
                                <div class=" text-center mb-3 dm_sans_600 font_15">
                                	<div class="text-center mb-3 dm_sans_600 font_15">Before you start creating the lease make sure you:</div>

									<ul class="mx-5">
										<li class="text-start mb-3 dm_sans_600 font_15">Get in touch with housing supervisor to obtain unit allocation sign off</li>
										<li class="text-start mb-3 dm_sans_600 font_15">Invite tenant for training and sign off.</li>
									</ul>
                                </div>
                                <div class="d-flex justify-content-center">
                                    <button class="btn btn-primary px-5 rounded-5 dm_sans_700" id="close_btn">CLOSE</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>`;
		window[el_id].innerHTML = html;

		this.hookup();
	}

	hookup() {
		this.on("#close_btn", "click", this.onClickClose.bind(this));
	}
	show() {
		var modalapp = new bootstrap.Modal(
			document.getElementById(this.state.placeholer_id + "_modal"),
			{}
		);
		modalapp.show();
		this.modal = modalapp;
		// open_modal(window.view_reason_to_tennat_pri_comp);
	}


	onClickClose() {
		this.modal.hide();
	}
}

class CreateLeaseAgreementPostPopup extends AppComponent {
	constructor(application_id) {
		super();
		this.state.application_id = application_id;
	}

	async uponReady() {
		await super.uponReady();
	}

	render(el_id, data) {
		this.state.placeholer_id = el_id;
		let html = ` 
        <section class="modal fade" id="${el_id}_modal">
            <div class=" modal-dialog modal-dialog-centered">
                <div class="modal-content border border-0">
                    <div class="modal-body">
                        <div class="row my-3">
                            <div class="col-md-12">
                                <div class="text-center mb-3 dm_sans_700 font_30">
                                Complete Lease Agreement
                                </div>
                                <div class=" text-center mb-3 dm_sans_600 font_15">
                                	<div class="text-center mb-3 dm_sans_600 font_15">If it is a joint application with spouse please ensure the following:</div>

									<ul class="mx-5">
										<li class="text-start mb-3 dm_sans_600 font_15">Request tenant and spouse to physically come in and sign.</li>
										<li class="text-start mb-3 dm_sans_600 font_15"><b>Both</b> tenant and spouse <b>must</b> sign the lease agreement.</li>
										<li class="text-start mb-3 dm_sans_600 font_15">Obtain Lease Manager physical signature.</li>
										<li class="text-start mb-3 dm_sans_600 font_15">Scan signed lease agreement.</li>
										<li class="text-start mb-3 dm_sans_600 font_15">Upload clear scan of signed lease agreement.</li>
									</ul>
                                </div>
                                <div class="d-flex justify-content-center">
                                    <a href="#" target="_blank" class="btn btn-primary px-5 rounded-5 dm_sans_700" id="print_lease_button">PRINT LEASE</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>`;
		window[el_id].innerHTML = html;

		this.hookup();
	}

	hookup() {
		// this.on("#close_btn", "click", this.onClickClose.bind(this));

		// window.print_lease_button.href =  `/tenant/${data.tenant_id}/LEASE_AGREEMENT.pdf`;
		this.on("#print_lease_button", 'click', (e)=>{
			e.preventDefault();

			// localStorage.setItem('printQueue', JSON.stringify({lease_agreement_filepath:e.target.href}));

			//no window.location.href = e.target.href;
			const atag_custom = document.createElement('a');
			atag_custom.target = "_blank";
			atag_custom.href = e.target.href;
			atag_custom.click();
			window.focus();
			
			// history.back();

			var urlSearchParams = new URLSearchParams(window.location.search);
			window.location.href= `/leasing-admin-one/applications-complete?property_id=${urlSearchParams.get("prop_id")}&prev_state` ;

			return;

			// debugger;
			// const params = new URLSearchParams(window.location.search);
			// window.location.href = `/leasing-admin-one/applications-complete${params.get("params")||""}`;
			
			
			

			// // create iframe element
			const iframe = document.createElement('iframe');

			// create object URL for your blob or file and set it as the iframe's src
			iframe.src = e.target.href;
			iframe.name = 'pdf_frm';
			iframe.hidden = true;
			// call the print method in the iframe onload handler
			iframe.onload = () => {
				const pdfFrame = window.frames["pdf_frm"];

				// debugger;
				// if (pdfFrame.matchMedia) {
				// 	var mediaQueryList = pdfFrame.matchMedia('print');
				// 	mediaQueryList.addListener( function(mql) {
				// 		if (mql.matches) {
				// 			console.log("before print")
				// 		} else {
				// 			// afterPrint();
				// 			console.log("after print");
				// 		}
				// 	});
				// 	mediaQueryList.addListener(function(mql) {
				// 		if (mql.matches) {
				// 			console.log("before print")
				// 		} else {
				// 			// afterPrint();
				// 			console.log("after print");
				// 		}
				// 	});
				// }
				pdfFrame.focus();


				// ((pr)=>{

				// 	console.log("print done! ", pr);

				// })();

				pdfFrame.print();


				
				// window.location.back();
				// history.back();

				//go back to next;
			}

			document.body.appendChild(iframe);



		})


	}
	show(data) {

		window.print_lease_button.href =  `/tenant/${data.tenant_id}/LEASE_AGREEMENT.pdf`;

		// \/tenant\/287\/LEASE_AGREEMENT.pdf

		var modalapp = new bootstrap.Modal(
			document.getElementById(this.state.placeholer_id + "_modal"),
			{}
		);
		modalapp.show();
		this.modal = modalapp;
		// open_modal(window.view_reason_to_tennat_pri_comp);
	}


	onClickClose() {
		this.modal.hide();
	}
}


class TenantNotificationComponent extends AppComponent {
	constructor() {
		super();
		// this.state.usr_role = usr_role;
		// this.state.property_id = property_id;
	}

	async uponReady() {
		await super.uponReady();
	}

	//render
	// render(el_id, data) {
	//     this.state.placeholer_id = el_id;
	//     let html = `
	//     <div class="form_wrapper add_modal" style="width:450px;" id="tenant_notification_modal">

	//      <div class="row">
	//          <div class="col-lg-12">

	//              <div class=" h2 text-dark text-center mt-3">
	//              ${data.heading}
	//              </div>

	//              <div class="h6 text-secondary mt-3">
	//                  <span class="text-dark text-center w-full" >
	//                  ${data.body}</span>
	//              </div>

	//          </div>

	//      </div>
	//      <div class="row mt-3">

	//          <form class="col-lg-12 mx-auto">

	//              <div class="col-lg-12">
	//                  <div class="d-flex justify-content-around">

	//                      <div class="col-lg-4">
	//                          <button type="button" class=" btn btn-primary" id="close_btn"> Close </button>
	//                      </div>

	//                  </div>

	//              </div>
	//          </form>

	//      </div>

	//  </div>
	//  <div class="modal_bg_overlay close_user_lease_info_modal"></div>`;
	//     window[el_id].innerHTML = html;

	//     this.hookup();
	// }

	render(el_id, data) {
		this.state.placeholer_id = el_id;
		let html = ` 
        <section class="modal fade" id="${el_id}_modal">
            <div class=" modal-dialog modal-dialog-centered">
                <div class="modal-content border border-0">
                    <div class="modal-body">
                        <div class="row my-3">
                            <div class="col-md-12">
                                <div class="text-center mb-3 dm_sans_700 font_30">
                                ${data.heading}
                                </div>
                                <div class=" text-center mb-3 dm_sans_500 font_15">
                                ${data.body}
                                </div>
                                <div class="d-flex justify-content-center">
                                    <button class="btn btn-primary px-5 rounded-5 dm_sans_700" id="close_btn">CLOSE</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>`;
		window[el_id].innerHTML = html;

		this.hookup();
	}

	hookup() {
		// this.on(".close_user_lease_info_modal", "click", this.onClickCancel);
		// this.on("#view_lease_agreement", "click", this.onClickViewLeaseAgreement);
		this.on("#close_btn", "click", this.onClickClose);
	}
	// onClickViewLeaseAgreement() {
	//     console.log("view lease agreement")
	//     // close_modal(window.view_reason_to_tennat_pri_comp);
	//     // open_modal(window.view_reason_to_tennat_sub_comp)

	// }
	show() {
		// console.log(data);
		// this.state.application_id =  data.application_id
		// this.state.submission_time =  data.submission_time
		// this.state.submission_timestamp =  data.submission_timestamp

		// submission_date.innerText = data.submission_date
		// date_declined.innerText = data.date_declined
		// declined_by.innerText = data.declined_by_lm
		//debugger;

		// open_modal(window[this.state.placeholer_id])

		var modalapp = new bootstrap.Modal(
			document.getElementById(this.state.placeholer_id + "_modal"),
			{}
		);
		modalapp.show();
		// open_modal(window.view_reason_to_tennat_pri_comp);
	}

	hide() {
		close_modal(window[this.state.placeholer_id]);
		// close_modal(window.view_reason_to_tennat_pri_comp)
		// close_modal(window.view_reason_to_tennat_sub_comp)
	}

	// onClickCancel() {
	//     this.hide();
	// }

	onClickClose() {
		close_modal(window[this.state.placeholer_id]);
		history.back();
		// close_modal(window.view_reason_to_tennat_pri_comp)
		// close_modal(window.view_reason_to_tennat_sub_comp)
	}
}

class LeaseAgreementSignedByLMComponent extends AppComponent {
	constructor() {
		super();
		// this.state.usr_role = usr_role;
		// this.state.property_id = property_id;
	}

	async uponReady() {
		await super.uponReady();
	}

	//render
	render(el_id, data) {
		this.state.placeholer_id = el_id;
		let html = ` <div class="form_wrapper add_modal" style="width:450px;" >

         <div class="row">
             <div class="col-lg-12">
                

                 <div class=" h2 text-dark text-center mt-3">
                 Lease Agreement Signed!
                 </div>

                 <div class="h6 text-secondary mt-3">
                     <span class="text-dark text-center w-full" >
                     A notification will be sent to user ${data.tenant_id}
                    to notify them that their lease agreement
                    has been signed and they can now view
                    the fully signed lease agreement.</span>
                 </div>

             </div>

         </div>
         <div class="row mt-3">

             <form class="col-lg-12 mx-auto">

                 <div class="col-lg-12">
                     <div class="d-flex justify-content-around">

                         <div class="col-lg-6">
                             <button type="button" class=" btn btn-primary" id="close_btn"> Notify Tenant </button>
                         </div>

                         
                     </div>

                 </div>
             </form>



         </div>

     </div>
     <div class="modal_bg_overlay close_user_lease_info_modal" style="position:fixed;top:0;left:0"></div>`;
		window[el_id].innerHTML = html;

		this.hookup();
	}

	hookup() {
		this.on("#close_btn", "click", this.onClickClose);
	}
	// onClickViewLeaseAgreement() {
	//     console.log("view lease agreement")
	//     // close_modal(window.view_reason_to_tennat_pri_comp);
	//     // open_modal(window.view_reason_to_tennat_sub_comp)

	// }
	show() {
		open_modal(window[this.state.placeholer_id]);
		// open_modal(window.view_reason_to_tennat_pri_comp);
	}

	hide() {
		close_modal(window[this.state.placeholer_id]);
		// close_modal(window.view_reason_to_tennat_pri_comp)
		// close_modal(window.view_reason_to_tennat_sub_comp)
	}

	// onClickCancel() {
	//     this.hide();
	// }

	onClickClose() {
		close_modal(window[this.state.placeholer_id]);
		history.back();
		// close_modal(window.view_reason_to_tennat_pri_comp)
		// close_modal(window.view_reason_to_tennat_sub_comp)
	}
}

/////////////////////////////////////////////////////////////////////////////

class PaginationComponent extends AppComponent {
	constructor(config) {
		super();
		// pagination
		this.state.maxPage = 0;
		this.state.minPage = 1;
		this.state.currentPage = 1;

		this.state.limit = config.limit;

		this.nextHandlerElement = config.nextHandlerElement;
		this.previousHandlerElement = config.previousHandlerElement;
		this.currentPageDisplayElement = config.currentPageDisplayElement;
		this.maxPageDisplayElement = config.maxPageDisplayElement;
		this.tableElement = config.tableElement;

		this.model = null; //instantiated inside the uponReady()

		//this.state.offset = (this.state.currentPage - 1) * this.state.limit;
		// /pagination
	}

	setNextHandlerElement(sel) {
		this.nextHandlerElement = document.querySelector(sel);
	}

	setPreviousHandlerElement(sel) {
		this.previousHandlerElement = document.querySelector(sel);
	}

	async uponReady() {
		await super.uponReady();

		this.model = new ModelAdapter();

		//debugger;
		this.on("#" + this.nextHandlerElement.id, "click", this.onNext);
		this.on("#" + this.previousHandlerElement.id, "click", this.onPrevious);
	}

	onNext(e) {
		e.preventDefault();
		// debugger
		this.state.currentPage++;
		if (this.state.currentPage > this.state.maxPage) {
			this.state.currentPage = this.state.maxPage;
			return;
		}


		this.paginate();
	}

	onPrevious(e) {
		e.preventDefault();
		this.state.currentPage--;
		if (this.state.currentPage < this.state.minPage) {
			this.state.currentPage = this.state.minPage;
			return;
		}
		this.paginate();
	}

	//modified by bappi - added extra param to detect whether searching or not. if user searching then reset the state cause search can reduce data length and page size
	async paginate({ isSearch } = { isSearch: false }) {

		if (isSearch) {
			this.state.currentPage = 1;
		}
		// ================================================ end modification
		let rowCount = await this.uponGetRowCount();

		this.state.maxPage = Math.ceil(rowCount / this.state.limit);
		if (this.state.maxPage == 0) {
			this.state.maxPage = 1;

			this.uponUpdateControls();
			//return;
		}

		this.state.offset = (this.state.currentPage - 1) * this.state.limit;

		this.data = await this.uponGetData();
		this.uponRender();

		this.uponUpdateControls();
	}

	async updateControls() {
		//debugger;
		var isNan = !this.state.maxPage;
		this.maxPageDisplayElement.innerText = isNan ? "0" : this.state.maxPage;
		this.currentPageDisplayElement.innerText = isNan ? "0" : this.state.currentPage;
	}

	renderTable() {
		//debugger;
		//const table = this.tableElement; //document.querySelector(tableIdentifier);
		const tableHead = this.tableElement.querySelector("thead");
		const tableHeadCells = tableHead.querySelectorAll("th");
		const tableBody = this.tableElement.querySelector("tbody");
		const fieldNames = [];

		tableBody.innerHTML = "";
		tableHeadCells.forEach((cell) => {
			fieldNames.push(cell.getAttribute("data-field"));
		});

		this.data.forEach((obj) => {
			let row = tableBody.insertRow();

			fieldNames.forEach((fieldName) => {
				let cell = row.insertCell();
				if (obj[fieldName]) {
					/*if (obj.hasOwnProperty(fieldName))*/ //if(obj[fieldName])
					cell.textContent = obj[fieldName];
				}
			});
		});
	}

	download(e) {
		e.preventDefault();
		//debugger;
		let table_id = this.tableElement.id,
			separator = ",";
		// Select rows from table_id
		var rows = document.querySelectorAll("table#" + table_id + " tr");
		// Construct csv
		var csv = [];
		for (var i = 0; i < rows.length; i++) {
			var row = [],
				cols = rows[i].querySelectorAll("td, th");
			for (var j = 0; j < cols.length; j++) {
				// Clean innertext to remove multiple spaces and jumpline (break csv)
				var data = cols[j].innerText
					.replace(/(\r\n|\n|\r)/gm, "")
					.replace(/(\s\s)/gm, " ");
				// Escape double-quote with double-double-quote (see https://stackoverflow.com/questions/17808511/properly-escape-a-double-quote-in-csv)
				data = data.replace(/"/g, '""');
				// Push escaped string
				row.push('"' + data + '"');
			}
			csv.push(row.join(separator));
		}
		var csv_string = csv.join("\n");
		// Download it
		var filename =
			"export_" +
			table_id +
			"_" +
			new Date().toLocaleDateString() +
			".csv";
		var link = document.createElement("a");
		link.style.display = "none";
		link.setAttribute("target", "_blank");
		link.setAttribute(
			"href",
			"data:text/csv;charset=utf-8," + encodeURIComponent(csv_string)
		);
		link.setAttribute("download", filename);
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	}
}

/////////////////////////////////////////////////////////////////////////////

//'use strict';

class Application extends WebApplication {
	constructor(page) {
		super(page);
		// CUSTOM
		//this.dm = new DependencyManager ();
		//this.dbc = new Dbc ();
		// /CUSTOM

		// /SUPPERSS
		//debugger;

		this
			//.serviceClassAdd (TemplateEngine, {})
			.serviceClassAdd(Observable, {})
			.serviceClassAdd(FormValidator, {})
			//.serviceClassAdd (GlobalErrorHandler, {})
			//.serviceClassAdd (Logger, {})
			//.serviceClassAdd (Dbc, {})
			//.serviceClassAdd (Tdd, {})
			.serviceClassAdd(HttpClient, {});
		//.serviceClassAdd (WebSocketClient, {})

		/* DISABLED FOR THE TIME BEING
		this.locateService (WebSocketClient)
			.middlewareAdd (WebSocketMiddleware, {})
			// request handlers
			.requestHandlerAdd (app.locateService (WebSocketClient).locateMiddleware (WebSocketMiddleware).onRequest)
			// response handlers
			.responseHandlerAdd (app.locateService (WebSocketClient).locateMiddleware (WebSocketMiddleware).onResponse)
		;
		
		*/
		this.locateService(HttpClient)
			.middlewareAdd(HttpClientMiddleware, {})
			// request handlers
			//NEED_TO_UNCOMMENT/
			.requestHandlerAdd(
				this.locateService(HttpClient).locateMiddleware(
					HttpClientMiddleware
				).onRequest
			)

			// response handlers
			//NEED_TO_UNCOMMENT/
			.responseHandlerAdd(
				this.locateService(HttpClient).locateMiddleware(
					HttpClientMiddleware
				).onResponse
			);
	}

	hookupCustomSearchInTable(searchInputId, tableId) {
		this.searchInputId = searchInputId;
		this.viewTableId = tableId;

		// try-catch to protect errors in case tableId is not found
		try {
			this.on(
				"#" + searchInputId,
				"input",
				this.onCustomSearchInTableImpl2
			);
		} catch (err) { }
	}

	onCustomSearchInTableImpl2(e) {
		/*
			let searchInput = document.getElementById('search_input');
			let table = document.getElementById('view_table');
			let searchQuery = searchInput.value.trim().toLowerCase();
			*/

		let searchInput = document.getElementById(this.searchInputId);
		let table = document.getElementById(this.viewTableId);
		let searchQuery = searchInput.value.trim().toLowerCase();

		for (var i = 1; i < table.rows.length; i++) {
			var row = table.rows[i];
			var cells = row.cells;
			var rowContainsQuery = false;

			for (var j = 0; j < cells.length; j++) {
				var cellText = cells[j].textContent.trim().toLowerCase();

				if (cellText.includes(searchQuery)) {
					rowContainsQuery = true;
					break;
				}
			}

			if (rowContainsQuery) {
				row.style.display = "";
			} else {
				row.style.display = "none";
			}
		}
	}

	onCustomSearchInTable(e) {
		//debugger;

		// Declare variables
		let input, filter, table, tr, td, i;
		let txtValue;
		input = document.getElementById(this.searchInputId);
		filter = input.value.toUpperCase();
		table = document.getElementById(this.viewTableId);
		tr = table.getElementsByTagName("tr");
		//let txtValue = "";

		// Loop through all table rows, and hide those who don't match the search query
		for (i = 0; i < tr.length; i++) {
			if (filter.length > 0) {
				td = tr[i].getElementsByTagName("td");
				let disp = false;
				for (var ic = 0, it = td.length; ic < it; ic++) {
					if (td[ic]) {
						txtValue = td[ic].textContent || td[ic].innerText;
						if (txtValue.toUpperCase().indexOf(filter) > -1) {
							//tr[i].style.display = "";
							disp = true;
						} else {
							//tr[i].style.display = "none";
						}
					}
				}
				if (disp === false) {
					tr[i].style.display = "none";
				}
			} else {
				tr[i].style.display = "";
			}
		}
	}

	extractGracefulError(errMsg) {
		let s = errMsg;
		let s1 = "ERROR: ";

		//BUGGY? let s2 = "LINE 1:";
		let s2 = "CONTEXT: ";

		let l1 = s1.length;
		let l2 = s2.length;

		let p1 = s.indexOf(s1);
		let p2 = s.indexOf(s2);

		let s9 = s.substr(p1 + l1, p2 - p1 - l1);

		return s9.length > 0 ? s9 : errMsg;
	}

	alert(msg, cb = null) {
		app._alert_cb = cb;
		$("#alertModalText").text(msg);
		$("#alertModal").modal("show");
		//
	}

	hideAlert() {
		$("#alertModal").modal("hide");
		app._alert_cb();
	}

	//buggy
	showModal(selectorID) {
		$(selectorID).modal("show");
	}

	//buggy
	hideModal(selectorID) {
		$(selectorID).modal("hide");
	}

	async uponReady() {
		// SUPPRESS
		//debugger;
		this.setPageInstance(page);
		await super.uponReady();

		//this.on("#alertModalClose", "click", this.hideAlert)
		//window.addEventListener("alertModalClose", this.hideAlert);

		// document.getElementById("alertModalClose").addEventListener("click", this.hideAlert);
		// document.getElementById("alertModalCross").addEventListener("click", this.hideAlert);
	}
}

var app = new Application(); //Fiirst Global Var. Instantiated Only Here.
var page = null; //Second Global Var. Instantiated Per Page.
var sim = null;
var domContentLoadedCallback = null;









class JoshcoAccordionComponent {

	state = {
		accordionContainer: null,
		openedSection: null,
	}

	constructor(accordionContainerQuery) {
		this.state.accordionContainer = document.querySelector(accordionContainerQuery);
	}

	init({
		defaultSection
	} = {
		defaultSection:null
	}) {





		this.state.accordionContainer.querySelectorAll('.accordion-button').forEach(btn => {

			const section = btn.getAttribute('jo-section');

			if(defaultSection!=section){
				this.collapseSection(section);
			}else{
				this.expandSection(section);
			}
			

			btn.addEventListener('click', (e) => {
				// debugger;
				// const section = e.target.getAttribute('jo-section');
				const prevSection = this.state.openedSection;

				if (prevSection) {
					this.collapseSection(prevSection); // null on collapse
				}
				
				if (section !== prevSection) {
					//section is newer than previous section
					this.expandSection(section);
				}

			});

		});
	}



	collapseSection(section) {
		//button
		// aria-expanded="false" 
		// class="accordion-button text-dark bg-white border-0 collapsed" 
		const button = this.state.accordionContainer.querySelector(`.accordion-button[jo-section="${section}"]`);

		//component
		// class="accordion-collapse collapse"
		//aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample" jo-section="one"
		//accordion-collapse collapse

		const accordion = this.state.accordionContainer.querySelector(`.accordion-collapse[jo-section="${section}"]`);


		button.classList.add('collapsed');
		button.setAttribute('aria-expanded', "false");
		accordion.classList.remove('show');


		//remove opened section bcoz opened one is not opened.
		this.state.openedSection = null;

	}
	expandSection(section) {
		//button
		// aria-expanded="true" 
		// class="accordion-button text-dark bg-white border-0" 

		const button = this.state.accordionContainer.querySelector(`.accordion-button[jo-section="${section}"]`);


		//component
		// class="accordion-collapse collapse"
		//aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample" jo-section="one"
		// accordion-collapse collapse show
		const accordion = this.state.accordionContainer.querySelector(`.accordion-collapse[jo-section="${section}"]`);



		button.classList.remove('collapsed');
		button.setAttribute('aria-expanded', "true");
		accordion.classList.add('show');

		this.state.openedSection = section;

	}


}




//////////////////////////////////////////////////////////////////////////////////////////
// util functions...
//////////////////////////////////////////////////////////////////////////////////////////

function getCookieOLD() {
	let cookie_array = document.cookie.split("; ");
	//   let multi_data_array = [];
	let multi_data_obj = {};
	cookie_array.forEach((e) => {
		let data = e.split("=");
		multi_data_obj[data[0]] = data[1];
		// console.log(multi_data_obj)
	});
	return multi_data_obj;
}

let open_modal = (node, display = "d-block") => {
	if (node.classList.contains("d-none")) {
		node.classList.remove("d-none");
		node.classList.add(display);
	}
	document.body.style.overflow = "hidden";
};
let close_modal = (node, display = "d-block") => {
	if (node.classList.contains(display)) {
		node.classList.remove(display);
		node.classList.add("d-none");
	}

	document.body.style.overflow = "scroll";
};
var callback = function (id, msgArr) {
	// alert(id + msgArr);
};

function getCookie(cname) {
	let name = cname + "=";
	let decodedCookie = decodeURIComponent(document.cookie);
	let ca = decodedCookie.split(";");
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == " ") {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

function check_validation(id_name, tooltip = false) {
	formError = {};

	if (
		!app
			.locateService(FormValidator)
			.validate(`#${id_name}`, formError, callback)
	) {
		// reset first
		document.querySelectorAll(".invalid-feedback").forEach((element) => {
			element.classList.add("d-none");
			element.style.display = "none";
			element.previousElementSibling.style.border = "1px solid #EAEAEA";
		});

		for (const key in formError) {
			let ul = "<ul>";

			for (let i = 0; i < formError[key].length; i++) {
				ul += `<li> ${formError[key][i]} </li>`;
			}
			ul += "</ul>";

			let input_elm = document.getElementById(`${key}`);
			//input_elm.style.border = "1px solid red";
			let temp_elm = document.getElementById(`${key}`).nextElementSibling;
			// console.log(temp_elm);
			temp_elm.innerHTML = ul;
			// return;
			if (tooltip) {
				// temp_elm.classList.remove('d-none');
				// temp_elm.style.display = "block";
				temp_elm.classList.remove("d-none");
				temp_elm.style.display = "block";
			}
			// temp_elm.classList.remove('d-none');
			// temp_elm.style.display = "block";

			// document.getElementById(key).addEventListener('focus', () => {
			//     // temp_elm.classList.remove('d-none');
			//     temp_elm.classList.remove('d-none');
			//     temp_elm.style.display = "block";
			//     // some.classList.add('first');
			// })
		}

		return false;
	} else {
		document.querySelectorAll(".invalid-feedback").forEach((element) => {
			element.classList.add("d-none");
			element.style.display = "none";
			//element.previousElementSibling.style.border = "1px solid green";
		});
		// document.querySelectorAll(".invalid-feedback").classList.add('d-none');
		// document.querySelectorAll(".invalid-feedback").style.display = 'none';
		return true;
	}
}

function customTimeFormat24Hours(timeString) {
	// const timeString = '07:27:47.089863';
	let timeParts = timeString.split(":");
	let hours = parseInt(timeParts[0]);
	let minutes = parseInt(timeParts[1]);
	let time24Hours =
		hours.toString().padStart(2, "0") +
		":" +
		minutes.toString().padStart(2, "0");
	return time24Hours;
	// console.log(time24Hours);
}
function customTimeFormat12Hours(timeString) {
	let dateObj = new Date(`2000-01-01T${timeString}Z`);
	let formattedTime = dateObj.toLocaleString("en-US", {
		hour: "numeric",
		minute: "numeric",
		second: "numeric",
		hour12: true,
	});
	// console.log(formattedTime);
	return formattedTime;
}


function ExportToExcel(table_id,file_name) {
	
	let type= "xlsx";

	// var elt = document.getElementById(table_id);
	// var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
	// return dl ?
	//   XLSX.write(wb, { bookType: type, bookSST: true, type: 'base64' }):
	//   XLSX.writeFile(wb, fn || ('MySheetName.' + (type || 'xlsx')));

	  var data = document.getElementById(table_id);
	  var excelFile = XLSX.utils.table_to_book(data, {sheet: "sheet1"});
	//   XLSX.write(excelFile, { bookType: type, bookSST: true, type: 'base64' });
	  XLSX.writeFile(excelFile, file_name.replaceAll(" ", "_") + "_" + new Date().toLocaleDateString() + "." + type);
 }

$('.modal').on('shown.bs.modal', function () {
	$(this).find('[autofocus]').focus();
});



