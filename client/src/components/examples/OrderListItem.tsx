import OrderListItem from "../OrderListItem";

export default function OrderListItemExample() {
  const mockOrder = {
    id: "12345",
    date: "March 15, 2024",
    items: [
      { name: "Premium Vape Kit", quantity: 1 },
      { name: "Mint Flavor", quantity: 2 },
      { name: "USB-C Charger", quantity: 1 },
    ],
    total: 89.99,
    pointsEarned: 150,
  };

  return <OrderListItem {...mockOrder} />;
}
