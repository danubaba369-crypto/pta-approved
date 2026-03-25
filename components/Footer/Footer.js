import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} container`}>
        <div className={styles.grid}>
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logo}>
              <span className={styles.logoPrimary}>PA</span><span className={styles.logoSecondary}>M</span>
            </Link>
            <p className={styles.description}>
              Pakistan's #1 marketplace for certified refurbished mobiles. Quality you can trust, prices you'll love. PTA Approved & Verified.
            </p>
            <div className={styles.socials} id="footer-socials">
              <a href="https://facebook.com/pam.pk" target="_blank" className={styles.socialIcon} aria-label="Facebook" id="footer-social-fb">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://instagram.com/pam.pk" target="_blank" className={styles.socialIcon} aria-label="Instagram" id="footer-social-ig">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="https://wa.me/923233327011" target="_blank" className={styles.socialIcon} aria-label="WhatsApp" id="footer-social-wa">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7 8.38 8.38 0 0 1 3.8.9L21 3z"/></svg>
              </a>
            </div>
          </div>
          
          <div className={styles.linkCol}>
            <h4>Certified Devices</h4>
            <ul id="footer-categories">
              <li><Link href="/category/mobiles" id="footer-link-mobiles">PTA Approved Mobiles</Link></li>
              <li><Link href="/brands" id="footer-link-brands">Top Brands</Link></li>
              <li><Link href="/deals" id="footer-link-deals">Daily Deals</Link></li>
            </ul>
          </div>
          
          <div className={styles.linkCol}>
            <h4>Policies & FAQ</h4>
            <ul style={{ fontSize: '0.9rem', color: '#666' }}>
              <li style={{ marginBottom: '10px' }}>✓ 7 Days Replacement Warranty</li>
              <li style={{ marginBottom: '10px' }}>✓ Cash on Delivery Available</li>
              <li style={{ marginBottom: '10px', color: '#d63031' }}>⚠ Burn ya Pani mein gira device change nai ho ga</li>
              <li style={{ marginBottom: '10px', color: '#d63031' }}>⚠ Device khol liya change nai ho ga</li>
            </ul>
          </div>
          
          <div className={styles.contactCol}>
            <h4>B2B / Shopkeepers</h4>
            <p style={{ fontSize: '0.9rem', marginBottom: '10px' }}>Shopkeepers ke liye special rates available hain.</p>
            <p style={{ fontWeight: '700', color: '#27ae60', marginBottom: '1rem' }}>Quantity zayda lein ghe discount miley ga!</p>
            <a href="https://wa.me/923233327011" style={{ color: '#0984e3', textDecoration: 'none', fontWeight: '700' }}>Whatsapp karein mazeed details ke liye →</a>
          </div>
        </div>
        
        <div className={styles.bottomBar}>
          <p>All rights and copyrights reserved to PAM. Created by <a href="https://369AIventures.com" target="_blank" rel="noopener noreferrer">369AIventures.com</a></p>
        </div>
      </div>
    </footer>
  );
}
