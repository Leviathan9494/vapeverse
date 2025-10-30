import RecentActivityPreview from "../RecentActivityPreview";

export default function RecentActivityPreviewExample() {
  const mockActivities = [
    { id: "1", productName: "Premium Vape Kit", date: "2 days ago", pointsEarned: 150 },
    { id: "2", productName: "Flavor Pack Bundle", date: "1 week ago", pointsEarned: 200 },
  ];

  return <RecentActivityPreview activities={mockActivities} />;
}
