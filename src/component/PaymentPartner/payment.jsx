import { useEffect, useState } from 'react';
import { PaymentCard } from './paymentcard';
import a from '../../assets/payments/1.jpg';
import b from '../../assets/payments/2.jpg';
import c from '../../assets/payments/3.jpg';
import d from '../../assets/payments/4.jpg';
import e from '../../assets/payments/5.jpg';

const payments = [
  { id: 1, img: a },
  { id: 2, img: b },
  { id: 3, img: c },
  { id: 4, img: d },
  { id: 5, img: e },
];

const Payments = () => {
  const [shift, setShift] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setShift((prevShift) => (prevShift + 1) % payments.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const displayedpayments = [...payments.slice(shift), ...payments.slice(0, shift)];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center font-bold text-orange-500" style={{ fontSize: '2rem' }}>Our Payments</h1>
      <h2 className="text-center text-2xl font-light text-blue-700 mt-2">Premium Can Be Deposited From The Following Banks</h2>
      <div className="flex justify-center mt-8 overflow-hidden">
        {displayedpayments.map((payment) => (
          <PaymentCard key={payment.id} img={payment.img} />
        ))}
      </div>
    </div>
  );
};

export default Payments;