import React, { useState } from "react";
// import { FaPlus } from "react-icons/fa";
import { ImPlus } from "react-icons/im";
import NavTitle from "./NavTitle";
import { motion } from "framer-motion";

const Category = () => {
  const [showSubCatOne, setShowSubCatOne] = useState(true);
  const items = [
    {
      _id: 990,
      title: "Foodstuffs",
      subcategories: ["grocery", "cereals", "yam ", "rice", "Protein", "beverage"],
    },
    {
      _id: 991,
      title: "Vegetables",
      subcategories: ["tomato", "pepper", "Cucumber", "Carrot", "Ball pepper", "G-egg"],
    },
    {
      _id: 992,
      title: "Fruits",
      subcategories: ["Apple", "Pineapple", "Strawberry", "Mango", "Berries", "Kiwi"],
    },
    {
      _id: 993,
      title: "Canned food",
      subcategories: ["Vegetables", "Fruits", "Canned food", "Drinks & Beverages", "Protein", "Toiletries"],
    },
    {
      _id: 994,
      title: "Drinks & Beverages",
      subcategories: ["Vegetables", "Fruits", "Canned food", "Drinks & Beverages", "Protein", "Toiletries"],
    },
    {
      _id: 995,
      title: "Protein",
      subcategories: ["Vegetables", "Fruits", "Canned food", "Drinks & Beverages", "Protein", "Toiletries"],
    },
    {
      _id: 996,
      title: "Toiletries",
      subcategories: ["Vegetables", "Fruits", "Canned food", "Drinks & Beverages", "Protein", "Toiletries"],
    },
  ];
  return (

    <div className="w-full">
    {items.map(({ _id, title, subcategories }) => (
      <div key={_id}>
        <div onClick={() => setShowSubCatOne(!showSubCatOne)} className="cursor-pointer">
          <NavTitle title={`Shop by ${title}`} icons={true} />
        </div>
        {showSubCatOne && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676] ">
              {subcategories.map((subcategory) => (
                <li
                  key={subcategory}
                  className="border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center justify-between hover:text-black cursor-pointer"
                >
                  {subcategory}
                  {/* <button
                    onClick={() => {
                      // Handle subcategory button click
                      console.log(`Clicked on subcategory: ${subcategory}`);
                    }}
                    className="text-[10px] lg:text-xs cursor-pointer text-black hover:text-primeColor duration-300"
                  >
                    Button
                  </button> */}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    ))}
  </div>
);
};
export default Category;
