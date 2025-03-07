import { Order } from "../models/order" //Updated import path
export interface OrderRepository {
  save(order: Order): Promise<void>;
  findById(id: string): Promise<Order | null>
}