// src/main.jsx
import {} from 'react';
import mascot from '../../assets/main/maskot.png';
import bg from '../../assets/main/bg.jpg'; 

const Main = () => {
  return (
    <div style={{ 
      backgroundImage: `url(${bg})`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center',
      paddingTop: '60px' // Add padding to the top equal to the navbar's height
    }} className="font-sans text-white p-5">
      <div className="p-5 rounded-lg text-left">
        <h1 className="text-4xl font-bold text-orange-500">Only @ Rs. 3100</h1>
        <h2 className="text-3xl">max benefit upto </h2>
        <h2 className="text-4xl text-orange-500"> Rs. 14.50 Lacs</h2>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex-1 bg-white text-black w-70 p-3 rounded-lg">
          <div className="flex justify-around mb-5 text-center">
            <span>Bisesh Samuhik Myadi</span>
            <span>Sulav Bal JeevanBeema Plus</span>
            <span>Surkashit Term Jeevan Beema</span>
          </div>
          <div className="flex justify-around mb-5">
            <input type="text" placeholder="Name" className="w-1/2 p-2 border border-gray-300 rounded-md" />
            <input type="text" placeholder="Mobile No" className="w-1/2 p-2 border border-gray-300 rounded-md" />
          </div>
          <div className="flex items-center mb-5">
            <input type="checkbox" id="consent" className="mr-2" />
            <label htmlFor="consent">
              I agree and consent to the <a href="#" className="text-blue-500">Terms & Conditions</a> and the <a href="#" className="text-blue-500">Privacy Policy</a>
            </label>
          </div>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-md">GO NEXT</button>
        </div>
        <div className="flex-1 text-right mt- 0">
          <img src={mascot} alt="Mascot" className="w-74 h-auto inline-block" />
        </div>
      </div>
      <div className="w-70 mx-auto">
        <div className="flex justify-around mt-5">
          <div className="text-center">
            <span className="text-xl font-bold">99.9%</span>
            <p>Claim Settlement</p>
          </div>
          <div className="text-center">
            <span className="text-xl font-bold">82+</span>
            <p>Service Networks</p>
          </div>
          <div className="text-center">
            <span className="text-xl font-bold">4 Arab</span>
            <p>Capital</p>
          </div>
          <div className="text-center">
            <span className="text-xl font-bold">20,000+</span>
            <p>Agents</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;