"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './CategoryBubbles.module.css';

  const categories = [
    { 
      id: 'deals', 
      name: 'Deal of Day', 
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>, 
      slug: 'deals',
      href: '/deals'
    },
    { 
      id: 'offers', 
      name: 'Top Offer', 
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82zM7 7h.01"/></svg>, 
      slug: 'offers',
      href: '/offers'
    },
    { 
      id: 'apple', 
      name: 'Apple', 
      icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.1 2.48-1.34.03-1.77-.79-3.29-.79-1.53 0-1.99.77-3.27.82-1.31.05-2.32-1.32-3.15-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.29 1.05-3.11z"/></svg>, 
      slug: 'apple',
      href: '/category/apple'
    },
    { 
      id: 'google', 
      name: 'Google', 
      icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" /><path d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18c-.74 1.49-1.18 3.14-1.18 4.94s.44 3.45 1.18 4.94l3.66-2.84z" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" /></svg>, 
      slug: 'google',
      href: '/category/google'
    },
    { 
      id: 'limited', 
      name: 'Limited Deals', 
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>, 
      slug: 'deals',
      href: '/deals'
    },
    { 
      id: 'under50', 
      name: 'Under 50k', 
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><text x="12" y="15" fontSize="10" fontWeight="800" textAnchor="middle" fill="currentColor" stroke="none">PKR</text></svg>, 
      slug: 'under-50000',
      href: '/category/mobiles?maxPrice=50000'
    },
    { 
      id: 'under100', 
      name: 'Under 1 Lac', 
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><text x="12" y="15" fontSize="10" fontWeight="800" textAnchor="middle" fill="currentColor" stroke="none">PKR</text></svg>, 
      slug: 'under-100000',
      href: '/category/mobiles?maxPrice=100000'
    },
    { 
      id: 'above100', 
      name: 'Above 1 Lac', 
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><text x="12" y="15" fontSize="10" fontWeight="800" textAnchor="middle" fill="currentColor" stroke="none">PKR</text></svg>, 
      slug: 'above-100000',
      href: '/category/mobiles?minPrice=100000'
    },
  ];

export default function CategoryBubbles() {
  const router = useRouter(); 
  
  return (
    <section className={styles.section}>
      <div className={`${styles.container} container`}>
        {categories.map((cat, i) => (
          <Link href={cat.href} key={i} className={styles.bubbleWrapper}>
            <div className={styles.holographicRing}>
              <div className={styles.bubble}>
                <div className={styles.iconContainer}>{cat.icon}</div>
              </div>
            </div>
            <span>{cat.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
