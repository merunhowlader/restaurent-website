import React from "react";
import { DoublePriceSingleItem } from "./DoublePriceSingleItem";

export const DoublePriceMenu = () => {
  return (
    <div className="grid grid-cols-1 w-full pt-5 content-cente">
      <div className="w-full p-6 ">
        <div className="w-full flex justify-center  align-middle  md:p-10">
          <h2 className="text-[#e63945] text-[24px] lg:text-[32px]  uppercase font-bold font-primary aligin-center lg:font-medium mb-1">
            Main Category Name
          </h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full ">
          <div>
            <div className="border-t-2 border-gray-300  border-dashed p-1 ">
              <div className="flex flex-nowrap space-x-2 w-full text-[#e63945]">
                <div className="w-8/12">
                  <h5 className="font-bold capitalize">Checken Burger</h5>
                </div>
                <div className="w-2/12">
                  <h5 className="font-bold uppercase ">Single</h5>
                </div>
                <div className="w-2/12">
                  <h5 className="w-2/12 font-bold uppercase ">meal</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:hidden lg:inline">
            <div className="border-t-2 border-gray-300  border-dashed p-1 ">
              <div className="flex flex-nowrap space-x-2 w-full text-[#e63945]">
                <div className="w-8/12">
                  <h5 className="font-bold capitalize">Checken Burger</h5>
                </div>
                <div className="w-2/12">
                  <h5 className="font-bold uppercase ">Single</h5>
                </div>
                <div className="w-2/12">
                  <h5 className="w-2/12 font-bold uppercase ">meal</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full p-6 ">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full ">
          <div>
            <DoublePriceSingleItem
              name="Fish"
              description="Crispy Fish, Lettuce, Tomato, Cheese, Tartare"
              singlePrice="13.90"
              mealPrice="19.90"
            />
          </div>
          <div>
            <DoublePriceSingleItem
              name="Fish"
              description="Crispy Fish, Lettuce, Tomato, Cheese, Tartare"
              singlePrice="13.90"
              mealPrice="19.90"
            />
          </div>
          <div>
            <DoublePriceSingleItem
              name="Fish"
              description="Crispy Fish, Lettuce, Tomato, Cheese, Tartare"
              singlePrice="13.90"
              mealPrice="19.90"
            />
          </div>
          <div>
            <DoublePriceSingleItem
              name="Fish"
              description="Crispy Fish, Lettuce, Tomato, Cheese, Tartare"
              singlePrice="13.90"
              mealPrice="19.90"
            />
          </div>
          <div>
            <DoublePriceSingleItem
              name="Fish"
              description="Crispy Fish, Lettuce, Tomato, Cheese, Tartare"
              singlePrice="13.90"
              mealPrice="19.90"
            />
          </div>
          <div>
            <DoublePriceSingleItem
              name="Fish"
              description="Crispy Fish, Lettuce, Tomato, Cheese, Tartare"
              singlePrice="13.90"
              mealPrice="19.90"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
