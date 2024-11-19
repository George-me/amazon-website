import StarRating from "@/components/StarRating";
import Image from "next/image";
import { comments } from "./CommentReviewData";

const CommentReviews = () => {
  return (
    <div>
      {comments.map(
        ({ name, title, comment, postedOn, rating, color }, index) => (
          <div key={index} className="mb-[22px]">
            {/* Name & Profile Pic */}
            <div className="inline-flex items-center cursor-pointer">
              <Image
                src="https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX460_.png"
                alt="profile pic"
                height={30}
                width={30}
                className="h-[30px] w-[30px] rounded-full"
              />

              <span className="text-[13px]  pl-[9px]">{name}</span>
            </div>

            {/* Rating & review title */}
            <div className="flex space-x-2 items-center">
              <StarRating clickable={false} rating={rating} />
              <span className="text-sm font-bold">{title}</span>
            </div>
            <span className="text-sm">
              Reviewed in the United Arab Emirates on {postedOn}
            </span>
            <div className="text-sm space-y-1">
              Color: {color} <span className="text-[#DDDDDD]">|</span>{" "}
              <span className="text-xs font-bold text-[#c45500]">
                Verified Purchase
              </span>
              <p className="pb-2">{comment}</p>
              <button className="px-6 py-1 mb-1 text-[13px] rounded-full text-center cursor-pointer bg-white border border-[#0f1111] hover:bg-[#F7FAFA] focus:outline-none focus:ring focus:ring-[#007185] focus:ring-offset-[1.5px] active:bg-[#edfdff]">
                Helpful
              </button>
              <span className="text-[#DDDDDD] mx-2.5">|</span>
              <span className="text-sm">Report</span>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default CommentReviews;
