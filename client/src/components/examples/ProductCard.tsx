import ProductCard from "../ProductCard";
import productImg from "@assets/stock_images/vape_device_product__3de8d250.jpg";

export default function ProductCardExample() {
  return (
    <ProductCard
      id="1"
      name="Premium Vape Kit"
      description="Experience premium quality with our latest design"
      imageUrl={productImg}
      isNew={true}
    />
  );
}
