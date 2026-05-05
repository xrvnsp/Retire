import { motion } from 'framer-motion';
import { MapPin, Phone, PartyPopper } from 'lucide-react';
import { useMediaQuery } from './useMediaQuery';

const MapLocation = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <section className="map-location" style={{ backgroundColor: 'var(--bg)', padding: isMobile ? '60px 0' : '100px 0' }}>
      <div className="container">
        <div style={{ 
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: isMobile ? '3rem' : '4rem',
          alignItems: 'center'
        }}>
          <motion.div
            initial={{ opacity: 0, x: isMobile ? 0 : -50, y: isMobile ? 30 : 0 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            style={{ flex: 1, textAlign: isMobile ? 'center' : 'left' }}
          >
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: isMobile ? 'center' : 'flex-start',
              gap: '1rem', 
              marginBottom: '1rem' 
            }}>
              <PartyPopper color="var(--primary-dark)" size={isMobile ? 24 : 32} />
              <span style={{ fontWeight: 'bold', letterSpacing: '2px', color: 'var(--primary-dark)', textTransform: 'uppercase', fontSize: isMobile ? '0.8rem' : '1rem' }}>
                Event Venue
              </span>
            </div>
            
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '1.5rem', lineHeight: '1.2' }}>
              Join the <span style={{ color: 'var(--primary-dark)' }}>Celebration</span>
            </h2>
            
            <p style={{ fontSize: isMobile ? '1.1rem' : '1.2rem', marginBottom: '2.5rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
              We are honored to celebrate Mrs. Sellammal's retirement at <strong>R K Mahal</strong>. 
              Your presence will make this milestone even more special.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="brick-card" style={{ 
                display: 'flex', 
                flexDirection: isMobile ? 'column' : 'row',
                alignItems: isMobile ? 'center' : 'flex-start', 
                gap: '1rem', 
                padding: '1.5rem',
                textAlign: isMobile ? 'center' : 'left'
              }}>
                <div style={{ padding: '10px', backgroundColor: 'var(--primary-light)', borderRadius: '8px' }}>
                  <MapPin color="var(--secondary)" size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '0.3rem' }}>Location</h4>
                  <p style={{ opacity: 0.8, fontSize: '0.9rem' }}>R K Mahal, Mariyamman Kovil St, Vizhithiyur, Puducherry - 609607</p>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: isMobile ? 'center' : 'flex-start', alignItems: 'center', gap: '0.8rem' }}>
                <Phone size={18} color="var(--primary-dark)" />
                <span style={{ fontWeight: '600', fontSize: '0.9rem' }}>Venue Contact Available</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: isMobile ? 0 : 50, y: isMobile ? 30 : 0 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            style={{ 
              width: '100%',
              flex: 1,
              height: isMobile ? '350px' : '500px', 
              borderRadius: '4px', 
              overflow: 'hidden',
              boxShadow: isMobile ? '10px 10px 0px var(--primary)' : '20px 20px 0px var(--primary)',
              border: '2px solid #eee',
              position: 'relative'
            }}
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.7509760567496!2d79.7597888!3d10.9065205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a55178ea6061a3d%3A0xad0e6d7892d6497f!2sR%20K%20Mahal!5e0!3m2!1sen!2sin!4v1778001187807!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Celebration Venue Location"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MapLocation;
