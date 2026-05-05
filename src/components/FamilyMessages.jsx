import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { useMediaQuery } from './useMediaQuery';

const messages = [
  {
    name: "Ravindiran",
    relation: "Husband",
    text: "Your dedication to your work has always been an inspiration to me. I'm so proud of all you've achieved."
  },
  {
    name: "Venkatesh",
    relation: "Son",
    text: "To the best mom and headmistress, congratulations on a wonderful career. Now it's time to relax and enjoy!"
  },
  {
    name: "Kayalvizhi & Saravana Prakash",
    relation: "Daughter & Son-in-law",
    text: "You've taught thousands of children, but to me, you've always been my first and best teacher. Love you, Amma!"
  },
  {
    name: "The Grandkids",
    relation: "Grandchildren",
    text: "Happy retirement, Grandma! We can't wait for more stories and playtime with you."
  }
];

const FamilyMessages = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <section className="family-messages" style={{ backgroundColor: '#fff', padding: isMobile ? '70px 0' : '120px 0' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: isMobile ? '4rem' : '7rem' }}
        >
          <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', color: 'var(--primary-dark)' }}>Heartfelt <span style={{ color: 'var(--primary)' }}>Notes</span></h2>
          <div style={{ width: '80px', height: '5px', backgroundColor: 'var(--primary)', margin: '1.5rem auto', borderRadius: '10px', opacity: 0.3 }} />
        </motion.div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: isMobile ? '2.5rem' : '4rem' 
        }}>
          {messages.map((msg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              className={index % 2 === 0 ? "brick-card" : "brick-card-purple"}
              style={{ 
                padding: isMobile ? '2.5rem 2rem' : '4rem 3rem', 
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: 'none',
                boxShadow: index % 2 === 0 
                  ? '0 20px 40px rgba(106, 13, 173, 0.05)' 
                  : '4px 4px 0px var(--primary-dark)'
              }}
            >
              <div>
                <Quote size={isMobile ? 40 : 50} color="var(--primary)" style={{ opacity: 0.15, marginBottom: '2rem' }} />
                <p style={{ 
                  fontSize: isMobile ? '1.1rem' : '1.25rem', 
                  fontStyle: 'italic', 
                  marginBottom: '2.5rem',
                  color: 'var(--text)',
                  lineHeight: '1.8',
                  fontWeight: '300'
                }}>
                  "{msg.text}"
                </p>
              </div>
              <div style={{ borderTop: `1px solid ${index % 2 === 0 ? '#F3E5F5' : 'rgba(48, 25, 52, 0.1)'}`, paddingTop: '2rem' }}>
                <h4 style={{ fontSize: '1.3rem', color: 'var(--primary-dark)', fontWeight: 'bold', marginBottom: '0.3rem' }}>{msg.name}</h4>
                <span style={{ 
                  color: 'var(--primary)', 
                  fontWeight: '700',
                  letterSpacing: '1px',
                  fontSize: '0.85rem',
                  textTransform: 'uppercase'
                }}>
                  {msg.relation}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FamilyMessages;
