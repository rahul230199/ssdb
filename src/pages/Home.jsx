import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Gift, Users, Clock, Bell, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const features = [
    { icon: <Calendar size={40} />, title: "Online Booking", desc: "Book pooja and darshan slots easily" },
    { icon: <Gift size={40} />, title: "Donations", desc: "Support temple activities" },
    { icon: <Users size={40} />, title: "Community", desc: "Join spiritual events" },
    { icon: <Clock size={40} />, title: "Live Updates", desc: "Get real-time notifications" }
  ];

  const timings = [
    { name: "Suprabhatam", time: "05:00 AM" },
    { name: "Abhishekam", time: "06:30 AM" },
    { name: "Mangala Aarti", time: "07:30 PM" }
  ];

  return (
    <div className="bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1584225064785-c62a8b43d148?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            className="w-full h-full object-cover"
            alt="Temple"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative text-center text-white px-4">
          <motion.h1 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            Welcome to Divine Grace
          </motion.h1>
          <motion.p 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl mb-8"
          >
            Experience spiritual bliss and inner peace
          </motion.p>
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6 }}
            className="flex gap-4 justify-center flex-wrap"
          >
            <Link to="/bookings" className="bg-orange-600 hover:bg-orange-700 px-8 py-3 rounded-full font-semibold transition flex items-center gap-2">
              <Calendar size={20} /> Book Darshan
            </Link>
            <Link to="/donations" className="bg-yellow-500 hover:bg-yellow-600 px-8 py-3 rounded-full font-semibold transition flex items-center gap-2">
              <Heart size={20} /> Donate Now
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition"
              >
                <div className="text-orange-600 mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Timings */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-100 to-amber-100">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Daily Pooja Timings</h2>
            <Bell className="inline-block text-orange-600 mb-2" />
          </div>
          <div className="max-w-2xl mx-auto">
            {timings.map((item, idx) => (
              <div key={idx} className="flex justify-between items-center bg-white rounded-lg p-4 mb-3 shadow">
                <span className="font-semibold text-lg">{item.name}</span>
                <span className="text-orange-600 font-bold">{item.time}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
