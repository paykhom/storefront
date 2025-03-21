<?php

namespace App\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Cookie;
use App\Models\User;
use App\Models\Role;
use App\Models\UserRole;
use Core\Infrastructure\PgsqlDbModel;

class ShoppingController extends Controller
{
    public function onGetIndex()
    {
        $page = 1;
        $limit = 24;
        $offset = (($page - 1) * $limit);
        $params = ["do_count" => true, "limit" => $limit, "offset" => $offset]; // Fix request parameters handling
        $res = PgsqlDbModel::fn('ecom.category__list', $params);
        $cat = ($res["ret_data"]);
        $rowCount = $res["row_count"];
        $totalPages = ceil($rowCount / $limit);
        
        $htmlPagination = $this->generateSmartPagination("/shopping/category", $page, $totalPages);

        //return view('Shopping/CategoryAll', ['test'=> ["a" => "b"], 'cat' => $cat, "paginationHtml" => $htmlPagination, ]);



        $searchResult = PgsqlDbModel::fn('ecom.product_variant__search', ["order_by" => "idh2l", "limit" => 12]);
        if (isset($searchResult["is_error"])) {
            $resp = 'Internal Server Error: ' . $searchResult["__db_error__"]["error"] . '\n';
            return response($resp, 500);
        }
        //var_dump($searchResult["sql"]);

        
        // Call the PostgreSQL stored functions
        $products = $searchResult["ret_data"]?? [];
        //$attribs = PgsqlDbModel::fn('ecom.attrib_value__search', ['category_slug' => $categorySlug])["ret_data"];
        $attribs = $searchResult["pvav"]?? [];
        



        return view('Index', ['test'=> ["a" => "b"], 'cat' => $cat, "products" => $products, "attribs" => $attribs, "paginationHtml" => $htmlPagination, ]);
    }


    public function getProducts(Request $request)
    {
        // Sample parameter
        $param = [
            'category_slug' => 'component'
        ];

        // Call a stored procedure or a query (e.g., using DB facade)
        $pro = DB::select('SELECT * FROM ecom_product_variant__search(:category_slug)', $param);

        // Log or debug data if necessary
        // logger($pro);

        // Return a view with the data
        return view('category.single', ['pro' => $pro]);
    }


    private function searchProductVariants($src, $slug, $extra) {
        $request = request(); 
        // $rc = $request->getContent();
        // $rj = $request->json();

            /*
            USAGE:
            /shopping/category/{category}/page/{page}/limit/{limit}/order/{order}/view/{view}
            */
            $kv = [];
            $pvav = (object) [];
            $urlPrefix = "";
            
            if (!array_key_exists("page", session()->all())) {
                session(['page' => 1]); // Update session
                //$kv[$key] = $value; // Update the local variable
            }
            if (!array_key_exists("limit", session()->all())) {
                session(['limit' => 24]); 
                //$kv[$key] = $value; 
            }
            if (!array_key_exists("order", session()->all())) {
                session(['order' => 'pl2h']); 
                //$kv[$key] = $value; 
            }
            if (!array_key_exists("view", session()->all())) {
                session(['view' => 'grid']); 
                //$kv[$key] = $value; 
            }
          
            // Fetch current session values or use defaults if not set
            $kv = [
                'page' => session("page"),
                'limit' => session('limit'), // Session value or default to 2
                'order' => session('order'), // Session value or default to 'PL2H'
                'view' => session('view'), // Session value or default to 'grid'
            ];
          
            if ($request->isMethod('post')) {
                $productSearchParams = json_decode($request->getContent(), true); // $request->json()->all();
                $pvav = $productSearchParams["product"]["product_variant"]["product_variant_detail"];
                
                switch ($src) {
                    case "category":
                        session(["category_{$slug}_filters" => $pvav]); 
                        break;
                    case "brand":
                        session(["brand_{$slug}_filters" => $pvav]); 
                        break;
                    default:
                        
                }

                
                /*
                if (array_key_exists("category_{$categorySlug}_filters", session()->all())) {
                    session(["category_{$categorySlug}_filters" => $pvav]); 
                    //$kv[$key] = $value; 
                }
                else {
                    $pvav = [];
                    session(["category_{$categorySlug}_filters" => $pvav]); 
                }
                */
    
            }
            else {
                switch ($src) {
                    case "category":
                        $tmp = (object) session("category_{$slug}_filters");
                        $urlPrefix = "/shopping/category/";
                        break;
                    case "brand":
                        $tmp = (object) session("brand_{$slug}_filters");
                        $urlPrefix = "/shopping/brand/";
                        break;
                    default:
                        
                }

                //$pvav = $tmp ?? (object) []; //json_decode(json_encode([], JSON_FORCE_OBJECT), true); // yes, false, so that its object - not array.
                $pvav = (object) []; // always start afresh on GET
            }
          
            if ($extra) {
              $segmentsArray = explode('/', $extra);
              $segments = [];
          
              // Iterate through the array in steps of 2 (key-value pairs)
              for ($i = 0; $i < count($segmentsArray); $i += 2) {
                  if (isset($segmentsArray[$i + 1])) {
                      // Only add valid key-value pairs
                      $segments[$segmentsArray[$i]] = $segmentsArray[$i + 1];
                  }
              }
            } 
            else {
              $segments = []; // Return an empty array if $extra is falsy
            }  

            
            // Update session only for explicitly provided parameters
            foreach ($segments??[] as $key => $value) {
              if (array_key_exists($key, $kv)) {
                  session([$key => $value]); // Update session
                  $kv[$key] = $value; // Update the local variable
              }
            }
            

            /*
            foreach ($kv??[] as $k => $v) {
                if (array_key_exists($k, $segments)) {
                    session([$k => $segments[$k]]); // Update session
                    $kv[$k] = $segments[$k]; // Update the local variable
                }
              }
            */   
  
          
            //dd($kv);
          
            // Use the values from the session/local array
            $orderBy = $kv['order'];
            $limit = $kv['limit'];
            $page = $kv['page'];
            $viewType = $kv['view'];
            $offset = (($page - 1) * $limit);
          
            // required! quick hack
            if (is_array($pvav) && count($pvav) == 0) {
                $pvav = (object) []; // makes it an object

            }

            $pvsArgs = [
                "do_count" => "yes",
                "offset" => $offset,
                "limit" => $limit,
                "order_by" => $orderBy,
                "product" => [
                    "product_variant" => [
                        "product_variant_detail" => (object) $pvav
                    ]
                ]
            ];
            switch($src) {
                case "category":
                    $pvsArgs["product"]["category_slug"] = $slug;
                    break;
                case "brand":
                    $pvsArgs["product"]["brand_slug"] = $slug;
                    break;
                default:
                    
            }
                        
            
            $searchResult = PgsqlDbModel::fn('ecom.product_variant__search', $pvsArgs);
            if (isset($searchResult["is_error"])) {
                // $resp = 'Internal Server Error: ' . $searchResult["__db_error__"]["error"] . '\n';
                    $resp = 'Internal Server Error: ' . $searchResult["error_message"] . '\n';

                return response($resp, 500);
            }
            //var_dump($searchResult["sql"]);

            $rowCount = $searchResult["row_count"];
            $totalPages = ceil($rowCount / $limit);
            
            // Call the PostgreSQL stored functions
            $products = $searchResult["ret_data"];
            $sub_categories = $searchResult["sub_categories"];
            //$attribs = PgsqlDbModel::fn('ecom.attrib_value__search', ['category_slug' => $categorySlug])["ret_data"];
            $attribs = $searchResult["pvav"];
            

            $categories = PgsqlDbModel::fn('ecom.category__list', ["do_count" => true])["ret_data"];
          
            $options = [
                "productViewType" => $viewType, //session('productViewType', 'productGridView'),
                "limit" => $limit,
                "orderBy" => $orderBy,
                "rowCount" => $rowCount,
                "offset" => $offset,
                "currentPage" => $page,
                "totalPages" => $totalPages,
                "maxVisibleButtons" => 5,
                "slug" => $slug,
            ];
          
                                                
          
            if (request()->isMethod('get')) {
                  return view('Shopping/ProductVariantSearch', [
                    "src" => "category",
                    "attribs" => $attribs,
                    "products" => $products,
                    "categories" => $categories,
                    "sub_categories" => $sub_categories,
                    "category_title" => $searchResult["category_title"],
                    "category_description" => $searchResult["category_description"],
                    //"kv" => $kv,
                    "pvav" => $src == "category"? /*session("category_{$slug}_filters")*/ [] ?? [] : session("brand_{$slug}_filters") ?? [],
                    "paginationHtml" => $this->generateSmartPagination($urlPrefix . $slug, $page, $totalPages),
                    "options" => $options
                ]);
              } 
              elseif (request()->isMethod('post')) {
                return response()->json(["searchResult" => $searchResult, "paginationHtml" => $this->generateSmartPagination($urlPrefix . $slug, $page, $totalPages)]);
              }

    }


    // Handle web:GET and api:POST Methods for pagination
    public function paginateProductsByCategory($categorySlug, $extra){
        return $this->searchProductVariants("category", $categorySlug, $extra);
    }


    public function viewProduct($productSlug) {
        $params = ["product_slug" => $productSlug]; // Fix request parameters handling
        
        $res = PgsqlDbModel::fn('ecom.product__fetch', $params);
        $cat = ($res["ret_data"]);

        return view('Shopping/ProductSingle', []);

    }   

    public function viewProductVariant($variantSlug) {
        $params = ["product_variant_slug" => $variantSlug]; // Fix request parameters handling
        
        $res = PgsqlDbModel::fn('ecom.product_variant__fetch', $params);
        $ret_data = ($res["ret_data"]);

        return view('Shopping/ProductVariantSingle', ["product" => $ret_data]);
        // return view('ProductVariantSingle', ["product" => $ret_data]);

    }   

    public function paginate($page) {
        $limit = 24;
        $offset = (($page - 1) * $limit);
        $params = ["do_count" => true, "limit" => $limit, "offset" => $offset]; // Fix request parameters handling
        $res = PgsqlDbModel::fn('ecom.category__list', $params);
        $cat = ($res["ret_data"]);
        $rowCount = $res["row_count"];
        $totalPages = ceil($rowCount / $limit);
        
        $htmlPagination = $this->generateSmartPagination("/shopping/category", $page, $totalPages);

        return view('Shopping/CategoryAll', ['test'=> ["a" => "b"], 'cat' => $cat, "paginationHtml" => $htmlPagination, ]);

    }

    public function paginateBrands($page) {
        $limit = 24;
        $offset = (($page - 1) * $limit);
        $params = ["do_count" => true, "limit" => $limit, "offset" => $offset]; // Fix request parameters handling
        $res = PgsqlDbModel::fn('ecom.brand__list', $params);
        $brand = ($res["ret_data"]);
        $rowCount = $res["row_count"];
        $totalPages = ceil($rowCount / $limit);
        
        $htmlPagination = $this->generateSmartPagination("/shopping/brand", $page, $totalPages);

        return view('Shopping/BrandAll', ['test'=> ["a" => "b"], 'brand' => $brand, "paginationHtml" => $htmlPagination, ]);

    }

    public function paginateProductsByBrand($brandSlug, $extra){
        return $this->searchProductVariants("brand", $brandSlug, $extra);

    }
}

