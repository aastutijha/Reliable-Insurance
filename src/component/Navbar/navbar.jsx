import { useState } from 'react';
import { Link } from 'react-router-dom';
import DropdownMenu from './dropdownmenu'; 
import logo from '../../assets/logoblue.png';
import logoutIcon from '../../assets/logout.png'; // Import the logout image
import { FaSearch } from 'react-icons/fa'; 

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState({
    aboutUs: false,
    ourProducts: false,
    financials: false,
    contactUs: false,
  });
  const [showSearch, setShowSearch] = useState(false);

  const toggleDropdown = (dropdown) => {
    setIsDropdownOpen((prevState) => ({
      ...prevState,
      [dropdown]: !prevState[dropdown],
    }));
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md border-b-2 border-orange-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-blue-700 font-bold">
                <img src={logo} alt="Logo" className="h-14 w-auto" />
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {['About Us', 'Our Products', 'Financials', 'Contact Us'].map((section) => (
                <div className="relative" key={section}>
                  <button
                    type="button"
                    onClick={() => toggleDropdown(section.toLowerCase().replace(/\s+/g, ''))}
                    className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-blue-700 hover:text-orange-500 focus:outline-none transition duration-150 ease-in-out"
                  >
                    {section}
                  </button>
                  <DropdownMenu
                    isOpen={isDropdownOpen[section.toLowerCase().replace(/\s+/g, '')]}
                    menuItems={section === 'About Us' ? [
                      'Company Profile',
                      'Board of Directors',
                      'Our Team',
                      'Our Regional Managers',
                      'Right to Information',
                    ] : section === 'Our Products' ? [
                      'Endowment Life Insurance Policy',
                      'Endowment Cum Whole Life Insurance Policy',
                      'Child Endowment Life Insurance Policy',
                      'Term Insurance Policy',
                      'Health Insurance Benefits',
                    ] : section === 'Financials' ? [
                      'Quarterly Report',
                      'Investor Relation',
                    ] : [
                      'Our Service network',
                      'Your Feedback',
                    ]}
                  />
                </div>
              ))}
              <Link
                to="/agents"
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-blue-700 hover:text-orange-500 focus:outline-none transition duration-150 ease-in-out"
              >
                Agents
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <div className="relative">
              <button
                onClick={() => setShowSearch(!showSearch)}
                className="rounded-full p-2 mr-2 bg-blue-700 hover:bg-orange-500 focus:bg-orange-500"
              >
                <FaSearch className="text-white" />
              </button>
              {showSearch && (
                <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="p-2 w-full text-gray-700"
                  />
                </div>
              )}
              <a
                href="https://reliablelife.com.np/premium-calculator/"
                className="inline-block px-4 py-2 border border-blue-700 bg-blue-700 text-white rounded-md mr-3"
              >
                Premium Calculator
              </a>
              <button className="text-blue-700">
                <img src={logoutIcon} alt="Logout" className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
