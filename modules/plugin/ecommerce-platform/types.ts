// src/plugins/ecommercePlatform/types.ts
export interface Product {
    id: string;
    name: string;
    price: number;
    stock: number;
  }
  
  export interface Cart {
    userId: string;
    items: { productId: string; quantity: number }[];
  }
  
