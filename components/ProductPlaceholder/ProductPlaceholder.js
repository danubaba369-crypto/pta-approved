"use client";

export default function ProductPlaceholder({ name, brand, className }) {
  // Generate a consistent color based on the brand name
  const getBrandColors = (brandName) => {
    const b = (brandName || "Unknown").toLowerCase();
    if (b.includes('samsung')) return { primary: '#034EA2', secondary: '#000000' };
    if (b.includes('nothing')) return { primary: '#000000', secondary: '#333333' };
    if (b.includes('xiaomi') || b.includes('redmi')) return { primary: '#FF6700', secondary: '#333333' };
    if (b.includes('infinix')) return { primary: '#4CAF50', secondary: '#1B5E20' };
    if (b.includes('itel')) return { primary: '#FF0000', secondary: '#8B0000' };
    if (b.includes('honor')) return { primary: '#00B5E2', secondary: '#003B5C' };
    return { primary: '#1E293B', secondary: '#0F172A' }; // Default Slate
  };

  const colors = getBrandColors(brand);
  const initials = brand.substring(0, 2).toUpperCase();

  return (
    <div className={className} style={{ 
      width: '100%', 
      height: '100%', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
      borderRadius: 'inherit',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative Elements */}
      <div style={{
        position: 'absolute',
        top: '-20%',
        right: '-20%',
        width: '60%',
        height: '60%',
        background: 'rgba(255,255,255,0.05)',
        borderRadius: '50%',
        filter: 'blur(40px)'
      }} />
      
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
        zIndex: 1,
        padding: '20px',
        textAlign: 'center'
      }}>
        <div style={{
           fontSize: '32px',
           fontWeight: '900',
           color: '#fff',
           letterSpacing: '4px',
           textShadow: '0 4px 10px rgba(0,0,0,0.3)'
        }}>PAM</div>
        
        <div style={{
          width: '80px',
          height: '140px',
          border: '2px solid rgba(255,255,255,0.2)',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative'
        }}>
           <div style={{
             fontSize: '12px',
             fontWeight: '800',
             color: 'rgba(255,255,255,0.5)',
             textTransform: 'uppercase'
           }}>{initials}</div>
           {/* Phone Speaker Notch */}
           <div style={{
             position: 'absolute',
             top: '8px',
             width: '20px',
             height: '3px',
             background: 'rgba(255,255,255,0.2)',
             borderRadius: '2px'
           }} />
        </div>

        <div style={{
          fontSize: '11px',
          fontWeight: '700',
          color: 'rgba(255,255,255,0.7)',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          maxWidth: '120px'
        }}>
          {name}
        </div>
      </div>
      
      {/* Bottom Shine */}
      <div style={{
        position: 'absolute',
        bottom: '0',
        left: '0',
        right: '0',
        height: '40%',
        background: 'linear-gradient(to top, rgba(0,0,0,0.2), transparent)',
        pointerEvents: 'none'
      }} />
    </div>
  );
}
