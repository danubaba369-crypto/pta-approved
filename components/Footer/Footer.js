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
              Pakistan's #1 marketplace for certified refurbished mobiles. Quality you can trust, prices you'll love.
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
            <h4>Shop By Category</h4>
            <ul id="footer-categories">
              <li><Link href="/category/mobiles" id="footer-link-mobiles">Mobiles</Link></li>
              <li><Link href="/category/laptops" id="footer-link-laptops">Laptops</Link></li>
              <li><Link href="/category/accessories" id="footer-link-accessories">Accessories</Link></li>
            </ul>
          </div>
          
          <div className={styles.linkCol}>
            <h4>Support & Help</h4>
            <ul>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms & Conditions</Link></li>
              <li><Link href="/why-refurbished">Why Refurbished</Link></li>
            </ul>
          </div>
          
          <div className={styles.contactCol}>
            <h4>Contact PAM</h4>
            <p>Email: support@pam.pk</p>
            <p>Phone: +92 323 3327011</p>
            <p>Location: Starcity Sadder Karachi</p>
          </div>
        </div>
        
        <div className={styles.bottomBar}>
          <p>All rights and copyrights reserved to PAM. Created by <a href="https://369AIventures.com" target="_blank" rel="noopener noreferrer">369AIventures.com</a></p>
        </div>
      </div>
    </footer>
  );
}
