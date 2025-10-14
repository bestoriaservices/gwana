import { Button } from "./ui/button";
import { Mic, MicOff } from "lucide-react";
import { cn } from "@/lib/utils";

interface VoiceButtonProps {
  isListening: boolean;
  isSpeaking: boolean;
  onToggle: () => void;
}

const VoiceButton = ({ isListening, isSpeaking, onToggle }: VoiceButtonProps) => {
  return (
    <div className="flex flex-col items-center gap-4">
      {/* Voice waveform when active */}
      {(isListening || isSpeaking) && (
        <div className="flex items-center gap-1 h-12">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className={cn(
                "w-1 bg-gradient-to-t rounded-full transition-all duration-300",
                isListening ? "from-secondary to-primary" : "from-accent to-primary"
              )}
              style={{
                height: `${20 + Math.random() * 30}px`,
                animationDelay: `${i * 0.1}s`,
                animation: "pulse 1s ease-in-out infinite"
              }}
            />
          ))}
        </div>
      )}

      {/* Main voice button */}
      <Button
        size="lg"
        className={cn(
          "w-20 h-20 lg:w-24 lg:h-24 rounded-full glass-panel transition-all duration-300",
          "hover:scale-105 active:scale-95",
          isListening && "glow-cyan animate-pulse",
          isSpeaking && "glow-purple",
          !isListening && !isSpeaking && "hover:glow-blue"
        )}
        onClick={onToggle}
        disabled={isSpeaking}
      >
        {isListening ? (
          <MicOff className="w-8 h-8 lg:w-10 lg:h-10 text-secondary" />
        ) : (
          <Mic className="w-8 h-8 lg:w-10 lg:h-10 text-foreground" />
        )}
      </Button>

      {/* Status text */}
      <p className="text-sm text-muted-foreground">
        {isListening ? "Listening..." : isSpeaking ? "Speaking..." : "Tap to speak"}
      </p>
    </div>
  );
};

export default VoiceButton;
