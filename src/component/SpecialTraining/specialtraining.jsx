// SpecialTrainingBanner.js
import {} from 'react';
import img from '../../assets/special/image.png'
const SpecialTrainingBanner = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="bg-blue-800 p-6 rounded-lg shadow-lg m-3 mb-4">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img 
            src= {img}
            alt="Training room with a professional" 
            className="rounded-lg w-full h-auto"
          />
        </div>
        
        <div className="md:w-1/2 md:pl-6 text-white">
          <h2 className="text-3xl font-bold mb-4">To participate in Special Training</h2>
          
          <div className="mb-6">
            <button 
              onClick={scrollToTop}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded animate-pulse transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Contact Us
            </button>
          </div>
          
          <div>
            <p className="mb-2">Call Us Today:</p>
            <p className="text-2xl font-semibold">(+977) 01-4523630</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialTrainingBanner;