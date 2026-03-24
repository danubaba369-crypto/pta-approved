'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  const [placeholder, setPlaceholder] = useState("Search for 'iPhone'...");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const brands = ["iPhone", "Samsung", "Vivo", "Pixel", "MacBook", "OnePlus", "Dell"];
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i = (i + 1) % brands.length;
      setPlaceholder(`Search for '${brands[i]}' & more...`);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { name: "Offers", href: "/offers" },
    { name: "Deals of the day", href: "/deals" },
    { name: "Refurbished Mobiles", href: "/category/mobiles" },
    { name: "Top Brands", href: "/brands" },
    { name: "Why Refurbished", href: "/why-refurbished" },
    { name: "B2B", href: "/b2b" },
    { name: "Insights", href: "/blog" },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.topRow}>
        <div className={`${styles.container} container`}>
          <button 
            className={styles.menuBtn} 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>

          <div className={styles.logoWrapper}>
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

          <div className={styles.searchWrapper}>
            <div className={styles.search}>
              <input type="text" placeholder={placeholder} className={styles.searchInput} />
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>
          </div>

          <div className={styles.actions}>
            <div className={styles.iconGroup}>
              <button 
                className={styles.mobileSearchBtn} 
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                aria-label="Toggle Search"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </button>
              <button className={styles.actionIcon} title="Wishlist">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                <span className={styles.badge}>0</span>
              </button>
              <button className={styles.actionIcon} title="Account">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </button>
              <Link href="/cart" className={styles.cartBtn}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4H6z" />
                  <path d="M3 6h18M16 10a4 4 0 01-8 0" />
                </svg>
                <span className={styles.badge}>0</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar Expansion */}
      <div className={`${styles.mobileSearchRow} ${isSearchOpen ? styles.showSearch : ''}`}>
        <div className="container">
          <div className={styles.search}>
            <input type="text" placeholder={placeholder} className={styles.searchInput} />
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
        </div>
      </div>
      
      <div className={styles.bottomRow}>
        <div className="container">
          <nav className={styles.nav}>
            <ul className={styles.navList}>
              {navLinks.map((link, idx) => (
                <li key={idx} className={styles.navItem}>
                  <Link href={link.href}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`${styles.mobileOverlay} ${isMenuOpen ? styles.showMenu : ''}`}>
        <div className={styles.mobileNav}>
          <ul>
            {navLinks.map((link, idx) => (
              <li key={idx} onClick={() => setIsMenuOpen(false)}>
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}


