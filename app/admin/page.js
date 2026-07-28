"use client";
import { useState, useEffect } from 'react';
import AdminLayout from '@/components/AdminLayout/AdminLayout';
import styles from './Admin.module.css';

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    brand: 'Apple',
    category: 'Mobiles',
    condition: 'Excellent',
    price: '',
    originalPrice: '',
    image: '',
    warranty: '6 Months',
    rating: '4.8'
  });

  useEffect(() => {
    const loggedIn = localStorage.getItem('pam_admin_logged_in') === 'true';
    if (loggedIn) {
      setIsLoggedIn(true);
    }
    setCheckingAuth(false);
  }, []);

  const [deletingId, setDeletingId] = useState(null);

  const fetchProducts = async () => {
    try {
      const res = await fetch('/api/products');
      const data = await res.json();
      setProducts([...data].reverse());
      setLoading(false);
    } catch (error) {
      console.error('Failed to fetch products:', error);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      fetchProducts();
    }
  }, [isLoggedIn]);

  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (email.toLowerCase().trim() === 'pam@gmail.com' && password === 'pam123') {
      localStorage.setItem('pam_admin_logged_in', 'true');
      setIsLoggedIn(true);
      setLoginError('');
    } else {
      setLoginError('Invalid email or password. Please try again.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = editingId ? 'PATCH' : 'POST';
    const url = editingId ? `/api/products/${editingId}` : '/api/products';
    
    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      if (res.ok) {
        alert(editingId ? 'Market post updated!' : 'New product posted successfully!');
        resetForm();
        fetchProducts();
      } else {
        const err = await res.json();
        alert(`Error: ${err.error}`);
      }
    } catch (error) {
      alert('Failed to save product');
    }
  };

  const handleEdit = (product) => {
    setEditingId(product.id);
    setFormData({
      name: product.name || '',
      description: product.description || '',
      brand: product.brand || 'Apple',
      category: product.category || 'Mobiles',
      condition: product.condition || 'Excellent',
      price: product.price || '',
      originalPrice: product.originalPrice || '',
      image: product.image || '',
      warranty: product.warranty || '6 Months',
      rating: product.rating || '4.8'
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id) => {
    if (deletingId !== id) {
      setDeletingId(id);
      setTimeout(() => setDeletingId(null), 3000);
      return;
    }
    
    try {
      const res = await fetch(`/api/products/${id}`, {
        method: 'DELETE',
      });
      
      if (res.ok) {
        setDeletingId(null);
        fetchProducts();
      }
    } catch (error) {
      alert('Failed to delete product');
    }
  };

  const resetForm = () => {
    setEditingId(null);
    setFormData({
      name: '', description: '', brand: 'Apple', category: 'Mobiles', condition: 'Excellent',
      price: '', originalPrice: '', image: '', warranty: '6 Months', rating: '4.8'
    });
  };

  if (checkingAuth) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-outfit), sans-serif', color: '#888', background: '#f8f9fa' }}>
        Checking authorization...
      </div>
    );
  }

  if (!isLoggedIn) {
    return (
      <div className={styles.loginWrapper}>
        <div className={styles.loginCard}>
          <div className={styles.loginHeader}>
            <h2>PAM Admin</h2>
            <p>Enter your credentials to manage inventory</p>
          </div>
          <form onSubmit={handleAdminLogin} className={styles.loginForm}>
            <div className={styles.loginInputGroup}>
              <label>Email Address</label>
              <input 
                type="email" 
                placeholder="pam@gmail.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className={styles.loginInputGroup}>
              <label>Password</label>
              <input 
                type="password" 
                placeholder="••••••••" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {loginError && <div className={styles.errorBox}>{loginError}</div>}
            <button type="submit" className={styles.loginBtn}>Sign In</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <AdminLayout>
      <div className={styles.easyContainer}>
        <div className={styles.postCard}>
          <div className={styles.postHeader}>
            <div className={styles.avatar}>PAM</div>
            <div className={styles.postMeta}>
              <h2>{editingId ? 'Edit Product Posting' : 'Add New Inventory Item'}</h2>
              <span>Direct Sync: All updates appear instantly on PAM Pakistan Store</span>
            </div>
          </div>

          <form className={styles.easyForm} onSubmit={handleSubmit}>
            <div className={styles.formContent}>
               <input 
                 type="text" 
                 placeholder="What are you selling today? (e.g. iPhone 15 Pro Max)" 
                 value={formData.name}
                 onChange={(e) => setFormData({...formData, name: e.target.value})}
                 className={styles.titleInput}
                 required
               />
               
               <textarea 
                 placeholder="Describe the condition and key highlights... (like a Facebook post)"
                 value={formData.description}
                 onChange={(e) => setFormData({...formData, description: e.target.value})}
                 className={styles.descInput}
               />

               <div className={styles.metaSelectors}>
                 <select value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})}>
                    <option value="Mobiles">Select Category</option>
                    <option value="Mobiles">Mobiles</option>
                    <option value="Laptops">Laptops</option>
                    <option value="Accessories">Accessories</option>
                 </select>

                 <select value={formData.brand} onChange={(e) => setFormData({...formData, brand: e.target.value})}>
                    <option value="Apple">Select Brand</option>
                    <option value="Apple">Apple</option>
                    <option value="Samsung">Samsung</option>
                    <option value="Google">Google</option>
                    <option value="OnePlus">OnePlus</option>
                    <option value="Motorola">Motorola</option>
                 </select>

                 <select value={formData.condition} onChange={(e) => setFormData({...formData, condition: e.target.value})}>
                    <option value="Excellent">Select Condition</option>
                    <option value="New">Brand New</option>
                    <option value="Superb">Superb (Like New)</option>
                    <option value="Excellent">Excellent</option>
                    <option value="Good">Good</option>
                 </select>
               </div>

               <div className={styles.priceRow}>
                  <div className={styles.inputIconGroup}>
                    <span>Rs.</span>
                    <input 
                      type="number" 
                      placeholder="Sale Price" 
                      value={formData.price}
                      onChange={(e) => setFormData({...formData, price: e.target.value})}
                      required
                    />
                  </div>
                  <div className={styles.inputIconGroup}>
                    <span>Rs.</span>
                    <input 
                      type="number" 
                      placeholder="Old Price (Optional)" 
                      value={formData.originalPrice}
                      onChange={(e) => setFormData({...formData, originalPrice: e.target.value})}
                    />
                  </div>
               </div>

               <div className={styles.mediaUpload}>
                  <div className={styles.previewArea}>
                    {formData.image ? (
                      <div className={styles.previewImage}>
                        <img src={formData.image} alt="Preview" />
                        <button type="button" onClick={() => setFormData({...formData, image: ''})}>×</button>
                      </div>
                    ) : (
                      <input 
                        type="text" 
                        placeholder="Paste Product Image Link Here (High Quality)" 
                        value={formData.image}
                        onChange={(e) => setFormData({...formData, image: e.target.value})}
                        className={styles.urlInput}
                      />
                    )}
                  </div>
               </div>
            </div>

            <div className={styles.postFooter}>
               <button type="submit" className={styles.postBtn}>
                  {editingId ? 'Update Post' : 'Post to PAM Marketplace'}
               </button>
               {editingId && <button type="button" onClick={resetForm} className={styles.cancelBtn}>Cancel</button>}
            </div>
          </form>
        </div>

        <section className={styles.inventoryList}>
          <div className={styles.listHeader}>
             <h3>Marketplace Feed ({products.length})</h3>
          </div>
          <div className={styles.feedGrid}>
            {products.map((product) => (
              <div key={product.id} className={styles.feedItem}>
                <div className={styles.itemImage}>
                   <img src={product.image} alt={product.name} />
                </div>
                <div className={styles.itemContent}>
                   <h4>{product.name}</h4>
                   <span className={styles.itemPrice}>Rs. {product.price}</span>
                   <div className={styles.itemActions}>
                      <button onClick={() => handleEdit(product)}>Edit</button>
                      <button 
                        onClick={() => handleDelete(product.id)}
                        className={deletingId === product.id ? styles.confirmDelete : ''}
                      >
                        {deletingId === product.id ? 'Confirm?' : 'Delete'}
                      </button>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </AdminLayout>
  );
}
