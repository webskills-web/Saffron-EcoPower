import { createContext, useCallback, useMemo, useState } from 'react';

export const ChatContext = createContext(null);

export function ChatProvider({ children }) {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'bot', text: 'Hi there! How can I help you today?' },
  ]);
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const addMessage = useCallback((message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  }, []);

  const value = useMemo(
    () => ({ messages, isOpen, isTyping, toggleOpen, setIsOpen, setIsTyping, addMessage }),
    [messages, isOpen, isTyping, toggleOpen, addMessage],
  );

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
}
