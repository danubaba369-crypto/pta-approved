"use client";
import { useState } from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import AnnouncementBar from '@/components/AnnouncementBar/AnnouncementBar';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const router = useRouter();

  const handleSendCode = (e) => {
    e.preventDefault();
    if (phone.length >= 10) {
      // For MVP: Open WhatsApp to request code from admin
      const whatsappNumber = "923233327011";
      const message = `Hi PAM! I want to login to my account. My number is ${phone}. Please send me the verification code.`;
      const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
      setStep(2);
    }
  };

  const handleVerify = (e) => {
    e.preventDefault();
    if (otp.length === 6) {
      router.push('/');
    }
  };

  return (
    <main>
      <AnnouncementBar />
      <Header />
      <div className="container section" style={{ maxWidth: '450px', marginTop: '3rem' }}>
        <div style={{ background: '#fff', padding: '3rem', borderRadius: '24px', boxShadow: '0 15px 40px rgba(0,0,0,0.06)', border: '1px solid #f0f0f0' }}>
          <h1 style={{ fontSize: '1.8rem', textAlign: 'center', marginBottom: '0.5rem', fontWeight: '800' }}>
            {step === 1 ? 'Welcome Back!' : 'Enter Code'}
          </h1>
          <p style={{ textAlign: 'center', color: '#666', marginBottom: '2.5rem', fontSize: '0.95rem' }}>
            {step === 1 
              ? 'Login securely with your WhatsApp number.' 
              : `We've sent a 6-digit code to ${phone} via WhatsApp.`}
          </p>

          <form onSubmit={step === 1 ? handleSendCode : handleVerify}>
            {step === 1 ? (
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', marginBottom: '0.5rem', color: '#333' }}>WHATSAPP NUMBER</label>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <span style={{ padding: '0.8rem 1rem', background: '#f8f9fa', borderRadius: '10px', border: '1px solid #eee', color: '#666' }}>+92</span>
                  <input 
                    type="tel" 
                    placeholder="3xx xxxxxxx" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    style={{ flex: 1, padding: '0.8rem 1.2rem', borderRadius: '10px', border: '1px solid #eee', fontSize: '1rem', outline: 'none' }}
                    required
                  />
                </div>
              </div>
            ) : (
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', marginBottom: '0.5rem', color: '#333' }}>6-DIGIT CODE</label>
                <input 
                  type="text" 
                  maxLength={6}
                  placeholder="000 000" 
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  style={{ width: '100%', padding: '0.8rem 1.2rem', borderRadius: '10px', border: '1px solid #eee', fontSize: '1.2rem', textAlign: 'center', letterSpacing: '0.3em', outline: 'none' }}
                  required
                />
              </div>
            )}

            <button 
              type="submit"
              style={{ 
                width: '100%',
                padding: '1rem',
                background: step === 1 ? '#25D366' : '#111',
                color: '#fff',
                borderRadius: '12px',
                border: 'none',
                fontWeight: '700',
                fontSize: '1rem',
                cursor: 'pointer',
                transition: 'opacity 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}
            >
              {step === 1 ? (
                <>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.01 2c-5.52 0-9.99 4.47-9.99 9.99 0 1.74.45 3.37 1.24 4.78l-1.32 4.83 4.95-1.3c1.39.75 2.97 1.18 4.66 1.18 5.52 0 10-4.48 10-10S17.53 2 12.01 2zm6.36 14.83c-.27.76-1.58 1.47-2.18 1.56-.61.09-1.2.14-3.48-.79-2.76-1.12-4.52-3.92-4.66-4.1-.14-.19-1.14-1.51-1.14-2.87 0-1.36.71-2.03.96-2.3.26-.27.56-.34.75-.34.19 0 .37.01.53.02.17.01.39-.06.6.45.2.53.71 1.72.77 1.85.06.13.1.28.01.46-.09.18-.14.28-.27.44-.14.15-.29.35-.41.47-.14.13-.28.27-.12.54.16.27.7 1.15 1.5 1.86.8.71 1.48.92 1.8.92.32 0 .5-.14.68-.35.18-.21.78-.9.99-1.2.21-.3.42-.25.7-.15.28.1.1.2.3.4.19 1.1.24 1.43z"/>
                  </svg>
                  GET CODE ON WHATSAPP
                </>
              ) : 'VERIFY & LOGIN'}
            </button>

            {step === 2 && (
              <button 
                type="button" 
                onClick={() => setStep(1)}
                style={{ width: '100%', background: 'none', border: 'none', color: '#888', marginTop: '1rem', fontSize: '0.85rem', cursor: 'pointer' }}
              >
                Change Phone Number
              </button>
            )}
          </form>
        </div>
      </div>
      <Footer />
    </main>
  );
}
