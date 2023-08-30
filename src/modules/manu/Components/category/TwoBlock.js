import React from "react";
import { ImageLessSingleItem } from "../ImageLessSingleItem";
import { WithoutPriceSingleItem } from "../WithoutPriceSingleItem";

export const TwoBlock = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 w-full pt-5 place-items-start ">
        <div className="grid grid-cols-1 w-full  content-center ">
          <div className="w-full flex justify-center  align-middle ">
            <h2 className="text-[#e63945]  text-[20px] lg:text-[28px]  uppercase font-bold font-primary aligin-center lg:font-medium mb-1">
              SALADS{" "}
              <span className="text-[14px]  text-[#6e6262] lowercase">
                Made Daily In-House
              </span>
            </h2>
          </div>

          <div className="w-full p-6 ">
            <div class="grid grid-cols-1  gap-2 ">
              <div>
                <ImageLessSingleItem name="REG" price="8.50" />
              </div>
              <div>
                <ImageLessSingleItem name="MED" price="12.90" />
              </div>
              <div>
                <ImageLessSingleItem name="LRG" price="15.90" />
              </div>
              <div>
                <ImageLessSingleItem name="X LRG" price="19.90" />
              </div>
              <div>
                <ImageLessSingleItem name="FAM" price="23.50" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 w-full  content-center ">
          <div className="w-full flex justify-center  align-middle ">
            <h2 className="text-[#e63945]  text-[20px] lg:text-[28px]  uppercase font-bold font-primary aligin-center lg:font-medium mb-1">
              chips
              <span className="text-[14px]  text-[#6e6262] lowercase"></span>
            </h2>
          </div>

          <div className="w-full p-6 ">
            <div class="grid grid-cols-1  gap-2 ">
              <div>
                <ImageLessSingleItem name="REG" price="4.50" />
              </div>
              <div>
                <ImageLessSingleItem name="MED" price="9.90" />
              </div>
              <div>
                <ImageLessSingleItem name="LRG" price="11.50" />
              </div>
              <div>
                <ImageLessSingleItem name="TRAY" price="30.00" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 w-full  content-center ">
          <div className="w-full flex justify-center  align-middle ">
            <h2 className="text-[#e63945]  text-[20px] lg:text-[28px]  uppercase font-bold font-primary aligin-center lg:font-medium mb-1">
              HOT VEGGIES
              <span className="text-[14px]  text-[#6e6262] lowercase">
                Baked Fresh Daiy
              </span>
            </h2>
          </div>

          <div className="w-full p-6 ">
            <div class="grid grid-cols-1  gap-2 sm:gap-4 ">
              <div>
                <ImageLessSingleItem name="Small" price="8.50" />
              </div>
              <div>
                <ImageLessSingleItem name="Medium" price="12.90" />
              </div>
              <div>
                <ImageLessSingleItem name="Large" price="15.90" />
              </div>
              <div>
                <ImageLessSingleItem name="XL" price="19.90" />
              </div>

              <div></div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 w-full  content-center ">
        <div className="w-full flex justify-center  align-middle ">
          <h2 className="text-[#e63945]  text-[20px] lg:text-[28px]  uppercase font-bold font-primary aligin-center lg:font-medium mb-1">
            KIDS
            <span className="text-[14px]  text-[#6e6262] lowercase">
              12 Years & Under
            </span>
          </h2>
        </div>
        <div className="w-full flex justify-center  align-middle ">
          <h3 className="  text-[#6e6262] text-[14px] lg:text-[18px]  uppercase font-bold font-primary aligin-center lg:font-medium mb-1">
            Plus Chips & A Drink $13.90
          </h3>
        </div>

        <div className="w-full p-6 ">
          <div class="grid grid-cols-1  gap-2 sm:gap-4 ">
            <div>
              <WithoutPriceSingleItem
                name="Cheese Burger/Chicken
                Nuggets/Chicken Schnitzel /
                Grilled Chicken Fillet"
              />
            </div>

            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};
