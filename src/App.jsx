import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './index.css';
import Header from './components/Header';
import HomePage from './HomePage';
import About from './pages/About';
import Sevas from './pages/Sevas';
import Services from './pages/Services';
import Publications from './pages/Publications';
import Bookings from './pages/Bookings';
import Donations from './pages/Donations';
import Events from './pages/Events';
import Location from './pages/Location';
import Trustees from './pages/Trustees';
import Gallery from './pages/Gallery';

function Footer() {
  return (
    <footer style={{ background: '#1A1A1A', color: 'white', padding: '60px 0 40px', marginTop: '60px' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', marginBottom: '40px' }}>
          <div><h3 style={{ fontSize: '22px', marginBottom: '20px', color: '#FFD700' }}>SSDB</h3><p>Sri Simhagiri Devasthanam Board</p><p>Survey No. 1, Sri Simhagiri Temple Complex</p><p>Bangalore South - 562121</p></div>
          <div><h4 style={{ fontSize: '18px', marginBottom: '20px', color: '#FFD700' }}>Quick Links</h4><p><a href="/sevas" style={{ color: 'white', textDecoration: 'none' }}>Sevas</a></p><p><a href="/services" style={{ color: 'white', textDecoration: 'none' }}>Services</a></p><p><a href="/publications" style={{ color: 'white', textDecoration: 'none' }}>Publications</a></p><p><a href="/bookings" style={{ color: 'white', textDecoration: 'none' }}>Bookings</a></p><p><a href="/donations" style={{ color: 'white', textDecoration: 'none' }}>Donations</a></p><p><a href="/events" style={{ color: 'white', textDecoration: 'none' }}>Events</a></p></div>
          <div><h4 style={{ fontSize: '18px', marginBottom: '20px', color: '#FFD700' }}>Contact</h4><p>Phone: +91 1234567890</p><p>Email: info@ssdb.org</p><p>UPI: ssdb@okhdfcbank</p></div>
          <div><h4 style={{ fontSize: '18px', marginBottom: '20px', color: '#FFD700' }}>Temple Timings</h4><p>Morning: 7:00 AM - 12:30 PM</p><p>Evening: 5:00 PM - 8:00 PM</p></div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '30px', textAlign: 'center' }}><p>© 2024 Sri Simhagiri Devasthanam Board. All rights reserved.</p></div>
      </div>
    </footer>
  );
}

function App() {
  const location = useLocation();
  return (<><Header /><AnimatePresence mode="wait"><Routes location={location} key={location.pathname}><Route path="/" element={<HomePage />} /><Route path="/about" element={<About />} /><Route path="/sevas" element={<Sevas />} /><Route path="/services" element={<Services />} /><Route path="/publications" element={<Publications />} /><Route path="/bookings" element={<Bookings />} /><Route path="/donations" element={<Donations />} /><Route path="/events" element={<Events />} /><Route path="/gallery" element={<Gallery />} /><Route path="/location" element={<Location />} /><Route path="/trustees" element={<Trustees />} /></Routes></AnimatePresence><Footer /></>);
}

function AppWrapper() { return (<Router><App /></Router>); }
export default AppWrapper;
