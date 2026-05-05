import { motion } from 'framer-motion';
import { useMediaQuery } from './useMediaQuery';

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
    <section id="milestones" className="milestones" style={{ backgroundColor: '#F9F7FB', overflow: 'hidden', padding: isMobile ? '70px 0' : '120px 0' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: isMobile ? '4rem' : '7rem' }}
        >
          <h2 style={{ fontSize: 'clamp(2.5rem, 7vw, 4.5rem)', color: 'var(--primary-dark)', marginBottom: '1.5rem' }}>
            A Journey of <span style={{ color: 'var(--primary)' }}>Excellence</span>
          </h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto', lineHeight: '1.7' }}>
            Tracing the path of a visionary leader who shaped thousands of young minds across three decades.
          </p>
        </motion.div>

        <div style={{ position: 'relative', maxWidth: '1100px', margin: '0 auto' }}>
          {/* Central Path */}
          <div style={{
            position: 'absolute',
            left: isMobile ? '20px' : '50%',
            transform: 'translateX(-50%)',
            width: '4px',
            height: '100%',
            background: 'linear-gradient(to bottom, transparent, var(--primary) 10%, var(--primary) 90%, transparent)',
            opacity: 0.3,
            zIndex: 1
          }} />

          {milestones.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: isMobile ? 50 : (index % 2 === 0 ? -150 : 150) }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                type: "spring", 
                stiffness: 80, 
                damping: 15,
                delay: index * 0.1 
              }}
              style={{
                display: 'flex',
                justifyContent: isMobile ? 'flex-start' : (index % 2 === 0 ? 'flex-end' : 'flex-start'),
                alignItems: 'center',
                width: '100%',
                marginBottom: isMobile ? '4rem' : '6rem',
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
                padding: '6px 16px',
                borderRadius: '50px',
                fontSize: '0.85rem',
                fontWeight: 'bold',
                zIndex: 3,
                boxShadow: '0 4px 15px rgba(48, 25, 52, 0.3)'
              }}>
                {item.year}
              </div>

              <div className={`brick-card ${item.type === 'purple' ? 'brick-card-purple' : ''}`} style={{
                width: isMobile ? '100%' : '44%',
                margin: isMobile ? '0' : '0 4%',
                padding: isMobile ? '2rem' : '3rem',
                border: 'none',
                backgroundColor: item.type === 'purple' ? 'var(--brick-purple)' : 'white'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '15px',
                  [isMobile ? 'right' : (index % 2 === 0 ? 'right' : 'left')]: '20px',
                  fontSize: '2rem',
                  opacity: 0.08,
                  fontWeight: '900',
                  color: 'var(--primary-dark)'
                }}>
                  {item.year}
                </div>
                <h3 style={{ fontSize: isMobile ? '1.3rem' : '1.7rem', marginBottom: '0.8rem', lineHeight: '1.2', color: 'var(--primary-dark)' }}>{item.school}</h3>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--primary)', marginBottom: '1.5rem', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase' }}>
                  {item.role}
                </h4>
                <p style={{ fontSize: '1.05rem', color: 'var(--text)', opacity: 0.85, lineHeight: '1.8' }}>{item.desc}</p>
                
                <div style={{
                  marginTop: '1.5rem',
                  display: 'flex',
                  gap: '6px'
                }}>
                  {[1,2,3].map(i => (
                    <div key={i} style={{ 
                      width: '20px', 
                      height: '4px', 
                      backgroundColor: 'var(--primary)',
                      opacity: 0.2,
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
