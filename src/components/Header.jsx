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
    <nav style={{
      background: scrolled ? 'rgba(255,255,255,0.98)' : 'white',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.08)' : '0 1px 0 rgba(0,0,0,0.05)',
      padding: '16px 0',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      transition: 'all 0.3s ease'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div>
            <div style={{ fontSize: '26px', fontWeight: '700', fontFamily: "'Cormorant Garamond', serif", color: '#C62828', letterSpacing: '1px' }}>SSDB</div>
            <div style={{ fontSize: '10px', color: '#C62828', letterSpacing: '1.5px', marginTop: '2px' }}>SRI SIMHAGIRI DEVASTHANAM BOARD</div>
          </div>
        </Link>

        <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
          {navItems.map((item) => (
            <Link key={item.path} to={item.path} style={{ textDecoration: 'none', color: location.pathname === item.path ? '#C62828' : '#4A4A4A', fontWeight: location.pathname === item.path ? '600' : '400', fontSize: '14px', letterSpacing: '0.3px', transition: 'color 0.3s ease', padding: '4px 0', borderBottom: location.pathname === item.path ? '2px solid #FFD700' : 'none' }}
              onMouseEnter={(e) => e.target.style.color = '#C62828'}
              onMouseLeave={(e) => e.target.style.color = location.pathname === item.path ? '#C62828' : '#4A4A4A'}>
              {item.name}
            </Link>
          ))}
        </div>

        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{ background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer', display: 'none', color: '#C62828' }} className="mobile-menu-btn">
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {mobileMenuOpen && (
        <div style={{ position: 'absolute', top: '70px', left: 0, right: 0, background: 'white', padding: '20px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {navItems.map((item) => (<Link key={item.path} to={item.path} onClick={() => setMobileMenuOpen(false)} style={{ textDecoration: 'none', color: location.pathname === item.path ? '#C62828' : '#4A4A4A', fontWeight: location.pathname === item.path ? '600' : '400', fontSize: '16px', padding: '8px 0' }}>{item.name}</Link>))}
        </div>
      )}

      <style>{`@media (max-width: 1024px) { .mobile-menu-btn { display: block !important; } nav .container > div:last-child { display: none; } }`}</style>
    </nav>
  );
}

export default Header;
