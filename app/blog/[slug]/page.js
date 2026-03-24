import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import AnnouncementBar from '@/components/AnnouncementBar/AnnouncementBar';
import { supabase } from '@/lib/supabaseClient';
import styles from './BlogPost.module.css';
import Link from 'next/link';

export default async function BlogPostPage({ params }) {
  const { slug } = await params;

  const { data: blog, error } = await supabase
    .from('blogs')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error || !blog) {
    return (
      <main>
        <Header />
        <div className="container section text-center">
          <h1>Post Not Found</h1>
          <Link href="/blog" className="btn btn-primary" style={{ marginTop: '20px' }}>Back to Blog</Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main>
      <AnnouncementBar />
      <Header />
      
      <article className={styles.article}>
        <div className="container">
          <Link href="/blog" className={styles.backLink}>← Back to Insights</Link>
          
          <header className={styles.header}>
            <span className={styles.categoryTag}>PAM INSIGHTS</span>
            <h1 className={styles.title}>{blog.title}</h1>
            <div className={styles.meta}>
              <span className={styles.date}>{blog.date}</span>
              <span className={styles.author}>By PAM Editorial Team</span>
            </div>
          </header>

          <div className={styles.heroImageWrapper}>
            <img src={blog.image} alt={blog.title} className={styles.heroImage} />
          </div>

          <div className={styles.content}>
            {blog.content.split('\n').map((para, i) => {
              const trimmed = para.trim();
              if (trimmed.startsWith('### ')) {
                return <h3 key={i}>{trimmed.replace('### ', '')}</h3>;
              }
              if (trimmed.startsWith('## ')) {
                return <h2 key={i}>{trimmed.replace('## ', '')}</h2>;
              }
              if (trimmed.startsWith('# ')) {
                return <h1 key={i}>{trimmed.replace('# ', '')}</h1>;
              }
              if (trimmed.startsWith('> ')) {
                return <blockquote key={i}>{trimmed.replace('> ', '')}</blockquote>;
              }
              if (trimmed.startsWith('* ')) {
                return <li key={i}>{trimmed.replace('* ', '')}</li>;
              }
              if (!trimmed) return <br key={i} />;
              return <p key={i}>{para}</p>;
            })}
          </div>
          
          <div className={styles.ctaBox}>
            <h3>Ready to upgrade?</h3>
            <p>Explore our premium collection of PTA Approved mobiles and laptops today.</p>
            <Link href="/" className="btn btn-primary">Shop All Products</Link>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
