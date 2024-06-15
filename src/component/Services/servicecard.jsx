import {}from 'react';

export const ServiceCard = ({ title, img }) => {
  return (
    <div className="m-4 p-4 bg-white shadow-md rounded-md flex flex-col items-center w-48 transition-transform duration-1000 ease-in-out">
      <img src={img} alt={title} className="h-16 w-16 mb-4" />
      <h3 className="text-center text-sm font-medium text-gray-700">{title}</h3>
    </div>
  );
};
