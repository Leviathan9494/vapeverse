import OrderListItem from "@/components/OrderListItem";
import ThemeToggle from "@/components/ThemeToggle";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

export default function History() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All" },
    { id: "30days", label: "Last 30 days" },
    { id: "3months", label: "Last 3 months" },
    { id: "year", label: "This year" },
  ];

  const mockOrders = [
    {
      id: "12345",
      date: "March 15, 2024",
      items: [
        { name: "Premium Vape Kit", quantity: 1 },
        { name: "Mint Flavor", quantity: 2 },
        { name: "USB-C Charger", quantity: 1 },
      ],
      total: 89.99,
      pointsEarned: 150,
    },
    {
      id: "12344",
      date: "March 8, 2024",
      items: [
        { name: "Flavor Pack Bundle", quantity: 1 },
        { name: "Cleaning Kit", quantity: 1 },
      ],
      total: 54.99,
      pointsEarned: 200,
    },
    {
      id: "12343",
      date: "February 28, 2024",
      items: [
        { name: "Replacement Coils", quantity: 3 },
      ],
      total: 29.99,
      pointsEarned: 50,
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="max-w-lg mx-auto px-4 h-14 flex items-center justify-between">
          <h1 className="text-lg font-bold">Purchase History</h1>
          <ThemeToggle />
        </div>
      </header>

      <div className="max-w-lg mx-auto px-4 pt-4">
        <div className="overflow-x-auto pb-4 -mx-4 px-4">
          <div className="flex gap-2 min-w-max">
            {filters.map((filter) => (
              <Badge
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "outline"}
                className="cursor-pointer whitespace-nowrap"
                onClick={() => setActiveFilter(filter.id)}
                data-testid={`filter-${filter.id}`}
              >
                {filter.label}
              </Badge>
            ))}
          </div>
        </div>

        <div className="space-y-4 mt-4">
          {mockOrders.map((order) => (
            <OrderListItem key={order.id} {...order} />
          ))}
        </div>
      </div>
    </div>
  );
}
