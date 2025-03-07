import ProductCard from "@/components/ui/productCard";
import arc from "../../../public/img/navproducts/arcProduct.png";
import desk from "../../../public/img/navproducts/deskProduct.png";

type Product = {
  imageUrl: string;
  title: string;
  description: string;
  price: number;
  discount: number;
};

const products: Product[] = [
  {
    imageUrl: arc.src,
    title: "Premium Arc Light",
    description: "Modern lighting solution for your workspace.",
    price: 129.99,
    discount: 20,
  },
  {
    imageUrl: desk.src,
    title: "Standing Desk Pro",
    description: "Ergonomic adjustable standing desk.",
    price: 499.99,
    discount: 0,
  },
  {
    imageUrl: arc.src,
    title: "Arc Light Plus",
    description: "Enhanced lighting with smart features.",
    price: 159.99,
    discount: 15,
  },
  {
    imageUrl: desk.src,
    title: "Compact Desk",
    description: "Space-saving desk for small offices.",
    price: 299.99,
    discount: 10,
  },
  {
    imageUrl: arc.src,
    title: "Designer Arc Lamp",
    description: "Artistic lighting piece for modern homes.",
    price: 189.99,
    discount: 0,
  },
  {
    imageUrl: desk.src,
    title: "Executive Desk",
    description: "Premium desk with built-in storage.",
    price: 699.99,
    discount: 25,
  },
  {
    imageUrl: arc.src,
    title: "Mini Arc Light",
    description: "Compact lighting for small spaces.",
    price: 79.99,
    discount: 5,
  },
  {
    imageUrl: desk.src,
    title: "Student Desk",
    description: "Affordable desk for study spaces.",
    price: 199.99,
    discount: 30,
  },
];

const ProductGrid = () => {
  const scrollContainer = (direction: "left" | "right") => {
    const container = document.querySelector(".scroll-container");
    if (container) {
      const scrollAmount = direction === "left" ? -400 : 400;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="mt-6">
      <div className="flex items-center justify-between mb-3 px-6">
        <h1 className="text-3xl font-bold">Featured Items</h1>
        <div className="flex gap-2">
          <button
            onClick={() => scrollContainer("left")}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors text-xl font-medium"
          >
            ←
          </button>
          <button
            onClick={() => scrollContainer("right")}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors text-xl font-medium"
          >
            →
          </button>
        </div>
      </div>
      <div className="relative">
        <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide snap-x snap-mandatory scroll-container">
          {products.map((product, index) => (
            <div
              key={index}
              className={`snap-start shrink-0 ${index === 0 ? "pl-6" : ""}`}
            >
              <ProductCard
                imageUrl={product.imageUrl}
                title={product.title}
                description={product.description}
                price={product.price}
                discount={product.discount}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
