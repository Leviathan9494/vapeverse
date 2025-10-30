import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";
import { Link } from "wouter";

interface Activity {
  id: string;
  productName: string;
  date: string;
  pointsEarned: number;
}

interface RecentActivityPreviewProps {
  activities: Activity[];
}

export default function RecentActivityPreview({ activities }: RecentActivityPreviewProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Recent Activity</h3>
        <Link href="/history">
          <button 
            className="text-sm text-primary font-medium flex items-center gap-1 hover-elevate active-elevate-2 px-2 py-1 rounded-md"
            data-testid="link-view-all"
          >
            View All
            <ChevronRight className="w-4 h-4" />
          </button>
        </Link>
      </div>

      <div className="space-y-3">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-center justify-between p-4 bg-card border border-card-border rounded-xl hover-elevate"
            data-testid={`activity-${activity.id}`}
          >
            <div className="flex-1 min-w-0">
              <p className="font-medium text-sm truncate">{activity.productName}</p>
              <p className="text-xs text-muted-foreground mt-1">{activity.date}</p>
            </div>
            <Badge variant="secondary" className="ml-4 font-bold">
              +{activity.pointsEarned} pts
            </Badge>
          </div>
        ))}
      </div>
    </div>
  );
}
