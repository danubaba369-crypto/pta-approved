import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import AnnouncementBar from '@/components/AnnouncementBar/AnnouncementBar';
import ProductGrid from '@/components/ProductGrid/ProductGrid';
import SidebarFilter from '@/components/SidebarFilter/SidebarFilter';
import styles from './CategoryPage.module.css';

export default async function CategoryPage({ params }) {
  const { slug } = await params;
  const title = slug.charAt(0).toUpperCase() + slug.slice(1);

  return (
    <main>
      <AnnouncementBar />
      <Header />
      
      <div className={styles.hero}>
        <div className="container">
          <nav className={styles.breadcrumb}>Home / {title}</nav>
          <h1 className={styles.title}>{title} Collection</h1>
          <p className={styles.subtitle}>Discover premium certified devices with 50-point inspection.</p>
        </div>
      </div>

      <div className="container">
        <div className={styles.layout}>
          <SidebarFilter />
          <div className={styles.mainContent}>
            <ProductGrid category={slug} />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
