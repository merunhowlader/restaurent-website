import React from "react";
import { ImageLessSingleItem } from "../ImageLessSingleItem";

export const FishPacks = () => {
  return (
    <div className="grid grid-cols-1 w-full pt-5 content-center ">
      <div className="w-full flex justify-center  align-middle ">
        <h2 className="text-[#e63945]  text-[24px] lg:text-[32px]  uppercase font-bold font-primary aligin-center lg:font-medium mb-1">
          FISH PACKS
        </h2>
      </div>

      <div className="w-full p-6 ">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4 ">
          <div>
            <ImageLessSingleItem
              name="10 x Fish Cocktail, Large Salad & Large Chips"
              price="42.90"
            />
          </div>
          <div>
            <ImageLessSingleItem
              name="3 x Fish Cocktail & Chips"
              price="11.50"
            />
          </div>
          <div>
            <ImageLessSingleItem
              name="3 x Fish Cocktail & Salad or Veggies"
              price="14.90"
            />
          </div>

          <div></div>
        </div>
        <div>
          <h3>*Coca-Cola 375mL Variety or Mount Franklin 600mL</h3>
        </div>
      </div>
    </div>
  );
};
