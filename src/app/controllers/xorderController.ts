import { Logger } from "../../core/infrastructure/logging/logger";
import { Order } from "../models/order";
import { OrderService } from "../services/orderService";
import { OrderView } from "../views/orderView";
import { Controller } from "./baseController";

export class OrderController extends Controller {

    constructor() {
        super()
    }

    // async handleOrder(order: Order): Promise<void> {
    //     this.logger.log(`Order received for processing: ${order.orderId}`);
    //     await this.orderService.processOrder(order);
    //     this.orderView.displayOrder(order);
    // }
}