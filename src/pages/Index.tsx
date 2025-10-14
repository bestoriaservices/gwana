import { useState } from "react";
import ConversationScreen from "@/components/ConversationScreen";
import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";

const Index = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentView, setCurrentView] = useState<"conversation" | "history" | "topics" | "settings">("conversation");

  return (
    <div className="min-h-screen w-full bg-background relative overflow-hidden">
      {/* Cosmic background gradient */}
      <div className="fixed inset-0 bg-cosmic opacity-90" />
      
      {/* Animated background orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-glow animate-float opacity-30 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-glow animate-float opacity-30 blur-3xl" style={{ animationDelay: "2s" }} />
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <Sidebar currentView={currentView} onViewChange={setCurrentView} />
      </div>

      {/* Main Content */}
      <main className="relative z-10 lg:ml-80 min-h-screen">
        {currentView === "conversation" && <ConversationScreen />}
        {currentView === "history" && (
          <div className="flex items-center justify-center min-h-screen p-8">
            <div className="glass-panel p-8 rounded-3xl max-w-md text-center">
              <h2 className="text-2xl font-bold mb-4 text-gradient">Conversation History</h2>
              <p className="text-muted-foreground">Your past conversations will appear here</p>
            </div>
          </div>
        )}
        {currentView === "topics" && (
          <div className="flex items-center justify-center min-h-screen p-8">
            <div className="glass-panel p-8 rounded-3xl max-w-md text-center">
              <h2 className="text-2xl font-bold mb-4 text-gradient">Topics & Moods</h2>
              <p className="text-muted-foreground">Explore conversation topics and guided sessions</p>
            </div>
          </div>
        )}
        {currentView === "settings" && (
          <div className="flex items-center justify-center min-h-screen p-8">
            <div className="glass-panel p-8 rounded-3xl max-w-md text-center">
              <h2 className="text-2xl font-bold mb-4 text-gradient">Settings</h2>
              <p className="text-muted-foreground">Customize your AI companion experience</p>
            </div>
          </div>
        )}
      </main>

      {/* Mobile Navigation */}
      <MobileNav 
        currentView={currentView} 
        onViewChange={setCurrentView}
        isSidebarOpen={isSidebarOpen}
        onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />
    </div>
  );
};

export default Index;
