import React from "react";
import { WithoutPriceSingleItem } from "../WithoutPriceSingleItem";
import { DoublePriceSingleItem } from "../DoublePriceSingleItem";

export const Rolls = () => {
  return (
    <div className="grid grid-cols-1 w-full pt-5 content-cente">
      <div className="w-full p-6 ">
        <div className="w-full flex justify-center  align-middle  md:p-10">
          <h2 className="text-[#e63945] text-[24px] lg:text-[32px]  uppercase font-bold font-primary aligin-center lg:font-medium mb-1">
            Rolls
          </h2>
        </div>
      </div>
      {/* Rolls */}
      <div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full px-6 ">
          <div>
            <div className="border-t-2 border-gray-300  border-dashed p-1 ">
              <div className="flex flex-nowrap space-x-4 w-full text-[#e63945]">
                <div className="w-8/12">
                  <h5 className="font-bold capitalize"> Rolls</h5>
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
          <div className="hidden md:inline">
            <div className="border-t-2 border-gray-300  border-dashed p-1 ">
              <div className="flex flex-nowrap space-x-4 w-full text-[#e63945]">
                <div className="w-8/12">
                  <h5 className="font-bold capitalize"> Rolls</h5>
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

        <div className="w-full px-6 ">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4 w-full ">
            <div>
              <DoublePriceSingleItem
                name="Bacon & Egg"
                description="Double Bacon, Egg, Tomato/BBQ Sauce"
                singlePrice="8.50"
                mealPrice="14.50"
              />
            </div>
            <div>
              <DoublePriceSingleItem
                name="BLT"
                description="Double Bacon, Lettuce, Tomato, Mayo"
                singlePrice="9.50"
                mealPrice="15.50"
              />
            </div>
            <div>
              <DoublePriceSingleItem
                name="Big Brekkie"
                description="Double Bacon, 2 Eggs, Hash Brown, Tomato/BBQ
                Sauce"
                singlePrice="11.50"
                mealPrice="17.50"
              />
            </div>
            <div>
              <DoublePriceSingleItem
                name="Portuguese"
                description="Roasted Chicken, Portuguese Mayo, Cheese,
                Spanish Onion, Tomato, Lettuce, Piri Piri Sauce"
                singlePrice="12.90"
                mealPrice="18.90"
              />
            </div>
            <div>
              <DoublePriceSingleItem
                name="Chicken & Gravy"
                description="Roasted Chicken With Lashings Of Gravy"
                singlePrice="10.90"
                mealPrice="16.90"
              />
            </div>
            <div>
              <DoublePriceSingleItem
                name="Chicken & Salad"
                description="Roasted Chicken With Lettuce, Tomato, Mayo"
                singlePrice="11.90"
                mealPrice="17.90"
              />
            </div>
            <div>
              <DoublePriceSingleItem
                name="Roast Pork / Lamb"
                description="Choice Of Roast Pork Or Lamb With Gravy & Apple
                Sauce"
                singlePrice="12.90"
                mealPrice="18.90"
              />
            </div>
            <div>
              <DoublePriceSingleItem
                name="Chicken Schnitzel"
                description="Chicken Schnitzel Fillet, Lettuce, Cheese, Mayo"
                singlePrice="12.90"
                mealPrice="18.90"
              />
            </div>
            <div>
              <DoublePriceSingleItem
                name="Chicken Strips"
                description="Southern Fried Chicken Strips, Lettuce,
                Cheese, Sriracha Sauce, Mayo"
                singlePrice="12.90"
                mealPrice="18.90"
              />
            </div>
            <div>
              <DoublePriceSingleItem
                name="Bahn Mi"
                description="Choice Of Roast Pork Or Chicken, Mix Of,
                Pickled Carrots, Cucumber, Coriander,
                Fresh Chilli, Mayo, Chilli Lime Dressing"
                singlePrice="12.90"
                mealPrice="18.90"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Wraps */}
      <div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full px-6 ">
          <div>
            <div className="border-t-2 border-gray-300  border-dashed p-1 ">
              <div className="flex flex-nowrap space-x-4 w-full text-[#e63945]">
                <div className="w-8/12">
                  <h5 className="font-bold capitalize">Wraps</h5>
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
          <div className="hidden md:inline">
            <div className="border-t-2 border-gray-300  border-dashed p-1 ">
              <div className="flex flex-nowrap space-x-4 w-full text-[#e63945]">
                <div className="w-8/12">
                  <h5 className="font-bold capitalize">Wraps</h5>
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

        <div className="w-full px-6 ">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4  w-full ">
            <div>
              <DoublePriceSingleItem
                name="Falafel"
                description="Falafel, Tabouli, Lettuce, Hummus"
                singlePrice="12.90"
                mealPrice="18.90"
              />
            </div>

            <div>
              <DoublePriceSingleItem
                name="Chicken Schnitzel"
                description="Chicken Schnitzel, Lettuce, Cheese, Mayo"
                singlePrice="12.90"
                mealPrice="18.90"
              />
            </div>
            <div>
              <DoublePriceSingleItem
                name="Grilled Chicken Salad"
                description="Grilled Chicken, Lettuce, Tomato, Cheese, Aioli"
                singlePrice="12.90"
                mealPrice="18.90"
              />
            </div>
            <div>
              <DoublePriceSingleItem
                name="Spicy BBQ Chicken"
                description="BBQ Chicken, Lettuce, Hot Sauce, Cheese, Tomato, Aioli"
                singlePrice="12.90"
                mealPrice="18.90"
              />
            </div>
            <div>
              <DoublePriceSingleItem
                name="Tandoori"
                description="Marinated Tandoori Chicken, Mint Yoghurt Sauce,
                Lettuce, Cucumber, Tomato"
                singlePrice="12.90"
                mealPrice="18.90"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
