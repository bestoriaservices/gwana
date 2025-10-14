import { cn } from "@/lib/utils";

interface AIORBProps {
  isListening: boolean;
  isSpeaking: boolean;
}

const AIOrb = ({ isListening, isSpeaking }: AIORBProps) => {
  return (
    <div className="flex justify-center items-center">
      <div className="relative w-64 h-64 lg:w-80 lg:h-80">
        {/* Outer glow rings */}
        <div className={cn(
          "absolute inset-0 rounded-full transition-all duration-1000",
          isListening && "animate-pulse-slow glow-cyan",
          isSpeaking && "animate-glow glow-purple",
          !isListening && !isSpeaking && "glow-blue"
        )} />
        
        {/* Secondary ring */}
        <div className={cn(
          "absolute inset-4 rounded-full glass-panel transition-all duration-500",
          isListening && "scale-110",
          isSpeaking && "scale-105"
        )} />
        
        {/* Main orb */}
        <div className={cn(
          "absolute inset-8 rounded-full glass-panel transition-all duration-300",
          "flex items-center justify-center",
          isListening && "animate-pulse",
          isSpeaking && "animate-pulse-slow"
        )}>
          {/* Inner core with gradient */}
          <div className={cn(
            "w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-gradient-to-br transition-all duration-500",
            isListening && "from-secondary via-primary to-accent animate-spin-slow",
            isSpeaking && "from-accent via-primary to-secondary",
            !isListening && !isSpeaking && "from-primary via-accent to-secondary"
          )}>
            <div className="w-full h-full rounded-full bg-background/20 backdrop-blur-xl" />
          </div>
        </div>

        {/* Floating particles */}
        {(isListening || isSpeaking) && (
          <>
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-secondary rounded-full animate-float opacity-60 blur-sm" />
            <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-primary rounded-full animate-float opacity-60 blur-sm" style={{ animationDelay: "1s" }} />
            <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-accent rounded-full animate-float opacity-60 blur-sm" style={{ animationDelay: "2s" }} />
          </>
        )}
      </div>
    </div>
  );
};

export default AIOrb;
