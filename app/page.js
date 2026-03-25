import AnnouncementBar from '@/components/AnnouncementBar/AnnouncementBar';
import Header from '@/components/Header/Header';
import CategoryBubbles from '@/components/CategoryBubbles/CategoryBubbles';
import Hero from '@/components/Hero/Hero';
import TrustSignals from '@/components/TrustSignals/TrustSignals';
import ProductGrid from '@/components/ProductGrid/ProductGrid';
import Footer from '@/components/Footer/Footer';
import WhatsApp from '@/components/WhatsApp/WhatsApp';
import { supabase } from '@/lib/supabaseClient';

export default async function Home() {
  return (
    <main>
      <AnnouncementBar />
      <Header />
      <CategoryBubbles />
      <Hero />
      <TrustSignals />
      <ProductGrid />
      <Footer />
      <WhatsApp />
    </main>
  );
}
