import {}from 'react';

export const ProductCard = ({ img }) => {
  return (
    <div className="m-4 p-4 bg-white shadow-md rounded-md flex flex-col items-center w-48 transition-transform duration-1000 ease-in-out">
      <img src={img} className="h-16 w-16 mb-4" />
    </div>
  );
};
