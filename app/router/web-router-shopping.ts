// FILE: web-router-platform.ts

import { Hono } from "hono";
import { PlatformController } from "../controller/platform-controller";
import { ShoppingController } from "../controller/shopping-controller";
import { Router } from "paykhom-fw/container/router";
import { WebEngine } from "paykhom-fw/container/engine/web-engine";

export class WebRouterShopping extends Router {
  private app!: WebEngine;
  private platformController: PlatformController;
  private shoppingController: ShoppingController;

  constructor(config: Record<string, any> = {}) {
    super(config);
    this.platformController = new PlatformController();
    this.shoppingController = new ShoppingController();
  }


  async uponReady(): Promise<void> {
    this.app = this.resolve("app") as WebEngine;

    await this.platformController.uponReady();
    await this.shoppingController.uponReady();

    this.app.get("/shopping/category/page/:page", async (c) => await this.shoppingController.onGetCategoryPaginator(c));
    this.app.get("/shopping/category/:categorySlug/page/:pageNum", async (c) => await this.shoppingController.onGetCategorySinglePaginator(c));
    this.app.get("/shopping/product/page/:page", async (c) => await this.shoppingController.onGetProductPaginator(c));
    this.app.get("/shopping/product-variant/:variantSlug", async (c) => await this.shoppingController.viewProductVariant(c));

    this.app.get("/shopping/brand/page/:page", async (c) => await this.shoppingController.onGetBrandPaginator(c));
    this.app.get("/shopping/brand/:brandSlug/page/:pageNum/*", async (c) => await this.shoppingController.onGetBrandSinglePaginator(c));


    // PHP
    // Route::post('/shopping/cart/add', [CartController::class, 'add']);
    this.app.post("/shopping/cart/add", async (c) => await this.shoppingController.onPostAddToCart(c));
    // Route::post('/shopping/cart/get', [CartController::class, 'get']);
    this.app.post("/shopping/cart/get", async (c) => await this.shoppingController.onPostGetCart(c));
    // Route::post('/shopping/cart/update', [CartController::class, 'update']);
    this.app.post("/shopping/cart/update", async (c) => await this.shoppingController.onPostUpdateCart(c));
    // Route::post('/shopping/cart/remove', [CartController::class, 'remove']);
    this.app.post("/shopping/cart/remove", async (c) => await this.shoppingController.onPostRemoveFromCart(c));
    // Route::post('/shopping/cart/clear', [CartController::class, 'clear']);
    this.app.post("/shopping/cart/clear", async (c) => await this.shoppingController.onPostDestroyCart(c));
    
    
    // Route::post("/shopping/category/{categorySlug}/{extra?}", [ShoppingController::class, "paginateProductsByCategory"])->where('extra', '.*');
    this.app.post("/shopping/category/:categorySlug/page/:pageNum", async (c) => await this.shoppingController.paginateProductsByCategory(c));
    // Route::post("/shopping/brand/{brandSlug}/{extra?}", [ShoppingController::class, "paginateProductsByBrand"])->where('extra', '.*');
    this.app.post("/shopping/brand/:brandSlug/:extra?", async (c) => await this.shoppingController.paginateProductsByBrand(c));

    this.app.post("/shopping/search", async (c) => await this.shoppingController.onPostGlobalSearch(c));


  
    

//PHP
// Route::get('/shopping/category/page/{page}', [ShoppingController::class, "paginate"]);

// Route::get('/shopping/product/{productSlug}', [ShoppingController::class, "viewProduct"]);
// Route::get('/shopping/product-variant/{variantSlug}', [ShoppingController::class, "viewProductVariant"]);

// Route::get('/shopping/brand/page/{page}', [ShoppingController::class, "paginateBrands"]);
// Route::get("/shopping/brand/{brandSlug}/{extra?}", [ShoppingController::class, "paginateProductsByBrand"])->where('extra', '.*');










    // Startup routes
    // this.app.get("/startup", async (c) => await this.platformController.onGetStartupIndex(c));
    // this.app.get("/startup/website", async (c) => await this.platformController.onGetStartupWebsite(c));
    // this.app.get("/startup/website/theme", async (c) => await this.platformController.onGetStartupWebsiteTheme(c));
    // this.app.get("/startup/website/apps", async (c) => await this.platformController.onGetStartupWebsiteApps(c));
    // this.app.get("/startup/website/domains", async (c) => await this.platformController.onGetStartupWebsiteDomains(c));
    // this.app.get("/startup/website/tools", async (c) => await this.platformController.onGetStartupWebsiteTools(c));

    // Sell routes
    // this.app.get("/sell", async (c) => await this.platformController.onGetSell(c));
    // this.app.get("/sell/checkout", async (c) => await this.platformController.onGetSellCheckout(c));
    // this.app.get("/sell/online", async (c) => await this.platformController.onGetSellOnline(c));
    // this.app.get("/sell/channels", async (c) => await this.platformController.onGetSellChannel(c));
    // this.app.get("/sell/pos", async (c) => await this.platformController.onGetSellPos(c));
    // this.app.get("/sell/international", async (c) => await this.platformController.onGetSellInternational(c));
    // this.app.get("/sell/b2b-ecommerce", async (c) => await this.platformController.onGetSellB2B(c));
    // this.app.get("/sell/payments", async (c) => await this.platformController.onGetSellPayment(c));

    // Market routes
    // this.app.get("/market", async (c) => await this.platformController.onGetMarket(c));
    // this.app.get("/market/facebook-instagram", async (c) => await this.platformController.onGetMarketFacebookInstagram(c));
    // this.app.get("/market/inbox", async (c) => await this.platformController.onGetMarketInbox(c));
    // this.app.get("/market/email-marketing", async (c) => await this.platformController.onGetMarketEmailMarketing(c));

    // Info routes
    // this.app.get("/info/segmentation", async (c) => await this.platformController.onGetSegmentation(c));
    // this.app.get("/info/manage", async (c) => await this.platformController.onGetManage(c));
    // this.app.get("/info/finance", async (c) => await this.platformController.onGetFinance(c));
    // this.app.get("/info/analytics", async (c) => await this.platformController.onGetAnalytics(c));
    // this.app.get("/info/shipping", async (c) => await this.platformController.onGetShipping(c));
    // this.app.get("/info/orders", async (c) => await this.platformController.onGetOrders(c));
    // this.app.get("/info/fulfillment", async (c) => await this.platformController.onGetFulfillment(c));
    // this.app.get("/info/flow", async (c) => await this.platformController.onGetFlow(c));
    // this.app.get("/info/help", async (c) => await this.platformController.onGetHelp(c));
    // this.app.get("/info/popular-topics", async (c) => await this.platformController.onGetPopularTopics(c));
    // this.app.get("/info/essential-tools", async (c) => await this.platformController.onGetEssentialTools(c));
    // this.app.get("/info/pricing", async (c) => await this.platformController.onGetPricing(c));
    // this.app.get("/info/enterprise", async (c) => await this.platformController.onGetEnterprise(c));    
 

/*PHP
Route::post('/shopping/cart/add', [CartController::class, 'add']);
Route::post('/shopping/cart/get', [CartController::class, 'get']);
Route::post('/shopping/cart/update', [CartController::class, 'update']);
Route::post('/shopping/cart/remove', [CartController::class, 'remove']);
Route::post('/shopping/cart/clear', [CartController::class, 'clear']);

Route::post("/shopping/category/{categorySlug}/{extra?}", [ShoppingController::class, "paginateProductsByCategory"])->where('extra', '.*');
Route::post("/shopping/brand/{brandSlug}/{extra?}", [ShoppingController::class, "paginateProductsByBrand"])->where('extra', '.*');

Route::get( "/db/ecom/attrib_value/search/{category_id}", function ($category_id)  {
  
    // Arguments to pass to the stored function
    $config = [
              'category_id' => $category_id
    ];
  
        // Call the PostgreSQL stored function
    $result = PgsqlDbModel::fn('ecom.attrib_value__search', $config);
    //dd($result);
    
    //return view("CategorySingle", ["pro" => $result->ret_data]);
    return response()->json($result);
  
  });
  
  

  Route::post( "/shopping/search", function ()  {
    $payload = (request()->json()->all());
    
    // Arguments to pass to the stored function
    $config = [
              'search' => $payload['search']
    ];
  
        // Call the PostgreSQL stored function
    $result = PgsqlDbModel::fn('ecom.__search_global_storefront', $config);
    //dd($result);
    
    //return view("CategorySingle", ["pro" => $result->ret_data]);
    return response()->json($result);
  
  });


  


  



*/






 
 
 
 
 
  }







}