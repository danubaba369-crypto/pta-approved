import styles from './AnnouncementBar.module.css';

export default function AnnouncementBar() {
  return (
    <div className={styles.bar}>
      <div className="container">
        <p>✨ Welcome to PAM: Secure Your PTA Approved Mobile Today! <span>Free Shipping across Pakistan</span></p>
      </div>
    </div>
  );
}
