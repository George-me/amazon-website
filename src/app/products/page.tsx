import SideBar from "./SideBar";
import Heading from "./TopBar";

export default function Products() {
  return (
    <div>
      <Heading />

      <div className="flex">
        {/* Left Column SideBar */}
        <div className="flex-none w-72 p-3">
          <SideBar />
        </div>

        {/* Right Columns with Products */}
        <div className="flex-1 bg-sky-400">Right Column</div>
      </div>
    </div>
  );
}
