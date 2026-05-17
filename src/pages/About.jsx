import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ minHeight: '100vh', padding: '80px 20px' }}
    >
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{ fontSize: '48px', color: '#8B2500', marginBottom: '16px' }}>About SSDB</h1>
          <div className="divider"></div>
        </div>

        <div className="grid-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="card"
          >
            <h2 style={{ fontSize: '28px', color: '#8B2500', marginBottom: '20px' }}>Our History</h2>
            <p style={{ lineHeight: '1.8', marginBottom: '20px', color: '#555' }}>
              Sri Simhagiri Devasthanam Board (SSDB) was established to preserve and promote the rich spiritual heritage 
              of Lord Narasimha. The temple has been a beacon of faith and devotion for devotees from all over.
            </p>
            <p style={{ lineHeight: '1.8', marginBottom: '20px', color: '#555' }}>
              The temple follows authentic Vedic traditions and conducts daily rituals as prescribed in the Agama Shastras.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="card"
          >
            <h2 style={{ fontSize: '24px', color: '#8B2500', marginBottom: '20px' }}>Temple Timings</h2>
            <div style={{ 
              background: '#FFF5F0', 
              padding: '20px', 
              borderRadius: '8px',
              marginBottom: '20px'
            }}>
              <p style={{ fontSize: '18px', marginBottom: '10px' }}><strong>Morning Darshan:</strong></p>
              <p style={{ fontSize: '16px', color: '#8B2500' }}>7:00 AM - 12:30 PM</p>
            </div>
            <div style={{ 
              background: '#FFF5F0', 
              padding: '20px', 
              borderRadius: '8px'
            }}>
              <p style={{ fontSize: '18px', marginBottom: '10px' }}><strong>Evening Darshan:</strong></p>
              <p style={{ fontSize: '16px', color: '#8B2500' }}>5:00 PM - 8:00 PM</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
