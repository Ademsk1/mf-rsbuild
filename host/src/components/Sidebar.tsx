import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <aside style={{
      width: '200px',
      minHeight: '100vh',
      backgroundColor: '#f8f9fa',
      padding: '20px',
      borderRight: '1px solid #dee2e6',
      position: 'fixed',
      left: 0,
      top: 0,
      bottom: 0,
      overflowY: 'auto'
    }}>
      <h2 style={{ marginBottom: '20px' }}>Navigation</h2>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <Link 
          to="/home" 
          style={{
            padding: '10px',
            textDecoration: 'none',
            color: isActive('/home') ? '#007bff' : '#333',
            backgroundColor: isActive('/home') ? '#e9ecef' : 'transparent',
            borderRadius: '4px'
          }}
        >
          Home
        </Link>
        <Link 
          to="/contact"
          style={{
            padding: '10px',
            textDecoration: 'none',
            color: isActive('/contact') ? '#007bff' : '#333',
            backgroundColor: isActive('/contact') ? '#e9ecef' : 'transparent',
            borderRadius: '4px'
          }}
        >
          Contact
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar; 