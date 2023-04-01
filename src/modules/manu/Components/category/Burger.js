import React from "react";
import { DoublePriceSingleItem } from "../DoublePriceSingleItem";
import { WithoutPriceSingleItem } from "../WithoutPriceSingleItem";

export const Burger = () => {
  return (
    <div className="grid grid-cols-1 w-full pt-5 content-cente">
      <div className="w-full p-6 ">
        <div className="w-full flex justify-center  align-middle  md:p-10">
          <h2 className="text-[#e63945] text-[24px] lg:text-[32px]  uppercase font-bold font-primary aligin-center lg:font-medium mb-1">
            BURGERS
          </h2>
        </div>
      </div>
      {/* checken burger */}
      <div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full px-6 ">
          <div>
            <div className="border-t-2 border-gray-300  border-dashed p-1 ">
              <div className="flex flex-nowrap space-x-4 w-full text-[#e63945]">
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
          <div className="hidden md:inline">
            <div className="border-t-2 border-gray-300  border-dashed p-1 ">
              <div className="flex flex-nowrap space-x-4 w-full text-[#e63945]">
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

        <div className="w-full p-6 ">
          <div class="grid grid-cols-1  md:grid-cols-2 gap-2 sm:gap-4 w-full ">
            <div>
              <DoublePriceSingleItem
                name="Honest Chicken"
                description="Grilled Chicken Fillet, Lettuce, Tomato,
                Cheese, Aioli"
                singlePrice="11.90"
                mealPrice="17.90"
              />
            </div>
            <div>
              <DoublePriceSingleItem
                name="Double Decker Chicken"
                description="Two Grilled Chicken Fillets, Lettuce,
                Tomato, Double Chees, Aioli"
                singlePrice="15.40"
                mealPrice="21.40"
              />
            </div>
            <div>
              <DoublePriceSingleItem
                name="Chicken Schnitzel"
                description="Chicken Schnitzel Fillet, Lettuce, Mayo, Cheese"
                singlePrice="12.90"
                mealPrice="18.90"
              />
            </div>
            <div>
              <DoublePriceSingleItem
                name="Piri Piri"
                description="Marinated Chicken Fillet, Lettuce, Tomato,
                Cheese, Chilli Mayo, Piri Piri Sauce"
                singlePrice="12.90"
                mealPrice="18.90"
              />
            </div>
            <div>
              <DoublePriceSingleItem
                name="Hot & Spicy Schnitzel"
                description="Chicken Schnitzel Fillet, Aioli, Spicy Sauce,
                Jalapeno, Cheese, Lettuce"
                singlePrice="13.90"
                mealPrice="19.90"
              />
            </div>
            <div>
              <DoublePriceSingleItem
                name="Southern Fried Chicken"
                description="Crispy Chicken Fillet, Bacon, Cheese,
                Lettuce, Tomato, Chipotle Mayo"
                singlePrice="15.50"
                mealPrice="21.50"
              />
            </div>
            <div>
              <DoublePriceSingleItem
                name="Hash Smash"
                description="Grilled Chicken Fillet, Hash Brown, Avocado, Mayo,
                Tangy Sauce, Lettuce, Tomato, Cheese"
                singlePrice="14.90"
                mealPrice="20.90"
              />
            </div>
            <div>
              <DoublePriceSingleItem
                name="Chicken Tandoori"
                description="Marinated Tandoori Chicken, Mint Yoghurt
                Sauce, Lettuce, Tomato"
                singlePrice="11.90"
                mealPrice="17.90"
              />
            </div>
            <div>
              <DoublePriceSingleItem
                name="Chicken Lot"
                description="Grilled Chicken Fillet, Bacon, Pineapple,Onion,
                Egg, Beetroot, Cheese, Aioli, Lettuce, Tomato"
                singlePrice="15.90"
                mealPrice="21.90"
              />
            </div>
            <div>
              <DoublePriceSingleItem
                name="Chicken, Bacon & Relish"
                description="Grilled Chicken Fillet, Bacon, Cheese, Tomato
                Relish, Lettuce, Tomato, Mayo"
                singlePrice="12.90"
                mealPrice="18.90"
              />
            </div>
            <div>
              <WithoutPriceSingleItem
                name="Meals Come With Chips & Coca-Cola 375mL
                Variety Or Mount Franklin 600mL"
              />
            </div>
          </div>
        </div>
      </div>
      {/* beef burger */}
      <div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full px-6 ">
          <div>
            <div className="border-t-2 border-gray-300  border-dashed p-1 ">
              <div className="flex flex-nowrap space-x-4 w-full text-[#e63945]">
                <div className="w-8/12">
                  <h5 className="font-bold capitalize">
                    Beef Burgers <br />
                    100% Premium Beef
                  </h5>
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
                  <h5 className="font-bold capitalize">
                    {" "}
                    Beef Burgers <br />
                    100% Premium Beef
                  </h5>
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

        <div className="w-full p-6 ">
          <div class="grid grid-cols-1 md:grid-cols-2  gap-2 sm:gap-4 w-full ">
            <div>
              <DoublePriceSingleItem
                name="Honest Beef"
                description="Beef Patty, Gherkins, Lettuce, Tomato, Onion,
                Mustard Mayo, Tomato/BBQ Sauce"
                singlePrice="11.90"
                mealPrice="17.90"
              />
            </div>
            <div>
              <DoublePriceSingleItem
                name="Cheese Burger"
                description="Beef Patty, Cheese, Tomato/BBQ Sauce"
                singlePrice="9.00"
                mealPrice="15.00"
              />
            </div>
            <div>
              <DoublePriceSingleItem
                name="Double Decker Beef"
                description="Two Beef Patties, Double Cheese, Gherkins,
                Lettuce, Tomato, Onion, Mustard Mayo, Tomato/
                BBQ Sauce"
                singlePrice="15.40"
                mealPrice="21.40"
              />
            </div>
            <div>
              <DoublePriceSingleItem
                name="Bacon & Cheese Beef"
                description="Beef Patty, Bacon, Cheese, Gherkins, Onion,
                Lettuce, Tomato, Mustard Mayo, Tomato/BBQ
                Sauce"
                singlePrice="12.90"
                mealPrice="18.90"
              />
            </div>
            <div>
              <DoublePriceSingleItem
                name="Onion Ring Cheese"
                description="Beef Patty, Onion Rings, Cheese,Gherkins,
                Tomato, Lettuce, Mustard Mayo, Tomato/
                BBQ Sauce"
                singlePrice="13.90"
                mealPrice="19.90"
              />
            </div>
            <div>
              <DoublePriceSingleItem
                name="Aussie Beef"
                description="Beef Patty, Bacon, Cheese, Egg, Beetroot,
                Pineapple, Onion, Lettuce, Tomato,
                Mustard Mayo, Tomato/BBQ Sauce"
                singlePrice="15.90"
                mealPrice="21.90"
              />
            </div>
          </div>
        </div>
      </div>
      {/* special burger */}
      <div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full px-6 ">
          <div>
            <div className="border-t-2 border-gray-300  border-dashed p-1 ">
              <div className="flex flex-nowrap space-x-4 w-full text-[#e63945]">
                <div className="w-8/12">
                  <h5 className="font-bold capitalize">Specialty Burgers</h5>
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
                  <h5 className="font-bold capitalize">Specialty Burgers</h5>
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
                name="Roast Lamb"
                description="Roast Lamb, Cheese, Lettuce, Tomato,
                Mint Yoghurt Sauce"
                singlePrice="13.90"
                mealPrice="19.90"
              />
            </div>
            <div>
              <DoublePriceSingleItem
                name="Pork Slaw"
                description="Tender Pork, Coleslaw, Piri Piri, Gravy"
                singlePrice="13.90"
                mealPrice="19.90"
              />
            </div>
            <div>
              <DoublePriceSingleItem
                name="Honest Veggie"
                description="Veggie Pattie, Beetroot, Onion, Lettuce, Tomato,
                Avocado, Your Choice Of Sauce"
                singlePrice="12.90"
                mealPrice="18.90"
              />
            </div>
            <div>
              <WithoutPriceSingleItem
                name="Honest Box"
                description="Honest Chicken or Beef Burger, Chips, 3 x Wings,
                Gravy or Dip & Drink- Other Burgers Available"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
