import { motion } from 'framer-motion';
import heroImage from '../assets/hero.png';
import { useMediaQuery } from './useMediaQuery';

const Hero = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <section className="hero" style={{ 
      minHeight: isMobile ? 'auto' : '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      backgroundColor: '#2A0A3D', // Deep Velvet Background
      padding: isMobile ? '80px 20px' : '20px'
    }}>
      {/* Dynamic Background Shapes */}
      {!isMobile && (
        <>
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            style={{
              position: 'absolute',
              top: '-10%',
              right: '-5%',
              width: '800px',
              height: '800px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, #6A0DAD 0%, transparent 70%)',
              zIndex: 1
            }}
          />
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            style={{
              position: 'absolute',
              bottom: '-20%',
              left: '-10%',
              width: '700px',
              height: '700px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, #9370DB 0%, transparent 70%)',
              zIndex: 1
            }}
          />
        </>
      )}

      <div className="container" style={{ zIndex: 10, maxWidth: '1100px' }}>
        <div style={{ 
          display: 'flex',
          flexDirection: isMobile ? 'column-reverse' : 'row',
          gap: isMobile ? '3rem' : '5rem',
          alignItems: 'center',
          textAlign: isMobile ? 'center' : 'left'
        }}>
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: isMobile ? 0 : -100, y: isMobile ? 50 : 0 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1, ease: "backOut" }}
            style={{ flex: 1.2 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              style={{ 
                color: '#D1C4E9', // Light Purple
                fontSize: isMobile ? '0.9rem' : '1.1rem', 
                fontWeight: 'bold', 
                letterSpacing: '5px',
                textTransform: 'uppercase',
                marginBottom: '1.2rem'
              }}
            >
              Honoring 35 Years of Leadership
            </motion.div>
            
            <h1 style={{ 
              fontSize: 'clamp(2.8rem, 10vw, 5.8rem)', 
              color: 'white',
              lineHeight: '1.05',
              marginBottom: '2rem',
              fontFamily: 'var(--font-serif)',
              textShadow: '0 10px 30px rgba(0,0,0,0.3)'
            }}>
              A Legacy of <span style={{ color: '#E1BEE7' }}>Grace.</span>
            </h1>

            <p style={{ 
              fontSize: isMobile ? '1.1rem' : '1.35rem', 
              color: 'rgba(255,255,255,0.85)', 
              maxWidth: '550px',
              margin: isMobile ? '0 auto 3rem' : '0 0 3.5rem',
              lineHeight: '1.7',
              fontWeight: '300'
            }}>
              Celebrating the illustrious retirement of <strong>Mrs. Sellammal Ravindiran</strong>. 
              A journey of wisdom, passion, and unparalleled education.
            </p>

            <motion.div 
              style={{ display: 'flex', justifyContent: isMobile ? 'center' : 'flex-start' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <a href="#milestones" className="brick-card-purple" style={{
                padding: '1.4rem 3rem',
                fontSize: '1.1rem',
                textDecoration: 'none',
                color: 'var(--primary-dark)',
                fontWeight: 'bold',
                borderRadius: '4px',
                display: 'inline-block',
                boxShadow: isMobile ? '4px 4px 0px #E1BEE7' : '8px 8px 0px #E1BEE7',
                transition: 'var(--transition-smooth)'
              }}>
                Explore Her Legacy
              </a>
            </motion.div>
          </motion.div>

          {/* Featured Image Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "backOut", delay: 0.3 }}
            style={{ position: 'relative', width: isMobile ? '95%' : '45%', maxWidth: '420px' }}
          >
            <div style={{
              position: 'relative',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: isMobile ? '15px 15px 0px #6A0DAD' : '30px 30px 0px #6A0DAD',
              border: isMobile ? '6px solid white' : '12px solid white'
            }}>
              <img 
                src={heroImage} 
                alt="Mrs. Sellammal Ravindiran" 
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
              <div style={{
                position: 'absolute',
                bottom: '0',
                left: '0',
                width: '100%',
                background: 'linear-gradient(transparent, rgba(48, 27, 52, 0.95))',
                padding: isMobile ? '25px 20px' : '45px 25px 25px',
                color: 'white',
                textAlign: 'left'
              }}>
                <h3 style={{ fontSize: isMobile ? '1.5rem' : '2rem', color: '#E1BEE7' }}>Mrs. Sellammal</h3>
                <p style={{ fontSize: '0.95rem', opacity: 0.9, letterSpacing: '1px' }}>Headmistress | PUMS Kuthalam</p>
              </div>
            </div>
            
            {/* Floating Badges */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="brick-card"
              style={{
                position: 'absolute',
                top: isMobile ? '-10px' : '-35px',
                right: isMobile ? '-10px' : '-45px',
                padding: '10px 20px',
                backgroundColor: 'white',
                zIndex: 25,
                fontSize: '0.95rem',
                color: 'var(--primary-dark)',
                fontWeight: 'bold'
              }}
            >
              👑 Excellence
            </motion.div>

            {!isMobile && (
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="brick-card-purple"
                style={{
                  position: 'absolute',
                  bottom: '-25px', // Move below the name area
                  left: '-40px',   // Shift further left
                  padding: '12px 24px',
                  zIndex: 25,
                  boxShadow: '6px 6px 0px #301934',
                  fontWeight: 'bold',
                  color: 'var(--primary-dark)'
                }}
              >
                ✨ Leadership
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
