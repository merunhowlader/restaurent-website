import React from "react";
import { ImageLessSingleItem } from "../ImageLessSingleItem";

export const FreeRangeChicken = () => {
  return (
    <div className="grid grid-cols-1 w-full pt-5 content-center ">
      <div className="w-full p-6 flex justify-center   align-middle ">
        <h2 className="text-[#e63945]  text-[24px] lg:text-[32px]  uppercase font-bold font-primary aligin-center lg:font-medium mb-1">
          FREE RANGE CHICKEN
        </h2>
      </div>
      <div className="w-full  px-6 flex justify-start  sm:justify-center   align-middle ">
        <h3 className=" text-orange-300 text-[20px] lg:text-[24px]  uppercase font-bold font-primary aligin-center lg:font-medium mb-1">
          Flame Grilled BBQ or Portuguese
        </h3>
      </div>

      <div className="w-full p-6 ">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4 ">
          <div>
            <ImageLessSingleItem name="Whole" price="21.90" />
          </div>
          <div>
            <ImageLessSingleItem name="Half" price="11.90" />
          </div>
          <div>
            <ImageLessSingleItem name="Quarter" price="7.50" />
          </div>
        </div>
      </div>
    </div>
  );
};
