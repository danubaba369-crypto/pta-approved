import AnnouncementBar from '@/components/AnnouncementBar/AnnouncementBar';
import Header from '@/components/Header/Header';
import CategoryBubbles from '@/components/CategoryBubbles/CategoryBubbles';
import Hero from '@/components/Hero/Hero';
import TrustSignals from '@/components/TrustSignals/TrustSignals';
import CoreProductGrid from '@/components/ProductGrid/ProductGrid';
import Footer from '@/components/Footer/Footer';
import WhatsApp from '@/components/WhatsApp/WhatsApp';
import { Suspense } from 'react';

export default async function Home() {
  return (
    <main>
      <AnnouncementBar />
      <Header />
      <CategoryBubbles />
      <Hero />
      <TrustSignals />
      <Suspense fallback={<div className="container text-center section">Loading Products...</div>}>
        <CoreProductGrid title="Top Deals" limit={4} category="Mobiles" />
        <CoreProductGrid title="Apple Ecosystem" brand="Apple" limit={8} />
        <CoreProductGrid title="Google Pixel Lineup" brand="Google" limit={4} />
        <CoreProductGrid title="Under 50,000 PKR" maxPrice="50000" limit={8} />
        <CoreProductGrid title="Premium (Under 1 Lac)" minPrice="50000" maxPrice="100000" limit={8} />
        <CoreProductGrid title="Ultra Premium (Above 1 Lac)" minPrice="100000" limit={8} />
      </Suspense>
      <Footer />
      <WhatsApp />
    </main>
  );
}
