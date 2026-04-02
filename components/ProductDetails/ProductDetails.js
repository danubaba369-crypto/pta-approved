"use client";
import { useState } from 'react';
import styles from './ProductDetails.module.css';
import ProductPlaceholder from '../ProductPlaceholder/ProductPlaceholder';

export default function ProductDetails({ product }) {
  const [activeTab, setActiveTab] = useState('description');
  const [hasImageError, setHasImageError] = useState(false);

  // Variant Selection Logic
  const allVariants = product.variants && product.variants.length > 0 
    ? product.variants 
    : [{ color: 'Standard', storage: 'Standard', price: product.price, originalPrice: product.originalPrice, image: product.image }];

  const uniqueStorages = [...new Set(allVariants.map(v => v.storage))];
  const [selectedStorage, setSelectedStorage] = useState(uniqueStorages[0]);
  
  const availableColors = [...new Set(allVariants
    .filter(v => v.storage === selectedStorage)
    .map(v => v.color))];
  
  const [selectedColor, setSelectedColor] = useState(availableColors[0]);

  // Sync color if storage changes and current color is no longer available
  if (!availableColors.includes(selectedColor)) {
    setSelectedColor(availableColors[0]);
  }

  const currentVariant = allVariants.find(v => v.storage === selectedStorage && v.color === selectedColor) || allVariants[0];

  const displayPrice = currentVariant.price;
  const displayOriginalPrice = currentVariant.originalPrice;
  const displayImage = currentVariant.image;

  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '923233327011'}?text=I am interested in ${product.name} (${selectedStorage} / ${selectedColor}) priced at Rs. ${displayPrice}`;

  return (
    <div className={styles.container}>
      <div className={styles.gallery}>
        <div className={styles.mainImage}>
          {!hasImageError ? (
            <img 
              src={displayImage} 
              alt={product.name} 
              onError={() => setHasImageError(true)}
            />
          ) : (
            <ProductPlaceholder name={product.name} brand={product.brand} />
          )}
        </div>
        <div className={styles.thumbnails}>
          <div 
            className={`${styles.thumb} ${styles.active}`}
            onClick={() => setHasImageError(false)}
          >
            <img src={displayImage} onError={(e) => { e.target.style.display = 'none'; }} />
          </div>
          {allVariants.slice(1, 3).map((v, i) => (
             <div key={i} className={styles.thumb} onClick={() => {
                setSelectedStorage(v.storage);
                setSelectedColor(v.color);
                setHasImageError(false);
             }}>
                <img src={v.image} onError={(e) => { e.target.style.display = 'none'; }} />
             </div>
          ))}
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
          <span className={styles.price}>Rs. {displayPrice}</span>
          {displayOriginalPrice && Number(displayOriginalPrice) > Number(displayPrice) && (
            <>
              <span className={styles.oldPrice}>Rs. {displayOriginalPrice}</span>
              <span className={styles.discount}>
                Save {Math.round((1 - Number(displayPrice) / Number(displayOriginalPrice)) * 100)}%
              </span>
            </>
          )}
        </div>

        {/* Variant Selectors */}
        <div className={styles.variantSelectors}>
          {uniqueStorages.length > 1 && uniqueStorages[0] !== 'Standard' && (
            <div className={styles.variantGroup}>
              <h4>Select Storage</h4>
              <div className={styles.options}>
                {uniqueStorages.map(storage => (
                  <button 
                    key={storage} 
                    className={`${styles.selectorBtn} ${selectedStorage === storage ? styles.selectedBtn : ''}`}
                    onClick={() => setSelectedStorage(storage)}
                  >
                    {storage}
                  </button>
                ))}
              </div>
            </div>
          )}

          {availableColors.length > 1 && availableColors[0] !== 'Standard' && (
            <div className={styles.variantGroup}>
              <h4>Select Color</h4>
              <div className={styles.options}>
                {availableColors.map(color => (
                  <button 
                    key={color} 
                    className={`${styles.selectorBtn} ${selectedColor === color ? styles.selectedBtn : ''}`}
                    onClick={() => setSelectedColor(color)}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
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
