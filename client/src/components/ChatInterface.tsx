import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Send, Bot, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: string;
}

interface ChatInterfaceProps {
  initialMessages?: Message[];
}

export default function ChatInterface({ initialMessages = [] }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState("");

  const quickReplies = [
    "Check my points",
    "Recent purchases",
    "Store locations",
    "Contact support",
  ];

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages([...messages, newMessage]);
    setInputValue("");

    setTimeout(() => {
      const botReply: Message = {
        id: (Date.now() + 1).toString(),
        text: "Thanks for your message! Our support team will assist you shortly.",
        sender: "bot",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages(prev => [...prev, botReply]);
    }, 1000);
  };

  const handleQuickReply = (reply: string) => {
    setInputValue(reply);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 && (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Bot className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">How can we help you?</h3>
            <p className="text-sm text-muted-foreground">
              Ask us anything about your account, orders, or products
            </p>
          </div>
        )}

        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-3 ${message.sender === "user" ? "flex-row-reverse" : "flex-row"}`}
            data-testid={`message-${message.id}`}
          >
            <Avatar className="w-8 h-8 flex-shrink-0">
              <AvatarFallback className={message.sender === "bot" ? "bg-primary/10" : "bg-secondary"}>
                {message.sender === "bot" ? (
                  <Bot className="w-4 h-4 text-primary" />
                ) : (
                  <User className="w-4 h-4" />
                )}
              </AvatarFallback>
            </Avatar>

            <div className={`flex flex-col ${message.sender === "user" ? "items-end" : "items-start"} max-w-[75%]`}>
              <div
                className={`rounded-2xl px-4 py-3 ${
                  message.sender === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted"
                }`}
              >
                <p className="text-sm">{message.text}</p>
              </div>
              <span className="text-xs text-muted-foreground mt-1">{message.timestamp}</span>
            </div>
          </div>
        ))}

        {messages.length === 0 && (
          <div className="space-y-2">
            <p className="text-xs text-muted-foreground text-center mb-3">Quick replies:</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {quickReplies.map((reply) => (
                <Badge
                  key={reply}
                  variant="outline"
                  className="cursor-pointer hover-elevate active-elevate-2"
                  onClick={() => handleQuickReply(reply)}
                  data-testid={`quick-reply-${reply.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {reply}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="border-t border-border p-4 bg-card">
        <div className="flex gap-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Type your message..."
            className="flex-1"
            data-testid="input-message"
          />
          <Button 
            onClick={handleSend} 
            size="icon"
            data-testid="button-send"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
