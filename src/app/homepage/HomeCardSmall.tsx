import Image from "next/image";
import Link from "next/link";

// Define the interface for the item
interface HomeCardItem {
  img: string;
  title: string;
}

// Define the props interface for HomeCardSmall
interface Props {
  cardTitle: string;
  items: HomeCardItem[];
  bottomButton: string;
}

const HomeCardSmall = ({ cardTitle, items, bottomButton }: Props) => {
  return (
    <div className="flex flex-col justify-between bg-white my-2 mx-2.5 pt-5 pb-[15px] px-5 z-30">
      <div>
        <h2 className="text-xl font-bold mb-2.5">{cardTitle}</h2>
        <div className="flex flex-wrap items-baseline justify-between">
          {items.map(({ img, title }) => (
            <Link href="/products">
              <div className="flex flex-col pb-[26px] w-[126px] cursor-pointer">
                <Image
                  src={img}
                  alt="product image"
                  height={102}
                  width={126}
                  className="object-contain h-auto max-h-28 w-[126px]"
                />
                <span className="text-xs text-wrap line-clamp-1">{title}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <span className="text-[13px] sideLink text-[#007185]">
        {bottomButton}
      </span>
    </div>
  );
};

export default HomeCardSmall;
