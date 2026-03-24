import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import AnnouncementBar from '@/components/AnnouncementBar/AnnouncementBar';

export default function DealsPage() {
  return (
    <main>
      <AnnouncementBar />
      <Header />
      <div className="container section">
        <h1 className="text-center" style={{ marginBottom: '40px' }}>Deals of the Day</h1>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '18px', color: '#666', marginBottom: '30px' }}>
            Don't miss out on our limited-time daily deals. These premium devices are available at rock-bottom prices for 24 hours only.
          </p>
          <div style={{ display: 'grid', gap: '20px' }}>
             {/* Note: In a real app, this would fetch from a 'deals' collection */}
             <p>Check back daily at 10:00 AM for fresh deals on iPhone, Samsung, and MacBook Pro.</p>
             <div style={{ padding: '20px', border: '1px solid #eee', borderRadius: '8px' }}>
               <h3>Today's Highlight: iPhone 13 Pro (128GB)</h3>
               <p style={{ color: 'var(--secondary)', fontWeight: 'bold' }}>Rs. 165,000 (Save Rs. 15,000)</p>
             </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
