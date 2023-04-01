import React from "react";
import { SingleItemWithDescription } from "../SingleItemWithDescription";

export const FamilyPacks = () => {
  return (
    <div className="grid grid-cols-1 w-full pt-5 content-center ">
      <div className="w-full flex justify-center  align-middle ">
        <h2 className="text-[#e63945]  text-[24px] lg:text-[32px]  uppercase font-bold font-primary aligin-center lg:font-medium mb-1">
          FAMILY PACKS
        </h2>
      </div>

      <div className="w-full p-6 ">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4 ">
          <div>
            <SingleItemWithDescription
              name="Portuguese Pack"
              description="1 Whole Portuguese Style Chicken, Large Salad,
              Large Chips & Garlic/Piri/L&H Sauce"
              price="39.90"
            />
          </div>
          <div>
            <SingleItemWithDescription
              name="BBQ Pack"
              description="1 Whole Chicken, Large Salad & Large Chips"
              price="39.90"
            />
          </div>
          <div>
            <SingleItemWithDescription
              name="Healthy Pack"
              description="1 Whole Chicken, Large Salad & Large Veggies"
              price="43.90"
            />
          </div>
          <div>
            <SingleItemWithDescription
              name="Half Chicken Pack"
              description="1/2 Chicken, Medium Chips & Medium Salad"
              price="29.50"
            />
          </div>
          <div>
            <SingleItemWithDescription
              name="Schnitzel Box"
              description="4x Schnitzels & Large Chips"
              price="31.90"
            />
          </div>
          <div>
            <SingleItemWithDescription
              name="Family Burger Box"
              description="4 x Chicken Or Beef Burgers, 1 Large Chips
              & Coca-Cola 1.25L Variety"
              price="50.00"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
