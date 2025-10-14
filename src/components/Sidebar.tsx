import { Button } from "./ui/button";
import { MessageSquare, Clock, Lightbulb, Settings, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  currentView: "conversation" | "history" | "topics" | "settings";
  onViewChange: (view: "conversation" | "history" | "topics" | "settings") => void;
}

const Sidebar = ({ currentView, onViewChange }: SidebarProps) => {
  const menuItems = [
    { id: "conversation" as const, icon: MessageSquare, label: "Conversation" },
    { id: "history" as const, icon: Clock, label: "History" },
    { id: "topics" as const, icon: Lightbulb, label: "Topics" },
    { id: "settings" as const, icon: Settings, label: "Settings" },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-80 glass-panel border-r border-white/10 p-6 z-20">
      {/* Logo/Brand */}
      <div className="mb-12 flex items-center gap-3">
        <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-primary via-accent to-secondary flex items-center justify-center">
          <Sparkles className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-gradient">AI Companion</h1>
          <p className="text-xs text-muted-foreground">Your intelligent partner</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentView === item.id;
          
          return (
            <Button
              key={item.id}
              variant="ghost"
              className={cn(
                "w-full justify-start gap-3 h-12 transition-all duration-300",
                isActive 
                  ? "bg-primary/20 text-primary hover:bg-primary/30" 
                  : "hover:bg-white/5 text-muted-foreground hover:text-foreground"
              )}
              onClick={() => onViewChange(item.id)}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </Button>
          );
        })}
      </nav>

      {/* Quick Stats */}
      <div className="absolute bottom-6 left-6 right-6 glass-panel p-4 rounded-2xl">
        <p className="text-xs text-muted-foreground mb-2">Today's conversation</p>
        <p className="text-2xl font-bold text-gradient">12 min</p>
        <p className="text-xs text-muted-foreground mt-1">3 sessions completed</p>
      </div>
    </aside>
  );
};

export default Sidebar;
