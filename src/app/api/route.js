import { Client } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

client.connect();

export async function GET() {
    try {
          const result = await client.query('SELECT * FROM public.tbl_users');
          return new Response(JSON.stringify(result.rows), {
              status: 200,
              headers: { "Content-Type": "application/json" },
          });
    } catch (error) {
      
          return new Response(JSON.stringify({ error: error }), {
              status: 500,
              headers: { "Content-Type": "application/json" },
          });
    }
  }

