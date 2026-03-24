"use client";
import { useState } from 'react';
import styles from './ProductDetails.module.css';

export default function ProductDetails({ product }) {
  const [activeTab, setActiveTab] = useState('description');

  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '923233327011'}?text=I am interested in ${product.name} priced at Rs. ${product.price}`;

  return (
    <div className={styles.container}>
      <div className={styles.gallery}>
        <div className={styles.mainImage}>
          <img src={product.image} alt={product.name} />
        </div>
        {/* Placeholder for small thumbnails if they existed in DB */}
        <div className={styles.thumbnails}>
          <div className={`${styles.thumb} ${styles.active}`}><img src={product.image} /></div>
          {/* Mock thumbnails to match Refit Global style */}
          <div className={styles.thumb}><img src={product.image} /></div>
          <div className={styles.thumb}><img src={product.image} /></div>
        </div>
      </div>

      <div className={styles.info}>
        <nav className={styles.breadcrumb}>Home / {product.category} / {product.name}</nav>
        <span className={styles.brand}>{product.brand}</span>
        <h1 className={styles.title}>{product.name}</h1>
        
        <div className={styles.rating}>
           <span>★ 4.8</span>
           <span className={styles.reviews}>(12 Customer Reviews)</span>
        </div>

        <div className={styles.pricing}>
          <span className={styles.price}>Rs. {product.price}</span>
          {product.originalPrice && Number(product.originalPrice) > Number(product.price) && (
            <>
              <span className={styles.oldPrice}>Rs. {product.originalPrice}</span>
              <span className={styles.discount}>
                Save {Math.round((1 - Number(product.price) / Number(product.originalPrice)) * 100)}%
              </span>
            </>
          )}
        </div>

        <p className={styles.condition}>Condition: <strong>{product.condition}</strong></p>
        <p className={styles.codNotice}>💳 Payment Method: <strong>Cash on Delivery Only</strong></p>

        <div className={styles.actions}>
          <a href={whatsappLink} target="_blank" className={`${styles.whatsappBtn} holographic`}>
             ORDER ON WHATSAPP
          </a>
        </div>

        <div className={styles.comparisonArea}>
           <h3>Compare with Similar Models</h3>
           <div className={styles.compareGrid}>
              <div className={styles.compareItem}>
                 <span className={styles.label}>Brand</span>
                 <span className={styles.value}>{product.brand}</span>
              </div>
              <div className={styles.compareItem}>
                 <span className={styles.label}>Price</span>
                 <span className={styles.value}>Rs. {product.price}</span>
              </div>
              <div className={styles.compareItem}>
                 <span className={styles.label}>Color</span>
                 <span className={styles.value}>Premium {product.brand === 'Apple' ? 'Titanium' : 'Phantom'}</span>
              </div>
           </div>
        </div>

        <div className={styles.trustBadges}>
          <div className={styles.badge}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            <span>7-Day Replacement</span>
          </div>
          <div className={styles.badge}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><polyline points="3.29 7 12 12 20.71 7"/><line x1="12" y1="22" x2="12" y2="12"/></svg>
            <span>6 Months Warranty</span>
          </div>
          <div className={styles.badge}>
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="3" width="15" height="13" /><polyline points="16 8 20 8 23 11 23 16 16 16" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg>
             <span>Free Shipping</span>
          </div>
        </div>

        <div className={styles.tabs}>
           <div className={styles.tabHeaders}>
              <button className={activeTab === 'description' ? styles.activeTab : ''} onClick={() => setActiveTab('description')}>Description</button>
              <button className={activeTab === 'specs' ? styles.activeTab : ''} onClick={() => setActiveTab('specs')}>Specifications</button>
           </div>
           <div className={styles.tabContent}>
              {activeTab === 'description' ? (
                <div className={styles.description}>
                  <p>{product.description || 'Experience cutting-edge technology with this certified premium device.'}</p>
                </div>
              ) : (
                <table className={styles.specsTable}>
                   <tbody>
                      <tr><td>Display</td><td>6.7-inch Super Retina XDR</td></tr>
                      <tr><td>Processor</td><td>A16 Bionic / Snapdragon 8 Gen 2</td></tr>
                      <tr><td>Camera</td><td>Pro Camera System (48MP Main)</td></tr>
                      <tr><td>Battery</td><td>All-day battery life</td></tr>
                      <tr><td>PTA Status</td><td>PTA Approved</td></tr>
                   </tbody>
                </table>
              )}
           </div>
        </div>
      </div>
    </div>
  );
}
