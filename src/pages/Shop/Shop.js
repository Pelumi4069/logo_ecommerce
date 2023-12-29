import React, { useState } from "react";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import Pagination from "../../components/pageProps/shopPage/Pagination";
import ProductBanner from "../../components/pageProps/shopPage/ProductBanner";
import ShopSideNav from "../../components/pageProps/shopPage/ShopSideNav";
// import Category from "../../components/pageProps/shopPage/shopBy/Category";

const Shop = () => {
  const [itemsPerPage, setItemsPerPage] = useState(12);


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

  const itemsPerPageFromBanner = (itemsPerPage) => {
    setItemsPerPage(itemsPerPage);
  };

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Products" />
      {/* ================= Products Start here =================== */}
      <div className="w-full h-full flex pb-20 gap-10">
        <div className="w-[20%] lgl:w-[25%] hidden mdl:inline-flex h-full">
          <ShopSideNav />
        </div>
        <div className="w-full mdl:w-[80%] lgl:w-[75%] h-full flex flex-col gap-10">
        {/* <Category />  */}
          <ProductBanner 
          categories={items} 
          itemsPerPageFromBanner={itemsPerPageFromBanner}
           />
          <Pagination itemsPerPage={itemsPerPage} />
        </div>
      </div>
      {/* ================= Products End here ===================== */}
    </div>
  );
};

export default Shop;

