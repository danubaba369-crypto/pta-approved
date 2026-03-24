import AnnouncementBar from '@/components/AnnouncementBar/AnnouncementBar';
import Header from '@/components/Header/Header';
import CategoryBubbles from '@/components/CategoryBubbles/CategoryBubbles';
import Hero from '@/components/Hero/Hero';
import TrustSignals from '@/components/TrustSignals/TrustSignals';
import ProductGrid from '@/components/ProductGrid/ProductGrid';
import BlogPreview from '@/components/BlogPreview/BlogPreview';
import Footer from '@/components/Footer/Footer';
import WhatsApp from '@/components/WhatsApp/WhatsApp';
import { supabase } from '@/lib/supabaseClient';

export default async function Home() {
  const { data: blogs } = await supabase
    .from('blogs')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(3);

  return (
    <main>
      <AnnouncementBar />
      <Header />
      <CategoryBubbles />
      <Hero />
      <TrustSignals />
      <ProductGrid />
      <BlogPreview blogs={blogs} />
      <Footer />
      <WhatsApp />
    </main>
  );
}
