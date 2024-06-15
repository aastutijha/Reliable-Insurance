import React from 'react';

export const PaymentCard = ({ img }) => {
  return (
    <div className="m-4 p-4 bg-blue-500 shadow-md rounded-md flex flex-col items-center justify-center w-48 transition-transform duration-1000 ease-in-out">
      <img src={img} className="h-24 w-30 mb-4" />
    </div>
  );
};