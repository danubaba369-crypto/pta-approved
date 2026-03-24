"use client";
import { useState } from 'react';
import styles from './SidebarFilter.module.css';

export default function SidebarFilter({ onFilterChange }) {
  const [priceRange, setPriceRange] = useState({ min: 0, max: 500000 });
  const [selectedBrands, setSelectedBrands] = useState([]);

  const brands = ['Apple', 'Samsung', 'Google', 'OnePlus', 'Motorola'];
  const ramOptions = ['4GB', '6GB', '8GB', '12GB', '16GB'];
  const storageOptions = ['64GB', '128GB', '256GB', '512GB', '1TB'];

  return (
    <aside className={styles.sidebar}>
      <div className={styles.section}>
        <h3>Price Range</h3>
        <div className={styles.priceInputs}>
          <input 
            type="number" 
            placeholder="Min" 
            value={priceRange.min} 
            onChange={(e) => setPriceRange({...priceRange, min: e.target.value})}
          />
          <span>-</span>
          <input 
            type="number" 
            placeholder="Max" 
            value={priceRange.max} 
            onChange={(e) => setPriceRange({...priceRange, max: e.target.value})}
          />
        </div>
      </div>

      <div className={styles.section}>
        <h3>Brand</h3>
        <div className={styles.options}>
          {brands.map(brand => (
            <label key={brand} className={styles.checkboxLabel}>
              <input type="checkbox" /> {brand}
            </label>
          ))}
        </div>
      </div>

      <div className={styles.section}>
        <h3>RAM</h3>
        <div className={styles.options}>
          {ramOptions.map(ram => (
            <label key={ram} className={styles.checkboxLabel}>
              <input type="checkbox" /> {ram}
            </label>
          ))}
        </div>
      </div>

      <div className={styles.section}>
        <h3>Storage</h3>
        <div className={styles.options}>
          {storageOptions.map(storage => (
            <label key={storage} className={styles.checkboxLabel}>
              <input type="checkbox" /> {storage}
            </label>
          ))}
        </div>
      </div>

      <button className={styles.applyBtn}>Apply Filters</button>
    </aside>
  );
}
