import React from 'react';
import { motion } from 'framer-motion';

function Location() {
  const facilities = [
    "Free Parking for devotees",
    "Annadanam Hall for free meals",
    "Devotee waiting hall",
    "Shoe stand",
    "Drinking water facility"
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
          <h1 style={{ fontSize: '48px', color: '#8B2500', marginBottom: '16px' }}>Temple Location</h1>
          <div className="divider"></div>
        </div>

        <div className="grid-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="card"
          >
            <h3 style={{ fontSize: '24px', marginBottom: '20px', color: '#8B2500' }}>Temple Address</h3>
            <p style={{ lineHeight: '1.8' }}>
              Survey No 4<br/>
              Sri Simhagiri Temple Complex<br/>
              Nheemasandra Doddi Village<br/>
              Dodda Maralwadi Hobli<br/>
              Harohalli District<br/>
              Bangalore South - 562121<br/><br/>
              <strong>Phone:</strong> +91 1234567890<br/>
              <strong>Email:</strong> info@ssdb.org
            </p>
            <div style={{ 
              marginTop: '20px', 
              padding: '16px', 
              background: '#FFF5F0', 
              borderRadius: '8px' 
            }}>
              <p><strong>Google Maps Location:</strong></p>
              <p style={{ color: '#8B2500', marginTop: '8px' }}>
                <a href="#" style={{ color: '#8B2500', textDecoration: 'none' }}>
                  📍 View on Google Maps
                </a>
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="card"
          >
            <h3 style={{ fontSize: '24px', marginBottom: '20px', color: '#8B2500' }}>Temple Timings</h3>
            <p><strong>Morning Darshan:</strong></p>
            <p>7:00 AM - 12:30 PM</p>
            <p style={{ marginTop: '16px' }}><strong>Evening Darshan:</strong></p>
            <p>5:00 PM - 8:00 PM</p>
            <p style={{ marginTop: '16px', color: '#D4AF37' }}>Open all days of the week</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="card"
            style={{ gridColumn: 'span 2' }}
          >
            <h3 style={{ fontSize: '24px', marginBottom: '20px', color: '#8B2500' }}>Devotee Facilities</h3>
            <div className="grid-2">
              {facilities.map((facility, idx) => (
                <div key={idx} style={{ padding: '8px 0' }}>
                  ✓ {facility}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Location;
