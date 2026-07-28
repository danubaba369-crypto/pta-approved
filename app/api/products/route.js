import { supabase } from '@/lib/supabaseClient';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const categoryQuery = searchParams.get('category');
    const searchQuery = searchParams.get('q');
    const brandQuery = searchParams.get('brand');
    const minPrice = searchParams.get('minPrice');
    const maxPrice = searchParams.get('maxPrice');
    const limitQuery = searchParams.get('limit');

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

    if (brandQuery) {
      query = query.ilike('brand', brandQuery);
    }

    if (minPrice) {
      query = query.gte('price', parseInt(minPrice, 10));
    }

    if (maxPrice) {
      query = query.lte('price', parseInt(maxPrice, 10));
    }

    if (limitQuery) {
      query = query.limit(parseInt(limitQuery, 10));
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
      ...body
    };

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
