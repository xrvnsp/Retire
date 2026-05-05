import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ 
      backgroundColor: 'var(--secondary)', 
      color: 'white', 
      padding: '4rem 0',
      textAlign: 'center'
    }}>
      <div className="container">
        <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '2rem' }}>
          Mrs. Sellammal Ravindiran
        </h2>
        <p style={{ opacity: 0.7, marginBottom: '2rem' }}>
          Headmistress | Educator | Leader | Mother
        </p>
        
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          gap: '0.5rem',
          fontSize: '1.1rem'
        }}>
          Made with <Heart size={20} fill="var(--accent)" color="var(--accent)" /> by the Ravindiran Family
        </div>
        
        <div style={{ marginTop: '3rem', opacity: 0.5, fontSize: '0.9rem' }}>
          © {new Date().getFullYear()} All Rights Reserved. Celebrating a Legacy of Learning.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
