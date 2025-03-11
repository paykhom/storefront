import { Pool } from 'pg';
import { deflateSync } from 'zlib'; // Bun's built-in zlib

export class PostgresqlClientService {
    private pool: Pool;

    constructor() {
        this.pool = new Pool({
            user: 'postgres',
            host: 'localhost',
            database: 'paykhom',
            password: 'adminxp123.com',
            port: 5432,
        });
    }

    public async fx(functionName: string, payload: Record<string, any> = {}): Promise<any> {
        try {

            //console.log(`Service: functionName: ${functionName}`);
            //console.log(`Service: payload: ${payload}`);

            // Prepare the SQL query to call the PostgreSQL function
            const query = 'SELECT * FROM fw.route($1, $2)';

            // Execute the query
            const result = await this.pool.query(query, [functionName, payload]);
            //console.log(`Service: result: ${result}`);

            // Extract the `_out` field from the result and parse it as JSON
            return result.rows[0]._out || {};
        } 
        catch (error) {
            // Handle errors and return a structured error response
            return {
                is_error: true,
                __db_error__: {
                    error: error instanceof Error ? error.message : 'Unknown error',
                },
                error_message: error instanceof Error ? error.message : 'Unknown error',
                ret_val: 0,
                ret_data: [],
            };
        }
    }    

    public async fxzc(functionName: string, payload: Record<string, any> = {}): Promise<any> {
        try {

            //console.log(`Service: functionName: ${functionName}`);
            //console.log(`Service: payload: ${payload}`);

            // Prepare the SQL query to call the PostgreSQL function
            const query = 'SELECT * FROM fw.route($1, $2)';

            // Execute the query
            const result = await this.pool.query(query, [functionName, payload]);
            //console.log(`Service: result: ${result}`);

            // Extract the `_out` field from the result and parse it as JSON
            return result.rows[0]._out || {};
        } 
        catch (error) {
            
            // Catch block to return compressed error response
            const errorResponse = {
                is_error: true,
                __db_error__: {
                error: error instanceof Error ? error.message : 'Unknown error',
                },
                error_message: error instanceof Error ? error.message : 'Unknown error',
                ret_val: 0,
                ret_data: [],
            };
        
            // Compress the error response
            const compressedError = deflateSync(JSON.stringify(errorResponse));
        
            return compressedError;

        }
    }    

}