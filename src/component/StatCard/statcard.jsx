import { useState, useEffect } from 'react';
import { FaUser, FaHeadset, FaUsers, FaStore } from 'react-icons/fa';

const StatCard = ({ icon, value, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!value) return;

    const target = parseInt(value.replace(/[+,]/g, ''), 10);
    const increment = target / 100;

    const timer = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount + increment < target) {
          return prevCount + increment;
        } else {
          clearInterval(timer);
          return target;
        }
      });
    }, 20);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md border-t-orange-500">
      <div className="text-4xl mb-4">{icon}</div>
      <div className="text-3xl font-bold text-blue-600 mb-2">
        {count.toLocaleString()}+
      </div>
      <div className="text-lg text-gray-600">{label}</div>
    </div>
  );
};

const StatsGrid = () => {
  const stats = [
    { icon: <FaUser className="text-orange-500" />, value: '12+', label: 'Insurance Plan' },
    { icon: <FaHeadset className="text-green-500" />, value: '20,966+', label: 'No. Of Agents' },
    { icon: <FaUsers className="text-orange-500" />, value: '4,222,766+', label: 'Policy Holders' },
    { icon: <FaStore className="text-blue-500" />, value: '82+', label: 'Branches' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-center text-xl font-bold" style={{ color: '#F05A27' }}>Our Statistics</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>
    </div>
  );
};

export default StatsGrid;
