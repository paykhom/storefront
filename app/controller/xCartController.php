<?php

namespace App\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\Response;
use App\Models\Product;

class CartController extends Controller
{

    public function create()
    {
        Session::put('cart', []); // Update the cart in session

    }

    public function destory()
    {
      session()->delete('cart'); // Assuming delete is the method to delete a session item
    }

    /**
  * Display the cart view page
  */
    public function showCart()
    {
      return view('cart'); // Assuming 'cart' is the name of your blade template
    }


   /**
     * Display the cart contents.
     * @return \Illuminate\Http\JsonResponse
     */
    public function get()
    {
        $cart = Session::get('cart', []);
        return response()->json(['cart' => $cart]);
    }

    /**
     * Add an item to the cart or update the quantity if the item exists.
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function add(Request $request)
    {
        // Validation
        $validator = Validator::make($request->all(), [
            'product_variant_id' => 'required|integer',
            'title' => 'required|string',
            'particulars' => 'required|string',
            'quantity' => 'required|decimal:4',
            'uom_id' => 'required|integer|min:1',
            'currency_id' => 'required|integer|min:1',
            'rate' => 'required|decimal:4',
            'total' => 'required|decimal:4',

            'product_media_path' => 'required|string',
            'link_product_slug' => 'required|string',
            'list_price' => 'required|decimal:4',
            
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        $payload = $request->json()->all();

        $cartItem = [
            'product_variant_id' => $payload['product_variant_id'],
            'title' => $payload['title'],
            'particulars' => $payload['particulars'],
            'quantity' => $payload['quantity'],
            'uom_id' => $payload['uom_id'],
            'currency_id' => $payload['currency_id'],
            'rate' => $payload['rate'],
            'total' => $payload['total'],

            'product_media_path' => $payload['product_media_path'],
            'link_product_slug' => $payload['link_product_slug'],
            'list_price' => $payload['list_price'],

        ];


        $cart = Session::get('cart', []);
        
        $itemKey = $cartItem['product_variant_id'];

        /* IF REALLY EXISTS IN DB
        // Get product information
        $product = Product::find($productVariantId);

        if (!$product) {
            return response()->json(['error' => 'Product not found'], Response::HTTP_NOT_FOUND);
        }
        */


        //FIX: if else : all the same: refactor!
        /*
        if($itemKey !== false){
          // Item already in cart, update the quantity
            $cart[$itemKey] = $cartItem;
        } 
        else {
            // Item not in cart, add it
           $cart[$itemKey] = $cartItem;
        }
        */
        $cart[$itemKey] = $cartItem;
        Session::put('cart', $cart); // Update the cart in session

        return response()->json(['status' => "SUCCESS", 'message' => 'Item added/updated to cart', 'cart' => $cart], Response::HTTP_CREATED); // Send a message and the current cart as response
    }

    /**
     * Update the quantity of a specific item in the cart.
     * @param  \Illuminate\Http\Request  $request
     * @param  int $itemId
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request)
    {
       // Validation
       $payload = request()->json()->all();
       $validator = Validator::make($payload, [
           'quantity' => 'required|integer|min:1',
       ]);

       if ($validator->fails()) {
           return response()->json(['errors' => $validator->errors()], Response::HTTP_UNPROCESSABLE_ENTITY);
       }

       //$payload = request()->json()->all(); 
       $quantity = $payload['quantity'];
       $cart = Session::get('cart', []);

       // Find cart item by item id (which is equal to product_variant_id here)
       $itemKey = $payload["product_variant_id"]; //array_search((int)$itemId, array_column($cart, 'product_variant_id'));

       if ($itemKey === false) {
           return response()->json(['error' => 'Item not found in cart'], Response::HTTP_NOT_FOUND);
       }

       $cart[$itemKey]['quantity'] = $quantity;
       Session::put('cart', $cart);

       return response()->json(['message' => 'Cart item updated', 'cart' => $cart]);
    }


     /**
      * Remove a specific item from the cart
      * @param int $itemId
      * @return \Illuminate\Http\JsonResponse
      */
     public function remove()
     {
        $payload = request()->json()->all();
        $itemKey = $payload['product_variant_id'];
         $cart = Session::get('cart', []);
         
         // Find cart item by item id (which is equal to product_variant_id here)
         //$itemKey = array_search((int)$itemId, array_column($cart, 'product_variant_id'));


         if ($itemKey === false) {
           return response()->json(['error' => 'Item not found in cart'], Response::HTTP_NOT_FOUND);
         }

         unset($cart[$itemKey]);
         //no no no no: $cart = array_values($cart); // Re-index the array to remove gaps in index due to `unset`
         Session::put('cart', $cart); // Update session

         return response()->json(['message' => 'Item removed from cart', 'cart' => $cart]);
     }

}
