import ChatInterface from "@/components/ChatInterface";
import ThemeToggle from "@/components/ThemeToggle";

export default function Support() {
  return (
    <div className="h-screen bg-background flex flex-col pb-16">
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="max-w-lg mx-auto px-4 h-14 flex items-center justify-between">
          <h1 className="text-lg font-bold">Customer Support</h1>
          <ThemeToggle />
        </div>
      </header>

      <div className="flex-1 overflow-hidden">
        <div className="max-w-lg mx-auto h-full">
          <ChatInterface />
        </div>
      </div>
    </div>
  );
}
