import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import AnnouncementBar from '@/components/AnnouncementBar/AnnouncementBar';
import ProductDetails from '@/components/ProductDetails/ProductDetails';
import { supabase } from '@/lib/supabaseClient';
import { notFound } from 'next/navigation';

export default async function ProductPage({ params }) {
  const { id } = await params;

  const { data: product, error } = await supabase
    .from('products')
    .select('*')
    .eq('id', id)
    .single();

  if (error || !product) {
    notFound();
  }

  return (
    <main>
      <AnnouncementBar />
      <Header />
      
      <div className="container section">
        <ProductDetails product={product} />
      </div>

      <Footer />
    </main>
  );
}
