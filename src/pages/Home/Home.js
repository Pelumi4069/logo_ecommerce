import React from "react";
import Banner from "../../components/Banner/Banner";
import Category from "../../components/home/Category/Category";

const Home = () => {
  return (
    <div className="w-full mx-auto">
      <Banner />
      <div className="max-w-container mx-auto px-4">
        <Category />
      </div>
    </div>
  );
};

export default Home;
