export interface OrderItem {
  productId: string;
  quantity: number;
}
export interface Order {
orderId: string;
  userId: string;
 items: OrderItem[];
total: number;
status: string
}
