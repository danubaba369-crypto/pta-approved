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

async function seedBlogs() {
  console.log('Reading blogs from json...');
  const blogs = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/blogs.json'), 'utf8'));
  
  console.log(`Attempting to seed ${blogs.length} blogs...`);
  
  const { data, error } = await supabase
    .from('blogs')
    .upsert(blogs, { onConflict: 'id' });

  if (error) {
    if (error.code === '42P01') {
      console.error('Error: Table "blogs" does not exist in your Supabase project.');
      console.log('\nPlease run the following SQL in your Supabase SQL Editor:');
      console.log(`
CREATE TABLE blogs (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  date TEXT,
  excerpt TEXT,
  content TEXT,
  image TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
      `);
    } else {
      console.error('Error seeding blogs:', error.message);
    }
  } else {
    console.log('Successfully seeded blogs!');
  }
}

seedBlogs();
