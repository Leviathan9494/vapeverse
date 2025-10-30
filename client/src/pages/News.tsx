import ProductCard from "@/components/ProductCard";
import AnnouncementCard from "@/components/AnnouncementCard";
import ThemeToggle from "@/components/ThemeToggle";
import product1 from "@assets/stock_images/vape_device_product__3de8d250.jpg";
import product2 from "@assets/stock_images/vape_device_product__6fa9c29f.jpg";
import product3 from "@assets/stock_images/modern_vaporizer_sle_c9d83f8a.jpg";
import product4 from "@assets/stock_images/modern_vaporizer_sle_b5dac9ee.jpg";

export default function News() {
  const mockProducts = [
    {
      id: "1",
      name: "Premium Vape Kit Pro",
      description: "Our most advanced device yet with extended battery life",
      imageUrl: product1,
      isNew: true,
    },
    {
      id: "2",
      name: "Starter Bundle",
      description: "Perfect for beginners - everything you need to get started",
      imageUrl: product2,
      isNew: true,
    },
    {
      id: "3",
      name: "Portable Mini Vape",
      description: "Compact design with powerful performance",
      imageUrl: product3,
      isNew: false,
    },
    {
      id: "4",
      name: "Luxury Edition",
      description: "Premium materials and sleek design",
      imageUrl: product4,
      isNew: true,
    },
  ];

  const mockAnnouncements = [
    {
      id: "1",
      title: "Double Points Weekend!",
      description: "Earn 2x points on all purchases this Saturday and Sunday",
      timestamp: "2 hours ago",
      type: "promotion" as const,
    },
    {
      id: "2",
      title: "New Store Opening",
      description: "Visit our newest location downtown and get a free gift",
      timestamp: "1 day ago",
      type: "announcement" as const,
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="max-w-lg mx-auto px-4 h-14 flex items-center justify-between">
          <h1 className="text-lg font-bold">News & Products</h1>
          <ThemeToggle />
        </div>
      </header>

      <main className="max-w-lg mx-auto px-4 pt-6 space-y-8">
        <section>
          <h2 className="text-xl font-bold mb-4">Announcements</h2>
          <div className="space-y-4">
            {mockAnnouncements.map((announcement) => (
              <AnnouncementCard key={announcement.id} {...announcement} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">New Products</h2>
          <div className="grid grid-cols-2 gap-4">
            {mockProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
