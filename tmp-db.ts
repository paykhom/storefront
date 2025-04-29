import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'paykhom',
  password: 'adminxp123.com', // Replace with your PostgreSQL password
  port: 5432,
});

export class Database {
  static async query(text: string, params?: any[]) {
    const client = await pool.connect();
    try {
      const res = await client.query(text, params);
      return res;
    } finally {
      client.release();
    }
  }
}

(async () => {
  try {
    await pool.query('SELECT NOW()');
    console.log('Database connected');
  } catch (err) {
    console.error('Database connection error:', err);
  }
})();