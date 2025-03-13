// FILE: cart-controller.ts

import { BaseController as Controller } from "./base-controller";
import { Context } from "hono";
import { SessionService, UserSession } from 'paykhom-fw/container/service/session-service';

// Define the cart item interface
interface CartItem {
  product_variant_id: number;
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

export class CartController extends Controller {
  private ss!: SessionService<UserSession>;

  constructor(args: Record<string, any> = {}) {
    super(args);
    //this.ss = deps.sessionService as SessionService<UserSession>;
  }

  async uponReady(): Promise<void> {
    this.ss = this.resolve("sessionService");
  }


  async createCart(c: Context): Promise<Response> {
    await this.ss.updateSession(c, { cart: [] });
    return c.json({ message: 'Cart created' }, 201);
  }

  async destroyCart(c: Context): Promise<Response> {
    await this.ss.updateSession(c, { cart: null });
    return c.json({ message: 'Cart destroyed' });
  }

  async showCart(c: Context): Promise<Response> {
    return await this.render(c, "cart", {});
  }

  async getCart(c: Context): Promise<Response> {
    const session = await this.ss.getSession(c) || {};
    const cart = session.cart || [];
    return c.json({ cart });
  }

  async addToCart(c: Context): Promise<Response> {
    const payload = await c.req.json();
    
    // Validation (simplified - you might want to use a validation library)
    const requiredFields = [
      'product_variant_id', 'title', 'particulars', 'quantity',
      'uom_id', 'currency_id', 'rate', 'total',
      'product_media_path', 'link_product_slug', 'list_price'
    ];

    for (const field of requiredFields) {
      if (!payload[field]) {
        return c.json({ errors: { [field]: ['This field is required'] } }, 422);
      }
    }

    const cartItem: CartItem = {
      product_variant_id: payload.product_variant_id,
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

    const session = await this.ss.getSession(c) || {};
    const cart: Record<string, CartItem> = session.cart || {};
    const itemKey = cartItem.product_variant_id.toString();
    cart[itemKey] = cartItem;

    await this.ss.updateSession(c, { cart });
    return c.json({ 
      status: "SUCCESS", 
      message: 'Item added/updated to cart', 
      cart 
    }, 201);
  }

  async updateCart(c: Context): Promise<Response> {
    const payload = await c.req.json();
    
    if (!payload.quantity || payload.quantity < 1) {
      return c.json({ 
        errors: { quantity: ['Quantity is required and must be at least 1'] } 
      }, 422);
    }

    if (!payload.product_variant_id) {
      return c.json({ 
        errors: { product_variant_id: ['Product variant ID is required'] } 
      }, 422);
    }

    const session = await this.ss.getSession(c) || {};
    const cart: Record<string, CartItem> = session.cart || {};
    const itemKey = payload.product_variant_id.toString();

    if (!cart[itemKey]) {
      return c.json({ error: 'Item not found in cart' }, 404);
    }

    cart[itemKey].quantity = payload.quantity;
    await this.ss.updateSession(c, { cart });

    return c.json({ message: 'Cart item updated', cart });
  }

  async removeFromCart(c: Context): Promise<Response> {
    const payload = await c.req.json();
    
    if (!payload.product_variant_id) {
      return c.json({ 
        errors: { product_variant_id: ['Product variant ID is required'] } 
      }, 422);
    }

    const session = await this.ss.getSession(c) || {};
    const cart: Record<string, CartItem> = session.cart || {};
    const itemKey = payload.product_variant_id.toString();

    if (!cart[itemKey]) {
      return c.json({ error: 'Item not found in cart' }, 404);
    }

    delete cart[itemKey];
    await this.ss.updateSession(c, { cart });

    return c.json({ message: 'Item removed from cart', cart });
  }
}