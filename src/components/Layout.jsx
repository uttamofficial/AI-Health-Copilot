import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Chatbot from './Chatbot';
import { useAuth } from '../hooks/useAuth';

const Layout = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isAuthenticated={isAuthenticated} onLogout={logout} />
      
      <main className="flex-grow">
        <Outlet />
      </main>
      
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Layout;