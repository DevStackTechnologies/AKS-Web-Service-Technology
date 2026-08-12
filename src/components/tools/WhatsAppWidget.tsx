import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send } from 'lucide-react';

export const WhatsAppWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSend = () => {
    const defaultText = message || 'Hello TecVor Technologies team! I would like to inquire about your software development services.';
    const encoded = encodeURIComponent(defaultText);
    window.open(`https://wa.me/917739339852?text=${encoded}`, '_blank');
    setIsOpen(false);
    setMessage('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            className="mb-4 w-72 bg-white border border-emerald-200 rounded-3xl p-4 shadow-2xl text-slate-900 overflow-hidden"
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white font-black text-xs shadow-sm">
                  WA
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">AKS Support Desk</h4>
                  <span className="text-[10px] text-emerald-600 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Online Now
                  </span>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-slate-700 p-1"
              >
                <X className="w-4 h-4" />
              </motion.button>
            </div>

            <div className="py-3">
              <p className="text-[11px] text-slate-600 bg-emerald-50 p-2.5 rounded-xl border border-emerald-100 leading-relaxed">
                👋 Hi there! Need quick assistance with web, mobile, or AI projects? Chat directly with our solutions team.
              </p>
            </div>

            <div className="space-y-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-emerald-500"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleSend}
                className="w-full py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md transition-all"
              >
                <Send className="w-3.5 h-3.5" /> Start WhatsApp Chat
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl flex items-center justify-center relative"
        title="Chat on WhatsApp"
      >
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-300 rounded-full animate-ping opacity-75 pointer-events-none" />
        <MessageSquare className="w-7 h-7 fill-white" />
      </motion.button>
    </div>
  );
};

