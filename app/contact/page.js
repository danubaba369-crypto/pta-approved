'use client';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import AnnouncementBar from '@/components/AnnouncementBar/AnnouncementBar';

export default function ContactPage() {
  const whatsappNumber = "923233327011";
  
  return (
    <main>
      <AnnouncementBar />
      <Header />
      <div className="container section" style={{ maxWidth: '800px', textAlign: 'center', paddingLeft: '5%', paddingRight: '5%' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontWeight: '800' }}>Contact Us</h1>
        <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '3rem' }}>
          Have questions or need assistance? Reach out to our team directly on WhatsApp for the fastest response.
        </p>
        
        <div style={{ background: '#fff', padding: '3rem', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', border: '1px solid #eee' }}>
          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>WhatsApp Support</h2>
            <p style={{ color: '#075e54', fontWeight: '700', fontSize: '1.2rem' }}>+92 323 3327011</p>
          </div>
          
          <a 
            href={`https://wa.me/${whatsappNumber}?text=Hi PAM team, I need help with...`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ 
              display: 'inline-block',
              background: '#25D366',
              color: '#fff',
              padding: '1rem 3rem',
              borderRadius: '50px',
              fontWeight: '700',
              fontSize: '1.1rem',
              textDecoration: 'none',
              transition: 'transform 0.3s ease',
              boxShadow: '0 5px 15px rgba(37, 211, 102, 0.3)'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            CHAT ON WHATSAPP
          </a>
          
          <div style={{ marginTop: '3rem', borderTop: '1px solid #eee', paddingTop: '2rem', textAlign: 'left' }}>
            <p><strong>Email:</strong> support@pam.pk</p>
            <p><strong>Address:</strong> Starcity Sadder, Karachi, Pakistan</p>
            <p><strong>Hours:</strong> Mon - Sat, 11 AM - 9 PM</p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
