import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card } from '../components/ui/Card';
import { Skeleton } from '../components/ui/Skeleton';
import { Clock } from 'lucide-react';
import './pages.css';

const MOCK_POSTS = [
  {
    id: 1,
    title: 'Designing Minimalist UIs in 2026',
    preview: 'Exploring the new trends in web design, focusing on whitespace, bold typography, and subtle micro-interactions that elevate user experience.',
    author: 'Alex Rivera',
    date: 'Oct 12, 2026',
    comments: 24,
  },
  {
    id: 2,
    title: 'The Future of Agentic AI',
    preview: 'How autonomous agents are transforming the way we write code and interact with complex systems daily without manual intervention.',
    author: 'Sarah Chen',
    date: 'Oct 10, 2026',
    comments: 18,
  },
  {
    id: 3,
    title: 'Mastering Tailwind CSS for Rapid Prototyping',
    preview: 'A comprehensive guide to using utility classes effectively while maintaining a scalable and maintainable codebase in React.',
    author: 'Marcus Johnson',
    date: 'Oct 8, 2026',
    comments: 56,
  }
];

export function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Latest Updates</h1>
          <p className="page-subtitle">Discover stories, thinking, and expertise.</p>
        </div>
      </div>

      <div className="posts-grid">
        {isLoading ? (
          Array(6).fill(0).map((_, i) => (
            <Card key={i} className="post-card">
              <Skeleton className="skeleton-title" />
              <Skeleton className="skeleton-preview" />
              <Skeleton className="skeleton-preview-short" />
              <div className="post-meta">
                <Skeleton className="skeleton-author" />
                <Skeleton className="skeleton-date" />
              </div>
            </Card>
          ))
        ) : MOCK_POSTS.length > 0 ? (
          MOCK_POSTS.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
            >
              <Link to={`/post/${post.id}`} className="post-card-link">
                <Card hoverable className="post-card">
                  <div className="post-card-content">
                    <h2 className="post-title">
                      {post.title}
                    </h2>
                    <p className="post-preview">
                      {post.preview}
                    </p>
                  </div>
                  
                  <div className="post-meta">
                    <div className="post-author-wrap">
                      <div className="post-author-avatar">
                        {post.author[0]}
                      </div>
                      <span className="post-author-name">{post.author}</span>
                    </div>
                    <div className="post-date-wrap">
                      <Clock size={12} />
                      {post.date}
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))
        ) : (
          <div className="no-posts">
            <h3>No posts yet</h3>
            <p>Be the first to share your thoughts!</p>
          </div>
        )}
      </div>
    </div>
  );
}
