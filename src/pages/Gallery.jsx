import React from 'react';
import { motion } from 'framer-motion';

function Gallery() {
  const images = [
    { url: 'https://images.unsplash.com/photo-1584225064785-c62a8b43d148', title: 'Main Temple' },
    { url: 'https://images.unsplash.com/photo-1514222134-b57cbb8ce073', title: 'Temple Architecture' },
    { url: 'https://images.unsplash.com/photo-1533929736458-ca588d47c3be', title: 'Temple Corridor' },
    { url: 'https://images.unsplash.com/photo-1567093320214-8c6f8371acd0', title: 'Evening Ceremony' }
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
          <h1 style={{ fontSize: '42px', color: '#8B2500', marginBottom: '16px' }}>Temple Gallery</h1>
          <div className="divider"></div>
        </div>

        <div className="grid-4">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="card"
              style={{ padding: '0', overflow: 'hidden', cursor: 'pointer' }}
              whileHover={{ y: -8 }}
            >
              <img 
                src={`${img.url}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`} 
                alt={img.title} 
                style={{ width: '100%', height: '250px', objectFit: 'cover' }} 
              />
              <div style={{ padding: '20px' }}>
                <h3>{img.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Gallery;
