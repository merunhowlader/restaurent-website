import React from "react";
import { ImageLessSingleItem } from "../ImageLessSingleItem";
export const Desserts = () => {
  return (
    <div className="grid grid-cols-1 w-full pt-5 content-center ">
      <div className="w-full flex justify-center  align-middle ">
        <h2 className="text-[#e63945]  text-[24px] lg:text-[32px]  uppercase font-bold font-primary aligin-center lg:font-medium mb-1">
          desserts
        </h2>
      </div>
      {/* <div className="w-full flex justify-center  align-middle ">
        <h3 className=" text-orange-300 text-[20px] lg:text-[24px]  uppercase font-bold font-primary aligin-center lg:font-medium mb-1">
          Add A Drink For $1.50
        </h3>
      </div> */}

      <div className="w-full p-6 ">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4 ">
          <div>
            <ImageLessSingleItem name="Chocolate mousse" price="7.90" />
          </div>
          <div>
            <ImageLessSingleItem name="Banoffee pies" price="7.90" />
          </div>
          <div>
            <ImageLessSingleItem name="Rice pudding" price="5.90" />
          </div>
          <div>
            <ImageLessSingleItem name="Tiramisu" price="7.90" />
          </div>
          <div>
            <ImageLessSingleItem name="Baked apple crumble" price="7.90" />
          </div>
        </div>
      </div>
    </div>
  );
};
