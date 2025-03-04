import React from "react";

export const DoublePriceSingleItem = ({
  name,
  description,
  singlePrice,
  mealPrice,
}) => {
  return (
    <div className="border-t-2 border-gray-300  border-dashed p-1 ">
      <div className="flex flex-nowrap space-x-4 w-full text-black">
        <div className="w-8/12">
          <h5 className="font-bold text-[14px] sm:text-[18px]">{name}</h5>
          <h6 className=" text-[12px] ">{description}</h6>
        </div>
        <div className="w-2/12">
          <h5 className="font-bold text-[14px] sm:text-[18px] ">
            ${""}
            {singlePrice}
          </h5>
        </div>
        <div className="w-2/12 ">
          <h5 className="w-2/12 font-bold text-[14px] sm:text-[18px] ">
            ${""}
            {mealPrice}
          </h5>
        </div>
      </div>
    </div>
  );
};
