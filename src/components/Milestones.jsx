import { motion } from 'framer-motion';
import { useMediaQuery } from './useMediaQuery'; // I'll create this helper

const milestones = [
  {
    year: "1989",
    school: "Govt Primary School, Kumbakonam",
    role: "Primary School Teacher",
    desc: "Began her journey with a passion for teaching young minds.",
    type: "white"
  },
  {
    year: "1995",
    school: "Municipal Middle School, Mayiladuthurai",
    role: "Secondary Grade Assistant",
    desc: "Promoted and recognized for exceptional classroom management.",
    type: "purple"
  },
  {
    year: "2005",
    school: "Panchayat Union Middle School, Thiruvidaimarudur",
    role: "B.T. Assistant (English)",
    desc: "Specialized in English language teaching and mentored fellow teachers.",
    type: "white"
  },
  {
    year: "2015",
    school: "Panchayat Union Middle School, Kuthalam",
    role: "Headmistress",
    desc: "Appointed as Headmistress, leading the school to new heights of academic excellence.",
    type: "purple"
  },
  {
    year: "2024",
    school: "Legacy of Excellence",
    role: "Retirement",
    desc: "Concluded a glorious career, leaving behind a legacy that will inspire generations.",
    type: "white"
  }
];

const Milestones = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <section id="milestones" className="milestones" style={{ backgroundColor: '#fcfcfc', overflow: 'hidden', padding: isMobile ? '60px 0' : '100px 0' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: isMobile ? '3rem' : '6rem' }}
        >
          <h2 style={{ fontSize: 'clamp(2rem, 6vw, 4rem)', color: 'var(--secondary)' }}>
            Building a Legacy <span style={{ color: 'var(--primary)' }}>Brick by Brick</span>
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginTop: '1rem' }}>
            A career built on foundation, strength, and unwavering dedication.
          </p>
        </motion.div>

        <div style={{ position: 'relative', maxWidth: '1000px', margin: '0 auto' }}>
          {/* Central Path - Move to left on mobile */}
          <div style={{
            position: 'absolute',
            left: isMobile ? '20px' : '50%',
            transform: 'translateX(-50%)',
            width: '4px',
            height: '100%',
            background: 'repeating-linear-gradient(0deg, #ddd, #ddd 10px, transparent 10px, transparent 20px)',
            zIndex: 1
          }} />

          {milestones.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: isMobile ? 50 : (index % 2 === 0 ? -150 : 150), rotate: isMobile ? 0 : (index % 2 === 0 ? -5 : 5) }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                type: "spring", 
                stiffness: 100, 
                damping: 20,
                delay: index * 0.1 
              }}
              style={{
                display: 'flex',
                justifyContent: isMobile ? 'flex-start' : (index % 2 === 0 ? 'flex-end' : 'flex-start'),
                alignItems: 'center',
                width: '100%',
                marginBottom: isMobile ? '3rem' : '5rem',
                position: 'relative',
                zIndex: 2,
                paddingLeft: isMobile ? '50px' : '0'
              }}
            >
              {/* Year Indicator */}
              <div style={{
                position: 'absolute',
                left: isMobile ? '20px' : '50%',
                transform: 'translateX(-50%)',
                backgroundColor: 'var(--primary-dark)',
                color: 'white',
                padding: '4px 12px',
                borderRadius: '4px',
                fontSize: '0.8rem',
                fontWeight: 'bold',
                zIndex: 3
              }}>
                {item.year}
              </div>

              <div className={`brick-card ${item.type === 'purple' ? 'brick-card-purple' : ''}`} style={{
                width: isMobile ? '100%' : '42%',
                margin: isMobile ? '0' : '0 4%',
                padding: isMobile ? '1.5rem' : '2rem'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-10px',
                  [isMobile ? 'right' : (index % 2 === 0 ? 'right' : 'left')]: '15px',
                  fontSize: '1.5rem',
                  opacity: 0.1,
                  fontWeight: '900'
                }}>
                  {item.year}
                </div>
                <h3 style={{ fontSize: isMobile ? '1.2rem' : '1.5rem', marginBottom: '0.5rem', lineHeight: '1.2' }}>{item.school}</h3>
                <h4 style={{ fontSize: '1rem', color: 'var(--primary)', marginBottom: '1rem', fontWeight: '600' }}>
                  {item.role}
                </h4>
                <p style={{ fontSize: '0.95rem', color: 'var(--text)', opacity: 0.8 }}>{item.desc}</p>
                
                <div style={{
                  marginTop: '1.2rem',
                  display: 'flex',
                  gap: '4px'
                }}>
                  {[1,2,3].map(i => (
                    <div key={i} style={{ 
                      width: '15px', 
                      height: '3px', 
                      backgroundColor: item.type === 'purple' ? 'var(--primary-dark)' : 'var(--primary)',
                      opacity: 0.3,
                      borderRadius: '2px'
                    }} />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Milestones;
