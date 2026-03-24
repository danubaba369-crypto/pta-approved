import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import AnnouncementBar from '@/components/AnnouncementBar/AnnouncementBar';

export default function BrandsPage() {
  const brands = [
    { name: 'Apple', description: 'iPhone, MacBook, and AirPods. Premium luxury and performance.', count: '15+ products' },
    { name: 'Samsung', description: 'Galaxy S-Series, Z-Fold, and A-Series. Innovative Android experience.', count: '12+ products' },
    { name: 'Google', description: 'Pixel 6, 7, and 8 series. The purest Android experience with incredible AI cameras.', count: '8+ products' },
    { name: 'Dell', description: 'XPS, Latitude, and Inspiron. Reliable performance for business and education.', count: '6+ products' },
    { name: 'HP', description: 'Spectre and Pavilion. Elegant designs and versatile performance.', count: '5+ products' },
  ];

  return (
    <main>
      <AnnouncementBar />
      <Header />
      <div className="container section">
        <h1 className="text-center" style={{ marginBottom: '40px' }}>Shop by Brand</h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
          {brands.map((brand, i) => (
            <div key={i} style={{ padding: '30px', border: '1px solid #eee', borderRadius: '12px', textAlign: 'center' }}>
               <h2 style={{ color: 'var(--primary)', marginBottom: '10px' }}>{brand.name}</h2>
               <p style={{ color: '#666', fontSize: '14px', marginBottom: '15px' }}>{brand.description}</p>
               <span style={{ fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', color: 'var(--secondary)' }}>{brand.count}</span>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
