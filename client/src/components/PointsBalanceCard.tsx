import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import pointsBackgroundImg from "@assets/generated_images/Points_card_gradient_background_220af6e8.png";

interface PointsBalanceCardProps {
  points: number;
  userName: string;
}

export default function PointsBalanceCard({ points, userName }: PointsBalanceCardProps) {
  return (
    <Card 
      className="relative min-h-[280px] overflow-hidden border-0"
      data-testid="card-points-balance"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${pointsBackgroundImg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-primary/70" />
      
      <div className="relative p-6 flex flex-col justify-between h-full min-h-[280px]">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-primary-foreground/90 text-sm font-medium">Welcome back,</p>
            <h2 className="text-primary-foreground text-xl font-bold mt-1" data-testid="text-username">
              {userName}
            </h2>
          </div>
          <Sparkles className="w-6 h-6 text-primary-foreground/80" />
        </div>

        <div className="text-center my-6">
          <p className="text-primary-foreground/90 text-sm font-medium mb-2">Your Points</p>
          <p className="text-primary-foreground text-6xl font-bold tracking-tight" data-testid="text-points">
            {points.toLocaleString()}
          </p>
        </div>

        <Button 
          className="w-full bg-primary-foreground/20 hover:bg-primary-foreground/30 text-primary-foreground border border-primary-foreground/30 backdrop-blur-sm"
          size="lg"
          data-testid="button-redeem"
        >
          Redeem Rewards
        </Button>
      </div>
    </Card>
  );
}
