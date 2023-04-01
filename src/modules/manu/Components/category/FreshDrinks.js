import React from "react";
import { WithoutPriceSingleItem } from "../WithoutPriceSingleItem";

export const FreshDrinks = () => {
  return (
    <div className="grid grid-cols-1 w-full pt-5 content-center ">
      <div className="w-full flex justify-center  align-middle ">
        <h2 className="text-[#e63945]  text-[24px] lg:text-[32px]  uppercase font-bold font-primary aligin-center lg:font-medium mb-1">
          FRESH DRINKS
        </h2>
      </div>
      <div className="w-full flex justify-center  align-middle ">
        <h3 className=" text-orange-300 text-[22px] lg:text-[28px]  uppercase font-bold font-primary aligin-center lg:font-medium mb-1">
          ALL 7.5
        </h3>
      </div>

      <div className="w-full  p-6 flex justify-left  align-middle ">
        <h2 className="text-[#e63945] text-[24px] lg:text-[32px]  uppercase font-bold font-primary aligin-center lg:font-medium mb-1">
          FRAPPES
        </h2>
      </div>

      <div className="w-full p-6 ">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          <div>
            <WithoutPriceSingleItem
              name="STRAWBERRY MINT"
              description="Strawberries, mint, ice"
            />
          </div>
          <div>
            <WithoutPriceSingleItem
              name="TROPICAL"
              description="Mango, pineapple, passionfruit, ice"
            />
          </div>
          <div>
            <WithoutPriceSingleItem
              name="SUNRISE"
              description="Strawberry, pineapple, mango, kiwi, ice"
            />
          </div>
        </div>
      </div>
      <div className="w-full  p-6 flex justify-left  align-middle ">
        <h2 className="text-[#e63945] text-[24px] lg:text-[32px]  uppercase font-bold font-primary aligin-center lg:font-medium mb-1">
          SMOOTHIES
        </h2>
      </div>

      <div className="w-full p-6 ">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4 ">
          <div>
            <WithoutPriceSingleItem
              name="BANANA"
              description="Banana, honey, yoghurt, milk"
            />
          </div>
          <div>
            <WithoutPriceSingleItem
              name="MANGO"
              description="Mango, banana, yoghurt, milk"
            />
          </div>
          <div>
            <WithoutPriceSingleItem
              name="BLUEBERRY CINNAMON"
              description="Blueberries, toasted muesli, cinnamon, dried fruit and
              nuts, banana, yoghurt, milk"
            />
          </div>
          <div>
            <WithoutPriceSingleItem
              name="GREEN"
              description="Spinach, celery, avocado, apple, banana, coconut"
            />
          </div>
          <div>
            <WithoutPriceSingleItem
              name="SUPERFOOD"
              description="Linseed, sunflower, almond, banana, yoghurt, honey, milk"
            />
          </div>
        </div>
      </div>
      <div className="w-full  p-6 flex justify-left  align-middle ">
        <h2 className="text-[#e63945] text-[24px] lg:text-[32px]  uppercase font-bold font-primary aligin-center lg:font-medium mb-1">
          INDULGENT SHAKES
        </h2>
      </div>

      <div className="w-full p-6 ">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-2 ">
          <div>
            <WithoutPriceSingleItem
              name="BELGIAN DARK CHOCOLATE"
              description="Dark chocolate, ice cream, banana, milk"
            />
          </div>
          <div>
            <WithoutPriceSingleItem
              name="COOKIES & CREAM"
              description="Oreo biscuit crumble, ice cream, banana, milk"
            />
          </div>
          <div>
            <WithoutPriceSingleItem
              name="NUTELLA"
              description="Nutella, ice cream, banana, milk"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
