'use client';

import styles from './AdminLayout.module.css';
import Link from 'next/link';

export default function AdminLayout({ children }) {
  return (
    <div className={styles.adminContainer}>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <Link href="/" className={styles.logo}>
            <span className={styles.logoPA}>PA</span>
            <span className={styles.logoM}>
              M
              <svg className={styles.tick} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                <path d="M20 6L9 17L4 12" />
              </svg>
            </span>
          </Link>
        </div>
        <nav className={styles.sidebarNav}>
          <Link href="/admin" className={styles.navLink}>Dashboard</Link>
          <Link href="/admin" className={styles.navLink}>Inventory</Link>
          <Link href="/" className={styles.navLink}>View Store</Link>
        </nav>
      </aside>
      <main className={styles.mainContent}>
        <header className={styles.adminHeader}>
          <h1>Dashboard Overview</h1>
          <div className={styles.adminUser}>Admin User</div>
        </header>
        <div className={styles.content}>
          {children}
        </div>
      </main>
    </div>
  );
}
