import { cn } from "@/lib/utils";
import { format } from "date-fns";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

interface ChatMessageProps {
  message: Message;
}

const ChatMessage = ({ message }: ChatMessageProps) => {
  const isUser = message.role === "user";

  return (
    <div
      className={cn(
        "flex w-full animate-in fade-in slide-in-from-bottom-2 duration-500",
        isUser ? "justify-end" : "justify-start"
      )}
    >
      <div
        className={cn(
          "max-w-[85%] lg:max-w-[70%] glass-panel p-4 rounded-3xl",
          isUser ? "rounded-tr-md bg-primary/10" : "rounded-tl-md bg-secondary/10"
        )}
      >
        <p className="text-foreground leading-relaxed">{message.content}</p>
        <p className="text-xs text-muted-foreground mt-2">
          {format(message.timestamp, "h:mm a")}
        </p>
      </div>
    </div>
  );
};

export default ChatMessage;
