// CallbackForm.js
import { useState } from 'react';

const CallbackForm = () => {
  const [name, setName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ name, mobileNumber, agreeToTerms });
  };

  return (
    // <div className="bg-blue-700 min-h-screen flex items-center justify-center p-4 ">
        <div className="bg-blue-700 flex items-center justify-center p-4" style={{ minHeight: '40vh' }}>
      <div className="w-full max-w-4xl">
        <div className="flex flex-col md:flex-row items-center mb-8">
          <div className="text-white mr-4 mb-4 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <h1 className="text-white text-3xl font-bold">Have us call you</h1>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row mb-6">
            <input
              type="text"
              placeholder="Enter Your Name"
              className="flex-grow mb-4 md:mb-0 md:mr-4 p-3 bg-transparent border-b-2 border-blue-500 text-white placeholder-blue-300 focus:outline-none focus:border-white"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="tel"
              placeholder="Enter Mobile Number"
              className="flex-grow p-3 bg-transparent border-b-2 border-blue-500 text-white placeholder-blue-300 focus:outline-none focus:border-white"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              required
            />
          </div>

          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              id="agreeToTerms"
              className="mr-2"
              checked={agreeToTerms}
              onChange={(e) => setAgreeToTerms(e.target.checked)}
              required
            />
            <label htmlFor="agreeToTerms" className="text-white">
              I agree and consent to the Terms & Conditions and the Privacy Policy
            </label>
          </div>

          <button
            type="submit"
            className="bg-orange-500 text-white py-3 px-8 rounded-full hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default CallbackForm;