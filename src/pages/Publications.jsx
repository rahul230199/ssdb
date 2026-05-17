import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Publications() {
  const [downloadClicked, setDownloadClicked] = useState(false);

  const handleDownload = () => {
    setDownloadClicked(true);
    setTimeout(() => setDownloadClicked(false), 3000);
    // PDF download will be implemented later with backend
    alert('PDF download will be available soon. Physical copies available at temple bookstore.');
  };

  const publications = [
    {
      id: 1,
      title: "Sri Lakshmi Narasimhavani",
      type: "Spiritual Book",
      language: "Telugu, English, Sanskrit",
      description: "A sacred book containing the divine teachings, stotras, and glory of Lord Lakshmi Narasimha. This book includes powerful prayers, slokas, and stories from Puranas.",
      price: "Free",
      availability: "Temple Bookstore & Online Download",
      icon: "📖",
      details: "This sacred book contains the complete collection of Narasimha stotras, daily prayers, and the history of Lord Narasimha's manifestations. A must-have for every devotee."
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
          <h1 style={{ fontSize: '48px', color: '#C62828', marginBottom: '16px' }}>Publications</h1>
          <div className="divider"></div>
          <p style={{ fontSize: '18px', color: '#666' }}>Spiritual literature from Sri Simhagiri Devasthanam Board</p>
        </motion.div>

        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {publications.map((pub, idx) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="card"
              whileHover={{ y: -8 }}
            >
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '64px', marginBottom: '20px' }}>{pub.icon}</div>
                <div style={{ 
                  display: 'inline-block', 
                  padding: '4px 16px', 
                  background: '#FFF5F0', 
                  borderRadius: '20px',
                  color: '#FFD700',
                  fontSize: '14px',
                  fontWeight: '600',
                  marginBottom: '16px'
                }}>
                  {pub.type}
                </div>
                <h2 style={{ fontSize: '36px', marginBottom: '16px', color: '#C62828' }}>{pub.title}</h2>
                <p style={{ color: '#FFD700', fontSize: '16px', marginBottom: '16px' }}>Language: {pub.language}</p>
                <p style={{ color: '#666', lineHeight: '1.8', marginBottom: '20px', fontSize: '16px' }}>{pub.description}</p>
                
                <div style={{ 
                  background: '#FFF5F0', 
                  padding: '20px', 
                  borderRadius: '16px',
                  marginBottom: '20px',
                  textAlign: 'left'
                }}>
                  <p style={{ fontWeight: '600', marginBottom: '8px', color: '#C62828' }}>About this book:</p>
                  <p style={{ color: '#666', lineHeight: '1.6' }}>{pub.details}</p>
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px', paddingTop: '16px', borderTop: '1px solid #E8DCD0', flexWrap: 'wrap', gap: '16px' }}>
                  <div>
                    <span style={{ fontWeight: 'bold', fontSize: '20px', color: '#C62828' }}>{pub.price}</span>
                    <p style={{ fontSize: '12px', color: '#666' }}>{pub.availability}</p>
                  </div>
                  <div style={{ display: 'flex', gap: '16px' }}>
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleDownload}
                      className="btn-primary"
                      style={{ padding: '12px 24px' }}
                    >
                      📥 Download PDF
                    </motion.button>
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-secondary"
                      style={{ padding: '12px 24px' }}
                    >
                      📍 Get Physical Copy
                    </motion.button>
                  </div>
                </div>

                {downloadClicked && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ marginTop: '16px', padding: '12px', background: '#10b981', color: 'white', borderRadius: '8px' }}
                  >
                    PDF download will be available soon. Physical copies available at temple bookstore.
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ 
            marginTop: '60px', 
            padding: '30px', 
            background: 'linear-gradient(135deg, #FFF5F0, #FFE8DC)', 
            borderRadius: '16px',
            textAlign: 'center'
          }}
        >
          <p style={{ fontSize: '18px', color: '#C62828' }}>
            📍 Physical copies available at Temple Bookstore (Free Distribution)
          </p>
          <p style={{ marginTop: '8px', color: '#666' }}>
            For bulk orders or inquiries, please contact: publications@ssdb.org
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Publications;
