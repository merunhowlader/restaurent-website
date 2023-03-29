import React from "react";
import { ImageLessAllManu } from "./Components/ImageLessAllManu";
import { SingleCategoryManu } from "./Components/SingleCategoryManu";

export const Manu = () => {
  return (
    <div className="h-full bg-pattern bg-repeat  mx-auto overflow-hidden">
      <SingleCategoryManu />
      <div className="h-[380px] md:h-[370px]"></div>
    </div>
  );
};
