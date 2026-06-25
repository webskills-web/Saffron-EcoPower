import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes.jsx';
import Navbar from './components/layout/Navbar.jsx';
import Footer from './components/layout/Footer.jsx';
import AIChatWidget from './components/chat/AIChatWidget.jsx';
import { ChatProvider } from './context/ChatContext.jsx';

function App() {
  const location = useLocation();

  return (
    <ChatProvider>
      <div className="min-h-screen flex flex-col bg-white text-slate-900">
        <Navbar />
        <main className="flex-1">
          <AnimatePresence mode="wait">
            <AppRoutes location={location} key={location.pathname} />
          </AnimatePresence>
        </main>
        <Footer />
        <AIChatWidget />
      </div>
    </ChatProvider>
  );
}

export default App;
