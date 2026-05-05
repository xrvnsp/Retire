import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, PartyPopper } from 'lucide-react';

const MapLocation = () => {
  return (
    <section className="map-location" style={{ backgroundColor: 'var(--bg)', padding: '100px 0' }}>
      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '4rem',
          alignItems: 'center'
        }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <PartyPopper color="var(--primary-dark)" size={32} />
              <span style={{ fontWeight: 'bold', letterSpacing: '2px', color: 'var(--primary-dark)', textTransform: 'uppercase' }}>
                Event Venue
              </span>
            </div>
            
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '2rem', lineHeight: '1.2' }}>
              Join the <span style={{ color: 'var(--primary-dark)' }}>Celebration</span>
            </h2>
            
            <p style={{ fontSize: '1.2rem', marginBottom: '3rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
              We are honored to celebrate Mrs. Sellammal's retirement at <strong>R K Mahal</strong>. 
              Your presence will make this milestone even more special as we honor her 35-year legacy.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div className="brick-card" style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem', padding: '1.5rem' }}>
                <div style={{ padding: '12px', backgroundColor: 'var(--primary-light)', borderRadius: '8px' }}>
                  <MapPin color="var(--secondary)" />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Location</h4>
                  <p style={{ opacity: 0.8 }}>R K Mahal, Mariyamman Kovil St, Vizhithiyur, Seshamoolai, Puducherry - 609607</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <Phone size={20} color="var(--primary-dark)" />
                  <span style={{ fontWeight: '600' }}>Venue Contact Available</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ 
              height: '500px', 
              borderRadius: '4px', 
              overflow: 'hidden',
              boxShadow: '20px 20px 0px var(--primary)',
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
