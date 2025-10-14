import { Button } from "./ui/button";
import { MessageSquare, Clock, Lightbulb, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  currentView: "conversation" | "history" | "topics" | "settings";
  onViewChange: (view: "conversation" | "history" | "topics" | "settings") => void;
  isSidebarOpen: boolean;
  onToggleSidebar: () => void;
}

const MobileNav = ({ currentView, onViewChange }: MobileNavProps) => {
  const menuItems = [
    { id: "conversation" as const, icon: MessageSquare, label: "Chat" },
    { id: "history" as const, icon: Clock, label: "History" },
    { id: "topics" as const, icon: Lightbulb, label: "Topics" },
    { id: "settings" as const, icon: Settings, label: "Settings" },
  ];

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 glass-panel border-t border-white/10 z-30">
      <div className="flex items-center justify-around h-20 px-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentView === item.id;
          
          return (
            <Button
              key={item.id}
              variant="ghost"
              className={cn(
                "flex flex-col items-center gap-1 h-16 px-4 transition-all duration-300",
                isActive 
                  ? "text-primary" 
                  : "text-muted-foreground hover:text-foreground"
              )}
              onClick={() => onViewChange(item.id)}
            >
              <Icon className={cn("w-6 h-6", isActive && "animate-pulse-slow")} />
              <span className="text-xs font-medium">{item.label}</span>
            </Button>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileNav;
