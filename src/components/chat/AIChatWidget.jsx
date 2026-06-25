import { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMessageSquare, FiSend, FiX, FiChevronDown } from 'react-icons/fi';
import { ChatContext } from '../../context/ChatContext.jsx';

function AIChatWidget() {
  const { messages, isOpen, isTyping, toggleOpen, addMessage, setIsTyping } = useContext(ChatContext);
  const [draft, setDraft] = useState('');
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = () => {
    if (!draft.trim()) return;
    addMessage({ id: Date.now(), sender: 'user', text: draft.trim() });
    setDraft('');
    setIsTyping(true);

    setTimeout(() => {
      addMessage({ id: Date.now() + 1, sender: 'bot', text: 'Thanks for reaching out! Our team will follow up shortly.' });
      setIsTyping(false);
    }, 1200);
  };

  const chatButtonLabel = useMemo(() => (isOpen ? 'Close' : 'Chat'), [isOpen]);

  return (
    <div className="fixed left-4 bottom-6 z-50 flex flex-col items-start gap-4 sm:left-6">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="w-[340px] max-w-full rounded-3xl border border-slate-200 bg-white shadow-soft"
          >
            <div className="rounded-3xl bg-primary px-5 py-4 text-white">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] opacity-90">AI Support</p>
                  <h3 className="mt-2 text-lg font-semibold">Chat with Ellvin</h3>
                </div>
                <button type="button" onClick={toggleOpen} className="rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20">
                  <FiX size={18} />
                </button>
              </div>
            </div>
            <div className="max-h-96 overflow-hidden rounded-b-3xl bg-slate-50 p-4">
              <div ref={scrollRef} className="mb-4 flex max-h-72 flex-col gap-3 overflow-y-auto pr-1">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`rounded-3xl px-4 py-3 text-sm shadow-sm ${
                      message.sender === 'bot'
                        ? 'bg-white text-slate-800'
                        : 'self-end bg-primary text-white'
                    }`}
                  >
                    {message.text}
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                {isTyping && (
                  <div className="flex items-center gap-2 rounded-3xl bg-slate-100 px-4 py-3 text-sm text-slate-600">
                    <span className="inline-flex h-2.5 w-2.5 animate-pulse rounded-full bg-primary" /> Typing...
                  </div>
                )}
                <div className="flex gap-2">
                  <input
                    value={draft}
                    onChange={(event) => setDraft(event.target.value)}
                    placeholder="Type a message..."
                    className="flex-1 rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                  <button
                    type="button"
                    onClick={handleSend}
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white transition hover:bg-primaryDark"
                  >
                    <FiSend size={18} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={toggleOpen}
        className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-xl transition hover:bg-primaryDark"
        aria-label="Open chat widget"
      >
        <span className="sr-only">{chatButtonLabel}</span>
        <FiMessageSquare size={24} />
      </button>
    </div>
  );
}

export default AIChatWidget;
