import Link from 'next/link';
import styles from './BlogPreview.module.css';

export default function BlogPreview({ blogs }) {
  if (!blogs || blogs.length === 0) return null;

  return (
    <section className="section" style={{ background: '#fdfdfd' }}>
      <div className="container">
        <div className={styles.header}>
          <h2>Latest from PAM <span>Insights.</span></h2>
          <Link href="/blog" className={styles.viewAll}>View All Stories →</Link>
        </div>
        
        <div className={styles.grid}>
          {blogs.slice(0, 3).map((blog) => (
            <Link href={`/blog/${blog.slug}`} key={blog.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img src={blog.image || 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop'} alt={blog.title} />
              </div>
              <div className={styles.content}>
                <span className={styles.date}>{blog.date}</span>
                <h3>{blog.title}</h3>
                <p>{blog.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
