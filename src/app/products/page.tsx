import ProductCard from "@/components/ProductCard";
import SideBar from "./SideBar";
import Heading from "./TopBar";

export interface Products {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export default async function Products() {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );
  return (
    <div>
      <Heading />

      <div className="flex">
        {/* Left Column SideBar */}
        <div className="flex-none w-72 p-3">
          <SideBar />
        </div>

        {/* Right Columns with Products */}
        <div className="flex-1">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product: Products) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
