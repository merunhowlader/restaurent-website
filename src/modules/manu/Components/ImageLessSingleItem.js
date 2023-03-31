import React from "react";

export const ImageLessSingleItem = ({ name, price }) => {
  return (
    <div className="border-t-2 border-gray-300 -500 border-dashed p-1 ">
      <div className="flex flex-nowrap w-full text-black">
        <h5 className="w-11/12 font-bold">{name}</h5>
        <h5 className="w-1/12 font-bold ">
          ${""}
          {price}
        </h5>
      </div>
    </div>
  );
};
