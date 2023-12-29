import React, {  useState } from "react";
import { GoTriangleDown } from "react-icons/go";

const ProductBanner = ({ categories, itemsPerPageFromBanner }) => {
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  const handleSubcategoryClick = (subcategory) => {
    setSelectedSubcategory(subcategory);
    console.log(`Clicked on subcategory: ${subcategory}`);
   
  };

  return (
    <div className="w-full flex flex-col md:flex-row md:items-center justify-between">
      <div className="flex items-center gap-4">
        {categories.map(({ _id, title, subcategories }) => (
          <button
            key={_id}
            onClick={() => handleSubcategoryClick(subcategories)}
            className={`border-[1px] border-gray-300 py-2 px-4 rounded-md focus:outline-none focus:border-primeColor hover:border-primeColor hover:bg-primeColor hover:text-white transition duration-300 ease-in-out`}
          >
            {title}
          </button>
        ))}
      </div>

    
      <div className="flex items-center gap-2 md:gap-6 mt-4 md:mt-0">
        <div className="flex items-center gap-2 text-base text-[#767676] relative">
          
        </div>
        <div className="flex items-center gap-2 text-[#767676] relative">
          <label className="block">Show:</label>
          <select
            onChange={(e) => itemsPerPageFromBanner(+e.target.value)}
            id="countries"
            className="w-16 md:w-20 border-[1px] border-gray-200 py-1 px-4 cursor-pointer text-primeColor text-base block dark:placeholder-gray-400 appearance-none focus-within:outline-none focus-visible:border-primeColor"
          >
            <option value="12">12</option>
            <option value="24">24</option>
            <option value="36">36</option>
            <option value="48">48</option>
          </select>
          <span className="absolute text-sm right-3 top-2.5">
            <GoTriangleDown />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductBanner;
