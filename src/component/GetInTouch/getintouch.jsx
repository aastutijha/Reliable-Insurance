// GetInTouch.js
import {} from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaGlobe } from 'react-icons/fa';
import img from '../../assets/getintouch/bg.jpg';

const ContactItem = ({ icon, title, content }) => (
  <div className="flex items-center mb-4 md:mb-0">
    <div className="bg-orange-500 p-3 rounded-lg mr-4">
      {icon}
    </div>
    <div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="text-white">{content}</p>
    </div>
  </div>
);

const GetInTouch = () => {
  return (
    <div className="relative bg-blue-800 py-16">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ backgroundImage: `url(${img})`, opacity: '0.2' }}
        ></div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-white text-center mb-8">Get In Touch</h2>
        
        <p className="text-white text-center mb-12 max-w-3xl mx-auto">
          Life is unpredictable, and unexpected events can happen at any time, such as a sudden illness or injury, a natural disaster, or an unexpected death.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ContactItem 
            icon={<FaMapMarkerAlt className="text-white" size={24} />}
            title="Head Office Address"
            content="Gyaneshwor, Kathmandu, Nepal"
          />

          <ContactItem 
            icon={<FaPhone className="text-white" size={24} />}
            title="Head Office Phone"
            content="(+977) 01-4523630"
          />

          <ContactItem 
            icon={<FaEnvelope className="text-white" size={24} />}
            title="Mail Us For Information"
            content="info@reliablelife.com.np"
          />

          <ContactItem 
            icon={<FaGlobe className="text-white" size={24} />}
            title="Our Service Network"
            content="View on map"
          />
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;