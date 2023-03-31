import React from "react";

export const DoublePriceSingleItem = ({
  name,
  description,
  singlePrice,
  mealPrice,
}) => {
  return (
    <div className="border-t-2 border-gray-300  border-dashed p-1 ">
      <div className="flex flex-nowrap space-x-2 w-full text-black">
        <div className="w-8/12">
          <h5 className="font-bold">{name}</h5>
          <h6 className=" ">{description}</h6>
        </div>
        <div className="w-2/12">
          <h5 className="font-bold ">
            ${""}
            {singlePrice}
          </h5>
        </div>
        <div className="w-2/12">
          <h5 className="w-2/12 font-bold ">
            ${""}
            {mealPrice}
          </h5>
        </div>
      </div>
    </div>
  );
};
