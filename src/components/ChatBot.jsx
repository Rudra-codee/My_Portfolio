import { useState, useEffect, useRef } from 'react';
import { github } from "../assets";

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
    "Tell me about Rudraksh's skills",
    "What projects has he worked on?",
    "How can I contact him?",
    "What's his educational background?"
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

  const getAIResponse = async (message) => {
    try {
      if (!import.meta.env.VITE_OPENAI_API_KEY) {
        console.error('OpenAI API key is not configured');
        return "I apologize, but I'm not properly configured yet. Please make sure the API key is set correctly.";
      }

      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content: "You are a helpful AI assistant for Rudraksh's portfolio website. Keep responses concise and friendly. If you don't know something specific about Rudraksh, provide a general helpful response."
            },
            {
              role: "user",
              content: message
            }
          ],
          max_tokens: 150,
          temperature: 0.7
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('API Error:', errorData);
        throw new Error(errorData.error?.message || 'API request failed');
      }

      const data = await response.json();
      if (!data.choices?.[0]?.message?.content) {
        throw new Error('Invalid response format');
      }

      return data.choices[0].message.content;
    } catch (error) {
      console.error('Error fetching AI response:', error);
      if (error.message.includes('API key')) {
        return "I apologize, but there seems to be an issue with my API configuration. Please contact the administrator.";
      }
      if (error.message.includes('rate limit')) {
        return "I'm receiving too many requests right now. Please try again in a moment.";
      }
      return "I apologize, but I'm having trouble processing your request. You can ask me specific questions about Rudraksh's education, skills, or projects instead.";
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

    const botResponse = await getBotResponse(messageToSend, newMessages);
    
    setMessages([...newMessages, {
      type: 'bot',
      content: botResponse
    }]);
    setIsLoading(false);
    setShowSuggestions(true);
  };

  const getBotResponse = async (message, currentMessages) => {
    const lowerMessage = message.toLowerCase();

    // Check for specific patterns first
    if (lowerMessage.includes('who') && lowerMessage.includes('rudra')) {
      return "I'm an AI assistant for Rudraksh Pathak, a Computer Science & AI student specializing in modern web technologies. He's passionate about building intuitive, performant user experiences.";
    }

    if (lowerMessage.includes('education') || lowerMessage.includes('study') || lowerMessage.includes('college')) {
      return "Rudraksh is currently pursuing a BTech in Computer Science & Artificial Intelligence at Newton School of Technology. It's a modern tech institute focused on hands-on learning and industry skills.";
    }

    if (lowerMessage.includes('skills') || lowerMessage.includes('tech')) {
      return "Rudraksh is proficient in React, TypeScript, Node.js, and various modern web technologies. You can see his tech stack rotating in the skills wheel above!";
    }

    if (lowerMessage.includes('contact') || lowerMessage.includes('reach')) {
      return "You can contact Rudraksh through LinkedIn or GitHub. Would you like me to share any of these links?";
    }

    if (lowerMessage.includes('yes') && (currentMessages[currentMessages.length - 2]?.content.includes('Would you like me to share'))) {
      return "Which platform would you prefer? GitHub or LinkedIn?";
    }

    if (lowerMessage.includes('github') && (currentMessages[currentMessages.length - 2]?.content.includes('Which platform'))) {
      return 'Here\'s Rudraksh\'s GitHub profile: <a href="https://github.com/Rudra-codee" target="_blank" class="text-color-1 hover:underline">github.com/Rudra-codee</a>';
    }

    if (lowerMessage.includes('linkedin') && (currentMessages[currentMessages.length - 2]?.content.includes('Which platform'))) {
      return 'Here\'s Rudraksh\'s LinkedIn profile: <a href="https://www.linkedin.com/in/rudraksh-rathod-5a891431a" target="_blank" class="text-color-1 hover:underline">linkedin.com/in/rudraksh-rathod</a>';
    }

    if (lowerMessage.includes('project') || lowerMessage.includes('work')) {
      return "Rudraksh has worked on various projects including AI chatbots, full-stack web applications, and more. Check out his projects section to explore his recent work!";
    }

    // If no specific pattern matches, use the AI API
    return await getAIResponse(message);
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
                <div className="max-w-[80%] p-4 rounded-2xl bg-n-6 text-n-1">
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
