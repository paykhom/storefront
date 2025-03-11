import { Order } from "../models/order";
import { Logger } from "../../core/infrastructure/logging/logger";
import { OrderRepository } from "../interfaces/orderRepository";

export class OrderService {
    constructor(private logger: Logger, private orderRepository: OrderRepository) { }

    async processOrder(order: Order): Promise<void> {
        this.logger.log(`Processing order with id ${order.orderId}`);
        // Some logic with no repositories involved
        setTimeout(() => {
            this.logger.log(`Order ${order.orderId} processed successfully`);
         }, 1000);
    }
}