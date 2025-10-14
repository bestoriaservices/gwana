import { useState } from "react";
import AIOrb from "./AIOrb";
import VoiceButton from "./VoiceButton";
import ChatMessage from "./ChatMessage";
import { Button } from "./ui/button";
import { Plus, Settings } from "lucide-react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const ConversationScreen = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Hello, I'm here to support you. How are you feeling today?",
      timestamp: new Date(),
    },
  ]);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const handleVoiceToggle = () => {
    setIsListening(!isListening);
    // Simulate AI response
    if (!isListening) {
      setTimeout(() => {
        setIsListening(false);
        setIsSpeaking(true);
        setMessages(prev => [...prev, {
          id: Date.now().toString(),
          role: "user",
          content: "I've been thinking about my career goals lately...",
          timestamp: new Date(),
        }]);
        
        setTimeout(() => {
          setMessages(prev => [...prev, {
            id: (Date.now() + 1).toString(),
            role: "assistant",
            content: "That's wonderful that you're reflecting on your career path. Self-awareness is the first step toward meaningful growth. What specific aspects of your career are you considering?",
            timestamp: new Date(),
          }]);
          setIsSpeaking(false);
        }, 2000);
      }, 3000);
    }
  };

  return (
    <div className="flex flex-col h-screen max-w-4xl mx-auto px-4 py-6 lg:py-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 lg:mb-8">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-secondary animate-pulse" />
          <span className="text-sm text-muted-foreground">Connected</span>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="glass-panel hover:bg-white/10"
            onClick={() => setMessages([{
              id: Date.now().toString(),
              role: "assistant",
              content: "Hello, I'm here to support you. How are you feeling today?",
              timestamp: new Date(),
            }])}
          >
            <Plus className="w-5 h-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="glass-panel hover:bg-white/10"
          >
            <Settings className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* AI Companion */}
      <div className="flex-shrink-0 mb-8">
        <AIOrb isListening={isListening} isSpeaking={isSpeaking} />
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto space-y-4 mb-6 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
        {isListening && (
          <div className="flex items-center gap-2 text-muted-foreground">
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-secondary rounded-full animate-bounce" style={{ animationDelay: "0s" }} />
              <div className="w-2 h-2 bg-secondary rounded-full animate-bounce" style={{ animationDelay: "0.1s" }} />
              <div className="w-2 h-2 bg-secondary rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
            </div>
            <span className="text-sm">Listening...</span>
          </div>
        )}
      </div>

      {/* Voice Button */}
      <div className="flex-shrink-0">
        <VoiceButton 
          isListening={isListening} 
          isSpeaking={isSpeaking}
          onToggle={handleVoiceToggle}
        />
      </div>
    </div>
  );
};

export default ConversationScreen;
