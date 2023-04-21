import React from "react";
import { DoublePriceMenu } from "./Components/DoublePriceMenu";
import { SinglePriceMenu } from "./Components/SinglePriceMenu";
import { FreeRangeChicken } from "./Components/category/FreeRangeChicken";
import { DinnerPacks } from "./Components/category/DinnerPacks";
import { FamilyPacks } from "./Components/category/FamilyPacks";
import { ClassicPacks } from "./Components/category/ClassicPacks";
import { FishPacks } from "./Components/category/FishPacks";
import { TwoBlock } from "./Components/category/TwoBlock";
import { Burger } from "./Components/category/Burger";
import { Rolls } from "./Components/category/Rolls";
import { FreshDrinks } from "./Components/category/FreshDrinks";
import { Desserts } from "./Components/category/Desserts";

export const Manu = () => {
  return (
    <div className="h-full bg-pattern bg-repeat  mx-auto overflow-hidden grid grid-rows-1 justify-center items-center  ">
      <div className="px-5 md:px-20  justify-center items-center">
        <FreeRangeChicken />
      </div>
      <div className="px-5 md:px-20  justify-center items-center">
        <DinnerPacks />
      </div>
      <div className="px-5 md:px-20  justify-center items-center">
        <FamilyPacks />
      </div>
      <div className="px-5 md:px-20  justify-center items-center">
        <ClassicPacks />
      </div>
      <div className="px-5 md:px-20  justify-center items-center">
        <FishPacks />
      </div>
      <div className="px-5 md:px-20  justify-center items-center">
        <TwoBlock />
      </div>
      <div className="px-5 md:px-20  justify-center items-center ">
        <Burger />
      </div>
      <div className="px-5 md:px-20  justify-center items-center ">
        <Rolls />
      </div>
      <div className="px-5 md:px-20  justify-center items-center ">
        <FreshDrinks />
      </div>
      <div className="px-5 md:px-20  justify-center items-center ">
        <Desserts />
      </div>

      {/* <div className="px-5 md:px-20  justify-center items-center">
        <SinglePriceMenu />
      </div>

      <div className="px-5 md:px-20  justify-center items-center ">
        <DoublePriceMenu />
      </div> */}
    </div>
  );
};
