import { BaseController as Controller } from "./baseController";
import { PostgresqlClientService } from "../services/postgresqlClientService";

import { Context } from 'hono';

export class PostgresqlController extends Controller {
    private postgresqlClientService: PostgresqlClientService;


    constructor(args: any) {
        super(args);
        this.postgresqlClientService = new PostgresqlClientService();
    }


    // async fx(schemaName: string, className: string, methodName: string): Promise<void> {
    //     // this.logger.log(`Order received for processing: ${order.orderId}`);
    //     // await this.orderService.processOrder(order);
    //     // this.orderView.displayOrder(order);


    // }

    async fn(ctx: Context): Promise<any> {
        try {
            // Extract route parameters
            const fn = ctx.req.param('fn');

            // Extract payload from the request body
            const payload = await ctx.req.json();

            //console.log(`payload: ${payload}`);

            // Construct the PostgreSQL function name
            const functionName = `${fn}`;
            //console.log(`function: ${functionName}`);

            // Call the PostgreSQL stored function using the PostgresqlClientService
            const result = await this.postgresqlClientService.fx(functionName, payload);
            //console.log(`result: ${result}`);

            //console.log(`Contoller: result sent: ${result}`);

            // Send the response back to the client
            return ctx.json(result);
            

        } 
        catch (error) {
            // this.logger.error(`Error in PostgresqlController.fn: ${error.message}`);
            // ctx.status(500);
            // ctx.json({ success: false, error: error.message });

            // Narrow down the type of `error` to `Error`
            if (error instanceof Error) {
                this.logger.error(`Error in PostgresqlController.fn: ${error.message}`);
                ctx.status(500);
                return ctx.json({ success: false, error: error.message });
            } 
            else {
                // Handle cases where `error` is not an Error object
                this.logger.error(`Unknown error in PostgresqlController.fn: ${error}`);
                ctx.status(500);
                return ctx.json({ success: false, error: 'An unknown error occurred' });
            }            
        }
    }


    async fnzc(ctx: Context): Promise<any> {
        try {
            // Extract route parameters
            const fn = ctx.req.param('fn');

            // Extract payload from the request body
            const payload = await ctx.req.json();

            //console.log(`payload: ${payload}`);

            // Construct the PostgreSQL function name
            const functionName = `${fn}`;
            //console.log(`function: ${functionName}`);

            // Call the PostgreSQL stored function using the PostgresqlClientService
            const result = await this.postgresqlClientService.fxzc(functionName, payload);
            //console.log(`result: ${result}`);

            //console.log(`Contoller: result sent: ${result}`);

            // Send the response back to the client
            //return ctx.json(result);
            
            return ctx.body(result, 200, {
                'Content-Encoding': 'deflate',
                'Content-Type': 'application/octet-stream',
            });            

        } 
        catch (error) {
            // this.logger.error(`Error in PostgresqlController.fn: ${error.message}`);
            // ctx.status(500);
            // ctx.json({ success: false, error: error.message });

            // Narrow down the type of `error` to `Error`
            if (error instanceof Error) {
                //this.logger.error(`Error in PostgresqlController.fn: ${error.message}`);
                ctx.status(500);
                //no! return ctx.json({ success: false, error: error.message });
                //pending: return ctx.html(...);
            } 
            else {
                // Handle cases where `error` is not an Error object
                //this.logger.error(`Unknown error in PostgresqlController.fn: ${error}`);
                ctx.status(500);
                //no! return ctx.json({ success: false, error: 'An unknown error occurred' });
                //pending: return ctx.html(...);
            }            
        }
    }
    


}