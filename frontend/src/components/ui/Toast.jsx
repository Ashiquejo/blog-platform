import React from 'react';
import { cn } from '../../lib/utils';
import { CheckCircle2, XCircle, Info, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './ui.css';

export function Toast({ message, type = 'success', isVisible, onClose }) {
  const icons = {
    success: <CheckCircle2 size={20} color="#22c55e" />,
    error: <XCircle size={20} color="#ef4444" />,
    info: <Info size={20} color="#6366f1" />
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="toast-container"
        >
          {icons[type]}
          <p className="toast-message">{message}</p>
          <button onClick={onClose} className="toast-close">
            <X size={16} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
