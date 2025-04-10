import { useState, useEffect } from 'react';
import {
  Webchat,
  WebchatProvider,
  Fab,
  getClient,
} from '@botpress/webchat';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const clientId = "YOUR_BOTPRESS_CLIENT_ID"; // Replace with your actual client ID
  const botId = "YOUR_BOT_ID"; // Replace with your actual bot ID

  useEffect(() => {
    console.log('Initializing Botpress WebChat...');
    try {
      const client = getClient({ 
        clientId,
        botId,
        hostUrl: 'https://cdn.botpress.cloud/webchat/v1'
      });
      
      window.botpressClient = client; // For debugging
      setIsInitialized(true);
      console.log('Botpress WebChat initialized successfully');
    } catch (error) {
      console.error('Failed to initialize Botpress WebChat:', error);
    }
  }, []);

  const configuration = {
    botId,
    clientId,
    botName: 'Assistant',
    containerWidth: '100%',
    layoutWidth: '100%',
    showConversationsButton: false,
    enableTranscriptDownload: false,
    showCloseButton: true,
    disableAnimations: false,
    showPoweredBy: false,
    enablePersistHistory: false,
    stylesheet: 'https://cdn.botpress.cloud/webchat/v1/default.css',
    hostUrl: 'https://cdn.botpress.cloud/webchat/v1'
  };

  if (!isInitialized) {
    return (
      <div className="fixed bottom-8 right-8 z-50">
        <button className="bg-gray-500 text-white p-4 rounded-full shadow-lg">
          Loading Chat...
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <WebchatProvider client={window.botpressClient} configuration={configuration}>
        <Fab 
          onClick={() => setIsOpen(!isOpen)} 
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        >
          {isOpen ? 'Close Chat' : 'Open Chat'}
        </Fab>
        <div className={`absolute bottom-16 right-0 w-96 h-[500px] bg-white rounded-lg shadow-xl ${isOpen ? '' : 'hidden'}`}>
          <Webchat />
        </div>
      </WebchatProvider>
    </div>
  );
};

export default ChatBot;
