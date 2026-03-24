import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import AnnouncementBar from '@/components/AnnouncementBar/AnnouncementBar';
import Link from 'next/link';
import { supabase } from '@/lib/supabaseClient';
import styles from './Blog.module.css';

export default async function BlogPage() {
  const { data: blogs, error } = await supabase
    .from('blogs')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching blogs:', error.message);
  }

  return (
    <main>
      <AnnouncementBar />
      <Header />
      
      <div className={styles.heroSection}>
        <div className="container">
          <h1 className={styles.title}>PAM <span>Tech Insights.</span></h1>
          <p className={styles.subtitle}>Expert guides, latest news, and deep dives into the world of premium tech.</p>
        </div>
      </div>

      <div className={`${styles.blogContainer} container section`}>
        <div className={styles.grid}>
          {blogs?.map((blog) => (
            <Link href={`/blog/${blog.slug}`} key={blog.id} className={styles.blogCard}>
              <div className={styles.imageWrapper}>
                <img src={blog.image} alt={blog.title} />
              </div>
              <div className={styles.cardContent}>
                <span className={styles.date}>{blog.date}</span>
                <h2 className={styles.cardTitle}>{blog.title}</h2>
                <p className={styles.excerpt}>{blog.excerpt}</p>
                <span className={styles.readMore}>Read Article <span>→</span></span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
