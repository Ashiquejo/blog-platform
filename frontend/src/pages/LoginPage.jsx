import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import './pages.css';

export function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate('/');
    }, 800);
  };

  return (
    <div className="auth-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="auth-card-wrapper"
      >
        <div className="form-header">
          <div className="auth-logo">B</div>
          <h1 className="form-title">Welcome back</h1>
          <p className="form-subtitle">Sign in to your account to continue</p>
        </div>

        <Card className="form-card">
          <form onSubmit={handleLogin} className="form-layout">
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <Input type="email" placeholder="you@example.com" required />
            </div>
            
            <div className="form-group">
              <div className="form-label-flex">
                <label className="form-label">Password</label>
                <Link to="#" className="auth-link">
                  Forgot password?
                </Link>
              </div>
              <Input type="password" placeholder="••••••••" required />
            </div>

            <Button type="submit" className="w-full mt-2" isLoading={isLoading}>
              Sign In
            </Button>
          </form>

          <div className="auth-footer">
            Don't have an account?{' '}
            <Link to="/signup" className="auth-link">
              Sign up
            </Link>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
