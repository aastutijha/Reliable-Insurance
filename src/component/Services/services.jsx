import { useEffect, useState } from 'react';
import { ServiceCard } from './servicecard';
import paypremium from '../../assets/services/paypremium.png'
import claimstatus from '../../assets/services/claimstatus.png'
import downloadcertificate from '../../assets/services/downloadcertificate.png'
import premiumpaidcertificate from '../../assets/services/premiumpaidcertificate.png'

const services = [
  { id: 1, title: 'Pay Premium', img: paypremium },
  { id: 2, title: 'Download Statement', img: downloadcertificate},
  { id: 3, title: 'Premium paid certificate', img: premiumpaidcertificate },
  { id: 4, title: 'Claim Status', img: claimstatus },
];

const Services = () => {
  const [shift, setShift] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setShift((prevShift) => (prevShift + 1) % services.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, []);

  const displayedServices = [...services.slice(shift), ...services.slice(0, shift)];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-xl font-bold text-orange-500">Our Services</h1>
      <h2 className="text-center text-2xl font-bold text-blue-700 mt-2">Service Policies</h2>
      <div className="flex justify-center mt-8 overflow-hidden">
        {displayedServices.map((service) => (
          <ServiceCard key={service.id} title={service.title} img={service.img} />
        ))}
      </div>
    </div>
  );
};

export default Services;
