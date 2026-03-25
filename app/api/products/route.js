import { supabase } from '@/lib/supabaseClient';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const categoryQuery = searchParams.get('category');
    const searchQuery = searchParams.get('q');

    let query = supabase
      .from('products')
      .select('*')
      .order('created_at', { ascending: false });

    if (categoryQuery) {
      query = query.ilike('category', categoryQuery);
    }

    if (searchQuery) {
      query = query.or(`name.ilike.%${searchQuery}%,brand.ilike.%${searchQuery}%,description.ilike.%${searchQuery}%`);
    }

    const { data, error } = await query;
    if (error) throw error;

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    
    const productToInsert = { 
      ...body,
      original_price: body.originalPrice 
    };
    delete productToInsert.originalPrice;

    if (!productToInsert.id) {
       productToInsert.id = Date.now().toString();
    }

    const { data, error } = await supabase
      .from('products')
      .insert([productToInsert])
      .select();

    if (error) throw error;

    return new Response(JSON.stringify(data[0]), { status: 201 });
  } catch (error) {
    console.error("POST Error:", error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
