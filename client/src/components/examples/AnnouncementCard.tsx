import AnnouncementCard from "../AnnouncementCard";

export default function AnnouncementCardExample() {
  return (
    <AnnouncementCard
      id="1"
      title="Double Points Weekend!"
      description="Earn 2x points on all purchases this Saturday and Sunday"
      timestamp="2 hours ago"
      type="promotion"
    />
  );
}
