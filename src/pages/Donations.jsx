import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Donations() {
  const [customAmount, setCustomAmount] = useState('');
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [donorPhone, setDonorPhone] = useState('');
  const [donationPurpose, setDonationPurpose] = useState('');
  const [donated, setDonated] = useState(false);

  const purposes = [
    "Annadhana Trust",
    "Temple Maintenance",
    "Goshala Seva",
    "Veda Patashala",
    "General Donation"
  ];

  const handleDonate = () => {
    if (!customAmount || !donorName || !donorEmail) {
      alert('Please fill in your name, email, and donation amount');
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
      style={{ minHeight: '100vh', padding: '80px 20px', background: '#FAF6F0' }}
    >
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <motion.div 
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '50px' }}
        >
          <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }} style={{ fontSize: '60px', marginBottom: '20px' }}>
            🙏
          </motion.div>
          <h1 style={{ fontSize: '48px', color: '#C62828', marginBottom: '16px' }}>Support SSDB</h1>
          <div className="divider"></div>
          <p style={{ fontSize: '18px', color: '#666' }}>Your donation helps preserve our spiritual heritage</p>
        </motion.div>

        <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.2, type: 'spring' }} className="card" style={{ padding: '40px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div style={{ fontSize: '56px', fontWeight: 'bold', color: '#FFD700', marginBottom: '10px' }}>₹{customAmount || '___'}</div>
            <p>Enter your donation amount</p>
          </div>

          <div style={{ marginBottom: '32px' }}>
            <p style={{ fontWeight: '600', marginBottom: '8px' }}>Donation Amount (₹):</p>
            <input type="number" placeholder="Enter amount in ₹" style={{ width: '100%', fontSize: '18px', padding: '14px' }} value={customAmount} onChange={(e) => setCustomAmount(e.target.value)} />
          </div>

          <div style={{ marginBottom: '32px' }}>
            <p style={{ fontWeight: '600', marginBottom: '8px' }}>Donation Purpose:</p>
            <select style={{ width: '100%', padding: '14px' }} onChange={(e) => setDonationPurpose(e.target.value)}>
              <option value="">Select purpose</option>
              {purposes.map(p => <option key={p}>{p}</option>)}
            </select>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <p style={{ fontWeight: '600', marginBottom: '16px' }}>Devotee Information:</p>
            <input type="text" placeholder="Your Full Name *" style={{ marginBottom: '12px' }} onChange={(e) => setDonorName(e.target.value)} />
            <input type="email" placeholder="Email Address *" style={{ marginBottom: '12px' }} onChange={(e) => setDonorEmail(e.target.value)} />
            <input type="tel" placeholder="Phone Number" onChange={(e) => setDonorPhone(e.target.value)} />
          </div>

          <div style={{ background: '#FFF5F0', padding: '24px', borderRadius: '16px', marginBottom: '24px', textAlign: 'center', border: '1px solid #FFD700' }}>
            <p style={{ fontWeight: '600', marginBottom: '16px', fontSize: '18px', color: '#C62828' }}>Payment Options</p>
            <div style={{ marginBottom: '16px' }}>
              <p style={{ fontWeight: '500', marginBottom: '8px' }}>UPI ID:</p>
              <p style={{ fontSize: '20px', color: '#FFD700', fontWeight: 'bold' }}>ssdb@okhdfcbank</p>
            </div>
            <div>
              <p style={{ fontWeight: '500', marginBottom: '8px' }}>Bank Transfer:</p>
              <p>Bank: HDFC Bank</p>
              <p>Account Name: SSDB Temple Trust</p>
              <p>Account Number: 1234567890</p>
              <p>IFSC Code: HDFC0001234</p>
            </div>
          </div>

          <button onClick={handleDonate} className="btn-primary" style={{ width: '100%', padding: '16px' }}>Donate Now</button>

          <AnimatePresence>
            {donated && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} style={{ marginTop: '24px', padding: '20px', background: 'linear-gradient(135deg, #C62828, #8B0000)', color: 'white', borderRadius: '16px', textAlign: 'center' }}>
                <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 0.5 }} style={{ fontSize: '48px' }}>🙏</motion.div>
                <strong>Thank you {donorName || 'devotee'} for your contribution of ₹{customAmount}!</strong>
                <small style={{ display: 'block', marginTop: '8px' }}>Please transfer the amount using the UPI or Bank details above.</small>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Donations;
