// src/components/DropdownMenu.jsx
import {} from 'react';

const DropdownMenu = ({ isOpen, menuItems }) => {
  return (
    <div
      className={`${
        isOpen ? 'block' : 'hidden'
      } absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5`}
    >
      <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
            role="menuitem"
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  );
};

export default DropdownMenu;
