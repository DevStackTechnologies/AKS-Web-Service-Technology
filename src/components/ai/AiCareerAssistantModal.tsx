import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Send, Sparkles } from 'lucide-react';

interface AiCareerAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (tab: string) => void;
}

interface Message {
  sender: 'ai' | 'user';
  text: string;
  options?: { label: string; action: string }[];
}

export const AiCareerAssistantModal: React.FC<AiCareerAssistantModalProps> = ({ isOpen, onClose, onNavigate }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'ai',
      text: "👋 Hi! I'm TecVor AI Assistant. I can help you find open positions, score your resume ATS compatibility, or prepare for technical interviews at TecVor Technologies.",
      options: [
        { label: '🔍 Find Jobs for Me', action: 'find_jobs' },
        { label: '📊 ATS Resume Analyzer', action: 'ats_score' },
        { label: '📝 Generate Cover Letter', action: 'cover_letter' },
        { label: '🏢 Life at TecVor', action: 'life' },
      ]
    }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (userText: string) => {
    if (!userText.trim()) return;

    const newMessages: Message[] = [...messages, { sender: 'user', text: userText }];
    setMessages(newMessages);
    setInput('');

    setTimeout(() => {
      let aiResponseText = "I can guide you through our hiring process! We are currently hiring for React Frontend, Node.js Backend, UI/UX Design, and AI Engineers.";
      const lower = userText.toLowerCase();

      if (lower.includes('job') || lower.includes('find') || lower.includes('position')) {
        aiResponseText = "We have 25+ open positions across Frontend, Backend, AI/ML, and Mobile App Development. Would you like to view our Open Positions page?";
      } else if (lower.includes('ats') || lower.includes('resume') || lower.includes('score')) {
        aiResponseText = "You can upload your resume in the Candidate Dashboard to get an instant ATS score matching our AKS keyword database!";
      } else if (lower.includes('intern') || lower.includes('stipend')) {
        aiResponseText = "Our 2026 Internship Program offers 3-month and 6-month tracks with stipends up to ₹18,000/month and direct PPO opportunities!";
      }

      setMessages(prev => [
        ...prev,
        {
          sender: 'ai',
          text: aiResponseText,
          options: [
            { label: 'View Open Positions', action: 'goto_positions' },
            { label: 'Open Candidate Dashboard', action: 'goto_candidate' }
          ]
        }
      ]);
    }, 600);
  };

  const handleOptionClick = (action: string) => {
    if (action === 'find_jobs' || action === 'goto_positions') {
      onNavigate('positions');
      onClose();
    } else if (action === 'ats_score' || action === 'goto_candidate' || action === 'cover_letter') {
      onNavigate('candidate-dashboard');
      onClose();
    } else if (action === 'life') {
      onNavigate('lifeAtAks');
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 350, damping: 28 }}
          className="fixed bottom-6 right-6 z-50 w-full max-w-sm sm:max-w-md bg-white/95 backdrop-blur-xl border border-[#CDD2DA] shadow-2xl rounded-2xl overflow-hidden"
        >
          
          {/* Header */}
          <div className="bg-gradient-to-r from-[#0A4EDB] via-[#139EF8] to-[#38BDF8] p-4 text-white flex items-center justify-between shadow-md">
            <div className="flex items-center gap-2.5">
              <motion.div 
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md"
              >
                <Bot className="w-5 h-5 text-white" />
              </motion.div>
              <div>
                <h3 className="text-sm font-bold flex items-center gap-1.5">
                  <span>AKS AI Assistant</span>
                  <Sparkles className="w-3.5 h-3.5 text-[#38BDF8] animate-pulse" />
                </h3>
                <p className="text-[10px] text-white/80">Online | Powered by AKS Intelligence</p>
              </div>
            </div>
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="p-1 rounded-lg hover:bg-white/20 transition-colors text-white"
            >
              <X className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Messages */}
          <div className="p-4 h-80 overflow-y-auto space-y-3 bg-[#EEF2F7]/50 text-xs">
            {messages.map((msg, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.25 }}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div className={`p-3 rounded-2xl max-w-[85%] leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-[#0A4EDB] text-white rounded-br-none shadow-sm'
                    : 'bg-white border border-[#CDD2DA] text-[#1A2031] shadow-sm rounded-bl-none'
                }`}>
                  {msg.text}
                </div>

                {msg.options && (
                  <div className="flex flex-wrap gap-1.5 mt-2 max-w-[90%]">
                    {msg.options.map((opt, i) => (
                      <motion.button
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleOptionClick(opt.action)}
                        className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-white border border-[#139EF8] text-[#0A4EDB] hover:bg-[#139EF8] hover:text-white transition-all shadow-sm"
                      >
                        {opt.label}
                      </motion.button>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Input Form */}
          <form 
            onSubmit={(e) => { e.preventDefault(); handleSend(input); }}
            className="p-3 bg-white border-t border-[#CDD2DA] flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask AI about jobs, skills, hiring process..."
              className="flex-1 px-3 py-2 text-xs rounded-xl glass-input text-[#1A2031] focus:outline-none"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="p-2 rounded-xl bg-gradient-to-r from-[#0A4EDB] to-[#139EF8] text-white hover:shadow-md transition-all"
            >
              <Send className="w-4 h-4" />
            </motion.button>
          </form>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

