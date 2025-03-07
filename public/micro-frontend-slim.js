"use strict";

/* TWO GLOBALS */
var app = null;
var page = null;
var tdd = null;
var sdd = null;

class Interface extends Object {
	constructor (args) {
		super (args);
		this.me = this;
	}
}

class Class extends Interface {
    

	constructor (args = {}) {
		super (args);
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


    stateScatterHandler(propertyPath, propertyValue) {
        //debugger;

		const elements = document.querySelectorAll(`${this.id} [data-state="${propertyPath}"]`);
        elements.forEach(element => {
            if (["input", "textarea", "select", "button"].includes(element.tagName.toLowerCase()) ) {
                element.value = propertyValue;
            }
            else {
                element.textContent = propertyValue;
            }
        });
    }

    async stateGatherHandlerAsync(event) {
		//debugger;

        const element = event.target;
        const propertyPath = element.dataset.state;
        
        let propertyValue = null;
        if (["input", "textarea", "select", "button"].includes(element.tagName.toLowerCase()) ) {
            propertyValue = element.value;
        }
        else {
            propertyValue = element.textContent;
        }
    

        //this.setState(propertyPath, propertyValue, this.hotState);
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

		assert (condition, violationMessage) {
			
			if (!condition) {
				violationMessage = violationMessage || "Assertion failed";
					if (typeof Error !== "undefined") {
							throw new Error(violationMessage);
					}
					throw violationMessage; // Fallback
			}
		}    
	

		_assertAll (conditionAndViolationMessageArray) {
			for (let i = 0; i < conditionAndViolationMessageArray.length; i+=2) {
				//alert("User " + data[key] + " is #" + key); // "User john is #234"
				this.assert((conditionAndViolationMessageArray[i]), conditionAndViolationMessageArray[i+1]);
			}
		}    

		dbcPrecondition (args = []) {
			this._assertAll (args);
		}
	
		dbcCondition (args = []) {
			this._assertAll (args);
		}
	
		dbcPostcondition (args = []) {
			this._assertAll (args);
		}
	
		dbcRequire (args = []) {
			this._assertAll (args);
		}
	
		dbcEnsure (args = []) {
			this._assertAll (args);
		}
	
		dbcInvariant (args = []) {
			this._assertAll (args);
		}

		// /DbC (Design by Contract)
		///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


		test__WHY_HERE(condition, description) {
			let ret = {};
			if (condition){
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

  async populateCombo(/*xfetchUrl, xpayload, */selector, data={}, k, v, selectedValue = null) {
	let selectItems = "";
	let defaultItem = `<option value="0" selected>(Please, Select)</option>`;

	let isSelected = false;
   for (let i = 0; i < data.length; i++) {
		let e = data[i];
		if(selectedValue===e[k]) {
			isSelected = true;
		}
		let each_item = `<option value="${e[k]}" ${selectedValue===e[k] ? " selected " : " "}>${e[v]}</option>`;
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
      if(!value) {
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
	constructor (config) {
		super ();
	}

	async uponReady() {
		await super.uponReady();

	}
}

class ServiceManager extends Class {
	constructor (config) {
		super ();
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
      
        Array.prototype.forEach.call(elList, function(el) {
					el.addEventListener (eventName, /*async*/ function (eventArg) {
						/*await*/ handlerMethod.call (me, eventArg);
					});	

        });

    }

    xoff(selector, eventName, eventHandler, useCapture) {
        var element = document.querySelectorAll(selector);

        Array.prototype.forEach.call(element, function(el) {
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
			if(foundErr) return;  //added to test single el validatio only

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
    constructor(element) 
    { 
        this.element = element; 
        this.next = null
    } 
} 

// linkedlist class 
class LinkedList { 
    constructor() 
    { 
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
    remove (element) { 
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
            
            fn (curr.element, curr.next.element);

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
		let reqInit =  init || {};


		reqInit.method = method || "GET";
		let req = new HttpRequest (url, reqInit);		
		req.acl = acl;
		this.invokeFirstRequestMiddleware (req);

		let response = null; 

		//$(".spinner-overlay").removeClass("d-none");

		response = await fetch (req);

		response.acl = acl;
		response.outputAsArrayBuffer = null;
		response.outputAsBlob = null;
		response.outputAsText = null;
		response.outputAsFormData = null;
		response.outputAsJson = null;
		response.output = null;

		if(response.status == 500){
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

		if(!response.ok){
			let data = await response.text(); 
			response.outputAsText = data;
			response.output = data;

			//return; // no more chaining through middlewares
		}
		else {
			switch (acl.bodyExtractMethod) {
				case 'arrayBuffer':
					response.outputAsArrayBuffer = await response.arrayBuffer ();
					response.output = response.outputAsArrayBuffer;
					break;
				case 'blob':
					response.outputAsBlob = await response.blob ();
					response.output = response.outputAsBlob;
					break;
				case 'text':
					response.outputAsText = await response.text ();
					response.output = response.outputAsText;
					break;
				case 'formData':
					response.outputAsFormData = await response.formData ();
					response.output = response.outputAsFormData;
					break;
				case 'json':
				default:
					response.outputAsJson = await response.json ();
					response.output = response.outputAsJson;
					break;
			}

			
		}
		
		this.invokeFirstResponseMiddleware (response);
		
		
		return response;
	}

}

class HttpClientMiddleware extends Class {
	constructor (config) {
		super ();
		this.config = config;
	}

	async uponReady() {
		await super.uponReady();

	}

    async onRequest (req, next) {
        /* IMPLEMENT in your own Class
        */
    	next (req);
	   	return this;
	}

    async onResponse (response, next) {
		//debugger;
				
        /* IMPLEMENT in your own Class
        */
		let data = null;

        if (response.acl.isRedirectEnabled && response.redirected) {
            //window.location.href = response.url;
						app.alert("Redirected. May be login required.");
			return; // no more chaining through middlewares
        }

		if(!response.ok){
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
				console.log (response.status);
				console.log (response.statusText);
				console.log (data);
				
				//debugger;
				let s = data;
				let s1 = "ERROR: ";
				let s2 = "LINE 1:";

				let l1 = s1.length;
				let l2 = s2.length;

				let p1 = s.indexOf (s1);
				let p2 = s.indexOf (s2);

				let s9 = (s.substr (p1+l1, p2-p1-l1));		
				
				
				//toastify
				throw new Error ("HTTP " + response.status + ": " + response.statusText + (s.indexOf ('Query failed: ERROR:') > 0)? ": " + s9: "");
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
	   

        next (response);
		return this;
    }

 
}

class DefaultHttpClientMiddleware extends HttpClientMiddleware {
    constructor (config) {
		super ();
		this.config = config;
    }
	
	async uponReady() {
		await super.uponReady();

	}

}


class Component extends Class {
    constructor () {
        super ();
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
      
        Array.prototype.forEach.call(elList, function(el) {
					el.addEventListener (eventName, /*async*/ function (eventArg) {
						/*await*/ handlerMethod.call (me, eventArg);
					});	

        });

		

    }

    off(selector, eventName, eventHandler, useCapture) {
        var element = document.querySelectorAll(selector);

        Array.prototype.forEach.call(element, function(el) {
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

	


	eventListenerAdd(el, ev,  handler) {
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
		arr.forEach(function(e) {
			me.eventListenerAdd (e[0], e[1], e[2]);
		});
		return this;
	}

	// //
	//@abstract
	async uponReady() {
		await super.uponReady();

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


// ////////////////////////////////////////////////////////////////////////////////////////////////// //
// SOFTWARE ARCHITECTURE //////////////////////////////////////////////////////////////////////////// //

// //////////////////////////////////////////////////////////////////////////////////////////////////////// //
// Observer Pattern

class Observable extends Service {
	constructor(config) {
			super (config);
			//this.observers = [];
			this.observers = {};
	}
	async uponReady() {
		await super.uponReady();

	}
	publish (/*sender,*/ msg){
			if (typeof this.observers[msg] === 'undefined')
		this.observers[msg] = [];
	return this;
}

unpublish (/*sender,*/ msg) {
			if (typeof this.observers[msg] !== 'undefined')
		delete this.observers[msg];
	return this;
}

	subscribe (msg, observer){
			//this.observers.push(observer);
			if (typeof this.observers[msg] === 'undefined')
		this.observers[msg] = [];

	this.observers[msg].push (observer);
	//facade.log('Observer attached')
	return this;
	}

	unsubscribe (msg, observer){
			for(var i in this.observers[msg])
					if(this.observers[i] === observer)
							this.observers.splice(i, 1)
	return this;
	}

	async notify (/*sender,*/ msg) {
			//facade.log('Subject Notify')
	//this.publish (msg); //safety
			//debugger;
			for(var i in this.observers[msg]){
				await this.observers[msg][i] (msg);
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
    assertCase(description, cond, violationMessage= "Assert Failure") {
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
		if(this.isAsync(testMethod)) {
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

    	if(!isMute) {
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
	constructor () {
		super ();

	}


	async uponReady() {
		await super.uponReady();
		
	}

    /**
    breakpoint
    **/
    bp () {
        //debugger;
    }


    /**
    simulate
    **/
    exec (method, self = this, ...args) {
        let ret = null;
        if (method)
            ret = method.call (self, ...args);
        return ret || 0;
    }

    /**
    simulate before breakpoint
    **/
    execBeforeBp (method, self = this, ...args) {
        let ret = null;
        if (method)
            ret = method.call (self, ...args);
        //debugger;
        return ret || 0;
    }

    /**
    simulate after breakpoint
    **/
    execAfterBp (method, self = this, ...args) { 
        //debugger;
        return method.call (self, ...args) || 0;
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
    in (from, to = null) {
        if (to)
            to = from;
        return to || from;
    }

    /***
    simulate output
    **/
    out (to, from) {
        to = from;
        return to;
    }

		//abstract
		async preprocess() {}

		//abstract
		async postprocess() {}

		//abstract
		async process() {}

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



    assertCon (...args) {
        console.assert (...args);
    }

    clear () {
        console.clear ();
    }

    count (arg = null) {
        console.count (arg);
    }

    countReset (arg = null) {
        console.countReset (arg);
    }

    debug (...args) {
        console.debug (...args);
    }

    dir (arg) {
        console.dir (arg);
    }

    dirxml (arg) {
        console.dirxml (arg);
    }

    error (...args) {
        console.error (...args);
    }

    group (arg = null) {
        console.group (arg);
    }

    groupCollapsed (arg = null) {
        console.groupCollapsed (arg);
    }

    groupEnd () {
        console.groupEnd ();
    }

    info (...args) {
        console.info (...args);
    }

    log (...args) {
        console.log (...args);
    }

    profile (arg) {
        console.profile (arg);
    }

    profileEnd (arg) {
        console.profileEnd (arg);
    }

    table (arr) {
        console.table (arr);
    }

    time (arg) {
        console.time (arg);
    }

    timeEnd (arg) {
        console.timeEnd (arg);
    }

    timeLog (arg) {
        console.timeLog (arg);
    }

    timeStamp (arg) {
        console.timeStamp (arg);
    }

    trace (...args) {
        console.trace (...args);
    }

    warn (...args) {
        console.warn (...args);
    }



}

// /SDD - Simulator Driven Development
// ////////////////////////////////////////////////////////////////////////////////////////////////// //



///////////////////////////////////////////////////////////////////////////////////////////////
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



document.addEventListener("DOMContentLoaded", async function(event) { 
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
