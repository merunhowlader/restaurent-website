import React from "react";
import { ImageLessAllManu } from "./ImageLessAllManu";

export const SingleCategoryManu = () => {
  return (
    <div className="grid grid-cols-1 w-full ">
      <div className="w-full justify-center ">
        <h2>Main Category Name</h2>
      </div>
      <div className="w-full justify-center ">
        <h3>Sub Category Name</h3>
      </div>
      <div className="w-full p-6 ">
        <ImageLessAllManu />
      </div>
    </div>
  );
};
