import React from "react";
import { ImageLessSingleItem } from "../ImageLessSingleItem";

export const DinnerPacks = () => {
  return (
    <div className="grid grid-cols-1 w-full pt-5 content-center ">
      <div className="w-full flex justify-center  align-middle ">
        <h2 className="text-[#e63945]  text-[24px] lg:text-[32px]  uppercase font-bold font-primary aligin-center lg:font-medium mb-1">
          DINNER PACKS
        </h2>
      </div>
      <div className="w-full flex px-6 justify-start  sm:justify-center align-middle ">
        <h3 className="  text-[#6e6262] text-[20px] lg:text-[24px]  uppercase font-bold font-primary aligin-center lg:font-medium mb-1">
          Served With Choice Of 3 Salads Or Veggies & Gravy
        </h3>
      </div>

      <div className="w-full p-6 ">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4 ">
          <div>
            <ImageLessSingleItem name="1/4 Chicken Dinner" price="17.90" />
          </div>
          <div>
            <ImageLessSingleItem name="1/2 Chicken Dinner" price="20.90" />
          </div>
          <div>
            <ImageLessSingleItem
              name="Chicken Schnitzel or Grilled Fillet Dinner"
              price="17.90"
            />
          </div>
          <div>
            <ImageLessSingleItem name="Pork/Lamb Dinner" price="18.90" />
          </div>
        </div>
      </div>
    </div>
  );
};
