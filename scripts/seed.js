const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase environment variables.');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function seedProducts() {
  console.log('Reading products from json...');
  const products = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/products.json'), 'utf8'));

  console.log(`Attempting to reset and seed ${products.length} products...`);
  
  // Clear existing products first to ensure only the new list remains
  const { error: deleteError } = await supabase
    .from('products')
    .delete()
    .neq('id', '0'); // Delete all

  if (deleteError) {
    console.error('Error clearing products table:', deleteError.message);
  }

  const { data, error } = await supabase
    .from('products')
    .upsert(products, { onConflict: 'id' });

  if (error) {
    if (error.code === '42P01') {
      console.error('Error: Table "products" does not exist in your Supabase project.');
      console.log('\nPlease run the following SQL in your Supabase SQL Editor:');
      console.log(`
CREATE TABLE products (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  brand TEXT,
  price TEXT NOT NULL,
  original_price TEXT,
  condition TEXT,
  category TEXT,
  description TEXT,
  image TEXT,
  variants JSONB DEFAULT '[]'::jsonb,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
      `);
    } else {
      console.error('Error seeding products:', error.message);
      console.error('Error Details:', error);
    }
  } else {
    console.log('Successfully seeded products!');
  }
}

seedProducts();
