"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './ProductGrid.module.css';

export default function ProductGrid({ category }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = category ? `/api/products?category=${category}` : '/api/products';
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
  }, [category]);

  if (loading) return <div className="container text-center section">Discovering Premium Inventory...</div>;

  return (
    <section className="section" id="products">
      <div className="container">
        <div className={styles.grid}>
          {products.map((product) => (
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
              <Link href={`/product/${product.id}`} className={styles.imageLink}>
                <div className={styles.imageWrapper}>
                  <img src={product.image || 'https://via.placeholder.com/400'} alt={product.name} className={styles.image} />
                </div>
              </Link>
              <div className={styles.info}>
                <div className={styles.meta}>
                  <span className={styles.brand}>{product.brand}</span>
                  <span className={styles.tag}>PTA APPROVED</span>
                </div>
                <Link href={`/product/${product.id}`}>
                  <h3 className={styles.name}>{product.name}</h3>
                </Link>
                <div className={styles.pricing}>
                  <span className={styles.price}>Rs. {product.price}</span>
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
                     href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '923233327011'}?text=I am interested in ${product.name} priced at Rs. ${product.price}`}
                     target="_blank"
                     rel="noopener noreferrer"
                     className={`${styles.buyBtn} holographic`}
                   >
                     ORDER ON WHATSAPP
                   </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
