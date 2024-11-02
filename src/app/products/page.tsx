import ProductCard from "@/components/ProductCard";
import SideBar from "./SideBar";
import Heading from "./TopBar";
import Pagination from "./Pagination";
import BottomSign from "./BottomSign";

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
          <div className="ml-1 mb-1">
            <p className="text-xl font-bold mt-3">Results</p>
            <p className="text-sm">
              Check each product page for other buying options.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product: Products) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="flex justify-center mt-2.5">
            <Pagination />
          </div>
        </div>
      </div>

      <BottomSign />
    </div>
  );
}
