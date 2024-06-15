// InformationOfficerCard.js
import {} from 'react';
import image from '../../assets/information officer/hooman.jpg';

const InformationOfficerCard = () => {
  return (
    <div className="bg-[#F05A27] p-8 rounded-xl shadow-lg max-w-7xl mx-auto mb-5 ml-1 mr-1">
      <div className="flex flex-col md:flex-row items-center justify-center text-center"> {/* Adjusted for center alignment */}
        <div className="mb-6 md:mb-0 md:mr-8">
          <img 
            src={image} 
            alt="Information Officer" 
            className="rounded-lg w-64 h-64 object-cover border-2 border-white mx-auto" // Added mx-auto for centering the image
          />
        </div>

        <div className="text-white">
          <h2 className="text-4xl font-bold mb-6">INFORMATION<br />OFFICER</h2>
          
          <div className="space-y-2">
            <p><span className="font-semibold">Name:</span> Dipesh Tiwari</p>
            <p><span className="font-semibold">Designation:</span> Senior AGM</p>
            <p><span className="font-semibold">Contact Number:</span> 01-4523630</p>
            <p>
              <span className="font-semibold">Mail:</span>{' '}
              <a href="mailto:dipesh.tiwari@reliablelife.com.np" className="underline">
                dipesh.tiwari@reliablelife.com.np
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationOfficerCard;