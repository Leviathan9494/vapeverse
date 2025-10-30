import PointsBalanceCard from "@/components/PointsBalanceCard";
import QuickStatsGrid from "@/components/QuickStatsGrid";
import RecentActivityPreview from "@/components/RecentActivityPreview";
import ThemeToggle from "@/components/ThemeToggle";
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  const mockActivities = [
    { id: "1", productName: "Premium Vape Kit", date: "2 days ago", pointsEarned: 150 },
    { id: "2", productName: "Flavor Pack Bundle", date: "1 week ago", pointsEarned: 200 },
    { id: "3", productName: "Replacement Coils", date: "2 weeks ago", pointsEarned: 50 },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="max-w-lg mx-auto px-4 h-14 flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Welcome back,</p>
            <h1 className="text-lg font-bold">Alex</h1>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" data-testid="button-notifications">
              <Bell className="w-5 h-5" />
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="max-w-lg mx-auto px-4 pt-6 space-y-6">
        <PointsBalanceCard points={2450} userName="Alex" />
        <QuickStatsGrid totalPurchases={24} pointsThisMonth={350} tier="Gold" />
        <RecentActivityPreview activities={mockActivities} />
      </main>
    </div>
  );
}
