import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import AnnouncementBar from '@/components/AnnouncementBar/AnnouncementBar';

export default function B2BPage() {
  return (
    <main>
      <AnnouncementBar />
      <Header />
      <div className="container section">
        <h1 className="text-center" style={{ marginBottom: '40px' }}>B2B & Corporate Sales</h1>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '18px', color: '#666', marginBottom: '30px' }}>
            Empower your workforce with premium tech. PAM offers customized bulk solutions for startups and large enterprises across Pakistan.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', textAlign: 'left' }}>
             <div style={{ padding: '25px', background: '#f8f9fa', borderRadius: '8px' }}>
               <h3>Bulk Discounts</h3>
               <p>Get wholesale pricing when you order 10 or more devices for your team.</p>
             </div>
             <div style={{ padding: '25px', background: '#f8f9fa', borderRadius: '8px' }}>
               <h3>Corporate Warranty</h3>
               <p>Extended warranty options designed specifically for business use cases.</p>
             </div>
             <div style={{ padding: '25px', background: '#f8f9fa', borderRadius: '8px' }}>
               <h3>Dedicated Support</h3>
               <p>A personal account manager to handle all your business needs and repairs.</p>
             </div>
             <div style={{ padding: '25px', background: '#f8f9fa', borderRadius: '8px' }}>
               <h3>Buy-Back Program</h3>
               <p>Upgrade your company's fleet of devices with our periodic buy-back and exchange offers.</p>
             </div>
          </div>
          <div style={{ marginTop: '40px' }}>
            <p>Interested in a corporate partnership? Contact our B2B team on WhatsApp today.</p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
