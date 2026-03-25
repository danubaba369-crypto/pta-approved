import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import AnnouncementBar from '@/components/AnnouncementBar/AnnouncementBar';

export default function AboutPage() {
  return (
    <main>
      <AnnouncementBar />
      <Header />
      <div className="container section" style={{ paddingLeft: '5%', paddingRight: '5%' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontWeight: '800' }}>About PAM PK</h1>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#444', maxWidth: '800px' }}>
          Welcome to PAM (PTA Approved Mobiles), Pakistan's premier marketplace for certified used mobiles. 
          Our mission is to provide high-quality, verified, and PTA-approved smartphones at prices that make sense.
        </p>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#444', maxWidth: '800px', marginTop: '1rem' }}>
          Every device sold on PAM goes through a rigorous 50-point quality check to ensure you get a product that 
          works like new. We believe in transparency, which is why we provide a detailed grading system and a 
          7-day replacement warranty for your peace of mind.
        </p>
        <div style={{ marginTop: '3rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          <div style={{ padding: '2rem', background: '#f8f9fa', borderRadius: '12px' }}>
            <h3 style={{ marginBottom: '1rem' }}>PTA Approved</h3>
            <p>All our phones are 100% PTA approved, so you don't have to worry about taxes or blocking.</p>
          </div>
          <div style={{ padding: '2rem', background: '#f8f9fa', borderRadius: '12px' }}>
            <h3 style={{ marginBottom: '1rem' }}>Quality Guaranteed</h3>
            <p>Our experts inspect every device to ensure battery health, screen quality, and performance are top-notch.</p>
          </div>
          <div style={{ padding: '2rem', background: '#f8f9fa', borderRadius: '12px' }}>
            <h3 style={{ marginBottom: '1rem' }}>Safe Delivery</h3>
            <p>We offer free and secure delivery across Pakistan with Cash on Delivery options.</p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
