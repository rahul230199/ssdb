import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

function HomePage() {
  const [selectedLord, setSelectedLord] = useState(null);

  const lords = [
    {
      id: 1,
      name: "Lord Varaha Swamy",
      sanskrit: "वराह स्वामी",
      description: "Lord Varaha is the third incarnation of Lord Vishnu, who appeared as a boar to rescue Goddess Earth from the demon Hiranyaksha.",
      significance: "Protector of Earth, Remover of obstacles, Bestower of courage",
      icon: "🐗"
    },
    {
      id: 2,
      name: "Lord Shayana Narasimha Swamy",
      sanskrit: "शयन नरसिंह स्वामी",
      description: "The serene reclining form of Lord Narasimha, representing peace, cosmic rest, and divine protection.",
      significance: "Peace of mind, Stress relief, Spiritual awakening",
      icon: "🦁"
    },
    {
      id: 3,
      name: "Lord Narasimha Swamy",
      sanskrit: "नरसिंह स्वामी",
      description: "The fierce half-man half-lion incarnation of Lord Vishnu, protecting devotees from evil.",
      significance: "Protection from evil, Courage, Victory over enemies",
      icon: "🦁"
    }
  ];

  const services = [
    { title: 'Temple Sevas', desc: 'Book divine services and rituals', link: '/sevas' },
    { title: 'Online Bookings', desc: 'Reserve your slot for darshan', link: '/bookings' },
    { title: 'Make Donation', desc: 'Support temple activities', link: '/donations' },
    { title: 'Upcoming Events', desc: 'Festivals and celebrations', link: '/events' }
  ];

  const dailySevas = [
    { name: 'Suprabhatha Seva', time: '06:30 AM', price: '₹116', link: '/sevas' },
    { name: 'Saligrama Seva', time: '08:30 AM', price: '₹1116', link: '/sevas' },
    { name: 'Archana Seva', time: '09:00 AM', price: '₹21', link: '/sevas' },
    { name: 'Maha Mangala Aarti', time: '11:30 AM', price: 'Free', link: '/sevas' },
    { name: 'Vahana Pooja Seva', time: 'As per request', price: '₹101', link: '/sevas' },
    { name: 'Kumkuma Archana', time: 'As per request', price: '₹81', link: '/sevas' },
    { name: 'Shayana Seva', time: '09:00 PM', price: '₹501', link: '/sevas' },
    { name: 'Special Event Seva', time: 'On festivals', price: '₹3501', link: '/sevas' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section - No Symbol */}
      <div style={{
        background: `linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url('/images/narasimha.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 30%',
        backgroundAttachment: 'fixed',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ position: 'relative', zIndex: 2, maxWidth: '900px', padding: '20px' }}
        >
          <motion.h1 
            className="glow"
            style={{ 
              fontSize: '64px', 
              marginBottom: '20px',
              fontFamily: "'Cormorant Garamond', serif",
              color: '#FFD700',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
            }}
          >
            Sri Simhagiri Devasthanam Board
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            style={{ fontSize: '28px', marginBottom: '16px', fontStyle: 'italic', color: '#FAF6F0' }}
          >
            Where Three Divine Lords Reside - Trikutachala
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            style={{ fontSize: '18px', marginBottom: '40px', color: '#FFE0B2', letterSpacing: '1px' }}
          >
            Lord Varaha Swamy | Lord Shayana Narasimha Swamy | Lord Narasimha Swamy
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <Link to="/sevas">
              <motion.button 
                className="btn-primary" 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Sevas
              </motion.button>
            </Link>
            <Link to="/donations">
              <motion.button 
                className="btn-secondary" 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Make Donation
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Three Lords Section */}
      <div style={{ padding: '80px 0', background: '#FAF6F0' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <h2 style={{ fontSize: '48px', color: '#C62828', marginBottom: '16px' }}>The Three Divine Lords</h2>
            <div className="divider"></div>
            <p style={{ fontSize: '18px', color: '#666', maxWidth: '700px', margin: '20px auto 0' }}>
              Trikutachala - The sacred abode of three powerful manifestations
            </p>
          </motion.div>

          <div className="grid-3">
            {lords.map((lord, idx) => (
              <motion.div
                key={lord.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2, type: 'spring', stiffness: 100 }}
                viewport={{ once: true }}
                className="card"
                whileHover={{ y: -10 }}
                onClick={() => setSelectedLord(selectedLord === lord.id ? null : lord.id)}
                style={{ cursor: 'pointer', overflow: 'hidden' }}
              >
                <div style={{
                  width: '100%',
                  height: '250px',
                  background: 'linear-gradient(135deg, #FFF5F0, #FFE8DC)',
                  borderRadius: '16px',
                  marginBottom: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <motion.div
                    animate={{ scale: [1, 1.05, 1], rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    style={{ fontSize: '80px' }}
                  >
                    {lord.icon}
                  </motion.div>
                </div>
                
                <h3 style={{ fontSize: '28px', color: '#C62828', marginBottom: '8px', textAlign: 'center' }}>
                  {lord.name}
                </h3>
                <p className="sanskrit-text" style={{ textAlign: 'center', color: '#FFD700', marginBottom: '16px' }}>
                  {lord.sanskrit}
                </p>
                <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '16px' }}>
                  {lord.description}
                </p>
                
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  style={{ color: '#C62828', textAlign: 'center', fontSize: '14px' }}
                >
                  Click for more details ↓
                </motion.div>

                <AnimatePresence>
                  {selectedLord === lord.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.5 }}
                      style={{ 
                        marginTop: '20px', 
                        paddingTop: '20px', 
                        borderTop: '2px solid #FFD700',
                        background: '#FFF5F0',
                        borderRadius: '16px'
                      }}
                    >
                      <div style={{ padding: '16px' }}>
                        <p><strong>Significance:</strong></p>
                        <p style={{ marginTop: '8px', color: '#C62828' }}>{lord.significance}</p>
                        <Link to="/sevas">
                          <button className="btn-primary" style={{ width: '100%', marginTop: '20px' }}>
                            Book Seva for {lord.name}
                          </button>
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div style={{ padding: '60px 0', background: '#FFFFFF' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '50px' }}
          >
            <h2 style={{ fontSize: '36px', color: '#C62828' }}>Our Services</h2>
            <div className="divider"></div>
          </motion.div>

          <div className="grid-4">
            {services.map((item, idx) => (
              <Link key={idx} to={item.link} style={{ textDecoration: 'none' }}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="card"
                  style={{ textAlign: 'center', cursor: 'pointer', height: '100%' }}
                >
                  <h3 style={{ color: '#C62828', marginBottom: '12px', fontSize: '22px' }}>{item.title}</h3>
                  <p style={{ color: '#666', fontSize: '15px' }}>{item.desc}</p>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Daily Schedule */}
      <div style={{ padding: '80px 0', background: '#FAF6F0' }}>
        <div className="container">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', fontSize: '36px', color: '#C62828', marginBottom: '16px' }}
          >
            Daily Seva Schedule
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="divider"
          ></motion.div>
          
          <div style={{ maxWidth: '800px', margin: '50px auto 0' }}>
            {dailySevas.map((seva, idx) => (
              <Link to={seva.link} key={idx} style={{ textDecoration: 'none' }}>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1, type: 'spring' }}
                  viewport={{ once: true }}
                  className="card"
                  whileHover={{ x: 10, backgroundColor: '#FFF5F0', cursor: 'pointer' }}
                  style={{ 
                    marginBottom: '16px', 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    padding: '20px 24px'
                  }}
                >
                  <div>
                    <h3 style={{ fontSize: '18px', marginBottom: '4px', color: '#C62828' }}>{seva.name}</h3>
                  </div>
                  <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
                    <span style={{ color: '#C62828', fontWeight: '500' }}>{seva.time}</span>
                    <span style={{ color: '#FFD700', fontWeight: '600' }}>{seva.price}</span>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginTop: '40px' }}
          >
            <Link to="/sevas">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                View All Sevas →
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default HomePage;
