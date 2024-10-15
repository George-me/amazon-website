import Banner from "@/components/Banner";
import Header from "@/components/Header";
import ProductFeed from "@/components/ProductFeed";

export default function Home() {
  return (
    <div>
      <Header />

      <main className="max-w-screen-2xl mx-auto">
        <Banner />
        <ProductFeed />
      </main>
    </div>
  );
}
