import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Bookings() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', seva: '', date: '', time: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const sevaOptions = [
    "Suprabhatha Seva - ₹116",
    "Saligrama Seva - ₹1116",
    "Archana Seva - ₹21",
    "Vahana Pooja Seva - ₹101",
    "Kumkuma Archana - ₹81",
    "Goshale Seva - ₹501",
    "Dhanurmasa Seva - ₹1100"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', email: '', phone: '', seva: '', date: '', time: '' });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ minHeight: '100vh', padding: '60px 16px', background: '#FAF6F0' }}
    >
      <div className="container" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '32px', textAlign: 'center', marginBottom: '8px' }}>Book Your Seva</h1>
        <div className="divider"></div>
        
        <form onSubmit={handleSubmit} className="card" style={{ padding: '24px', marginTop: '30px' }}>
          <div style={{ display: 'grid', gap: '16px' }}>
            <input 
              type="text" 
              placeholder="Full Name *" 
              required 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})} 
            />
            <input 
              type="email" 
              placeholder="Email Address *" 
              required 
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})} 
            />
            <input 
              type="tel" 
              placeholder="Phone Number *" 
              required 
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})} 
            />
            <select required value={formData.seva} onChange={(e) => setFormData({...formData, seva: e.target.value})}>
              <option value="">Select Seva</option>
              {sevaOptions.map(seva => <option key={seva}>{seva}</option>)}
            </select>
            <input 
              type="date" 
              required 
              value={formData.date}
              onChange={(e) => setFormData({...formData, date: e.target.value})} 
            />
            <input 
              type="time" 
              required 
              value={formData.time}
              onChange={(e) => setFormData({...formData, time: e.target.value})} 
            />
            <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '8px' }}>
              Submit Booking
            </button>
          </div>
        </form>

        <AnimatePresence>
          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              style={{ marginTop: '20px', padding: '16px', background: '#10b981', color: 'white', borderRadius: '12px', textAlign: 'center' }}
            >
              ✅ Booking submitted successfully!
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default Bookings;
