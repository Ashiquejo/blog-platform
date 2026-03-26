import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Textarea } from '../components/ui/Textarea';
import { useNavigate } from 'react-router-dom';
import './pages.css';

export function CreatePostPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Mock save
    setTimeout(() => {
      setIsLoading(false);
      navigate('/');
    }, 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="form-container"
    >
      <div className="form-header">
        <h1 className="form-title">Create New Post</h1>
        <p className="form-subtitle">Share your thoughts with the world</p>
      </div>

      <Card className="form-card">
        <form onSubmit={handleSubmit} className="form-layout">
          <div className="form-group">
            <label htmlFor="title" className="form-label">
              Post Title
            </label>
            <Input
              id="title"
              placeholder="e.g. The Future of Design"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="content" className="form-label">
              Content
            </label>
            <Textarea
              id="content"
              placeholder="Write your amazing post here..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </div>

          <div className="form-actions">
            <Button type="button" variant="ghost" onClick={() => navigate('/')}>
              Cancel
            </Button>
            <Button type="submit" isLoading={isLoading} disabled={!title.trim() || !content.trim()}>
              Publish Post
            </Button>
          </div>
        </form>
      </Card>
    </motion.div>
  );
}
