import { useState, useEffect, useRef } from 'react';
import { github } from "../assets";
import { chatWithAssistant } from '../lib/groq';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: "Hi! I'm Rudra's AI assistant. How can I help you today?"
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const suggestions = [
    "What makes Rudraksh stand out?",
    "Show me his AI projects",
    "Is he available for internships?",
    "What's his strongest tech stack?"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const getAIResponse = async (conversationHistory) => {
    try {
      if (!import.meta.env.VITE_GROQ_API_KEY) {
        console.error('Groq API key is not configured');
        return "I'm ready to help with Rudraksh's portfolio, but the assistant API key is not configured yet.";
      }

      const reply = await chatWithAssistant(
        conversationHistory.map((msg) => ({
          role: msg.type === 'user' ? 'user' : 'assistant',
          content: msg.content,
        }))
      );

      if (!reply) {
        throw new Error('Invalid response format');
      }

      return reply;
    } catch (error) {
      console.error('Error fetching AI response:', error);
      return "I can help with Rudraksh's background, projects, and strengths, but the assistant hit a temporary issue. Please try again in a moment.";
    }
  };

  const handleSendMessage = async (e, suggestedMessage = '') => {
    e?.preventDefault();
    const messageToSend = suggestedMessage || inputMessage;
    if (!messageToSend.trim()) return;

    setShowSuggestions(false);
    const newMessages = [...messages, { type: 'user', content: messageToSend }];
    setMessages(newMessages);
    setInputMessage('');
    setIsLoading(true);

    const botResponse = await getAIResponse(newMessages);

    setMessages([
      ...newMessages,
      {
        type: 'bot',
        content: botResponse,
      },
    ]);
    setIsLoading(false);
    setShowSuggestions(true);
  };

  return (
    <div className="fixed bottom-5 right-5 z-[9999]">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 rounded-full bg-conic-gradient p-[2px] hover:scale-110 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl"
        >
          <div className="w-full h-full rounded-full bg-n-8 flex items-center justify-center relative overflow-hidden group">
            <img 
              src={github} 
              alt="Chat" 
              className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-1/20 to-color-1/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </button>
      ) : (
        <div className="w-96 h-[600px] bg-n-8 border border-n-6 rounded-2xl overflow-hidden shadow-2xl animate-slideUp">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary-1/10 to-color-1/10 backdrop-blur-sm p-4 flex justify-between items-center border-b border-n-6">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 rounded-full bg-color-1 animate-pulse" />
              <h3 className="text-lg font-semibold text-n-1">AI Assistant</h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-n-3 hover:text-n-1 transition-colors duration-200 cursor-pointer w-8 h-8 rounded-lg hover:bg-n-6 flex items-center justify-center"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="h-[456px] overflow-y-auto p-4 space-y-4 bg-n-8 scroll-smooth">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} animate-slideIn`}
              >
                <div
                  className={`max-w-[80%] p-4 rounded-2xl ${
                    message.type === 'user'
                      ? 'bg-gradient-to-r from-primary-1 to-color-1 text-n-1'
                      : 'bg-n-6 text-n-1'
                  } shadow-lg`}
                >
                  {message.type === 'bot' && (
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-2 h-2 rounded-full bg-color-1" />
                      <span className="text-xs text-n-3">Rudra's Assistant</span>
                    </div>
                  )}
                  <div
                    className={`prose prose-invert max-w-none ${
                      message.type === 'user' ? 'text-n-1' : 'text-n-2'
                    }`}
                    dangerouslySetInnerHTML={
                      message.type === 'bot' 
                        ? { __html: message.content }
                        : { __html: message.content.replace(/</g, '&lt;').replace(/>/g, '&gt;') }
                    }
                  />
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start animate-slideIn">
                <div className="max-w-[80%] p-4 rounded-2xl bg-n-6 text-n-1 shadow-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-color-1" />
                    <span className="text-xs text-n-3">Rudra's Assistant</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-n-1 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-2 h-2 bg-n-1 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-2 h-2 bg-n-1 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}
            {showSuggestions && !isLoading && (
              <div className="flex flex-wrap gap-2 animate-fadeIn">
                {suggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={(e) => handleSendMessage(e, suggestion)}
                    className="px-4 py-2 rounded-full bg-n-6 text-n-2 text-sm hover:bg-n-5 transition-colors duration-200 hover:text-n-1"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSendMessage} className="p-4 border-t border-n-6 bg-gradient-to-r from-n-7 to-n-8">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 bg-n-6 text-n-1 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-1 transition-all duration-200 placeholder-n-3"
              />
              <button
                type="submit"
                disabled={isLoading || !inputMessage.trim()}
                className="bg-gradient-to-r from-primary-1 to-color-1 text-n-1 px-6 py-3 rounded-xl hover:opacity-90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl active:scale-95 flex items-center justify-center"
              >
                <span className={`${isLoading ? 'opacity-0' : 'opacity-100'}`}>Send</span>
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
