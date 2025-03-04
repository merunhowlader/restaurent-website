import React from "react";
import { ImageLessSingleItem } from "../ImageLessSingleItem";

export const ClassicPacks = () => {
  return (
    <div className="grid grid-cols-1 w-full pt-5 content-center ">
      <div className="w-full flex justify-center  align-middle ">
        <h2 className="text-[#e63945]  text-[24px] lg:text-[32px]  uppercase font-bold font-primary aligin-center lg:font-medium mb-1">
          CLASSIC PACKS
        </h2>
      </div>
      <div className="w-full flex justify-center  align-middle ">
        <h3 className=" text-[#6e6262] text-[20px] lg:text-[24px]  uppercase font-bold font-primary aligin-center lg:font-medium mb-1">
          Add A Drink For $1.50
        </h3>
      </div>

      <div className="w-full p-6 ">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4 ">
          <div>
            <ImageLessSingleItem name="1/4 Chicken & Chips" price="10.90" />
          </div>
          <div>
            <ImageLessSingleItem name="1/2 Chicken & Chips" price="14.90" />
          </div>
          <div>
            <ImageLessSingleItem name="1/4 Chicken & Salad" price="15.50" />
          </div>
          <div>
            <ImageLessSingleItem name="1/2 Chicken & Salad" price="18.50" />
          </div>
          <div>
            <ImageLessSingleItem name="Schnitzel & Chips" price="10.90" />
          </div>
        </div>
      </div>
    </div>
  );
};
