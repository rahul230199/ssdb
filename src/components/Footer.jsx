import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <span className="text-3xl mr-2">🛕</span> Shri Temple
            </h3>
            <p className="text-gray-400">Serving devotees since 1950. A place of peace, devotion, and spiritual growth.</p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-orange-500">About Us</a></li>
              <li><a href="#" className="hover:text-orange-500">Pooja Schedule</a></li>
              <li><a href="#" className="hover:text-orange-500">Events</a></li>
              <li><a href="#" className="hover:text-orange-500">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2"><MapPin size={18} /> Temple Road, City, State</li>
              <li className="flex items-center gap-2"><Phone size={18} /> +91 1234567890</li>
              <li className="flex items-center gap-2"><Mail size={18} /> info@shritemple.com</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <Facebook className="cursor-pointer hover:text-orange-500" />
              <Twitter className="cursor-pointer hover:text-orange-500" />
              <Instagram className="cursor-pointer hover:text-orange-500" />
              <Youtube className="cursor-pointer hover:text-orange-500" />
            </div>
            <div className="mt-4">
              <p className="text-gray-400">Newsletter</p>
              <input type="email" placeholder="Your email" className="mt-2 px-4 py-2 rounded bg-gray-800 text-white w-full" />
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Shri Temple. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
