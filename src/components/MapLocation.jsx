import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

const MapLocation = () => {
  return (
    <section className="map-location" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
          gap: '4rem',
          alignItems: 'center'
        }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Visit the School</h2>
            <p style={{ fontSize: '1.2rem', marginBottom: '3rem', color: 'var(--text-muted)' }}>
              Mrs. Sellammal spent many dedicated years at Panchayat Union Middle School, Kuthalam. 
              The school holds a special place in her heart and her legacy.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ padding: '12px', backgroundColor: 'var(--primary-light)', borderRadius: '12px' }}>
                  <MapPin color="var(--primary)" />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.2rem' }}>Address</h4>
                  <p>Panchayat Union Middle School, Kuthalam, Tamil Nadu - 609801</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ padding: '12px', backgroundColor: 'var(--primary-light)', borderRadius: '12px' }}>
                  <Phone color="var(--primary)" />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.2rem' }}>Contact</h4>
                  <p>+91 (Placeholder Number)</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ padding: '12px', backgroundColor: 'var(--primary-light)', borderRadius: '12px' }}>
                  <Mail color="var(--primary)" />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.2rem' }}>Email</h4>
                  <p>pums.kuthalam@email.com (Placeholder)</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ 
              height: '450px', 
              borderRadius: '30px', 
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
              border: '10px solid white'
            }}
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15668.614603613032!2d79.5204781!3d11.0263651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a552f9c89495039%3A0x7d3910c2c31e9894!2sKuthalam%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1714925000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="School Location"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MapLocation;
