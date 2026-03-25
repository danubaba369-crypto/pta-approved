import styles from './Hero.module.css';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`${styles.container} container`}>
        <div className={styles.content}>
          <span className={styles.badge}>PTA Approved. Certified. Guaranteed.</span>
          <h1 className={styles.title}>
            The Smart Way to <br />
            <span>Own Premium <span>Used Mobiles<span>.</span></span></span>
          </h1>
          <p className={styles.description}>
            Join thousands of satisfied users. Get certified used mobiles with a 7-day replacement warranty and free delivery across Pakistan.
          </p>
          <div className={styles.cta}>
            <Link href="/category/mobiles" className="btn btn-primary">Browse Mobiles</Link>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <img src="/images/products/pam_hero_tech_collage_1774335068164.png" alt="PAM Premium Used Mobiles" className={styles.image} />
        </div>
      </div>
    </section>
  );
}
