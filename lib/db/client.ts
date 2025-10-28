import { createClient } from '@libsql/client';

// Validate environment variables
const TURSO_DATABASE_URL = process.env.TURSO_DATABASE_URL;
const TURSO_AUTH_TOKEN = process.env.TURSO_AUTH_TOKEN;

if (!TURSO_DATABASE_URL) {
  throw new Error(
    'TURSO_DATABASE_URL environment variable is required. Please check your .env.local file.'
  );
}

if (!TURSO_AUTH_TOKEN) {
  throw new Error(
    'TURSO_AUTH_TOKEN environment variable is required. Please check your .env.local file.'
  );
}

// Create and export Turso database client
export const db = createClient({
  url: TURSO_DATABASE_URL,
  authToken: TURSO_AUTH_TOKEN,
});

// Test connection helper (optional)
export async function testConnection() {
  try {
    await db.execute('SELECT 1');
    console.log('✅ Database connection successful');
    return true;
  } catch (error) {
    console.error('❌ Database connection failed:', error);
    return false;
  }
}
