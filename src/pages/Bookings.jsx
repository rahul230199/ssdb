import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Bookings() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', seva: '', date: '', time: '', address: '', gotra: '', nakshatra: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const sevaOptions = [
    "Suprabhatha Seva - ₹116",
    "Saligrama Seva - ₹1116",
    "Archana Seva - ₹21",
    "Maha Mangala Aarti - Free",
    "Vahana Pooja Seva - ₹101",
    "Kumkuma Archana - ₹81",
    "Annadhana Seva - ₹3001",
    "Shayana Seva - ₹501",
    "Special Event Seva - ₹3501",
    "Goshale Seva - ₹501",
    "Dhanurmasa Seva - ₹1100"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({
      name: '', email: '', phone: '', seva: '', date: '', time: '', address: '', gotra: '', nakshatra: ''
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ minHeight: '100vh', padding: '80px 20px', background: '#FAF6F0' }}
    >
      <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
        <motion.div 
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '50px' }}
        >
          <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }} style={{ fontSize: '60px', marginBottom: '20px' }}>
            📅
          </motion.div>
          <h1 style={{ fontSize: '48px', color: '#C62828', marginBottom: '16px' }}>Book Your Seva</h1>
          <div className="divider"></div>
          <p style={{ fontSize: '18px', color: '#666' }}>Reserve your slot for divine services at SSDB</p>
        </motion.div>

        <motion.form 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          onSubmit={handleSubmit} 
          className="card" 
          style={{ padding: '40px' }}
        >
          <div style={{ display: 'grid', gap: '24px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <motion.div whileHover={{ scale: 1.02 }}>
                <input type="text" placeholder="Full Name *" required onChange={(e) => setFormData({...formData, name: e.target.value})} />
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }}>
                <input type="email" placeholder="Email Address *" required onChange={(e) => setFormData({...formData, email: e.target.value})} />
              </motion.div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <motion.div whileHover={{ scale: 1.02 }}>
                <input type="tel" placeholder="Phone Number *" required onChange={(e) => setFormData({...formData, phone: e.target.value})} />
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }}>
                <input type="text" placeholder="Gotra (Optional)" onChange={(e) => setFormData({...formData, gotra: e.target.value})} />
              </motion.div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <motion.div whileHover={{ scale: 1.02 }}>
                <input type="text" placeholder="Nakshatra (Optional)" onChange={(e) => setFormData({...formData, nakshatra: e.target.value})} />
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }}>
                <textarea placeholder="Complete Address" rows="2" onChange={(e) => setFormData({...formData, address: e.target.value})} />
              </motion.div>
            </div>

            <motion.div whileHover={{ scale: 1.02 }}>
              <select required onChange={(e) => setFormData({...formData, seva: e.target.value})}>
                <option value="">Select Seva</option>
                {sevaOptions.map(seva => <option key={seva}>{seva}</option>)}
              </select>
            </motion.div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <motion.div whileHover={{ scale: 1.02 }}>
                <input type="date" required onChange={(e) => setFormData({...formData, date: e.target.value})} />
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }}>
                <input type="time" required onChange={(e) => setFormData({...formData, time: e.target.value})} />
              </motion.div>
            </div>
            
            <motion.button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '10px', padding: '16px' }} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              Submit Booking Request
            </motion.button>
          </div>
        </motion.form>

        <AnimatePresence>
          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              style={{ marginTop: '24px', padding: '24px', background: 'linear-gradient(135deg, #C62828, #8B0000)', color: 'white', borderRadius: '16px', textAlign: 'center' }}
            >
              <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 0.5 }} style={{ fontSize: '48px' }}>🙏</motion.div>
              <strong style={{ display: 'block', fontSize: '18px' }}>Booking Request Submitted Successfully!</strong>
              <p style={{ marginTop: '8px' }}>Our team will contact you shortly to confirm your booking.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default Bookings;
