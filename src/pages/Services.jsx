import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      name: "Prasadam",
      icon: "🍛",
      description: "Sacred food offering to Lord Narasimha, distributed to devotees as divine blessing.",
      details: "Daily prasadam available after all sevas. Special prasadam on festival days.",
      timing: "Throughout the day",
      price: "Free"
    },
    {
      id: 2,
      name: "Parking Facilities",
      icon: "🅿️",
      description: "Free and secure parking space for devotees visiting the temple.",
      details: "Reserved parking for elderly and differently-abled devotees.",
      capacity: "200+ vehicles",
      timing: "5:00 AM - 9:00 PM"
    },
    {
      id: 3,
      name: "Guest Rooms",
      icon: "🏨",
      description: "Comfortable accommodation for outstation devotees (10 rooms available).",
      details: "AC and Non-AC rooms with basic amenities.",
      price: "₹500 - ₹1500 per day",
      booking: "Advance booking recommended"
    },
    {
      id: 4,
      name: "Restroom Facilities",
      icon: "🚻",
      description: "Clean and well-maintained restroom facilities for devotees.",
      details: "Separate blocks for men and women, wheelchair accessible.",
      features: "24/7 water supply, cleaning staff",
      timing: "5:00 AM - 9:00 PM"
    },
    {
      id: 5,
      name: "Wheelchair Facilities",
      icon: "♿",
      description: "Free wheelchair service for elderly and physically challenged devotees.",
      details: "Wheelchairs available at temple entrance.",
      availability: "First come first serve",
      contact: "Ask at information desk"
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
          <h1 style={{ fontSize: '48px', color: '#C62828', marginBottom: '16px' }}>Devotee Services</h1>
          <div className="divider"></div>
          <p style={{ fontSize: '18px', color: '#666' }}>Facilities offered for devotees at SSDB</p>
        </motion.div>

        <div className="grid-2">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="card"
              whileHover={{ y: -8 }}
              onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
              style={{ cursor: 'pointer' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                <div style={{ fontSize: '48px' }}>{service.icon}</div>
                <h2 style={{ fontSize: '28px', color: '#C62828', margin: 0 }}>{service.name}</h2>
              </div>
              
              <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '16px' }}>{service.description}</p>
              
              {service.timing && <p><strong>Timing:</strong> {service.timing}</p>}
              {service.capacity && <p><strong>Capacity:</strong> {service.capacity}</p>}
              {service.price && <p><strong>Price:</strong> {service.price}</p>}
              
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
                style={{ color: '#C62828', marginTop: '16px', fontSize: '14px' }}
              >
                Click for more details ↓
              </motion.div>

              {selectedService === service.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  style={{ 
                    marginTop: '16px', 
                    paddingTop: '16px', 
                    borderTop: '2px solid #FFD700',
                    background: '#FFF5F0',
                    padding: '16px',
                    borderRadius: '16px'
                  }}
                >
                  {service.details && <p><strong>Details:</strong> {service.details}</p>}
                  {service.features && <p><strong>Features:</strong> {service.features}</p>}
                  {service.booking && <p><strong>Booking:</strong> {service.booking}</p>}
                  {service.availability && <p><strong>Availability:</strong> {service.availability}</p>}
                  {service.contact && <p><strong>Contact:</strong> {service.contact}</p>}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Services;
