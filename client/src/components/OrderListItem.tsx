import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface OrderItem {
  name: string;
  quantity: number;
}

interface OrderListItemProps {
  id: string;
  date: string;
  items: OrderItem[];
  total: number;
  pointsEarned: number;
}

export default function OrderListItem({ id, date, items, total, pointsEarned }: OrderListItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="p-4" data-testid={`order-${id}`}>
      <div className="flex items-start justify-between mb-3">
        <div>
          <p className="text-sm text-muted-foreground">{date}</p>
          <p className="text-xs text-muted-foreground mt-1">Order #{id}</p>
        </div>
        <Badge className="font-bold">
          +{pointsEarned} pts
        </Badge>
      </div>

      <div className="space-y-2">
        {items.slice(0, isExpanded ? items.length : 2).map((item, idx) => (
          <div key={idx} className="flex justify-between text-sm">
            <span className="text-foreground">
              {item.quantity}x {item.name}
            </span>
          </div>
        ))}
      </div>

      {items.length > 2 && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-1 text-xs text-primary font-medium mt-3 hover-elevate active-elevate-2 px-2 py-1 rounded-md"
          data-testid={`button-expand-${id}`}
        >
          {isExpanded ? (
            <>
              Show Less <ChevronUp className="w-3 h-3" />
            </>
          ) : (
            <>
              Show {items.length - 2} More <ChevronDown className="w-3 h-3" />
            </>
          )}
        </button>
      )}

      <div className="border-t border-border mt-3 pt-3">
        <div className="flex justify-between items-center">
          <span className="font-semibold">Total</span>
          <span className="font-bold text-lg">${total.toFixed(2)}</span>
        </div>
      </div>
    </Card>
  );
}
