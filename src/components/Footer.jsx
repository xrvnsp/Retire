import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ 
      backgroundColor: '#2A0A3D', // Match Hero Background
      color: 'white', 
      padding: '5rem 0',
      textAlign: 'center',
      borderTop: '1px solid rgba(255,255,255,0.05)'
    }}>
      <div className="container">
        <h2 style={{ color: '#E1BEE7', marginBottom: '1.2rem', fontSize: '2.2rem', fontFamily: 'var(--font-serif)' }}>
          Mrs. Sellammal Ravindiran
        </h2>
        <p style={{ opacity: 0.6, marginBottom: '2.5rem', letterSpacing: '2px', fontSize: '0.9rem', textTransform: 'uppercase' }}>
          Headmistress | Educator | Leader | Mother
        </p>
        
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          gap: '0.6rem',
          fontSize: '1.1rem',
          color: 'rgba(255,255,255,0.9)'
        }}>
          Made with <Heart size={20} fill="#E1BEE7" color="#E1BEE7" /> by the Ravindiran Family
        </div>
        
        <div style={{ marginTop: '4rem', opacity: 0.3, fontSize: '0.85rem' }}>
          © {new Date().getFullYear()} All Rights Reserved. Celebrating a Legacy of Learning.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
