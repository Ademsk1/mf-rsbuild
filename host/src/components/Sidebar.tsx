import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <aside className="w-[200px] min-h-screen bg-gray-50 p-5 border-r border-gray-200 fixed left-0 top-0 bottom-0 overflow-y-auto">
      <h2 className="text-xl font-bold mb-5">Navigation</h2>
      <nav className="flex flex-col gap-3">
        <Link 
          to="/home" 
          className={`p-3 rounded-md transition-colors ${
            isActive('/home') 
              ? 'bg-blue-50 text-blue-600' 
              : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          Home
        </Link>
        <Link 
          to="/contact"
          className={`p-3 rounded-md transition-colors ${
            isActive('/contact') 
              ? 'bg-blue-50 text-blue-600' 
              : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          Contact
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar; 