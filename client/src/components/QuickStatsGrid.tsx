import { Card } from "@/components/ui/card";
import { ShoppingBag, TrendingUp, Award } from "lucide-react";

interface StatCardProps {
  icon: React.ElementType;
  value: string | number;
  label: string;
}

function StatCard({ icon: Icon, value, label }: StatCardProps) {
  return (
    <Card className="p-4 flex flex-col items-center gap-2">
      <Icon className="w-5 h-5 text-primary" />
      <p className="text-2xl font-bold" data-testid={`stat-${label.toLowerCase().replace(/\s+/g, '-')}`}>
        {value}
      </p>
      <p className="text-xs text-muted-foreground text-center font-medium">{label}</p>
    </Card>
  );
}

interface QuickStatsGridProps {
  totalPurchases: number;
  pointsThisMonth: number;
  tier: string;
}

export default function QuickStatsGrid({ totalPurchases, pointsThisMonth, tier }: QuickStatsGridProps) {
  return (
    <div className="grid grid-cols-3 gap-4" data-testid="grid-quick-stats">
      <StatCard icon={ShoppingBag} value={totalPurchases} label="Purchases" />
      <StatCard icon={TrendingUp} value={pointsThisMonth} label="This Month" />
      <StatCard icon={Award} value={tier} label="Tier" />
    </div>
  );
}
