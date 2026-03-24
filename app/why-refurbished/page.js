import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import AnnouncementBar from '@/components/AnnouncementBar/AnnouncementBar';

export default function WhyRefurbishedPage() {
  return (
    <main>
      <AnnouncementBar />
      <Header />
      <div className="container section">
        <h1 className="text-center" style={{ marginBottom: '40px' }}>Why Choose Refurbished?</h1>
        <div style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
          <section style={{ marginBottom: '30px' }}>
            <h2>Unbeatable Value</h2>
            <p>Get premium, high-end devices like the iPhone 15 Pro Max or Samsung S24 Ultra for up to 40% less than the launch price. Why pay full price when you can get the same experience for much less?</p>
          </section>
          <section style={{ marginBottom: '30px' }}>
            <h2>Certified Quality</h2>
            <p>Every PAM device undergoes a rigorous 50-point technical inspection. We check battery health, display quality, signal strength, and more, ensuring it feels like new.</p>
          </section>
          <section style={{ marginBottom: '30px' }}>
            <h2>Eco-Friendly Choice</h2>
            <p>Choosing refurbished directly reduces electronic waste (e-waste) and helps conserve precious resources. Join the sustainable tech movement in Pakistan.</p>
          </section>
          <section style={{ marginBottom: '30px' }}>
            <h2>Reliable Warranty</h2>
            <p>At PAM, we don't just sell you a phone; we provide peace of mind. All our devices come with a standard replacement warranty and lifetime support.</p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
