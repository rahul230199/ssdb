import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Sevas() {
  const [selectedSeva, setSelectedSeva] = useState(null);

  const sevas = [
    {
      id: 1,
      name: "Suprabhatha Seva",
      time: "06:30 AM",
      price: "₹116",
      description: "Early morning wake-up ceremony of the Lord with melodious Vedic chants.",
      benefits: "Blessings for peaceful life and spiritual awakening"
    },
    {
      id: 2,
      name: "Saligrama Seva",
      time: "08:30 AM",
      price: "₹1116",
      description: "Special pooja to sacred Saligrama stones, direct manifestation of Lord Vishnu.",
      benefits: "Removes past sins, brings prosperity"
    },
    {
      id: 3,
      name: "Archana Seva",
      time: "09:00 AM",
      price: "₹21",
      description: "Recitation of 108 sacred names of Lord Narasimha with flower offerings.",
      benefits: "Fulfills wishes, removes obstacles"
    },
    {
      id: 4,
      name: "Maha Mangala Aarti",
      time: "11:30 AM",
      price: "Free",
      description: "Grand ceremonial worship with lamps and divine chants.",
      benefits: "Divine grace and protection"
    },
    {
      id: 5,
      name: "Vahana Pooja Seva",
      time: "As per request",
      price: "₹101",
      description: "Special pooja for vehicles ensuring safe travels.",
      benefits: "Safe journeys, protection from accidents"
    },
    {
      id: 6,
      name: "Kumkuma Archana",
      time: "As per request",
      price: "₹81",
      description: "Special archana with sacred kumkuma to Goddess Lakshmi.",
      benefits: "Marital harmony, fertility blessings"
    },
    {
      id: 7,
      name: "Annadhana Seva",
      time: "12:00 PM - 2:00 PM",
      price: "₹3001",
      description: "Sponsor free meals for devotees as offering to the Lord.",
      benefits: "Blessings for abundance and good karma"
    },
    {
      id: 8,
      name: "Shayana Seva",
      time: "09:00 PM",
      price: "₹501",
      description: "Evening ritual of putting the Lord to rest with melodious lullabies.",
      benefits: "Peaceful sleep, divine protection"
    },
    {
      id: 9,
      name: "Special Event Seva",
      time: "On festivals",
      price: "₹3501",
      description: "Special sevas during festivals including Annadhana.",
      benefits: "Special blessings during divine occasions"
    },
    {
      id: 10,
      name: "Goshale Seva",
      time: "As per schedule",
      price: "₹501",
      description: "Service to sacred cows at the temple goshala.",
      benefits: "Blessings of Kamadhenu, removes sins"
    },
    {
      id: 11,
      name: "Dhanurmasa Seva",
      time: "December-January",
      price: "₹1100",
      description: "Special seva during the sacred month of Dhanurmasa.",
      benefits: "Divine blessings throughout the year"
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
          <h1 style={{ fontSize: '48px', color: '#C62828', marginBottom: '16px' }}>Temple Sevas</h1>
          <div className="divider"></div>
          <p style={{ fontSize: '18px', color: '#666' }}>Book divine services for spiritual upliftment</p>
        </motion.div>

        <div className="grid-2">
          {sevas.map((seva, idx) => (
            <motion.div
              key={seva.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="card"
              whileHover={{ y: -8 }}
              onClick={() => setSelectedSeva(selectedSeva === seva.id ? null : seva.id)}
              style={{ cursor: 'pointer' }}
            >
              <h3 style={{ fontSize: '24px', color: '#C62828', marginBottom: '8px' }}>{seva.name}</h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span style={{ color: '#C62828', fontWeight: '500' }}>{seva.time}</span>
                <span style={{ color: '#FFD700', fontWeight: 'bold', fontSize: '20px' }}>{seva.price}</span>
              </div>
              <p style={{ color: '#666', marginBottom: '12px' }}>{seva.description}</p>
              
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
                style={{ color: '#C62828', fontSize: '14px' }}
              >
                Click for details ↓
              </motion.div>

              {selectedSeva === seva.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  style={{ 
                    marginTop: '16px', 
                    paddingTop: '16px', 
                    borderTop: '2px solid #FFD700',
                    background: '#FFF5F0',
                    padding: '16px',
                    borderRadius: '16px',
                    marginTop: '16px'
                  }}
                >
                  <p><strong>Benefits:</strong> {seva.benefits}</p>
                  <Link to="/bookings">
                    <button className="btn-primary" style={{ width: '100%', marginTop: '16px', padding: '12px' }}>
                      Book Now
                    </button>
                  </Link>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Sevas;
