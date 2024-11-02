import React from "react";

const BottomSign = () => {
  return (
    <div className="text-center mx-5">
      <div className="my-9 border-b-[1px] border-[#DDDDDD]" />
      <p className="text-2xl font-bold pb-1">
        See personalized recommendations
      </p>
      <button className="amazonButton my-[5px] text-xs font-bold">
        Sign in
      </button>
      <p className="text-[11px]">
        New customer? <span className="text-[#007185]">Start here.</span>
      </p>
      <div className="mb-12 mt-5 border-b-[1px] border-[#DDDDDD]" />
    </div>
  );
};

export default BottomSign;
