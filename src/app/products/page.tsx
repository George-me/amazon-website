"use client";
import ProductCard from "@/components/ProductCard";
import SideBar from "./SideBar";
import Heading from "./TopBar";
import Pagination from "./Pagination";
import BottomSign from "./BottomSign";
import { useQuery } from "@tanstack/react-query";
import { Items } from "@prisma/client";
import axios from "axios";
import ProductCardSkeleton from "@/components/ProductCardSkeleton";

const itemSkeleton = Array.from({ length: 50 }, (_, i) => i + 1);

export default function Products() {
  const {
    data: items,
    error,
    isLoading,
  } = useQuery<Items[]>({
    queryKey: ["items"],
    queryFn: () => axios.get("/api/items").then((res) => res.data),
  });

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
            {items
              ? items.map((item) => (
                  <ProductCard key={item.item_asin} item={item} />
                ))
              : itemSkeleton.map((item) => <ProductCardSkeleton key={item} />)}
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
