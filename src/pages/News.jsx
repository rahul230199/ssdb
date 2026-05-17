import React from 'react';
import { motion } from 'framer-motion';

function News() {
  const news = [
    {
      id: 1,
      title: "Annual Brahmotsavam 2025",
      date: "March 10, 2025",
      category: "Festival",
      description: "Annual Brahmotsavam will be celebrated from March 10th to March 20th, 2025. Special arrangements have been made for devotees."
    },
    {
      id: 2,
      title: "New Annadanam Scheme Launched",
      date: "January 10, 2025",
      category: "Service",
      description: "Temple launches free food distribution for 1000 devotees daily. Donations welcome."
    },
    {
      id: 3,
      title: "Veda Patashala Admissions Open",
      date: "January 5, 2025",
      category: "Education",
      description: "Admissions for Vedic studies for 2025-26 batch now open. Last date: March 31st."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ minHeight: '100vh', padding: '80px 20px' }}
    >
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{ fontSize: '48px', color: '#8B2500', marginBottom: '16px' }}>Temple News</h1>
          <div className="divider"></div>
          <p style={{ fontSize: '18px', color: '#666' }}>Stay updated with latest announcements</p>
        </div>

        <div className="grid-2">
          {news.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="card"
              whileHover={{ y: -8 }}
            >
              <div style={{ 
                display: 'inline-block', 
                padding: '4px 12px', 
                background: '#FFF5F0', 
                borderRadius: '20px',
                color: '#8B2500',
                fontSize: '12px',
                fontWeight: '600',
                marginBottom: '12px'
              }}>
                {item.category}
              </div>
              <h3 style={{ fontSize: '22px', marginBottom: '12px', color: '#8B2500' }}>{item.title}</h3>
              <p style={{ color: '#D4AF37', fontSize: '14px', marginBottom: '12px' }}>{item.date}</p>
              <p style={{ color: '#666', lineHeight: '1.6' }}>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default News;
