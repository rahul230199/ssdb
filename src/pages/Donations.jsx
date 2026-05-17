import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Donations() {
  const [customAmount, setCustomAmount] = useState('');
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [donationPurpose, setDonationPurpose] = useState('');
  const [donated, setDonated] = useState(false);

  const purposes = ["Annadhana Trust", "Temple Maintenance", "Goshala Seva", "General Donation"];

  const handleDonate = () => {
    if (!customAmount || !donorName || !donorEmail) {
      alert('Please fill required fields');
      return;
    }
    setDonated(true);
    setTimeout(() => setDonated(false), 5000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ minHeight: '100vh', padding: '60px 16px', background: '#FAF6F0' }}
    >
      <div className="container" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '32px', textAlign: 'center', marginBottom: '8px' }}>Support SSDB</h1>
        <div className="divider"></div>
        
        <div className="card" style={{ padding: '24px', marginTop: '30px' }}>
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <div style={{ fontSize: '40px', fontWeight: 'bold', color: '#FFD700' }}>₹{customAmount || '___'}</div>
            <p>Enter donation amount</p>
          </div>

          <input 
            type="number" 
            placeholder="Amount in ₹ *" 
            style={{ marginBottom: '16px' }}
            value={customAmount}
            onChange={(e) => setCustomAmount(e.target.value)}
          />
          
          <select style={{ marginBottom: '16px' }} onChange={(e) => setDonationPurpose(e.target.value)}>
            <option value="">Select Purpose</option>
            {purposes.map(p => <option key={p}>{p}</option>)}
          </select>
          
          <input 
            type="text" 
            placeholder="Your Full Name *" 
            style={{ marginBottom: '12px' }}
            onChange={(e) => setDonorName(e.target.value)}
          />
          <input 
            type="email" 
            placeholder="Email Address *" 
            style={{ marginBottom: '24px' }}
            onChange={(e) => setDonorEmail(e.target.value)}
          />
          
          <div style={{ background: '#FFF5F0', padding: '16px', borderRadius: '12px', marginBottom: '20px', textAlign: 'center' }}>
            <p style={{ fontWeight: '600', marginBottom: '8px' }}>UPI ID: ssdb@okhdfcbank</p>
            <p style={{ fontSize: '12px' }}>Bank: HDFC Bank | IFSC: HDFC0001234</p>
          </div>
          
          <button onClick={handleDonate} className="btn-primary" style={{ width: '100%' }}>Donate Now</button>

          <AnimatePresence>
            {donated && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                style={{ marginTop: '16px', padding: '12px', background: '#10b981', color: 'white', borderRadius: '8px', textAlign: 'center' }}
              >
                🙏 Thank you {donorName}!
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

export default Donations;
