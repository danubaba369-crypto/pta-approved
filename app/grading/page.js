import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import AnnouncementBar from '@/components/AnnouncementBar/AnnouncementBar';

export default function GradingPage() {
  const grades = [
    { 
      title: "A Grade", 
      desc: "Like new condition. No visible scratches or dents. Original screen and 90%+ battery health.", 
      color: "#2ecc71" 
    },
    { 
      title: "B Grade", 
      desc: "Minor signs of use. Tiny scratches on the back or frame that are barely visible from 1 foot away.", 
      color: "#f1c40f" 
    },
    { 
      title: "C Grade", 
      desc: "Moderate signs of use. Visible scratches and small dents. Perfect functionality but lower aesthetic value.", 
      color: "#e67e22" 
    },
    { 
      title: "Faulty / Used", 
      desc: "Device with specific minor issues (e.g., non-working touch ID) clearly mentioned. Best for budget buyers.", 
      color: "#e74c3c" 
    }
  ];

  return (
    <main>
      <AnnouncementBar />
      <Header />
      <div className="container section" style={{ paddingLeft: '5%', paddingRight: '5%' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontWeight: '800' }}>Our Grading System</h1>
        <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '3rem', maxWidth: '700px' }}>
          At PAM, we use a transparent grading system so you know exactly what you're buying. 
          <strong> Har tarah ke mobiles miley ghe</strong> - from mint to budget-friendly options.
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {grades.map((g, i) => (
            <div key={i} style={{ 
              padding: '2.5rem', 
              background: '#fff', 
              borderRadius: '20px', 
              border: `2px solid ${g.color}22`,
              boxShadow: '0 10px 20px rgba(0,0,0,0.02)'
            }}>
              <div style={{ 
                width: '50px', 
                height: '50px', 
                background: g.color, 
                borderRadius: '50%', 
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontWeight: '800'
              }}>
                {g.title[0]}
              </div>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{g.title}</h2>
              <p style={{ lineHeight: '1.6', color: '#555' }}>{g.desc}</p>
            </div>
          ))}
        </div>
        
        <div style={{ marginTop: '4rem', padding: '3rem', background: '#f8f9fa', borderRadius: '24px', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '1rem' }}>Need actual device photos?</h2>
          <p style={{ marginBottom: '2rem' }}>Message us on WhatsApp, and we'll send you original photos and videos of the device you're interested in.</p>
          <a href="https://wa.me/923233327011" className="btn btn-primary" style={{ background: '#25D366', borderColor: '#25D366' }}>Request Photos</a>
        </div>
      </div>
      <Footer />
    </main>
  );
}
