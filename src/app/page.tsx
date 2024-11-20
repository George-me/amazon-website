import Banner from "@/components/Banner";
import HomeFeed from "./homepage/HomeFeed";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <main className="max-w-screen-2xl mx-auto">
        <Banner />
        <HomeFeed />
      </main>
    </div>
  );
}
