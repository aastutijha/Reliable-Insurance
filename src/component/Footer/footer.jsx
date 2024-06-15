import React from 'react';

const Footer = () => {
  return (
    <footer className="relative pt-24 bg-blue-900 custom-footer-margin">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://www.reliable.prabidhienterprises.com/assets/img/footer/portrait-smiley-indian-women.jpg"
          alt="Background"
        />
        <div className="absolute inset-0 bg-blue-900 opacity-75"></div>
      </div>
      <div className="relative container mx-auto text-white">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/4 md:w-1/2 mb-8 flex-1">
            <a href="index.html">
              <img
                className="w-40 h-auto"
                src="https://www.reliable.prabidhienterprises.com/assets/img/modal-logo.png"
                alt="Image"
              />
            </a>
            <p className="mt-4 ml-2">
              Reliable Nepal Life Insurance Limited - a 
              life insurance company is duly approved by 
              the Insurance Board and Government of Nepal.
            </p>
            <div className="relative mt-6">
              <ul className="flex space-x-4 absolute bottom-24">
                <li>
                  <a
                    href="https://www.facebook.com/reliablelifeinsurancelimited"
                    className="text-white hover:text-gray-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bx bxl-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-gray-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bx bxl-twitter"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-gray-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bx bxl-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/watch?v=iL0Ub5Br7dw"
                    className="text-white hover:text-gray-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bx bxl-youtube"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/reliablelifenep/"
                    className="text-white hover:text-gray-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bx bxl-instagram"></i>
                  </a>
                </li>
              </ul>
              <div className="mt-6 rounded-sm">
                <h5 className="text-lg font-semibold">We are Available On:</h5>
                <a href="https://play.google.com/store/apps/details?id=app.reliablelife.insurance.reliablelife&amp;hl=en&amp;gl=US">
                  <img
                    src="https://www.reliable.prabidhienterprises.com/assets/img/playstore.png"
                    alt="Playstore"
                    className="mt-4 w-64 rounded-sm"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/4 md:w-1/2 mb-8 ml-2 flex-1">
            <h3 className="text-xl font-semibold mb-1">About Us</h3>
            <div className="w-24 h-1 rounded-sm bg-orange-600 mb-4"></div>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-white hover:text-gray-400">
                  About Reliable Life
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white hover:text-gray-400">
                  Company Profile
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white hover:text-gray-400">
                  Board Of Directors
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white hover:text-gray-400">
                  Management Team
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white hover:text-gray-400">
                  Corporate Goals
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white hover:text-gray-400">
                  Corporate Governance
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white hover:text-gray-400">
                  Information Officer
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full lg:w-1/4 md:w-1/2 mb-8 flex-1">
            <h3 className="text-xl font-semibold mb-1">Service Links</h3>
            <div className="w-24 h-1 rounded-sm bg-orange-600 mb-4"></div>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-white hover:text-gray-400">
                  Reliable Sulav Bal Jeevan Bima Plus Plan
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white hover:text-gray-400">
                  Health Insurance Benefits
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white hover:text-gray-400">
                  Foreign Employment Policy
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white hover:text-gray-400">
                  Reliable Life Insurance Advisor
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white hover:text-gray-400">
                  Child Endowment Life Insurance
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white hover:text-gray-400">
                  Micro Insurance
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white hover:text-gray-400">
                  Become An Agent
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full lg:w-1/4 md:w-1/2 mb-8 flex-1">
            <h3 className="text-xl font-semibold mb-1">Newsletter</h3>
            <div className="w-24 h-1 rounded-sm bg-orange-600 mb-4"></div>
            <p className="text-white mb-4">
              Subscribe to our Newsletter for future updates and notices
              directly from us.
            </p>
            <div>
              <form className="flex flex-col space-y-2" data-toggle="validator">
                <input
                  type="email"
                  className="form-control p-2 border border-gray-300 rounded md:w-3/4"
                  placeholder="Enter Your Email"
                  name="EMAIL"
                  required
                />
                <button
                  className="default-btn bg-blue-500 text-white p-2 rounded disabled:opacity-50 md:w-3/4"
                  type="submit"
                >
                  Subscribe
                </button>
                <div id="validator-newsletter" className="form-result"></div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="flex relative py-4 justify-center gap-1 text-white font-semibold bg-orange-500 w-full items-center text-base">
        Copyright 2023{` `}
        <a href="https://reliablelife.com.np/"> Reliable Life Insurance</a>
      </div>
    </footer>
  );
};

export default Footer;
