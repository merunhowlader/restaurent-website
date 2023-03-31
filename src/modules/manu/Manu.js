import React from "react";
import { DoublePriceMenu } from "./Components/DoublePriceMenu";
import { SingleCategoryMenu } from "./Components/SingleCategoryMenu";

export const Manu = () => {
  return (
    <div className="h-full bg-pattern bg-repeat  mx-auto overflow-hidden grid grid-rows-1 justify-center items-center  ">
      <div className="bg-red-700 "></div>
      <div className="md:px-20  justify-center items-center">
        <SingleCategoryMenu />
      </div>

      <div className="md:px-20  justify-center items-center ">
        <DoublePriceMenu />
      </div>
    </div>
  );
};
