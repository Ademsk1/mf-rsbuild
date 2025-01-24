import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import type { FC } from 'react';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Sidebar from './components/Sidebar';

// Using dynamic import with proper type handling
const Button = React.lazy(() => import('provider/Button'));

const App: FC = () => {
  return (
    <BrowserRouter>
      <div style={{ 
        display: 'flex',
        minHeight: '100vh',
        position: 'relative'
      }}>
        <Sidebar />
        <div style={{ 
          flex: 1,
          paddingLeft: '220px', // 200px sidebar + 20px gap
          padding: '20px 20px 20px 220px',
        }}>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App; 