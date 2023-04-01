import React from "react";

export const WithoutPriceSingleItem = ({ name, description }) => {
  return (
    <div className="border-t-2 border-gray-300  border-dashed  ">
      <div className="flex flex-nowrap space-x-2 w-full text-black">
        <div className="w-11/12">
          <h5 className="font-bold text-[14px] sm:text-[18px] ">{name}</h5>
          {description && <h6 className=" text-[12px]">{description}</h6>}
        </div>
      </div>
    </div>
  );
};
