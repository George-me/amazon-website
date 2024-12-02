import StarRating from "@/components/StarRating";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import CommentReviews from "./CommentReviews";

const ratings = [
  {
    rating: 5,
    percentFill: 64,
  },
  {
    rating: 4,
    percentFill: 17,
  },
  {
    rating: 3,
    percentFill: 8,
  },
  {
    rating: 2,
    percentFill: 4,
  },
  {
    rating: 1,
    percentFill: 8,
  },
];

const Reviews = () => {
  return (
    <div className="flex">
      <div className="flex-shrink-0">
        <h2 className="text-[21px] font-bold">Customer Reviews</h2>
        <span className="flex items-center">
          <StarRating clickable={false} rating={4} />
          <span className="ml-2">4.2 out of 5</span>
        </span>
        <div className="my-2">415 global ratings</div>
        <div>
          {ratings.map(({ rating, percentFill }, index) => (
            <div
              key={index}
              className="flex text-sm items-center space-x-4 space-y-3 sideLink text-[#007185] hover:underline"
            >
              <span>{rating} star</span>
              <div className="w-48 h-5 rounded border-[1.5px] border-[#888c8c]">
                <div
                  style={{ width: `${percentFill}%` }}
                  className="h-full bg-[#DE7921]"
                />
              </div>
              <span>{percentFill}%</span>
            </div>
          ))}

          <div className="flex items-center space-x-1 my-3 text-sm">
            <ChevronDownIcon className="h-4 w-4" />
            <span className="text-[#007185] sideLink hover:underline">
              How are ratings calculated?
            </span>
          </div>

          {/* Horizontal Line */}
          <div className="my-4 border-b-[1px] border-[#BBBFBF]" />

          <div className="mb-4">
            <h2 className="text-lg font-bold">Review this product</h2>
            <span className="text-sm">
              Share your thoughts with other customers
            </span>
          </div>

          <button className="pl-2.5 mb-1 pr-[11px] w-full text-[13px] rounded-full text-center py-1 cursor-pointer bg-white border border-[#0f1111] hover:bg-[#F7FAFA] focus:outline-none focus:ring focus:ring-[#007185] focus:ring-offset-[1.5px] active:bg-[#edfdff]">
            Write a customer review
          </button>

          {/* Horizontal Line */}
          <div className="my-7 border-b-[1px] border-[#BBBFBF]" />
        </div>
      </div>
      <div className="flex-1 px-[105px] pr-56">
        <button className="flex items-center justify-between mb-2.5 pb-0.5 y-1 rounded-[7px] border border-[#D5D9D9] shadow-sm text-left text-[11px] pl-[7px] cursor-pointer bg-[#F0F2F2] hover:bg-[#E3E6E6] focus:outline-none focus:ring focus:ring-[#007185] focus:ring-offset-[1.5px] active:bg-[#F0F2F2]">
          Top reviews
          <ChevronDownIcon className="h-3 w-3 ml-6 mr-[3px] stroke-2" />
        </button>

        <div className="text-lg font-bold mt-6 mb-4">
          Top reviews from United Arab Emirates
        </div>

        <CommentReviews />
      </div>
    </div>
  );
};

export default Reviews;
