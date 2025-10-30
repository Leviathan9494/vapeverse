import { Home, Clock, Newspaper, MessageCircle } from "lucide-react";
import { useLocation, Link } from "wouter";

export default function BottomNavigation() {
  const [location] = useLocation();

  const navItems = [
    { path: "/", icon: Home, label: "Dashboard" },
    { path: "/history", icon: Clock, label: "History" },
    { path: "/news", icon: Newspaper, label: "News" },
    { path: "/support", icon: MessageCircle, label: "Support" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-card-border backdrop-blur-md bg-card/95">
      <div className="max-w-lg mx-auto px-4 h-16 flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location === item.path;
          
          return (
            <Link key={item.path} href={item.path}>
              <button
                data-testid={`nav-${item.label.toLowerCase()}`}
                className={`flex flex-col items-center justify-center gap-1 min-w-[64px] py-2 px-3 rounded-lg transition-colors ${
                  isActive ? "text-primary" : "text-muted-foreground"
                } hover-elevate active-elevate-2`}
              >
                <Icon className={`w-5 h-5 ${isActive ? "fill-current" : ""}`} />
                <span className={`text-xs ${isActive ? "font-semibold" : "font-medium"}`}>
                  {item.label}
                </span>
              </button>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
