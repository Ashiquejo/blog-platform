import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Edit3, LogOut } from 'lucide-react';
import { Button } from '../ui/Button';
import './layout.css';

export function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setIsAuthenticated(!!localStorage.getItem('token'));
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    navigate('/login');
  };
  
  return (
    <header className="navbar-header">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <div className="navbar-logo">B</div>
          <span className="navbar-title">Blogify</span>
        </Link>
        <nav className="navbar-nav">
          <Link
            to="/"
            className={`nav-link ${location.pathname === '/' ? 'nav-link-active' : ''}`}
          >
            Home
          </Link>
          {isAuthenticated ? (
            <>
              <Link to="/create-post">
                <Button variant="primary" size="sm" className="desktop-only">
                  <Edit3 size={16} style={{ marginRight: '8px' }} />
                  Write
                </Button>
                <Button variant="primary" size="icon" className="mobile-only">
                  <Edit3 size={16} />
                </Button>
              </Link>
              <Button variant="ghost" size="icon" title="Logout" onClick={handleLogout}>
                <LogOut size={20} />
              </Button>
            </>
          ) : (
            <Link to="/login">
              <Button variant="outline" size="sm">Log in</Button>
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
