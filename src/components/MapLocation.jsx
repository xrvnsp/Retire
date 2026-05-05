import { motion } from 'framer-motion';
import { MapPin, Phone, PartyPopper } from 'lucide-react';
import { useMediaQuery } from './useMediaQuery';

const MapLocation = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <section className="map-location" style={{ backgroundColor: '#F9F7FB', padding: isMobile ? '70px 0' : '120px 0' }}>
      <div className="container">
        <div style={{ 
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: isMobile ? '4rem' : '6rem',
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
              marginBottom: '1.5rem' 
            }}>
              <PartyPopper color="var(--primary)" size={isMobile ? 28 : 36} />
              <span style={{ fontWeight: 'bold', letterSpacing: '4px', color: 'var(--primary)', textTransform: 'uppercase', fontSize: isMobile ? '0.85rem' : '1rem' }}>
                Join Us
              </span>
            </div>
            
            <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', marginBottom: '2rem', lineHeight: '1.1', color: 'var(--primary-dark)' }}>
              The Celebration <span style={{ color: 'var(--primary)' }}>Venue</span>
            </h2>
            
            <p style={{ fontSize: isMobile ? '1.15rem' : '1.3rem', marginBottom: '3rem', color: 'var(--text-muted)', lineHeight: '1.8', fontWeight: '300' }}>
              We would be delighted to have you join us for this special milestone at **R K Mahal**. 
              Let's make this retirement celebration an unforgettable memory for Mrs. Sellammal.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div className="brick-card-purple" style={{ 
                display: 'flex', 
                flexDirection: isMobile ? 'column' : 'row',
                alignItems: isMobile ? 'center' : 'flex-start', 
                gap: '1.5rem', 
                padding: '2rem',
                textAlign: isMobile ? 'center' : 'left',
                borderRadius: '8px',
                border: 'none'
              }}>
                <div style={{ padding: '15px', backgroundColor: 'white', borderRadius: '50%', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
                  <MapPin color="var(--primary)" size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--primary-dark)' }}>R K Mahal</h4>
                  <p style={{ opacity: 0.8, fontSize: '0.95rem', color: 'var(--primary-dark)', lineHeight: '1.5' }}>
                    Mariyamman Kovil St, Vizhithiyur, Puducherry - 609607
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: isMobile ? 'center' : 'flex-start', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid var(--primary)', display: 'flex', alignItems: 'center', justifySelf: 'center', justifyContent: 'center' }}>
                  <Phone size={18} color="var(--primary)" />
                </div>
                <span style={{ fontWeight: '600', fontSize: '1rem', color: 'var(--primary-dark)' }}>Venue Contact Details Provided in Invite</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            style={{ 
              width: '100%',
              flex: 1,
              height: isMobile ? '400px' : '550px', 
              borderRadius: '24px', 
              overflow: 'hidden',
              boxShadow: isMobile ? '15px 15px 0px var(--primary)' : '30px 30px 0px var(--primary)',
              border: '4px solid white',
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
