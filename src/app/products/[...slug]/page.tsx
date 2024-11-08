import CategoryNav from "./CategoryNav";
import PLeftColumn from "./PLeftColumn";
import PMColumn from "./PMColumn";
import PRightColumn from "./PRightColumn";

interface Props {
  params: {
    slug: string[];
  };
}

const page = ({ params: { slug } }: Props) => {
  return (
    <div>
      {/* Category navigation */}
      <CategoryNav />

      {/* Page body content */}
      <div className="flex px-[18px] mt-5 space-x-5">
        <PLeftColumn />
        <PMColumn />
        <PRightColumn />
      </div>
    </div>
  );
};

export default page;
