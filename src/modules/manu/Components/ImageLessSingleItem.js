import React from "react";

export const ImageLessSingleItem = ({ name, price }) => {
  return (
    <div className="border-t-2 border-indigo-500 border-dashed">
      <div className="flex flex-nowrap w-full">
        <h5 className="w-11/12">{name}</h5>
        <h5 className="w-1/12 justify-center">${price}</h5>
      </div>
    </div>
  );
};
