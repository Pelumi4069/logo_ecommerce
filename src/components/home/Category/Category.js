import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";
import categories from "./Catdata";
// import handleProductDetails from "../Products/Product"; 

const Category = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto mt-8 w-full pb-16 py-4">
      <h1 className="text-3xl font-semibold pb-6">Categories</h1>
      <Slider {...settings}>
        {categories.map((category) => (
          <div key={category.id} className="px-2 flex ">
            <div className="rounded overflow-hidden">
              <img
                className="w-full h-48 object-cover rounded"
                src={category.image}
                alt={category.title}
              />
              <div className="p-4 bg-white">
                <h2 className="text-lg font-semibold mb-2">{category.title}</h2>
                <Link
                  to="/shop"
                  className="text-blue-500 hover:underline"
                >
                  Explore {category.title}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Category;

