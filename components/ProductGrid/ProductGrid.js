"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import styles from './ProductGrid.module.css';
import ProductPlaceholder from '../ProductPlaceholder/ProductPlaceholder';

export default function ProductGrid({ title, category, brand, minPrice, maxPrice, limit, hideOnEmpty = true }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [imageErrors, setImageErrors] = useState({});
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get('q') || '';

  const handleImageError = (productId) => {
    setImageErrors(prev => ({ ...prev, [productId]: true }));
  };

  useEffect(() => {
    const params = new URLSearchParams();
    if (category) params.append('category', category);
    else if (!brand && !minPrice && !maxPrice) params.append('category', 'mobiles');
    if (searchQuery) params.append('q', searchQuery);
    if (brand) params.append('brand', brand);
    if (minPrice) params.append('minPrice', minPrice);
    if (maxPrice) params.append('maxPrice', maxPrice);
    if (limit) params.append('limit', limit);

    const url = `/api/products?${params.toString()}`;
    
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch products:", err);
        setLoading(false);
      });
  }, [category, searchQuery]);

  if (loading) return (
    <div className="container section" style={{ textAlign: 'center', padding: '3rem 0', color: '#aaa', fontSize: '13px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
      Loading inventory...
    </div>
  );

  const validProducts = Array.isArray(products) ? products : [];
  if (hideOnEmpty && validProducts.length === 0) return null;

  return (
    <section className={styles.collectionSection} id={title ? title.toLowerCase().replace(/\s+/g, '-') : 'products'}>
      <div className="container">
        {title && (
          <div className={styles.collectionHeader}>
            <h2 className={styles.collectionTitle}>{title}</h2>
            <div className={styles.collectionDivider} />
          </div>
        )}
        <div className={styles.grid}>
          {validProducts.map((product) => (
            <div key={product.id} className={styles.card}>
              <div className={styles.topBadges}>
                <span className={styles.ratingBadge}>★ {product.rating || '4.8'} | 12 reviews</span>
                <button className={styles.heartBtn} aria-label="Add to wishlist">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l8.84-8.84 1.06-1.06a5.5 5.5 0 000-7.78z" />
                  </svg>
                </button>
              </div>
              <div className={styles.badge}>{product.condition}</div>
              {product.variants && product.variants.length > 1 && (
                <div className={styles.variantBadge}>{product.variants.length} Variants Available</div>
              )}
              <div className={styles.imageWrapper}>
                {!imageErrors[product.id] ? (
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className={styles.image} 
                    onError={() => handleImageError(product.id)}
                  />
                ) : (
                  <ProductPlaceholder name={product.name} brand={product.brand} />
                )}
              </div>
              <div className={styles.info}>
                <div className={styles.meta}>
                  <span className={styles.brand}>{product.brand}</span>
                  <span className={styles.tag}>PTA APPROVED</span>
                </div>
                <h3 className={styles.name}>{product.name}</h3>
                <div className={styles.pricing}>
                  <span className={styles.price}>
                    {product.variants && product.variants.length > 1 ? 'From ' : ''}
                    Rs. {product.price}
                  </span>
                  {product.originalPrice && Number(product.originalPrice) > Number(product.price) && (
                    <>
                      <span className={styles.oldPrice}>Rs. {product.originalPrice}</span>
                      <span className={styles.discountPill}>
                        -{Math.round((1 - Number(product.price) / Number(product.originalPrice)) * 100)}%
                      </span>
                    </>
                  )}
                </div>
                <div className={styles.footer}>
                   <a 
                     href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '923233327011'}?text=I am interested in ${product.name}. Please show me available variants.`}
                     target="_blank"
                     rel="noopener noreferrer"
                     className={`${styles.buyBtn} holographic`}
                   >
                     ORDER ON WHATSAPP
                   </a>
                </div>
              </div>
              <Link href={`/product/${product.id}`} className={styles.fullCardLink} aria-label={`View details for ${product.name}`}></Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
