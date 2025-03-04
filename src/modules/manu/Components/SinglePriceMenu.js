import React from "react";
import { ImageLessSingleItem } from "./ImageLessSingleItem";

export const SinglePriceMenu = () => {
  return (
    <div className="grid grid-cols-1 w-full pt-5 content-center ">
      <div className="w-full flex justify-center  align-middle ">
        <h2 className="text-red-700 text-[24px] lg:text-[32px]  uppercase font-bold font-primary aligin-center lg:font-medium mb-1">
          Main Category Name
        </h2>
      </div>
      <div className="w-full flex justify-center  align-middle ">
        <h3 className=" text-orange-300 text-[20px] lg:text-[24px]  uppercase font-bold font-primary aligin-center lg:font-medium mb-1">
          Sub Category Name
        </h3>
      </div>
      <div className="  flex justify-center  align-middle px-2 md:px-60 w-full ">
        <h4 className=" text-gray-900 text-[12px] lg:text-[16px]  uppercase font-bold font-primary aligin-middle lg:font-medium mb-1">
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </h4>
      </div>
      <div className="w-full p-6 ">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          <div>
            <ImageLessSingleItem name="merun kanti howlader" price="3.5" />
          </div>
          <div>
            <ImageLessSingleItem name="merun kanti howlader" price="3.5" />
          </div>{" "}
          <div>
            <ImageLessSingleItem name="merun kanti howlader" price="3.5" />
          </div>{" "}
          <div>
            <ImageLessSingleItem name="merun kanti howlader" price="3.5" />
          </div>{" "}
          <div>
            <ImageLessSingleItem name="merun kanti howlader" price="3.5" />
          </div>{" "}
          <div>
            <ImageLessSingleItem name="merun kanti howlader" price="3.5" />
          </div>{" "}
          <div>
            <ImageLessSingleItem name="merun kanti howlader" price="3.5" />
          </div>{" "}
          <div>
            <ImageLessSingleItem name="merun kanti howlader" price="3.5" />
          </div>
          <div>
            <ImageLessSingleItem name=" joy prokash datta" price="3.3" />
          </div>
        </div>
      </div>
    </div>
  );
};
