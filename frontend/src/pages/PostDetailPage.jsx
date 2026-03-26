import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, MessageSquare, Share2 } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Textarea } from '../components/ui/Textarea';
import { Card } from '../components/ui/Card';
import './pages.css';

const MOCK_POST = {
  id: 1,
  title: 'Designing Minimalist UIs in 2026',
  content: `
    <p>The landscape of web design is constantly shifting, but the core principles of good design remain eternal. As we move deeper into 2026, the trend of minimalism has evolved from simple stark white pages into rich, layered experiences that feel both lightweight and deeply interactive.</p>
    <h3>Embracing Whitespace</h3>
    <p>Whitespace isn't just empty space; it's the breathing room that allows your content to speak. By expanding margins and increasing line heights, interfaces become vastly more readable and approachable.</p>
    <h3>Typography as Art</h3>
    <p>With the widespread adoption of variable fonts, typography has taken center stage. We are seeing a move towards bold, contrasting font weights that guide the user's eye naturally through the visual hierarchy without relying on borders or boxes.</p>
    <blockquote>
      <p>"By blending subtle drop shadows with soft color palettes, we create a sense of depth that feels natural and unintrusive. This is the essence of modern minimalist design: removing the unessential so the essential can speak."</p>
    </blockquote>
  `,
  author: 'Alex Rivera',
  date: 'Oct 12, 2026',
  readTime: '4 min read',
};

const INITIAL_COMMENTS = [
  { id: 1, author: 'Emily Davis', text: 'Great insights! I totally agree about the whitespace.', date: '2 hours ago' },
  { id: 2, author: 'Jordan Lee', text: 'Have you tried using Framer Motion alongside these design principles? It works wonders.', date: '5 hours ago' },
];

export function PostDetailPage() {
  const { id } = useParams();
  const [comments, setComments] = useState(INITIAL_COMMENTS);
  const [newComment, setNewComment] = useState('');

  const handleAddComment = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    
    const comment = {
      id: Date.now(),
      author: 'Current User', 
      text: newComment,
      date: 'Just now'
    };
    
    setComments([comment, ...comments]);
    setNewComment('');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="post-detail-container"
    >
      <div className="detail-header">
        <Link to="/" className="back-link">
          <ArrowLeft size={16} />
          Back to posts
        </Link>
        
        <h1 className="detail-title">
          {MOCK_POST.title}
        </h1>
        
        <div className="detail-meta">
          <div className="detail-author">
            <div className="detail-avatar">
              {MOCK_POST.author[0]}
            </div>
            <div>
              <div className="detail-author-name">{MOCK_POST.author}</div>
              <div className="detail-author-stats">
                <span className="detail-author-stats-item">
                  <Clock size={12} />
                  {MOCK_POST.date}
                </span>
                <span>&middot;</span>
                <span>{MOCK_POST.readTime}</span>
              </div>
            </div>
          </div>
          <Button variant="outline" size="icon" title="Share post">
            <Share2 size={16} />
          </Button>
        </div>
      </div>

      <div 
        className="detail-content"
        dangerouslySetInnerHTML={{ __html: MOCK_POST.content }}
      />

      <hr className="detail-divider" />

      <section>
        <div className="comments-header">
          <MessageSquare size={24} color="#6366f1" />
          <h2 className="comments-title">Comments ({comments.length})</h2>
        </div>

        <Card className="comment-form-card">
          <form onSubmit={handleAddComment}>
            <Textarea
              placeholder="What are your thoughts?"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <div className="comment-form-actions">
              <Button type="submit" disabled={!newComment.trim()}>
                Post Comment
              </Button>
            </div>
          </form>
        </Card>

        <div className="comment-list">
          {comments.map((comment, i) => (
            <motion.div
              key={comment.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="comment-item"
            >
              <div className="comment-avatar">
                {comment.author[0]}
              </div>
              <div>
                <div className="comment-meta">
                  <div className="comment-author">{comment.author}</div>
                  <div className="comment-date">{comment.date}</div>
                </div>
                <p className="comment-text">
                  {comment.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
