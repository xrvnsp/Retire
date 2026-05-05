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
    <section className="family-messages" style={{ backgroundColor: '#fff', padding: isMobile ? '60px 0' : '100px 0' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: isMobile ? '3rem' : '5rem' }}
        >
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>Heartfelt <span style={{ color: 'var(--primary-dark)' }}>Notes</span></h2>
          <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--primary)', margin: '1rem auto' }} />
        </motion.div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: isMobile ? '2rem' : '3rem' 
        }}>
          {messages.map((msg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={index % 2 === 0 ? "brick-card" : "brick-card-yellow"}
              style={{ 
                padding: isMobile ? '2rem 1.5rem' : '3rem 2rem', 
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <Quote size={isMobile ? 30 : 40} color={index % 2 === 0 ? "var(--primary)" : "var(--secondary)"} style={{ opacity: 0.2, marginBottom: '1rem' }} />
                <p style={{ 
                  fontSize: isMobile ? '1rem' : '1.1rem', 
                  fontStyle: 'italic', 
                  marginBottom: '1.5rem',
                  color: 'var(--text)',
                  lineHeight: '1.7'
                }}>
                  "{msg.text}"
                </p>
              </div>
              <div style={{ borderTop: `1px solid ${index % 2 === 0 ? '#eee' : 'rgba(0,0,0,0.1)'}`, paddingTop: '1rem' }}>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--secondary)', fontWeight: 'bold' }}>{msg.name}</h4>
                <span style={{ 
                  color: index % 2 === 0 ? 'var(--primary-dark)' : 'var(--secondary)', 
                  fontWeight: '600',
                  opacity: 0.8,
                  fontSize: '0.85rem'
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
