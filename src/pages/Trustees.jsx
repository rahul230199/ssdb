import React from 'react';
import { motion } from 'framer-motion';

function Trustees() {
  const committee = [
    {
      name: "Rahul SV",
      role: "IT Director",
      responsibility: "Digital Seva Management, Website & App Development",
      icon: "💻"
    },
    {
      name: "DC Shrihari",
      role: "Chief Priest",
      responsibility: "Daily Rituals, Poojas, and Temple Ceremonies",
      icon: "🪔"
    },
    {
      name: "Srinivasa",
      role: "Veda Pundit",
      responsibility: "Vedic Chanting, Homas, and Scriptural Guidance",
      icon: "📖"
    },
    {
      name: "DC Smitha",
      role: "Event Coordinator",
      responsibility: "Festival Management, Event Planning, Devotee Coordination",
      icon: "🎉"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ minHeight: '100vh', padding: '80px 20px', background: '#FAF6F0' }}
    >
      <div className="container">
        <motion.div 
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <h1 style={{ fontSize: '48px', color: '#C62828', marginBottom: '16px' }}>Temple Committee</h1>
          <div className="divider"></div>
          <p style={{ fontSize: '18px', color: '#666' }}>Dedicated team serving Sri Simhagiri Devasthanam Board</p>
        </motion.div>

        <div className="grid-2">
          {committee.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1, type: 'spring' }}
              className="card"
              whileHover={{ y: -8 }}
              style={{ textAlign: 'center' }}
            >
              <div style={{ fontSize: '60px', marginBottom: '16px' }}>{member.icon}</div>
              <h3 style={{ fontSize: '26px', color: '#C62828', marginBottom: '8px' }}>{member.name}</h3>
              <div style={{ 
                display: 'inline-block',
                padding: '6px 16px',
                background: '#FFF5F0',
                color: '#FFD700',
                borderRadius: '30px',
                fontSize: '14px',
                fontWeight: '600',
                marginBottom: '16px'
              }}>
                {member.role}
              </div>
              <p style={{ color: '#666', lineHeight: '1.6' }}>{member.responsibility}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ marginTop: '60px', padding: '30px', background: 'linear-gradient(135deg, #FFF5F0, #FFE8DC)', borderRadius: '24px', textAlign: 'center' }}
        >
          <p style={{ fontSize: '18px', color: '#C62828' }}>
            🙏 The committee is committed to serving the divine with transparency and devotion 🙏
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Trustees;
