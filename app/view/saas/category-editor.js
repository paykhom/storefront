//`;namespace App\Views\Saas;

//use App\Views\SaasLayout;

export default class CategoryEditor extends SaasLayout {
    

    *head() {
        yield this.render(super.head());
    }

    *style() {
        yield this.render(super.style());
    yield html`
      <style>
      </style>
    `;    }

    *content() {
        yield this.render(super.content());
yield html`
				<div class="page-header">
					<div class="add-item d-flex">
						<div class="page-title">
							<h4>Category</h4>
							<h6>&nbsp;</h6>
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
                        <div class="page-btn">
                            <a  onclick="page.onClickAddNew(this)" href="#" class="btn btn-added" onclick="page.onClickAddNew(this)"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle me-2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>Add New</a>
                        </div>	
					
				</div>

				<form action="add-category.html">
    <div class="card">
        <div class="card-body add-product pb-0">
            <div class="accordion-card-one accordion" id="accordionExample">
                <div class="accordion-item">
                    <div class="accordion-header" id="headingOne">
                        <div class="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                            aria-controls="collapseOne">
                            <div class="addproduct-icon">
                                <h5><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="feather feather-info add-info">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <line x1="12" y1="16" x2="12" y2="12"></line>
                                        <line x1="12" y1="8" x2="12.01" y2="8"></line>
                                    </svg><span>Category Information</span></h5>
                                <a href="javascript:void(0);"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                        height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        class="feather feather-chevron-down chevron-down-add">
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg></a>
                            </div>
                        </div>
                    </div>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                           <div class="row">
                                <div class="col-lg-6 col-sm-6 col-12">
                                    <div class="mb-3 add-product">
                                        <label class="form-label">Title</label>
                                        <input type="text" class="form-control" data-state="title" required>
                                    </div>
                                </div>
                                 <div class="col-lg-6 col-sm-6 col-12">
                                    <div class="mb-3 add-product">
                                         <label class="form-label">Slug</label>
                                          <input type="text" class="form-control" data-state="slug">
                                    </div>
                                </div>
                            </div>
                           <div class="row">
                                 <div class="col-lg-12">
                                    <div class="input-blocks summer-description-box transfer mb-3">
                                       <label>Description</label>
                                      <textarea class="form-control h-100" rows="3" data-state="description"></textarea>
                                    </div>
                                 </div>
                            </div>

                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="input-blocks summer-description-box transfer mb-3">
                                        <label>Content</label>
                                         <textarea class="form-control h-100" rows="5" data-state="content"></textarea>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-lg-6 col-sm-6 col-12">
                                    <div class="mb-3 add-product">
                                       <label class="form-label">Meta Title</label>
                                       <input type="text" class="form-control" data-state="meta_title">
                                    </div>
                                </div>
                                <div class="col-lg-6 col-sm-6 col-12">
                                    <div class="input-blocks summer-description-box transfer mb-3">
                                         <label>Meta Description</label>
                                        <textarea class="form-control h-100" rows="3" data-state="meta_description"></textarea>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-lg-6 col-sm-6 col-12">
                                   <div class="mb-3 add-product">
                                        <label class="form-label">Is Product</label>
                                          <select data-state="__is_product" class="form-select">
                                              <option value="true">Yes</option>
                                              <option value="false">No</option>
                                        </select>
                                    </div>
                                </div>
                                 <div class="col-lg-6 col-sm-6 col-12">
                                    <div class="mb-3 add-product">
                                        <label class="form-label">Publication Status ID</label>
                                        <select data-state="publication_status_id" class="form-select">
                                            <option value="0" selected></option>
                                        </select> 
                                   </div>
                                </div>
                           </div>
                            
                            <div class="row">
                                <div class="col-lg-6 col-sm-6 col-12">
                                    <!-- 
                                    <div class="mb-3 add-product">
                                        <label class="form-label">Logo Image</label>
                                        <input type="text" class="form-control" data-state="logo_image">
                                    </div>
                                    -->
                                    <div class="mb-3">
                                        <label for="logo_image" class="form-label">Logo Image</label>
                                        <input class="form-control" type="file" name="logo_image" id="logo_image" onchange="page.onChangeFileContent(this)">
                                    </div>
                                    <div id="logo_image_preview_container">
                                        <div xclass="image-preview-item col-4 mb-2">
                                            <img data-state="logo_image"  src="/no-image.jpeg" alt="Logo Image" class="img-fluid rounded shadow" width="100%">
                                        </div>
                                    </div>

                                </div>
                                <div class="col-lg-6 col-sm-6 col-12">
                                    <div class="mb-3">
                                        <label for="banner_image" class="form-label">Banner Image</label>
                                        <input class="form-control" type="file" id="banner_image" onchange="page.onChangeFileContent(this)">
                                    </div>
                                    <div id="banner_image_preview_container">
                                        <div xclass="image-preview-item col-4 mb-2">
                                            <img data-state="banner_image"  src="/no-image.jpeg" alt="Banner Image" class="img-fluid rounded shadow" width="100%">
                                        </div>
                                    </div>


                                </div>
                            </div>

                            <div class="row">
                                <div class="col-12 xcol-xxl-4 xcol-xl-6">
                                    <div class="card">
                                        <div class="card-header d-none">
                                            <div class="card-title">
                                                Attributes
                                            </div>
                                        </div>
                                        <div class="card-body">
                                            <ul class="nav nav-tabs tab-style-2 nav-justified mb-3 d-sm-flex d-block" id="myTab1" role="tablist">
                                                <li class="nav-item" role="presentation">
                                                    <button class="nav-link active" id="order-tab" data-bs-toggle="tab" data-bs-target="#pa_tab_pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true"><i class="feather-gift me-1 align-middle"></i>Product Attributes</button>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <button class="nav-link" id="confirmed-tab" data-bs-toggle="tab" data-bs-target="#pva_tab_pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false" tabindex="-1"><i class="feather-check me-1 align-middle"></i>Variant Attributes</button>
                                                </li>
                                            </ul>
                                            <div class="tab-content" id="myTabContent">
                                                <div class="tab-pane fade text-muted active show" id="pa_tab_pane" role="tabpanel" aria-labelledby="home-tab-1" tabindex="0">
                                                    <div id="pa_table" class="table-light"></div>
                                                </div>
                                                <div class="tab-pane fade text-muted" id="pva_tab_pane" role="tabpanel" aria-labelledby="profile-tab-2" tabindex="0">
                                                    <div id="pva_table" class="table-light"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>                                

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
      <div class="col-lg-12">
        <div class="btn-addproduct mb-4">
            <button id="btn_cancel_editor" type="button" class="btn btn-cancel me-2">Cancel</button>
            <button id="btn_save_editor" type="submit" class="btn btn-submit">Save</button>
        </div>
    </div>
     <input type="hidden" data-state="category_id" />
</form>				

`;    }

    *script() {
        yield this.render(super.script());
    yield html`

<script>
    class Page extends SaasLayout {
        constructor(params) {
            super(params);
        }

        // HANDLERS/ /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        async uponReady() {
            await super.uponReady();

            this.setHotState("ret_data"); // clarity, though, already called by MasterLayout::uponReady()....


			await this.loadEditor(~/api/dbx/ecom/category/load_editor~, {});

            if (this.state.ret_data.category_id < 1) {
                this.state.ret_data.category_detail = [];
            }

            // Filter and map data for regular products
            const paTableData = this.state.ret_data.category_detail
                .filter(detail => !detail.is_product_variant) // Only include rows where is_product_variant is false
            ;

            // Filter and map data for product variants
            const pvaTableData  = this.state.ret_data.category_detail
                .filter(detail => detail.is_product_variant) // Only include rows where is_product_variant is true
            ;            

            this.setupTabulator("pa_table", paTableData);
            this.setupTabulator("pva_table", pvaTableData);


            // this.populateCombo(~[data-state="attrib_group_id"]~, this.state.view_collection["ecom.attrib_group"], "attrib_group_id", "title", this.state.ret_data.attrib_group_id);
            this.populateCombo(~[data-state="publication_status_id"]~, this.state.view_collection["cms.publication_status"], "publication_status_id", "title", this.state.ret_data.publication_status_id);
		
        }


		//NOTE: we are overriding MasterLayout::onClickSaveEditor(e){...}/
		async onClickSaveEditor(e) {
            e.preventDefault();
			e.stopPropagation();

            this.state.payload = {};

            // if (!(this.pa_table.validate() === true)) {
            //     throw "Please fill up the Prouct Attributes table accordingly."
            // }

            // if (!(this.pva_table.validate() === true)) {
            //     throw "Please fill up the Prouct Variant Attributes table accordingly."
            // }

            if (!this.validateTable(this.pa_table)) {
                throw (~Please fill up the entire Product Attribute table rows~);                            
            }

            if (!this.validateTable(this.pva_table)) {
                throw (~Please fill up the entire Product Variant Attribute table rows~);
            }

            const mpaTableData = this.getTabulatorData("pa_table", false); // Transform the data
            const mpvaTableData = this.getTabulatorData("pva_table", true); // Transform the data
            this.state.payload["category_detail"] = [...mpaTableData, ...mpvaTableData];

            // now, call the super
            await super.onClickSaveEditor(e);

        }			

        // METHODS/ /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        // validateTable(table) {
        //     const rows = table.getRows();
        //     for (const row of rows) {
        //         const data = row.getData();
        //         for (let field in data) {
        //             if (!data[field]) {
        //                 return false; // Row is incomplete
        //             }
        //         }
        //     }
        //     return true; // All rows are valid
        // }        

        validateTable(table) {
            const rows = table.getRows();

            for (const row of rows) {
                const data = row.getData();
                const firstColumnField = "attrib_group_id"; // Replace with your first column's field name
                
                // If the first column is filled, validate the rest of the row
                if (data[firstColumnField]) {
                    for (let field in data) {
                        if (field === "category_detail_id") {
                            data[field] = data[field] || 0;
                        }

                        // NOT WORKING PROPERLY
                        // if (!data[field]) {
                        //     return false; // Row is incomplete
                        // }
                        // FALLBACK:
                        if (data[field] === undefined || data[field] === null || data[field] === "") {
                            return false; // Row is incomplete
                        }                        
                    }
                }
            }
            
            return true; // All rows are valid
        }

        setupTabulator(tableKey, data) {

            // Add the custom editor to Tabulator's editor definitions
            //Tabulator.editors.transportation = this.comboEditor;


            // Step 1: Map category_detail for Tabulator
            const tableData = (data||[]).map(detail => ({
                category_detail_id: detail.category_detail_id,
                attrib_group_id: detail.attrib_group_id,
                attrib_id: detail.attrib_id,
                description: detail.description,
                is_searchable: detail.is_searchable? "Yes": "No",
                is_key_feature: detail.is_key_feature? "Yes": "No",
            }));
            tableData.push({});

            const mAttrib = this.state.view_collection["ecom.attrib"].map(row => ({
                value: row.attrib_id,
                label: row.title,
            }));

            const mAttribGroup = this.state.view_collection["ecom.attrib_group"].map(row => ({
                value: row.attrib_group_id,
                label: row.title,
            }));

            //create Tabulator on DOM element with id "example-table"
            this[tableKey] = new Tabulator("#"+tableKey, {
                rowContextMenu:[
                    {
                        label:"Delete Row",
                        action:function(e, row){
                            row.delete();
                        },
                    },
                    {
                        label:"Add Row",
                        action:function(e, row){
                            //"this" is not working: this[tableKey].addData({});
                           page[tableKey].addData({}); // not working properly
                        }
                    },
                ],                
                validationMode:"highlight",
                height:205, // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
                data:tableData, //assign data to table
                layout:"fitColumns", //fit columns to width of table (optional)
                columns:[ //Define Table Columns
                    {title:"ID", field:"category_detail_id", visible: false},
                    {
                        title:"Attribute Group", 
                        field:"attrib_group_id", 
                        editor:"list", 
                        editorParams: {
                            values: mAttribGroup

                        },
                        formatter: function (cell) {
                            // Map the stored id to the title using formattedGenderOptions
                            const value = cell.getValue(); // Stored value (e.g., "male")
                            const match = mAttribGroup.find(option => option.value === value);
                            //worked: return match ? match.label : ""; // Show title or fallback to "Unknown"
                            return match ? match.label : null; // Show title or fallback to "Unknown"
                        },
                        validator: "required",
                    },
                    {
                        title:"Attribute", 
                        field:"attrib_id", 
                        editor:"list", 
                        editorParams: {
                            values: mAttrib

                        },
                        formatter: function (cell) {
                            // Map the stored id to the title using formattedGenderOptions
                            const value = cell.getValue(); // Stored value (e.g., "male")
                            const match = mAttrib.find(option => option.value === value);
                            //worked: return match ? match.label : ""; // Show title or fallback to "Unknown"
                            return match ? match.label : null; // Show title or fallback to "Unknown"
                        },
                        validator: "required",

                    },
                    {title:"Description", field:"description", editor:"input", validator: "required"},
                    {title:"Searchable", field:"is_searchable", editor: "list", editorParams: { values: {"Yes":"Yes", "No":"No"}}, validator: "required"},
                    {title:"Key Feature", field:"is_key_feature", editor: "list", editorParams: { values: {"Yes":"Yes", "No":"No"}}, validator: "required"},
                ],
                validationFailed: (cell, value, validators) => {
                    throw (~Validation failed in column "~{cell.getColumn().getDefinition().title}"~);
                },
                cellEdited: function (cell) {
                    // Check if the entire row is valid after a cell is edited
                    const row = cell.getRow();
                    const data = row.getData();

                    // Check for empty or invalid values
                    let isRowValid = true;
                    for (let field in data) {
                        if (!data[field]) {
                            isRowValid = false;
                            break;
                        }
                    }

                    if (isRowValid) {
                        
                    } else {
                        
                    }
                },
                dataEdited: function () {
                    
                },                
            });



        }

        getTabulatorData(table, isProductVariant = false) {
            const rows = this[table].getRows();
            const firstColumnField = "attrib_group_id"; // Replace with your first column's field name

            // Filter rows where the first column is filled
            const filteredRows = rows.filter((row) => {
                const data = row.getData();
                return !!data[firstColumnField]; // Check if the first column is not empty or null
            });


            let myData= filteredRows.map(row => {
                let data =  row.getData();
                //if(data.attrib_group_id && data.attrib_id) {
                    return {
                        category_detail_id: data.category_detail_id||0,
                        attrib_group_id: data.attrib_group_id,
                        attrib_id: data.attrib_id,
                        description: data.description || "No Description",
                        is_searchable: data.is_searchable === "Yes"? true: false,
                        is_key_feature: data.is_key_feature === "Yes"? true: false,

                        is_product_variant: isProductVariant
                    }
            });
            return myData;
        }		


    }
    
    class Tester extends Tdd {
        constructor(args) {
            super(args);
        }

        uponReady() {
            super.uponReady();

            //fillUp();
        }

        fillUp() {
            let form = {
                "title": "Test",
                "slug": "test",
                "description": "Test",
                "content": "Test",
                "meta_title": "Test",
                "meta_description": "Test",
                "is_product" : "true",
                "publication_status_id": "1"                
            }

            page.setState({...page.state, ret_data: form});

        }
    }

    class Simulator extends Sdd {
        constructor(args) {
            super(args)
        }

        uponReady() {
            super.uponReady();
        }

    }

    page = new Page();
    tdd = new Tester();
    sdd = new Simulator();

</script>

`;    }
}
