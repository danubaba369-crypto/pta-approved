import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import AnnouncementBar from '@/components/AnnouncementBar/AnnouncementBar';

export default function OffersPage() {
  return (
    <main>
      <AnnouncementBar />
      <Header />
      <div className="container section">
        <h1 className="text-center" style={{ marginBottom: '40px' }}>Exclusive Offers</h1>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '18px', color: '#666', marginBottom: '30px' }}>
            Get the best value for your money with PAM's exclusive discounts and seasonal promotions on certified refurbished mobiles and laptops.
          </p>
          <div style={{ background: '#f9f9f9', padding: '40px', borderRadius: '12px', border: '1px dashed var(--secondary)' }}>
            <h2 style={{ color: 'var(--primary)', marginBottom: '15px' }}>Student Discount Program</h2>
            <p>Are you a student? Get an additional 5,000 PKR off on any laptop purchase. Simply contact us on WhatsApp with your student ID to claim.</p>
          </div>
          <div style={{ background: '#f9f9f9', padding: '40px', borderRadius: '12px', marginTop: '20px', border: '1px dashed var(--secondary)' }}>
            <h2 style={{ color: 'var(--primary)', marginBottom: '15px' }}>Trade-In Bonus</h2>
            <p>Exchange your old device for a certified PAM refurbished phone and get a 10% bonus on the trade-in value.</p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
