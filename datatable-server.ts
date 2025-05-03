import { Hono } from 'hono';
import { Client } from 'pg';
import { z } from 'zod';

const app = new Hono();

const dbConfig = {
  user: 'postgres',
  password: 'adminxp123.com',
  database: 'paykhom',
  host: 'localhost',
};

// Zod schema for DataTables params
const dtParamsSchema = z.object({
  draw: z.string().transform(Number).pipe(z.number().min(0)),
  start: z.string().transform(Number).pipe(z.number().min(0)),
  length: z.string().transform(Number).pipe(z.number().min(1).max(1000)),
  search: z.object({
    value: z.string().default(''),
    regex: z.boolean().default(false),
  }).default({ value: '', regex: false }),
  order: z.array(
    z.object({
      column: z.number().min(0),
      dir: z.enum(['asc', 'desc']),
    })
  ).default([]),
  columns: z.array(
    z.object({
      data: z.number().min(0),
      name: z.string().default(''),
      searchable: z.boolean().default(true),
      orderable: z.boolean().default(true),
      search: z.object({
        value: z.string().default(''),
        regex: z.boolean().default(false),
      }).default({ value: '', regex: false }),
    })
  ).default([]),
});

const logger = {
  info: (msg: string) => console.log(`[INFO] ${new Date().toISOString()} - ${msg}`),
  error: (msg: string, err?: Error) => console.error(`[ERROR] ${new Date().toISOString()} - ${msg}`, err),
};

interface ColumnConfig {
  db: string;
  dt: number;
  searchable?: boolean;
  formatter?: (value: any, row: any) => any;
}

class DataTableServer {
  private db: Client;

  constructor(dbConfig: { user: string; password: string; database: string; host: string }) {
    this.db = new Client(dbConfig);
  }

  async connect() {
    try {
      await this.db.connect();
      logger.info('Database connected');
    } catch (err) {
      logger.error('Database connection failed', err as Error);
      throw new Error('Failed to connect to database');
    }
  }

  async disconnect() {
    try {
      await this.db.end();
      logger.info('Database disconnected');
    } catch (err) {
      logger.error('Database disconnection failed', err as Error);
    }
  }

  async process(rawParams: any, tableName: string, columns: ColumnConfig[], whereAll?: string, whereResult?: string) {
    const parseResult = dtParamsSchema.safeParse(rawParams);
    if (!parseResult.success) {
      logger.error('Invalid DataTables parameters', parseResult.error);
      return {
        draw: parseInt(rawParams.draw || '0', 10),
        recordsTotal: 0,
        recordsFiltered: 0,
        data: [],
        error: 'Invalid request parameters',
      };
    }

    const params = parseResult.data;

    // Construct JSONB input for stored function
    const inputJson = {
      table_name: tableName,
      draw: params.draw,
      start: params.start,
      length: params.length,
      search: params.search.value || null,
      columns: columns.map(col => ({
        db: col.db,
        dt: col.dt,
        searchable: col.searchable !== false,
      })),
      order: params.order,
      column_searches: params.columns
        .filter(col => col.search.value)
        .map(col => ({
          dt: col.data,
          value: col.search.value,
          regex: col.search.regex,
        })),
      where_all: whereAll || null,
      where_result: whereResult || null,
    };

    await this.connect();
    try {
      const result = await this.db.query({
        text: 'SELECT fw.ssp4dt($1::jsonb) AS result',
        values: [JSON.stringify(inputJson)],
      });
      const response = result.rows[0].result;

      // Apply formatters to the data
      if (response.data && Array.isArray(response.data)) {
        response.data = response.data.map((row: any) => {
          const formattedRow: any = {};
          columns.forEach(col => {
            const value = row[col.db];
            formattedRow[col.dt] = col.formatter ? col.formatter(value, row) : value;
          });
          return formattedRow;
        });
      }

      return response;
    } catch (err) {
      logger.error('Stored function call failed', err as Error);
      return {
        draw: params.draw,
        recordsTotal: 0,
        recordsFiltered: 0,
        data: [],
        error: 'Database error',
      };
    } finally {
      await this.disconnect();
    }
  }
}

const dtServer = new DataTableServer(dbConfig);

// Example configuration
const dtConfig = {
  tableName: 'employees',
  columns: [
    { db: 'first_name', dt: 0, searchable: true },
    { db: 'last_name', dt: 1, searchable: true },
    { db: 'position', dt: 2, searchable: true },
    { db: 'office', dt: 3, searchable: true },
    { db: 'start_date', dt: 4, formatter: (d) => new Date(d).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' }) },
    { db: 'salary', dt: 5, formatter: (d) => `$${Number(d).toLocaleString()}` },
  ],
  whereAll: 'active = true', // Example: restrict to active employees
  whereResult: 'salary > 50000', // Example: filter results further
};

app.get('/data', async (c) => {
  const rawParams = c.req.query();
  const response = await dtServer.process(rawParams, dtConfig.tableName, dtConfig.columns, dtConfig.whereAll, dtConfig.whereResult);
  return c.json(response);
});

Bun.serve({
  fetch: app.fetch,
  port: 3000,
  hostname: "0.0.0.0" // or your specific IP/domain

});

console.log('Server running on http://192.168.1.3:3000/data');