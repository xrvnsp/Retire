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
      backgroundColor: 'var(--secondary)',
      padding: isMobile ? '80px 20px' : '20px'
    }}>
      {/* Dynamic Background Shapes */}
      {!isMobile && (
        <>
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{
              position: 'absolute',
              top: '-10%',
              right: '-10%',
              width: '600px',
              height: '600px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, var(--primary) 0%, transparent 70%)',
              zIndex: 1
            }}
          />
          <motion.div
            animate={{ scale: [1, 1.3, 1], rotate: [0, -45, 0], opacity: [0.05, 0.1, 0.05] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            style={{
              position: 'absolute',
              bottom: '-10%',
              left: '-10%',
              width: '500px',
              height: '500px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, var(--primary-light) 0%, transparent 70%)',
              zIndex: 1
            }}
          />
        </>
      )}

      <div className="container" style={{ zIndex: 10, maxWidth: '1100px' }}>
        <div style={{ 
          display: 'flex',
          flexDirection: isMobile ? 'column-reverse' : 'row',
          gap: isMobile ? '3rem' : '4rem',
          alignItems: 'center',
          textAlign: isMobile ? 'center' : 'left'
        }}>
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: isMobile ? 0 : -100, y: isMobile ? 50 : 0 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1, ease: "backOut" }}
            style={{ flex: 1 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              style={{ 
                color: 'var(--primary)', 
                fontSize: isMobile ? '0.9rem' : '1.2rem', 
                fontWeight: 'bold', 
                letterSpacing: '4px',
                textTransform: 'uppercase',
                marginBottom: '1rem'
              }}
            >
              Honoring 35 Glorious Years
            </motion.div>
            
            <h1 style={{ 
              fontSize: 'clamp(2.5rem, 10vw, 5.5rem)', 
              color: 'white',
              lineHeight: '1.1',
              marginBottom: '1.5rem',
              fontFamily: 'var(--font-serif)'
            }}>
              A Legacy of <span style={{ color: 'var(--primary-light)' }}>Impact.</span>
            </h1>

            <p style={{ 
              fontSize: isMobile ? '1.1rem' : '1.3rem', 
              color: 'rgba(255,255,255,0.8)', 
              maxWidth: '500px',
              margin: isMobile ? '0 auto 2.5rem' : '0 0 3rem',
              lineHeight: '1.6'
            }}>
              Celebrating the retirement of <strong>Mrs. Sellammal Ravindiran</strong>. 
              A teacher who didn't just teach, but transformed lives.
            </p>

            <motion.div 
              style={{ display: 'flex', justifyContent: isMobile ? 'center' : 'flex-start' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <a href="#milestones" className="brick-card-purple" style={{
                padding: '1.2rem 2.5rem',
                fontSize: '1.1rem',
                textDecoration: 'none',
                color: 'var(--primary-dark)',
                fontWeight: 'bold',
                borderRadius: '4px',
                display: 'inline-block',
                boxShadow: isMobile ? '4px 4px 0px white' : '6px 6px 0px white'
              }}>
                See Her Journey
              </a>
            </motion.div>
          </motion.div>

          {/* Featured Image Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "backOut", delay: 0.3 }}
            style={{ position: 'relative', width: isMobile ? '90%' : '45%', maxWidth: '400px' }}
          >
            <div style={{
              position: 'relative',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: isMobile ? '15px 15px 0px var(--primary)' : '30px 30px 0px var(--primary)',
              border: isMobile ? '8px solid white' : '15px solid white'
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
                background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                padding: isMobile ? '20px 15px' : '40px 20px 20px',
                color: 'white',
                textAlign: 'left'
              }}>
                <h3 style={{ fontSize: isMobile ? '1.4rem' : '1.8rem', color: 'var(--primary-light)' }}>Mrs. Sellammal</h3>
                <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>Headmistress, PUMS Kuthalam</p>
              </div>
            </div>
            
            {/* Floating Badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="brick-card"
              style={{
                position: 'absolute',
                top: isMobile ? '-10px' : '-20px',
                right: isMobile ? '-10px' : '-40px',
                padding: '8px 15px',
                backgroundColor: 'white',
                zIndex: 20,
                fontSize: '0.9rem'
              }}
            >
              🏆 Excellence
            </motion.div>

            {!isMobile && (
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="brick-card-purple"
                style={{
                  position: 'absolute',
                  bottom: '40px',
                  left: '-40px',
                  padding: '10px 20px',
                  zIndex: 20,
                  boxShadow: '4px 4px 0px var(--secondary)'
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
