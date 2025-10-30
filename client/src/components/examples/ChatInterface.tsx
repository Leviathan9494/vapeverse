import ChatInterface from "../ChatInterface";

export default function ChatInterfaceExample() {
  const mockMessages = [
    {
      id: "1",
      text: "Hi! I need help with my recent order",
      sender: "user" as const,
      timestamp: "10:30 AM",
    },
    {
      id: "2",
      text: "Hello! I'd be happy to help you with your order. Can you provide your order number?",
      sender: "bot" as const,
      timestamp: "10:31 AM",
    },
  ];

  return <ChatInterface initialMessages={mockMessages} />;
}
