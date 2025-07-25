// FILE: shopping-controller.ts

import { Context } from 'hono';
import { Controller } from "paykhom-fw/component/controller";
import { PaykhomApiClientService } from 'paykhom-fw/component/service/paykhom-api-client-service';
import { RedisSession, UserSession } from 'paykhom-fw/component/session/redis-session';

// Define the cart item interface
interface CartItem {
  inventory_id: number;
  title: string;
  particulars: string;
  quantity: number;
  uom_id: number;
  currency_id: number;
  rate: number;
  total: number;
  product_media_path: string;
  link_product_slug: string;
  list_price: number;
}

interface Kv {
  page: string | number;
  limit: string | number;
  order: string;
  view: string;
}

interface PvsArgs {
do_count: string;
offset: number;
limit: number;
order_by: string;
product: {
    inventory: {
        inventory_detail: any;
    };
    category_slug?: string;
    brand_slug?: string;
};
}



export class StorefrontController extends Controller {
    private pg!: PaykhomApiClientService;
    private ss!: RedisSession;

    //public importMetaUrl = import.meta.url;
    constructor(config: Record<string, any>={}) {
        super({...config, importMetaUrl: import.meta.url});

    }

    async $uponReady(): Promise<void> {
      this.pg = this.resolve("pgc");
      this.ss = this.resolve("session");

    }
  
    getImportMetaUrl(): string {
      return import.meta.url;
    }
  




  
    async $onGetIndex(c: Context): Promise<Response> {
        const page = 1;
        const limit = 24;
        const offset = ((page - 1) * limit);
        const params = { do_count: true, limit: limit, offset: offset };

        //debugger;
        try {


            const categoryResult = await this.pg.$fx('/api/v1/core/ecom/category/list', params);
            const cat = categoryResult.ret_data || [];
            const rowCount = categoryResult.row_count || 0;
            const totalPages = Math.ceil(rowCount / limit);

            const htmlPagination = this.generateSmartPagination("/shopping/category", page, totalPages);

            const searchResult = await this.pg.$fx('/api/v1/core/ecom/inventory/search', { order_by: "idh2l", limit: 12 });
            if (searchResult.is_error) {
                return c.text(`Internal Server Error: ${searchResult.error_message || searchResult.__db_error__?.error}`, 500);
            }

            const products = searchResult.ret_data || [];
            const attribs = searchResult.pvav || [];

            return await this.$render(c, import('../view/index'), {
                test: { a: "b" },
                cat: cat,
                products: products,
                attribs: attribs,
                paginationHtml: htmlPagination,
                meta: { title: "Paykhom Platform" }
            });

        } catch (error: any) {
            // bug must be here!
            debugger

            console.error("Error in onGetIndex:", error);
            return c.text(`Internal Server Error: ${error.message}`, 500);
        }
    }

    async $onGetCategorySinglePaginator(c: Context): Promise<Response> {
        /*
        const param = { category_slug: 'component' };

        try {
            //  const pro = await this.pg.query('SELECT * FROM ecom_inventory__search(:category_slug)', param);
            //  Not 100% sure how to replicate the DB::select() exactly, but direct query is a good start.
            // TODO:  Refactor to use stored proc if needed
            return await this.$render(c, import('category/single', { pro: [], meta: { title: "Paykhom Platform" } }); // Replace [] with actual data if you manage to query.

        } catch (error: any) {
            console.error("Error in getProducts:", error);
            return c.text(`Internal Server Error: ${error.message}`, 500);
        }
        */
       return await this.$searchProductVariants(c, "category");
       
    }

    async $onGetProductPaginator(c: Context): Promise<Response> {
        /*
        const param = { category_slug: 'component' };

        try {
            //  const pro = await this.pg.query('SELECT * FROM ecom_inventory__search(:category_slug)', param);
            //  Not 100% sure how to replicate the DB::select() exactly, but direct query is a good start.
            // TODO:  Refactor to use stored proc if needed
            return await this.$render(c, import('category/single', { pro: [], meta: { title: "Paykhom Platform" } }); // Replace [] with actual data if you manage to query.

        } catch (error: any) {
            console.error("Error in getProducts:", error);
            return c.text(`Internal Server Error: ${error.message}`, 500);
        }
        */
       return await this.$searchProductVariants(c, "product");
    }

       async $onGetProductVariantPaginator(c: Context): Promise<Response> {
        /*
        const param = { category_slug: 'component' };

        try {
            //  const pro = await this.pg.query('SELECT * FROM ecom_inventory__search(:category_slug)', param);
            //  Not 100% sure how to replicate the DB::select() exactly, but direct query is a good start.
            // TODO:  Refactor to use stored proc if needed
            return await this.$render(c, import('category/single', { pro: [], meta: { title: "Paykhom Platform" } }); // Replace [] with actual data if you manage to query.

        } catch (error: any) {
            console.error("Error in getProducts:", error);
            return c.text(`Internal Server Error: ${error.message}`, 500);
        }
        */
       return await this.$searchProductVariants(c, "inventory");
       
    }

    async $onGetBrandPaginator(c: Context): Promise<Response> {
        /*
        const param = { category_slug: 'component' };

        try {
            //  const pro = await this.pg.query('SELECT * FROM ecom_inventory__search(:category_slug)', param);
            //  Not 100% sure how to replicate the DB::select() exactly, but direct query is a good start.
            // TODO:  Refactor to use stored proc if needed
            return await this.$render(c, import('category/single', { pro: [], meta: { title: "Paykhom Platform" } }); // Replace [] with actual data if you manage to query.

        } catch (error: any) {
            console.error("Error in getProducts:", error);
            return c.text(`Internal Server Error: ${error.message}`, 500);
        }
        */
       return await this.$searchProductVariants(c, "brand");
       
    }

    async $onGetBrandSinglePaginator(c: Context): Promise<Response> {
        /*
        const param = { category_slug: 'component' };

        try {
            //  const pro = await this.pg.query('SELECT * FROM ecom_inventory__search(:category_slug)', param);
            //  Not 100% sure how to replicate the DB::select() exactly, but direct query is a good start.
            // TODO:  Refactor to use stored proc if needed
            return await this.$render(c, import('category/single', { pro: [], meta: { title: "Paykhom Platform" } }); // Replace [] with actual data if you manage to query.

        } catch (error: any) {
            console.error("Error in getProducts:", error);
            return c.text(`Internal Server Error: ${error.message}`, 500);
        }
        */
       return await this.$searchProductVariants(c, "category");
       
    }

    private async $searchProductVariants(c: Context, src: string /*, slug: string, extra: string | undefined*/) {
        //return await c.text("Hello");

        const request = c.req;
        const {categorySlug, pageNum, path} = c.req.param();
        const slug = categorySlug, extra = path, xpage = pageNum;


        let us: UserSession  = await (c.get("session") as RedisSession).$get(c) as UserSession;

        let kv: Kv = {
            page: us.page || 1,
            limit: us.limit || 24,
            order: us.order || 'pl2h',
            view: us.view || 'grid'
        };

        let pvav: any = {};
        let urlPrefix = "";

        if (request.method === 'POST') {
            try {
                const productSearchParams = await request.json();
                pvav = productSearchParams.product.inventory.inventory_detail;

                switch (src) {
                    case "category":
                        //this.ss.set(c, `category_${slug}_filters`, pvav);
                        us[`category_${slug}_filters`] = pvav;
                        break;
                    case "brand":
                        //this.ss.set(c, `brand_${slug}_filters`, pvav);
                        us[`brand_${slug}_filters`] = pvav;
                        break;
                    default:
                }
            } catch (error: any) {
                console.error("Error parsing JSON:", error);
                return c.text("Invalid JSON payload", 400);
            }
        } else {
            switch (src) {
                case "category":
                    //pvav = this.ss.get(c, `category_${slug}_filters`) || {};
                    pvav = us[`category_${slug}_filters`] || {};
                    urlPrefix = "/shopping/category/";
                    break;
                case "brand":
                    //pvav = this.ss.get(c, `brand_${slug}_filters`) || {};
                    pvav = us[`brand_${slug}_filters`] || {}
                    urlPrefix = "/shopping/brand/";
                    break;
                default:
            }
            pvav = {}; //always start afresh on get
        }
        let segments: Record<string, string> = {};

        if (extra) {
          const segmentsArray = extra.split('/');
    
          for (let i = 0; i < segmentsArray.length; i += 2) {
            if (segmentsArray[i + 1]) {
              segments[segmentsArray[i]] = segmentsArray[i + 1];
            }
          }
        }    

        // Update session only for explicitly provided parameters
        for (const key in segments) {
            if (key in kv) {
                //this.ss.set(c, key, segments[key]);
                us[key] = segments[key];
                kv[key as keyof Kv] = segments[key];
            }
        }

        const orderBy = String(kv.order);
        const limit = Number(kv.limit);
        const page = Number(kv.page);
        const viewType = String(kv.view);
        const offset = ((page - 1) * limit);

        if (Array.isArray(pvav) && pvav.length === 0) {
            pvav = {};
        }

        const pvsArgs: PvsArgs = {
            do_count: "yes",
            offset: offset,
            limit: limit,
            order_by: orderBy,
            product: {
                inventory: {
                    inventory_detail: pvav
                }
            }
        };

        switch (src) {
            case "category":
                pvsArgs.product.category_slug = slug;
                break;
            case "brand":
                pvsArgs.product.brand_slug = slug;
                break;
            default:
        }

        try {
            const searchResult = await this.pg.$fx('/api/v1/core/ecom/inventory/search', pvsArgs);

            if (searchResult.is_error) {
                return c.text(`Internal Server Error: ${searchResult.error_message}`, 500);
            }

            const rowCount = searchResult.row_count || 0;
            const totalPages = Math.ceil(rowCount / limit);

            const products = searchResult.ret_data || [];
            const sub_categories = searchResult.sub_categories || [];
            const attribs = searchResult.pvav || [];
            const categoriesResult = await this.pg.$fx('/api/v1/core/ecom/category/list', { do_count: true });
            const categories = categoriesResult.ret_data || [];

            const options = {
                productViewType: viewType,
                limit: limit,
                orderBy: orderBy,
                rowCount: rowCount,
                offset: offset,
                currentPage: page,
                totalPages: totalPages,
                maxVisibleButtons: 5,
                slug: slug,
            };

            const paginationHtml = this.generateSmartPagination(urlPrefix + slug, page, totalPages);
            
            // ekn
            await this.ss.$update(c, us);
            // /ekn

            if (request.method === 'GET') {
                return await this.$render(c, import('../view/product-variant-search'), {
                    src: "category",
                    attribs: attribs,
                    products: products,
                    categories: categories,
                    sub_categories: sub_categories,
                    category_title: searchResult.category_title,
                    category_description: searchResult.category_description,
                    pvav: src === "category" ? us[`category_${slug}_filters`] || {} : us[`brand_${slug}_filters`] || {},
                    paginationHtml: paginationHtml,
                    options: options,
                    meta: { title: "Paykhom Platform" }
                });
            } else if (request.method === 'POST') {
                return c.json({ searchResult: searchResult, paginationHtml: paginationHtml });
            } else {
                return c.text("Method not allowed", 405); // Method Not Allowed
            }
        } catch (error: any) {
            console.error("Error in searchProductVariants:", error);
            return c.text(`Internal Server Error: ${error.message}`, 500);
        }
    }


    async $paginateProductsByCategory(c: Context): Promise<Response> {
      const categorySlug = c.req.param('categorySlug');
      const extra = c.req.param('extra');
      return await this.$searchProductVariants(c, "category" /*, categorySlug, extra*/);
    }


    async $viewProduct(c: Context): Promise<Response> {
        const productSlug = c.req.param('productSlug');
        const params = { product_slug: productSlug };

        try {
            const res = await this.pg.$fx('/api/v1/core/ecom/product/fetch', params);
            const cat = res.ret_data;

            return await this.$render(c, import(/* not created yet */ '../view/product-single'), { meta: { title: "Paykhom Platform" } });

        } catch (error: any) {
            console.error("Error in viewProduct:", error);
            return c.text(`Internal Server Error: ${error.message}`, 500);
        }
    }

    async $viewProductVariant(c: Context): Promise<Response> {
        const variantSlug = c.req.param('variantSlug');
        const params = { inventory_slug: variantSlug };

        try {
            const res = await this.pg.$fx('/api/v1/core/ecom/inventory/fetch', params);
            const ret_data = res.ret_data;

            return await this.$render(c, import('../view/product-variant-single'), { product: ret_data, meta: { title: "Paykhom Platform" } });

        } catch (error: any) {
            console.error("Error in viewProductVariant:", error);
            return c.text(`Internal Server Error: ${error.message}`, 500);
        }
    }


    generateSmartPagination(prefix: string, currentPage: number, totalPages: number, maxVisibleButtons = 10, options: any = {}) {
        const defaultOptions = {
          query_param: 'page',
          alignment: 'center',
          classes: {
            pagination: 'pagination',
            item: 'page-item',
            link: 'page-link',
            active: 'active',
            disabled: 'disabled',
            ellipsis: 'disabled',
          },
        };
        const mergedOptions = { ...defaultOptions, ...options };
        const classes = mergedOptions.classes;
        const alignmentClass = mergedOptions.alignment === 'left' ? 'justify-content-start' : mergedOptions.alignment === 'right' ? 'justify-content-end' : 'justify-content-center';
    
        if (totalPages <= 1) {
          return `<nav><ul class="${classes.pagination} ${alignmentClass}"><li class="${classes.item} ${classes.active}"><span class="${classes.link}">1</span></li></ul></nav>`;
        }
    
        currentPage = Math.max(1, Math.min(totalPages, currentPage));
        let html = `<nav><ul class="${classes.pagination} ${alignmentClass}">`;
    
        html += currentPage > 1
          ? `<li class="${classes.item}"><a class="${classes.link}" href="${prefix}/page/${currentPage - 1}" aria-label="Previous">«</a></li>`
          : `<li class="${classes.item} ${classes.disabled}"><span class="${classes.link}" aria-disabled="true">«</span></li>`;
    
        if (currentPage > maxVisibleButtons - 1) {
          html += `<li class="${classes.item}"><a class="${classes.link}" href="${prefix}/page/1">1</a></li>`;
          if (currentPage > maxVisibleButtons) {
            html += `<li class="${classes.item} ${classes.ellipsis}"><span class="${classes.link}">...</span></li>`;
          }
        }
    
        const start = Math.max(1, currentPage - Math.floor(maxVisibleButtons / 2));
        const end = Math.min(totalPages, currentPage + Math.floor(maxVisibleButtons / 2));
    
        for (let i = start; i <= end; i++) {
          const active = i === currentPage ? ` ${classes.active}` : '';
          const ariaCurrent = i === currentPage ? ' aria-current="page"' : '';
          html += `<li class="${classes.item}${active}"><a class="${classes.link}" href="${prefix}/page/${i}"${ariaCurrent}>${i}</a></li>`;
        }
    
        if (end < totalPages) {
          if (end < totalPages - 1) {
            html += `<li class="${classes.item} ${classes.ellipsis}"><span class="${classes.link}">...</span></li>`;
          }
          html += `<li class="${classes.item}"><a class="${classes.link}" href="${prefix}/page/${totalPages}">${totalPages}</a></li>`;
        }
    
        html += currentPage < totalPages
          ? `<li class="${classes.item}"><a class="${classes.link}" href="${prefix}/page/${currentPage + 1}" aria-label="Next">»</a></li>`
          : `<li class="${classes.item} ${classes.disabled}"><span class="${classes.link}" aria-disabled="true">»</span></li>`;
    
        html += '</ul></nav>';
        return html;
      }
    

    async $onGetCategoryPaginator(c: Context): Promise<Response> {
        const page = parseInt(c.req.param('page'), 10) || 1;  // Ensure it's a number
        const limit = 24;
        const offset = ((page - 1) * limit);
        const params = { do_count: true, limit: limit, offset: offset };

        try {
            const res = await this.pg.$fx('/api/v1/core/ecom/category/list', params);
            const cat = res.ret_data;
            const rowCount = res.row_count;
            const totalPages = Math.ceil(rowCount / limit);

            const htmlPagination = this.generateSmartPagination("/category", page, totalPages);

            return await this.$render(c, import('../view/category-all'), { test: { a: "b" }, cat: cat, paginationHtml: htmlPagination, meta: { title: "Paykhom Platform" } });

        } catch (error: any) {
            console.error("Error in paginate:", error);
            return c.text(`Internal Server Error: ${error.message}`, 500);
        }
    }

    async $paginateBrands(c: Context): Promise<Response> {
        const page = parseInt(c.req.param('page'), 10) || 1;  // Ensure it's a number
        const limit = 24;
        const offset = ((page - 1) * limit);
        const params = { do_count: true, limit: limit, offset: offset };

        try {
            const res = await this.pg.$fx('/api/v1/core/ecom/brand/list', params);
            const brand = res.ret_data;
            const rowCount = res.row_count;
            const totalPages = Math.ceil(rowCount / limit);

            const htmlPagination = this.generateSmartPagination("/shopping/brand", page, totalPages);

            return await this.$render(c, import('../view/brand-all'), { test: { a: "b" }, brand: brand, paginationHtml: htmlPagination, meta: { title: "Paykhom Platform" } });

        } catch (error: any) {
            console.error("Error in paginateBrands:", error);
            return c.text(`Internal Server Error: ${error.message}`, 500);
        }
    }

    async $paginateProductsByBrand(c: Context): Promise<Response> {
      const brandSlug = c.req.param('brandSlug');
      const extra = c.req.param('extra');
      return await this.$searchProductVariants(c, "brand"/*, brandSlug, extra*/);
    }


    async $onPostGlobalSearch(c: Context): Promise<Response> {
      try {
        const payload = await c.req.json();

        // Arguments to pass to the stored function
        const config = {
            search: payload.search,
        };

        // Call the PostgreSQL stored function
        const result = await this.pg.$fx('/api/v1/core/ecom/__/search_global_storefront', config);

        return c.json(result);
      } catch (error) {
          console.error("Error executing function:", error);
          return c.json({ error: "Internal Server Error" }, 500);
      }
    }

    // POST METHODS
    // async $onPostCartAdd(c: Context): Promise<Response> {
        
    // }
    // async $onPostCartGet(c: Context): Promise<Response> {
    // }
    // async $onPostCartUpdate(c: Context): Promise<Response> {
    // }
    // async $onPostCartRemove(c: Context): Promise<Response> {
    // }
    // async $onPostCartClear(c: Context): Promise<Response> {
    // }
 











  
    async $onGetInfoCompany(c: Context): Promise<Response> {
      return await this.$render(c, import('../view/info/company'), { meta: { title: 'Dashboard' } });
    }
  
    async $onGetInfoCareer(c: Context): Promise<Response> {
      return await this.$render(c, import('../view/info/career'), { meta: { title: 'Dashboard' } });
    }
  
    async $onGetInfoAbout(c: Context): Promise<Response> {
      return await this.$render(c, import('../view/info/about'), { meta: { title: 'Dashboard' } });
    }
  
    async $onGetInfoHelp(c: Context): Promise<Response> {
      return await this.$render(c, import('../view/info/help'), { meta: { title: 'Dashboard' } });
    }
  
    async $onGetInfoValue(c: Context): Promise<Response> {
      return await this.$render(c, import('../view/info/value'), { meta: { title: 'Dashboard' } });
    }
  
    async $onGetInfoPayment(c: Context): Promise<Response> {
      return await this.$render(c, import('../view/info/payment'), { meta: { title: 'Dashboard' } });
    }
  
    async $onGetInfoShipping(c: Context): Promise<Response> {
      return await this.$render(c, import('../view/info/shipping'), { meta: { title: 'Dashboard' } });
    }
  
    async $onGetInfoReturn(c: Context): Promise<Response> {
      return await this.$render(c, import('../view/info/returns'), { meta: { title: 'Dashboard' } });
    }
  
    async $onGetInfoFaq(c: Context): Promise<Response> {
      return await this.$render(c, import('../view/info/faq'), { meta: { title: 'Dashboard' } });
    }
  
    async $onGetInfoCheckout(c: Context): Promise<Response> {
      return await this.$render(c, import('../view/info/checkout'), { meta: { title: 'Dashboard' } });
    }
  
    async $onGetInfoOpportunity(c: Context): Promise<Response> {
      return await this.$render(c, import('../view/info/opportunity'), { meta: { title: 'Dashboard' } });
    }
  
    async $onGetInfoEntrepreneur(c: Context): Promise<Response> {
      return await this.$render(c, import('../view/info/entrepreneur'), { meta: { title: 'Dashboard' } });
    }
  
    async $onGetInfoEarning(c: Context): Promise<Response> {
      return await this.$render(c, import('../view/info/earning'), { meta: { title: 'Dashboard' } });
    }
  
    async $onGetInfoIdea(c: Context): Promise<Response> {
      return await this.$render(c, import('../view/info/idea'), { meta: { title: 'Dashboard' } });
    }
  
    async $onGetInfoRetailer(c: Context): Promise<Response> {
      return await this.$render(c, import('../view/info/retailer'), { meta: { title: 'Dashboard' } });
    }
  
    async $onGetInfoGiftCard(c: Context): Promise<Response> {
      return await this.$render(c, import('../view/info/gift-card'), { meta: { title: 'Dashboard' } });
    }
  
    async $onGetInfoPromo(c: Context): Promise<Response> {
      return await this.$render(c, import('../view/info/promo'), { meta: { title: 'Dashboard' } });
    }
  
    async $onGetInfoAd(c: Context): Promise<Response> {
      return await this.$render(c, import('../view/info/ad'), { meta: { title: 'Dashboard' } });
    }
  
    async $onGetInfoContact(c: Context): Promise<Response> {
      return await this.$render(c, import('../view/info/contact'), { meta: { title: 'Dashboard' } });
    }

    


    async $onPostCreateCart(c: Context): Promise<Response> {
      await this.ss.$update(c, { cart: [] });
      return c.json({ message: 'Cart created' }, 201);
    }
  
    async $onPostDestroyCart(c: Context): Promise<Response> {
      await this.ss.$update(c, { cart: null });
      return c.json({ message: 'Cart destroyed' });
    }
  
    async $onPostShowCart(c: Context): Promise<Response> {
      return await this.$render(c, import(/* not created yet */"cart"), {});
    }
  
    async $onPostGetCart(c: Context): Promise<Response> {
      const session = await this.ss.$get(c) || {};
      const cart = session.cart || []; //FIX : TODO: sessin.cart !!!!!!!!!!!!!!!
      return c.json({ cart });
    }
  
    async $onPostAddToCart(c: Context): Promise<Response> {
      const payload = await c.req.json();
      
      // Validation (simplified - you might want to use a validation library)
      const requiredFields = [
        'inventory_id', 'title', 'particulars', 'quantity',
        'uom_id', 'currency_id', 'price', 'total',
        'product_media_path', 'link_product_slug', 'list_price'
      ];
  
      for (const field of requiredFields) {
        if (!payload[field]) {
          return c.json({ errors: { [field]: ['This field is required'] } }, 422);
        }
      }
  
      const cartItem: CartItem = {
        inventory_id: payload.inventory_id,
        title: payload.title,
        particulars: payload.particulars,
        quantity: payload.quantity,
        uom_id: payload.uom_id,
        currency_id: payload.currency_id,
        rate: payload.rate,
        total: payload.total,
        product_media_path: payload.product_media_path,
        link_product_slug: payload.link_product_slug,
        list_price: payload.list_price
      };
  
      const session = await this.ss.$get(c) || {};
      const cart: Record<string, CartItem> = session.cart || {};
      const itemKey = cartItem.inventory_id.toString();
      cart[itemKey] = cartItem;
  
      await this.ss.$update(c, { cart });
      return c.json({ 
        status: "SUCCESS", 
        message: 'Item added/updated to cart', 
        cart 
      }, 201);
    }
  
    async $onPostUpdateCart(c: Context): Promise<Response> {
      const payload = await c.req.json();
      
      if (!payload.quantity || payload.quantity < 1) {
        return c.json({ 
          errors: { quantity: ['Quantity is required and must be at least 1'] } 
        }, 422);
      }
  
      if (!payload.inventory_id) {
        return c.json({ 
          errors: { inventory_id: ['Product variant ID is required'] } 
        }, 422);
      }
  
      const session = await this.ss.$get(c) || {};
      const cart: Record<string, CartItem> = session.cart || {};
      const itemKey = payload.inventory_id.toString();
  
      if (!cart[itemKey]) {
        return c.json({ error: 'Item not found in cart' }, 404);
      }
  
      cart[itemKey].quantity = payload.quantity;
      await this.ss.$update(c, { cart });
  
      return c.json({ message: 'Cart item updated', cart });
    }
  
    async $onPostRemoveFromCart(c: Context): Promise<Response> {
      const payload = await c.req.json();
      
      if (!payload.inventory_id) {
        return c.json({ 
          errors: { inventory_id: ['Product variant ID is required'] } 
        }, 422);
      }
  
      const session = await this.ss.$get(c) || {};
      const cart: Record<string, CartItem> = session.cart || {};
      const itemKey = payload.inventory_id.toString();
  
      if (!cart[itemKey]) {
        return c.json({ error: 'Item not found in cart' }, 404);
      }
  
      delete cart[itemKey];
      await this.ss.$update(c, { cart });
  
      return c.json({ message: 'Item removed from cart', cart });
    }
  
  
      





  
    getRoutes(): [string | string[], string, (c: Context) => Promise<Response>][] {
      return [
        ["get", "/", this.$onGetIndex],//NOT WORKING

        ["get", "/info/company", this.$onGetInfoCompany],
        ["get", "/info/career", this.$onGetInfoCareer],
        ["get", "/info/about", this.$onGetInfoAbout],
        ["get", "/info/help", this.$onGetInfoHelp],
        ["get", "/info/value", this.$onGetInfoValue],
        ["get", "/info/payment", this.$onGetInfoPayment],
        ["get", "/info/shipping", this.$onGetInfoShipping],
        ["get", "/info/return", this.$onGetInfoReturn],
        ["get", "/info/faq", this.$onGetInfoFaq],
        ["get", "/info/checkout", this.$onGetInfoCheckout],
        ["get", "/info/opportunity", this.$onGetInfoOpportunity],
        ["get", "/info/entrepreneur", this.$onGetInfoEntrepreneur],
        ["get", "/info/earning", this.$onGetInfoEarning],
        ["get", "/info/idea", this.$onGetInfoIdea],
        ["get", "/info/retailer", this.$onGetInfoRetailer],
        ["get", "/info/gift-card", this.$onGetInfoGiftCard],
        ["get", "/info/promo-and-coupon", this.$onGetInfoPromo],
        ["get", "/info/ad", this.$onGetInfoAd],
        ["get", "/info/contact", this.$onGetInfoContact],

        ['get', "/shopping/category/page/:page", this.$onGetCategoryPaginator],
        ['get', "/shopping/category/:categorySlug/page/:pageNum", this.$onGetCategorySinglePaginator],
        ['get', "/shopping/product/page/:page", this.$onGetProductPaginator],
        ['get', "/shopping/product-variant/:variantSlug", this.$viewProductVariant],
    
        ['get', "/shopping/brand/page/:page", this.$onGetBrandPaginator],

        ['post', "/shopping/brand/:brandSlug/:extra?", this.$paginateProductsByBrand],
        ['get', "/shopping/brand/:brandSlug/page/:pageNum/*", this.$onGetBrandSinglePaginator],

        
    
        // Route::post('/shopping/cart/add', [CartController::class, 'add']);
        ['post', "/shopping/cart/add", this.$onPostAddToCart],
        // Route::post('/shopping/cart/get', [CartController::class, 'get']);
        ['post', "/shopping/cart/get", this.$onPostGetCart],
        // Route::post('/shopping/cart/update', [CartController::class, 'update']);
        ['post', "/shopping/cart/update", this.$onPostUpdateCart],
        // Route::post('/shopping/cart/remove', [CartController::class, 'remove']);
        ['post', "/shopping/cart/remove", this.$onPostRemoveFromCart],
        // Route::post('/shopping/cart/clear', [CartController::class, 'clear']);
        ['post', "/shopping/cart/clear", this.$onPostDestroyCart],
        
        

        ['post', "/shopping/search", this.$onPostGlobalSearch],
            
    
    
      ];

    }
}
