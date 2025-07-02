"use strict";

/* TWO GLOBALS */
var app = null;
var page = null;
var tdd = null;
var sdd = null;

class Interface extends Object {
	constructor(args) {
		super(args);
		this.me = this;
	}
}

class Class extends Interface {


	constructor(args = {}) {
		super(args);
		this.dep = {};
		this.state = {};
		this.stateListeners = [];
		this.hotState = null;
	}


	async uponReady() {
		//debugger;

		this.addStateListener(this.stateScatterHandler.bind(this));

		const inputs = document.querySelectorAll(`${this.id} [data-state]`);
		inputs.forEach(input => {
			input.addEventListener('input', /* this is async, calling in async mode */ this.stateGatherHandlerAsync.bind(this));
		});
	}


	async $copyToClipboard(html) {

		// --- Helper function for the legacy execCommand method ---
		function _copyHtmlUsingExecCommand(htmlToCopy) {
			const container = document.createElement('div');
			container.style.position = 'fixed';
			container.style.left = '-9999px'; // Position off-screen
			container.style.opacity = '0';
			container.innerHTML = htmlToCopy;
			document.body.appendChild(container);

			let success = false;
			try {
				const range = document.createRange();
				range.selectNodeContents(container);
				const selection = window.getSelection();
				if (!selection) {
					// Handle case where getSelection might return null (though rare in modern browsers)
					throw new Error("window.getSelection() returned null");
				}
				selection.removeAllRanges();
				selection.addRange(range);

				// Execute the copy command
				success = document.execCommand('copy');
				if (!success) {
					console.warn('execCommand("copy") returned false.');
				}
			} catch (err) {
				console.error('Error during execCommand:', err);
				success = false;
			} finally {
				// Clean up: Remove selection and temporary element
				if (window.getSelection) {
					window.getSelection().removeAllRanges();
				}
				document.body.removeChild(container);
			}
			return success;
		}
		// --- End of helper function ---

		let modernApiFailed = false;

		// 1. Try the Modern Clipboard API
		if (navigator.clipboard && navigator.clipboard.write) {
			try {
				const blobHtml = new Blob([html], { type: 'text/html' });
				const blobText = new Blob([html], { type: 'text/plain' }); // Plain text fallback
				const data = new ClipboardItem({
					'text/html': blobHtml,
					'text/plain': blobText,
				});

				await navigator.clipboard.write([data]);
				console.log('HTML copied successfully using Clipboard API.');
				alert('Copied to Clipboard. Paste manually.');

				return; // SUCCESS - Promise resolves here

			} catch (err) {
				console.warn('Clipboard API write failed. Will attempt fallback.', err);
				modernApiFailed = true; // Mark for fallback attempt
			}
		} else {
			console.warn('Clipboard API (write) not supported. Will attempt fallback.');
			modernApiFailed = true; // Mark for fallback attempt
		}

		// 2. Attempt Fallback if Modern API was unavailable or failed
		if (modernApiFailed) {
			console.log('Attempting fallback using legacy execCommand...');
			if (_copyHtmlUsingExecCommand(html)) {
				console.log('HTML copied successfully using execCommand fallback.');
				return; // SUCCESS - Promise resolves here
			} else {
				console.error('execCommand fallback method also failed.');
				// Both methods failed, reject the promise.
				throw new Error('Could not copy HTML using any available method.');
			}
		}
	}


	addStateListener(listener) {
		this.stateListeners.push(listener);
	}

	removeStateListener(listener) {
		delete this.stateListeners[listener];
	}

	notifyStateListeners(propertyPath, propertyValue) {
		this.stateListeners.forEach(listener => listener(propertyPath, propertyValue));
	}

	notifyState(key = null) {
		// Update UI elements based on the state
		if (!(key === null || key === undefined)) {
			this.notifyStateListeners(key, this.state[this.hotState][key]);

			return;
		}

		for (const key in this.state[this.hotState]) {
			if (this.state[this.hotState].hasOwnProperty(key)) {
				this.notifyStateListeners(key, this.state[this.hotState][key]);
			}
		}

	}

	setHotState(hotState) {
		this.hotState = hotState;
	}

	setState(state) {

		this.state = state;


		this.notifyState();

	}

	setStateKeyValue(key, value) {
		this.state[this.hotState][key] = value;


		this.notifyState(key);

	}


	stateScatterHandler__OBSOLETE(propertyPath, propertyValue) {
		//debugger;

		const elements = document.querySelectorAll(`${this.id} [data-state="${propertyPath}"]`);
		elements.forEach(element => {
			if (["input", "textarea", "select", "button"].includes(element.tagName.toLowerCase())) {
				element.value = propertyValue;
			}
			else {
				element.textContent = propertyValue;
			}
		});
	}

	stateScatterHandler(propertyPath, propertyValue) {
		//debugger;

		// Find all elements linked to this state property
		const elements = document.querySelectorAll(`${this.id} [data-state="${propertyPath}"]`);

		elements.forEach(element => {
			const tagName = element.tagName.toLowerCase();

			// Check the element type to determine how to set the value
			if (tagName === 'input') {
				// Special handling for input types
				if (element.type === 'checkbox') {
					// For checkboxes, set the 'checked' property using the boolean state value
					element.checked = !!propertyValue; // Use !! to ensure it's a boolean
				}
				// Optional: Special handling for radio buttons
				// If propertyValue is the *value* of the selected radio in the group
                // else if (element.type === 'radio') {
                //     // Set checked to true only for the radio button whose value matches the state value
                //     element.checked = (element.value === propertyValue);
                // }
				else {
					// For other input types (text, number, password, etc.), set the 'value' property
					element.value = propertyValue;
				}
			} else if (tagName === 'textarea' || tagName === 'select') {
				// For textareas and selects, set the 'value' property
				element.value = propertyValue;
			}
            // The original code included button using value. Let's keep this pattern
            // although textContent is often used for button labels showing state.
            else if (tagName === 'button') {
                 element.value = propertyValue;
            }
			else {
				// For other elements (like div, span, p), set textContent
				element.textContent = propertyValue;
			}
		});
	}

	async stateGatherHandlerAsync__OBSOLETE(event) {
		//debugger;

		const element = event.target;
		const propertyPath = element.dataset.state;

		let propertyValue = null;
		if (["input", "textarea", "select", "button"].includes(element.tagName.toLowerCase())) {
			propertyValue = element.value;
		}
		else {
			propertyValue = element.textContent;
		}


		//this.setState(propertyPath, propertyValue, this.hotState);
		this.state[this.hotState][propertyPath] = propertyValue;
		this.notifyStateListeners(propertyPath, this.state[this.hotState][propertyPath]);


	}


	async stateGatherHandlerAsync(event) {
		//debugger;

		const element = event.target;
		const propertyPath = element.dataset.state;

		let propertyValue = null;

		// Check element type to get the correct value/state
		if (element.tagName.toLowerCase() === 'input') {
			// Special handling for checkboxes
			if (element.type === 'checkbox') {
				propertyValue = element.checked; // Use the 'checked' boolean property
			}
			// Optional: Special handling for radio buttons (often store the value of the *checked* one)
			// else if (element.type === 'radio') {
			//    if (element.checked) {
			//        propertyValue = element.value; // Store the value of the selected radio
			//    } else {
			//        // If this radio is unchecked, you might need logic here depending on how
			//        // you represent radio groups in your state. If propertyPath is the group name,
			//        // you'd typically find the *currently checked* radio in the group and use its value.
			//        // For a simple handler per element, you might just skip updating if it's an unchecked radio.
			//        // Or perhaps set propertyValue to undefined/null? Depends on your state structure.
			//        // Let's stick to the simplest fix for now, focusing on checkbox.
			//    }
			// }
            // Default for other input types (text, number, password, etc.)
			else {
				propertyValue = element.value; // Use the 'value' property
			}
		}
		// Handle other form elements
		else if (["textarea", "select"].includes(element.tagName.toLowerCase())) {
			propertyValue = element.value; // Use the 'value' property
		}
        // Handle buttons (original code included button value, which is less common)
        // You might want textContent for the label, or perhaps button clicks trigger a different action.
        // Sticking to original pattern using value for now, though likely less useful.
        else if (element.tagName.toLowerCase() === 'button') {
             propertyValue = element.value;
        }
		// For other elements (like div, span, p) you might want textContent
		else {
			propertyValue = element.textContent;
		}


		// Update state - Note: This direct assignment assumes propertyPath is a top-level key
        // on this.state[this.hotState]. If propertyPath can be nested (e.g., "user.address.city"),
        // you'll need a helper function to safely set the nested property.
        // The commented-out line `this.setState(propertyPath, propertyValue, this.hotState);`
        // suggests you might already have such a helper. If so, use that instead!
		this.state[this.hotState][propertyPath] = propertyValue;

		this.notifyStateListeners(propertyPath, this.state[this.hotState][propertyPath]);
	}



	isAsync(fn) {
		return fn.constructor.name === 'AsyncFunction';
	}

	async call(fn, ...args) {
		if (isAsync(fn)) {
			return await fn(...args);
		}
		else {
			return fn(...args);
		}
	}


	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// DbC (Design by Contract)

	assert(condition, violationMessage) {

		if (!condition) {
			violationMessage = violationMessage || "Assertion failed";
			if (typeof Error !== "undefined") {
				throw new Error(violationMessage);
			}
			throw violationMessage; // Fallback
		}
		else {
			return condition
		}
	}


	_assertAll(conditionAndViolationMessageArray) {
		for (let i = 0; i < conditionAndViolationMessageArray.length; i += 2) {
			//alert("User " + data[key] + " is #" + key); // "User john is #234"
			this.assert((conditionAndViolationMessageArray[i]), conditionAndViolationMessageArray[i + 1]);
		}
	}

	dbcPrecondition(args = []) {
		this._assertAll(args);
	}

	dbcCondition(args = []) {
		this._assertAll(args);
	}

	dbcPostcondition(args = []) {
		this._assertAll(args);
	}

	dbcRequire(args = []) {
		this._assertAll(args);
	}

	dbcEnsure(args = []) {
		this._assertAll(args);
	}

	dbcInvariant(args = []) {
		this._assertAll(args);
	}

	// /DbC (Design by Contract)
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


	test__WHY_HERE(condition, description) {
		let ret = {};
		if (condition) {
			ret.desciption = description + ": PASSED\n";
			ret.result = true;
		}
		else {
			ret.desciption = description + ": FAILED\n";
			ret.result = false;
		}
		console.trace(ret);
		return ret;
	}

	dealy(ms) {
		return new Promise(resolve => {
			setTimeout(() => {
				resolve('resolved');
			}, ms);
		});
	}

	sleep(ms) {
		return delay(ms)
	}

	throwAlert(title = "", msg = "") {
		throw new Error(title.length > 0 ? title + "\n" + msg : msg);
	}


	getCookie(name) {
		// Get all cookies in a single string

		let cookieArr = document.cookie.split(";");

		// Loop through the array of cookies
		for (let i = 0; i < cookieArr.length; i++) {
			let cookiePair = cookieArr[i].split("=");

			// Removing whitespace at the beginning of the cookie name and compare it with the given string
			if (name == cookiePair[0].trim()) {
				// Decode the cookie value and return it
				return decodeURIComponent(cookiePair[1]);
			}
		}

		// Return null if the cookie is not found
		return null;
	}

	//the from is additional and added by H. Bappi. here we will use to check current activity or current screen from where the data is comming..........
	async fetch(urlPath, payload = {}, method = "POST") {
		// console.log(`FETCH REQ: ${method} ${urlPath} from ${from} Screen.`);
		//    console.log(
		//   "  PAYLOAD: " + JSON.stringify(payload) 
		// );

		let fetched;
		if (payload instanceof FormData) {
			fetched = await fetch(urlPath, {
				credentials: "include",
				method: "POST",
				body: payload,
			});

			// console.log("fetched for:"+urlPath+" is: ", await fetched.text() )
			;
		} else {
			let sPayload = JSON.stringify(payload);
			//alert(sPayload);

			fetched = await fetch(urlPath, {
				//
				credentials: "include",
				//
				method: method,
				headers: {
					"Content-Type": "application/json",
				},

				body: sPayload,
			});
		}


		// debugger;

		if (fetched.status == 413) {

			this.throwAlert("Error", "File size too large.");
		}
		if (fetched.status == 404) {
			this.throwAlert("Error", "URL Not Found: " + method + " " + urlPath);
			//throw "";
		}

		if (fetched.status == 500) {
			//      console.log("error ==============================");
			//      console.log(fetched.body);

			//      console.log("error =====================================");
			let data = await fetched.text();

			this.throwAlert("Error", "Internal Server Error: " + method + " " + urlPath + "\n" + data);
			//throw "";
		}

		/* CAUSED SIDEEFFECTS
		if (!fetched.ok) {
		  this.throwAlert(
			"",
			"Something went wrong on the backend with the request: " +
			method +
			" " +
			urlPath
		  );
		  //throw "";
		}
		*/

		let data = await fetched.json();
		//alert(JSON.stringify(data));
		//console.log(`  END REQ: ${method} ${urlPath}`);
		//console.log(' RESPONSE: ' + JSON.stringify(data).length + " bytes.");


		// console.log(
		//   " RESPONSE: " + JSON.stringify(data) + " from : " + from + " Screen"
		// );

		if (!data) {
			throw "No usable data found";
		}

		if (data.error || data.error_message) {
			this.throwAlert("Error", this.extractGracefulError(data.error_message));
			// this.throwAlert("",data.error);
			//throw data.error;
		}

		if (data.assert_msg) {
			this.throwAlert("Error", data.assert_msg);
			//throw data.assert_msg;
		}

		if (data.__db_error__) {
			this.throwAlert("Error", this.extractGracefulError(data.__db_error__.error || data.__db_error__.internalQuery));
			// this.throwAlert("",data.error);
			//throw data.error;
		}
		if (data.__db_error__) {
			this.throwAlert("Error", this.extractGracefulError(data.__db_error__.error || data.__db_error__.internalQuery));
			// this.throwAlert("",data.error);
			//throw data.error;
		}

		return data;
	}


	async fetchDbApi(url, payload) {
		//debugger;
		let data = await this.fetch(url, payload);
		return data;
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

	populateTableMightNeedMod(tableIdentifier, data, offsetField, offsetState) {
		const table = document.querySelector(tableIdentifier);
		const tableHead = table.querySelector("thead");
		const tableHeadCells = tableHead.querySelectorAll("th");
		const tableBody = table.querySelector("tbody");
		const fieldNames = [];

		tableBody.innerHTML = "";
		tableHeadCells.forEach((cell) => {
			fieldNames.push(cell.getAttribute("data-state"));
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


	async xpopulateComboMightNeedMod(fetchUrl, payload, elSelect, k, v, defaultValue = null) {
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

		let selectItems = elSelect.innerHTML;

		// TYPEOF NULL IS "OBJECT" if(typeof defaultValue === "object"){

		if (defaultValue && typeof defaultValue === "object") {
			selectItems = Object.keys(defaultValue).map((key) => `<option value="${key}">${defaultValue[key]}</option>`).join("");
		}

		for (let i = 0; i < data.length; i++) {
			let e = data[i];
			let each_item = `<option value="${e[k]}">${e[v]}</option>`;
			// elSelect.innerHTML += each_item;
			selectItems += each_item;
		}

		elSelect.innerHTML = selectItems;

	}

	async populateCombo(/*xfetchUrl, xpayload, */selector, data = {}, k, v, selectedValue = null) {
		let selectItems = "";
		let defaultItem = `<option value="0" selected>(Please, Select)</option>`;

		let isSelected = false;
		for (let i = 0; i < data.length; i++) {
			let e = data[i];
			if (selectedValue === e[k]) {
				isSelected = true;
			}
			let each_item = `<option value="${e[k]}" ${selectedValue === e[k] ? " selected " : " "}>${e[v]}</option>`;
			// elSelect.innerHTML += each_item;
			selectItems += each_item;

		}

		if (!isSelected) {
			selectItems = (defaultItem + selectItems);

		}

		//document.getElementById(elSelectId).innerHTML = selectItems;
		const elements = document.querySelectorAll(selector);
		elements.forEach(element => {
			element.innerHTML = selectItems;
		});
	}



	populatePageFieldsMightNeedMod(data) {
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
					//					console.log("SPAN added");
					break;
				case el.nodeName == "TD":
					el.textContent = data[k];
					//					console.log("TD added");
					break;
				case el.nodeName == "A":

					//el.href = (data[k] ? data[k] : "#") ;  //PENDING:EKN + "?" (new Date()).getTime();

					// NOT WORKING
					var href = (data[k] ? data[k] : "#");
					href += ((href.includes('?') ? "&" : "?") + "timestamp=" + (new Date()).getTime());
					el.href = href;
					//					console.log(href);
					// /NOT WORKING



					data[k] ? null : el.removeAttribute("download");
					//					console.log("A added");
					break;
				case el.type == "checkbox":
					el.checked = data[k];
					//					console.log("checkbox populated");
					break;
				default:
					el.value = data[k];
					//					console.log("input populated");
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



	getElement(selector, parent = document) {

		// document.querySelector('[data-parent-com="root#_#components/deep-testing/Test"]  button')

		return parent.querySelector(
			`${selector}`);

		return document.querySelector(
			`${this.getQuery()} ${selector}`);
	}

	getElements(selector, parent = document) {

		// document.querySelector('[data-parent-com="root#_#components/deep-testing/Test"]  button')

		return parent.querySelectorAll(
			`${selector}`);

		return document.querySelectorAll(
			`${this.getQuery()} ${selector}`);
	}

	getQuery() {
		let qry = '';

		let key = this.props["data-key"];

		if (this.scope) {
			qry += `[data-parent-com="${this.scope}"]`;
		}

		if (this.ns) {
			qry += `[com="${this.ns}"]`;

		}

		if (key) {
			qry += `[data-key="${key}"]`;
		}


		return qry;

		// return `${this.scope
		//   ? `[data-parent-com="${this.scope}"]`
		//   : ''
		//   }[com="${this.ns}"]${this.props["data-key"]
		//     ? `[data-key="${this.props["data-key"]}"]`
		//     : ''}`;
	}


	getElementByKey(key) {

		// document.querySelector('[data-parent-com="root#_#components/deep-testing/Test"]  button')

		return document.querySelector(
			`${this.getQuery()} [data-key="${key}"]`);
	}

	getElementsByKey(key) {
		// document.querySelector('[data-parent-com="root#_#components/deep-testing/Test"]  button')
		return document.querySelectorAll(`${this.getQuery()} [data-key="${key}"]`);
	}


	validateObject(inObj, ruleset, raiseException = true) {
		const retVal = {};

		for (const field in ruleset) {
			const value = inObj[field];
			if (!value) {
				console.error(`Field "${field}" missing in params`);

				this.throwAlert("ERROR", `Field "${field}" missing in params`);
				return;
			}

			const rules = ruleset[field];


			for (const rule of rules.split(';')) {
				const [attr, attrVal] = rule.trim().split('=');

				if (!retVal[field]) {
					retVal[field] = [];
				}

				switch (attr.toLowerCase()) {
					case 'case':
						switch (attrVal.toLowerCase()) {
							case 'lower':
								if (value !== value.toLowerCase()) {
									retVal[field].push(`Value must be in lower case letters.`);
								}
								break;
							case 'upper':
								if (value !== value.toUpperCase()) {
									retVal[field].push(`Value must be in upper case letters.`);
								}
								break;
							default:
								throw new Error(`Unknown Case Value: case=${attrVal}`);
						}
						break;
					case 'required':
						if (!value) {
							retVal[field].push(`Value Required.`);
							if (raiseException) {
								throw new Error(`Value required for ${field}`);
							}
						}
						break;
					case 'minval':
						if (Number(value) < Number(attrVal)) {
							retVal[field].push(`Value must be >= ${attrVal}`);
							if (raiseException) {
								throw new Error(`Minimum value for ${field} is ${attrVal}`);
							}
						}
						break;
					case 'maxval':
						if (Number(value) > Number(attrVal)) {
							retVal[field].push(`Value must be <= ${attrVal}`);
							if (raiseException) {
								throw new Error(`Maximum value for ${field} is ${attrVal}`);
							}
						}
						break;
					case 'minlen':
						if (value.length < Number(attrVal)) {
							retVal[field].push(`Length must be >= ${attrVal}`);
							if (raiseException) {
								throw new Error(`Minimum length for ${field} is ${attrVal}`);
							}
						}
						break;
					case 'maxlen':
						if (value.length > Number(attrVal)) {
							retVal[field].push(`Length must be <= ${attrVal}`);
							if (raiseException) {
								throw new Error(`Maximum Length for ${field} is ${attrVal}`);
							}
						}
						break;
					case 'email':
						if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
							retVal[field].push(`Value must be a valid email address.`);
							if (raiseException) {
								throw new Error(`Invalid email format for ${field}`);
							}
						}
						break;
					case 'daterange':
						const [startDate, endDate] = attrVal.split(',');
						if (!(new Date(value) >= new Date(startDate) && new Date(value) <= new Date(endDate))) {
							retVal[field].push(`Date must be between ${startDate} and ${endDate}`);
							if (raiseException) {
								throw new Error(`Date out of range for ${field}`);
							}
						}
						break;
					case 'regex':
						if (!new RegExp(attrVal).test(value)) {
							retVal[field].push(`Value must match the pattern ${attrVal}`);
							if (raiseException) {
								throw new Error(`Value does not match pattern for ${field}`);
							}
						}
						break;
					default:
						throw new Error(`Unknown Validation Attribute=Value: ${attr}=${attrVal}`);
				}
			}
		}

		return retVal;
	}

	validateForm(frmId) {
		let formError = {};
		let isOkay = this.formValidator.validate(`#${frmId}`, formError);
		//this.assert((ret), JSON.stringify(formError));

		//debugger;
		if (!isOkay) {
			for (const fieldName in formError) {
				const errorMessages = formError[fieldName];
				window[fieldName].classList.remove('is-invalid');
				if (errorMessages.length > 0) {
					window[fieldName].classList.add('is-invalid');
				}
			}

		}
		return isOkay;
	}


	dispatchCustomEvent(source, eventName, options) {
		const myEvent = new CustomEvent(eventName, {
			detail: {
				...options.detail

			},
			cancelable: options.cancelable || true,
			bubbles: options.bubbles || true
		});

		source.dispatchEvent(myEvent);
	}

	tx(source, eventName, options) {
		this.dispatchCustomEvent(source, eventName, options);
	}

	addCustomEventListener(target, eventName, handlerMethod) {
		var me = this; //Tricky! Very Tricky!!

		target.addEventListener(eventName, async function (event) {
			if (event.cancelable) event.preventDefault();
			if (!event.bubbles) event.stopPropagation();

			await handlerMethod.call(me, event.detail);
		});
	}

	txrx(target, eventName, handlerMethod) {
		this.addCustomEventListener(target, eventName, handlerMethod);
	}


	zaddEventListener(target, eventName, handlerMethod, options = { cancelable: true, bubbles: true }) {
		var me = this; //Tricky! Very Tricky!!
		if (typeof target === 'object' && !(target instanceof Array)) {

			target.addEventListener(eventName, async function (eventArg) {
				if (options.cancelable) eventArg.preventDefault();
				if (!options.bubbles) eventArg.stopPropagation();

				await handlerMethod.call(me, eventArg);
			});

		}
		else if (Array.isArray(target) && typeof target[0] === 'object') {
			Array.prototype.forEach.call(target, function (el) {
				el.addEventListener(eventName, async function (eventArg) {
					if (options.cancelable) eventArg.preventDefault();
					if (!options.bubbles) eventArg.stopPropagation();

					await handlerMethod.call(me, eventArg);
				});

			});

		}
		else if (typeof target === 'string') {
			const elList = document.querySelectorAll(target);

			/*
			for (let i = 0; i < elList.length; i++) {
			  elList[i].addEventListener(eventName, handlerMethod.call(me, eventArg);
			}
			*/

			Array.prototype.forEach.call(elList, function (el) {
				el.addEventListener(eventName, async function (eventArg) {
					if (options.cancelable) eventArg.preventDefault();
					if (!options.bubbles) eventArg.stopPropagation();

					await handlerMethod.call(me, eventArg);
				});

			});

		}
		else {
			this.throwAlert("Error", "Invalid Selector");
		}
	}

	onAll(selector, eventName, handlerMethod) {

		// document.querySelector(selector)
		// .removeEventListener(eventName, handlerMethod, false);

		document.querySelectorAll(selector)
			.forEach(el => {
				el.addEventListener(eventName, handlerMethod, false);
			});

	}

	getFlatData(data) {

		// console.log('getting flat data for: ', data);

		let flatData = {};

		Object.keys(data).forEach(key => {
			const value = data[key];
			if (value && typeof value === 'object' && !Array.isArray(value)) {

				//recursive 
				try {

					flatData = {
						...flatData,
						...this.getFlatData(value)
					};


				} catch (e) {
					//          console.log('failed convert to flatData: ', value, key, data);
				}

			}

			// add the value even if it is object
			//TODO: will modify later accordingly
			flatData[key] = data[key];

		});

		return flatData;
	}


	alertEx(title = "", msg) {
		alert(title.length > 0 ? title + "\n\n" + msg : msg);

	}

	populateValueToElement(value, element, removeDNoneClass) {

		// console.log('populate vlue to element: : ', value, element);

		//return if no element found
		if (!element) return;

		//element found. populate value

		if (removeDNoneClass) element.classList.remove('d-none');

		if (
			element.tagName === 'INPUT'
			|| element.tagName === "SELECT"
		) {
			if (element.type === 'checkbox') {
				element.checked = !!value;
				return;
			}

			element.value = value;
			return;
		}


		if (element.tagName === 'IMG') {
			element.setAttribute('src', `/_media/${value}`);
			element.outerHTML = element.outerHTML;
			return;
		}

		if (element.tagName === 'A') {
			element.href = value;
			return;
		}

		element.innerHTML = value;

	}

	populateListField(listParentEl, listItemEl, data, removeDNoneClass) {

		const nle = listItemEl.cloneNode();
		//required
		nle.innerHTML = listItemEl.innerHTML;

		// listItemEl.remove();

		listParentEl.appendChild(nle);
		nle.classList.remove('d-none');

		if (typeof data !== 'object') {
			this.populateValueToElement(data, nle);
			return;
		}

		this.populateField(data, removeDNoneClass, nle, true);

	}

	populateField(data, removeDNoneClass, parent = document, isList = false) {

		const flatData = this.getFlatData(data);

		//    console.log('flat data: ', flatData);

		Object.keys(flatData).forEach(key => {

			const value = flatData[key];

			if (Array.isArray(value)) {
				//is array. we can loop and insert...

				this.getElements(`[data-list-field="${key}"]`, parent)
					.forEach(list => {

						// console.log('list : ', list);

						// if (!list) return; // no list to manipulate

						const listItem = this.getElement('[data-list-item]', list);

						list.innerHTML = '';
						list.appendChild(listItem);

						// no list item specified 
						if (!listItem) return;

						value.forEach(listVal => {
							this.populateListField(list, listItem, listVal, removeDNoneClass);
						});


					});

				// console.log('spadiv-tba/View.js > populateField:: todo:: array, loop and insert ')
				return;
			}

			this.getElements(`[${isList ? 'data-list-item-field' : 'data-state'}="${key}"]`, parent)
				.forEach(
					element =>
						this.populateValueToElement(value, element, removeDNoneClass));

		});
	}



}






class Service extends Class {
	constructor(config) {
		super();
	}

	async uponReady() {
		await super.uponReady();

	}
}

class ServiceManager extends Class {
	constructor(config) {
		super();
	}

	async uponReady() {
		await super.uponReady();

	}
}



class WebApplication extends Class {
	constructor(page) {
		super();
		this.app = app;
		this.page = page;
		this.services = {};
		this.tdd = tdd;
		this.sdd = sdd;

	}



	dealy(ms) {
		return new Promise(resolve => {
			setTimeout(() => {
				resolve('resolved');
			}, ms);
		});
	}

	locateService(svc) {
		//debugger;
		var s = this.services[svc.name].instance;
		return s;
	}

	setPageInstance(webPage) {
		this.page = webPage;
		return this;
	}

	serviceClassAdd(serviceClass, ...args) {
		let svc = serviceClass.name;
		this.services[svc] = {};
		this.services[svc].instance = new serviceClass(...args);
		return this;
	}

	serviceInstanceAdd(serviceClassName, serviceInstance) {
		this.services[serviceClassName] = {};
		this.services[serviceClassName].instance = serviceInstance;
		return this;
	}

	// FIX_IT: it doesn't work
	xservicesAdd(serviceDict) {
		for (const [key, value] of Object.entries(serviceDict)) {
			this.serviceClassAdd(key, value);
		}
		return this;
	}

	alert(msg) {
		alert(msg);
	}

	async uponReady() {
		await super.uponReady();

		// ekn
		this.tdd = tdd;
		this.sdd = sdd;

		// /ekn

		/*
		try {
			this.page.uponReady();
		}
		catch(err) {
			alert(err.message);
		}		
		*/
		// Web Component Object Model Disabled
		//debugger;
		if (this.page instanceof AppPage) {
			await this
				//.setPageInstance (page)
				.page
				.uponReady()
				;

		}

		if (this.tdd instanceof Tdd) {
			await this
				//.setPageInstance (page)
				.tdd
				.uponReady()
				;

		}


		if (this.sdd instanceof Sdd) {
			await this
				//.setPageInstance (page)
				.sdd
				.uponReady()
				;

		}

		return this;
	}

	xon(selector, eventName, handlerMethod) {
		var me = this; //Tricky! Very Tricky!!
		const elList = document.querySelectorAll(selector);

		/*
		for (let i = 0; i < elList.length; i++) {
			elList[i].addEventListener(eventName, handlerMethod.call(me, eventArg);
		}
		*/

		Array.prototype.forEach.call(elList, function (el) {
			el.addEventListener(eventName, /*async*/ function (eventArg) {
						/*await*/ handlerMethod.call(me, eventArg);
			});

		});

	}

	xoff(selector, eventName, eventHandler, useCapture) {
		var element = document.querySelectorAll(selector);

		Array.prototype.forEach.call(element, function (el) {
			el.removeEventListener(eventName, eventHandler, useCapture);
		});
	}

	offOn(selector, eventName, eventHandler, useCapture) {
		this.off(selector, eventName, eventHandler, useCapture);
		this.on(selector, eventName, eventHandler);
	}



}




//
// /WEB COMPONENT OBJECT MODEL
// ////////////////////////////////////////////////////////


// /////////////////////////////////////////////////////////////////////////////////////////////////////////////// //

class FormValidator extends Service {
	constructor(config) {
		super();
		this.fieldValidator = new FieldValidator();
		this.config = config;
	}
	async uponReady() {
		await super.uponReady();

	}

	validate(formSelector, formError, cb) {

		let foundErr = false;  //added to test single el validatio only

		var ret = true;
		let me = this.me;
		$(formSelector).find("[data-validation]").each(function () {
			if (foundErr) return;  //added to test single el validatio only

			var $field = $(this);
			var fieldErrorRef = { fieldError: [] };
			me.fieldValidator.validate($field, fieldErrorRef);
			if (fieldErrorRef.fieldError.length > 0) {

				foundErr = true; //added to test single el validatio only

				// $field.addClass("border-danger");
				cb($field.attr('id'), fieldErrorRef.fieldError);

				formError[$field.attr('id')] = fieldErrorRef.fieldError.concat(); //????
				ret = false;
			}

		});
		//$ ('[data-toggle="tooltip"]').tooltip();
		return ret;
	}

	zvalidateIfValuedz(formSelector) {
		//var fv = new FieldValidator();
		var ret = true;
		$(formSelector).find("[data-validation]").each(function () {
			var $field = $(this);
			if ($field.attr('data-validation') !== undefined) {
				if ($field.val() == null || $field.val() == undefined || $field.val() == "") {
					return true;
				}
				else {
					if ($field.val().toString().length > 0) {
						if (!this.fieldValidator.validate($field)) {
							ret = false;
						}
					}
				}
			}
		});
		$('[data-toggle="tooltip"]').tooltip();
		return ret;
	}

	zvalidateFieldz(arr) {
		if (arr === null || typeof (arr) !== 'object' || arr.length <= 0) return false;
		var err = 0, selector;
		for (var a = 0, b = arr.length; a < b; a++) {
			selector = arr[a];
			if (selector === null || selector === undefined || !selector) { err++; continue; }
			selector = String(selector);
			if (selector.indexOf('#') < 0) {
				selector = '#' + selector;
			}
			var ins = $(selector);
			var val = ins.val();
			if (val === '' || val === undefined || val === null) { ins = undefined; continue; }
			this.zvalidateFieldSingleValuez(ins) ? 0 : err++; ins = undefined;
		}
		arr = undefined;
		return err <= 0;
	}

	zvalidateFieldSingleValuez(fieldSelector) {
		var ret = true;
		var $field = $(fieldSelector);
		if (!this.fieldValidator.validate($field)) {
			ret = false;
		}
		return ret;
	}

}

class FieldValidator extends Class {
	/**
	 * 
	 * RULES
	 *  
	 */

	constructor() {
		super();
	}

	async uponReady() {
		await super.uponReady();

	}

	validate($field, fieldErrorRef) {
		/*
		The characters ^$.?*!+-:=()[]{}|\\ must be escaped - except when then occur inside a character class.
		*/
		var _msg = "";
		var fieldError = [];
		var _$fld = $field;
		var rules = $field.attr("data-validation") || "";
		//if (rules === undefined){
		// rules = "";
		//}
		var _fldTitle = ""; //deprecated. we must remov it altogether.
		var queryStringDictionary = {};
		var queryString = rules;

		if ($field[0].type === "file") {
			return true;
		}

		if (queryString.length <= 0) {
			//_$fld.style.background = "White"; //reinforced
			return true;
		}
		var pairs = queryString.split(";");
		// Load the key/values of the return collection
		var keyValuePair, v;

		for (var i = 0; i < pairs.length; i++) {
			keyValuePair = null;
			v = null;
			keyValuePair = pairs[i].split("=");
			if (keyValuePair[0] !== undefined) {
				v = ((keyValuePair[1] === undefined) || (keyValuePair[1] === null)) ? "1" : keyValuePair[1];
			}
			queryStringDictionary[keyValuePair[0].toLowerCase().trim()] = !v ? '' : v.toLowerCase().trim();
		}

		for (var key in queryStringDictionary) {
			if ((queryStringDictionary[key] == "true") || (queryStringDictionary[key] > 0) || (queryStringDictionary[key] == "")) {
				_$fld.val(this.encodeHtmlClosures(_$fld.val()));
			}
			if (key == "required") {

				if ((queryStringDictionary[key] == "true") || (queryStringDictionary[key] > 0) || (queryStringDictionary[key] == "")) {
					this.validateRequired(queryStringDictionary[key], _$fld, fieldError);
				}
			}
			else if (key == "striphtml") {
				if ((queryStringDictionary[key] == "true") || (queryStringDictionary[key] > 0) || (queryStringDictionary[key] == "")) {
					_$fld.val(this.stripHtml(_$fld.val()));
				}
			}
			else if (key == "sanitizehtml") {
				throw "Not Implemented.";
			}
		}

		//if (_$fld.val() && _$fld.val().length > 0) {
		for (key in queryStringDictionary) {
			switch (key) {
				case "insertable": this.validateInsertable(queryStringDictionary[key], _$fld, fieldError); break;
				case "value": this.validateExactValue(queryStringDictionary[key], _$fld, fieldError); break;
				case "minvalue": this.validateMinValue(queryStringDictionary[key], _$fld, fieldError); break;
				case "maxvalue": this.validateMaxValue(queryStringDictionary[key], _$fld, fieldError); break;
				case "notvalue": this.validateNotValue(queryStringDictionary[key], _$fld, fieldError); break;
				case "length": this.validateExactLength(queryStringDictionary[key], _$fld, fieldError); break;
				case "minlength": this.validateMinLength(queryStringDictionary[key], _$fld, fieldError); break;
				case "maxlength": this.validateMaxLength(queryStringDictionary[key], _$fld, fieldError); break;
				case "notlength": this.validateNotLength(queryStringDictionary[key], _$fld, fieldError); break;
				case "datatype": this.validateDataType(queryStringDictionary[key], _$fld, fieldError); break;
			}
		}
		//}
		fieldErrorRef.fieldError = fieldError.concat(); //????
		return fieldError.length == 0 ? true : false;
	}
	/**** helper functions *********************************************************************/
	validateInsertable(val, _$fld, fieldError) {
		console.log("Implementation Pending");
		return true;
	}

	validateExactValue(val, _$fld, fieldError) {
		if (_$fld.val() != val) {
			fieldError.push(" should exactly be equal to the value of " + val.toString() + ".\r\n");
			return false;
		}
		else {
			return true;
		}
	}

	validateMinValue(val, _$fld, fieldError) {
		if (Number(_$fld.val()) < Number(val)) {
			fieldError.push(" should not be less than the minimum value of " + val.toString() + ".\r\n");
			return false;
		}
		else {
			return true;
		}
	}

	validateMaxValue(val, _$fld, fieldError) {
		if (Number(_$fld.val()) > Number(val)) {
			fieldError.push(" should not be greater than the maximum value of " + val.toString() + ".\r\n");
			return false;
		}
		return true;
	}

	validateNotValue(val, _$fld, fieldError) {
		if (Number(_$fld.val()) == Number(val)) {
			fieldError.push(" should not contain the value " + val.toString() + ".\r\n");
			return false;
		}
		return true;
	}

	validateRequired(val, _$fld, fieldError) {
		if (!_$fld.val()) {
			fieldError.push(" is a required field.\r\n");
			return false;
		}
		if (_$fld.val().length < 1) {
			fieldError.push(" is a required field.\r\n");
			return false;
		}
		return true;
	}

	validateExactLength(val, _$fld, fieldError) {
		if (_$fld.val().length != val) {
			fieldError.push(" requires an exact data length of " + val.toString() + ".\r\n");
			return false;
		}
		return true;
	}

	validateMinLength(val, _$fld, fieldError) {
		//debugger;
		if (_$fld.val().length < val) {
			fieldError.push(" should not be less than the minimum data length of " + val.toString() + ".\r\n");
			return false;
		}
		return true;
	}

	validateMaxLength(val, _$fld, fieldError) {
		//debugger;
		if (_$fld.val().length > val) {
			fieldError.push(" should not be greater than the maximum data length of " + val.toString() + ".\r\n");
			return false;
		}
		return true;
	}

	validateNotLength(val, _$fld, fieldError) {
		if (_$fld.val().length == val.length) {
			fieldError.push(" data length can not be as long as " + val.toString() + ".\r\n");
			return false;
		}
		return true;
	}

	validateDataType(val, _$fld, fieldError) {
		var msg = "";
		var ret = true;
		switch (val.toLowerCase().trim()) {
			case "email": ret = this.validateDataTypeEmail(_$fld, fieldError); break;
			case "userid": ret = this.validateDataTypeUserID(_$fld, fieldError); break;
			case "password": ret = this.validateDataTypePassword(_$fld, fieldError); break;
			case "date":
			case "datetime": ret = this.validateDataTypeDate(_$fld, fieldError); break;
			case "phone": ret = this.validateDataTypePhone(_$fld, fieldError); break;
			case "url": ret = this.validateDataTypeUrl(_$fld, fieldError); break;
			case "domain": ret = this.validateDataTypeDomain(_$fld, fieldError); break;
			case "numeric": ret = this.validateDataTypeNumeric(_$fld, fieldError); break; //if (!this.validateDataTypeNumeric (_$fld, fieldError)) { fieldError.push (" should only contain numeric values.\r\n"); } break;
			case "alphabetic": ret = this.validateDataTypeAlpha(_$fld, fieldError); break; //if (!this.validateDataTypeAlpha (_$fld, fieldError)) { fieldError.push (" should only contain alphabetic values.\r\n"); } break;
			case "alphanumeric": ret = this.validateDataTypeAlphaNumeric(_$fld, fieldError); break; //if (!this.validateDataTypeAlphaNumeric (_$fld, fieldError)) { fieldError.push (" should contain alphanumeric values.\r\n"); } break;
			//case "mixedcharacter": ret = this.validateDataTypeMixedCharacter (_$fld, fieldError); break; //if (!this.validateDataTypeMixedCharacter (_$fld, fieldError)) { fieldError.push (" should contain alphanumeric values.\r\n"); } break;
		}
		//mixedacteracter
		//if (msg.length > 0) { fieldError.push (msg); return; }
		return ret;
	}

	validateEmpty($fld, fieldError) {
		//var error = "";
		if ($fld.val().length == 0) {
			fieldError.push(" should not be left blank.\r\n");
			return false;
		}
		return true;
	}

	validateCheckBox($fld, fieldError) {
		//var error = "";
		if ($fld.is(':checked') == false) {
			fieldError.push(" can not be left unchecked.\r\n");
			return false;
		}
		return true;
	}

	validateDataTypeUserID($fld, fieldError) {
		//var error = "";
		var illegalChars = /[^A-Za-z0-9_.@]/;
		var v = $fld.val();

		if (!this.isPlainAscii(v)) {
			fieldError.push(" can not contain extended characters.\r\n");
			return false;

		}
		else if (v == "") {
			fieldError.push(" can not be left blank.\r\n");
			return false;
		}
		else if (illegalChars.test(v)) {
			fieldError.push(" should only contain letters, numbers, periods(.), @ and underscores.\r\n");
			return false;
		}
		return true;
	}

	validateDataTypePassword($fld, fieldError) {
		//var error = "";
		var illegalChars = /\W/; // allow letters, numbers, and underscores
		var v = $fld.val();
		if (!this.isPlainAscii(v)) {
			fieldError.push(" can not contain extended characters.\r\n");
			return false;
		}
		else if (v.length <= 5) {
			fieldError.push(" must be greater than 5 characters long.\r\n");
			return false;
		}
		else if (illegalChars.test(v)) {
			fieldError.push(" should only contain letters, numbers, and underscores.\r\n");
			return false;
		}
		return true;
	}

	validateDataTypeEmail($fld, fieldError) {
		//var error = "";
		var tfld = this.myTrim(" " + $fld.val()); // value of field with whitespace trimmed off
		var emailFilter = /^[^@]+@[^@.]+\.[^@]*\w\w$/;
		var illegalChars = /[\(\)\<\>\,\;\:\\\"\[\]]/;

		if ($fld.val() == "") {
			fieldError.push(" can not be left blank.\r\n");
			return false;
		}
		else if (!emailFilter.test(tfld)) { //test email for illegal characters
			fieldError.push(" should not be invalid email address.\r\n");
			return false;
		}
		else if ($fld.val().match(illegalChars)) {
			fieldError.push(" should not contain disallowed characters.\r\n");
			return false;
		}
		return true;
	}

	myTrim(str) {
		if (str.length === 0)
			return str;
		return str.replace(/^\s+|\s+$/, '');
	}

	validateDataTypeEmailV2($fld, fieldError) {
		var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
		if ($fld.val().match(emailExp)) {
			return true;
		}
		else {
			fieldError.push(" can not be invalid formatted.\r\n");
			return false;
		}
	}

	validateDataTypePhone($fld, fieldError) {
		var error = "";
		var chars = /[^0-9\-()+ ]/;

		if ($fld.val() == "") {
			fieldError.push(" can not be left blank.\r\n");
			return false;
		}
		else if (chars.test($fld.val())) {
			fieldError.push(" should only contain valid number in correct format.\r\n");
			return false;
		}
		return true;
	}

	validateDataTypeUrl($fld, fieldError) {
		var theurl = $fld.val();
		var tomatch = /^(ftp|http|https):\/\/[A-Za-z0-9\.-]{3,}\.[A-Za-z]{2,}/;

		if (tomatch.test(theurl)) {
			return true;
		}
		else {
			fieldError.push(" can not be invalid formatted.\r\n");
			return false;
		}
	}

	getDomain(uri) {
		if (!uri) return null;
		let match = uri.match(/^(?:https?:)?(?:\/\/)?([^\/\?]+)/);
		if (match === null) {
			return null;
		}
		uri = match[1];
		if (!uri) return null;
		if (uri.indexOf('//') > -1) {
			let spl = uri.split("//");
			if (spl.length >= 2) {
				uri = spl[1];
				let hl = spl[0];
				let h = hl.split(":");
				if (h === null) return false;
				let q = h[0];
				if (!q) return false;
				q = String(q).toLowerCase();
				if (q.in('https', 'http') !== true) return null;
			}
			else {
				return null;
			}
		}

		return uri;
	}

	validateDataTypeDomain($fld, fieldError) {
		var theurl = $fld.val();
		theurl = this.getDomain(theurl);
		if (theurl === null) {
			fieldError.push(" can not be invalid formatted.\r\n");
			return false;
		}
		//var tomatch = /[A-Za-z0-9\.-]{3,}/;
		if (/^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/.test(theurl)) {
			return true;
		}
		else {
			fieldError.push(" can not be invalid formatted.\r\n");
			return false;
		}
	}

	validateDataTypeDate($fld, fieldError) {
		var dteDate;
		var day, month, year;
		var strDate = $fld.val();
		var datePat = /^(\d{4})(\-)(\d{1,2})(\-)(\d{1,2})$/;
		var matchArray = strDate.match(datePat);
		if (matchArray == null) {
			fieldError.push(" should contain a YYYY-MM-DD formatted date.\r\n");
			return false;
		}
		year = matchArray[1];
		month = matchArray[3];
		month--;
		day = matchArray[5];
		dteDate = new Date(year, month, day);
		if ((day == dteDate.getDate()) && (month == dteDate.getMonth()) && (year == dteDate.getFullYear())) {
			return true;
		}
		fieldError.push(" should contain a valid date.\r\n");
		return false;
	}

	isPlainAscii(str) {
		var n = 0;
		var c = 0;
		for (n = 0; n < str.length; n++) {
			c = str.charCodeAt(n);
			if ((c < 32) || (c > 127))
				return false;
		}
		return true;
	}

	// If the length of the element's string is 0 then display helper message
	isEmpty($fld) {
		if ($fld.val().length == 0) {
			return true;
		}
		return false;
	}

	// If the element's string matches the regular expression it is all numbers
	validateDataTypeNumeric($fld, fieldError) {
		var numericExpression = /^[0-9 .]+$/;
		if ($fld.val().match(numericExpression)) {
			return true;
		}
		else {
			fieldError.push(" must be Numeric");
			return false;
		}
	}

	// If the element's string matches the regular expression it is all letters
	validateDataTypeAlpha($fld, fieldError) {
		var alphaExp = /^[a-zA-Z]+$/;
		if ($fld.val().match(alphaExp)) {
			return true;
		}
		else {
			fieldError.push(" must be Alphabetic.");
			return false;
		}
	}

	// If the element's string matches the regular expression it is numbers and letters
	validateDataTypeAlphaNumeric($fld, fieldError) {
		var alphaExp = /^[0-9a-zA-Z]+$/;
		if ($fld.val().match(alphaExp)) {
			return true;
		}
		else {
			fieldError.push(" must be Alphanumeric.");
			return false;
		}
	}

	//mixedcharacter
	xvalidateDataTypeMixedCharacterx($fld, fieldError) {
		///^[a-zA-Z0-9 ._-]+$/
		return true;
		/*var mixedExp = /^[0-9a-zA-Z,. (,)\/*_-]+$/;
		if ($fld.val().match(mixedExp)) {
			return true;
		}
		else {
			return false;
		}*/
	}

	zisLengthViolatedz($fld, min, max) {
		var uInput = $fld.val();
		if (uInput.length >= min && uInput.length <= max) {
			return true;
		}
		else {
			return false;
		}
	}

	encodeHtmlClosures(fldVal) {
		//TODO: needs to fix bug: if called repeatitively, fldValue grows, grows, grows....
		if (!fldVal) return "";/////////--------------------------------
		var error = "";
		var illegalChars = /[<>"']/g;
		var newVal = fldVal.replace(
			illegalChars, function (match) {
				var dict = {
					'<': '[',
					'>': ']',
					/*not so offensive: '&': '&amp;',*/
					'"': '#',
					"'": '`'
				};
				return dict[match];
			}
		);
		return newVal;
	}

	decodeHtmlClosures(fldVal) {
		var error = "";
		//var illegalChars = /&amp;|&lt;|&gt;|&quot;|&#039;/g;
		var illegalChars = /&lt;|&gt;|&quot;|&#039;/g;
		var newVal = fldVal.replace(
			illegalChars, function (match) {
				var dict = {
					/*'&amp;': '&',*/
					'[': '<',
					']': '>',
					'#': '"',
					'`': '\''
				};
				return dict[match];
			}
		);
		return newVal;
	}

	stripHtml(someHTML) {
		var s;
		s = someHTML.replace(/<[^>]+>/g, "");
		return s;
	}

	sanitizeHtml(someHTML) {
		throw "Not Implemented.";
	}


	xsetResultx(errors, elid) {
		//$field.parent().find("div#fldErr_" + elid).first().remove();
		if (errors.length > 0) {
			var htm = "";
			$("#div_" + elid).attr('title', '').removeClass("has-success")//Newly Added
				//$("â€ª#â€Žfeed_â€¬" + elid).removeClass("glyphicon glyphicon-ok");//Newly Added
				.addClass("has-error");//Newly Added
			$("#" + elid).attr('title', '').removeClass("has-success")//Newly Added
				//$("â€ª#â€Žfeed_â€¬" + elid).removeClass("glyphicon glyphicon-ok");//Newly Added
				.addClass("has-error");
			//$("#feed_" + elid).addClass("glyphicon glyphicon-remove");//Newly Added
			for (var error in errors) {
				if (errors[error].length > 0)
					//htm += "<li>" + errors[error] + "</li>";
					htm += errors[error];
			}
			//htm += "</ul></div>";
			$("#" + elid).attr('title', htm);
			return;
		}
		$("#div_" + elid).removeClass("has-error").addClass("has-success")//Newly Added
			//$("#feed_" + elid).removeClass("glyphicon glyphicon-remove");//Newly Added
			//$("#div_" + elid).addClass("has-success");//Newly Added
			//$("#feed_" + elid).addClass("glyphicon glyphicon-ok");//Newly Added
			.attr('title', "");
		$("#" + elid).attr('title', '').removeClass("has-success")//Newly Added
			//$("â€ª#â€Žfeed_â€¬" + elid).removeClass("glyphicon glyphicon-ok");//Newly Added
			.addClass("has-error");
		return;
	}
}


// /////////////////////////////////////////////////////////////////////////////////////////////////////////// //
// Linked List


// User defined class node 
class LinkedNode {
	// constructor 
	constructor(element) {
		this.element = element;
		this.next = null
	}
}

// linkedlist class 
class LinkedList {
	constructor() {
		this.head = null;
		this.size = 0;
	}

	// functions to be implemented 
	// add(element) 
	// insertAt(element, location) 
	// removeFrom(location) 
	// removeElement(element) 

	// Helper Methods 
	// isEmpty 
	// size_Of_List 
	// PrintList 


	// adds an element at the end 
	// of list 
	add(element) {
		// creates a new node 
		var node = new LinkedNode(element);

		// to store current node 
		var current;

		// if list is Empty add the 
		// element and make it head 
		if (this.head == null)
			this.head = node;
		else {
			current = this.head;

			// iterate to the end of the 
			// list 
			while (current.next) {
				current = current.next;
			}

			// add node 
			current.next = node;
		}
		this.size++;
	}


	// insert element at the position index 
	// of the list 
	insertAt(element, index) {
		if (index > 0 && index > this.size)
			return false;
		else {
			// creates a new node 
			var node = new LinkedNode(element);
			var curr, prev;

			curr = this.head;

			// add the element to the 
			// first index 
			if (index == 0) {
				node.next = this.head;
				this.head = node;
			}
			else {
				curr = this.head;
				var it = 0;

				// iterate over the list to find 
				// the position to insert 
				while (it < index) {
					it++;
					prev = curr;
					curr = curr.next;
				}

				// adding an element 
				node.next = curr;
				prev.next = node;
			}
			this.size++;
		}
	}


	// removes an element from the 
	// specified location 
	removeFrom(index) {
		if (index > 0 && index > this.size)
			return -1;
		else {
			var curr, prev, it = 0;
			curr = this.head;
			prev = curr;

			// deleting first element 
			if (index === 0) {
				this.head = curr.next;
			}
			else {
				// iterate over the list to the 
				// position to removce an element 
				while (it < index) {
					it++;
					prev = curr;
					curr = curr.next;
				}

				// remove the element 
				prev.next = curr.next;
			}
			this.size--;

			// return the remove element 
			return curr.element;
		}
	}

	// removes a given element from the 
	// list 
	remove(element) {
		var current = this.head;
		var prev = null;

		// iterate over the list 
		while (current != null) {
			// comparing element with current 
			// element if found then remove the 
			// and return true 
			if (current.element === element) {
				if (prev == null) {
					this.head = current.next;
				}
				else {
					prev.next = current.next;
				}
				this.size--;
				return current.element;
			}
			prev = current;
			current = current.next;
		}
		return -1;
	}


	// finds the index of element 
	indexOf(element) {
		var count = 0;
		var current = this.head;

		// iterae over the list 
		while (current != null) {
			// compare each element of the list 
			// with given element 
			if (current.element === element)
				return count;
			count++;
			current = current.next;
		}

		// not found 
		return -1;
	}


	// checks the list for empty 
	isEmpty() {
		return this.size == 0;
	}

	// traverse the list items 
	traverse(fn) {
		var curr = this.head;
		//var str = ""; 
		while (curr) {
			//str += curr.element + " "; 

			fn(curr.element, curr.next.element);

			curr = curr.next;
		}
	}

	/** TEST **
	// creating an object for the 
	// Linkedlist class 
	var ll = new LinkedList(); 
    
	// testing isEmpty on an empty list 
	// returns true 
	console.log(ll.isEmpty()); 
    
	// adding element to the list 
	ll.add(10); 
    
	// prints 10 
	ll.printList(); 
    
	// returns 1 
	console.log(ll.size_of_list()); 
    
	// adding more elements to the list 
	ll.add(20); 
	ll.add(30); 
	ll.add(40); 
	ll.add(50); 
    
	// returns 10 20 30 40 50 
	ll.printList(); 
    
	// prints 50 from the list 
	console.log("is element removed ?" + ll.removeElement(50)); 
    
	// prints 10 20 30 40 
	ll.printList(); 
    
	// returns 3 
	console.log("Index of 40 " + ll.indexOf(40)); 
    
	// insert 60 at second position 
	// ll contains 10 20 60 30 40 
	ll.insertAt(60, 2); 
    
	ll.printList(); 
    
	// returns false 
	console.log("is List Empty ? " + ll.isEmpty()); 
    
	// remove 3rd element from the list 
	console.log(ll.removeFrom(3)); 
    
	// prints 10 20 60 40 
	ll.printList(); 
	** */
}




class HttpHeader extends Headers {
	constructor() {
		super();
	}
}
class HttpRequest extends Request {
	constructor(url, init = null, header = null) {
		if (header !== null)
			init.headers = header;
		super(url, init);
	}

}
class HttpResponse extends Response {
	constructor() {
		super();
	}

}


class HttpClient extends Service {
	constructor(config) {
		super();
		//this.webClient = client
		this.config = config;
		this.middlewares = {};
		this.requestHandlerManager = new LinkedList();
		this.responseHandlerManager = new LinkedList();
	}
	async uponReady() {
		await super.uponReady();

	}
	middlewareAdd(middlewareClass, config) {
		this.middlewares[middlewareClass.name] = {};
		this.middlewares[middlewareClass.name].instance = new middlewareClass(config);
		return this;
	}

	middlwareInstanceAdd(middlewareClassName, middlewareInstance) {
		this.services[middlewareClassName] = {};
		this.services[middlewareClassName].instance = middlewareInstance;
		return this;
	}

	locateMiddleware(middlewareClass) {
		return this.middlewares[middlewareClass.name].instance;
	}

	requestHandlerAdd(reqMiddlewareFn) {
		this.requestHandlerManager.add(reqMiddlewareFn);
		return this;
	}

	responseHandlerAdd(respMiddlewareFn) {
		this.responseHandlerManager.add(respMiddlewareFn);
		return this;
	}

	async invokeFirstRequestMiddleware(req) {
		req.nextRequestMiddlewareNode = this.requestHandlerManager.head.next;
		await this.requestHandlerManager.head.element(req, this.invokeNextRequestMiddleware);
	}

	async invokeNextRequestMiddleware(req) {
		let currentRequestMiddlewareNode = req.nextRequestMiddlewareNode;
		if (currentRequestMiddlewareNode) {
			req.nextRequestMiddlewareNode = currentRequestMiddlewareNode.next;
			await currentRequestMiddlewareNode.element(req, this.invokeNextRequestMiddleware);
		}
		else {
			req.nextRequestMiddlewareNode = null; // TODO: actually, we must remove it. 
		}
	}

	async invokeFirstResponseMiddleware(resp) {
		resp.nextResponseMiddlewareNode = this.responseHandlerManager.head.next;
		await this.responseHandlerManager.head.element(resp, this.invokeNextResponseMiddleware);
	}

	async invokeNextResponseMiddleware(resp) {
		let currentResponseMiddlewareNode = resp.nextResponseMiddlewareNode;
		if (currentResponseMiddlewareNode) {
			req.nextResponseMiddlewareNode = currentResponseMiddlewareNode.next;
			await currentResponseMiddlewareNode.element(resp, this.invokeNextResponseMiddleware);
		}
		else {
			resp.nextResponseMiddlewareNode = null; // TODO: actually, we must remove it. 
		}

	}

	async fetch(method, url, init = null, acl = null) {
		//acl = acl || {isErrorMessageEnabled: false, isSuccessMessageEnabled: false, bodyExtractMethod: "json"};
		acl = acl || {};
		acl.isErrorMessageEnabled = acl.isErrorMessageEnabled || false;
		acl.isSuccessMessageEnabled = acl.isSuccessMessageEnabled || false;
		acl.isRedirectEnabled = acl.isRedirectEnabled || true;
		acl.bodyExtractMethod = acl.bodyExtractMethod || "json";

		let respBody = null;
		let reqInit = init || {};


		reqInit.method = method || "GET";
		let req = new HttpRequest(url, reqInit);
		req.acl = acl;
		this.invokeFirstRequestMiddleware(req);

		let response = null;

		//$(".spinner-overlay").removeClass("d-none");

		response = await fetch(req);

		response.acl = acl;
		response.outputAsArrayBuffer = null;
		response.outputAsBlob = null;
		response.outputAsText = null;
		response.outputAsFormData = null;
		response.outputAsJson = null;
		response.output = null;

		if (response.status == 500) {
			let data = await response.text();
			response.outputAsText = data;
			response.output = null;
			app.alert(data);

			return response; // no more chaining through middlewares
		}

		if (response.status == 404) {
			//throw new Error(response.url + " not found");
			app.alert(response.url + " not found");
			return response;
		}

		if (!response.ok) {
			let data = await response.text();
			response.outputAsText = data;
			response.output = data;

			//return; // no more chaining through middlewares
		}
		else {
			switch (acl.bodyExtractMethod) {
				case 'arrayBuffer':
					response.outputAsArrayBuffer = await response.arrayBuffer();
					response.output = response.outputAsArrayBuffer;
					break;
				case 'blob':
					response.outputAsBlob = await response.blob();
					response.output = response.outputAsBlob;
					break;
				case 'text':
					response.outputAsText = await response.text();
					response.output = response.outputAsText;
					break;
				case 'formData':
					response.outputAsFormData = await response.formData();
					response.output = response.outputAsFormData;
					break;
				case 'json':
				default:
					response.outputAsJson = await response.json();
					response.output = response.outputAsJson;
					break;
			}


		}

		this.invokeFirstResponseMiddleware(response);


		return response;
	}

}

class HttpClientMiddleware extends Class {
	constructor(config) {
		super();
		this.config = config;
	}

	async uponReady() {
		await super.uponReady();

	}

	async onRequest(req, next) {
		/* IMPLEMENT in your own Class
		*/
		next(req);
		return this;
	}

	async onResponse(response, next) {
		//debugger;

		/* IMPLEMENT in your own Class
		*/
		let data = null;

		if (response.acl.isRedirectEnabled && response.redirected) {
			//window.location.href = response.url;
			app.alert("Redirected. May be login required.");
			return; // no more chaining through middlewares
		}

		if (!response.ok) {
			let data = response.output;
			/*
			$(document).Toasts('create', {
				class: 'bg-danger', 
				title: resp.statusText,
				//subtitle: resp.status,
				autohide: true,{
	method: "POST", // *GET, POST, PUT, DELETE, etc.
	mode: "cors", // no-cors, *cors, same-origin
	cache: "no-cache", // *default, no-cache, reload, force-cache, only-i
			*/
			//response.acl.isErrorMessageEnabled = true; //brute
			if (response.acl.isErrorMessageEnabled) {
				console.log(response.status);
				console.log(response.statusText);
				console.log(data);

				//debugger;
				let s = data;
				let s1 = "ERROR: ";
				let s2 = "LINE 1:";

				let l1 = s1.length;
				let l2 = s2.length;

				let p1 = s.indexOf(s1);
				let p2 = s.indexOf(s2);

				let s9 = (s.substr(p1 + l1, p2 - p1 - l1));


				//toastify
				throw new Error("HTTP " + response.status + ": " + response.statusText + (s.indexOf('Query failed: ERROR:') > 0) ? ": " + s9 : "");
				//or
				//alert(s9);

				// throw ("Error");
			}

			//return; // no more chaining through middlewares
		}
		else {
			if (response.acl.isSuccessMessageEnabled) {
				$(document).Toasts('create', {
					class: 'bg-success',
					title: 'Sucess',
					//subtitle: '200',
					autohide: true,
					delay: 2000,
					body: 'Great!',
				});
			}

		}


		next(response);
		return this;
	}


}

class DefaultHttpClientMiddleware extends HttpClientMiddleware {
	constructor(config) {
		super();
		this.config = config;
	}

	async uponReady() {
		await super.uponReady();

	}

}


class Component extends Class {
	constructor() {
		super();
		this.state = {};
		this.component = {};
		this.id = "";
		//this.container = container;

		//this.state = new ViewState(this.id);
		//no this.state.id = this.id;

		this.eventRegistry = new Map();
	}

	async uponReady() {
		await super.uponReady();

	}


	render(generator) {
		//debugger;
		let html = "";
		let result;

		while (!(result = generator.next()).done) {
			const value = result.value;

			if (typeof value === "object" && value[Symbol.iterator]) {
				// If the yield is another generator, recurse
				html += this.render(value);
			} else {
				// Otherwise, append the value
				html += value || "";
			}
		}

		return html;
	}

	async render(containerId, data) {
		//debugger;

		// util fn
		function expando(obj, data) {
			for (const key in data) {
				if (data.hasOwnProperty(key)) {
					/*
					const value = data[key];
					if (typeof value === 'object' && value !== null) { // Check for nested objects
						 let nestedObj = obj[key] || {} // If attribute exist, keep, else create new MyClass instance
						 expando(nestedObj, value)
						 obj[key] = nestedObj
					} 
					else {
							obj[key] = value;
					}
					*/
					obj[key] = data[key];
				}
			}
		}
		// /util fn

		this.data = data;
		//PENDING: expando(this, data);

		this.container = document.getElementById(containerId);

		let rhtml = this.render(this.template(this.data));
		this.container.innerHTML = rhtml;

		let beSure = this.container.isConnected;
		this.assert(beSure, "Content Not Ready for Container: " + containerId);

		await this.uponReady();

	}

	async uponReady() {
		await super.uponReady();
	}

	on(selector, eventName, handlerMethod) {
		var me = this; // Maintain context

		const elList = document.querySelectorAll(selector);

		elList.forEach(function (el) {
			// Ensure the element has a storage for registered handlers
			if (!el._eventListeners) {
				el._eventListeners = {}; // Create a property to store handlers
			}

			// Check if this handler for the specific event is already registered
			const key = `${selector}_${eventName}_${handlerMethod.name}`;
			if (el._eventListeners[key]) {
				return; // If already registered, skip
			}

			// Otherwise, register the event listener
			el.addEventListener(eventName, function (eventArg) {
				handlerMethod.call(me, eventArg);
			});

			// Mark this handler as registered for this event
			el._eventListeners[key] = true;
		});
	}

	onGptV1(selector, eventName, handlerMethod) {
		var me = this; // Critical for maintaining context!

		const elList = document.querySelectorAll(selector);

		// Using the original code block structure
		Array.prototype.forEach.call(elList, function (el) {
			// Create a unique key for this event listener
			//debugger;

			const key = `${selector}_${eventName}_${handlerMethod.name}_${el}`;
			//console.trace(key);

			// If the key already exists in the registry, skip adding the event listener
			if (me.eventRegistry.has(key)) {
				console.log(`Event listener already registered for ${key}`);
				return;
			}

			// Otherwise, add the event listener
			el.addEventListener(eventName, function (eventArg) {
				handlerMethod.call(me, eventArg);
			});

			// Save the registration to the registry
			me.eventRegistry.set(key, true); // `true` is a placeholder; could store more data if needed
		});
	}



	onOld(selector, eventName, handlerMethod) {
		//debugger;

		this.off(selector, eventName, handlerMethod);

		var me = this; //Tricky! Very Tricky!!

		const elList = document.querySelectorAll(selector);

		/*
		for (let i = 0; i < elList.length; i++) {
			elList[i].addEventListener(eventName, handlerMethod.call(me, eventArg);
		}
		*/

		Array.prototype.forEach.call(elList, function (el) {
			el.addEventListener(eventName, /*async*/ function (eventArg) {
						/*await*/ handlerMethod.call(me, eventArg);
			});

		});



	}

	off(selector, eventName, eventHandler, useCapture) {
		var element = document.querySelectorAll(selector);

		Array.prototype.forEach.call(element, function (el) {
			el.removeEventListener(eventName, eventHandler, useCapture);
		});
	}

	offOn(selector, eventName, eventHandler, useCapture) {
		this.off(selector, eventName, eventHandler, useCapture);
		this.on(selector, eventName, eventHandler);
	}

	// render(container, args) {
	// 	this.args = args; // MUST

	// 	document.getElementById(container).innerHTML = this.render(this.template(args));
	// }

}


class Url {
	/**
	 * Gets the current URL path.
	 * @returns {string} The path portion of the URL.
	 */
	static getPath() {
		return window.location.pathname;
	}

	/**
	 * Gets the current URL path.
	 * @returns {string} The path portion of the URL.
	 */
	static getPathPart(ordinal) {
		return window.location.pathname.slice(1).split("/")[ordinal];
	}

	/**
	 * Gets the current URL path.
	 * @returns {string} The path portion of the URL.
	 */
	static getPathParts() {
		return window.location.pathname.slice(1).split("/");
	}


	/**
	 * Gets the current URL query string.
	 * @returns {string} The query string portion of the URL.
	 */
	static getQuery() {
		return window.location.search;
	}

	/**
	 * Gets the value of a specific query parameter.
	 * @param {string} name - The name of the query parameter.
	 * @returns {string|null} The value of the query parameter, or null if not found.
	 */
	static getQueryParam(name) {
		const urlParams = new URLSearchParams(window.location.search);
		return urlParams.get(name);
	}

	/**
	 * Checks if a specific query parameter exists in the URL.
	 * @param {string} name - The name of the query parameter.
	 * @returns {boolean} True if the query parameter exists, false otherwise.
	 */
	static hasQueryParam(name) {
		const urlParams = new URLSearchParams(window.location.search);
		return urlParams.has(name);
	}

	/**
	 * Gets all query parameters as an object.
	 * @returns {Object} An object containing all query parameters and their values.
	 */
	static getQueryParams() {
		const urlParams = new URLSearchParams(window.location.search);
		const params = {};
		for (const [key, value] of urlParams.entries()) {
			params[key] = value;
		}
		return params;
	}
}


class Validator extends /*not extending Class*/ Object {

	/*
	USAGE EXAMPLE:

	const v = new Validator();

	// Assuming you have a database connection object called 'dbConnection'
	// v.setDatabaseConnection(dbConnection); 

	const payload = {
		attrib_id: "123",
		title: "My Title",
		created_at: "2023-11-21",
		email: "test@example.com",
		age: "30",
		description: "<p>This is a description.</p>",
		website: "https://www.example.com",
		ip_address: "192.168.1.1",
		dob: "1995-05-10",
		password: 'abcd',
		password_confirmation: 'abcd',
		html_content: '<p>Some HTML</p>'
	};

	const rules = {
		attrib_id: "required;integer",
		title: "required;minlength=5;maxlength=50",
		created_at: "required;date",
		email: "required;email",
		age: "required;numeric;minval=18;maxval=120",
		description: "striphtml",
		website: "required;url",
		ip_address: "required;ip",
		dob: "required;date",
		password: "required;minlen=8",
		password_confirmation: "required;confirmed",
		html_content: 'striphtml'
		//unique: "users.email", // Example unique rule (needs db connection)
	};

	const result = v.validate(payload, rules);

	console.log(result);
	*/


	constructor() {
		// You might want to initialize some properties here, like database connection details
		// if you plan to implement 'unique' validation.
		this.db = null; // Placeholder for a database connection
	}

	/**
	 * Sets the database connection for validations that require database interaction (e.g., unique).
	 * @param {object} db - The database connection object.
	 */
	setDatabaseConnection(db) {
		this.db = db;
	}

	/**
	 * Validates an object against a set of rules.
	 * @param {object} obj - The object to validate.
	 * @param {object} ruleset - The validation rules.
	 * @param {boolean} [raiseException=false] - Whether to throw exceptions on validation failures.
	 * @returns {object} - An object containing validation errors, if any.
	 */
	validate(obj, ruleset, raiseException = false) {
		const result = {};

		for (const field in ruleset) {
			const value = obj[field];
			const rules = ruleset[field].split(";");

			for (const rule of rules) {
				const [attr, attrVal] = rule.trim().split("=");

				if (!result[field]) {
					result[field] = [];
				}

				const error = this._applyRule(field, value, attr, attrVal, obj);
				if (error) {
					result[field].push(error);
					if (raiseException) {
						throw new Error(error);
					}
				}
			}
		}

		// Remove fields with no errors
		for (const field in result) {
			if (result[field].length === 0) {
				delete result[field];
			}
		}

		return result;
	}

	/**
	 * Applies a single validation rule to a value.
	 * @param {string} field - The field name.
	 * @param {*} value - The value to validate.
	 * @param {string} attr - The validation attribute (keyword).
	 * @param {string} attrVal - The attribute value (if any).
	 * @param {object} obj - The entire object being validated (for rules like 'confirmed').
	 * @returns {string|null} - An error message if the validation fails, or null if it passes.
	 * @private
	 */
	_applyRule(field, value, attr, attrVal, obj) {
		switch (attr.toLowerCase()) {
			case "required":
				return this._validateRequired(value, field);
			case "striphtml":
				return this._validateStripHtml(value, field); // Call the new method
			case "sanitizehtml":
				return this._validateSanitizeHtml(value, field); // You'll need a library for this
			case "insertable":
				return this._validateInsertable(value, field); // You'll need your logic
			case "value":
				return this._validateValue(value, attrVal, field);
			case "minvalue":
			case "minval":
				return this._validateMinValue(value, attrVal, field);
			case "maxvalue":
			case "maxval":
				return this._validateMaxValue(value, attrVal, field);
			case "notvalue":
				return this._validateNotValue(value, attrVal, field);
			case "length":
				return this._validateLength(value, attrVal, field);
			case "minlength":
			case "minlen":
				return this._validateMinLength(value, attrVal, field);
			case "maxlength":
			case "maxlen":
				return this._validateMaxLength(value, attrVal, field);
			case "notlength":
				return this._validateNotLength(value, attrVal, field);
			case "datatype":
				return this._validateDataType(value, attrVal, field);
			case "case":
				return this._validateCase(value, attrVal, field);
			case "email":
				return this._validateEmail(value, field);
			case "daterange":
				return this._validateDateRange(value, attrVal, field);
			case "regex":
				return this._validateRegex(value, attrVal, field);
			case "unique":
				return this._validateUnique(value, field, attrVal); // Async, needs db connection
			case "confirmed":
				return this._validateConfirmed(value, field, attrVal, obj);
			case "numeric":
				return this._validateNumeric(value, field);
			case "integer":
				return this._validateInteger(value, field);
			case "alpha":
				return this._validateAlpha(value, field);
			case "alphanum":
				return this._validateAlphaNum(value, field);
			case "url":
				return this._validateUrl(value, field);
			case "ip":
				return this._validateIp(value, field);
			case "date":
				return this._validateDate(value, field);
			default:
				throw new Error(`Unknown validation attribute: ${attr}`);
		}
	}

	// --- Validation Rule Implementations ---

	_validateRequired(value, field) {
		return (value === undefined || value === null || value === "") ? `Field ${field} is required.` : null;
	}

	_validateStripHtml(value, field) {
		if (typeof value !== 'string') return null; // Only apply to strings
		const strippedValue = value.replace(/<[^>]+>/g, '');
		return strippedValue !== value ? null : null; // No error, tags were removed
	}

	_validateSanitizeHtml(value, field) {
		// **Important:** You'll need an external library for proper HTML sanitization 
		// to prevent XSS vulnerabilities. 
		// Here's an example using DOMPurify (https://github.com/cure53/DOMPurify):
		// if (typeof value !== 'string') return null;
		// const sanitizedValue = DOMPurify.sanitize(value); 
		// return sanitizedValue !== value ? null : null; // No error, HTML was sanitized.
		return `Sanitization for ${field} requires an external library (e.g., DOMPurify).`;
	}

	_validateInsertable(value, field) {
		// **Important:**  This is a placeholder. You need to implement your own logic 
		// for preventing SQL injection, which might involve using prepared statements
		// or a database-specific escaping function.
		// This is highly dependent on your database and how you are interacting with it.
		return `Insertable validation for ${field} needs custom implementation.`;
	}

	_validateValue(value, attrVal, field) {
		return value !== attrVal ? `Field ${field} must be exactly ${attrVal}.` : null;
	}

	_validateMinValue(value, attrVal, field) {
		if (isNaN(value) || isNaN(attrVal)) return `Invalid numeric value for ${field} minvalue validation.`;
		return Number(value) < Number(attrVal) ? `Field ${field} must be at least ${attrVal}.` : null;
	}

	_validateMaxValue(value, attrVal, field) {
		if (isNaN(value) || isNaN(attrVal)) return `Invalid numeric value for ${field} maxvalue validation.`;
		return Number(value) > Number(attrVal) ? `Field ${field} must be no more than ${attrVal}.` : null;
	}

	_validateNotValue(value, attrVal, field) {
		return value === attrVal ? `Field ${field} must not be ${attrVal}.` : null;
	}

	_validateLength(value, attrVal, field) {
		if (typeof value !== 'string' && !Array.isArray(value)) return null; // Only for strings/arrays
		return value.length !== Number(attrVal) ? `Field ${field} must be exactly ${attrVal} characters long.` : null;
	}

	_validateMinLength(value, attrVal, field) {
		if (typeof value !== 'string' && !Array.isArray(value)) return null;
		return value.length < Number(attrVal) ? `Field ${field} must be at least ${attrVal} characters long.` : null;
	}

	_validateMaxLength(value, attrVal, field) {
		if (typeof value !== 'string' && !Array.isArray(value)) return null;
		return value.length > Number(attrVal) ? `Field ${field} must be no more than ${attrVal} characters long.` : null;
	}

	_validateNotLength(value, attrVal, field) {
		if (typeof value !== 'string' && !Array.isArray(value)) return null;
		return value.length === Number(attrVal) ? `Field ${field} must not be ${attrVal} characters long.` : null;
	}

	_validateDataType(value, attrVal, field) {
		// Basic data type checking - you might want to expand this
		switch (attrVal.toLowerCase()) {
			case "string":
				return typeof value === "string" ? null : `Field ${field} must be a string.`;
			case "number":
				return typeof value === "number" && !isNaN(value) ? null : `Field ${field} must be a number.`;
			case "boolean":
				return typeof value === "boolean" ? null : `Field ${field} must be a boolean.`;
			case "object":
				return typeof value === "object" && value !== null ? null : `Field ${field} must be an object.`;
			case "array":
				return Array.isArray(value) ? null : `Field ${field} must be an array.`;
			default:
				return `Unknown datatype for ${field}: ${attrVal}`;
		}
	}

	_validateCase(value, attrVal, field) {
		if (typeof value !== 'string') return null;
		switch (attrVal.toLowerCase()) {
			case "lower":
				return value === value.toLowerCase() ? null : `Field ${field} must be in lowercase.`;
			case "upper":
				return value === value.toUpperCase() ? null : `Field ${field} must be in uppercase.`;
			default:
				return `Invalid case validation option for ${field}: ${attrVal}`;
		}
	}

	_validateEmail(value, field) {
		if (typeof value !== 'string') return null;
		const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		return emailRegex.test(value) ? null : `Field ${field} must be a valid email address.`;
	}

	_validateDateRange(value, attrVal, field) {
		const [startDate, endDate] = attrVal.split(",");
		const dateValue = new Date(value);
		const start = new Date(startDate);
		const end = new Date(endDate);

		if (isNaN(dateValue) || isNaN(start) || isNaN(end)) {
			return `Invalid date format for ${field} daterange validation.`;
		}

		return dateValue >= start && dateValue <= end ? null : `Field ${field} must be between ${startDate} and ${endDate}.`;
	}

	_validateRegex(value, attrVal, field) {
		if (typeof value !== 'string') return null;
		try {
			const regex = new RegExp(attrVal);
			return regex.test(value) ? null : `Field ${field} does not match the required pattern.`;
		} catch (error) {
			return `Invalid regular expression for ${field}: ${attrVal}`;
		}
	}

	async _validateUnique(value, field, attrVal) {
		// **Important:** This is an example and requires a database connection (`this.db`).
		// You'll need to adapt this to your specific database and query logic.
		// This is an ASYNCHRONOUS operation.
		if (!this.db) {
			return `Database connection not set. Cannot validate unique constraint for ${field}.`;
		}

		try {
			// Example using a hypothetical SQL query (replace with your actual query)
			const [table, column] = attrVal.split("."); // e.g., "users.email"
			const query = `SELECT COUNT(*) as count FROM ${table} WHERE ${column} = ?`;
			const result = await this.db.query(query, [value]); // Assuming a query method

			return result[0].count === 0 ? null : `The value for ${field} is already taken.`;
		} catch (error) {
			console.error("Error during unique validation:", error);
			return `Error checking uniqueness for ${field}.`;
		}
	}

	_validateConfirmed(value, field, attrVal, obj) {
		const confirmationFieldName = attrVal || `${field}_confirmation`; // Default: field_confirmation
		return value === obj[confirmationFieldName]
			? null
			: `Field ${field} does not match ${confirmationFieldName}.`;
	}

	_validateNumeric(value, field) {
		return !isNaN(parseFloat(value)) && isFinite(value) ? null : `Field ${field} must be numeric.`;
	}

	_validateInteger(value, field) {
		return Number.isInteger(Number(value)) ? null : `Field ${field} must be an integer.`;
	}

	_validateAlpha(value, field) {
		if (typeof value !== 'string') return null;
		return /^[a-zA-Z]+$/.test(value) ? null : `Field ${field} must contain only letters.`;
	}

	_validateAlphaNum(value, field) {
		if (typeof value !== 'string') return null;
		return /^[a-zA-Z0-9]+$/.test(value) ? null : `Field ${field} must contain only letters and numbers.`;
	}

	_validateUrl(value, field) {
		if (typeof value !== 'string') return null;
		try {
			new URL(value);
			return null;
		} catch (_) {
			return `Field ${field} must be a valid URL.`;
		}
	}

	_validateIp(value, field) {
		if (typeof value !== 'string') return null;
		const ipRegex =
			/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
		return ipRegex.test(value) ? null : `Field ${field} must be a valid IP address.`;
	}

	_validateDate(value, field) {
		if (typeof value !== 'string') return null;
		return !isNaN(Date.parse(value)) ? null : `Field ${field} must be a valid date.`;
	}
}



class AppPage extends Component {
	//debugger;

	constructor(selector) {
		super(selector);
		this.id = ""; //Element ID

		this.formValidator = new FormValidator();
	}




	eventListenerAdd(el, ev, handler) {
		var me = this.me; //Tricky! Very Tricky!!
		el.addEventListener(ev, (evt) => handler.call(me, evt));
		return this;
	}

	eventListenerRemove(el, ev) {
		this.el[el].removeEventListener(ev);
		return this;

	}

	eventListenersAdd(arr) {
		var me = this;
		/*
		for (const [el, handlerDict] of Object.entries(eventDict)) {
			//this.templates[name] = this.te.compileTemplate (value);		
			for (const [ev, handler] of Object.entries(handlerDict))
				this.eventListenerAdd(el, ev, handler);
		}
		*/
		arr.forEach(function (e) {
			me.eventListenerAdd(e[0], e[1], e[2]);
		});
		return this;
	}

	// //
	//@abstract
	async uponReady() {
		await super.uponReady();

	}

	slugifyUrlRoute(inputText) {
		// 1. Trim leading/trailing spaces.
		let trimmedText = inputText.trim();

		// 2. Handle the initial '[/]' or '/'.
		let processedText = trimmedText;
		if (trimmedText.startsWith('[/]')) {
			processedText = '/' + trimmedText.substring(3);
		}

		// 3. Convert to lowercase.
		const lowerCaseText = processedText.toLowerCase();

		// 4. Replace spaces with hyphens.
		let slug = lowerCaseText.replace(/\s+/g, '-');

		// 5. Remove any hyphens immediately before or after a forward slash.
		slug = slug.replace(/-?\/-?/g, '/');

		return slug;
	}

	getLastParamFromUrl() {
		const currentUrl = window.location.href;
		const pathSegments = currentUrl.split('/');
		const lastSegment = pathSegments.pop(); // Get the last element of the array

		return lastSegment;
	}

	getPrimaryKeyWithIdSuffix() {
		const primaryInput = document.querySelector('input[type="hidden"][data-primary]');
		if (primaryInput) {
			const dataStateValue = primaryInput.getAttribute('data-state');
			if (dataStateValue && dataStateValue.endsWith("_id")) {
				return dataStateValue;
			} else {
				console.warn("Found a primary input, but its data-state does not end with '_id'.");
				return null;
			}
		} else {
			return null;
		}
	}

}



class xAppComponent extends AppPage {
	constructor() {
		super();

	}

	async uponReady() {
		await super.uponReady();

	}
}


// This file defines the WebSocket client service class for the frontend.

/**
 * @typedef {object} ServerMessage
 * @property {'subscribed'|'unsubscribed'|'error'|string} type - The type of message (e.g., 'categories:changed').
 * @property {string} [topic] - The topic the message relates to.
 * @property {any} [payload] - Optional data payload associated with the event.
 * @property {string} [message] - Optional message string (e.g., for errors or confirmations).
 */

/**
 * @typedef {object} ClientMessage
 * @property {'subscribe'|'unsubscribe'} type - The type of request being sent to the server.
 * @property {string} topic - The topic the client is interested in.
 */

/**
 * @callback MessageCallback
 * @param {any} payload - The payload data from the server message.
 * @param {string} topic - The topic the message was published on.
 */

/**
 * A Pure Vanilla JavaScript ES6 class to manage the WebSocket connection and local Pub/Sub.
 * This service is intended to be a singleton instance in the browser tab.
 */
class WebSocketClientService {
	/**
	 * @param {string} websocketUrl - The full URL of the WebSocket endpoint (e.g., 'ws://localhost:3000/ws').
	 */
	constructor(websocketUrl) {
	  this.url = websocketUrl;
	  /** @type {WebSocket|null} */
	  this.socket = null;
	  this.isConnected = false;
	  this.reconnectInterval = 5000; // milliseconds
	  this.reconnectAttempts = 0;
	  this.maxReconnectAttempts = 10; // Prevent infinite reconnect loops
  
	  // Map topics (string) to a Set of MessageCallback functions
	  /** @type {Map<string, Set<MessageCallback>>} */
	  this.localSubscriptions = new Map();
	  // Set of topics we've *tried* to subscribe to on the server
	  /** @type {Set<string>} */
	  this.pendingSubscriptions = new Set();
  
	  // Bind event handlers to the class instance early
	  this.onOpen = this.onOpen.bind(this);
	  this.onMessage = this.onMessage.bind(this);
	  this.onError = this.onError.bind(this);
	  this.onClose = this.onClose.bind(this);
	}
  
	/**
	 * Initiates the WebSocket connection. Call this once during application bootstrap.
	 */
	connect() {
	  if (this.socket && (this.socket.readyState === WebSocket.CONNECTING || this.socket.readyState === WebSocket.OPEN)) {
		console.log('[WS Client] Connection already in progress or open.');
		return;
	  }
  
	  console.log('[WS Client] Attempting to connect to', this.url);
	  try {
		  this.socket = new WebSocket(this.url);
		  this.socket.addEventListener('open', this.onOpen);
		  this.socket.addEventListener('message', this.onMessage);
		  this.socket.addEventListener('error', this.onError);
		  this.socket.addEventListener('close', this.onClose);
	  } catch (error) {
		  console.error('[WS Client] Failed to create WebSocket:', error);
		  // Schedule a reconnect if creation fails immediately
		   if (this.reconnectAttempts < this.maxReconnectAttempts) {
			   this.reconnectAttempts++;
			   console.log(`[WS Client] Scheduling reconnect ${this.reconnectAttempts}/${this.maxReconnectAttempts} in ${this.reconnectInterval / 1000}s...`);
			   setTimeout(() => this.connect(), this.reconnectInterval);
		   } else {
			   console.error('[WS Client] Max reconnect attempts reached during initial creation.');
		   }
	  }
	}
  
	/**
	 * Handles the WebSocket 'open' event.
	 * @private
	 */
	onOpen() {
	  console.log('[WS Client] Connection opened successfully.');
	  this.isConnected = true;
	  this.reconnectAttempts = 0; // Reset attempts on successful connection
  
	  // Resend subscribe messages for any topics we intended to subscribe to
	  console.log(`[WS Client] Resubscribing to ${this.pendingSubscriptions.size} pending topics.`);
	  this.pendingSubscriptions.forEach(topic => this.sendSubscribe(topic));
	}
  
	/**
	 * Handles messages received from the server.
	 * @param {MessageEvent} event
	 * @private
	 */
	onMessage(event) {
	  // Bun backend sends messages as JSON strings.
	  const messageString = event.data;
	  try {
		/** @type {ServerMessage} */
		const message = JSON.parse(messageString);
		console.log('[WS Client] Message received:', message);
  
		// Handle server-side confirmation or error messages
		if (message.type === 'subscribed') {
		  console.log(`[WS Client] Server confirmed subscription to: ${message.topic}`);
		  // At this point, we know the server acknowledges our interest.
		  // The topic was already added to pendingSubscriptions when sendSubscribe was called.
		} else if (message.type === 'unsubscribed') {
		   console.log(`[WS Client] Server confirmed unsubscription from: ${message.topic}`);
			// If the server confirms unsubscribe, we can potentially remove from pendingSubscriptions
			// However, keeping it in pending ensures resubscription if connection drops and comes back *before* server processed unsubscribe
			// Decision: Keep in pending until disconnect or explicit client unsubscribe call resolves fully.
		} else if (message.type === 'error') {
		   console.error('[WS Client] Server reported error:', message.message, 'Topic:', message.topic);
		   // Potentially trigger a UI notification about the server error
		} else {
		  // Assume this is a custom Pub/Sub message intended for local callbacks
		  this.distributeMessageToCallbacks(message);
		}
  
	  } catch (error) {
		console.error('[WS Client] Failed to parse incoming message:', messageString, error);
		// Optionally send an error acknowledgment back to the server, though not strictly necessary
	  }
	}
  
	/**
	 * Distributes a received message to all registered local callbacks for the topic.
	 * @param {ServerMessage} message - The parsed message object.
	 * @private
	 */
	distributeMessageToCallbacks(message) {
		if (!message.topic) {
			console.warn('[WS Client] Received message without a topic, ignoring.', message);
			return;
		}
		const callbacks = this.localSubscriptions.get(message.topic);
		if (callbacks) {
			console.log(`[WS Client] Distributing message for topic "${message.topic}" to ${callbacks.size} local callbacks.`);
			// Iterate over a copy in case a callback modifies the set (e.g., unsubscribes itself)
			Array.from(callbacks).forEach(callback => {
				try {
					callback(message.payload, message.topic); // Call the component's handler
				} catch (callbackError) {
					console.error(`[WS Client] Error in local callback for topic ${message.topic}:`, callbackError);
					// Log callback errors but don't stop processing other callbacks
				}
			});
		} else {
			console.log(`[WS Client] Received message for topic "${message.topic}", but no local subscribers.`);
		}
	}
  
  
	/**
	 * Handles the WebSocket 'error' event.
	 * @param {Event} event
	 * @private
	 */
	onError(event) {
	  console.error('[WS Client] WebSocket Error:', event);
	  this.isConnected = false;
	  // The 'close' event usually follows 'error', so reconnect logic is primarily in onClose.
	}
  
	/**
	 * Handles the WebSocket 'close' event.
	 * @param {CloseEvent} event
	 * @private
	 */
	onClose(event) {
	  console.log('[WS Client] Connection closed:', event.code, event.reason);
	  this.isConnected = false;
	  this.socket = null; // Clear the reference
  
	  // Attempt to reconnect unless explicitly closing (code 1000) or max attempts reached
	  // Code 1000 is 'Normal Closure'
	  if (event.code !== 1000 && this.reconnectAttempts < this.maxReconnectAttempts) {
		this.reconnectAttempts++;
		console.log(`[WS Client] Attempting reconnect ${this.reconnectAttempts}/${this.maxReconnectAttempts} in ${this.reconnectInterval / 1000}s...`);
		// Use setTimeout to allow time before retrying
		setTimeout(() => this.connect(), this.reconnectInterval);
	  } else if (this.reconnectAttempts >= this.maxReconnectAttempts) {
		   console.error('[WS Client] Max reconnect attempts reached. Automatic reconnection stopped.');
		   // Consider emitting a custom event or updating a status property that the UI can observe
	  }
	}
  
	/**
	 * Sends a message to the server over the WebSocket connection.
	 * @param {ClientMessage} message - The message object to send.
	 * @private
	 */
	sendMessage(message) {
	  if (this.socket && this.socket.readyState === WebSocket.OPEN) {
		const messageString = JSON.stringify(message);
		this.socket.send(messageString);
		console.log('[WS Client] Sent message:', message);
	  } else {
		console.warn('[WS Client] WebSocket not open, cannot send message:', message);
		// If a message (especially subscribe/unsubscribe) fails to send,
		// the reconnect logic + pendingSubscriptions handles retrying subscribes later.
		// For other message types, you might need a queue or error handling.
	  }
	}
  
	 /**
	  * Sends a 'subscribe' message to the server and tracks the pending subscription.
	  * @param {string} topic - The topic to subscribe to on the server.
	  * @private
	  */
	 sendSubscribe(topic) {
		 this.pendingSubscriptions.add(topic); // Mark as pending immediately
		 this.sendMessage({ type: 'subscribe', topic: topic });
	 }
  
	 /**
	  * Sends an 'unsubscribe' message to the server and removes from pending.
	  * @param {string} topic - The topic to unsubscribe from on the server.
	  * @private
	  */
	  sendUnsubscribe(topic) {
		  this.pendingSubscriptions.delete(topic); // Remove from pending once client unsubscribes
		  this.sendMessage({ type: 'unsubscribe', topic: topic });
	  }
  
  
	/**
	 * Public method for frontend components to subscribe to a topic.
	 * Registers a local callback and requests server subscription if needed.
	 * @param {string} topic - The topic name.
	 * @param {MessageCallback} callback - The function to execute when a message for this topic is received.
	 */
	subscribe(topic, callback) {
	  if (!this.localSubscriptions.has(topic)) {
		this.localSubscriptions.set(topic, new Set());
		 // If this is the first local subscriber for this topic in this tab,
		 // tell the backend we need messages for this topic.
		this.sendSubscribe(topic);
	  }
	   // Add the callback to the set for this topic
	  this.localSubscriptions.get(topic).add(callback);
	  console.log(`[WS Client] Local callback subscribed to topic: ${topic}. Total local callbacks for topic: ${this.localSubscriptions.get(topic).size}`);
	}
  
	/**
	 * Public method for frontend components to unsubscribe from a topic.
	 * Removes a local callback and requests server unsubscription if no local subscribers remain.
	 * @param {string} topic - The topic name.
	 * @param {MessageCallback} callback - The callback function to remove.
	 */
	unsubscribe(topic, callback) {
	  const callbacks = this.localSubscriptions.get(topic);
	  if (callbacks) {
		callbacks.delete(callback);
		console.log(`[WS Client] Local callback unsubscribed from topic: ${topic}. Remaining local callbacks for topic: ${callbacks.size}`);
		if (callbacks.size === 0) {
		  // If no local subscribers remain for this topic, tell the backend
		  this.localSubscriptions.delete(topic);
		  this.sendUnsubscribe(topic);
		}
	  }
	}
  
	/**
	 * Closes the WebSocket connection explicitly.
	 */
	disconnect() {
		if (this.socket) {
			console.log('[WS Client] Disconnecting WebSocket explicitly...');
			 // Code 1000 indicates a normal closure
			this.socket.close(1000, 'Client disconnecting');
			this.isConnected = false;
			this.socket = null;
			 // Clear pending subscriptions as we don't intend to resubscribe after explicit disconnect
			this.pendingSubscriptions.clear();
		}
	}
  
	 /**
	  * Gets the current connection status.
	  * @returns {'connecting' | 'open' | 'closing' | 'closed' | 'uninitialized'}
	  */
	 get status() {
		  if (!this.socket) return 'uninitialized';
		  switch (this.socket.readyState) {
			  case WebSocket.CONNECTING: return 'connecting';
			  case WebSocket.OPEN: return 'open';
			  case WebSocket.CLOSING: return 'closing';
			  case WebSocket.CLOSED: return 'closed';
			  default: return 'uninitialized'; // Should not happen
		  }
	 }
  }

///////////////////////////////////////////////////////
// Custom Data Table
///////////////////////////////////////////////////////

class CustomDataTable {

	/**
	 * @param {string} selector - The CSS selector for the container element where the table will be rendered.
	 * @param {object} config - Configuration options for the table.
	 * @param {string} [config.table_el_id] - The ID to assign to the generated <table> element. Defaults to a unique ID.
	 * @param {object} config.columns - An object defining the table columns. Keys are data property names, values are column configurations.
	 * @param {string} [config.columns.columnName.label] - The human-readable label for the column header. Defaults to the column name.
	 * @param {boolean} [config.columns.columnName.searchable=false] - Whether this column can be searched (per-column search).
	 * @param {boolean} [config.columns.columnName.sortable=false] - Whether this column can be sorted.
	 * @param {boolean} [config.columns.columnName.visible=true] - Whether this column is visible by default.
	 * @param {'left'|'right'|'center'} [config.columns.columnName.align='left'] - Text alignment for the column cells. Uses Bootstrap text utility classes.
	 * @param {function(any, object, number, number): string} [config.columns.columnName.renderer] - A function to render the cell content.
	 *                                               Receives value, full row data, row index (current page), draw counter.
	 * @param {string} [config.endpoint='/data'] - The URL for the server-side processing endpoint.
	 * @param {string} [config.method='POST'] - The HTTP method for the fetch request.
	 * @param {Array<{column: string, dir: 'asc'|'desc'}>} [config.defaultSort=[]] - Initial sorting criteria.
	 * @param {string} [config.emptyMessage='No matching records found'] - Message displayed when table is empty after filtering.
	 * @param {string} [config.errorMessage='Error loading data'] - Message displayed on data fetch error.
	 * @param {boolean} [config.info=true] - Enable/disable the table information display ('Showing X to Y of Z entries').
	 * @param {boolean} [config.paging=true] - Enable/disable pagination.
	 * @param {boolean} [config.searching=true] - Enable/disable the global search input.
	 * @param {boolean} [config.columnSearching=true] - Enable/disable per-column search inputs (requires config.searching=true and column.searchable=true).
	 * @param {boolean} [config.ordering=true] - Enable/disable sorting clicking on headers (requires column.sortable=true).
	 * @param {boolean} [config.lengthChange=true] - Enable/disable the page length change dropdown.
	 * @param {boolean} [config.exportCSV=true] - Enable/disable the Export CSV button.
	 * @param {boolean} [config.columnVisibility=true] - Enable/disable the column visibility dropdown.
	 * @param {boolean} [config.stateSave=false] - Enable/disable saving/loading table state (page, size, search, sort, filters, visibility) to/from localStorage. Note: Expanded row state is NOT saved. Selected row state is NOT saved.
	 * @param {number} [config.pageSize=10] - The initial number of entries per page.
	 * @param {number[]} [config.pageLengthOptions=[10, 25, 50, 100]] - Options for the page length dropdown.
	 * @param {number} [config.paginationPagesToShow=5] - Number of page numbers to show around the current page in pagination.
	 * @param {object} [config.requestParams] - Customize the names of parameters sent to the server (defaults to DataTables format).
	 * @param {object} [config.responseParams] - Customize the names of properties expected in the server response (defaults to DataTables format).
	 * @param {function(object): void} [config.onDataLoad] - Callback function executed after data is successfully loaded.
	 * @param {function(Error): void} [config.onError] - Callback function executed on data fetch error.
	 * @param {object} [config.customParams] - Custom parameters to include in every server request payload.
     * @param {boolean} [config.childRows=false] - Enable/disable child row feature.
     * @param {function(object, number, number): string | HTMLElement} [config.childRowRenderer] - Function to render child row content. Receives full row data, row index (current page), draw counter. Required if childRows is true. Should return an HTML string.
	 */
	constructor(selector, config) {
		// Identify and validate the container element.
		this.element = document.querySelector(selector);
		if (!this.element) {
			console.error(`CustomDataTable: Vessel with selector "${selector}" not found.`);
			throw new Error(`CustomDataTable: Vessel with selector "${selector}" not found.`);
		}

		// Merge the external blueprint (config) with intrinsic default principles.
		this.config = {
			// Core identity and source of truth
			table_el_id: config.table_el_id || `cdt-table-${Math.random().toString(36).substr(2, 9)}`, // A unique identifier if none is divinely provided.
			columns: config.columns || {}, // Definition of the data columns, their nature and capabilities.
			endpoint: config.endpoint || '/data', // The conduit to the source of data.
			method: config.method || 'POST', // The ritual method for summoning data (HTTP).
			defaultSort: config.defaultSort || [], // The initial ordering of the data, a predefined harmony.
			emptyMessage: config.emptyMessage || 'No matching records found', // The message in the void when filtering yields nothing.
			errorMessage: config.errorMessage || 'Error loading data', // The lament when the conduit fails.

			// Feature Toggles: Control nodes determining the manifested interactions.
			info: config.info !== undefined ? config.info : true, // Manifest the data summary.
			paging: config.paging !== undefined ? config.paging : true, // Enable the splitting of data across dimensions (pages).
			searching: config.searching !== undefined ? config.searching : true, // Enable the global search energy.
			columnSearching: config.columnSearching !== undefined ? config.columnSearching : true, // Enable searching within specific dimensions (columns).
			ordering: config.ordering !== undefined ? config.ordering : true, // Enable the reordering of data by dimensions.
			lengthChange: config.lengthChange !== undefined ? config.lengthChange : true, // Enable changing the number of entries per dimension.
			exportCSV: config.exportCSV !== undefined ? config.exportCSV : true, // Enable the ritual of exporting data.
			columnVisibility: config.columnVisibility !== undefined ? config.columnVisibility : true, // Enable control over visible dimensions.
			stateSave: config.stateSave !== undefined ? config.stateSave : false, // Enable the memory of previous states.

			// Paging Parameters: Defining the dimensions of pages.
			pageSize: config.pageSize || 10, // The initial size of each data dimension.
			pageLengthOptions: config.pageLengthOptions || [10, 25, 50, 100], // The available sizes for dimensions.
			paginationPagesToShow: config.paginationPagesToShow || 5, // The number of page portals visible at once.

			// Server Interaction Parameters: Defining the language spoken with the source of truth.
			requestParams: { // Mapping internal concepts to external server expectations (DataTables format).
				draw: 'draw', start: 'start', length: 'length', search: 'search',
				order: 'order', columns: 'columns',
				...(config.requestParams || {}), // Allow overriding defaults
			},
			responseParams: { // Mapping external server truth to internal understanding.
				draw: 'draw', recordsTotal: 'recordsTotal', recordsFiltered: 'recordsFiltered', data: 'data',
                ...(config.responseParams || {}), // Allow overriding defaults
			},

			// Callbacks: Hooks for external processes to react to internal events.
			onDataLoad: config.onDataLoad || (() => { }), // Invoked upon successful data arrival.
			onError: config.onError || ((err) => console.error('CustomDataTable Error:', err)), // Invoked when the conduit fails.

             // Custom parameters to send to the server on every fetch
             ...(config.customParams || {}), // Example: tableName, whereAll etc.

             // Child Rows
             childRows: config.childRows !== undefined ? config.childRows : false,
             childRowRenderer: config.childRowRenderer || null, // Must be provided if childRows is true
		};

        // Validate child row config
        if (this.config.childRows && typeof this.config.childRowRenderer !== 'function') {
            console.error('CustomDataTable: config.childRows is true, but config.childRowRenderer is not a valid function.');
            this.config.childRows = false; // Disable feature if renderer is missing
        }


		// The Initial State: The primordial conditions of the system.
		this.state = {
			page: 1, // Beginning at the first dimension.
			pageSize: this.config.pageSize, // Adopting the initial dimension size.
			search: '', // The void of initial global search.
			columnFilters: new Map(), // A map holding the specific dimension filter energies.
			sort: new Map(), // A map holding the current ordering energies (multi-dimensional sorting possible).
			totalRecords: 0, // The unknown total count before the first summoning.
			filteredRecords: 0, // The unknown filtered count.
			data: [], // The empty vessel for the current page's data.
			draw: 0, // A counter for the data summoning rituals, ensuring synchronicity.
			columnVisibility: new Map(), // A map holding the visibility status of each dimension.
			selectedRows: new Set(), // A set holding the selected data entities (bound to current page data objects for simplicity here).
            expandedRows: new Set(), // A set holding the data objects of expanded rows (bound to current page data objects).
			isLoading: false, // The system is initially at rest.
		};

		// Apply the initial ordering from the blueprint.
		this.config.defaultSort.forEach(s => this.state.sort.set(s.column, s.dir));

		// Initialize dimension visibility based on blueprint or default.
		Object.keys(this.config.columns).forEach(name => {
			const isVisible = config.columns[name]?.visible !== undefined ? config.columns[name].visible : true;
			this.state.columnVisibility.set(name, isVisible);
		});

		// Consult memory (state saving) if enabled, potentially altering the initial state.
		if (this.config.stateSave) {
			this.loadState(); // Attempt to load the system's past condition.
		}

		// Bind methods: Ensuring the system's functions operate within its own context.
		this.handleSortClick = this.handleSortClick.bind(this);
		this.handleColumnVisibilityChange = this.handleColumnVisibilityChange.bind(this);
		this.handlePaginationClick = this.handlePaginationClick.bind(this);
		this.handleRowClick = this.handleRowClick.bind(this);
        this.handleChildControlClick = this.handleChildControlClick.bind(this); // Bind the new handler
		this.exportCSV = this.exportCSV.bind(this);
		this.saveState = this.saveState.bind(this);
		this.loadState = this.loadState.bind(this);
		this.handleGlobalSearchEvent = this.handleGlobalSearchEvent.bind(this);
		this.handleColumnSearchEvent = this.handleColumnSearchEvent.bind(this);


		// Initiate the Creation Sequence.
		this.init();
	}

	// The Initialization: Orchestrates the initial manifestation and energy binding.
	init() {
		this.renderStructure(); // Manifest the visible form.
		this.attachEvents(); // Bind the energies of interaction.
		this.$fetchData(); // Summon the initial data, beginning the cycle.
	}

    // Helper to create DOM element from HTML string (A small, efficient construction tool).
	createElementFromHTML(htmlString) {
		const div = document.createElement('div');
		div.innerHTML = htmlString.trim();
		return div.firstChild; // Return the first element
	}

	// renderStructure: The architect of the visible table interface.
	renderStructure() {
		// Create a document fragment: A temporary, lightweight container in memory for efficient building.
		const fragment = document.createDocumentFragment();

		// Construct the Controls section (Header).
		const controlsHtml = `
			<div class="cdt-controls mb-3">
				<div class="row g-2 align-items-center">
					${this.config.lengthChange ? `
					<div class="col-auto">
						<label for="${this.config.table_el_id}-length" class="col-form-label col-form-label-sm">Show</label>
					</div>
					<div class="col-auto">
						<select id="${this.config.table_el_id}-length" class="cdt-page-length form-select form-select-sm">
							${this.config.pageLengthOptions.map(n => `<option value="${n}">${n}</option>`).join('')}
						</select>
					</div>
					<div class="col-auto">
						<label for="${this.config.table_el_id}-length" class="col-form-label col-form-label-sm">entries</label>
					</div>
					` : ''}

					<div class="col"></div> <!-- A flexible space divider -->

					${this.config.searching ? `
					<div class="col-md-4 col-lg-3">
						<input type="text" class="cdt-global-search form-control form-control-sm" placeholder="Search..." value="${this.state.search}">
					</div>
					` : ''}

					${this.config.columnVisibility ? `
					<div class="col-auto">
						<div class="dropdown d-inline-block">
							<button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
								Columns
							</button>
							<ul class="dropdown-menu cdt-column-visibility">
								${Object.entries(this.config.columns).map(([name, col]) => `
									<li><a class="dropdown-item" href="#" data-col="${name}">
										<input type="checkbox" class="form-check-input me-2" data-col="${name}" ${this.state.columnVisibility.get(name) ? 'checked' : ''}> ${col.label || name}
									</a></li>
								`).join('')}
							</ul>
						</div>
					</div>
					` : ''}

					${this.config.exportCSV ? `
					<div class="col-auto">
						<button class="btn btn-primary btn-sm cdt-export-csv">Export CSV</button>
					</div>
					` : ''}
				</div>
			</div>
		`;
		// Append the created control element to the fragment.
		fragment.appendChild(this.createElementFromHTML(controlsHtml));


		// Construct the Table Container section, including the table and loading overlay.
		const tableContainerHtml = `
			<div class="cdt-table-container table-responsive">
				<div class="cdt-loading-overlay d-none">
					<div class="spinner-border text-primary" role="status">
						<span class="visually-hidden">Loading...</span>
					</div>
				</div>
				<table id="${this.config.table_el_id}" class="cdt-table table table-bordered table-hover mb-0" role="grid" aria-describedby="${this.config.table_el_id}_info" style="table-layout: fixed">
					<thead><tr></tr></thead> <!-- Header row will be populated by renderTableHeader -->
					<tbody></tbody> <!-- Table body will be populated by renderTableBody -->
				</table>
			</div>
		`;
		// Append the created container element to the fragment.
		fragment.appendChild(this.createElementFromHTML(tableContainerHtml));


		// Construct the Footer section, including info and pagination.
		const footerHtml = `
			<div class="cdt-footer mt-3 d-flex justify-content-between align-items-center flex-wrap">
				${this.config.info ? `<div class="cdt-info mb-2 mb-sm-0" id="${this.config.table_el_id}_info" role="status" aria-live="polite"></div>` : '<div></div>'}
				${this.config.paging ? `
				<div class="cdt-pagination">
					<nav aria-label="Table pagination">
						<ul class="pagination pagination-sm mb-0">
							<li class="page-item cdt-prev">
								<a class="page-link" href="#" aria-label="Previous" data-page="prev">
									<span aria-hidden="true">«</span>
									<span class="visually-hidden">Previous</span>
								</a>
							</li>
							<!-- Page number LIs will be appended DIRECTLY to the UL below -->

							<li class="page-item cdt-next">
								<a class="page-link" href="#" aria-label="Next" data-page="next">
									<span aria-hidden="true">»</span>
									<span class="visually-hidden">Next</span>
								</a>
							</li>
						</ul>
					</nav>
				</div>
				` : '<div></div>'}
			</div>
		`;
		fragment.appendChild(this.createElementFromHTML(footerHtml));

		// Clear the original vessel's content and append the complete, constructed fragment in a single operation.
		this.element.innerHTML = ''; // Empty the vessel.
		this.element.appendChild(fragment); // Infuse the structure into the vessel.

		// Set the initial value for the page length dropdown if it was created.
		if (this.config.lengthChange) {
			const pageLengthSelect = this.element.querySelector('.cdt-page-length');
			if (pageLengthSelect) {
				pageLengthSelect.value = this.state.pageSize; // Reflect the initial or loaded state page size.
			}
		}

		// Immediately populate the table header row based on current config and state.
		this.renderTableHeader();
	}

	// renderTableHeader: Constructs the table header row based on visible columns and sort state.
	renderTableHeader() {
		// Find the header row vessel.
		const theadRow = this.element.querySelector(`#${this.config.table_el_id} thead tr`);
		if (!theadRow) return; // If the header row vessel is not found, cease the ritual.

		theadRow.innerHTML = ''; // Clear any existing header cells to prepare for the new structure.

        // If child rows are enabled, add an empty header cell for the control column.
        if (this.config.childRows) {
            const thControl = document.createElement('th');
            thControl.setAttribute('scope', 'col');
            thControl.classList.add('cdt-child-control-th'); // Add a class for styling
            thControl.style.width = '30px'; // Give it a fixed small width
            thControl.style.textAlign = 'center'; // Center the icon
            thControl.setAttribute('aria-label', 'Expand/Collapse row');
            thControl.setAttribute('aria-sort', 'none');
            theadRow.appendChild(thControl);
        }


		// Identify and order the columns that are currently visible according to the state.
		const visibleColumns = Object.entries(this.config.columns).filter(([name]) =>
			this.state.columnVisibility.get(name)
		);

		// Iterate through the visible columns to create a header cell for each.
		visibleColumns.forEach(([name, col]) => { // Removed index here as control column changes index
			const th = document.createElement('th'); // Create the header cell vessel.
			th.setAttribute('scope', 'col'); // Declare this cell as a header for a column (accessibility).

			// Add alignment class if specified in config
            const alignClass = this.getAlignmentClass(col.align);
            if (alignClass) {
                th.classList.add(alignClass);
            }

			// Determine the CSS class and accessibility attribute for sorting, based on configuration and current state.
			let sortClass = '';
			if (this.config.ordering && col.sortable) { // If ordering is enabled and the column is sortable...
				const currentSortDir = this.state.sort.get(name);
				if (currentSortDir === 'asc') {
					sortClass = 'sorting_asc'; // DataTables standard class for ascending sort.
					th.setAttribute('aria-sort', 'ascending'); // Announce sort direction (accessibility).
				} else if (currentSortDir === 'desc') {
					sortClass = 'sorting_desc'; // DataTables standard class for descending sort.
					th.setAttribute('aria-sort', 'descending'); // Announce sort direction (accessibility).
				} else {
					sortClass = 'sorting'; // DataTables standard class for unsorted, but sortable.
					th.setAttribute('aria-sort', 'none'); // Announce no sort applied (accessibility).
				}
				th.classList.add('cdt-sortable'); // Add a class for event delegation targetting.
				th.dataset.col = name; // Store the column name for event handling.
			} else {
				// If not sortable or ordering disabled, explicitly state no sort for accessibility.
                 th.setAttribute('aria-sort', 'none');
            }


			// Populate the header cell's inner structure.
			// It contains the label, and conditionally, the sort indicator and search input.
			th.innerHTML = `
				<div class="d-flex flex-column align-items-${alignClass === 'text-center' ? 'center' : (alignClass === 'text-end' ? 'end' : 'start')}">
					<span class="${sortClass}">${col.label || name}</span> <!-- The column's name or label -->
					${this.config.searching && this.config.columnSearching && col.searchable ? `
						<!-- Column specific search input, conditional on search configs and column being searchable -->
						<input type="text" class="cdt-col-search form-control form-control-sm mt-1" data-col="${name}" placeholder="Search ${col.label || name}" value="${this.state.columnFilters.get(name)?.value || ''}">
					` : ''}
				</div>
			`;

			theadRow.appendChild(th); // Append the created header cell to the header row.
		});
	}

	// renderTableBody: Populates the table body with data from the current state.
	renderTableBody(message = null) {
		// Find the table body vessel.
		const tbody = this.element.querySelector(`#${this.config.table_el_id} tbody`);
		if (!tbody) return; // If the tbody vessel is not found, cease the ritual.

		tbody.innerHTML = ''; // Clear any existing rows to prepare for the new data.

		// Determine the number of visible *data* columns.
		const visibleDataColumns = Object.entries(this.config.columns).filter(([name]) => this.state.columnVisibility.get(name));
		const numVisibleDataCols = visibleDataColumns.length;
        // Total columns in the parent row, including the control column if enabled.
        const totalParentCols = numVisibleDataCols + (this.config.childRows ? 1 : 0);

		// Check if a specific message should be displayed (e.g., error, no data) or if there's no data/filtered data.
		if (message) {
			// Display the provided message (e.g., error message).
			tbody.innerHTML = `<tr><td colspan="${totalParentCols}" class="text-center">${message}</td></tr>`; // Render a single row with a spanning cell.
		} else if (this.state.data.length === 0 && this.state.filteredRecords === 0 && !this.state.isLoading) {
             // Display the "No data available" message if no data was fetched and no records exist at all.
             tbody.innerHTML = `<tr><td colspan="${totalParentCols}" class="text-center">${this.config.emptyMessage}</td></tr>`;
        }
        else if (this.state.data.length === 0 && this.state.filteredRecords > 0 && !this.state.isLoading) {
            // Display the "No matching records" message if data was fetched, but the current page slice is empty
            // or if a filter resulted in 0 *filtered* records, but total exist.
             tbody.innerHTML = `<tr><td colspan="${totalParentCols}" class="text-center">${this.config.emptyMessage}</td></tr>`;
        }
		else {
			// If there is data to display, render the rows.

			// Get the names of columns that are currently visible, in their defined order.
			const visibleColumnNames = visibleDataColumns.map(([name]) => name);


			// Iterate through each data object (row) for the current page.
			this.state.data.forEach((rowData, rowIndex) => {
				const tr = document.createElement('tr'); // Create a row vessel (the parent row).
                tr.dataset.rowIndex = rowIndex; // Store row index for child row lookup

				// Apply styling if the row is selected.
				// Selection state relies on the data object reference from the current page (non-persistent).
				if (this.state.selectedRows.has(rowData)) {
					tr.classList.add('table-primary'); // Add the selection style class.
				}

                // --- Add Child Row Control Cell (if enabled) ---
                if (this.config.childRows) {
                    const tdControl = document.createElement('td');
                    tdControl.classList.add('cdt-child-control', 'text-center'); // Add classes for styling and delegation
                    tdControl.style.width = '30px'; // Match TH width
                    tdControl.style.cursor = 'pointer'; // Indicate clickability
                    // Check if this row is currently expanded
                    const isExpanded = this.state.expandedRows.has(rowData);
                    const icon = isExpanded ? '-' : '+'; // Simple text icon

                    // Use aria-label for accessibility
                    const ariaLabel = isExpanded ? 'Collapse row' : 'Expand row';

                    tdControl.innerHTML = `
                        <span class="cdt-child-icon" aria-label="${ariaLabel}">${icon}</span>
                    `; // Inner element for potential styling and delegation
                     tdControl.dataset.rowIndex = rowIndex; // Add row index for delegation


                    tr.appendChild(tdControl); // Prepend the control cell
                }


				// Iterate through the visible data columns to create data cells for the current row.
				visibleColumnNames.forEach((colName) => { // Removed colIndex here as control column shifts index
					const td = document.createElement('td'); // Create a cell vessel.
					const colConfig = this.config.columns[colName]; // Get the configuration for this column.
					const value = rowData[colName]; // Get the raw data value for this cell.

                    // Add alignment class if specified in config
                    const alignClass = this.getAlignmentClass(colConfig?.align);
                    if (alignClass) {
                        td.classList.add(alignClass);
                    }
					td.classList.add('text-truncate'); // EKN

					// Determine the cell's content: Use the renderer if defined, otherwise use text content.
					if (colConfig && typeof colConfig.renderer === 'function') {
						// Use the renderer function to generate HTML or text content.
						// Pass value, full row data, row index (on current page), draw counter.
						td.innerHTML = colConfig.renderer(value, rowData, rowIndex, this.state.draw);
					} else {
						// Use textContent for safety if no renderer is defined.
						td.textContent = value === null || value === undefined ? '' : value; // Handle null/undefined
					}

					tr.appendChild(td); // Append the cell to the row.
				});

				tbody.appendChild(tr); // Append the completed parent row to the table body.

                // --- Add Child Row (if expanded) ---
                if (this.config.childRows && this.state.expandedRows.has(rowData)) {
                     const childTr = document.createElement('tr');
                     childTr.classList.add('cdt-child-row'); // Add a class for styling and identification

                     const childTd = document.createElement('td');
                     // Colspan needs to cover all parent columns: the control column + all visible data columns
                     childTd.setAttribute('colspan', totalParentCols);
                     childTd.classList.add('cdt-child-content'); // Add a class for styling

                     // Render the child row content using the renderer function
                     if (typeof this.config.childRowRenderer === 'function') {
                          const content = this.config.childRowRenderer(rowData, rowIndex, this.state.draw);
                          // Append rendered content. Check if renderer returned an element or HTML string.
                          if (content instanceof HTMLElement) {
                              childTd.appendChild(content);
                          } else {
                              childTd.innerHTML = String(content); // Assume HTML string or convertible to string
                          }
                     } else {
                          childTd.textContent = 'Child row renderer not configured.'; // Fallback message
                     }

                     childTr.appendChild(childTd); // Append the single spanning cell to the child row.
                     tbody.appendChild(childTr); // Append the child row immediately after the parent.
                }

			});
		}
	}

    // Helper method to get Bootstrap alignment class from config string
    getAlignmentClass(align) {
        switch (align) {
            case 'left': return 'text-start'; // Bootstrap 5 uses text-start/text-end
            case 'right': return 'text-end';
            case 'center': return 'text-center';
            default: return ''; // No class if not specified or invalid
        }
    }


	// renderPagination: Generates and updates the pagination controls.
	renderPagination() {
		// Helper function to create a page list item (<li>)
		const addPaginationItem = (page, text, isActive = false, isDisabled = false, isEllipsis = false) => {
			const li = document.createElement('li');
			li.classList.add('page-item');
			if (isActive) li.classList.add('active');
			if (isDisabled) li.classList.add('disabled');
            if (isEllipsis) li.classList.add('cdt-ellipsis'); // Add a class to easily identify ellipses

			const a = document.createElement('a');
			a.classList.add('page-link');
			a.href = '#';
			a.textContent = text;

			if (!isDisabled && !isEllipsis) {
				a.dataset.page = page;
				a.classList.add('cdt-page-number');
			} else {
                 // For disabled or ellipsis links, prevent default click behavior
                 a.addEventListener('click', (e) => e.preventDefault());
             }

			li.appendChild(a);
			return li;
		};

		// Do not render if paging is disabled in the configuration.
		if (!this.config.paging) return;

		// Find the pagination elements.
		const paginationList = this.element.querySelector('.cdt-pagination ul.pagination'); // Target the UL where page LIs belong.
		const prevButton = this.element.querySelector('.cdt-prev'); // Previous button li element.
		const nextButton = this.element.querySelector('.cdt-next'); // Next button li element.

		// Ensure essential elements exist before proceeding.
		// Check for the UL, Prev, and Next LIs.
		if (!paginationList || !prevButton || !nextButton) {
            console.warn("CustomDataTable: Pagination elements not found or structure incorrect.");
            return;
        }

		const totalPages = Math.ceil(this.state.filteredRecords / this.state.pageSize); // Calculate total pages.
		const currentPage = this.state.page; // Get the current page from state.
		const pagesToShow = this.config.paginationPagesToShow; // Number of page links to show around the current page.


		// Clear existing page numbers *between* the Prev and Next buttons.
		// Remove all children that are NOT cdt-prev or cdt-next
		let child = paginationList.firstChild;
		while (child) {
            const nextChild = child.nextSibling; // Get next before removing current
            if (child.nodeType === 1 && !child.classList.contains('cdt-prev') && !child.classList.contains('cdt-next')) {
                paginationList.removeChild(child);
            }
            child = nextChild;
        }


		// If there are no pages (total records is 0) or only one page, disable nav buttons and show minimal structure.
		if (totalPages <= 1) {
			prevButton.classList.add('disabled');
			nextButton.classList.add('disabled');
             if (totalPages === 1 && currentPage === 1) {
                 // Add page 1 as active if there's exactly one page
                 paginationList.insertBefore(addPaginationItem(1, 1, true), nextButton);
             }
            // Ensure no page numbers were added (handled by the clearing above)
			return;
		} else {
            // Ensure buttons are enabled if there are multiple pages
            prevButton.classList.remove('disabled');
            //err? nextButton.classList.classList.remove('disabled');
            nextButton.classList.remove('disabled');
        }



		// Logic to determine which page numbers to display (similar to DataTables logic).
        // Ensure we show pages around the current page, plus boundary pages (1 and totalPages).
        let startPage = Math.max(2, currentPage - Math.floor(pagesToShow / 2));
        let endPage = Math.min(totalPages - 1, currentPage + Math.ceil(pagesToShow / 2) - 1);

        // Adjust window if it's too small or hits boundaries
        if (endPage - startPage + 1 < pagesToShow) {
            startPage = Math.max(2, endPage - pagesToShow + 1);
        }
        if (endPage - startPage + 1 < pagesToShow) { // Re-check after adjusting start
             endPage = Math.min(totalPages - 1, startPage + pagesToShow - 1);
        }


		// --- Append page numbers directly to the UL, inserting them between Prev and Next ---

		const nextButtonElement = this.element.querySelector('.cdt-next'); // Get the Next button LI element to insert before.


		// Add Page 1 link if not in the calculated window
        if (currentPage > 1) { // Always show page 1 if not on page 1
            paginationList.insertBefore(addPaginationItem(1, 1, currentPage === 1), nextButtonElement);
        } else {
             // If on page 1, add it and mark active
            paginationList.insertBefore(addPaginationItem(1, 1, true), nextButtonElement);
        }


		// Add left ellipsis if needed (gap between page 1 and startPage)
		if (startPage > 2) { // Only need ellipsis if startPage is beyond page 2
			paginationList.insertBefore(addPaginationItem(null, '...', false, true, true), nextButtonElement);
		}

		// Add the central page links.
		for (let i = startPage; i <= endPage; i++) {
			paginationList.insertBefore(addPaginationItem(i, i, currentPage === i), nextButtonElement);
		}

		// Add right ellipsis if needed (gap between endPage and totalPages)
		if (endPage < totalPages - 1) { // Only need ellipsis if endPage is before the last page
			paginationList.insertBefore(addPaginationItem(null, '...', false, true, true), nextButtonElement);
		}

		// Add the last page link if totalPages > 1 and it's not the same as the current page (already added)
		if (totalPages > 1 && currentPage < totalPages) {
             paginationList.insertBefore(addPaginationItem(totalPages, totalPages, currentPage === totalPages), nextButtonElement);
		} else if (totalPages === currentPage && totalPages > 1) {
            // If currently on the last page, ensure it's added and active if not already part of the central window
             paginationList.insertBefore(addPaginationItem(totalPages, totalPages, true), nextButtonElement);
        }


		// Update the state of the Previous and Next buttons.
		if (prevButton) {
			prevButton.classList.toggle('disabled', currentPage <= 1); // Disable if on the first page.
		}
		if (nextButton) {
			// Disable if the current page is the last page.
			nextButton.classList.toggle('disabled', currentPage >= totalPages);
		}
	}


	// renderInfo: Updates the text summary of the table's current state.
	renderInfo() {
		// Do not render if info display is disabled in the configuration.
		if (!this.config.info) return;

		// Find the info element vessel.
		const infoElement = this.element.querySelector('.cdt-info');
		if (!infoElement) {
            console.warn("CustomDataTable: Info element not found.");
            return; // If the info element vessel is not found, cease the ritual.
        }

		const totalRecords = this.state.totalRecords; // Total records before filtering.
		const filteredRecords = this.state.filteredRecords; // Total records after filtering.
		const pageSize = this.state.pageSize; // Entries per page.
		const currentPage = this.state.page; // Current page number.

		// Calculate the start and end indices for the displayed entries.
		// Start is 1-based index. If filteredRecords is 0, start should be 0.
		const start = filteredRecords > 0 ? (currentPage - 1) * pageSize + 1 : 0;
		// End is the minimum of the last index on the current page or the total filtered records count.
		const end = Math.min(start + pageSize - 1, filteredRecords);
        // If start is 0, end should also be 0.
         const displayEnd = start > 0 ? end : 0;


		let infoText = ''; // Initialize the text string.

		if (totalRecords === 0 && filteredRecords === 0) {
			// Case: No data available at all.
			infoText = this.config.emptyMessage; // Use empty message here too
		} else if (filteredRecords === 0) {
			// Case: Data exists in total, but no records match the current filters/search.
			infoText = `${this.config.emptyMessage}`; // Use empty message here too
			// Add information about the total records if filtering is active (filteredRecords < totalRecords).
			if (totalRecords !== filteredRecords) {
				infoText += ` (filtered from ${totalRecords} total entries)`;
			}
		} else {
			// Case: Data is displayed, show the range and filtered total.
			infoText = `Showing ${start} to ${displayEnd} of ${filteredRecords} entries`;
			// Add information about the total records if filtering is active.
			if (totalRecords !== filteredRecords) {
				infoText += ` (filtered from ${totalRecords} total entries)`;
			}
		}

		// Set the calculated text content to the info element.
		infoElement.textContent = infoText;
	}

	// attachEvents: Binds user interactions to system logic using event delegation.
	attachEvents() {

		// Global Search: Listen for keydown (Enter) and blur on the global search box.
		const globalSearchInput = this.element.querySelector('.cdt-global-search');
		if (globalSearchInput && this.config.searching) { // Bind only if global search is enabled.
			globalSearchInput.addEventListener('keydown', (e) => {
				if (e.key === 'Enter') {
					e.preventDefault(); // Prevent default form submission/newline behavior.
					this.handleGlobalSearchEvent(e.target);
				}
			});
             globalSearchInput.addEventListener('blur', (e) => {
                 // Only trigger search if the blur wasn't caused by another input element
                 // within the table gaining focus (e.g., clicking another column search input).
                 if (!e.relatedTarget || !this.element.contains(e.relatedTarget)) {
                    this.handleGlobalSearchEvent(e.target);
                 }
             });
		}

		// Column Search: Use event delegation for keydown (Enter) and blur on column search inputs.
		if (this.config.searching && this.config.columnSearching) { // Bind only if column searching is enabled.
			// Keydown for Enter key (bubbles)
			this.element.addEventListener('keydown', (e) => {
				const targetInput = e.target.closest('.cdt-col-search');
				if (targetInput && e.key === 'Enter') {
					e.preventDefault(); // Prevent default form submission/newline behavior.
					this.handleColumnSearchEvent(targetInput);
				}
			});
            // Blur event (does not bubble, must use capture phase or delegate on a very high ancestor like document, or attach directly)
            // Delegating on the main element in the capture phase is common for non-bubbling events like blur/focus.
            this.element.addEventListener('blur', (e) => {
                const targetInput = e.target.closest('.cdt-col-search');
                // Check if the blurred element is a column search input AND the focus is moving outside the table
                if (targetInput && (!e.relatedTarget || !this.element.contains(e.relatedTarget))) {
                    this.handleColumnSearchEvent(targetInput);
                }
            }, true); // Use capture phase for blur
		}


		// Page Length Change: Listen for changes on the page length select element.
		const pageLengthSelect = this.element.querySelector('.cdt-page-length');
		if (pageLengthSelect && this.config.lengthChange) { // Bind only if length change is enabled.
			pageLengthSelect.addEventListener('change', (e) => {
				const newSize = parseInt(e.target.value, 10);
				// Only proceed if the page size has actually changed.
				if (this.state.pageSize !== newSize) {
					this.state.pageSize = newSize; // Update state with the new page size.
					this.state.page = 1; // Reset to the first page (standard DataTables behavior on length change).
					this.state.expandedRows.clear(); // Clear expanded state on page size change
                    this.state.selectedRows.clear(); // Clear selected state on page size change
					this.$fetchData(); // Summon new data.
				}
			});
		}

		// Sorting: Use event delegation on the table header for clicks on sortable columns.
		const thead = this.element.querySelector(`#${this.config.table_el_id} thead`);
		if (thead && this.config.ordering) { // Bind only if ordering is enabled.
             // NEW LISTENER: Intercept clicks on search inputs in the CAPTURE phase
             thead.addEventListener('click', (e) => {
                 // Check if the clicked element is within a column search input
                 if (e.target.closest('.cdt-col-search')) {
                     // Stop the event from propagating further up the DOM tree.
                     e.stopPropagation();
                 }
             }, true); // <--- IMPORTANT: Use capture phase

			// EXISTING LISTENER: Delegate the click event for sorting (in the bubbling phase)
			thead.addEventListener('click', this.handleSortClick);
		}

		// Column Visibility: Use event delegation on the column visibility dropdown menu for clicks within menu items.
		const columnVisibilityDropdown = this.element.querySelector('.cdt-column-visibility');
		if (columnVisibilityDropdown && this.config.columnVisibility) { // Bind only if column visibility control is enabled.
			// Delegate the click event to the specific handler method.
			columnVisibilityDropdown.addEventListener('click', this.handleColumnVisibilityChange);

             // Prevent dropdown from closing when clicking checkbox directly
             columnVisibilityDropdown.addEventListener('click', (e) => {
                if (e.target.tagName === 'INPUT' && e.target.type === 'checkbox') {
                    e.stopPropagation(); // Stop the click from propagating to the dropdown item's click handler
                }
             });
		}

		// Pagination: Use event delegation on the pagination navigation container for clicks on page links.
		const paginationNav = this.element.querySelector('.cdt-pagination nav');
		if (paginationNav && this.config.paging) { // Bind only if paging is enabled.
			// Delegate the click event to the specific handler method.
			paginationNav.addEventListener('click', this.handlePaginationClick);
		}

		// Export CSV: Listen for clicks on the export button.
		const exportButton = this.element.querySelector('.cdt-export-csv');
		if (exportButton && this.config.exportCSV) { // Bind only if CSV export is enabled.
			exportButton.addEventListener('click', this.exportCSV); // Call the export method.
		}

		// Row Click: Use event delegation on the table body for clicks on table rows (for selection).
		const tbody = this.element.querySelector(`#${this.config.table_el_id} tbody`);
		if (tbody) { // Row click/selection is a common feature regardless of other config.
			// Delegate the click event to the specific handler method.
			tbody.addEventListener('click', this.handleRowClick);

            // Child Row Control Click: Delegate clicks on the expand/collapse control within the tbody.
            if (this.config.childRows) {
                 tbody.addEventListener('click', (e) => {
                     const control = e.target.closest('.cdt-child-control');
                     // Ensure the click was directly on or inside the control cell, and not on a child row itself.
                     if (control && control.parentElement.classList.contains('cdt-child-row') === false) {
                          e.preventDefault(); // Prevent any default link behavior
                          e.stopPropagation(); // Stop the event from bubbling up to the row click handler
                          this.handleChildControlClick(control);
                     }
                 });
            }
		}

		// State Saving on Unload: If state saving is enabled, listen for the window unload event.
		if (this.config.stateSave) {
			// Bind the saveState method to the window's 'beforeunload' event.
			window.addEventListener('beforeunload', this.saveState);
		}
	}

    // Handler for global search input events (Enter key, Blur)
    handleGlobalSearchEvent(inputElement) {
        const newValue = inputElement.value.trim();
        // Only proceed if the search value has actually changed to avoid unnecessary fetches.
        if (this.state.search !== newValue) {
            this.state.search = newValue; // Update state with the new global search value.
            this.state.page = 1; // Reset to the first page upon a new search.
            this.state.expandedRows.clear(); // Clear expanded state on new search
            this.state.selectedRows.clear(); // Clear selected state on new search
            this.$fetchData(); // Summon new data based on the updated state.
        }
    }

     // Handler for column search input events (Enter key, Blur)
     handleColumnSearchEvent(inputElement) {
         const col = inputElement.dataset.col; // Get the column name from the data attribute.
         if (!col) return;

         const newValue = inputElement.value.trim();
         const currentFilter = this.state.columnFilters.get(col)?.value || '';

         // Only proceed if the filter value for this column has changed.
         if (currentFilter !== newValue) {
             // Store the new filter value in the state's columnFilters map.
             this.state.columnFilters.set(col, { value: newValue, regex: false }); // regex option is present but not currently toggled by UI.
             this.state.page = 1; // Reset to the first page for a new column filter.
             this.state.expandedRows.clear(); // Clear expanded state on new filter
             this.state.selectedRows.clear(); // Clear selected state on new filter
             this.$fetchData(); // Summon new data.
         }
     }

	// handleSortClick: Handler for clicks on sortable table headers.
	handleSortClick(e) {
		// Find the closest sortable header ancestor.
		const th = e.target.closest('.cdt-sortable');
		if (!th) return; // If the click wasn't on a sortable header, do nothing.

		e.preventDefault(); // Prevent default link/button behavior if any inside TH.

		const col = th.dataset.col; // Get the column name from the data attribute.
		if (!col) return;

		const currentDir = this.state.sort.get(col); // Get the current sort direction for this column.
		let newDir;

		// Determine the new sort direction based on the current one.
		if (!currentDir) {
			newDir = 'asc'; // If not sorted, start with ascending.
		} else if (currentDir === 'asc') {
			newDir = 'desc'; // If ascending, next is descending.
		} else {
			newDir = undefined; // If descending, next is no sort for this column.
		}

		// Handle multi-column sort with Shift key press.
		if (e.shiftKey) {
			// If Shift is held: Add/update the sort criteria for this column, preserving others.
			if (newDir) {
				this.state.sort.set(col, newDir);
			} else {
				this.state.sort.delete(col); // Remove sort criteria if cycling back to 'none'.
			}
		} else {
			// If Shift is NOT held: Perform single column sort. Clear all existing sorts.
			this.state.sort.clear();
			if (newDir) {
				this.state.sort.set(col, newDir); // Set only the sort for the clicked column.
			}
		}

		this.state.page = 1; // Reset to the first page on sort change.
        this.state.expandedRows.clear(); // Clear expanded state on sort change
        this.state.selectedRows.clear(); // Clear selected state on sort change
		this.$fetchData(); // Summon new data with the updated sort criteria.
		// Note: renderTableHeader is called after fetchData to update sort icons based on the new state.
	}

	// handleColumnVisibilityChange: Handler for clicks within the column visibility dropdown.
	handleColumnVisibilityChange(e) {
		// Prevent the dropdown menu from closing when the checkbox/link is clicked.
		// Note: A separate listener was added in attachEvents to stop propagation for clicks directly on the checkbox.
		// This handler catches clicks on the 'a.dropdown-item'.
		e.stopPropagation();

		// Find the closest menu item link ancestor.
		const link = e.target.closest('a.dropdown-item');
		if (!link) return; // If the click wasn't on a menu item link, do nothing.

		e.preventDefault(); // Prevent default link behavior (e.g., navigating to #).

		const colName = link.dataset.col; // Get the column name from the link's data attribute.
		// Find the checkbox within the clicked menu item.
		const checkbox = link.querySelector('input[type="checkbox"]');

		if (!colName || !checkbox) {
             console.warn("CustomDataTable: Column visibility link or checkbox not found.");
             return; // Ensure we have necessary elements.
        }

		// Toggle the checkbox state if the click wasn't directly on the checkbox itself.
		// This makes clicking the link text also toggle the checkbox.
		const clickedElement = e.target;
		if (clickedElement !== checkbox) {
			checkbox.checked = !checkbox.checked;
		}
		// At this point, checkbox.checked reflects the desired visibility state.

		const isVisible = checkbox.checked; // The new visibility state.

		// Update the system state if the column's visibility is actually changing.
		if (this.state.columnVisibility.get(colName) !== isVisible) {
			this.state.columnVisibility.set(colName, isVisible); // Update the state map.

			// Re-render header and body to reflect the visibility change.
			this.renderTableHeader(); // Header needs to show/hide the TH.
			this.renderTableBody(); // Body needs to show/hide the TDs.
			// No fetchData needed as visibility is a client-side rendering concern based on available data.

			// Save the system's state if state saving is enabled.
			if (this.config.stateSave) {
				this.saveState();
			}
		}
	}

	// handlePaginationClick: Handler for clicks on pagination links (page numbers, prev, next).
	handlePaginationClick(e) {
		e.preventDefault(); // Prevent default link navigation.

		// Find the closest page link ancestor.
		const link = e.target.closest('.page-link');
		// Ignore clicks not on links or on disabled links (including ellipses).
		if (!link || link.parentElement.classList.contains('disabled')) {
			return;
		}

		const dataPage = link.dataset.page; // Get the page action/number from the data attribute.
		let newPage = this.state.page; // Initialize the potential new page number.

		// Determine the new page based on the link's data-page attribute.
		if (dataPage === 'prev') {
			newPage = this.state.page - 1; // Go to the previous page.
		} else if (dataPage === 'next') {
			newPage = this.state.page + 1; // Go to the next page.
		} else {
			newPage = parseInt(dataPage, 10); // Go to a specific page number.
		}

		const totalPages = Math.ceil(this.state.filteredRecords / this.state.pageSize); // Calculate total pages.

		// Validate the calculated new page number.
		if (newPage >= 1 && newPage <= totalPages && newPage !== this.state.page) {
			this.state.page = newPage; // Update the state with the new page number.
            this.state.expandedRows.clear(); // Clear expanded state on page change
            this.state.selectedRows.clear(); // Clear selected state on page change
			this.$fetchData(); // Summon data for the new page.
		}
	}

	// handleRowClick: Handler for clicks on table rows (used for selection).
	handleRowClick(e) {
		// Find the closest table row ancestor.
		const tr = e.target.closest('tr');
		// Ignore clicks not on rows, on the "no data" row (which spans all columns), or on a child row.
		if (!tr || tr.querySelector('td[colspan]') || tr.classList.contains('cdt-child-row')) {
			return;
		}

        // Do not select if the click was on the child control button
        if (e.target.closest('.cdt-child-control')) {
             return;
        }


		// Determine the index of the clicked row among the currently displayed rows.
		// Use the data-row-index set during rendering
        const rowIndex = parseInt(tr.dataset.rowIndex, 10);

		// Ensure the row index is valid and corresponds to an item in the current data.
		if (isNaN(rowIndex) || rowIndex < 0 || rowIndex >= this.state.data.length) {
			console.warn('CustomDataTable: Could not find corresponding data object for clicked row.');
			return;
		}

		// Get the data object for the clicked row.
		const rowData = this.state.data[rowIndex]; // This is the data object for the clicked row.

		// Toggle the selection state for this data object.
		if (this.state.selectedRows.has(rowData)) {
			// If already selected, remove it from the set.
			this.state.selectedRows.delete(rowData);
			tr.classList.remove('table-primary'); // Remove selection styling.
		} else {
			// If not selected, add it to the set.
			this.state.selectedRows.add(rowData);
			tr.classList.add('table-primary'); // Add selection styling.
		}

		// Note: For multi-select with Ctrl/Meta key, you would check e.ctrlKey || e.metaKey here
		// and potentially adjust the logic to add/remove without clearing others.
	}

    // handleChildControlClick: Handler for clicks on the child row expand/collapse control.
    handleChildControlClick(controlElement) {
         if (!this.config.childRows || typeof this.config.childRowRenderer !== 'function') {
             return; // Ensure feature is enabled and renderer exists
         }

         // Find the parent row (<tr>) of the clicked control cell (<td>).
         const parentTr = controlElement.closest('tr');
         if (!parentTr) return;

         // Get the row index from the parent row's data attribute
         const rowIndex = parseInt(parentTr.dataset.rowIndex, 10);
         if (isNaN(rowIndex) || rowIndex < 0 || rowIndex >= this.state.data.length) {
             console.warn('CustomDataTable: Could not determine row data for child control click.');
             return;
         }

         const rowData = this.state.data[rowIndex]; // Get the data object for the row

         const isExpanded = this.state.expandedRows.has(rowData); // Check current state

         if (isExpanded) {
             // Row is currently expanded -> Collapse it.
             this.state.expandedRows.delete(rowData); // Remove from expanded state set

             // Find and remove the child row (should be the immediately following sibling)
             const childTr = parentTr.nextElementSibling;
             if (childTr && childTr.classList.contains('cdt-child-row')) {
                 childTr.remove(); // Remove the child row from the DOM
             }

             // Update the icon/text in the control cell
             const iconSpan = controlElement.querySelector('.cdt-child-icon');
             if (iconSpan) {
                 iconSpan.textContent = '+';
                 iconSpan.setAttribute('aria-label', 'Expand row');
             }

         } else {
             // Row is currently collapsed -> Expand it.
             this.state.expandedRows.add(rowData); // Add to expanded state set

             // Create and insert the child row
             const childTr = document.createElement('tr');
             childTr.classList.add('cdt-child-row'); // Add class

             const childTd = document.createElement('td');
             // Colspan needs to cover all parent columns: the control column + all visible data columns
             const visibleDataColumns = Object.entries(this.config.columns).filter(([name]) => this.state.columnVisibility.get(name));
             const numVisibleDataCols = visibleDataColumns.length;
             const totalParentCols = numVisibleDataCols + 1; // +1 for the control column
             childTd.setAttribute('colspan', totalParentCols);
             childTd.classList.add('cdt-child-content'); // Add class

             // Render the content
             const content = this.config.childRowRenderer(rowData, rowIndex, this.state.draw);
              if (content instanceof HTMLElement) {
                  childTd.appendChild(content);
              } else {
                  childTd.innerHTML = String(content);
              }

             childTr.appendChild(childTd); // Add cell to child row

             // Insert the child row immediately after the parent row in the DOM
             parentTr.insertAdjacentElement('afterend', childTr);

             // Update the icon/text in the control cell
             const iconSpan = controlElement.querySelector('.cdt-child-icon');
             if (iconSpan) {
                 iconSpan.textContent = '-';
                 iconSpan.setAttribute('aria-label', 'Collapse row');
             }
         }

         // Note: Expanded state is currently NOT saved to localStorage.
         // If stateSave was intended to cover expanded rows, the saveState/loadState methods would need modification,
         // and expandedRows would likely need to store a unique ID instead of the object reference.
    }


	// fetchData: Summons data from the external source based on the current system state.
	async $fetchData() {
		this.state.draw++; // Increment the draw counter for this request.
		this.state.isLoading = true; // Indicate that the system is busy.
		this.showLoading(); // Manifest the loading indicator.

        // Before fetching, clear selected/expanded rows IF they are not meant to persist across fetches.
        // With current implementation (Set<object>), they cannot persist reliably if data instances change.
        // So, clear them.
        this.state.selectedRows.clear();
        this.state.expandedRows.clear();


		// Construct the request payload, mapping internal state to server-expected parameters (DataTables format).
		const requestPayload = {
			// Synchronization counter.
			[this.config.requestParams.draw]: this.state.draw,
			// Pagination parameters: starting row index and number of rows per page.
			[this.config.requestParams.start]: (this.state.page - 1) * this.state.pageSize,
			[this.config.requestParams.length]: this.config.paging ? this.state.pageSize : -1, // Send -1 length if paging is disabled.

			// Global Search parameter.
			[this.config.requestParams.search]: {
				value: this.config.searching ? this.state.search : '', // Include global search value if enabled.
				regex: false, // Regex is not currently supported via UI toggle.
			},

			// Ordering parameters: An array of objects specifying columns and directions.
			[this.config.requestParams.order]: Array.from(this.state.sort).map(([colName, dir]) => {
				return { column: colName, dir: dir }; // Send the column name and direction
			}).filter(item => item !== null), // Remove any null entries (shouldn't happen with colName now)

			// Column definitions and per-column search parameters.
			[this.config.requestParams.columns]: Object.entries(this.config.columns).map(([name, colConfig]) => ({
				data: name, // Use 'data' property name as per DataTables spec if needed, though 'column' was used in SSP. Let's align to 'data' in request, keep 'column' in SSP response. Reverted: Keep 'column' in request for SSP match.
				column: name, // The property name in the data object / alias expected by SSP
				name: name, // Often same as 'data' and 'column'
				searchable: colConfig.searchable === true, // Report if the column is searchable.
				orderable: colConfig.sortable === true, // Report if the column is orderable.
				search: { // Per-column search value for this column.
					value: this.config.searching && this.config.columnSearching && colConfig.searchable ? (this.state.columnFilters.get(name)?.value || '') : '',
					regex: this.config.searching && this.config.columnSearching && colConfig.searchable ? (this.state.columnFilters.get(name)?.regex || false) : false,
				},
			})),

			// Include any custom parameters from the config.
			...(this.config.customParams || {}), // Spread custom params here
		};

		try {
			// Execute the asynchronous fetch ritual.
			const response = await fetch(this.config.endpoint, {
				method: this.config.method, // Use the configured HTTP method.
				headers: { 'Content-Type': 'application/json' }, // Specify the request body format.
				body: JSON.stringify(requestPayload), // Send the constructed payload as JSON.
				// credentials: 'include' might be needed for cookies/sessions.
			});

			// Check the response status for HTTP errors.
			if (!response.ok) {
				let errorDetail = `HTTP error! status: ${response.status}`;
				let errorBody = null;
				try {
					// Attempt to get JSON body even on error for more details
					errorBody = await response.json();
					// Attempt to include server-provided error details if available.
                    if (errorBody && (errorBody.error || errorBody.message)) {
                        errorDetail += ` - ${errorBody.error || errorBody.message}`;
                    } else if (JSON.stringify(errorBody) !== '{}') {
                         errorDetail += ` - ${JSON.stringify(errorBody)}`;
                    }

				} 
				catch (e) {
					// Ignore if the response body isn't JSON or empty.
					alert(e)

				}
				// Cast an error to be caught in the catch block.
				const httpError = new Error(errorDetail);
				httpError.responseBody = errorBody; // Attach response body for potential debugging
				alert(errorDetail)

				throw httpError;
			}

			// Parse the received truth (JSON data).
			const data = await response.json();

			// Validate the draw counter to ensure the response is not outdated.
			if (data[this.config.responseParams.draw] !== this.state.draw) {
				console.warn('CustomDataTable: Received outdated data for draw', data[this.config.responseParams.draw], '. Current draw is', this.state.draw, '. Ignoring.');
				alert('CustomDataTable: Received outdated data for draw')

				// Still hide loading even for outdated data
				this.state.isLoading = false;
				this.hideLoading();
				return; // Discard outdated data.
			}

			// Validate the basic structure of the received data using configured response parameters.
			const recordsTotal = data[this.config.responseParams.recordsTotal];
            const recordsFiltered = data[this.config.responseParams.recordsFiltered];
            const responseData = data[this.config.responseParams.data];

			if (recordsTotal === undefined || recordsFiltered === undefined || !Array.isArray(responseData)) {
				// Cast an error if the data structure is invalid.
				throw new Error(`CustomDataTable: Invalid data structure received from server. Expected properties: "${this.config.responseParams.recordsTotal}", "${this.config.responseParams.recordsFiltered}", "${this.config.responseParams.data}".`);
			}

			// Update the system's state with the received truth.
			this.state.totalRecords = recordsTotal;
			this.state.filteredRecords = recordsFiltered;
			this.state.data = responseData; // Store the data for the current page.

			// Re-render the visible interface based on the new state.
			this.renderTableHeader(); // Update sort icons etc.
			this.renderTableBody(); // Populate the table with data. Child rows will be rendered here if needed.
			this.renderPagination(); // Update pagination controls.
			this.renderInfo(); // Update the info summary.

			// Invoke the success callback.
			this.config.onDataLoad(data);

			// Save the system's state if state saving is enabled.
			// Note: selectedRows and expandedRows are NOT saved.
			if (this.config.stateSave) {
				this.saveState();
			}

		} catch (err) {
			// Handle errors during the fetch ritual.
			console.error('CustomDataTable Fetch error:', err); // Log the error.
			alert(`CustomDataTable Fetch error: ${err}`);

			// Reset state related to data display.
			this.state.data = []; // Clear data on error.
			this.state.totalRecords = 0;
			this.state.filteredRecords = 0;
            this.state.expandedRows.clear(); // Clear expanded state on error
            this.state.selectedRows.clear(); // Clear selected state on error
			// Decide whether to reset page to 1 on error or keep it. Keeping it might be confusing if no data renders.
			this.state.page = 1;

			// Re-render the interface to show the error state.
			this.renderTableBody(this.config.errorMessage); // Display the configured error message.
			this.renderPagination(); // Update pagination (will show 0 pages, disabling buttons).
			this.renderInfo(); // Update info (will show 0 entries).

			// Invoke the error callback.
			this.config.onError(err);
			alert(err)

		} finally {
             // Ensure loading indicator is hidden regardless of success or failure.
            this.state.isLoading = false;
			this.hideLoading();
        }
	}

	// showLoading: Makes the loading indicator visible.
	showLoading() {
        const loadingOverlay = this.element.querySelector('.cdt-loading-overlay');
		if (loadingOverlay) {
            // Position overlay over the table container
            const tableContainer = this.element.querySelector('.cdt-table-container');
            if(tableContainer) {
                const rect = tableContainer.getBoundingClientRect();
                 // Adjust position to be relative to the viewport
                 loadingOverlay.style.position = 'fixed';
                 loadingOverlay.style.top = `${rect.top}px`;
                 loadingOverlay.style.left = `${rect.left}px`;
                 loadingOverlay.style.width = `${rect.width}px`;
                 loadingOverlay.style.height = `${rect.height}px`;
                 loadingOverlay.style.zIndex = '10'; // Ensure it's above table content
            } else {
                 // Fallback if table container not found, just center in parent
                 loadingOverlay.style.position = 'absolute'; // Assumes parent is relative/absolute
                 loadingOverlay.style.top = '50%';
                 loadingOverlay.style.left = '50%';
                 loadingOverlay.style.transform = 'translate(-50%, -50%)';
                 loadingOverlay.style.width = 'auto';
                 loadingOverlay.style.height = 'auto';
                 loadingOverlay.style.zIndex = '';
            }

			loadingOverlay.classList.remove('d-none'); // Remove the hidden class.
            // Add spinner display class if needed by Bootstrap
             const spinner = loadingOverlay.querySelector('.spinner-border');
             if(spinner) spinner.classList.add('d-flex'); // Or appropriate class to make it visible/centered

            // Optional: Disable controls during loading
            this.element.querySelectorAll('.cdt-controls input, .cdt-controls select, .cdt-controls button').forEach(el => el.disabled = true);
		}
	}

	// hideLoading: Makes the loading indicator hidden.
	hideLoading() {
		const loadingOverlay = this.element.querySelector('.cdt-loading-overlay');
		if (loadingOverlay) {
			loadingOverlay.classList.add('d-none'); // Add the hidden class.
            const spinner = loadingOverlay.querySelector('.spinner-border');
            if(spinner) spinner.classList.remove('d-flex');

			// Optional: Re-enable controls after loading.
			this.element.querySelectorAll('.cdt-controls input, .cdt-controls select, .cdt-controls button').forEach(el => el.disabled = false);
		}
	}


	// exportCSV: Exports the *currently displayed* data to a CSV file.
	// Note: For large datasets, a server-side export endpoint is recommended to export *all* filtered data.
	exportCSV() {
		// Ensure CSV export is enabled.
		if (!this.config.exportCSV) {
			console.warn('CustomDataTable: CSV export is disabled in configuration.');
			return;
		}

        // Only export the defined data columns, regardless of visibility or child rows.
		const columnsToExport = Object.entries(this.config.columns);

		// Create the CSV header row using column labels or names.
		const headers = columnsToExport.map(([name, col]) =>
			// Escape double quotes by doubling them, and enclose the whole header in double quotes.
			`"${(col.label || name).replace(/"/g, '""')}"`
		).join(',');

		// Create the CSV data rows.
		const rows = this.state.data.map(rowData =>
			columnsToExport.map(([name, col]) => {
				const value = rowData[name]; // Get the raw value.
				// Apply renderer if it exists, otherwise use raw value.
                // Note: This applies renderer output to CSV, which might include HTML.
                // A production CSV export might need a specific text renderer or strip HTML.
				const renderedValue = (col.renderer ? col.renderer(value, rowData, 0, this.state.draw) : value) || ''; // Pass dummy rowIndex/draw
				// Escape double quotes and enclose the cell value in double quotes.
				// Also handle potential newlines in data by replacing them with spaces or similar if needed for CSV
                // Convert to string explicitly before replace
				return `"${String(renderedValue).replace(/"/g, '""').replace(/\n/g, ' ').replace(/\r/g, '')}"`;
			}).join(',') // Join cell values with commas for each row.
		);

		// Combine header and rows.
		const csv = [headers, ...rows].join('\n');

		// Create a Blob and a temporary URL for the CSV data.
		const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
		const url = URL.createObjectURL(blob);

		// Create and click a temporary link element to trigger download.
		const a = document.createElement('a');
		a.href = url;
		a.download = `${this.config.table_el_id}_export.csv`; // Set the download filename based on table ID.
		// Append to body and click to ensure download works across browsers, especially Firefox.
		document.body.appendChild(a);
		a.click();

		// Clean up the temporary link and URL.
		document.body.removeChild(a);
		URL.revokeObjectURL(url);
	}

	// saveState: Saves the table's current state to localStorage.
	// Note: expandedRows and selectedRows are explicitly NOT saved with this implementation.
	saveState() {
		// Ensure state saving is enabled.
		if (!this.config.stateSave) return;

		// Define the state parts to save.
		const stateToSave = {
			page: this.state.page,
			pageSize: this.state.pageSize,
			search: this.state.search,
			// Convert Maps to Arrays for JSON serialization.
			columnFilters: Array.from(this.state.columnFilters.entries()),
			sort: Array.from(this.state.sort.entries()),
			columnVisibility: Array.from(this.state.columnVisibility.entries()),
			// selectedRows is NOT saved as it stores data object references (non-persistent across fetches).
            // expandedRows is NOT saved for the same reason (stores object references).
		};

		try {
			// Serialize and store the state in localStorage using a unique key.
			localStorage.setItem(`cdt-state-${this.config.table_el_id}`, JSON.stringify(stateToSave));
			// console.log('CustomDataTable: State saved', stateToSave); // Optional logging.
		} catch (e) {
			console.error('CustomDataTable: Failed to save state to localStorage', e); // Log errors.
		}
	}

	// loadState: Loads the table's state from localStorage and applies it.
	loadState() {
		// Ensure state saving is enabled.
		if (!this.config.stateSave) return;

		try {
			// Retrieve the saved state string.
			const savedState = localStorage.getItem(`cdt-state-${this.config.table_el_id}`);
			if (savedState) {
				// Parse the JSON string.
				const state = JSON.parse(savedState);
				// console.log('CustomDataTable: State loaded', state); // Optional logging.

				// Apply loaded state, validating values against current config.

				// Page size: Apply if valid option.
				if (state.pageSize !== undefined && this.config.pageLengthOptions.includes(state.pageSize)) {
					this.state.pageSize = state.pageSize;
				}
				// Page number: Restoring page directly can be tricky with server-side if filtered records change.
				// Initial fetchData will use page 1 anyway. You might restore page AFTER the first fetch if needed,
				// but it adds complexity (e.g., handle saved page > new total pages).
				// For simplicity, we rely on initial page=1 from state definition + fetch.
				// this.state.page = state.page || 1; // Keep initial state page=1

				// Global search: Apply if exists in saved state.
				if (state.search !== undefined) {
					this.state.search = state.search;
				}

				// Column filters: Apply if valid structure and columns exist in config.
				if (Array.isArray(state.columnFilters)) {
					// Filter out entries for columns that no longer exist in the config
					this.state.columnFilters = new Map(state.columnFilters.filter(([colName]) => this.config.columns[colName]));
				} else {
                    this.state.columnFilters.clear(); // Clear if invalid saved state
                }

				// Sort: Apply if valid structure and columns exist in config.
				if (Array.isArray(state.sort)) {
					// Filter out entries for columns that no longer exist or are not sortable in the config
					const validSort = state.sort.filter(([colName]) => this.config.columns[colName]?.sortable);
                    if (validSort.length > 0) {
                         this.state.sort = new Map(validSort);
                    } else {
                         // If no valid saved sort, apply default sort if configured
                         this.state.sort.clear();
                         if (this.config.defaultSort.length > 0) {
                            this.config.defaultSort.forEach(s => this.state.sort.set(s.column, s.dir));
                         }
                    }
				} else if (this.config.defaultSort.length > 0) {
                    // If no saved sort or invalid, apply default sort from config.
                    this.state.sort.clear();
                    this.config.defaultSort.forEach(s => this.state.sort.set(s.column, s.dir));
                }


				// Column visibility: Apply, merging saved state with current config defaults.
				if (Array.isArray(state.columnVisibility)) {
					const savedVisibility = new Map(state.columnVisibility);
                    const newVisibility = new Map();
					Object.keys(this.config.columns).forEach(name => {
						// Use saved state if available for this column, else use config default, else default to true.
						const isVisible = savedVisibility.has(name) ? savedVisibility.get(name) :
										  (this.config.columns[name]?.visible !== undefined ? this.config.columns[name].visible : true);
						// Only set if it exists in the current config
						if (this.config.columns[name]) {
                            newVisibility.set(name, isVisible);
                        }
					});
                    this.state.columnVisibility = newVisibility; // Replace the map
				} else {
                    // If no saved visibility, initialize from config defaults
                     this.state.columnVisibility.clear();
                    Object.keys(this.config.columns).forEach(name => {
                        const isVisible = this.config.columns[name]?.visible !== undefined ? this.config.columns[name].visible : true;
                        this.state.columnVisibility.set(name, isVisible);
                    });
                }


				// After loading state, update input fields in the DOM to reflect loaded values
				// This needs to happen AFTER renderStructure has created the inputs,
				// but BEFORE the first $fetchData if you want the initial fetch to use loaded filters.
				// Since $fetchData is called in init() after attachEvents (which is after renderStructure),
				// the inputs will be updated before the first fetch.
				requestAnimationFrame(() => {
					const globalSearchInput = this.element.querySelector('.cdt-global-search');
					if (globalSearchInput && this.config.searching) {
						globalSearchInput.value = this.state.search;
					}
					if (this.config.searching && this.config.columnSearching) {
						this.state.columnFilters.forEach((filter, colName) => {
							const colSearchInput = this.element.querySelector(`.cdt-col-search[data-col="${colName}"]`);
							if (colSearchInput) {
								colSearchInput.value = filter.value;
							}
						});
					}
					// Page length select value is set in renderStructure based on this.state.pageSize.
					// Column visibility checkboxes are set in renderStructure based on this.state.columnVisibility.
					// Re-render header/body immediately after loading visibility to ensure correct display
                    // This is handled by renderStructure/renderTableHeader/renderTableBody being called in init()
				});

			} else if (this.config.defaultSort.length > 0) {
                // If no saved state found, but default sort is configured, apply it.
                this.state.sort.clear();
                this.config.defaultSort.forEach(s => this.state.sort.set(s.column, s.dir));
            }

		} catch (e) {
			console.error('CustomDataTable: Failed to load state from localStorage', e); // Log errors.
			// Clear potentially corrupt state to prevent future loading issues.
			localStorage.removeItem(`cdt-state-${this.config.table_el_id}`);
            // Optionally, reset the state to its initial values or config defaults if loading failed critical parts
            this.state.page = 1;
            this.state.pageSize = this.config.pageSize;
            this.state.search = '';
            this.state.columnFilters.clear();
             this.state.sort.clear();
             this.config.defaultSort.forEach(s => this.state.sort.set(s.column, s.dir)); // Re-apply default sort
             this.state.columnVisibility.clear();
              Object.keys(this.config.columns).forEach(name => {
                 const isVisible = this.config.columns[name]?.visible !== undefined ? this.config.columns[name].visible : true;
                 this.state.columnVisibility.set(name, isVisible);
             });
             this.state.expandedRows.clear();
             this.state.selectedRows.clear();
		}
	}


	// --- Public API Methods ---

    /**
     * Clears the selected rows state.
     */
    clearSelectedRows() {
        if (this.state.selectedRows.size > 0) {
            this.state.selectedRows.clear();
            // Re-render the table body to remove highlight classes
            this.renderTableBody();
        }
    }

    /**
     * Clears the expanded rows state.
     * Note: This only affects rows on the current page.
     */
     clearExpandedRows() {
        if (this.state.expandedRows.size > 0) {
            this.state.expandedRows.clear();
            // Re-render the table body to remove child rows
            this.renderTableBody();
        }
     }


	/**
	 * Returns an array of data objects for the currently selected rows on the *current* page.
	 * Note: Selection state is not persistent across fetches with the current implementation.
	 * @returns {object[]} An array of data objects.
	 */
	getSelectedData() {
		return Array.from(this.state.selectedRows);
	}

	/**
	 * Triggers a data fetch based on the table's current state (page, filters, sort) without resetting pagination.
	 * Equivalent to DataTables `.draw(false)`. Clears selected/expanded rows.
	 */
	redraw() {
         this.state.selectedRows.clear(); // Clear selected rows on redraw
         this.state.expandedRows.clear(); // Clear expanded rows on redraw
		this.$fetchData();
	}

    /**
	 * Programmatically sets the global search value and updates the table.
	 * Resets pagination to the first page, clears selected/expanded rows.
	 * @param {string} value - The search term to apply.
	 */
	search(value) {
		if (this.config.searching) {
			const globalSearchInput = this.element.querySelector('.cdt-global-search');
			if (globalSearchInput) {
				globalSearchInput.value = value; // Update the input field visually.
			}
            const newValue = value.trim();
            if (this.state.search !== newValue) {
                this.state.search = newValue; // Update the state.
                this.state.page = 1; // Reset page to 1.
                this.state.expandedRows.clear(); // Clear expanded state
                this.state.selectedRows.clear(); // Clear selected state
                this.$fetchData(); // Trigger data fetch.
            }
		} else {
			console.warn('CustomDataTable: Global searching is disabled in config.');
		}
	}

	/**
	 * Programmatically sets a specific column's search value and updates the table.
	 * Resets pagination to the first page, clears selected/expanded rows.
	 * @param {string} colName - The name of the column to filter.
	 * @param {string} value - The search term to apply to this column.
	 */
	columnSearch(colName, value) {
		// Check if column searching is enabled and the column exists and is searchable.
		if (this.config.searching && this.config.columnSearching && this.config.columns[colName]?.searchable) {
			const colSearchInput = this.element.querySelector(`.cdt-col-search[data-col="${colName}"]`);
			if (colSearchInput) {
				colSearchInput.value = value; // Update the input field visually.
			}
            const newValue = value.trim();
            const currentFilter = this.state.columnFilters.get(colName)?.value || '';
            if (currentFilter !== newValue) {
                // Update the column filter state. Assuming no regex via API for simplicity here.
                this.state.columnFilters.set(colName, { value: newValue, regex: false });
                this.state.page = 1; // Reset page to 1.
                 this.state.expandedRows.clear(); // Clear expanded state
                 this.state.selectedRows.clear(); // Clear selected state
                this.$fetchData(); // Trigger data fetch.
            }
		} else {
			console.warn(`CustomDataTable: Column searching is disabled or column "${colName}" is not searchable.`);
		}
	}

	/**
	 * Programmatically navigates to a specific page. Clears selected/expanded rows.
	 * @param {number} pageNumber - The 1-based page number to navigate to.
	 */
	page(pageNumber) {
		const totalPages = Math.ceil(this.state.filteredRecords / this.state.pageSize);
		// Validate the requested page number.
		if (pageNumber >= 1 && pageNumber <= totalPages && pageNumber !== this.state.page) {
			this.state.page = pageNumber; // Update the state.
             this.state.expandedRows.clear(); // Clear expanded state on page change
             this.state.selectedRows.clear(); // Clear selected state on page change
			this.$fetchData(); // Trigger data fetch.
		} else {
			console.warn(`CustomDataTable: Invalid page number: ${pageNumber}. Total pages: ${totalPages}.`);
		}
	}

	/**
	 * Programmatically sets the number of entries displayed per page.
	 * Resets pagination to the first page, clears selected/expanded rows.
	 * @param {number} length - The desired number of entries per page. Must be in pageLengthOptions.
	 */
	pageLength(length) {
		// Validate the requested page length against allowed options.
		if (this.config.lengthChange && this.config.pageLengthOptions.includes(length)) {
			const pageLengthSelect = this.element.querySelector('.cdt-page-length');
			if (pageLengthSelect) {
				pageLengthSelect.value = length; // Update the select element visually.
			}
            // Only update state and fetch if size changes
            if (this.state.pageSize !== length) {
                this.state.pageSize = length; // Update the state.
                this.state.page = 1; // Reset page to 1 (DataTables standard).
                 this.state.expandedRows.clear(); // Clear expanded state
                 this.state.selectedRows.clear(); // Clear selected state
                this.$fetchData(); // Trigger data fetch.
            }
		} else {
			console.warn(`CustomDataTable: Invalid page length: ${length}. Must be one of [${this.config.pageLengthOptions.join(', ')}]. Length change feature must also be enabled.`);
		}
	}

	/**
	 * Programmatically sets the table's sorting order.
	 * Resets pagination to the first page, clears selected/expanded rows.
	 * @param {Array<{column: string, dir: 'asc'|'desc'}>} sortArray - An array of sort criteria.
	 */
	order(sortArray) {
		if (this.config.ordering) {
			const newSort = new Map();
			let isValidFormat = true;
			// Validate the sort array format.
			if (!Array.isArray(sortArray)) {
                 console.warn('CustomDataTable: Invalid sort format. Expected an array.');
                 isValidFormat = false;
             } else {
                sortArray.forEach(s => {
                    // Check if column exists, is sortable, and direction is valid.
                    if (s && typeof s.column === 'string' && this.config.columns[s.column]?.sortable && (s.dir === 'asc' || s.dir === 'desc')) {
                        newSort.set(s.column, s.dir);
                    } else {
                        console.warn(`CustomDataTable: Invalid sort order ignored: { column: "${s?.column}", dir: "${s?.dir}" }. Column must exist, be sortable, and direction must be 'asc' or 'desc'.`);
                        // Decide if you want to invalidate the whole array or just skip invalid entries. Skipping seems more robust.
                    }
                });
             }

			// Only apply the sort if the format was valid and the new sort state is different from the current one.
            const currentSortArray = Array.from(this.state.sort.entries());
            const newSortArray = Array.from(newSort.entries());

            // Simple string comparison of JSON stringified arrays for deep comparison
            const currentSortString = JSON.stringify(currentSortArray);
            const newSortString = JSON.stringify(newSortArray);

			if (isValidFormat && currentSortString !== newSortString) {
				this.state.sort = newSort; // Update the state.
				this.state.page = 1; // Reset page to 1.
                 this.state.expandedRows.clear(); // Clear expanded state
                 this.state.selectedRows.clear(); // Clear selected state
				this.$fetchData(); // Trigger data fetch.
			} else if (!isValidFormat) {
                // Invalid format, do nothing.
            } else {
                 // Sort order is the same, do nothing.
                // console.log('CustomDataTable: Order unchanged.'); // Too noisy maybe
            }

		} else {
			console.warn('CustomDataTable: Ordering is disabled in config.');
		}
	}

	/**
	 * Provides a chainable API to access column-specific methods.
	 * @param {string} colName - The name of the column.
	 * @returns {object} An object with column-specific methods (e.g., .visible(), .search(), .settings()).
	 */
	column(colName) {
		// Check if the column exists in the configuration.
		if (!this.config.columns[colName]) {
			console.warn(`CustomDataTable: Column "${colName}" not found.`);
			// Return a stub object with methods that warn but do nothing, allowing chaining without error.
			const stubApi = {
				visible: (show) => { console.warn(`CustomDataTable: Cannot call method 'visible' on non-existent column "${colName}".`); return stubApi; },
                search: (value) => { console.warn(`CustomDataTable: Cannot call method 'search' on non-existent column "${colName}".`); return stubApi; },
                settings: () => { console.warn(`CustomDataTable: Cannot get settings for non-existent column "${colName}".`); return undefined; },
			};
			return stubApi;
		}

		// Return an object containing methods specific to the column. This object is chainable.
		const columnApi = {
			/**
			 * Sets or gets the visibility of the column.
			 * @param {boolean} [show] - If provided, sets the visibility (true for show, false for hide).
			 * @returns {boolean|object} The current visibility if no argument is given, otherwise the columnApi object for chaining.
			 */
			visible: (show) => {
				// If 'show' is undefined, act as a getter.
				if (show === undefined) {
					return this.state.columnVisibility.get(colName) || false; // Return current visibility state.
				} else {
					// If 'show' is defined, act as a setter.
					// Ensure column visibility control is enabled.
					if (this.config.columnVisibility) {
						const isVisible = !!show; // Ensure boolean value.
						// Only proceed if the visibility state is actually changing.
						if (this.state.columnVisibility.get(colName) !== isVisible) {
							this.state.columnVisibility.set(colName, isVisible); // Update state.
							// Find and update the corresponding checkbox in the dropdown.
							const checkbox = this.element.querySelector(`.cdt-column-visibility input[data-col="${colName}"]`);
							if (checkbox) {
								checkbox.checked = isVisible;
							}
							// Re-render header (to update TH visibility) and body (to update TD visibility).
							this.renderTableHeader();
							this.renderTableBody();
							// Save state if enabled.
							if (this.config.stateSave) {
								this.saveState();
							}
						}
					} else {
						console.warn('CustomDataTable: Column visibility control is disabled in config.');
					}
					return columnApi; // Return the columnApi object for chaining.
				}
			},

            /**
             * Sets the search value for this column.
             * @param {string} value - The search term to apply.
             * @returns {object} The columnApi object for chaining.
             */
             search: (value) => {
                this.columnSearch(colName, value); // Use the existing columnSearch method
                return columnApi; // Return columnApi for chaining
             },

             /**
              * Gets the configuration for this column.
              * @returns {object} The column configuration object.
              */
             settings: () => {
                 return this.config.columns[colName];
             }

			// Add other column-specific API methods here if needed (e.g., .orderable(), .title()).
		};

		return columnApi; // Return the columnApi object, enabling chaining like table.column('name').visible(true).
	}
}



class CustomDataTableV3_BAK {

	/**
	 * @param {string} selector - The CSS selector for the container element where the table will be rendered.
	 * @param {object} config - Configuration options for the table.
	 * @param {string} [config.table_el_id] - The ID to assign to the generated <table> element. Defaults to a unique ID.
	 * @param {object} config.columns - An object defining the table columns. Keys are data property names, values are column configurations.
	 * @param {string} [config.columns.columnName.label] - The human-readable label for the column header. Defaults to the column name.
	 * @param {boolean} [config.columns.columnName.searchable=false] - Whether this column can be searched (per-column search).
	 * @param {boolean} [config.columns.columnName.sortable=false] - Whether this column can be sorted.
	 * @param {boolean} [config.columns.columnName.visible=true] - Whether this column is visible by default.
	 * @param {'left'|'right'|'center'} [config.columns.columnName.align='left'] - Text alignment for the column cells. Uses Bootstrap text utility classes.
	 * @param {function(any, object, number, number): string} [config.columns.columnName.renderer] - A function to render the cell content.
	 *                                               Receives value, full row data, row index (current page), draw counter.
	 * @param {string} [config.endpoint='/data'] - The URL for the server-side processing endpoint.
	 * @param {string} [config.method='POST'] - The HTTP method for the fetch request.
	 * @param {Array<{column: string, dir: 'asc'|'desc'}>} [config.defaultSort=[]] - Initial sorting criteria.
	 * @param {string} [config.emptyMessage='No matching records found'] - Message displayed when table is empty after filtering.
	 * @param {string} [config.errorMessage='Error loading data'] - Message displayed on data fetch error.
	 * @param {boolean} [config.info=true] - Enable/disable the table information display ('Showing X to Y of Z entries').
	 * @param {boolean} [config.paging=true] - Enable/disable pagination.
	 * @param {boolean} [config.searching=true] - Enable/disable the global search input.
	 * @param {boolean} [config.columnSearching=true] - Enable/disable per-column search inputs (requires config.searching=true and column.searchable=true).
	 * @param {boolean} [config.ordering=true] - Enable/disable sorting clicking on headers (requires column.sortable=true).
	 * @param {boolean} [config.lengthChange=true] - Enable/disable the page length change dropdown.
	 * @param {boolean} [config.exportCSV=true] - Enable/disable the Export CSV button.
	 * @param {boolean} [config.columnVisibility=true] - Enable/disable the column visibility dropdown.
	 * @param {boolean} [config.stateSave=false] - Enable/disable saving/loading table state (page, size, search, sort, filters, visibility) to/from localStorage.
	 * @param {number} [config.pageSize=10] - The initial number of entries per page.
	 * @param {number[]} [config.pageLengthOptions=[10, 25, 50, 100]] - Options for the page length dropdown.
	 * @param {number} [config.paginationPagesToShow=5] - Number of page numbers to show around the current page in pagination.
	 * @param {object} [config.requestParams] - Customize the names of parameters sent to the server (defaults to DataTables format).
	 * @param {object} [config.responseParams] - Customize the names of properties expected in the server response (defaults to DataTables format).
	 * @param {function(object): void} [config.onDataLoad] - Callback function executed after data is successfully loaded.
	 * @param {function(Error): void} [config.onError] - Callback function executed on data fetch error.
	 * @param {object} [config.customParams] - Custom parameters to include in every server request payload.
	 */
	constructor(selector, config) {
		// Identify and validate the container element.
		this.element = document.querySelector(selector);
		if (!this.element) {
			console.error(`CustomDataTable: Vessel with selector "${selector}" not found.`);
			throw new Error(`CustomDataTable: Vessel with selector "${selector}" not found.`);
		}

		// Merge the external blueprint (config) with intrinsic default principles.
		this.config = {
			// Core identity and source of truth
			table_el_id: config.table_el_id || `cdt-table-${Math.random().toString(36).substr(2, 9)}`, // A unique identifier if none is divinely provided.
			columns: config.columns || {}, // Definition of the data columns, their nature and capabilities.
			endpoint: config.endpoint || '/data', // The conduit to the source of data.
			method: config.method || 'POST', // The ritual method for summoning data (HTTP).
			defaultSort: config.defaultSort || [], // The initial ordering of the data, a predefined harmony.
			emptyMessage: config.emptyMessage || 'No matching records found', // The message in the void when filtering yields nothing.
			errorMessage: config.errorMessage || 'Error loading data', // The lament when the conduit fails.

			// Feature Toggles: Control nodes determining the manifested interactions.
			info: config.info !== undefined ? config.info : true, // Manifest the data summary.
			paging: config.paging !== undefined ? config.paging : true, // Enable the splitting of data across dimensions (pages).
			searching: config.searching !== undefined ? config.searching : true, // Enable the global search energy.
			columnSearching: config.columnSearching !== undefined ? config.columnSearching : true, // Enable searching within specific dimensions (columns).
			ordering: config.ordering !== undefined ? config.ordering : true, // Enable the reordering of data by dimensions.
			lengthChange: config.lengthChange !== undefined ? config.lengthChange : true, // Enable changing the number of entries per dimension.
			exportCSV: config.exportCSV !== undefined ? config.exportCSV : true, // Enable the ritual of exporting data.
			columnVisibility: config.columnVisibility !== undefined ? config.columnVisibility : true, // Enable control over visible dimensions.
			stateSave: config.stateSave !== undefined ? config.stateSave : false, // Enable the memory of previous states.

			// Paging Parameters: Defining the dimensions of pages.
			pageSize: config.pageSize || 10, // The initial size of each data dimension.
			pageLengthOptions: config.pageLengthOptions || [10, 25, 50, 100], // The available sizes for dimensions.
			paginationPagesToShow: config.paginationPagesToShow || 5, // The number of page portals visible at once.

			// Server Interaction Parameters: Defining the language spoken with the source of truth.
			requestParams: { // Mapping internal concepts to external server expectations (DataTables format).
				draw: 'draw', start: 'start', length: 'length', search: 'search',
				order: 'order', columns: 'columns',
				...(config.requestParams || {}), // Allow overriding defaults
			},
			responseParams: { // Mapping external server truth to internal understanding.
				draw: 'draw', recordsTotal: 'recordsTotal', recordsFiltered: 'recordsFiltered', data: 'data',
                ...(config.responseParams || {}), // Allow overriding defaults
			},

			// Callbacks: Hooks for external processes to react to internal events.
			onDataLoad: config.onDataLoad || (() => { }), // Invoked upon successful data arrival.
			onError: config.onError || ((err) => console.error('CustomDataTable Error:', err)), // Invoked when the conduit fails.

             // Custom parameters to send to the server on every fetch
             ...(config.customParams || {}), // Example: tableName, whereAll etc.
		};

		// The Initial State: The primordial conditions of the system.
		this.state = {
			page: 1, // Beginning at the first dimension.
			pageSize: this.config.pageSize, // Adopting the initial dimension size.
			search: '', // The void of initial global search.
			columnFilters: new Map(), // A map holding the specific dimension filter energies.
			sort: new Map(), // A map holding the current ordering energies (multi-dimensional sorting possible).
			totalRecords: 0, // The unknown total count before the first summoning.
			filteredRecords: 0, // The unknown filtered count.
			data: [], // The empty vessel for the current page's data.
			draw: 0, // A counter for the data summoning rituals, ensuring synchronicity.
			columnVisibility: new Map(), // A map holding the visibility status of each dimension.
			selectedRows: new Set(), // A set holding the selected data entities (bound to current page data objects for simplicity here).
			isLoading: false, // The system is initially at rest.
		};

		// Apply the initial ordering from the blueprint.
		this.config.defaultSort.forEach(s => this.state.sort.set(s.column, s.dir));

		// Initialize dimension visibility based on blueprint or default.
		Object.keys(this.config.columns).forEach(name => {
			const isVisible = config.columns[name]?.visible !== undefined ? config.columns[name].visible : true;
			this.state.columnVisibility.set(name, isVisible);
		});

		// Consult memory (state saving) if enabled, potentially altering the initial state.
		if (this.config.stateSave) {
			this.loadState(); // Attempt to load the system's past condition.
		}

		// Bind methods: Ensuring the system's functions operate within its own context.
		// Binding commonly used methods here to ensure 'this' context is correct in event listeners etc.
		this.handleSortClick = this.handleSortClick.bind(this);
		this.handleColumnVisibilityChange = this.handleColumnVisibilityChange.bind(this);
		this.handlePaginationClick = this.handlePaginationClick.bind(this);
		this.handleRowClick = this.handleRowClick.bind(this);
		this.exportCSV = this.exportCSV.bind(this);
		this.saveState = this.saveState.bind(this);
		this.loadState = this.loadState.bind(this);
		// Bind new search handlers
		this.handleGlobalSearchEvent = this.handleGlobalSearchEvent.bind(this);
		this.handleColumnSearchEvent = this.handleColumnSearchEvent.bind(this);


		// Initiate the Creation Sequence.
		this.init();
	}

	// The Initialization: Orchestrates the initial manifestation and energy binding.
	init() {
		this.renderStructure(); // Manifest the visible form.
		this.attachEvents(); // Bind the energies of interaction.
		this.$fetchData(); // Summon the initial data, beginning the cycle.
	}

    // Helper to create DOM element from HTML string (A small, efficient construction tool).
	createElementFromHTML(htmlString) {
		const div = document.createElement('div');
		div.innerHTML = htmlString.trim();
		return div.firstChild; // Return the first element
	}

	// renderStructure: The architect of the visible table interface.
	renderStructure() {
		// Create a document fragment: A temporary, lightweight container in memory for efficient building.
		const fragment = document.createDocumentFragment();

		// Construct the Controls section (Header).
		const controlsHtml = `
			<div class="cdt-controls mb-3">
				<div class="row g-2 align-items-center">
					${this.config.lengthChange ? `
					<div class="col-auto">
						<label for="${this.config.table_el_id}-length" class="col-form-label col-form-label-sm">Show</label>
					</div>
					<div class="col-auto">
						<select id="${this.config.table_el_id}-length" class="cdt-page-length form-select form-select-sm">
							${this.config.pageLengthOptions.map(n => `<option value="${n}">${n}</option>`).join('')}
						</select>
					</div>
					<div class="col-auto">
						<label for="${this.config.table_el_id}-length" class="col-form-label col-form-label-sm">entries</label>
					</div>
					` : ''}

					<div class="col"></div> <!-- A flexible space divider -->

					${this.config.searching ? `
					<div class="col-md-4 col-lg-3">
						<input type="text" class="cdt-global-search form-control form-control-sm" placeholder="Search..." value="${this.state.search}">
					</div>
					` : ''}

					${this.config.columnVisibility ? `
					<div class="col-auto">
						<div class="dropdown d-inline-block">
							<button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
								Columns
							</button>
							<ul class="dropdown-menu cdt-column-visibility">
								${Object.entries(this.config.columns).map(([name, col]) => `
									<li><a class="dropdown-item" href="#" data-col="${name}">
										<input type="checkbox" class="form-check-input me-2" data-col="${name}" ${this.state.columnVisibility.get(name) ? 'checked' : ''}> ${col.label || name}
									</a></li>
								`).join('')}
							</ul>
						</div>
					</div>
					` : ''}

					${this.config.exportCSV ? `
					<div class="col-auto">
						<button class="btn btn-primary btn-sm cdt-export-csv">Export CSV</button>
					</div>
					` : ''}
				</div>
			</div>
		`;
		// Append the created control element to the fragment.
		fragment.appendChild(this.createElementFromHTML(controlsHtml));


		// Construct the Table Container section, including the table and loading overlay.
		const tableContainerHtml = `
			<div class="cdt-table-container table-responsive">
				<div class="cdt-loading-overlay d-none">
					<div class="spinner-border text-primary" role="status">
						<span class="visually-hidden">Loading...</span>
					</div>
				</div>
				<table id="${this.config.table_el_id}" class="cdt-table table table-bordered table-hover mb-0" role="grid" aria-describedby="${this.config.table_el_id}_info" style="table-layout: fixed">
					<thead><tr></tr></thead> <!-- Header row will be populated by renderTableHeader -->
					<tbody></tbody> <!-- Table body will be populated by renderTableBody -->
				</table>
			</div>
		`;
		// Append the created container element to the fragment.
		fragment.appendChild(this.createElementFromHTML(tableContainerHtml));


		// Construct the Footer section, including info and pagination.
		const footerHtml = `
			<div class="cdt-footer mt-3 d-flex justify-content-between align-items-center flex-wrap">
				${this.config.info ? `<div class="cdt-info mb-2 mb-sm-0" id="${this.config.table_el_id}_info" role="status" aria-live="polite"></div>` : '<div></div>'}
				${this.config.paging ? `
				<div class="cdt-pagination">
					<nav aria-label="Table pagination">
						<ul class="pagination pagination-sm mb-0">
							<li class="page-item cdt-prev">
								<a class="page-link" href="#" aria-label="Previous" data-page="prev">
									<span aria-hidden="true">«</span>
									<span class="visually-hidden">Previous</span>
								</a>
							</li>
							<!-- Page number LIs will be appended DIRECTLY to the UL below -->

							<li class="page-item cdt-next">
								<a class="page-link" href="#" aria-label="Next" data-page="next">
									<span aria-hidden="true">»</span>
									<span class="visually-hidden">Next</span>
								</a>
							</li>
						</ul>
					</nav>
				</div>
				` : '<div></div>'}
			</div>
		`;
		fragment.appendChild(this.createElementFromHTML(footerHtml));

		// Clear the original vessel's content and append the complete, constructed fragment in a single operation.
		this.element.innerHTML = ''; // Empty the vessel.
		this.element.appendChild(fragment); // Infuse the structure into the vessel.

		// Set the initial value for the page length dropdown if it was created.
		if (this.config.lengthChange) {
			const pageLengthSelect = this.element.querySelector('.cdt-page-length');
			if (pageLengthSelect) {
				pageLengthSelect.value = this.state.pageSize; // Reflect the initial or loaded state page size.
			}
		}

		// Immediately populate the table header row based on current config and state.
		this.renderTableHeader();
	}

	// renderTableHeader: Constructs the table header row based on visible columns and sort state.
	renderTableHeader() {
		// Find the header row vessel.
		const theadRow = this.element.querySelector(`#${this.config.table_el_id} thead tr`);
		if (!theadRow) return; // If the header row vessel is not found, cease the ritual.

		theadRow.innerHTML = ''; // Clear any existing header cells to prepare for the new structure.

		// Identify and order the columns that are currently visible according to the state.
		const visibleColumns = Object.entries(this.config.columns).filter(([name]) =>
			this.state.columnVisibility.get(name)
		);

		// Iterate through the visible columns to create a header cell for each.
		visibleColumns.forEach(([name, col], index) => {
			const th = document.createElement('th'); // Create the header cell vessel.
			th.setAttribute('scope', 'col'); // Declare this cell as a header for a column (accessibility).

			// Add alignment class if specified in config
            const alignClass = this.getAlignmentClass(col.align);
            if (alignClass) {
                th.classList.add(alignClass);
            }

			// Determine the CSS class and accessibility attribute for sorting, based on configuration and current state.
			let sortClass = '';
			if (this.config.ordering && col.sortable) { // If ordering is enabled and the column is sortable...
				const currentSortDir = this.state.sort.get(name);
				if (currentSortDir === 'asc') {
					sortClass = 'sorting_asc'; // DataTables standard class for ascending sort.
					th.setAttribute('aria-sort', 'ascending'); // Announce sort direction (accessibility).
				} else if (currentSortDir === 'desc') {
					sortClass = 'sorting_desc'; // DataTables standard class for descending sort.
					th.setAttribute('aria-sort', 'descending'); // Announce sort direction (accessibility).
				} else {
					sortClass = 'sorting'; // DataTables standard class for unsorted, but sortable.
					th.setAttribute('aria-sort', 'none'); // Announce no sort applied (accessibility).
				}
				th.classList.add('cdt-sortable'); // Add a class for event delegation targetting.
				th.dataset.col = name; // Store the column name for event handling.
			} else {
				// If not sortable or ordering disabled, explicitly state no sort for accessibility.
                 th.setAttribute('aria-sort', 'none');
            }


			// Populate the header cell's inner structure.
			// It contains the label, and conditionally, the sort indicator and search input.
			th.innerHTML = `
				<div class="d-flex flex-column align-items-${alignClass === 'text-center' ? 'center' : (alignClass === 'text-right' ? 'end' : 'start')}">
					<span class="${sortClass}">${col.label || name}</span> <!-- The column's name or label -->
					${this.config.searching && this.config.columnSearching && col.searchable ? `
						<!-- Column specific search input, conditional on search configs and column being searchable -->
						<input type="text" class="cdt-col-search form-control form-control-sm mt-1" data-col="${name}" placeholder="Search ${col.label || name}" value="${this.state.columnFilters.get(name)?.value || ''}">
					` : ''}
				</div>
			`;
			// Note: Basic responsiveness classes (like hiding columns beyond index 1) could be added here to TH
			// if needed to match TD visibility and maintain layout consistency.
			// if (index > 1) { th.classList.add('d-none', 'd-md-table-cell'); }

			theadRow.appendChild(th); // Append the created header cell to the header row.
		});
	}

	// renderTableBody: Populates the table body with data from the current state.
	renderTableBody(message = null) {
		// Find the table body vessel.
		const tbody = this.element.querySelector(`#${this.config.table_el_id} tbody`);
		if (!tbody) return; // If the tbody vessel is not found, cease the ritual.

		tbody.innerHTML = ''; // Clear any existing rows to prepare for the new data.

		// Determine the number of visible columns for colspan.
		const numCols = Object.values(this.config.columns).filter((_col, name) => this.state.columnVisibility.get(name)).length;


		// Check if a specific message should be displayed (e.g., error, no data) or if there's no data/filtered data.
		if (message) {
			// Display the provided message (e.g., error message).
			tbody.innerHTML = `<tr><td colspan="${numCols}" class="text-center">${message}</td></tr>`; // Render a single row with a spanning cell.
		} else if (this.state.data.length === 0 && this.state.filteredRecords === 0 && !this.state.isLoading) {
             // Display the "No data available" message if no data was fetched and no records exist at all.
             tbody.innerHTML = `<tr><td colspan="${numCols}" class="text-center">${this.config.emptyMessage}</td></tr>`;
        }
        else if (this.state.data.length === 0 && this.state.filteredRecords > 0 && !this.state.isLoading) {
            // Display the "No matching records" message if data was fetched, but the current page slice is empty
            // or if a filter resulted in 0 *filtered* records, but total exist.
             tbody.innerHTML = `<tr><td colspan="${numCols}" class="text-center">${this.config.emptyMessage}</td></tr>`;
        }
		else {
			// If there is data to display, render the rows.

			// Get the names of columns that are currently visible, in their defined order.
			const visibleColumnNames = Object.entries(this.config.columns)
				.filter(([name]) => this.state.columnVisibility.get(name))
				.map(([name]) => name); // Extract just the names.

			// Iterate through each data object (row) for the current page.
			this.state.data.forEach((rowData, rowIndex) => {
				const tr = document.createElement('tr'); // Create a row vessel.

				// Apply styling if the row is selected.
				// Selection state relies on the data object reference from the current page (non-persistent).
				if (this.state.selectedRows.has(rowData)) {
					tr.classList.add('table-primary'); // Add the selection style class.
				}

				// Iterate through the visible columns to create cells for the current row.
				visibleColumnNames.forEach((colName, colIndex) => {
					const td = document.createElement('td'); // Create a cell vessel.
					const colConfig = this.config.columns[colName]; // Get the configuration for this column.
					const value = rowData[colName]; // Get the raw data value for this cell.

                    // Add alignment class if specified in config
                    const alignClass = this.getAlignmentClass(colConfig?.align);
                    if (alignClass) {
                        td.classList.add(alignClass);
                    }


					// Determine the cell's content: Use the renderer if defined, otherwise use text content.
					if (colConfig && typeof colConfig.renderer === 'function') {
						// Use the renderer function to generate HTML or text content.
						// Pass value, full row data, row index (on current page), and draw counter.
						td.innerHTML = colConfig.renderer(value, rowData, rowIndex, this.state.draw);
					} else {
						// Use textContent for safety if no renderer is defined.
                        // Using innerHTML for potential basic HTML like line breaks from data,
                        // but escaping needed if data isn't trusted.
                        // textContent is safer if data is raw string/number. Let's stick to textContent as default.
						td.textContent = value === null || value === undefined ? '' : value; // Handle null/undefined
					}

					// Apply basic responsiveness classes to hide columns on small screens based on index.
					// Matches the index-based hiding logic potential for TH.
					// if (colIndex > 1) { // Example: Hide columns beyond the second one on small screens.
					// 	td.classList.add('d-none', 'd-md-table-cell');
					// }

					tr.appendChild(td); // Append the cell to the row.
				});

				tbody.appendChild(tr); // Append the completed row to the table body.
			});
		}
		// Note: Loading state handled by overlay; renderTableBody doesn't explicitly render a loading row.
	}

    // Helper method to get Bootstrap alignment class from config string
    getAlignmentClass(align) {
        switch (align) {
            case 'left': return 'text-start'; // Bootstrap 5 uses text-start/text-end
            case 'right': return 'text-end';
            case 'center': return 'text-center';
            default: return ''; // No class if not specified or invalid
        }
    }


	// renderPagination: Generates and updates the pagination controls.
	renderPagination() {
		// Do not render if paging is disabled in the configuration.
		if (!this.config.paging) return;

		// Find the pagination elements.
		// CORRECTED: Target the UL.pagination itself.
		const paginationList = this.element.querySelector('.cdt-pagination ul.pagination'); // Target the UL where page LIs belong.
		const prevButton = this.element.querySelector('.cdt-prev'); // Previous button li element.
		const nextButton = this.element.querySelector('.cdt-next'); // Next button li element.

		// Ensure essential elements exist before proceeding.
		// Check for the UL, Prev, and Next LIs.
		if (!paginationList || !prevButton || !nextButton) {
            console.warn("CustomDataTable: Pagination elements not found or structure incorrect.");
            return;
        }

		const totalPages = Math.ceil(this.state.filteredRecords / this.state.pageSize); // Calculate total pages.
		const currentPage = this.state.page; // Get the current page from state.
		const pagesToShow = this.config.paginationPagesToShow; // Number of page links to show around the current page.
		const boundaryPages = 1; // Number of pages to always show at the beginning and end (Page 1 and totalPages).

		// Clear existing page numbers *between* the Prev and Next buttons.
		// Remove all children that are NOT cdt-prev or cdt-next
		let child = paginationList.firstChild;
		while (child) {
            const nextChild = child.nextSibling; // Get next before removing current
            if (child.nodeType === 1 && !child.classList.contains('cdt-prev') && !child.classList.contains('cdt-next')) {
                paginationList.removeChild(child);
            }
            child = nextChild;
        }


		// If there are no pages (total records is 0) or only one page, disable nav buttons.
		// The pagination structure is always rendered if paging is true, but buttons are disabled.
		if (totalPages <= 1) {
			prevButton.classList.add('disabled');
			nextButton.classList.add('disabled');
            // Ensure no page numbers were added (handled by the clearing above)
			return;
		} else {
            // Ensure buttons are enabled if there are multiple pages
            prevButton.classList.remove('disabled');
            nextButton.classList.remove('disabled');
        }

		// Helper function to create a page list item (<li>)
		const addPageItem = (page, text, isActive = false, isDisabled = false, isEllipsis = false) => {
			const li = document.createElement('li');
			li.classList.add('page-item');
			if (isActive) li.classList.add('active');
			if (isDisabled) li.classList.add('disabled');
            if (isEllipsis) li.classList.add('cdt-ellipsis'); // Add a class to easily identify ellipses

			const a = document.createElement('a');
			a.classList.add('page-link');
			a.href = '#';
			a.textContent = text;

			if (!isDisabled && !isEllipsis) {
				a.dataset.page = page;
				a.classList.add('cdt-page-number');
			}

			li.appendChild(a);
			return li;
		};

		// Logic to determine which page numbers to display (similar to DataTables logic).
        // Ensure we show pages around the current page, plus boundary pages (1 and totalPages).
        let startPage = Math.max(2, currentPage - Math.floor(pagesToShow / 2));
        let endPage = Math.min(totalPages - 1, currentPage + Math.ceil(pagesToShow / 2) - 1);

        // Adjust window if it's too small or hits boundaries
        if (endPage - startPage + 1 < pagesToShow) {
            startPage = Math.max(2, endPage - pagesToShow + 1);
        }
        if (endPage - startPage + 1 < pagesToShow) { // Re-check after adjusting start
             endPage = Math.min(totalPages - 1, startPage + pagesToShow - 1);
        }


		// --- Append page numbers directly to the UL, inserting them between Prev and Next ---

		const nextButtonElement = this.element.querySelector('.cdt-next'); // Get the Next button LI element to insert before.


		// Add Page 1 link if not in the calculated window
        if (currentPage > 1) { // Always show page 1 if not on page 1
            paginationList.insertBefore(addPageItem(1, 1, currentPage === 1), nextButtonElement);
        } else {
             // If on page 1, add it and mark active
            paginationList.insertBefore(addPageItem(1, 1, true), nextButtonElement);
        }


		// Add left ellipsis if needed (gap between page 1 and startPage)
		if (startPage > 2) { // Only need ellipsis if startPage is beyond page 2
			paginationList.insertBefore(addPageItem(null, '...', false, true, true), nextButtonElement);
		}

		// Add the central page links.
		for (let i = startPage; i <= endPage; i++) {
			paginationList.insertBefore(addPageItem(i, i, currentPage === i), nextButtonElement);
		}

		// Add right ellipsis if needed (gap between endPage and totalPages)
		if (endPage < totalPages - 1) { // Only need ellipsis if endPage is before the last page
			paginationList.insertBefore(addPageItem(null, '...', false, true, true), nextButtonElement);
		}

		// Add the last page link if totalPages > 1 and it's not the same as the current page (already added)
		if (totalPages > 1 && currentPage < totalPages) {
             paginationList.insertBefore(addPageItem(totalPages, totalPages, currentPage === totalPages), nextButtonElement);
		}


		// Update the state of the Previous and Next buttons.
		if (prevButton) {
			prevButton.classList.toggle('disabled', currentPage <= 1); // Disable if on the first page.
		}
		if (nextButton) {
			// Disable if the current page is the last page.
			nextButton.classList.toggle('disabled', currentPage >= totalPages);
		}
	}


	// renderInfo: Updates the text summary of the table's current state.
	renderInfo() {
		// Do not render if info display is disabled in the configuration.
		if (!this.config.info) return;

		// Find the info element vessel.
		const infoElement = this.element.querySelector('.cdt-info');
		if (!infoElement) {
            console.warn("CustomDataTable: Info element not found.");
            return; // If the info element vessel is not found, cease the ritual.
        }

		const totalRecords = this.state.totalRecords; // Total records before filtering.
		const filteredRecords = this.state.filteredRecords; // Total records after filtering.
		const pageSize = this.state.pageSize; // Entries per page.
		const currentPage = this.state.page; // Current page number.

		// Calculate the start and end indices for the displayed entries.
		// Start is 1-based index. If filteredRecords is 0, start should be 0.
		const start = filteredRecords > 0 ? (currentPage - 1) * pageSize + 1 : 0;
		// End is the minimum of the last index on the current page or the total filtered records count.
		const end = Math.min(start + pageSize - 1, filteredRecords);
        // If start is 0, end should also be 0.
         const displayEnd = start > 0 ? end : 0;


		let infoText = ''; // Initialize the text string.

		if (totalRecords === 0 && filteredRecords === 0) {
			// Case: No data available at all.
			infoText = this.config.emptyMessage; // Use empty message here too
		} else if (filteredRecords === 0) {
			// Case: Data exists in total, but no records match the current filters/search.
			infoText = `${this.config.emptyMessage}`; // Use empty message here too
			// Add information about the total records if filtering is active (filteredRecords < totalRecords).
			if (totalRecords !== filteredRecords) {
				infoText += ` (filtered from ${totalRecords} total entries)`;
			}
		} else {
			// Case: Data is displayed, show the range and filtered total.
			infoText = `Showing ${start} to ${displayEnd} of ${filteredRecords} entries`;
			// Add information about the total records if filtering is active.
			if (totalRecords !== filteredRecords) {
				infoText += ` (filtered from ${totalRecords} total entries)`;
			}
		}

		// Set the calculated text content to the info element.
		infoElement.textContent = infoText;
	}

	// attachEvents: Binds user interactions to system logic using event delegation.
	attachEvents() {
		// Removed debounce and 'input' listeners for search, using 'keydown' (Enter) and 'blur' instead.

		// Global Search: Listen for keydown (Enter) and blur on the global search box.
		const globalSearchInput = this.element.querySelector('.cdt-global-search');
		if (globalSearchInput && this.config.searching) { // Bind only if global search is enabled.
			globalSearchInput.addEventListener('keydown', (e) => {
				if (e.key === 'Enter') {
					e.preventDefault(); // Prevent default form submission/newline behavior.
					this.handleGlobalSearchEvent(e.target);
				}
			});
             globalSearchInput.addEventListener('blur', (e) => {
                 // Only trigger search if the blur wasn't caused by another input element
                 // within the table gaining focus (e.g., clicking another column search input).
                 // Checking relatedTarget helps, but isn't perfect. A simple check is often sufficient.
                 if (!e.relatedTarget || !this.element.contains(e.relatedTarget)) {
                    this.handleGlobalSearchEvent(e.target);
                 }
             });
		}

		// Column Search: Use event delegation for keydown (Enter) and blur on column search inputs.
		if (this.config.searching && this.config.columnSearching) { // Bind only if column searching is enabled.
			// Keydown for Enter key (bubbles)
			this.element.addEventListener('keydown', (e) => {
				const targetInput = e.target.closest('.cdt-col-search');
				if (targetInput && e.key === 'Enter') {
					e.preventDefault(); // Prevent default form submission/newline behavior.
					this.handleColumnSearchEvent(targetInput);
				}
			});
            // Blur event (does not bubble, must use capture phase or delegate on a very high ancestor like document, or attach directly)
            // Delegating on the main element in the capture phase is common for non-bubbling events like blur/focus.
            this.element.addEventListener('blur', (e) => {
                const targetInput = e.target.closest('.cdt-col-search');
                // Check if the blurred element is a column search input AND the focus is moving outside the table
                if (targetInput && (!e.relatedTarget || !this.element.contains(e.relatedTarget))) {
                    this.handleColumnSearchEvent(targetInput);
                }
            }, true); // Use capture phase for blur
		}


		// Page Length Change: Listen for changes on the page length select element.
		const pageLengthSelect = this.element.querySelector('.cdt-page-length');
		if (pageLengthSelect && this.config.lengthChange) { // Bind only if length change is enabled.
			pageLengthSelect.addEventListener('change', (e) => {
				const newSize = parseInt(e.target.value, 10);
				// Only proceed if the page size has actually changed.
				if (this.state.pageSize !== newSize) {
					this.state.pageSize = newSize; // Update state with the new page size.
					this.state.page = 1; // Reset to the first page (standard DataTables behavior on length change).
					this.$fetchData(); // Summon new data.
				}
			});
		}

		// Sorting: Use event delegation on the table header for clicks on sortable columns.
		const thead = this.element.querySelector(`#${this.config.table_el_id} thead`);
		if (thead && this.config.ordering) { // Bind only if ordering is enabled.
             // NEW LISTENER: Intercept clicks on search inputs in the CAPTURE phase
             // This runs before the standard bubbling phase listeners on thead or th.
             thead.addEventListener('click', (e) => {
                 // Check if the clicked element is within a column search input
                 if (e.target.closest('.cdt-col-search')) {
                     // Stop the event from propagating further up the DOM tree.
                     // This prevents the click from reaching the TH's sort handler.
                     e.stopPropagation();
                 }
             }, true); // <--- IMPORTANT: Use capture phase

			// EXISTING LISTENER: Delegate the click event for sorting (in the bubbling phase)
			thead.addEventListener('click', this.handleSortClick);
		}

		// Column Visibility: Use event delegation on the column visibility dropdown menu for clicks within menu items.
		const columnVisibilityDropdown = this.element.querySelector('.cdt-column-visibility');
		if (columnVisibilityDropdown && this.config.columnVisibility) { // Bind only if column visibility control is enabled.
			// Delegate the click event to the specific handler method.
			columnVisibilityDropdown.addEventListener('click', this.handleColumnVisibilityChange);

             // Prevent dropdown from closing when clicking checkbox directly
             columnVisibilityDropdown.addEventListener('click', (e) => {
                if (e.target.tagName === 'INPUT' && e.target.type === 'checkbox') {
                    e.stopPropagation(); // Stop the click from propagating to the dropdown item's click handler
                }
             });
		}

		// Pagination: Use event delegation on the pagination navigation container for clicks on page links.
		const paginationNav = this.element.querySelector('.cdt-pagination nav');
		if (paginationNav && this.config.paging) { // Bind only if paging is enabled.
			// Delegate the click event to the specific handler method.
			paginationNav.addEventListener('click', this.handlePaginationClick);
		}

		// Export CSV: Listen for clicks on the export button.
		const exportButton = this.element.querySelector('.cdt-export-csv');
		if (exportButton && this.config.exportCSV) { // Bind only if CSV export is enabled.
			exportButton.addEventListener('click', this.exportCSV); // Call the export method.
		}

		// Row Click: Use event delegation on the table body for clicks on table rows (for selection).
		const tbody = this.element.querySelector(`#${this.config.table_el_id} tbody`);
		if (tbody) { // Row click/selection is a common feature regardless of other config.
			// Delegate the click event to the specific handler method.
			tbody.addEventListener('click', this.handleRowClick);
		}

		// Keyboard Navigation (Optional and basic implementation, not typical for complex tables)
		/*
		this.element.addEventListener('keydown', (e) => {
			// Prevent handling keys if focus is inside an input field or select element.
			if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT' || e.target.tagName === 'TEXTAREA') {
				return;
			}

			// Handle left/right arrow keys for pagination navigation.
			if (e.key === 'ArrowLeft' && this.state.page > 1) {
				e.preventDefault(); // Prevent default browser scroll behavior.
				this.state.page--; // Decrease page number.
				this.$fetchData(); // Summon new data.
			}
			if (e.key === 'ArrowRight' && this.state.page * this.state.pageSize < this.state.filteredRecords) {
				e.preventDefault(); // Prevent default browser scroll behavior.
				this.state.page++; // Increase page number.
				this.$fetchData(); // Summon new data.
			}
		});
		*/

		// State Saving on Unload: If state saving is enabled, listen for the window unload event.
		if (this.config.stateSave) {
			// Bind the saveState method to the window's 'beforeunload' event.
			window.addEventListener('beforeunload', this.saveState);
		}
	}

	// attachEvents: Binds user interactions to system logic using event delegation.
	attachEventsOLD() {
		// Removed debounce and 'input' listeners for search, using 'keydown' (Enter) and 'blur' instead.

		// Global Search: Listen for keydown (Enter) and blur on the global search box.
		const globalSearchInput = this.element.querySelector('.cdt-global-search');
		if (globalSearchInput && this.config.searching) { // Bind only if global search is enabled.
			globalSearchInput.addEventListener('keydown', (e) => {
				if (e.key === 'Enter') {
					e.preventDefault(); // Prevent default form submission/newline behavior.
					this.handleGlobalSearchEvent(e.target);
				}
			});
             globalSearchInput.addEventListener('blur', (e) => {
                 this.handleGlobalSearchEvent(e.target);
             });
		}

		// Column Search: Use event delegation for keydown (Enter) and blur on column search inputs.
		if (this.config.searching && this.config.columnSearching) { // Bind only if column searching is enabled.
			this.element.addEventListener('keydown', (e) => {
				const targetInput = e.target.closest('.cdt-col-search');
				if (targetInput && e.key === 'Enter') {
					e.preventDefault(); // Prevent default form submission/newline behavior.
					this.handleColumnSearchEvent(targetInput);
				}
			});
            this.element.addEventListener('blur', (e) => {
                const targetInput = e.target.closest('.cdt-col-search');
                if (targetInput) { // Check if the blurred element is a column search input
                    this.handleColumnSearchEvent(targetInput);
                }
            }, true); // Use capture phase for blur as it doesn't bubble
		}


		// Page Length Change: Listen for changes on the page length select element.
		const pageLengthSelect = this.element.querySelector('.cdt-page-length');
		if (pageLengthSelect && this.config.lengthChange) { // Bind only if length change is enabled.
			pageLengthSelect.addEventListener('change', (e) => {
				const newSize = parseInt(e.target.value, 10);
				// Only proceed if the page size has actually changed.
				if (this.state.pageSize !== newSize) {
					this.state.pageSize = newSize; // Update state with the new page size.
					this.state.page = 1; // Reset to the first page (standard DataTables behavior on length change).
					this.$fetchData(); // Summon new data.
				}
			});
		}

		// Sorting: Use event delegation on the table header for clicks on sortable columns.
		const thead = this.element.querySelector(`#${this.config.table_el_id} thead`);
		if (thead && this.config.ordering) { // Bind only if ordering is enabled.
			// Delegate the click event to the specific handler method.
			thead.addEventListener('click', this.handleSortClick);
		}

		// Column Visibility: Use event delegation on the column visibility dropdown menu for clicks within menu items.
		const columnVisibilityDropdown = this.element.querySelector('.cdt-column-visibility');
		if (columnVisibilityDropdown && this.config.columnVisibility) { // Bind only if column visibility control is enabled.
			// Delegate the click event to the specific handler method.
			columnVisibilityDropdown.addEventListener('click', this.handleColumnVisibilityChange);

             // Prevent dropdown from closing when clicking checkbox directly
             columnVisibilityDropdown.addEventListener('click', (e) => {
                if (e.target.tagName === 'INPUT' && e.target.type === 'checkbox') {
                    e.stopPropagation(); // Stop the click from propagating to the dropdown item's click handler
                    // The handleColumnVisibilityChange is still triggered because the click on the INPUT
                    // bubbles up to the A tag's closest handler.
                    // Or, alternatively, you could handle the checkbox change directly here:
                    // const colName = e.target.dataset.col;
                    // const isVisible = e.target.checked;
                    // this.column(colName).visible(isVisible); // Use the public API
                }
             });
		}

		// Pagination: Use event delegation on the pagination navigation container for clicks on page links.
		const paginationNav = this.element.querySelector('.cdt-pagination nav');
		if (paginationNav && this.config.paging) { // Bind only if paging is enabled.
			// Delegate the click event to the specific handler method.
			paginationNav.addEventListener('click', this.handlePaginationClick);
		}

		// Export CSV: Listen for clicks on the export button.
		const exportButton = this.element.querySelector('.cdt-export-csv');
		if (exportButton && this.config.exportCSV) { // Bind only if CSV export is enabled.
			exportButton.addEventListener('click', this.exportCSV); // Call the export method.
		}

		// Row Click: Use event delegation on the table body for clicks on table rows (for selection).
		const tbody = this.element.querySelector(`#${this.config.table_el_id} tbody`);
		if (tbody) { // Row click/selection is a common feature regardless of other config.
			// Delegate the click event to the specific handler method.
			tbody.addEventListener('click', this.handleRowClick);
		}

		// Keyboard Navigation (Optional and basic implementation, not typical for complex tables)
		/*
		this.element.addEventListener('keydown', (e) => {
			// Prevent handling keys if focus is inside an input field or select element.
			if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT' || e.target.tagName === 'TEXTAREA') {
				return;
			}

			// Handle left/right arrow keys for pagination navigation.
			if (e.key === 'ArrowLeft' && this.state.page > 1) {
				e.preventDefault(); // Prevent default browser scroll behavior.
				this.state.page--; // Decrease page number.
				this.$fetchData(); // Summon new data.
			}
			if (e.key === 'ArrowRight' && this.state.page * this.state.pageSize < this.state.filteredRecords) {
				e.preventDefault(); // Prevent default browser scroll behavior.
				this.state.page++; // Increase page number.
				this.$fetchData(); // Summon new data.
			}
		});
		*/

		// State Saving on Unload: If state saving is enabled, listen for the window unload event.
		if (this.config.stateSave) {
			// Bind the saveState method to the window's 'beforeunload' event.
			window.addEventListener('beforeunload', this.saveState);
		}
	}

    // Handler for global search input events (Enter key, Blur)
    handleGlobalSearchEvent(inputElement) {
        const newValue = inputElement.value.trim();
        // Only proceed if the search value has actually changed to avoid unnecessary fetches.
        if (this.state.search !== newValue) {
            this.state.search = newValue; // Update state with the new global search value.
            this.state.page = 1; // Reset to the first page upon a new search.
            this.$fetchData(); // Summon new data based on the updated state.
        }
    }

     // Handler for column search input events (Enter key, Blur)
     handleColumnSearchEvent(inputElement) {
         const col = inputElement.dataset.col; // Get the column name from the data attribute.
         if (!col) return;

         const newValue = inputElement.value.trim();
         const currentFilter = this.state.columnFilters.get(col)?.value || '';

         // Only proceed if the filter value for this column has changed.
         if (currentFilter !== newValue) {
             // Store the new filter value in the state's columnFilters map.
             this.state.columnFilters.set(col, { value: newValue, regex: false }); // regex option is present but not currently toggled by UI.
             this.state.page = 1; // Reset to the first page for a new column filter.
             this.$fetchData(); // Summon new data.
         }
     }

	// handleSortClick: Handler for clicks on sortable table headers.
	handleSortClick(e) {
		// Find the closest sortable header ancestor.
		const th = e.target.closest('.cdt-sortable');
		if (!th) return; // If the click wasn't on a sortable header, do nothing.

		e.preventDefault(); // Prevent default link/button behavior if any inside TH.

		const col = th.dataset.col; // Get the column name from the data attribute.
		if (!col) return;

		const currentDir = this.state.sort.get(col); // Get the current sort direction for this column.
		let newDir;

		// Determine the new sort direction based on the current one.
		if (!currentDir) {
			newDir = 'asc'; // If not sorted, start with ascending.
		} else if (currentDir === 'asc') {
			newDir = 'desc'; // If ascending, next is descending.
		} else {
			newDir = undefined; // If descending, next is no sort for this column.
		}

		// Handle multi-column sort with Shift key press.
		if (e.shiftKey) {
			// If Shift is held: Add/update the sort criteria for this column, preserving others.
			if (newDir) {
				this.state.sort.set(col, newDir);
			} else {
				this.state.sort.delete(col); // Remove sort criteria if cycling back to 'none'.
			}
		} else {
			// If Shift is NOT held: Perform single column sort. Clear all existing sorts.
			this.state.sort.clear();
			if (newDir) {
				this.state.sort.set(col, newDir); // Set only the sort for the clicked column.
			}
		}

		this.state.page = 1; // Reset to the first page on sort change.
		this.$fetchData(); // Summon new data with the updated sort criteria.
		// Note: renderTableHeader is called after fetchData to update sort icons based on the new state.
	}

	// handleColumnVisibilityChange: Handler for clicks within the column visibility dropdown.
	handleColumnVisibilityChange(e) {
		// Prevent the dropdown menu from closing when the checkbox/link is clicked.
		// Note: A separate listener was added in attachEvents to stop propagation for clicks directly on the checkbox.
		// This handler catches clicks on the 'a.dropdown-item'.
		e.stopPropagation();

		// Find the closest menu item link ancestor.
		const link = e.target.closest('a.dropdown-item');
		if (!link) return; // If the click wasn't on a menu item link, do nothing.

		e.preventDefault(); // Prevent default link behavior (e.g., navigating to #).

		const colName = link.dataset.col; // Get the column name from the link's data attribute.
		// Find the checkbox within the clicked menu item.
		const checkbox = link.querySelector('input[type="checkbox"]');

		if (!colName || !checkbox) {
             console.warn("CustomDataTable: Column visibility link or checkbox not found.");
             return; // Ensure we have necessary elements.
        }

		// Toggle the checkbox state if the click wasn't directly on the checkbox itself.
		// This makes clicking the link text also toggle the checkbox.
		// This check is redundant if the separate propagation stopper is used, but harmless.
		const clickedElement = e.target;
		if (clickedElement !== checkbox) {
			checkbox.checked = !checkbox.checked;
		}
		// At this point, checkbox.checked reflects the desired visibility state.

		const isVisible = checkbox.checked; // The new visibility state.

		// Update the system state if the column's visibility is actually changing.
		if (this.state.columnVisibility.get(colName) !== isVisible) {
			this.state.columnVisibility.set(colName, isVisible); // Update the state map.

			// Re-render header and body to reflect the visibility change.
			this.renderTableHeader(); // Header needs to show/hide the TH.
			this.renderTableBody(); // Body needs to show/hide the TDs.
			// No fetchData needed as visibility is a client-side rendering concern based on available data.

			// Save the system's state if state saving is enabled.
			if (this.config.stateSave) {
				this.saveState();
			}
		}
	}

	// handlePaginationClick: Handler for clicks on pagination links (page numbers, prev, next).
	handlePaginationClick(e) {
		e.preventDefault(); // Prevent default link navigation.

		// Find the closest page link ancestor.
		const link = e.target.closest('.page-link');
		// Ignore clicks not on links or on disabled links (including ellipses).
		if (!link || link.parentElement.classList.contains('disabled')) {
			return;
		}

		const dataPage = link.dataset.page; // Get the page action/number from the data attribute.
		let newPage = this.state.page; // Initialize the potential new page number.

		// Determine the new page based on the link's data-page attribute.
		if (dataPage === 'prev') {
			newPage = this.state.page - 1; // Go to the previous page.
		} else if (dataPage === 'next') {
			newPage = this.state.page + 1; // Go to the next page.
		} else {
			newPage = parseInt(dataPage, 10); // Go to a specific page number.
		}

		const totalPages = Math.ceil(this.state.filteredRecords / this.state.pageSize); // Calculate total pages.

		// Validate the calculated new page number.
		if (newPage >= 1 && newPage <= totalPages && newPage !== this.state.page) {
			this.state.page = newPage; // Update the state with the new page number.
			this.$fetchData(); // Summon data for the new page.
		}
	}

	// handleRowClick: Handler for clicks on table rows (used for selection).
	handleRowClick(e) {
		// Find the closest table row ancestor.
		const tr = e.target.closest('tr');
		// Ignore clicks not on rows or on the "no data" row (which spans all columns).
		if (!tr || tr.querySelector('td[colspan]')) {
			return;
		}

		// Determine the index of the clicked row among the currently displayed rows.
		const rows = Array.from(this.element.querySelectorAll(`#${this.config.table_el_id} tbody tr`));
		const rowIndex = rows.indexOf(tr);

		// Ensure the row index is valid and corresponds to an item in the current data.
		if (rowIndex === -1 || rowIndex >= this.state.data.length) {
			console.warn('CustomDataTable: Could not find corresponding data object for clicked row.');
			return;
		}

		// Get the data object for the clicked row.
		const rowData = this.state.data[rowIndex]; // This is the data object for the clicked row.

		// Toggle the selection state for this data object.
		if (this.state.selectedRows.has(rowData)) {
			// If already selected, remove it from the set.
			this.state.selectedRows.delete(rowData);
			tr.classList.remove('table-primary'); // Remove selection styling.
		} else {
			// If not selected, add it to the set.
			this.state.selectedRows.add(rowData);
			tr.classList.add('table-primary'); // Add selection styling.
		}

		// Note: For multi-select with Ctrl/Meta key, you would check e.ctrlKey || e.metaKey here
		// and potentially adjust the logic to add/remove without clearing others.
	}


	// fetchData: Summons data from the external source based on the current system state.
	async $fetchData() {
		this.state.draw++; // Increment the draw counter for this request.
		this.state.isLoading = true; // Indicate that the system is busy.
		this.showLoading(); // Manifest the loading indicator.

		// Construct the request payload, mapping internal state to server-expected parameters (DataTables format).
		const requestPayload = {
			// Synchronization counter.
			[this.config.requestParams.draw]: this.state.draw,
			// Pagination parameters: starting row index and number of rows per page.
			[this.config.requestParams.start]: (this.state.page - 1) * this.state.pageSize,
			[this.config.requestParams.length]: this.config.paging ? this.state.pageSize : -1, // Send -1 length if paging is disabled.

			// Global Search parameter.
			[this.config.requestParams.search]: {
				value: this.config.searching ? this.state.search : '', // Include global search value if enabled.
				regex: false, // Regex is not currently supported via UI toggle.
			},

			// Ordering parameters: An array of objects specifying columns and directions.
			[this.config.requestParams.order]: Array.from(this.state.sort).map(([colName, dir]) => {
				// Find the 0-based index of the column based on its definition order in the config.
				// The server typically uses this index for sorting.
				// EKN: Changed to send column name instead of index as our SSP expects name.
				// const colIndex = Object.keys(this.config.columns).indexOf(colName);
				// // Ensure the column was found (index >= 0).
				// if (colIndex === -1) {
				// 	console.warn(`CustomDataTable: Column "${colName}" not found in config for sorting request.`);
				// 	return null; // Filter out invalid entries.
				// }
				return { column: colName, dir: dir }; // Send the column name and direction
			}).filter(item => item !== null), // Remove any null entries (shouldn't happen with colName now)

			// Column definitions and per-column search parameters.
			[this.config.requestParams.columns]: Object.entries(this.config.columns).map(([name, colConfig]) => ({ // EKN: Removed index, not needed
				data: name, // Use 'data' property name as per DataTables spec if needed, though 'column' was used in SSP. Let's align to 'data' in request, keep 'column' in SSP response. Reverted: Keep 'column' in request for SSP match.
				column: name, // The property name in the data object / alias expected by SSP
				name: name, // Often same as 'data' and 'column'
				searchable: colConfig.searchable === true, // Report if the column is searchable.
				orderable: colConfig.sortable === true, // Report if the column is orderable.
				search: { // Per-column search value for this column.
					value: this.config.searching && this.config.columnSearching && colConfig.searchable ? (this.state.columnFilters.get(name)?.value || '') : '',
					regex: this.config.searching && this.config.columnSearching && colConfig.searchable ? (this.state.columnFilters.get(name)?.regex || false) : false,
				},
			})),

			// Include any custom parameters from the config.
			...(this.config.customParams || {}), // Spread custom params here
		};

		try {
			// Execute the asynchronous fetch ritual.
			const response = await fetch(this.config.endpoint, {
				method: this.config.method, // Use the configured HTTP method.
				headers: { 'Content-Type': 'application/json' }, // Specify the request body format.
				body: JSON.stringify(requestPayload), // Send the constructed payload as JSON.
				// credentials: 'include' might be needed for cookies/sessions.
			});

			// Check the response status for HTTP errors.
			if (!response.ok) {
				let errorDetail = `HTTP error! status: ${response.status}`;
				let errorBody = null;
				try {
					errorBody = await response.json();
					// Attempt to include server-provided error details if available.
					errorDetail += ` - ${errorBody.error || JSON.stringify(errorBody)}`;
				} catch (e) {
					// Ignore if the response body isn't JSON.
				}
				// Cast an error to be caught in the catch block.
				const httpError = new Error(errorDetail);
				httpError.responseBody = errorBody; // Attach response body for potential debugging
				throw httpError;
			}

			// Parse the received truth (JSON data).
			const data = await response.json();

			// Validate the draw counter to ensure the response is not outdated.
			if (data[this.config.responseParams.draw] !== this.state.draw) {
				console.warn('CustomDataTable: Received outdated data for draw', data[this.config.responseParams.draw], '. Current draw is', this.state.draw, '. Ignoring.');
				// Still hide loading even for outdated data
				this.state.isLoading = false;
				this.hideLoading();
				return; // Discard outdated data.
			}

			// Validate the basic structure of the received data using configured response parameters.
			const recordsTotal = data[this.config.responseParams.recordsTotal];
            const recordsFiltered = data[this.config.responseParams.recordsFiltered];
            const responseData = data[this.config.responseParams.data];

			if (recordsTotal === undefined || recordsFiltered === undefined || !Array.isArray(responseData)) {
				// Cast an error if the data structure is invalid.
				throw new Error(`CustomDataTable: Invalid data structure received from server. Expected properties: "${this.config.responseParams.recordsTotal}", "${this.config.responseParams.recordsFiltered}", "${this.config.responseParams.data}".`);
			}

			// Update the system's state with the received truth.
			this.state.totalRecords = recordsTotal;
			this.state.filteredRecords = recordsFiltered;
			this.state.data = responseData; // Store the data for the current page.

			// Note on selectedRows: Selection state is lost across fetches with this implementation.
			// For persistence, store unique IDs from rowData in this.state.selectedRows set and re-apply styles after renderTableBody.

			// Re-render the visible interface based on the new state.
			this.renderTableHeader(); // Update sort icons etc.
			this.renderTableBody(); // Populate the table with data.
			this.renderPagination(); // Update pagination controls.
			this.renderInfo(); // Update the info summary.

			// Invoke the success callback.
			this.config.onDataLoad(data);

			// Save the system's state if state saving is enabled.
			if (this.config.stateSave) {
				this.saveState();
			}

		} catch (err) {
			// Handle errors during the fetch ritual.
			console.error('CustomDataTable Fetch error:', err); // Log the error.

			// Reset state related to data display.
			this.state.data = []; // Clear data on error.
			this.state.totalRecords = 0;
			this.state.filteredRecords = 0;
			// Decide whether to reset page to 1 on error or keep it. Keeping it might be confusing if no data renders.
			this.state.page = 1;

			// Re-render the interface to show the error state.
			this.renderTableBody(this.config.errorMessage); // Display the configured error message.
			this.renderPagination(); // Update pagination (will show 0 pages, disabling buttons).
			this.renderInfo(); // Update info (will show 0 entries).

			// Invoke the error callback.
			this.config.onError(err);

		} finally {
             // Ensure loading indicator is hidden regardless of success or failure.
            this.state.isLoading = false;
			this.hideLoading();
        }
	}

	// showLoading: Makes the loading indicator visible.
	showLoading() {
		return; //ekn Removed
		
		const loadingOverlay = this.element.querySelector('.cdt-loading-overlay');
		if (loadingOverlay) {
			loadingOverlay.classList.remove('d-none'); // Remove the hidden class.
		}
		// Optional: Disable controls during loading to prevent further interactions.
		// this.element.querySelectorAll('.cdt-controls input, .cdt-controls select, .cdt-controls button').forEach(el => el.disabled = true);
	}

	// hideLoading: Makes the loading indicator hidden.
	hideLoading() {
		return; //ekn Removed
		
		const loadingOverlay = this.element.querySelector('.cdt-loading-overlay');
		if (loadingOverlay) {
			loadingOverlay.classList.add('d-none'); // Add the hidden class.
		}
		// Optional: Re-enable controls after loading.
		// this.element.querySelectorAll('.cdt-controls input, .cdt-controls select, .cdt-controls button').forEach(el => el.disabled = false);
	}


	// exportCSV: Exports the *currently displayed* data to a CSV file.
	// Note: For large datasets, a server-side export endpoint is recommended to export *all* filtered data.
	exportCSV() {
		// Ensure CSV export is enabled.
		if (!this.config.exportCSV) {
			console.warn('CustomDataTable: CSV export is disabled in configuration.');
			return;
		}

		// Get the names of visible columns.
		const visibleColumns = Object.entries(this.config.columns)
			.filter(([name]) => this.state.columnVisibility.get(name));

		// Create the CSV header row.
		const headers = visibleColumns.map(([name, col]) =>
			// Escape double quotes by doubling them, and enclose the whole header in double quotes.
			`"${(col.label || name).replace(/"/g, '""')}"`
		).join(',');

		// Create the CSV data rows.
		const rows = this.state.data.map(rowData =>
			visibleColumns.map(([name, col]) => {
				const value = rowData[name]; // Get the raw value.
				// Apply renderer if it exists, otherwise use raw value.
				const renderedValue = (col.renderer ? col.renderer(value, rowData) : value) || '';
				// Escape double quotes and enclose the cell value in double quotes.
				// Also handle potential newlines in data by replacing them with spaces or similar if needed for CSV
				return `"${String(renderedValue).replace(/"/g, '""').replace(/\n/g, ' ').replace(/\r/g, '')}"`;
			}).join(',') // Join cell values with commas for each row.
		);

		// Combine header and rows.
		const csv = [headers, ...rows].join('\n');

		// Create a Blob and a temporary URL for the CSV data.
		const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
		const url = URL.createObjectURL(blob);

		// Create and click a temporary link element to trigger download.
		const a = document.createElement('a');
		a.href = url;
		a.download = 'export.csv'; // Set the download filename.
		// Append to body and click to ensure download works across browsers, especially Firefox.
		document.body.appendChild(a);
		a.click();

		// Clean up the temporary link and URL.
		document.body.removeChild(a);
		URL.revokeObjectURL(url);
	}

	// saveState: Saves the table's current state to localStorage.
	saveState() {
		// Ensure state saving is enabled.
		if (!this.config.stateSave) return;

		// Define the state parts to save.
		const stateToSave = {
			page: this.state.page,
			pageSize: this.state.pageSize,
			search: this.state.search,
			// Convert Maps to Arrays for JSON serialization.
			columnFilters: Array.from(this.state.columnFilters.entries()),
			sort: Array.from(this.state.sort.entries()),
			columnVisibility: Array.from(this.state.columnVisibility.entries()),
			// selectedRows is NOT saved as it stores data object references (non-persistent across fetches).
		};

		try {
			// Serialize and store the state in localStorage using a unique key.
			localStorage.setItem(`cdt-state-${this.config.table_el_id}`, JSON.stringify(stateToSave));
			// console.log('CustomDataTable: State saved', stateToSave); // Optional logging.
		} catch (e) {
			console.error('CustomDataTable: Failed to save state to localStorage', e); // Log errors.
		}
	}

	// loadState: Loads the table's state from localStorage and applies it.
	loadState() {
		// Ensure state saving is enabled.
		if (!this.config.stateSave) return;

		try {
			// Retrieve the saved state string.
			const savedState = localStorage.getItem(`cdt-state-${this.config.table_el_id}`);
			if (savedState) {
				// Parse the JSON string.
				const state = JSON.parse(savedState);
				// console.log('CustomDataTable: State loaded', state); // Optional logging.

				// Apply loaded state, validating values against current config.

				// Page size: Apply if valid option.
				if (state.pageSize !== undefined && this.config.pageLengthOptions.includes(state.pageSize)) {
					this.state.pageSize = state.pageSize;
				}
				// Page number: Restoring page directly can be tricky with server-side if filtered records change.
				// Initial fetchData will use page 1 anyway. You might restore page AFTER the first fetch if needed,
				// but it adds complexity (e.g., handle saved page > new total pages).
				// For simplicity, we rely on initial page=1 from state definition + fetch.
				// this.state.page = state.page || 1; // Keep initial state page=1

				// Global search: Apply if exists in saved state.
				if (state.search !== undefined) {
					this.state.search = state.search;
				}

				// Column filters: Apply if valid structure and columns exist in config.
				if (Array.isArray(state.columnFilters)) {
					// Filter out entries for columns that no longer exist in the config
					this.state.columnFilters = new Map(state.columnFilters.filter(([colName]) => this.config.columns[colName]));
				}

				// Sort: Apply if valid structure and columns exist in config.
				if (Array.isArray(state.sort)) {
					// Filter out entries for columns that no longer exist or are not sortable in the config
					this.state.sort = new Map(state.sort.filter(([colName]) => this.config.columns[colName]?.sortable));
				} else if (this.config.defaultSort.length > 0) {
                    // If no saved sort or invalid, apply default sort from config.
                    this.state.sort.clear();
                    this.config.defaultSort.forEach(s => this.state.sort.set(s.column, s.dir));
                }


				// Column visibility: Apply, merging saved state with current config defaults.
				if (Array.isArray(state.columnVisibility)) {
					const savedVisibility = new Map(state.columnVisibility);
					Object.keys(this.config.columns).forEach(name => {
						// Use saved state if available for this column, else use config default, else default to true.
						const isVisible = savedVisibility.has(name) ? savedVisibility.get(name) :
										  (this.config.columns[name]?.visible !== undefined ? this.config.columns[name].visible : true);
						// Only set if it exists in the current config
						if (this.config.columns[name]) {
                            this.state.columnVisibility.set(name, isVisible);
                        }
					});
                     // Also remove visibility state for columns no longer in config
                     Array.from(this.state.columnVisibility.keys()).forEach(name => {
                         if (!this.config.columns[name]) {
                             this.state.columnVisibility.delete(name);
                         }
                     });
				} else {
                    // If no saved visibility, initialize from config defaults
                    Object.keys(this.config.columns).forEach(name => {
                        const isVisible = this.config.columns[name]?.visible !== undefined ? this.config.columns[name].visible : true;
                        this.state.columnVisibility.set(name, isVisible);
                    });
                }


				// After loading state, update input fields in the DOM to reflect loaded values
				// This needs to happen AFTER renderStructure has created the inputs,
				// but BEFORE the first $fetchData if you want the initial fetch to use loaded filters.
				// Since $fetchData is called in init() after attachEvents (which is after renderStructure),
				// the inputs will be updated before the first fetch.
				// We don't strictly need requestAnimationFrame here anymore as the state is loaded
				// and used by renderStructure *before* the first fetch.
				// However, calling this ensures inputs are visually correct if renderStructure
				// somehow didn't pick up the state initially (e.g., race condition, though unlikely).
				// Keeping it doesn't hurt.
				requestAnimationFrame(() => {
					const globalSearchInput = this.element.querySelector('.cdt-global-search');
					if (globalSearchInput && this.config.searching) {
						globalSearchInput.value = this.state.search;
					}
					if (this.config.searching && this.config.columnSearching) {
						this.state.columnFilters.forEach((filter, colName) => {
							const colSearchInput = this.element.querySelector(`.cdt-col-search[data-col="${colName}"]`);
							if (colSearchInput) {
								colSearchInput.value = filter.value;
							}
						});
					}
					// Page length select value is set in renderStructure based on this.state.pageSize.
					// Column visibility checkboxes are set in renderStructure based on this.state.columnVisibility.
					// Re-render header/body immediately after loading visibility to ensure correct display
                    // This is handled by renderStructure/renderTableHeader/renderTableBody being called in init()
				});

			} else if (this.config.defaultSort.length > 0) {
                // If no saved state found, but default sort is configured, apply it.
                this.state.sort.clear();
                this.config.defaultSort.forEach(s => this.state.sort.set(s.column, s.dir));
            }

		} catch (e) {
			console.error('CustomDataTable: Failed to load state from localStorage', e); // Log errors.
			// Clear potentially corrupt state to prevent future loading issues.
			localStorage.removeItem(`cdt-state-${this.config.table_el_id}`);
		}
	}


	// --- Public API Methods ---

	/**
	 * Returns an array of data objects for the currently selected rows on the *current* page.
	 * Note: Selection state is not persistent across fetches with the current implementation.
	 * @returns {object[]} An array of data objects.
	 */
	getSelectedData() {
		return Array.from(this.state.selectedRows);
	}

	/**
	 * Triggers a data fetch based on the table's current state (page, filters, sort) without resetting pagination.
	 * Equivalent to DataTables `.draw(false)`.
	 */
	redraw() {
		this.$fetchData();
	}

	/**
	 * Programmatically sets the global search value and updates the table.
	 * Resets pagination to the first page.
	 * @param {string} value - The search term to apply.
	 */
	search(value) {
		if (this.config.searching) {
			const globalSearchInput = this.element.querySelector('.cdt-global-search');
			if (globalSearchInput) {
				globalSearchInput.value = value; // Update the input field visually.
			}
            const newValue = value.trim();
            if (this.state.search !== newValue) {
                this.state.search = newValue; // Update the state.
                this.state.page = 1; // Reset page to 1.
                this.$fetchData(); // Trigger data fetch.
            }
		} else {
			console.warn('CustomDataTable: Global searching is disabled in config.');
		}
	}

	/**
	 * Programmatically sets a specific column's search value and updates the table.
	 * Resets pagination to the first page.
	 * @param {string} colName - The name of the column to filter.
	 * @param {string} value - The search term to apply to this column.
	 */
	columnSearch(colName, value) {
		// Check if column searching is enabled and the column exists and is searchable.
		if (this.config.searching && this.config.columnSearching && this.config.columns[colName]?.searchable) {
			const colSearchInput = this.element.querySelector(`.cdt-col-search[data-col="${colName}"]`);
			if (colSearchInput) {
				colSearchInput.value = value; // Update the input field visually.
			}
            const newValue = value.trim();
            const currentFilter = this.state.columnFilters.get(colName)?.value || '';
            if (currentFilter !== newValue) {
                // Update the column filter state. Assuming no regex via API for simplicity here.
                this.state.columnFilters.set(colName, { value: newValue, regex: false });
                this.state.page = 1; // Reset page to 1.
                this.$fetchData(); // Trigger data fetch.
            }
		} else {
			console.warn(`CustomDataTable: Column searching is disabled or column "${colName}" is not searchable.`);
		}
	}

	/**
	 * Programmatically navigates to a specific page.
	 * @param {number} pageNumber - The 1-based page number to navigate to.
	 */
	page(pageNumber) {
		const totalPages = Math.ceil(this.state.filteredRecords / this.state.pageSize);
		// Validate the requested page number.
		if (pageNumber >= 1 && pageNumber <= totalPages && pageNumber !== this.state.page) {
			this.state.page = pageNumber; // Update the state.
			this.$fetchData(); // Trigger data fetch.
		} else {
			console.warn(`CustomDataTable: Invalid page number: ${pageNumber}. Total pages: ${totalPages}.`);
		}
	}

	/**
	 * Programmatically sets the number of entries displayed per page.
	 * Resets pagination to the first page.
	 * @param {number} length - The desired number of entries per page. Must be in pageLengthOptions.
	 */
	pageLength(length) {
		// Validate the requested page length against allowed options.
		if (this.config.lengthChange && this.config.pageLengthOptions.includes(length)) {
			const pageLengthSelect = this.element.querySelector('.cdt-page-length');
			if (pageLengthSelect) {
				pageLengthSelect.value = length; // Update the select element visually.
			}
            // Only update state and fetch if size changes
            if (this.state.pageSize !== length) {
                this.state.pageSize = length; // Update the state.
                this.state.page = 1; // Reset page to 1 (DataTables standard).
                this.$fetchData(); // Trigger data fetch.
            }
		} else {
			console.warn(`CustomDataTable: Invalid page length: ${length}. Must be one of [${this.config.pageLengthOptions.join(', ')}]. Length change feature must also be enabled.`);
		}
	}

	/**
	 * Programmatically sets the table's sorting order.
	 * Resets pagination to the first page.
	 * @param {Array<{column: string, dir: 'asc'|'desc'}>} sortArray - An array of sort criteria.
	 */
	order(sortArray) {
		if (this.config.ordering) {
			const newSort = new Map();
			let isValidFormat = true;
			// Validate the sort array format.
			if (!Array.isArray(sortArray)) {
                 console.warn('CustomDataTable: Invalid sort format. Expected an array.');
                 isValidFormat = false;
             } else {
                sortArray.forEach(s => {
                    // Check if column exists, is sortable, and direction is valid.
                    if (s && typeof s.column === 'string' && this.config.columns[s.column]?.sortable && (s.dir === 'asc' || s.dir === 'desc')) {
                        newSort.set(s.column, s.dir);
                    } else {
                        console.warn(`CustomDataTable: Invalid sort order ignored: { column: "${s?.column}", dir: "${s?.dir}" }. Column must exist, be sortable, and direction must be 'asc' or 'desc'.`);
                        // Decide if you want to invalidate the whole array or just skip invalid entries. Skipping seems more robust.
                    }
                });
             }

			// Only apply the sort if the format was valid and the new sort state is different from the current one.
			// Comparing maps requires iterating. A simpler check is comparing size and first elements, or serialize.
			// Or, just apply and let fetchData handle no-change if server supports it, but client-side check is better.
			const currentSortArray = Array.from(this.state.sort.entries());
            const newSortArray = Array.from(newSort.entries());

            // Simple string comparison of JSON stringified arrays for deep comparison
            const currentSortString = JSON.stringify(currentSortArray);
            const newSortString = JSON.stringify(newSortArray);


			if (isValidFormat && currentSortString !== newSortString) {
				this.state.sort = newSort; // Update the state.
				this.state.page = 1; // Reset page to 1.
				this.$fetchData(); // Trigger data fetch.
			} else if (!isValidFormat) {
                // Invalid format, do nothing.
            } else {
                 // Sort order is the same, do nothing.
                console.log('CustomDataTable: Order unchanged.');
            }

		} else {
			console.warn('CustomDataTable: Ordering is disabled in config.');
		}
	}

	/**
	 * Provides a chainable API to access column-specific methods.
	 * @param {string} colName - The name of the column.
	 * @returns {object} An object with column-specific methods (e.g., .visible()).
	 */
	column(colName) {
		// Check if the column exists in the configuration.
		if (!this.config.columns[colName]) {
			console.warn(`CustomDataTable: Column "${colName}" not found.`);
			// Return a stub object with methods that warn but do nothing, allowing chaining without error.
			const stubApi = {
				visible: (show) => { console.warn(`CustomDataTable: Cannot call method 'visible' on non-existent column "${colName}".`); return stubApi; },
                search: (value) => { console.warn(`CustomDataTable: Cannot call method 'search' on non-existent column "${colName}".`); return stubApi; },
                // Add stubs for other potential column methods here.
			};
			return stubApi;
		}

		// Return an object containing methods specific to the column. This object is chainable.
		const columnApi = {
			/**
			 * Sets or gets the visibility of the column.
			 * @param {boolean} [show] - If provided, sets the visibility (true for show, false for hide).
			 * @returns {boolean|object} The current visibility if no argument is given, otherwise the columnApi object for chaining.
			 */
			visible: (show) => {
				// If 'show' is undefined, act as a getter.
				if (show === undefined) {
					return this.state.columnVisibility.get(colName) || false; // Return current visibility state.
				} else {
					// If 'show' is defined, act as a setter.
					// Ensure column visibility control is enabled.
					if (this.config.columnVisibility) {
						const isVisible = !!show; // Ensure boolean value.
						// Only proceed if the visibility state is actually changing.
						if (this.state.columnVisibility.get(colName) !== isVisible) {
							this.state.columnVisibility.set(colName, isVisible); // Update state.
							// Find and update the corresponding checkbox in the dropdown.
							const checkbox = this.element.querySelector(`.cdt-column-visibility input[data-col="${colName}"]`);
							if (checkbox) {
								checkbox.checked = isVisible;
							}
							// Re-render header (to update TH visibility) and body (to update TD visibility).
							this.renderTableHeader();
							this.renderTableBody();
							// Save state if enabled.
							if (this.config.stateSave) {
								this.saveState();
							}
						}
					} else {
						console.warn('CustomDataTable: Column visibility control is disabled in config.');
					}
					return columnApi; // Return the columnApi object for chaining.
				}
			},

            /**
             * Sets the search value for this column.
             * @param {string} value - The search term to apply.
             * @returns {object} The columnApi object for chaining.
             */
             search: (value) => {
                this.columnSearch(colName, value); // Use the existing columnSearch method
                return columnApi; // Return columnApi for chaining
             },

             /**
              * Gets the configuration for this column.
              * @returns {object} The column configuration object.
              */
             settings: () => {
                 return this.config.columns[colName];
             }

			// Add other column-specific API methods here if needed (e.g., .orderable(), .title()).
		};

		return columnApi; // Return the columnApi object, enabling chaining like table.column('name').visible(true).
	}

	// Note: More complex features like Editor, FixedHeader, Responsive, Scroller etc., would require dedicated
	// extensions or significant additions beyond this core structure and API.
}


/**
 * CustomDataTable - A JavaScript class for enhancing HTML tables with server-side processing,
 * pagination, searching, sorting, column visibility, and state saving, inspired by DataTables.js.
 * Requires Bootstrap 5 CSS and JS for styling and some component functionality (dropdown, spinner).
 */
class CustomDataTableV2_BAK {

	/**
	 * @param {string} selector - The CSS selector for the container element where the table will be rendered.
	 * @param {object} config - Configuration options for the table.
	 * @param {string} [config.table_el_id] - The ID to assign to the generated <table> element. Defaults to a unique ID.
	 * @param {object} config.columns - An object defining the table columns. Keys are data property names, values are column configurations.
	 * @param {string} [config.columns.columnName.label] - The human-readable label for the column header. Defaults to the column name.
	 * @param {boolean} [config.columns.columnName.searchable=false] - Whether this column can be searched (per-column search).
	 * @param {boolean} [config.columns.columnName.sortable=false] - Whether this column can be sorted.
	 * @param {boolean} [config.columns.columnName.visible=true] - Whether this column is visible by default.
	 * @param {function(any, object, number, number): string} [config.columns.columnName.renderer] - A function to render the cell content.
	 *                                               Receives value, full row data, row index (current page), draw counter.
	 * @param {string} [config.endpoint='/data'] - The URL for the server-side processing endpoint.
	 * @param {string} [config.method='POST'] - The HTTP method for the fetch request.
	 * @param {Array<{column: string, dir: 'asc'|'desc'}>} [config.defaultSort=[]] - Initial sorting criteria.
	 * @param {string} [config.emptyMessage='No matching records found'] - Message displayed when table is empty after filtering.
	 * @param {string} [config.errorMessage='Error loading data'] - Message displayed on data fetch error.
	 * @param {boolean} [config.info=true] - Enable/disable the table information display ('Showing X to Y of Z entries').
	 * @param {boolean} [config.paging=true] - Enable/disable pagination.
	 * @param {boolean} [config.searching=true] - Enable/disable the global search input.
	 * @param {boolean} [config.columnSearching=true] - Enable/disable per-column search inputs (requires config.searching=true and column.searchable=true).
	 * @param {boolean} [config.ordering=true] - Enable/disable sorting clicking on headers (requires column.sortable=true).
	 * @param {boolean} [config.lengthChange=true] - Enable/disable the page length change dropdown.
	 * @param {boolean} [config.exportCSV=true] - Enable/disable the Export CSV button.
	 * @param {boolean} [config.columnVisibility=true] - Enable/disable the column visibility dropdown.
	 * @param {boolean} [config.stateSave=false] - Enable/disable saving/loading table state (page, size, search, sort, filters, visibility) to/from localStorage.
	 * @param {number} [config.pageSize=10] - The initial number of entries per page.
	 * @param {number[]} [config.pageLengthOptions=[10, 25, 50, 100]] - Options for the page length dropdown.
	 * @param {number} [config.paginationPagesToShow=5] - Number of page numbers to show around the current page in pagination.
	 * @param {object} [config.requestParams] - Customize the names of parameters sent to the server (defaults to DataTables format).
	 * @param {object} [config.responseParams] - Customize the names of properties expected in the server response (defaults to DataTables format).
	 * @param {function(object): void} [config.onDataLoad] - Callback function executed after data is successfully loaded.
	 * @param {function(Error): void} [config.onError] - Callback function executed on data fetch error.
	 */
	constructor(selector, config) {
		// Identify and validate the container element.
		this.element = document.querySelector(selector);
		if (!this.element) {
			console.error(`CustomDataTable: Vessel with selector "${selector}" not found.`);
			throw new Error(`CustomDataTable: Vessel with selector "${selector}" not found.`);
		}

		// Merge the external blueprint (config) with intrinsic default principles.
		this.config = {
			// Core identity and source of truth
			table_el_id: config.table_el_id || `cdt-table-${Math.random().toString(36).substr(2, 9)}`, // A unique identifier if none is divinely provided.
			columns: config.columns || {}, // Definition of the data columns, their nature and capabilities.
			endpoint: config.endpoint || '/data', // The conduit to the source of data.
			method: config.method || 'POST', // The ritual method for summoning data (HTTP).
			defaultSort: config.defaultSort || [], // The initial ordering of the data, a predefined harmony.
			emptyMessage: config.emptyMessage || 'No matching records found', // The message in the void when filtering yields nothing.
			errorMessage: config.errorMessage || 'Error loading data', // The lament when the conduit fails.

			// Feature Toggles: Control nodes determining the manifested interactions.
			info: config.info !== undefined ? config.info : true, // Manifest the data summary.
			paging: config.paging !== undefined ? config.paging : true, // Enable the splitting of data across dimensions (pages).
			searching: config.searching !== undefined ? config.searching : true, // Enable the global search energy.
			columnSearching: config.columnSearching !== undefined ? config.columnSearching : true, // Enable searching within specific dimensions (columns).
			ordering: config.ordering !== undefined ? config.ordering : true, // Enable the reordering of data by dimensions.
			lengthChange: config.lengthChange !== undefined ? config.lengthChange : true, // Enable changing the number of entries per dimension.
			exportCSV: config.exportCSV !== undefined ? config.exportCSV : true, // Enable the ritual of exporting data.
			columnVisibility: config.columnVisibility !== undefined ? config.columnVisibility : true, // Enable control over visible dimensions.
			stateSave: config.stateSave !== undefined ? config.stateSave : false, // Enable the memory of previous states.

			// Paging Parameters: Defining the dimensions of pages.
			pageSize: config.pageSize || 10, // The initial size of each data dimension.
			pageLengthOptions: config.pageLengthOptions || [10, 25, 50, 100], // The available sizes for dimensions.
			paginationPagesToShow: config.paginationPagesToShow || 5, // The number of page portals visible at once.

			// Server Interaction Parameters: Defining the language spoken with the source of truth.
			requestParams: { // Mapping internal concepts to external server expectations (DataTables format).
				draw: 'draw', start: 'start', length: 'length', search: 'search',
				order: 'order', columns: 'columns',
				...(config.requestParams || {}), // Allow overriding defaults
			},
			responseParams: { // Mapping external server truth to internal understanding.
				draw: 'draw', recordsTotal: 'recordsTotal', recordsFiltered: 'recordsFiltered', data: 'data',
                ...(config.responseParams || {}), // Allow overriding defaults
			},

			// Callbacks: Hooks for external processes to react to internal events.
			onDataLoad: config.onDataLoad || (() => { }), // Invoked upon successful data arrival.
			onError: config.onError || ((err) => console.error('CustomDataTable Error:', err)), // Invoked when the conduit fails.

             // Custom parameters to send to the server on every fetch
             ...(config.customParams || {}), // Example: tableName, whereAll etc.
		};

		// The Initial State: The primordial conditions of the system.
		this.state = {
			page: 1, // Beginning at the first dimension.
			pageSize: this.config.pageSize, // Adopting the initial dimension size.
			search: '', // The void of initial global search.
			columnFilters: new Map(), // A map holding the specific dimension filter energies.
			sort: new Map(), // A map holding the current ordering energies (multi-dimensional sorting possible).
			totalRecords: 0, // The unknown total count before the first summoning.
			filteredRecords: 0, // The unknown filtered count.
			data: [], // The empty vessel for the current page's data.
			draw: 0, // A counter for the data summoning rituals, ensuring synchronicity.
			columnVisibility: new Map(), // A map holding the visibility status of each dimension.
			selectedRows: new Set(), // A set holding the selected data entities (bound to current page data objects for simplicity here).
			isLoading: false, // The system is initially at rest.
		};

		// Apply the initial ordering from the blueprint.
		this.config.defaultSort.forEach(s => this.state.sort.set(s.column, s.dir));

		// Initialize dimension visibility based on blueprint or default.
		Object.keys(this.config.columns).forEach(name => {
			const isVisible = config.columns[name]?.visible !== undefined ? config.columns[name].visible : true;
			this.state.columnVisibility.set(name, isVisible);
		});

		// Consult memory (state saving) if enabled, potentially altering the initial state.
		if (this.config.stateSave) {
			this.loadState(); // Attempt to load the system's past condition.
		}

		// Bind methods: Ensuring the system's functions operate within its own context.
		// Binding commonly used methods here to ensure 'this' context is correct in event listeners etc.
		this.handleSortClick = this.handleSortClick.bind(this);
		this.handleColumnVisibilityChange = this.handleColumnVisibilityChange.bind(this);
		this.handlePaginationClick = this.handlePaginationClick.bind(this);
		this.handleRowClick = this.handleRowClick.bind(this);
		this.exportCSV = this.exportCSV.bind(this);
		this.saveState = this.saveState.bind(this);
		this.loadState = this.loadState.bind(this);


		// Initiate the Creation Sequence.
		this.init();
	}

	// The Initialization: Orchestrates the initial manifestation and energy binding.
	init() {
		this.renderStructure(); // Manifest the visible form.
		this.attachEvents(); // Bind the energies of interaction.
		this.$fetchData(); // Summon the initial data, beginning the cycle.
	}

    // Helper to create DOM element from HTML string (A small, efficient construction tool).
	createElementFromHTML(htmlString) {
		const div = document.createElement('div');
		div.innerHTML = htmlString.trim();
		return div.firstChild; // Return the first element
	}

	// renderStructure: The architect of the visible table interface.
	renderStructure() {
		// Create a document fragment: A temporary, lightweight container in memory for efficient building.
		const fragment = document.createDocumentFragment();

		// Construct the Controls section (Header).
		const controlsHtml = `
			<div class="cdt-controls mb-3">
				<div class="row g-2 align-items-center">
					${this.config.lengthChange ? `
					<div class="col-auto">
						<label for="${this.config.table_el_id}-length" class="col-form-label col-form-label-sm">Show</label>
					</div>
					<div class="col-auto">
						<select id="${this.config.table_el_id}-length" class="cdt-page-length form-select form-select-sm">
							${this.config.pageLengthOptions.map(n => `<option value="${n}">${n}</option>`).join('')}
						</select>
					</div>
					<div class="col-auto">
						<label for="${this.config.table_el_id}-length" class="col-form-label col-form-label-sm">entries</label>
					</div>
					` : ''}

					<div class="col"></div> <!-- A flexible space divider -->

					${this.config.searching ? `
					<div class="col-md-4 col-lg-3">
						<input type="text" class="cdt-global-search form-control form-control-sm" placeholder="Search...">
					</div>
					` : ''}

					${this.config.columnVisibility ? `
					<div class="col-auto">
						<div class="dropdown d-inline-block">
							<button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
								Columns
							</button>
							<ul class="dropdown-menu cdt-column-visibility">
								${Object.entries(this.config.columns).map(([name, col]) => `
									<li><a class="dropdown-item" href="#" data-col="${name}">
										<input type="checkbox" class="form-check-input me-2" ${this.state.columnVisibility.get(name) ? 'checked' : ''}> ${col.label || name}
									</a></li>
								`).join('')}
							</ul>
						</div>
					</div>
					` : ''}

					${this.config.exportCSV ? `
					<div class="col-auto">
						<button class="btn btn-primary btn-sm cdt-export-csv">Export CSV</button>
					</div>
					` : ''}
				</div>
			</div>
		`;
		// Append the created control element to the fragment.
		fragment.appendChild(this.createElementFromHTML(controlsHtml));


		// Construct the Table Container section, including the table and loading overlay.
		const tableContainerHtml = `
			<div class="cdt-table-container table-responsive">
				<div class="cdt-loading-overlay d-none">
					<div class="spinner-border text-primary" role="status">
						<span class="visually-hidden">Loading...</span>
					</div>
				</div>
				<table id="${this.config.table_el_id}" class="cdt-table table table-bordered table-hover mb-0" role="grid" aria-describedby="${this.config.table_el_id}_info">
					<thead><tr></tr></thead> <!-- Header row will be populated by renderTableHeader -->
					<tbody></tbody> <!-- Table body will be populated by renderTableBody -->
				</table>
			</div>
		`;
		// Append the created container element to the fragment.
		fragment.appendChild(this.createElementFromHTML(tableContainerHtml));


		// Construct the Footer section, including info and pagination.
		const footerHtml = `
			<div class="cdt-footer mt-3 d-flex justify-content-between align-items-center flex-wrap">
				${this.config.info ? `<div class="cdt-info mb-2 mb-sm-0" id="${this.config.table_el_id}_info" role="status" aria-live="polite"></div>` : '<div></div>'}
				${this.config.paging ? `
				<div class="cdt-pagination">
					<nav aria-label="Table pagination">
						<ul class="pagination pagination-sm mb-0">
							<li class="page-item cdt-prev">
								<a class="page-link" href="#" aria-label="Previous" data-page="prev">
									<span aria-hidden="true">«</span>
									<span class="visually-hidden">Previous</span>
								</a>
							</li>
							<!-- REMOVED: <li class="page-item cdt-page-numbers"></li> -->
							<!-- Page number LIs will be appended DIRECTLY to the UL below -->

							<li class="page-item cdt-next">
								<a class="page-link" href="#" aria-label="Next" data-page="next">
									<span aria-hidden="true">»</span>
									<span class="visually-hidden">Next</span>
								</a>
							</li>
						</ul>
					</nav>
				</div>
				` : '<div></div>'}
			</div>
		`;
		fragment.appendChild(this.createElementFromHTML(footerHtml));

		// Clear the original vessel's content and append the complete, constructed fragment in a single operation.
		this.element.innerHTML = ''; // Empty the vessel.
		this.element.appendChild(fragment); // Infuse the structure into the vessel.

		// Set the initial value for the page length dropdown if it was created.
		if (this.config.lengthChange) {
			const pageLengthSelect = this.element.querySelector('.cdt-page-length');
			if (pageLengthSelect) {
				pageLengthSelect.value = this.state.pageSize; // Reflect the initial or loaded state page size.
			}
		}

		// Immediately populate the table header row based on current config and state.
		this.renderTableHeader();
	}

	// renderTableHeader: Constructs the table header row based on visible columns and sort state.
	renderTableHeader() {
		// Find the header row vessel.
		const theadRow = this.element.querySelector(`#${this.config.table_el_id} thead tr`);
		if (!theadRow) return; // If the header row vessel is not found, cease the ritual.

		theadRow.innerHTML = ''; // Clear any existing header cells to prepare for the new structure.

		// Identify and order the columns that are currently visible according to the state.
		const visibleColumns = Object.entries(this.config.columns).filter(([name]) =>
			this.state.columnVisibility.get(name)
		);

		// Iterate through the visible columns to create a header cell for each.
		visibleColumns.forEach(([name, col], index) => {
			const th = document.createElement('th'); // Create the header cell vessel.
			th.setAttribute('scope', 'col'); // Declare this cell as a header for a column (accessibility).

			// Determine the CSS class and accessibility attribute for sorting, based on configuration and current state.
			let sortClass = '';
			if (this.config.ordering && col.sortable) { // If ordering is enabled and the column is sortable...
				const currentSortDir = this.state.sort.get(name);
				if (currentSortDir === 'asc') {
					sortClass = 'sorting_asc'; // DataTables standard class for ascending sort.
					th.setAttribute('aria-sort', 'ascending'); // Announce sort direction (accessibility).
				} else if (currentSortDir === 'desc') {
					sortClass = 'sorting_desc'; // DataTables standard class for descending sort.
					th.setAttribute('aria-sort', 'descending'); // Announce sort direction (accessibility).
				} else {
					sortClass = 'sorting'; // DataTables standard class for unsorted, but sortable.
					th.setAttribute('aria-sort', 'none'); // Announce no sort applied (accessibility).
				}
				th.classList.add('cdt-sortable'); // Add a class for event delegation targetting.
				th.dataset.col = name; // Store the column name for event handling.
			} else {
				// If not sortable or ordering disabled, explicitly state no sort for accessibility.
                 th.setAttribute('aria-sort', 'none');
            }


			// Populate the header cell's inner structure.
			// It contains the label, and conditionally, the sort indicator and search input.
			th.innerHTML = `
				<div class="d-flex flex-column align-items-start">
					<span class="${sortClass}">${col.label || name}</span> <!-- The column's name or label -->
					${this.config.searching && this.config.columnSearching && col.searchable ? `
						<!-- Column specific search input, conditional on search configs and column being searchable -->
						<input type="text" class="cdt-col-search form-control form-control-sm mt-1" data-col="${name}" placeholder="Search ${col.label || name}" value="${this.state.columnFilters.get(name)?.value || ''}">
					` : ''}
				</div>
			`;
			// Note: Basic responsiveness classes (like hiding columns beyond index 1) could be added here to TH
			// if needed to match TD visibility and maintain layout consistency.
			// if (index > 1) { th.classList.add('d-none', 'd-md-table-cell'); }

			theadRow.appendChild(th); // Append the created header cell to the header row.
		});
	}

	// renderTableBody: Populates the table body with data from the current state.
	renderTableBody(message = null) {
		// Find the table body vessel.
		const tbody = this.element.querySelector(`#${this.config.table_el_id} tbody`);
		if (!tbody) return; // If the tbody vessel is not found, cease the ritual.

		tbody.innerHTML = ''; // Clear any existing rows to prepare for the new data.

		// Determine the number of visible columns for colspan.
		const numCols = Object.values(this.config.columns).filter((_col, name) => this.state.columnVisibility.get(name)).length;


		// Check if a specific message should be displayed (e.g., error, no data) or if there's no data/filtered data.
		if (message) {
			// Display the provided message (e.g., error message).
			tbody.innerHTML = `<tr><td colspan="${numCols}" class="text-center">${message}</td></tr>`; // Render a single row with a spanning cell.
		} else if (this.state.data.length === 0 && this.state.filteredRecords === 0 && !this.state.isLoading) {
             // Display the "No data available" message if no data was fetched and no records exist at all.
             tbody.innerHTML = `<tr><td colspan="${numCols}" class="text-center">${this.config.emptyMessage}</td></tr>`;
        }
        else if (this.state.data.length === 0 && this.state.filteredRecords > 0 && !this.state.isLoading) {
            // Display the "No matching records" message if data was fetched, but the current page slice is empty
            // or if a filter resulted in 0 *filtered* records, but total exist.
             tbody.innerHTML = `<tr><td colspan="${numCols}" class="text-center">${this.config.emptyMessage}</td></tr>`;
        }
		else {
			// If there is data to display, render the rows.

			// Get the names of columns that are currently visible, in their defined order.
			const visibleColumnNames = Object.entries(this.config.columns)
				.filter(([name]) => this.state.columnVisibility.get(name))
				.map(([name]) => name); // Extract just the names.

			// Iterate through each data object (row) for the current page.
			this.state.data.forEach((rowData, rowIndex) => {
				const tr = document.createElement('tr'); // Create a row vessel.

				// Apply styling if the row is selected.
				// Selection state relies on the data object reference from the current page (non-persistent).
				if (this.state.selectedRows.has(rowData)) {
					tr.classList.add('table-primary'); // Add the selection style class.
				}

				// Iterate through the visible columns to create cells for the current row.
				visibleColumnNames.forEach((colName, colIndex) => {
					const td = document.createElement('td'); // Create a cell vessel.
					const colConfig = this.config.columns[colName]; // Get the configuration for this column.
					const value = rowData[colName]; // Get the raw data value for this cell.

					// Determine the cell's content: Use the renderer if defined, otherwise use text content.
					if (colConfig && typeof colConfig.renderer === 'function') {
						// Use the renderer function to generate HTML or text content.
						// Pass value, full row data, row index (on current page), and draw counter.
						td.innerHTML = colConfig.renderer(value, rowData, rowIndex, this.state.draw);
					} else {
						// Use textContent for safety if no renderer is defined.
						td.textContent = value;
					}

					// Apply basic responsiveness classes to hide columns on small screens based on index.
					// Matches the index-based hiding logic potential for TH.
					// if (colIndex > 1) { // Example: Hide columns beyond the second one on small screens.
					// 	td.classList.add('d-none', 'd-md-table-cell');
					// }

					tr.appendChild(td); // Append the cell to the row.
				});

				tbody.appendChild(tr); // Append the completed row to the table body.
			});
		}
		// Note: Loading state handled by overlay; renderTableBody doesn't explicitly render a loading row.
	}

	// renderPagination: Generates and updates the pagination controls.
	renderPagination() {
		// Do not render if paging is disabled in the configuration.
		if (!this.config.paging) return;

		// Find the pagination elements.
		// CORRECTED: Target the UL.pagination itself, not a nested LI.
		const paginationList = this.element.querySelector('.cdt-pagination ul.pagination'); // Target the UL where page LIs belong.
		const prevButton = this.element.querySelector('.cdt-prev'); // Previous button li element.
		const nextButton = this.element.querySelector('.cdt-next'); // Next button li element.

		// Ensure essential elements exist before proceeding.
		// Check for the UL, Prev, and Next LIs.
		if (!paginationList || !prevButton || !nextButton) {
            console.warn("CustomDataTable: Pagination elements not found or structure incorrect.");
            return;
        }

		const totalPages = Math.ceil(this.state.filteredRecords / this.state.pageSize); // Calculate total pages.
		const currentPage = this.state.page; // Get the current page from state.
		const pagesToShow = this.config.paginationPagesToShow; // Number of page links to show around the current page.
		const boundaryPages = 1; // Number of pages to always show at the beginning and end (Page 1 and totalPages).

		// Clear existing page numbers *between* the Prev and Next buttons.
		// We need to select only the page number LI items, not Prev/Next.
		// A simple way is to remove all children except the first (Prev) and last (Next).
		// Or, iterate and remove items that don't have cdt-prev or cdt-next classes.
		// Let's clear all contents between Prev and Next for simplicity in this render method.
		// This assumes Prev is always the first LI and Next is always the last LI.
		// A more robust way is to find Prev/Next and remove elements between them.

		// Robust clearing: Remove all children that are NOT cdt-prev or cdt-next
		let child = paginationList.firstChild;
		while (child) {
            const nextChild = child.nextSibling; // Get next before removing current
            if (child.nodeType === 1 && !child.classList.contains('cdt-prev') && !child.classList.contains('cdt-next')) {
                paginationList.removeChild(child);
            }
            child = nextChild;
        }


		// If there are no pages, disable nav buttons and show nothing in between.
		if (totalPages <= 1) {
			prevButton.classList.add('disabled');
			nextButton.classList.add('disabled');
            // Ensure no page numbers were added in case totalPages was briefly > 1
             // (already handled by the clearing above)
			return;
		}

		// Helper function to create a page list item (<li>) - remains the same.
		const addPageItem = (page, text, isActive = false, isDisabled = false, isEllipsis = false) => {
			const li = document.createElement('li');
			li.classList.add('page-item');
			if (isActive) li.classList.add('active');
			if (isDisabled) li.classList.add('disabled');

			const a = document.createElement('a');
			a.classList.add('page-link');
			a.href = '#';
			a.textContent = text;

			if (!isDisabled && !isEllipsis) {
				a.dataset.page = page;
				a.classList.add('cdt-page-number');
			}

			li.appendChild(a);
			return li;
		};

		// Logic to determine which page numbers to display (remains the same).
		let startPage = Math.max(boundaryPages + 1, currentPage - Math.floor(pagesToShow / 2));
		let endPage = Math.min(totalPages - boundaryPages, currentPage + Math.ceil(pagesToShow / 2) - 1);

		if (endPage - startPage + 1 < pagesToShow) {
			startPage = Math.max(boundaryPages + 1, endPage - pagesToShow + 1);
		}
		if (startPage > totalPages - pagesToShow - boundaryPages) {
			endPage = Math.min(totalPages - boundaryPages, startPage + pagesToShow - 1);
		}
        startPage = Math.max(2, startPage);
        endPage = Math.min(totalPages - 1, endPage);


		// --- Append page numbers directly to the UL, inserting them between Prev and Next ---

		const nextButtonElement = this.element.querySelector('.cdt-next'); // Get the Next button LI element to insert before.


		// Add Page 1 link.
		// Insert before the Next button.
		paginationList.insertBefore(addPageItem(1, 1, currentPage === 1), nextButtonElement);


		// Add left ellipsis if needed.
		if (startPage > boundaryPages + 1) {
			paginationList.insertBefore(addPageItem(null, '...', false, true, true), nextButtonElement);
		}

		// Add the central page links.
		for (let i = startPage; i <= endPage; i++) {
			paginationList.insertBefore(addPageItem(i, i, currentPage === i), nextButtonElement);
		}

		// Add right ellipsis if needed.
		if (endPage < totalPages - boundaryPages) {
			paginationList.insertBefore(addPageItem(null, '...', false, true, true), nextButtonElement);
		}

		// Add the last page link, only if totalPages > 1 and not already added.
		if (totalPages > boundaryPages) {
			if (totalPages !== 1 && endPage < totalPages) {
               paginationList.insertBefore(addPageItem(totalPages, totalPages, currentPage === totalPages), nextButtonElement);
            }
		}


		// Update the state of the Previous and Next buttons.
		if (prevButton) {
			prevButton.classList.toggle('disabled', currentPage <= 1); // Disable if on the first page.
		}
		if (nextButton) {
			// Disable if the current page is the last page.
			nextButton.classList.toggle('disabled', currentPage >= totalPages);
		}
	}

	// renderPaginationV1() {
	// 	// Do not render if paging is disabled in the configuration.
	// 	if (!this.config.paging) return;

	// 	// Find the pagination elements.
	// 	const paginationContainer = this.element.querySelector('.cdt-page-numbers'); // Container for page number links.
	// 	const prevButton = this.element.querySelector('.cdt-prev'); // Previous button li element.
	// 	const nextButton = this.element.querySelector('.cdt-next'); // Next button li element.

	// 	// Ensure essential elements exist before proceeding.
	// 	if (!paginationContainer || !prevButton || !nextButton) {
    //         console.warn("CustomDataTable: Pagination elements not found.");
    //         return;
    //     }

	// 	const totalPages = Math.ceil(this.state.filteredRecords / this.state.pageSize); // Calculate total pages.
	// 	const currentPage = this.state.page; // Get the current page from state.
	// 	const pagesToShow = this.config.paginationPagesToShow; // Number of page links to show around the current page.
	// 	const boundaryPages = 1; // Number of pages to always show at the beginning and end (Page 1 and totalPages).

	// 	paginationContainer.innerHTML = ''; // Clear existing page numbers.

	// 	// If there are no pages or only one page, disable nav buttons and show nothing in between.
	// 	if (totalPages <= 1) {
	// 		prevButton.classList.add('disabled');
	// 		nextButton.classList.add('disabled');
	// 		return;
	// 	}

	// 	// Helper function to create a page list item (<li>).
	// 	const addPageItem = (page, text, isActive = false, isDisabled = false, isEllipsis = false) => {
	// 		const li = document.createElement('li');
	// 		li.classList.add('page-item');
	// 		if (isActive) li.classList.add('active'); // Add 'active' class for the current page.
	// 		if (isDisabled) li.classList.add('disabled'); // Add 'disabled' class for inactive links (like ellipses).

	// 		const a = document.createElement('a');
	// 		a.classList.add('page-link');
	// 		a.href = '#'; // Use # for href, as click is handled by JS.
	// 		a.textContent = text; // Set the link text (page number or ...).

	// 		if (!isDisabled && !isEllipsis) {
	// 			a.dataset.page = page; // Store the page number in a data attribute.
	// 			a.classList.add('cdt-page-number'); // Add a class for event delegation targeting.
	// 		}

	// 		li.appendChild(a);
	// 		return li;
	// 	};

	// 	// Logic to determine which page numbers to display:
	// 	// Show boundary pages (Page 1 and totalPages) and a window of pages around the current page.

	// 	// Calculate the start and end page numbers for the central window.
	// 	let startPage = Math.max(boundaryPages + 1, currentPage - Math.floor(pagesToShow / 2));
	// 	let endPage = Math.min(totalPages - boundaryPages, currentPage + Math.ceil(pagesToShow / 2) - 1);

	// 	// Adjust the window if it's too close to the boundaries, to maintain the desired number of pagesToShow.
	// 	// If the end of the window is close to the last page, shift the window left.
	// 	if (endPage - startPage + 1 < pagesToShow) {
	// 		startPage = Math.max(boundaryPages + 1, endPage - pagesToShow + 1);
	// 	}
	// 	// If the start of the window is close to the first page, shift the window right.
	// 	if (startPage > totalPages - pagesToShow - boundaryPages) {
	// 		endPage = Math.min(totalPages - boundaryPages, startPage + pagesToShow - 1);
	// 	}
    //     // Ensure startPage doesn't go below 2 (since page 1 is handled separately)
    //      startPage = Math.max(2, startPage);
    //      // Ensure endPage doesn't go above totalPages - 1 (since totalPages is handled separately)
    //      endPage = Math.min(totalPages - 1, endPage);


	// 	// Add Page 1 link.
	// 	paginationContainer.appendChild(addPageItem(1, 1, currentPage === 1));

	// 	// Add left ellipsis if there's a gap between Page 1 (or boundary) and the start of the central window.
	// 	if (startPage > boundaryPages + 1) {
	// 		paginationContainer.appendChild(addPageItem(null, '...', false, true, true)); // Disabled ellipsis item.
	// 	}

	// 	// Add the central page links.
	// 	for (let i = startPage; i <= endPage; i++) {
	// 		paginationContainer.appendChild(addPageItem(i, i, currentPage === i));
	// 	}

	// 	// Add right ellipsis if there's a gap between the end of the central window and the last page (or boundary).
	// 	if (endPage < totalPages - boundaryPages) {
	// 		paginationContainer.appendChild(addPageItem(null, '...', false, true, true)); // Disabled ellipsis item.
	// 	}

	// 	// Add the last page link, only if totalPages is greater than 1.
	// 	if (totalPages > boundaryPages) {
	// 		// Only add last page if it's not the same as the first page (totalPages > 1)
	// 		// and if it's not already included in the central block or boundary.
	// 		if (totalPages !== 1 && endPage < totalPages) {
    //            paginationContainer.appendChild(addPageItem(totalPages, totalPages, currentPage === totalPages));
    //         }
	// 	}


	// 	// Update the state of the Previous and Next buttons.
	// 	if (prevButton) {
	// 		prevButton.classList.toggle('disabled', currentPage <= 1); // Disable if on the first page.
	// 	}
	// 	if (nextButton) {
	// 		// Disable if the current page is the last page.
	// 		nextButton.classList.toggle('disabled', currentPage >= totalPages);
	// 	}
	// }


	// renderInfo: Updates the text summary of the table's current state.
	renderInfo() {
		// Do not render if info display is disabled in the configuration.
		if (!this.config.info) return;

		// Find the info element vessel.
		const infoElement = this.element.querySelector('.cdt-info');
		if (!infoElement) {
            console.warn("CustomDataTable: Info element not found.");
            return; // If the info element vessel is not found, cease the ritual.
        }

		const totalRecords = this.state.totalRecords; // Total records before filtering.
		const filteredRecords = this.state.filteredRecords; // Total records after filtering.
		const pageSize = this.state.pageSize; // Entries per page.
		const currentPage = this.state.page; // Current page number.

		// Calculate the start and end indices for the displayed entries.
		// Start is 1-based index. If filteredRecords is 0, start should be 0.
		const start = filteredRecords > 0 ? (currentPage - 1) * pageSize + 1 : 0;
		// End is the minimum of the last index on the current page or the total filtered records count.
		const end = Math.min(start + pageSize - 1, filteredRecords);
        // If start is 0, end should also be 0.
         const displayEnd = start > 0 ? end : 0;


		let infoText = ''; // Initialize the text string.

		if (totalRecords === 0 && filteredRecords === 0) {
			// Case: No data available at all.
			infoText = 'No data available';
		} else if (filteredRecords === 0) {
			// Case: Data exists in total, but no records match the current filters/search.
			infoText = `No matching records found`;
			// Add information about the total records if filtering is active (filteredRecords < totalRecords).
			if (totalRecords !== filteredRecords) {
				infoText += ` (filtered from ${totalRecords} total entries)`;
			}
		} else {
			// Case: Data is displayed, show the range and filtered total.
			infoText = `Showing ${start} to ${displayEnd} of ${filteredRecords} entries`;
			// Add information about the total records if filtering is active.
			if (totalRecords !== filteredRecords) {
				infoText += ` (filtered from ${totalRecords} total entries)`;
			}
		}

		// Set the calculated text content to the info element.
		infoElement.textContent = infoText;
	}

	// attachEvents: Binds user interactions to system logic using event delegation.
	attachEvents() {
		// A simple debounce utility to limit the rate of function calls (e.g., during typing).
		const debounce = (func, delay) => {
			let inDebounce;
			return function(...args) {
				const context = this;
				clearTimeout(inDebounce);
				inDebounce = setTimeout(() => func.apply(context, args), delay);
			};
		};

		// Global Search: Listen for input changes on the global search box, with debouncing.
		const globalSearchInput = this.element.querySelector('.cdt-global-search');
		if (globalSearchInput && this.config.searching) { // Bind only if global search is enabled and the element exists.
			globalSearchInput.addEventListener('input', debounce((e) => {
				const newValue = e.target.value.trim();
				// Only proceed if the search value has actually changed to avoid unnecessary fetches.
				if (this.state.search !== newValue) {
					this.state.search = newValue; // Update state with the new global search value.
					this.state.page = 1; // Reset to the first page upon a new search.
					this.$fetchData(); // Summon new data based on the updated state.
				}
			}, 300)); // Debounce delay: 300 milliseconds.
		}

		// Column Search: Use event delegation on the main element for input changes within column search fields, with debouncing.
		if (this.config.searching && this.config.columnSearching) { // Bind only if column searching is enabled.
			this.element.addEventListener('input', debounce((e) => {
				// Check if the event target is a column search input.
				if (e.target.classList.contains('cdt-col-search')) {
					const col = e.target.dataset.col; // Get the column name from the data attribute.
					const newValue = e.target.value.trim();
					const currentFilter = this.state.columnFilters.get(col)?.value || '';

					// Only proceed if the filter value for this column has changed.
					if (currentFilter !== newValue) {
						// Store the new filter value in the state's columnFilters map.
						this.state.columnFilters.set(col, { value: newValue, regex: false }); // regex option is present but not currently toggled by UI.
						this.state.page = 1; // Reset to the first page for a new column filter.
						this.$fetchData(); // Summon new data.
					}
				}
			}, 300)); // Debounce delay: 300 milliseconds.
		}


		// Page Length Change: Listen for changes on the page length select element.
		const pageLengthSelect = this.element.querySelector('.cdt-page-length');
		if (pageLengthSelect && this.config.lengthChange) { // Bind only if length change is enabled.
			pageLengthSelect.addEventListener('change', (e) => {
				const newSize = parseInt(e.target.value, 10);
				// Only proceed if the page size has actually changed.
				if (this.state.pageSize !== newSize) {
					this.state.pageSize = newSize; // Update state with the new page size.
					this.state.page = 1; // Reset to the first page (standard DataTables behavior on length change).
					this.$fetchData(); // Summon new data.
				}
			});
		}

		// Sorting: Use event delegation on the table header for clicks on sortable columns.
		const thead = this.element.querySelector(`#${this.config.table_el_id} thead`);
		if (thead && this.config.ordering) { // Bind only if ordering is enabled.
			// Delegate the click event to the specific handler method.
			thead.addEventListener('click', this.handleSortClick);
		}

		// Column Visibility: Use event delegation on the column visibility dropdown menu for clicks within menu items.
		const columnVisibilityDropdown = this.element.querySelector('.cdt-column-visibility');
		if (columnVisibilityDropdown && this.config.columnVisibility) { // Bind only if column visibility control is enabled.
			// Delegate the click event to the specific handler method.
			columnVisibilityDropdown.addEventListener('click', this.handleColumnVisibilityChange);
		}

		// Pagination: Use event delegation on the pagination navigation container for clicks on page links.
		const paginationNav = this.element.querySelector('.cdt-pagination nav');
		if (paginationNav && this.config.paging) { // Bind only if paging is enabled.
			// Delegate the click event to the specific handler method.
			paginationNav.addEventListener('click', this.handlePaginationClick);
		}

		// Export CSV: Listen for clicks on the export button.
		const exportButton = this.element.querySelector('.cdt-export-csv');
		if (exportButton && this.config.exportCSV) { // Bind only if CSV export is enabled.
			exportButton.addEventListener('click', this.exportCSV); // Call the export method.
		}

		// Row Click: Use event delegation on the table body for clicks on table rows (for selection).
		const tbody = this.element.querySelector(`#${this.config.table_el_id} tbody`);
		if (tbody) { // Row click/selection is a common feature regardless of other config.
			// Delegate the click event to the specific handler method.
			tbody.addEventListener('click', this.handleRowClick);
		}

		// Keyboard Navigation (Optional and basic implementation, not typical for complex tables)
		/*
		this.element.addEventListener('keydown', (e) => {
			// Prevent handling keys if focus is inside an input field or select element.
			if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT' || e.target.tagName === 'TEXTAREA') {
				return;
			}

			// Handle left/right arrow keys for pagination navigation.
			if (e.key === 'ArrowLeft' && this.state.page > 1) {
				e.preventDefault(); // Prevent default browser scroll behavior.
				this.state.page--; // Decrease page number.
				this.$fetchData(); // Summon new data.
			}
			if (e.key === 'ArrowRight' && this.state.page * this.state.pageSize < this.state.filteredRecords) {
				e.preventDefault(); // Prevent default browser scroll behavior.
				this.state.page++; // Increase page number.
				this.$fetchData(); // Summon new data.
			}
		});
		*/

		// State Saving on Unload: If state saving is enabled, listen for the window unload event.
		if (this.config.stateSave) {
			// Bind the saveState method to the window's 'beforeunload' event.
			window.addEventListener('beforeunload', this.saveState);
		}
	}

	// handleSortClick: Handler for clicks on sortable table headers.
	handleSortClick(e) {
		// Find the closest sortable header ancestor.
		const th = e.target.closest('.cdt-sortable');
		if (!th) return; // If the click wasn't on a sortable header, do nothing.

		e.preventDefault(); // Prevent default link/button behavior if any inside TH.

		const col = th.dataset.col; // Get the column name from the data attribute.
		if (!col) return;

		const currentDir = this.state.sort.get(col); // Get the current sort direction for this column.
		let newDir;

		// Determine the new sort direction based on the current one.
		if (!currentDir) {
			newDir = 'asc'; // If not sorted, start with ascending.
		} else if (currentDir === 'asc') {
			newDir = 'desc'; // If ascending, next is descending.
		} else {
			newDir = undefined; // If descending, next is no sort for this column.
		}

		// Handle multi-column sort with Shift key press.
		if (e.shiftKey) {
			// If Shift is held: Add/update the sort criteria for this column, preserving others.
			if (newDir) {
				this.state.sort.set(col, newDir);
			} else {
				this.state.sort.delete(col); // Remove sort criteria if cycling back to 'none'.
			}
		} else {
			// If Shift is NOT held: Perform single column sort. Clear all existing sorts.
			this.state.sort.clear();
			if (newDir) {
				this.state.sort.set(col, newDir); // Set only the sort for the clicked column.
			}
		}

		this.state.page = 1; // Reset to the first page on sort change.
		this.$fetchData(); // Summon new data with the updated sort criteria.
		// Note: renderTableHeader is called after fetchData to update sort icons based on the new state.
	}

	// handleColumnVisibilityChange: Handler for clicks within the column visibility dropdown.
	handleColumnVisibilityChange(e) {
		// Prevent the dropdown menu from closing when the checkbox/link is clicked.
		e.stopPropagation();

		// Find the closest menu item link ancestor.
		const link = e.target.closest('a.dropdown-item');
		if (!link) return; // If the click wasn't on a menu item, do nothing.

		e.preventDefault(); // Prevent default link behavior (e.g., navigating to #).

		const colName = link.dataset.col; // Get the column name from the link's data attribute.
		// Find the checkbox within the clicked menu item.
		const checkbox = link.querySelector('input[type="checkbox"]');

		if (!colName || !checkbox) {
             console.warn("CustomDataTable: Column visibility link or checkbox not found.");
             return; // Ensure we have necessary elements.
        }


		// Toggle the checkbox state if the click wasn't directly on the checkbox itself.
		// This makes clicking the link text also toggle the checkbox.
		const clickedElement = e.target;
		if (clickedElement !== checkbox) {
			checkbox.checked = !checkbox.checked;
		}
		// At this point, checkbox.checked reflects the desired visibility state.

		const isVisible = checkbox.checked; // The new visibility state.

		// Update the system state if the column's visibility is actually changing.
		if (this.state.columnVisibility.get(colName) !== isVisible) {
			this.state.columnVisibility.set(colName, isVisible); // Update the state map.

			// Re-render header and body to reflect the visibility change.
			this.renderTableHeader(); // Header needs to show/hide the TH.
			this.renderTableBody(); // Body needs to show/hide the TDs.
			// No fetchData needed as visibility is a client-side rendering concern based on available data.

			// Save the system's state if state saving is enabled.
			if (this.config.stateSave) {
				this.saveState();
			}
		}
	}

	// handlePaginationClick: Handler for clicks on pagination links (page numbers, prev, next).
	handlePaginationClick(e) {
		e.preventDefault(); // Prevent default link navigation.

		// Find the closest page link ancestor.
		const link = e.target.closest('.page-link');
		// Ignore clicks not on links or on disabled links.
		if (!link || link.parentElement.classList.contains('disabled')) {
			return;
		}

		const dataPage = link.dataset.page; // Get the page action/number from the data attribute.
		let newPage = this.state.page; // Initialize the potential new page number.

		// Determine the new page based on the link's data-page attribute.
		if (dataPage === 'prev') {
			newPage = this.state.page - 1; // Go to the previous page.
		} else if (dataPage === 'next') {
			newPage = this.state.page + 1; // Go to the next page.
		} else {
			newPage = parseInt(dataPage, 10); // Go to a specific page number.
		}

		const totalPages = Math.ceil(this.state.filteredRecords / this.state.pageSize); // Calculate total pages.

		// Validate the calculated new page number.
		if (newPage >= 1 && newPage <= totalPages && newPage !== this.state.page) {
			this.state.page = newPage; // Update the state with the new page number.
			this.$fetchData(); // Summon data for the new page.
		}
	}

	// handleRowClick: Handler for clicks on table rows (used for selection).
	handleRowClick(e) {
		// Find the closest table row ancestor.
		const tr = e.target.closest('tr');
		// Ignore clicks not on rows or on the "no data" row (which spans all columns).
		if (!tr || tr.querySelector('td[colspan]')) {
			return;
		}

		// Determine the index of the clicked row among the currently displayed rows.
		const rows = Array.from(this.element.querySelectorAll(`#${this.config.table_el_id} tbody tr`));
		const rowIndex = rows.indexOf(tr);

		// Ensure the row index is valid and corresponds to an item in the current data.
		if (rowIndex === -1 || rowIndex >= this.state.data.length) {
			console.warn('CustomDataTable: Could not find corresponding data object for clicked row.');
			return;
		}

		// Get the data object for the clicked row.
		const rowData = this.state.data[rowIndex]; // This is the data object for the clicked row.

		// Toggle the selection state for this data object.
		if (this.state.selectedRows.has(rowData)) {
			// If already selected, remove it from the set.
			this.state.selectedRows.delete(rowData);
			tr.classList.remove('table-primary'); // Remove selection styling.
		} else {
			// If not selected, add it to the set.
			this.state.selectedRows.add(rowData);
			tr.classList.add('table-primary'); // Add selection styling.
		}

		// Note: For multi-select with Ctrl/Meta key, you would check e.ctrlKey || e.metaKey here
		// and potentially adjust the logic to add/remove without clearing others.
	}


	// fetchData: Summons data from the external source based on the current system state.
	async $fetchData() {
		this.state.draw++; // Increment the draw counter for this request.
		this.state.isLoading = true; // Indicate that the system is busy.
		this.showLoading(); // Manifest the loading indicator.

		// Construct the request payload, mapping internal state to server-expected parameters (DataTables format).
		const requestPayload = {
			// Synchronization counter.
			[this.config.requestParams.draw]: this.state.draw,
			// Pagination parameters: starting row index and number of rows per page.
			[this.config.requestParams.start]: (this.state.page - 1) * this.state.pageSize,
			[this.config.requestParams.length]: this.config.paging ? this.state.pageSize : -1, // Send -1 length if paging is disabled.

			// Global Search parameter.
			[this.config.requestParams.search]: {
				value: this.config.searching ? this.state.search : '', // Include global search value if enabled.
				regex: false, // Regex is not currently supported via UI toggle.
			},

			// Ordering parameters: An array of objects specifying columns and directions.
			[this.config.requestParams.order]: Array.from(this.state.sort).map(([colName, dir]) => {
				// Find the 0-based index of the column based on its definition order in the config.
				// The server typically uses this index for sorting.
				const colIndex = Object.keys(this.config.columns).indexOf(colName);
				// Ensure the column was found (index >= 0).
				if (colIndex === -1) {
					console.warn(`CustomDataTable: Column "${colName}" not found in config for sorting request.`);
					return null; // Filter out invalid entries.
				}
				return { column: /* EKN colIndex*/ colName, dir: dir };
			}).filter(item => item !== null), // Remove any null entries from invalid column names.

			// Column definitions and per-column search parameters.
			[this.config.requestParams.columns]: Object.entries(this.config.columns).map(([name, colConfig], index) => ({
				column: name, // The property name in the data object.
				//name: name, // The column name (often same as data).
				searchable: colConfig.searchable === true, // Report if the column is searchable.
				orderable: colConfig.sortable === true, // Report if the column is orderable.
				search: { // Per-column search value for this column.
					value: this.config.searching && this.config.columnSearching && colConfig.searchable ? (this.state.columnFilters.get(name)?.value || '') : '',
					regex: this.config.searching && this.config.columnSearching && colConfig.searchable ? (this.state.columnFilters.get(name)?.regex || false) : false,
				},
			})),

			// Include any custom parameters from the config.
			...(this.config.customParams || {}), // Spread custom params here
		};

		try {
			// Execute the asynchronous fetch ritual.
			const response = await fetch(this.config.endpoint, {
				method: this.config.method, // Use the configured HTTP method.
				headers: { 'Content-Type': 'application/json' }, // Specify the request body format.
				body: JSON.stringify(requestPayload), // Send the constructed payload as JSON.
				// credentials: 'include' might be needed for cookies/sessions.
			});

			// The ritual is complete, hide the loading indicator.
			this.state.isLoading = false;
			this.hideLoading();

			// Check the response status for HTTP errors.
			if (!response.ok) {
				let errorDetail = `HTTP error! status: ${response.status}`;
				try {
					const errorBody = await response.json();
					// Attempt to include server-provided error details if available.
					errorDetail += ` - ${errorBody.error || JSON.stringify(errorBody)}`;
				} catch (e) {
					// Ignore if the response body isn't JSON.
				}
				// Cast an error to be caught in the catch block.
				throw new Error(errorDetail);
			}

			// Parse the received truth (JSON data).
			const data = await response.json();

			// Validate the draw counter to ensure the response is not outdated.
			if (data[this.config.responseParams.draw] !== this.state.draw) {
				console.warn('CustomDataTable: Received outdated data for draw', data[this.config.responseParams.draw], '. Current draw is', this.state.draw, '. Ignoring.');
				return; // Discard outdated data.
			}

			// Validate the basic structure of the received data using configured response parameters.
			const recordsTotal = data[this.config.responseParams.recordsTotal];
            const recordsFiltered = data[this.config.responseParams.recordsFiltered];
            const responseData = data[this.config.responseParams.data];

			if (recordsTotal === undefined || recordsFiltered === undefined || !Array.isArray(responseData)) {
				// Cast an error if the data structure is invalid.
				throw new Error(`CustomDataTable: Invalid data structure received from server. Expected properties: "${this.config.responseParams.recordsTotal}", "${this.config.responseParams.recordsFiltered}", "${this.config.responseParams.data}".`);
			}

			// Update the system's state with the received truth.
			this.state.totalRecords = recordsTotal;
			this.state.filteredRecords = recordsFiltered;
			this.state.data = responseData; // Store the data for the current page.

			// Note on selectedRows: Selection state is lost across fetches with this implementation.
			// For persistence, store unique IDs from rowData in this.state.selectedRows set.

			// Re-render the visible interface based on the new state.
			this.renderTableHeader(); // Update sort icons etc.
			this.renderTableBody(); // Populate the table with data.
			this.renderPagination(); // Update pagination controls.
			this.renderInfo(); // Update the info summary.

			// Invoke the success callback.
			this.config.onDataLoad(data);

			// Save the system's state if state saving is enabled.
			if (this.config.stateSave) {
				this.saveState();
			}

		} catch (err) {
			// Handle errors during the fetch ritual.
			this.state.isLoading = false;
			this.hideLoading(); // Ensure loading indicator is hidden even on error.
			console.error('CustomDataTable Fetch error:', err); // Log the error.

			// Reset state related to data display.
			this.state.data = []; // Clear data on error.
			this.state.totalRecords = 0;
			this.state.filteredRecords = 0;
			// Decide whether to reset page to 1 on error or keep it. Keeping it might be confusing if no data renders.
			this.state.page = 1;

			// Re-render the interface to show the error state.
			this.renderTableBody(this.config.errorMessage); // Display the configured error message.
			this.renderPagination(); // Update pagination (will show 0 pages).
			this.renderInfo(); // Update info (will show 0 entries).

			// Invoke the error callback.
			this.config.onError(err);
		}
	}

	// showLoading: Makes the loading indicator visible.
	showLoading() {
		return; //ekn

		const loadingOverlay = this.element.querySelector('.cdt-loading-overlay');
		if (loadingOverlay) {
			loadingOverlay.classList.remove('d-none'); // Remove the hidden class.
		}
		// Optional: Disable controls during loading to prevent further interactions.
		// this.element.querySelectorAll('.cdt-controls input, .cdt-controls select, .cdt-controls button').forEach(el => el.disabled = true);
	}

	// hideLoading: Makes the loading indicator hidden.
	hideLoading() {
		return; //ekn

		const loadingOverlay = this.element.querySelector('.cdt-loading-overlay');
		if (loadingOverlay) {
			loadingOverlay.classList.add('d-none'); // Add the hidden class.
		}
		// Optional: Re-enable controls after loading.
		// this.element.querySelectorAll('.cdt-controls input, .cdt-controls select, .cdt-controls button').forEach(el => el.disabled = false);
	}


	// exportCSV: Exports the *currently displayed* data to a CSV file.
	// Note: For large datasets, a server-side export endpoint is recommended to export *all* filtered data.
	exportCSV() {
		// Ensure CSV export is enabled.
		if (!this.config.exportCSV) {
			console.warn('CustomDataTable: CSV export is disabled in configuration.');
			return;
		}

		// Get the names of visible columns.
		const visibleColumns = Object.entries(this.config.columns)
			.filter(([name]) => this.state.columnVisibility.get(name));

		// Create the CSV header row.
		const headers = visibleColumns.map(([name, col]) =>
			// Escape double quotes by doubling them, and enclose the whole header in double quotes.
			`"${(col.label || name).replace(/"/g, '""')}"`
		).join(',');

		// Create the CSV data rows.
		const rows = this.state.data.map(rowData =>
			visibleColumns.map(([name, col]) => {
				const value = rowData[name]; // Get the raw value.
				// Apply renderer if it exists, otherwise use raw value.
				const renderedValue = (col.renderer ? col.renderer(value, rowData) : value) || '';
				// Escape double quotes and enclose the cell value in double quotes.
				return `"${String(renderedValue).replace(/"/g, '""')}"`;
			}).join(',') // Join cell values with commas for each row.
		);

		// Combine header and rows.
		const csv = [headers, ...rows].join('\n');

		// Create a Blob and a temporary URL for the CSV data.
		const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
		const url = URL.createObjectURL(blob);

		// Create and click a temporary link element to trigger download.
		const a = document.createElement('a');
		a.href = url;
		a.download = 'export.csv'; // Set the download filename.
		// Append to body and click to ensure download works across browsers, especially Firefox.
		document.body.appendChild(a);
		a.click();

		// Clean up the temporary link and URL.
		document.body.removeChild(a);
		URL.revokeObjectURL(url);
	}

	// saveState: Saves the table's current state to localStorage.
	saveState() {
		// Ensure state saving is enabled.
		if (!this.config.stateSave) return;

		// Define the state parts to save.
		const stateToSave = {
			page: this.state.page,
			pageSize: this.state.pageSize,
			search: this.state.search,
			// Convert Maps to Arrays for JSON serialization.
			columnFilters: Array.from(this.state.columnFilters.entries()),
			sort: Array.from(this.state.sort.entries()),
			columnVisibility: Array.from(this.state.columnVisibility.entries()),
			// selectedRows is NOT saved as it stores data object references (non-persistent across fetches).
		};

		try {
			// Serialize and store the state in localStorage using a unique key.
			localStorage.setItem(`cdt-state-${this.config.table_el_id}`, JSON.stringify(stateToSave));
			// console.log('CustomDataTable: State saved', stateToSave); // Optional logging.
		} catch (e) {
			console.error('CustomDataTable: Failed to save state to localStorage', e); // Log errors.
		}
	}

	// loadState: Loads the table's state from localStorage and applies it.
	loadState() {
		// Ensure state saving is enabled.
		if (!this.config.stateSave) return;

		try {
			// Retrieve the saved state string.
			const savedState = localStorage.getItem(`cdt-state-${this.config.table_el_id}`);
			if (savedState) {
				// Parse the JSON string.
				const state = JSON.parse(savedState);
				// console.log('CustomDataTable: State loaded', state); // Optional logging.

				// Apply loaded state, validating values against current config.

				// Page size: Apply if valid option.
				if (state.pageSize !== undefined && this.config.pageLengthOptions.includes(state.pageSize)) {
					this.state.pageSize = state.pageSize;
				}
				// Page number: Restoring page directly can be tricky with server-side if filtered records change.
				// Initial fetchData will use page 1 anyway. You might restore page AFTER the first fetch if needed,
				// but it adds complexity (e.g., handle saved page > new total pages).
				// For simplicity, we rely on initial page=1 from state definition + fetch.
				// this.state.page = state.page || 1;

				// Global search: Apply if exists in saved state.
				if (state.search !== undefined) {
					this.state.search = state.search;
				}

				// Column filters: Apply if valid structure and columns exist in config.
				if (Array.isArray(state.columnFilters)) {
					this.state.columnFilters = new Map(state.columnFilters.filter(([colName]) => this.config.columns[colName]));
				}

				// Sort: Apply if valid structure and columns exist in config.
				if (Array.isArray(state.sort)) {
					this.state.sort = new Map(state.sort.filter(([colName]) => this.config.columns[colName]));
				} else if (this.config.defaultSort.length > 0) {
                    // If no saved sort or invalid, apply default sort from config.
                    this.state.sort.clear();
                    this.config.defaultSort.forEach(s => this.state.sort.set(s.column, s.dir));
                }


				// Column visibility: Apply, merging saved state with current config defaults.
				if (Array.isArray(state.columnVisibility)) {
					const savedVisibility = new Map(state.columnVisibility);
					Object.keys(this.config.columns).forEach(name => {
						// Use saved state if available, else use config default, else default to true.
						const isVisible = savedVisibility.has(name) ? savedVisibility.get(name) :
										  (this.config.columns[name]?.visible !== undefined ? this.config.columns[name].visible : true);
						this.state.columnVisibility.set(name, isVisible);
					});
				}

				// After loading state, update input fields in the DOM to reflect loaded values
				// This needs to happen AFTER renderStructure has created the inputs.
				// Use requestAnimationFrame to ensure the DOM update queue is processed first.
				requestAnimationFrame(() => {
					const globalSearchInput = this.element.querySelector('.cdt-global-search');
					if (globalSearchInput && this.config.searching) {
						globalSearchInput.value = this.state.search;
					}
					if (this.config.searching && this.config.columnSearching) {
						this.state.columnFilters.forEach((filter, colName) => {
							const colSearchInput = this.element.querySelector(`.cdt-col-search[data-col="${colName}"]`);
							if (colSearchInput) {
								colSearchInput.value = filter.value;
							}
						});
					}
					// Page length select value is set in renderStructure based on this.state.pageSize.
					// Column visibility checkboxes are set in renderStructure based on this.state.columnVisibility.
				});

			} else if (this.config.defaultSort.length > 0) {
                // If no saved state found, but default sort is configured, apply it.
                this.state.sort.clear();
                this.config.defaultSort.forEach(s => this.state.sort.set(s.column, s.dir));
            }

		} catch (e) {
			console.error('CustomDataTable: Failed to load state from localStorage', e); // Log errors.
			// Clear potentially corrupt state to prevent future loading issues.
			localStorage.removeItem(`cdt-state-${this.config.table_el_id}`);
		}
	}


	// --- Public API Methods ---

	/**
	 * Returns an array of data objects for the currently selected rows on the *current* page.
	 * Note: Selection state is not persistent across fetches with the current implementation.
	 * @returns {object[]} An array of data objects.
	 */
	getSelectedData() {
		return Array.from(this.state.selectedRows);
	}

	/**
	 * Triggers a data fetch based on the table's current state (page, filters, sort) without resetting pagination.
	 * Equivalent to DataTables `.draw(false)`.
	 */
	redraw() {
		this.$fetchData();
	}

	/**
	 * Programmatically sets the global search value and updates the table.
	 * Resets pagination to the first page.
	 * @param {string} value - The search term to apply.
	 */
	search(value) {
		if (this.config.searching) {
			const globalSearchInput = this.element.querySelector('.cdt-global-search');
			if (globalSearchInput) {
				globalSearchInput.value = value; // Update the input field visually.
			}
			this.state.search = value; // Update the state.
			this.state.page = 1; // Reset page to 1.
			this.$fetchData(); // Trigger data fetch.
		} else {
			console.warn('CustomDataTable: Global searching is disabled in config.');
		}
	}

	/**
	 * Programmatically sets a specific column's search value and updates the table.
	 * Resets pagination to the first page.
	 * @param {string} colName - The name of the column to filter.
	 * @param {string} value - The search term to apply to this column.
	 */
	columnSearch(colName, value) {
		// Check if column searching is enabled and the column exists and is searchable.
		if (this.config.searching && this.config.columnSearching && this.config.columns[colName]?.searchable) {
			const colSearchInput = this.element.querySelector(`.cdt-col-search[data-col="${colName}"]`);
			if (colSearchInput) {
				colSearchInput.value = value; // Update the input field visually.
			}
			// Update the column filter state. Assuming no regex via API for simplicity here.
			this.state.columnFilters.set(colName, { value: value, regex: false });
			this.state.page = 1; // Reset page to 1.
			this.$fetchData(); // Trigger data fetch.
		} else {
			console.warn(`CustomDataTable: Column searching is disabled or column "${colName}" is not searchable.`);
		}
	}

	/**
	 * Programmatically navigates to a specific page.
	 * @param {number} pageNumber - The 1-based page number to navigate to.
	 */
	page(pageNumber) {
		const totalPages = Math.ceil(this.state.filteredRecords / this.state.pageSize);
		// Validate the requested page number.
		if (pageNumber >= 1 && pageNumber <= totalPages && pageNumber !== this.state.page) {
			this.state.page = pageNumber; // Update the state.
			this.$fetchData(); // Trigger data fetch.
		} else {
			console.warn(`CustomDataTable: Invalid page number: ${pageNumber}. Total pages: ${totalPages}.`);
		}
	}

	/**
	 * Programmatically sets the number of entries displayed per page.
	 * Resets pagination to the first page.
	 * @param {number} length - The desired number of entries per page. Must be in pageLengthOptions.
	 */
	pageLength(length) {
		// Validate the requested page length against allowed options.
		if (this.config.lengthChange && this.config.pageLengthOptions.includes(length)) {
			const pageLengthSelect = this.element.querySelector('.cdt-page-length');
			if (pageLengthSelect) {
				pageLengthSelect.value = length; // Update the select element visually.
			}
			this.state.pageSize = length; // Update the state.
			this.state.page = 1; // Reset page to 1 (DataTables standard).
			this.$fetchData(); // Trigger data fetch.
		} else {
			console.warn(`CustomDataTable: Invalid page length: ${length}. Must be one of [${this.config.pageLengthOptions.join(', ')}]. Length change feature must also be enabled.`);
		}
	}

	/**
	 * Programmatically sets the table's sorting order.
	 * Resets pagination to the first page.
	 * @param {Array<{column: string, dir: 'asc'|'desc'}>} sortArray - An array of sort criteria.
	 */
	order(sortArray) {
		if (this.config.ordering) {
			const newSort = new Map();
			let isValidFormat = true;
			// Validate the sort array format.
			if (!Array.isArray(sortArray)) {
                 console.warn('CustomDataTable: Invalid sort format. Expected an array.');
                 isValidFormat = false;
             } else {
                sortArray.forEach(s => {
                    // Check if column exists, is sortable, and direction is valid.
                    if (s && typeof s.column === 'string' && this.config.columns[s.column]?.sortable && (s.dir === 'asc' || s.dir === 'desc')) {
                        newSort.set(s.column, s.dir);
                    } else {
                        console.warn(`CustomDataTable: Invalid sort order ignored: { column: "${s?.column}", dir: "${s?.dir}" }. Column must exist, be sortable, and direction must be 'asc' or 'desc'.`);
                        // Decide if you want to invalidate the whole array or just skip invalid entries. Skipping seems more robust.
                    }
                });
             }

			// Only apply the sort if the format was valid and at least one valid sort criteria was provided/found.
			if (isValidFormat && (newSort.size > 0 || sortArray.length === 0)) { // Allow clearing sort with empty array
				this.state.sort = newSort; // Update the state.
				this.state.page = 1; // Reset page to 1.
				this.$fetchData(); // Trigger data fetch.
			}
		} else {
			console.warn('CustomDataTable: Ordering is disabled in config.');
		}
	}

	/**
	 * Provides a chainable API to access column-specific methods.
	 * @param {string} colName - The name of the column.
	 * @returns {object} An object with column-specific methods (e.g., .visible()).
	 */
	column(colName) {
		// Check if the column exists in the configuration.
		if (!this.config.columns[colName]) {
			console.warn(`CustomDataTable: Column "${colName}" not found.`);
			// Return a stub object with methods that warn but do nothing, allowing chaining without error.
			const stubApi = {
				visible: (show) => { console.warn(`CustomDataTable: Cannot call method 'visible' on non-existent column "${colName}".`); return stubApi; },
				// Add stubs for other potential column methods here.
                // search: (value) => { console.warn(...); return stubApi; }
			};
			return stubApi;
		}

		// Return an object containing methods specific to the column. This object is chainable.
		const columnApi = {
			/**
			 * Sets or gets the visibility of the column.
			 * @param {boolean} [show] - If provided, sets the visibility (true for show, false for hide).
			 * @returns {boolean|object} The current visibility if no argument is given, otherwise the columnApi object for chaining.
			 */
			visible: (show) => {
				// If 'show' is undefined, act as a getter.
				if (show === undefined) {
					return this.state.columnVisibility.get(colName) || false; // Return current visibility state.
				} else {
					// If 'show' is defined, act as a setter.
					// Ensure column visibility control is enabled.
					if (this.config.columnVisibility) {
						const isVisible = !!show; // Ensure boolean value.
						// Only proceed if the visibility state is actually changing.
						if (this.state.columnVisibility.get(colName) !== isVisible) {
							this.state.columnVisibility.set(colName, isVisible); // Update state.
							// Find and update the corresponding checkbox in the dropdown.
							const checkbox = this.element.querySelector(`.cdt-column-visibility input[data-col="${colName}"]`);
							if (checkbox) {
								checkbox.checked = isVisible;
							}
							// Re-render header (to update TH visibility) and body (to update TD visibility).
							this.renderTableHeader();
							this.renderTableBody();
							// Save state if enabled.
							if (this.config.stateSave) {
								this.saveState();
							}
						}
					} else {
						console.warn('CustomDataTable: Column visibility control is disabled in config.');
					}
					return columnApi; // Return the columnApi object for chaining.
				}
			},

			// Add other column-specific API methods here if needed (e.g., .search(), .orderable(), .title()).
			// search: (value) => { this.columnSearch(colName, value); return columnApi; },
		};

		return columnApi; // Return the columnApi object, enabling chaining like table.column('name').visible(true).
	}

	// Note: More complex features like Editor, FixedHeader, Responsive, Scroller etc., would require dedicated
	// extensions or significant additions beyond this core structure and API.
}

// class CustomDataTableOld extends Class {
// 	/********
// 	 // Usage
// 	const table = new CustomDataTable('#myTable', {
// 		query: 'select * from employees',
// 		endpoint: 'http://localhost:3000/data',
// 		pageSize: 10,
// 		pageLengthOptions: [10, 25, 50, 100],
// 		columns: {
// 		first_name: { label: 'First Name', searchable: true, sortable: true },
// 		last_name: { label: 'Last Name', searchable: true, sortable: true },
// 		position: { label: 'Position', searchable: true, sortable: true },
// 		office: { label: 'Office', searchable: true, sortable: true },
// 		start_date: {
// 			label: 'Start Date',
// 			searchable: false,
// 			sortable: true,
// 			renderer: (val) => val ? new Date(val).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' }) : '',
// 		},
// 		salary: {
// 			label: 'Salary',
// 			searchable: false,
// 			sortable: true,
// 			renderer: (val) => val ? `$${Number(val).toLocaleString()}` : '',
// 		},
// 		},
// 	});
// 	*********************/


// 	constructor(selector, config) {
// 		super(config);

// 		this.element = document.querySelector(selector);
// 		if (!this.element) throw new Error('Element not found');

// 		this.config = {
// 			table_el_id: config.table_el_id,
// 			columns: config.columns || {},
// 			endpoint: config.endpoint || '/data',
// 			pageSize: config.pageSize || 10,
// 			pageLengthOptions: config.pageLengthOptions || [10, 25, 50, 100],
// 			tableName: config.tableName || 'employees',
// 			whereAll: config.whereAll || null,
// 			whereResult: config.whereResult || null,
// 			defaultSort: config.defaultSort || [], // [{ column: 'first_name', dir: 'asc' }]
// 			emptyMessage: config.emptyMessage || 'No data available',
// 		};

// 		this.state = {
// 			page: 1,
// 			pageSize: this.config.pageSize,
// 			search: '',
// 			columnFilters: new Map(),
// 			sort: new Map(this.config.defaultSort.map(s => [s.column, s.dir])),
// 			totalRecords: 0,
// 			filteredRecords: 0,
// 			data: [],
// 			draw: 0,
// 			columnVisibility: new Map(Object.keys(this.config.columns).map(c => [c, true])),
// 			selectedRows: new Set(),
// 		};

// 		this.init();
// 	}

// 	init() {
// 		this.renderStructure();
// 		this.attachEvents();
// 		this.$fetchData();
// 	}

// 	renderStructure() {
// 		this.element.innerHTML = `
// 		<div class="cdt-controls mb-3">
// 		  <div class="row g-2">
// 			<div class="col-md-4">
// 			  <input type="text" class="cdt-global-search form-control" placeholder="Search all...">
// 			</div>
// 			<div class="col-md-4">
// 			  <select class="cdt-page-length form-select">
// 				${this.config.pageLengthOptions.map(n => `<option value="${n}">${n}</option>`).join('')}
// 			  </select>
// 			</div>
// 			<div class="col-md-4">
// 			  <div class="dropdown">
// 				<button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
// 				  Columns
// 				</button>
// 				<ul class="dropdown-menu cdt-column-visibility">
// 				  ${Object.entries(this.config.columns).map(([name, col]) => `
// 					<li><a class="dropdown-item" href="#" data-col="${name}">
// 					  <input type="checkbox" ${this.state.columnVisibility.get(name) ? 'checked' : ''}> ${col.label || name}
// 					</a></li>
// 				  `).join('')}
// 				</ul>
// 			  </div>
// 			</div>
// 		  </div>
// 		  <div class="cdt-pagination mt-2 d-flex justify-content-between">
// 			<div>
// 			  <button class="btn btn-primary cdt-export-csv">Export CSV</button>
// 			</div>
// 			<nav>
// 			  <ul class="pagination">
// 				<li class="page-item"><a class="page-link cdt-prev" href="#">Previous</a></li>
// 				<li class="page-item cdt-page-numbers"></li>
// 				<li class="page-item"><a class="page-link cdt-next" href="#">Next</a></li>
// 			  </ul>
// 			</nav>
// 		  </div>
// 		</div>
// 		<div class="cdt-table-container">
// 		  <table id="${this.config.table_el_id}" class="cdt-table table table-bordered table-hover mb-0">
// 			<thead><tr></tr></thead>
// 			<tbody></tbody>
// 		  </table>
// 		</div>
// 	  `;

// 		this.element.querySelector('.cdt-page-length').value = this.state.pageSize;
// 		this.renderTableHeader();
// 	}

// 	renderTableHeader() {
// 		const thead = this.element.querySelector('thead tr');
// 		thead.innerHTML = '';
// 		Object.entries(this.config.columns).forEach(([name, col]) => {
// 			if (!this.state.columnVisibility.get(name)) return;
// 			const th = document.createElement('th');
// 			th.className = 'cdt-fixed-header';
// 			th.innerHTML = `
// 		  <div class="d-flex align-items-center">
// 			<!-- ${col.label || name} -->
// 			${col.sortable ? `<span class="cdt-sort" data-col="${name}" data-dir="${this.state.sort.get(name) || ''}"></span>` : ''}
// 			${col.searchable ? `
// 			  <input type="text" class="cdt-col-search form-control form-control-sm mt-1" data-col="${name}" placeholder="${col.label || name}">
// 			<!--
// 			  <div class="form-check mt-1">
// 				<input type="checkbox" class="form-check-input cdt-regex-toggle" data-col="${name}">
// 				<label class="form-check-label">Regex</label>
// 			  </div>
// 			-->
// 			` : ''}
// 			<button class="btn btn-sm btn-link cdt-responsive-toggle d-none" data-col="${name}">+</button>
// 		  </div>
// 		`;
// 			thead.appendChild(th);
// 		});
// 	}

// 	attachEvents() {
// 		this.element.querySelector('.cdt-global-search').addEventListener('input', (e) => {
// 			this.state.search = e.target.value;
// 			this.state.page = 1;
// 			this.$fetchData();
// 		});

// 		this.element.addEventListener('input', (e) => {
// 			if (e.target.classList.contains('cdt-col-search')) {
// 				const col = e.target.dataset.col;
// 				this.state.columnFilters.set(col, e.target.value);
// 				this.state.page = 1;
// 				this.$fetchData();
// 			}
// 		});

// 		this.element.addEventListener('change', (e) => {
// 			if (e.target.classList.contains('cdt-regex-toggle')) {
// 				const col = e.target.dataset.col;
// 				this.state.columnFilters.set(col, {
// 					value: this.state.columnFilters.get(col)?.value || '',
// 					regex: e.target.checked,
// 				});
// 				this.state.page = 1;
// 				this.$fetchData();
// 			}
// 		});

// 		this.element.addEventListener('click', (e) => {
// 			if (e.target.classList.contains('cdt-sort')) {
// 				const col = e.target.dataset.col;
// 				const currentDir = this.state.sort.get(col);
// 				const newDir = currentDir === 'asc' ? 'desc' : 'asc';
// 				this.state.sort.set(col, newDir);
// 				this.$fetchData();
// 			}
// 			if (e.target.closest('.cdt-column-visibility a')) {
// 				e.preventDefault();
// 				const col = e.target.closest('a').dataset.col;
// 				const checkbox = e.target.querySelector('input') || e.target;
// 				this.state.columnVisibility.set(col, checkbox.checked);
// 				this.renderTableHeader();
// 				this.renderTable();
// 			}
// 			if (e.target.classList.contains('cdt-prev')) {
// 				e.preventDefault();
// 				if (this.state.page > 1) {
// 					this.state.page--;
// 					this.$fetchData();
// 				}
// 			}
// 			if (e.target.classList.contains('cdt-next')) {
// 				e.preventDefault();
// 				if (this.state.page * this.state.pageSize < this.state.filteredRecords) {
// 					this.state.page++;
// 					this.$fetchData();
// 				}
// 			}
// 			if (e.target.classList.contains('cdt-page-number')) {
// 				e.preventDefault();
// 				this.state.page = parseInt(e.target.dataset.page);
// 				this.$fetchData();
// 			}
// 			if (e.target.classList.contains('cdt-export-csv')) {
// 				this.exportCSV();
// 			}
// 			if (e.target.closest('tr')) {
// 				const row = e.target.closest('tr');
// 				const index = Array.from(this.element.querySelectorAll('tbody tr')).indexOf(row);
// 				if (this.state.selectedRows.has(index)) {
// 					this.state.selectedRows.delete(index);
// 				} else {
// 					this.state.selectedRows.add(index);
// 				}
// 				this.renderTable();
// 			}
// 			if (e.target.classList.contains('cdt-responsive-toggle')) {
// 				const col = e.target.dataset.col;
// 				const tr = e.target.closest('tr');
// 				const hiddenCell = tr.querySelector(`.cdt-responsive-hidden[data-col="${col}"]`);
// 				if (hiddenCell) hiddenCell.classList.toggle('d-block');
// 			}
// 		});

// 		this.element.querySelector('.cdt-page-length').addEventListener('change', (e) => {
// 			this.state.pageSize = parseInt(e.target.value);
// 			this.state.page = 1;
// 			this.$fetchData();
// 		});

// 		// Keyboard navigation
// 		this.element.addEventListener('keydown', (e) => {
// 			if (e.target.classList.contains('cdt-global-search') || e.target.classList.contains('cdt-col-search')) return;
// 			if (e.key === 'ArrowLeft' && this.state.page > 1) {
// 				this.state.page--;
// 				this.$fetchData();
// 			}
// 			if (e.key === 'ArrowRight' && this.state.page * this.state.pageSize < this.state.filteredRecords) {
// 				this.state.page++;
// 				this.$fetchData();
// 			}
// 		});
// 	}

// 	async $fetchData() {
// 		this.state.draw++;
// 		const request = {
// 			draw: this.state.draw,
// 			start: (this.state.page - 1) * this.state.pageSize,
// 			length: this.state.pageSize,
// 			order: Array.from(this.state.sort).map(([col, dir]) => ({ column: col, dir })),
// 			column_searches: Array.from(this.state.columnFilters).map(([col, filter]) => ({
// 				column: col,
// 				value: typeof filter === 'string' ? filter : filter.value,
// 				regex: typeof filter === 'string' ? false : filter.regex,
// 			})),
// 		};

// 		try {
// 			const response = await fetch(this.config.endpoint, {
// 				method: 'POST',
// 				headers: { 'Content-Type': 'application/json' },
// 				body: JSON.stringify(request),
// 			});
// 			if (!response.ok) {
// 				const error = await response.json();
// 				throw new Error(error.error || 'Server error');
// 			}
// 			const data = await response.json();

// 			this.state.totalRecords = data.recordsTotal;
// 			this.state.filteredRecords = data.recordsFiltered;
// 			this.state.data = data.data || [];
// 			this.renderTable();
// 		}
// 		catch (err) {
// 			console.error('Fetch error:', err);
// 			this.state.data = [];
// 			this.renderTable(this.config.emptyMessage);
// 		}
// 	}

// 	renderTable(errorMsg = '') {
// 		const tbody = this.element.querySelector(`#${this.config.table_el_id} tbody`);
// 		tbody.innerHTML = '';

// 		if (errorMsg) {
// 			tbody.innerHTML = `<tr><td colspan="${Object.keys(this.config.columns).length}">${errorMsg}</td></tr>`;
// 		} else {
// 			this.state.data.forEach((row, index) => {
// 				//debugger;

// 				const tr = document.createElement('tr');
// 				tr.className = this.state.selectedRows.has(index) ? 'table-primary' : '';
// 				Object.entries(this.config.columns).forEach(([name, col], colIndex) => {
// 					//debugger;
// 					if (!this.state.columnVisibility.get(name)) return;
// 					const td = document.createElement('td');
// 					const value = row[name];
// 					td.textContent = col.renderer ? col.renderer(value, row) : value;
// 					td.className = colIndex > 2 ? 'cdt-responsive-hidden d-none' : ''; // Hide columns > 2 on small screens
// 					td.dataset.col = name;
// 					tr.appendChild(td);
// 				});
// 				tbody.appendChild(tr);
// 			});
// 		}

// 		const pageInfo = this.element.querySelector('.cdt-page-numbers');
// 		const totalPages = Math.ceil(this.state.filteredRecords / this.state.pageSize);
// 		/*BUGGY
// 		pageInfo.innerHTML = Array.from({ length: totalPages }, (_, i) => `
// 		<li class="page-item ${this.state.page === i + 1 ? 'active' : ''}">
// 		  <a class="page-link cdt-page-number" href="#" data-page="${i + 1}">${i + 1}</a>
// 		</li>
// 	  `).join('');
// 	  */
// 	}

// 	exportCSV() {
// 		const headers = Object.entries(this.config.columns)
// 			.filter(([name]) => this.state.columnVisibility.get(name))
// 			.map(([name, col]) => col.label || name);
// 		const rows = this.state.data.map(row =>
// 			Object.entries(this.config.columns)
// 				.filter(([name]) => this.state.columnVisibility.get(name))
// 				.map(([name, col]) => {
// 					const value = row[name];
// 					return `"${(col.renderer ? col.renderer(value, row) : value) || ''}"`;
// 				})
// 				.join(',')
// 		);
// 		const csv = [headers.join(','), ...rows].join('\n');
// 		const blob = new Blob([csv], { type: 'text/csv' });
// 		const url = URL.createObjectURL(blob);
// 		const a = document.createElement('a');
// 		a.href = url;
// 		a.download = 'data.csv';
// 		a.click();
// 		URL.revokeObjectURL(url);
// 	}
// }


// ////////////////////////////////////////////////////////////////////////////////////////////////// //
// SOFTWARE ARCHITECTURE //////////////////////////////////////////////////////////////////////////// //

// //////////////////////////////////////////////////////////////////////////////////////////////////////// //
// Observer Pattern

class Observable extends Service {
	constructor(config) {
		super(config);
		//this.observers = [];
		this.observers = {};
	}
	async uponReady() {
		await super.uponReady();

	}
	publish(/*sender,*/ msg) {
		if (typeof this.observers[msg] === 'undefined')
			this.observers[msg] = [];
		return this;
	}

	unpublish(/*sender,*/ msg) {
		if (typeof this.observers[msg] !== 'undefined')
			delete this.observers[msg];
		return this;
	}

	subscribe(msg, observer) {
		//this.observers.push(observer);
		if (typeof this.observers[msg] === 'undefined')
			this.observers[msg] = [];

		this.observers[msg].push(observer);
		//facade.log('Observer attached')
		return this;
	}

	unsubscribe(msg, observer) {
		for (var i in this.observers[msg])
			if (this.observers[i] === observer)
				this.observers.splice(i, 1)
		return this;
	}

	async notify(/*sender,*/ msg) {
		//facade.log('Subject Notify')
		//this.publish (msg); //safety
		//debugger;
		for (var i in this.observers[msg]) {
			await this.observers[msg][i](msg);
		}
		return this;
	}
}
// Observer Pattern
// //////////////////////////////////////////////////////////////////////////////////////////////////////// //

// SOFTWARE ARCHITECTURE //////////////////////////////////////////////////////////////////////////// //
// ////////////////////////////////////////////////////////////////////////////////////////////////// //



// ////////////////////////////////////////////////////////////////////////////////////////////////// //
// TDD

class Tdd extends Class {
	constructor(args) {
		super(args);
		this.app = app;
		this.page = page;

		//this.integrationTests = [];
		this.unitTests = [];
		this.testResults = []; // Store results of each test case
		this.testStatus = {
			PASS: 'pass',
			FAIL: 'fail',
		}
	}

	async uponReady() {
		await super.uponReady();

	}

	// -- Assertions --
	assertCase(description, cond, violationMessage = "Assert Failure") {
		if (cond) {
			this.logPass(description + ": " + cond.toString());
		} else {
			this.logFail(description + ": " + violationMessage);
		}
	}

	//-- Test execution and reporting --
	logPass(message) {
		this.testResults.push({ status: this.testStatus.PASS, message: message });
	}
	logFail(message) {
		this.testResults.push({ status: this.testStatus.FAIL, message: message });
	}

	init() {
		this.unitTests = [];
		//this.integrationTests = [];
		this.testResults = []; // Store results of each test case

	}

	include(method) {
		this.unitTests.push(method);
	}

	async run() {
		console.log("Running Included Tests");

		for (let test of this.unitTests) {
			await this.test(test);
		}



		return this.report();
	}

	async test(testMethod) {
		//debugger;
		let result = null;
		console.log("Test: ", testMethod.name, " - BEGIN");
		if (this.isAsync(testMethod)) {
			result = await testMethod.call(this);
		}
		else {
			result = testMethod.call(this);
		}
		console.log("Test: ", testMethod.name, " - RESULT: ", result);
		console.log("Test: ", testMethod.name, " - END");

	}

	report(isMute = false) {
		let totalCount = this.testResults.length;
		let passCount = this.testResults.filter(result => result.status === this.testStatus.PASS).length;
		let failCount = totalCount - passCount;
		let passPercentage = totalCount > 0 ? (passCount / totalCount * 100).toFixed(2) : 0;
		let failPercentage = totalCount > 0 ? (failCount / totalCount * 100).toFixed(2) : 0;

		if (!isMute) {
			this.testResults.forEach((result, index) => {
				if (result.status === this.testStatus.PASS) {
					console.log(`[Test ${index + 1}] \x1b[32mPass:\x1b[0m ${result.message}`);
				} else {
					console.log(`[Test ${index + 1}] \x1b[31mFail:\x1b[0m ${result.message}`);
				}
			});



			console.log(`\nTest Summary:`);
			console.log(`  Total: ${totalCount}`);
			console.log(`  Pass: ${passCount} (${passPercentage}%)`);
			console.log(`  Fail: ${failCount} (${failPercentage}%)`);

		}
		return this.testResults;
	}


}


// /TDD
// ////////////////////////////////////////////////////////////////////////////////////////////////// //

// ////////////////////////////////////////////////////////////////////////////////////////////////// //
// SDD Simulator Driven Development

class Sdd extends Class {
	constructor() {
		super();

	}


	async uponReady() {
		await super.uponReady();

	}

	/**
	breakpoint
	**/
	bp() {
		//debugger;
	}


	/**
	simulate
	**/
	exec(method, self = this, ...args) {
		let ret = null;
		if (method)
			ret = method.call(self, ...args);
		return ret || 0;
	}

	/**
	simulate before breakpoint
	**/
	execBeforeBp(method, self = this, ...args) {
		let ret = null;
		if (method)
			ret = method.call(self, ...args);
		//debugger;
		return ret || 0;
	}

	/**
	simulate after breakpoint
	**/
	execAfterBp(method, self = this, ...args) {
		//debugger;
		return method.call(self, ...args) || 0;
	}

	/**
	simulate
	**/
	//    runAsync (method, self = this, ...args) {
	// 		let ret = null;
	// 		if (method)
	// 			ret = await method.call (self, ...args);
	// 		return ret || 0;
	// 	}

	/**
	simulate before breakpoint
	**/
	// runAsyncBeforeBp (method, self = this, ...args) {
	// 	let ret = null;
	// 	if (method)
	// 		ret = await method.call (self, ...args);
	// 	debugger;
	// 	return ret || 0;
	// }

	/**
	simulate after breakpoint
	**/
	// runAsyncAfterBp (method, self = this, ...args) { 
	// 	debugger;
	// 	return await method.call (self, ...args) || 0;
	// }

	/***
		simulate input
		**/
	in(from, to = null) {
		if (to)
			to = from;
		return to || from;
	}

	/***
	simulate output
	**/
	out(to, from) {
		to = from;
		return to;
	}

	//abstract
	async preprocess() { }

	//abstract
	async postprocess() { }

	//abstract
	async process() { }

	// async run() {
	// 	try {
	// 		this.log("preprocessing: begins");
	// 		await this.preprocess();
	// 		this.log("preprocessing: ends");

	// 		this.log("processing: begins");
	// 		await this.process();
	// 		this.log("processing: ends");

	// 		this.log("postprocessing: begins");
	// 		await this.postprocess();
	// 		this.log("postprocessing: ends");

	// 	}
	// 	catch (e) {
	// 			app.alert(e.message);
	// 	}

	// }

	assert(cond, msg) {
		super.assert(cond, msg);
	}



	assertCon(...args) {
		console.assert(...args);
	}

	clear() {
		console.clear();
	}

	count(arg = null) {
		console.count(arg);
	}

	countReset(arg = null) {
		console.countReset(arg);
	}

	debug(...args) {
		console.debug(...args);
	}

	dir(arg) {
		console.dir(arg);
	}

	dirxml(arg) {
		console.dirxml(arg);
	}

	error(...args) {
		console.error(...args);
	}

	group(arg = null) {
		console.group(arg);
	}

	groupCollapsed(arg = null) {
		console.groupCollapsed(arg);
	}

	groupEnd() {
		console.groupEnd();
	}

	info(...args) {
		console.info(...args);
	}

	log(...args) {
		console.log(...args);
	}

	profile(arg) {
		console.profile(arg);
	}

	profileEnd(arg) {
		console.profileEnd(arg);
	}

	table(arr) {
		console.table(arr);
	}

	time(arg) {
		console.time(arg);
	}

	timeEnd(arg) {
		console.timeEnd(arg);
	}

	timeLog(arg) {
		console.timeLog(arg);
	}

	timeStamp(arg) {
		console.timeStamp(arg);
	}

	trace(...args) {
		console.trace(...args);
	}

	warn(...args) {
		console.warn(...args);
	}



}

// /SDD - Simulator Driven Development
// ////////////////////////////////////////////////////////////////////////////////////////////////// //




///////////////////////////////////////////////////////////////////////////////////////////////
/* BUGGY
// This script should be loaded early in your HTML.

// Create the namespace if it doesn't exist
window.AppNamespace = window.AppNamespace || {};

// Define the WebSocket URL - make sure this is correct for your setup
const websocketUrl = `wss://${window.location.host}/ws`; // Example: Use current host

// Create a single instance of the WebSocketClientService
const appWebSocketClientServiceInstance = new WebSocketClientService(websocketUrl);

// Expose the instance on the global namespace
window.AppNamespace.webSocketService = appWebSocketClientServiceInstance;

console.log("WebSocketClientService instance created and exposed on window.AppNamespace.webSocketService");

// Initiate the connection when this script runs
appWebSocketClientServiceInstance.connect();

// Add other global utility instances or setup here if needed
*/
///////////////////////////////////////////////////////////////////////////////////////////////








/////////////////////////////////////////////////////////



window.onerror = function (msg, url, lineNo, columnNo, error) {
	var string = msg;
	var substring = "script error";
	var message = [
	/*'Error: ' +*/ msg,
		'URL: ' + url,
		'Line: ' + lineNo,
		'Column: ' + columnNo,
		//"Error: " + error
		//'Error object: ' + JSON.stringify(error)
	].join('\n');

	//alert("Alas!");

	/*
	$(document).Toasts('create', {
		class: 'bg-danger', 
		title: "Application Error Handler",
		subtitle: "",
		autohide: false,
		delay: 2000,
		body: message,
	});
	*/
	// Display an error toast, with a title
	//PENDING toastr.error(message, 'Application Error Handler', {timeOut: 2000})

	//debugger;

	alert("ERROR: " + message)
	return false;
};


window.onunhandledrejection = function (ex) {
	/*
	$(document).Toasts('create', {
		class: 'bg-danger', 
		title: "Application Error Handler",
		//subtitle: "",
		autohide: true,
		delay: 2000,
		body: ex.reason,
	});
	*/
	// Display an error toast, with a title
	//PENDING toastr.error(ex.reason, 'Application Error Handler', {timeOut: 2000})
	//debugger;
	//app.alert("REJECTION: " + ex.reason)
	alert("REJECTION: " + ex.reason);
	//return true;
};


// DISABLED BY EKN : 2025
// window.addEventListener("error", function (e) {
// 	//alert("Alas!");
// 	//app.alert("EXCEPTION: " + e.error.message);
// 	alert("EXCEPTION: " + e.error.message);
// 	//return false;
// });




// lazy load images
document.addEventListener("DOMContentLoaded", async function () {
	const lazyImages = document.querySelectorAll('[loading="lazy"]');

	const lazyLoad = (image) => {
		if (image.getAttribute("data-src") && !image.src) {
			image.src = image.getAttribute("data-src");
			image.removeAttribute("data-src"); // Remove data-src to prevent reloading
		}
	};

	const lazyImageObserver = new IntersectionObserver((entries, observer) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				lazyLoad(entry.target);
				observer.unobserve(entry.target); // Stop observing once loaded
			}
		});
	});

	lazyImages.forEach((image) => {
		lazyImageObserver.observe(image);
	});
});
// /lazy load images



document.addEventListener("DOMContentLoaded", async function (event) {
	//debugger;
	/*
	try {
		


		let id = document.getElementById("back");
		//id.textContent = "< Back";

		id.addEventListener("click", (e) => {
			e.preventDefault();
			history.back();			
		});
	}
	catch (e) {
		console.log(e.message + " [Warning: Back button not found.]");
	}

	document.getElementById("alertModalClose").addEventListener("click", app.hideAlert);
	document.getElementById("alertModalCross").addEventListener("click", app.hideAlert);
	*/

	// methdical uponReady()...
	app = new WebApplication(page);
	await app.uponReady()


	//functional uponReady()....
	// REM by EKN
	// if (typeof uponReady === "function") { 
	// 	await uponReady();

	// 	/*
	// 	try {
	// 		domContentLoadedCallback();

	// 	}
	// 	catch (e) {
	// 		console.log(e.message);
	// 		console.log("going on");
	// 	}
	// 	*/

	// }
	// /REM by EKN

});



///////////////////////////////////////////////////////////////////////
// FP - FUNCTIONAL PROGRAMMING

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}




function html(strings, ...values) {
	// Step 1: Create a template representation

	const template = {
		strings, // Array of string parts
		values, // Array of value placeholders
		// ... Other properties for optimized updates if it is a lit-html like function
	};

	// Step 2: Return the template object
	return template;
}


// /FP - FUNCTIONAL PROGRAMMING
///////////////////////////////////////////////////////////////////////
