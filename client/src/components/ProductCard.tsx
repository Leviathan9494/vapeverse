import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  isNew?: boolean;
}

export default function ProductCard({ id, name, description, imageUrl, isNew = false }: ProductCardProps) {
  return (
    <Card 
      className="overflow-hidden cursor-pointer hover-elevate active-elevate-2"
      data-testid={`card-product-${id}`}
    >
      <div className="relative aspect-video bg-muted">
        <img 
          src={imageUrl} 
          alt={name}
          className="w-full h-full object-cover"
        />
        {isNew && (
          <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground font-bold">
            New
          </Badge>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-base mb-1 line-clamp-1">{name}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
      </div>
    </Card>
  );
}
