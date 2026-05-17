import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking a link
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { path: '/', name: 'Home' },
    { path: '/about', name: 'About' },
    { path: '/sevas', name: 'Sevas' },
    { path: '/services', name: 'Services' },
    { path: '/publications', name: 'Publications' },
    { path: '/bookings', name: 'Bookings' },
    { path: '/donations', name: 'Donations' },
    { path: '/events', name: 'Events' },
    { path: '/gallery', name: 'Gallery' },
    { path: '/location', name: 'Location' },
    { path: '/trustees', name: 'Committee' }
  ];

  return (
    <>
      <nav style={{
        background: scrolled ? 'rgba(255,255,255,0.98)' : 'white',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.08)' : '0 1px 0 rgba(0,0,0,0.05)',
        padding: '12px 0',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        transition: 'all 0.3s ease'
      }}>
        <div className="container" style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center' 
        }}>
          <Link to="/" style={{ textDecoration: 'none' }} onClick={() => setMobileMenuOpen(false)}>
            <div>
              <div style={{ 
                fontSize: '20px', 
                fontWeight: '700', 
                fontFamily: "'Cormorant Garamond', serif",
                color: '#C62828',
                letterSpacing: '1px'
              }}>
                SSDB
              </div>
              <div style={{ 
                fontSize: '8px', 
                color: '#C62828', 
                letterSpacing: '1px',
                marginTop: '2px',
                display: 'none'
              }}>
                SRI SIMHAGIRI DEVASTHANAM BOARD
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div style={{ 
            display: 'none', 
            gap: '20px',
            alignItems: 'center',
            flexWrap: 'wrap'
          }} className="desktop-nav">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                style={{
                  textDecoration: 'none',
                  color: location.pathname === item.path ? '#C62828' : '#4A4A4A',
                  fontWeight: location.pathname === item.path ? '600' : '400',
                  fontSize: '14px',
                  letterSpacing: '0.3px',
                  transition: 'color 0.3s ease',
                  padding: '4px 0',
                  borderBottom: location.pathname === item.path ? '2px solid #FFD700' : 'none'
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-menu-btn"
            aria-label="Menu"
            style={{
              background: 'none',
              border: 'none',
              fontSize: '28px',
              cursor: 'pointer',
              padding: '8px',
              color: '#C62828',
              minWidth: '44px',
              minHeight: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'white',
          zIndex: 999,
          overflowY: 'auto',
          paddingTop: '70px'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            padding: '20px'
          }}>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  textDecoration: 'none',
                  color: location.pathname === item.path ? '#C62828' : '#4A4A4A',
                  fontWeight: location.pathname === item.path ? '600' : '400',
                  fontSize: '18px',
                  padding: '12px 0',
                  borderBottom: '1px solid #E8E0D8',
                  display: 'block'
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}

export default Header;
