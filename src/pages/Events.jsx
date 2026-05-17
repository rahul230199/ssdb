import React from 'react';
import { motion } from 'framer-motion';

function Events() {
  const events = [
    {
      id: 1,
      name: "Swathi Homa",
      icon: "🔥",
      date: "February 15, 2025",
      description: "Special fire ritual performed during Swathi Nakshatra for prosperity and abundance.",
      significance: "Brings wealth, prosperity, and removes financial obstacles",
      features: "Homa, Special pooja, Prasadam"
    },
    {
      id: 2,
      name: "Narasimha Jayanthi",
      icon: "🦁",
      date: "May 15, 2025",
      description: "Celebration of the appearance of Lord Narasimha, the half-man half-lion incarnation.",
      significance: "Protection from evil, courage, and divine grace",
      features: "Maha Abhishekam, Procession, Cultural programs, Annadhana"
    },
    {
      id: 3,
      name: "Varamahalakshmi Vratha",
      icon: "🌺",
      date: "August 11, 2025",
      description: "Sacred ritual dedicated to Goddess Lakshmi for wealth and prosperity.",
      significance: "Financial stability, family happiness, divine blessings",
      features: "Special pooja, Kumkuma archana, Annadhana"
    },
    {
      id: 4,
      name: "Dhanvantri Jayanthi",
      icon: "💊",
      date: "October 30, 2025",
      description: "Celebration of Lord Dhanvantri, the god of Ayurveda and healing.",
      significance: "Health, wellness, and protection from diseases",
      features: "Special abhishekam, Health camp, Prasadam"
    },
    {
      id: 5,
      name: "Vaikunta Ekadashi",
      icon: "🚪",
      date: "December 31, 2025",
      description: "Most auspicious day dedicated to Lord Vishnu, opening of Vaikunta Dwaram.",
      significance: "Moksha (liberation), divine blessings, spiritual upliftment",
      features: "Special darshan, Veda chanting, Annadhana"
    },
    {
      id: 6,
      name: "Bunni Utsava",
      icon: "🌾",
      date: "January 14, 2026",
      description: "Harvest festival celebration with special poojas and offerings.",
      significance: "Gratitude to nature, prosperity, and community bonding",
      features: "Special pooja, Harvest offerings, Annadhana"
    },
    {
      id: 7,
      name: "Gramostava Event",
      icon: "🎉",
      date: "March 20-25, 2025",
      description: "Annual village festival celebrating our cultural heritage with grand processions.",
      significance: "Community bonding, cultural preservation, divine blessings",
      features: "Procession, Cultural programs, Annadhana, Special poojas"
    },
    {
      id: 8,
      name: "Goshale Utsava",
      icon: "🐄",
      date: "July 15, 2025",
      description: "Celebration of sacred cows at our temple goshala with special poojas.",
      significance: "Blessings of Kamadhenu, protection of cows, spiritual merit",
      features: "Gopooja, Cow feeding, Annadhana, Special abhishekam"
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
          <h1 style={{ fontSize: '48px', color: '#C62828', marginBottom: '16px' }}>Temple Events & Festivals</h1>
          <div className="divider"></div>
          <p style={{ fontSize: '18px', color: '#666' }}>Celebrations and festivals at Sri Simhagiri Devasthanam Board</p>
        </motion.div>

        <div className="grid-2">
          {events.map((event, idx) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="card"
              whileHover={{ y: -8 }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                <div style={{ fontSize: '48px' }}>{event.icon}</div>
                <div>
                  <h2 style={{ fontSize: '28px', color: '#C62828', margin: 0 }}>{event.name}</h2>
                  <p style={{ color: '#FFD700', fontWeight: '600', marginTop: '5px' }}>{event.date}</p>
                </div>
              </div>
              
              <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '16px' }}>{event.description}</p>
              <p><strong>Significance:</strong> {event.significance}</p>
              <p style={{ marginTop: '12px' }}><strong>Features:</strong> {event.features}</p>
              
              <div style={{ marginTop: '20px', padding: '16px', background: '#FFF5F0', borderRadius: '12px', textAlign: 'center' }}>
                <p style={{ color: '#C62828', fontWeight: '600' }}>📅 Mark your calendar! All devotees are welcome.</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ marginTop: '60px', padding: '40px', background: 'linear-gradient(135deg, #C62828, #8B0000)', borderRadius: '24px', textAlign: 'center', color: 'white' }}
        >
          <p style={{ fontSize: '20px', fontWeight: '600', marginBottom: '16px' }}>Stay Updated</p>
          <p>Subscribe to our newsletter for event notifications and festival schedules</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '20px', flexWrap: 'wrap' }}>
            <input type="email" placeholder="Your email address" style={{ maxWidth: '350px', background: 'white' }} />
            <button className="btn-secondary" style={{ background: 'white', color: '#C62828' }}>Subscribe</button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Events;
