import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import './layout.css';

export function MainLayout() {
  return (
    <div className="layout-container">
      <Navbar />
      <main className="layout-main">
        <Outlet />
      </main>
      <footer className="layout-footer">
        <p>&copy; {new Date().getFullYear()} Blogify. All rights reserved.</p>
      </footer>
    </div>
  );
}
