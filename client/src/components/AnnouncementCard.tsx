import { Card } from "@/components/ui/card";
import { Megaphone, Tag, Info } from "lucide-react";

interface AnnouncementCardProps {
  id: string;
  title: string;
  description: string;
  timestamp: string;
  type?: "announcement" | "promotion" | "info";
}

export default function AnnouncementCard({ id, title, description, timestamp, type = "info" }: AnnouncementCardProps) {
  const icons = {
    announcement: Megaphone,
    promotion: Tag,
    info: Info,
  };

  const Icon = icons[type];

  return (
    <Card 
      className="p-4 border-l-4 border-l-primary hover-elevate cursor-pointer"
      data-testid={`announcement-${id}`}
    >
      <div className="flex gap-3">
        <div className="flex-shrink-0">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <Icon className="w-5 h-5 text-primary" />
          </div>
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-base mb-1">{title}</h3>
          <p className="text-sm text-muted-foreground mb-2">{description}</p>
          <p className="text-xs text-muted-foreground">{timestamp}</p>
        </div>
      </div>
    </Card>
  );
}
