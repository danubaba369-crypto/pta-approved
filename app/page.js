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
        <CoreProductGrid />
      </Suspense>
      <Footer />
      <WhatsApp />
    </main>
  );
}
