import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import AnnouncementBar from '@/components/AnnouncementBar/AnnouncementBar';

export default function TermsPage() {
  return (
    <main>
      <AnnouncementBar />
      <Header />
      <div className="container section">
        <h1 className="text-center" style={{ marginBottom: '40px' }}>Terms & Conditions</h1>
        <div style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
          <section style={{ marginBottom: '30px' }}>
            <h2>1. Introduction</h2>
            <p>Welcome to PAM (PTA Approved Mobiles). By accessing our website and purchasing our products, you agree to comply with and be bound by the following terms and conditions.</p>
          </section>

          <section style={{ marginBottom: '30px' }}>
            <h2>2. Product Condition & Certification</h2>
            <p>All devices sold by PAM are certified refurbished. Every product undergoes a rigorous 50-point inspection process to ensure functionality and quality. We provide accurate condition ratings (Mint, Excellent, Good) for all items.</p>
          </section>

          <section style={{ marginBottom: '30px' }}>
            <h2>3. PTA Approval Guarantee</h2>
            <p>We guarantee that all mobile devices sold on our platform are PTA Approved. We provide lifetime backup for PTA certification, ensuring your device remains legal and functional on all Pakistani networks.</p>
          </section>

          <section style={{ marginBottom: '30px' }}>
            <h2>4. Payment Methods</h2>
            <p><strong>Note:</strong> We currently operate exclusively on a <strong>Cash on Delivery (COD)</strong> basis for all orders across Pakistan. This ensures customers can verify their package before making a payment.</p>
          </section>

          <section style={{ marginBottom: '30px' }}>
            <h2>5. Warranty & Replacement</h2>
            <p>We offer a <strong>7-day replacement warranty</strong> for any technical defects found in the device. This warranty does not cover physical damage, water damage, or unauthorized modifications.</p>
          </section>

          <section style={{ marginBottom: '30px' }}>
            <h2>6. Shipping & Delivery</h2>
            <p>We offer free shipping across Pakistan. Delivery typically takes 2-4 business days depending on the location. Customers are required to provide accurate contact information for successful delivery.</p>
          </section>

          <section style={{ marginBottom: '30px' }}>
            <h2>7. Order via WhatsApp</h2>
            <p>To provide a personalized experience, we facilitate orders via WhatsApp. Our official representatives will guide you through the final steps of your purchase.</p>
          </section>

          <section style={{ marginBottom: '30px' }}>
             <h2>8. Governing Law</h2>
             <p>These terms are governed by the laws of the Islamic Republic of Pakistan.</p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
