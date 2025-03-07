import { Logger } from "../../core/logger";
import { Order } from "../models/order";

export class OrderProcessor {
    private logger: Logger;

    constructor(logger: Logger) {
        this.logger = logger;
    }

    processOrder(order: Order): void {
        this.logger.log(`Processing order: ${order.orderId}`);
        // Simulate order processing logic
        setTimeout(() => {
            this.logger.log(`Order ${order.orderId} processed successfully`);
        }, 1000);
    }
}