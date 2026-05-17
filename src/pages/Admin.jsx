import React, { useState } from 'react';
import { Lock, Users, DollarSign, Calendar } from 'lucide-react';
import toast from 'react-hot-toast';

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  const adminPassword = "Temple@2024";

  const handleLogin = () => {
    if (password === adminPassword) {
      setIsAuthenticated(true);
      toast.success('Welcome Admin!');
    } else {
      toast.error('Invalid password');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-xl w-96">
          <div className="text-center mb-6">
            <Lock size={48} className="mx-auto text-orange-600" />
            <h2 className="text-2xl font-bold mt-4">Admin Login</h2>
          </div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter admin password"
            className="w-full px-4 py-2 border rounded-lg mb-4"
            onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
          />
          <button
            onClick={handleLogin}
            className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg p-6 shadow">
            <Users className="text-blue-600 mb-2" size={32} />
            <div className="text-2xl font-bold">156</div>
            <div className="text-gray-600">Total Bookings</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow">
            <DollarSign className="text-green-600 mb-2" size={32} />
            <div className="text-2xl font-bold">₹78,500</div>
            <div className="text-gray-600">Total Donations</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow">
            <Calendar className="text-orange-600 mb-2" size={32} />
            <div className="text-2xl font-bold">12</div>
            <div className="text-gray-600">This Month</div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b">
            <h2 className="text-xl font-bold">Recent Bookings</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left">Name</th>
                  <th className="px-6 py-3 text-left">Pooja</th>
                  <th className="px-6 py-3 text-left">Date</th>
                  <th className="px-6 py-3 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="px-6 py-4">Rajesh Kumar</td>
                  <td className="px-6 py-4">Abhishekam</td>
                  <td className="px-6 py-4">2024-01-20</td>
                  <td className="px-6 py-4 text-green-600">Confirmed</td>
                </tr>
                <tr className="border-t">
                  <td className="px-6 py-4">Priya Sharma</td>
                  <td className="px-6 py-4">Satyanarayana</td>
                  <td className="px-6 py-4">2024-01-21</td>
                  <td className="px-6 py-4 text-yellow-600">Pending</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
