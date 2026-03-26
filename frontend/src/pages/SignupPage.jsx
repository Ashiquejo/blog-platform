import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import './pages.css';

export function SignupPage() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = (e) => {
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
          <h1 className="form-title">Create an account</h1>
          <p className="form-subtitle">Join Blogify and start sharing your stories</p>
        </div>

        <Card className="form-card">
          <form onSubmit={handleSignup} className="form-layout">
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <Input type="text" placeholder="John Doe" required />
            </div>

            <div className="form-group">
              <label className="form-label">Email Address</label>
              <Input type="email" placeholder="you@example.com" required />
            </div>
            
            <div className="form-group">
              <label className="form-label">Password</label>
              <Input type="password" placeholder="••••••••" required />
            </div>

            <Button type="submit" className="w-full mt-2" isLoading={isLoading}>
              Create Account
            </Button>
          </form>

          <div className="auth-footer">
            Already have an account?{' '}
            <Link to="/login" className="auth-link">
              Sign in
            </Link>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
