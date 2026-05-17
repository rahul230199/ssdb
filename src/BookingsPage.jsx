import React, { useState } from 'react';

function BookingsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    pooja: '',
    date: '',
    time: '',
    gotra: '',
    nakshatra: ''
  });

  const poojaOptions = [
    "Narasimha Abhishekam (₹1100)",
    "Lakshmi Narasimha Pooja (₹2100)",
    "Maha Mangala Aarti (₹500)",
    "Satyanarayana Vratham (₹1500)",
    "Special Archana (₹300)",
    "Ashthothara Sata Namavali (₹1000)"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking submitted for ${formData.name}! We will contact you shortly. 🙏`);
  };

  return (
    <div style={{ minHeight: '100vh', padding: '60px 20px', background: 'linear-gradient(135deg, #fff5e6 0%, #ffe6d5 100%)' }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ fontSize: '36px', color: '#ea580c', marginBottom: '16px' }}>🦁 Book Your Seva at Sri Veda Lakshmi Narasimha Swamy Temple</h1>
          <p style={{ fontSize: '18px', color: '#666' }}>Book pooja, abhishekam, and darshan slots online</p>
        </div>

        <form onSubmit={handleSubmit} style={{ background: 'white', padding: '32px', borderRadius: '20px', boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }}>
          <div style={{ display: 'grid', gap: '20px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Devotee Name *</label>
              <input
                type="text"
                required
                style={{ width: '100%, padding: '12px', border: '1px solid #ddd', borderRadius: '8px' }}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Email *</label>
              <input
                type="email"
                required
                style={{ width: '100%, padding: '12px', border: '1px solid #ddd', borderRadius: '8px' }}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Phone Number *</label>
              <input
                type="tel"
                required
                style={{ width: '100%, padding: '12px', border: '1px solid #ddd', borderRadius: '8px' }}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Select Seva/Pooja *</label>
              <select
                required
                style={{ width: '100%, padding: '12px', border: '1px solid #ddd', borderRadius: '8px' }}
                onChange={(e) => setFormData({...formData, pooja: e.target.value})}
              >
                <option value="">Select Pooja</option>
                {poojaOptions.map(pooja => (
                  <option key={pooja} value={pooja}>{pooja}</option>
                ))}
              </select>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Preferred Date *</label>
              <input
                type="date"
                required
                style={{ width: '100%, padding: '12px', border: '1px solid #ddd', borderRadius: '8px' }}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
              />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Preferred Time *</label>
              <input
                type="time"
                required
                style={{ width: '100%, padding: '12px', border: '1px solid #ddd', borderRadius: '8px' }}
                onChange={(e) => setFormData({...formData, time: e.target.value})}
              />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Gotra (Optional)</label>
              <input
                type="text"
                style={{ width: '100%, padding: '12px', border: '1px solid #ddd', borderRadius: '8px' }}
                onChange={(e) => setFormData({...formData, gotra: e.target.value})}
              />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Nakshatra (Star) (Optional)</label>
              <input
                type="text"
                style={{ width: '100%, padding: '12px', border: '1px solid #ddd', borderRadius: '8px' }}
                onChange={(e) => setFormData({...formData, nakshatra: e.target.value})}
              />
            </div>

            <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '20px' }}>
              Submit Booking 🙏
            </button>
          </div>
        </form>

        <div style={{ marginTop: '24px', textAlign: 'center', color: '#666' }}>
          <p>📞 For assistance, call: +91 1234567890</p>
          <p>📧 Email: bookings@narasimhaswamy.org</p>
          <p style={{ marginTop: '16px' }}>🦁 Om Namo Bhagavate Narasimhaya 🦁</p>
        </div>
      </div>
    </div>
  );
}

export default BookingsPage;
