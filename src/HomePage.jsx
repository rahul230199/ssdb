import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

function HomePage() {
  const [selectedLord, setSelectedLord] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const lords = [
    {
      id: 1,
      name: "Lord Varaha Swamy",
      sanskrit: "वराह स्वामी",
      description: "Lord Varaha is the third incarnation of Lord Vishnu, who appeared as a boar to rescue Goddess Earth.",
      significance: "Protector of Earth, Remover of obstacles",
      icon: "🐗"
    },
    {
      id: 2,
      name: "Lord Shayana Narasimha Swamy",
      sanskrit: "शयन नरसिंह स्वामी",
      description: "The serene reclining form of Lord Narasimha, representing peace and divine protection.",
      significance: "Peace of mind, Stress relief",
      icon: "🦁"
    },
    {
      id: 3,
      name: "Lord Narasimha Swamy",
      sanskrit: "नरसिंह स्वामी",
      description: "The fierce half-man half-lion incarnation protecting devotees from evil.",
      significance: "Protection from evil, Courage",
      icon: "🦁"
    }
  ];

  const services = [
    { title: 'Temple Sevas', desc: 'Book divine services', link: '/sevas' },
    { title: 'Online Bookings', desc: 'Reserve your slot', link: '/bookings' },
    { title: 'Make Donation', desc: 'Support temple', link: '/donations' },
    { title: 'Upcoming Events', desc: 'Festivals', link: '/events' }
  ];

  const dailySevas = [
    { name: 'Suprabhatha Seva', time: '06:30 AM', price: '₹116', link: '/sevas' },
    { name: 'Saligrama Seva', time: '08:30 AM', price: '₹1116', link: '/sevas' },
    { name: 'Archana Seva', time: '09:00 AM', price: '₹21', link: '/sevas' },
    { name: 'Maha Mangala Aarti', time: '11:30 AM', price: 'Free', link: '/sevas' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section - Mobile Optimized */}
      <div style={{
        background: `linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url('/images/narasimha.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        position: 'relative',
        padding: '80px 20px'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ position: 'relative', zIndex: 2, maxWidth: '900px' }}
        >
          <motion.h1 
            className="glow"
            style={{ 
              fontSize: '36px',
              marginBottom: '16px',
              fontFamily: "'Cormorant Garamond', serif",
              color: '#FFD700'
            }}
          >
            Sri Simhagiri Devasthanam Board
          </motion.h1>
          
          <motion.p 
            style={{ fontSize: '20px', marginBottom: '12px', fontStyle: 'italic', color: '#FAF6F0' }}
          >
            Where Three Divine Lords Reside - Trikutachala
          </motion.p>
          
          <motion.p 
            style={{ fontSize: '14px', marginBottom: '30px', color: '#FFE0B2' }}
          >
            Lord Varaha Swamy | Lord Shayana Narasimha Swamy | Lord Narasimha Swamy
          </motion.p>
          
          <motion.div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/sevas">
              <button className="btn-primary">Explore Sevas</button>
            </Link>
            <Link to="/donations">
              <button className="btn-secondary">Make Donation</button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Three Lords Section - Mobile Optimized */}
      <div style={{ padding: '50px 0', background: '#FAF6F0' }}>
        <div className="container">
          <h2 style={{ fontSize: '32px', textAlign: 'center', marginBottom: '16px' }}>The Three Divine Lords</h2>
          <div className="divider"></div>
          
          <div className="grid-3" style={{ marginTop: '40px' }}>
            {lords.map((lord, idx) => (
              <div
                key={lord.id}
                className="card"
                onClick={() => setSelectedLord(selectedLord === lord.id ? null : lord.id)}
                style={{ cursor: 'pointer' }}
              >
                <div style={{
                  fontSize: '60px',
                  textAlign: 'center',
                  marginBottom: '16px'
                }}>
                  {lord.icon}
                </div>
                
                <h3 style={{ fontSize: '22px', textAlign: 'center', marginBottom: '8px' }}>{lord.name}</h3>
                <p style={{ fontSize: '14px', color: '#666', marginBottom: '12px' }}>{lord.description}</p>
                
                <button style={{ 
                  width: '100%', 
                  padding: '10px', 
                  background: '#C62828', 
                  color: 'white', 
                  border: 'none', 
                  borderRadius: '44px',
                  fontSize: '14px',
                  fontWeight: '600'
                }}>
                  Book Seva for {lord.name.split(' ')[0]}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section - Mobile Optimized */}
      <div style={{ padding: '50px 0', background: '#FFFFFF' }}>
        <div className="container">
          <h2 style={{ fontSize: '32px', textAlign: 'center', marginBottom: '16px' }}>Our Services</h2>
          <div className="divider"></div>
          
          <div className="grid-4" style={{ marginTop: '40px' }}>
            {services.map((item, idx) => (
              <Link key={idx} to={item.link} style={{ textDecoration: 'none' }}>
                <div className="card" style={{ textAlign: 'center' }}>
                  <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>{item.title}</h3>
                  <p style={{ fontSize: '14px', color: '#666' }}>{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Daily Schedule - Mobile Optimized */}
      <div style={{ padding: '50px 0', background: '#FAF6F0' }}>
        <div className="container">
          <h2 style={{ fontSize: '32px', textAlign: 'center', marginBottom: '16px' }}>Daily Seva Schedule</h2>
          <div className="divider"></div>
          
          <div style={{ marginTop: '40px' }}>
            {dailySevas.map((seva, idx) => (
              <Link to={seva.link} key={idx} style={{ textDecoration: 'none' }}>
                <div className="card" style={{ 
                  marginBottom: '12px', 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  padding: '16px'
                }}>
                  <h3 style={{ fontSize: '16px', margin: 0 }}>{seva.name}</h3>
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <span style={{ fontSize: '14px', color: '#C62828' }}>{seva.time}</span>
                    <span style={{ fontSize: '16px', color: '#FFD700', fontWeight: '600' }}>{seva.price}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default HomePage;
