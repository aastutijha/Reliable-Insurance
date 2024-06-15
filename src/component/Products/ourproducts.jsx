import { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import abb from '../../assets/products/abb.png';
import rcjb from '../../assets/products/rcjb.png';
import rsjb from '../../assets/products/rsjb.png';
import rsjjbb from '../../assets/products/rsjjbb.png';
import rstjn from '../../assets/products/rstjn.png';
import rsujb from '../../assets/products/rsujb.png';
import sbjb from '../../assets/products/sbjb.png';
import smjb from '../../assets/products/smjb.png';
import usjb from '../../assets/products/usjb.png'; // Ensure this is the correct path if different from rcjb

const products = [
  { id: 1, img: abb },
  { id: 2, img: rcjb },
  { id: 3, img: rsjb },
  { id: 4, img: rsjjbb },
  { id: 5, img: rstjn },
  { id: 6, img: rsujb },
  { id: 7, img: sbjb },
  { id: 8, img: smjb },
  { id: 9, img: usjb },
];

const Products = () => {
  const [shift, setShift] = useState(0);
  const navigate = useNavigate();

  const productCardStyle = {
    width: '150px', 
    height: '150px',
    display: 'flex',
    justifyContent: 'center', 
    alignItems: 'center',
    overflow: 'hidden', 
    border: '1px solid #ccc',
    borderRadius: '8px', 
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0,0,0,0.2)', 
    margin: '10px' 
  };
  const imageStyle = {
    width: '100%', 
    height: '100%',
    objectFit: 'cover'
  };

  const ProductCard = ({ img }) => {
    return (
      <div className="product-card" style={productCardStyle}>
        <img src={img} alt="Product" style={imageStyle} />
      </div>
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setShift((prevShift) => (prevShift + 1) % products.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const displayedProducts = [...products.slice(shift), ...products.slice(0, shift)];

  const handleCardClick = useCallback(() => {
    navigate('/signupagent').catch((error) => {
      console.error("Failed to navigate:", error);
    });
  }, [navigate]);

  return (
    <div className="container mx-auto p-4 ">
      <h1 className="text-center text-xl font-bold" style={{ color: '#F05A27' }}>Our Products</h1>
      <h2 className="text-center text-2xl font-bold" style={{ color: '#024F97' }}>Types of Reliable Life Insurance</h2>
      <h3 className="text-center text-xl font-light" style={{ color: '#024F97' }}>Life is unpredictable, and unexpected events can happen at any time, such as a sudden illness or injury, a natural disaster, or an unexpected death.</h3>
      <div className="flex flex-wrap justify-center mt-8 overflow-hidden">
        <div className="w-full flex justify-center mb-4">
          {displayedProducts.slice(0, 5).map((product) => (
            <button key={product.id} onClick={handleCardClick} className="cursor-pointer m-1" aria-label={`View details about product ${product.id}`}>
              <ProductCard img={product.img} />
            </button>
          ))}
        </div>
        <div className="w-full flex justify-center">
          {displayedProducts.slice(5, 9).map((product) => (
            <button key={product.id} onClick={handleCardClick} className="cursor-pointer m-1" aria-label={`View details about product ${product.id}`}>
              <ProductCard img={product.img} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;