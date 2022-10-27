import React, { useEffect, useState } from "react";
import { FiHeart } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";
import NavBar from "../Component/NavBar";
import axios from "axios";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Brands({ brands }) {
  const [lipsticks, setLipstick] = useState();
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    swipeToSlide: true,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
  };
  useEffect(() => {
    axios
      .get(
        `https://makeup-api.herokuapp.com/api/v1/products.json?product_type=lipstick`
      )
      .then((response) => {
        setLipstick(response.data);
        console.log(setLipstick);
      });
  }, []);
  return (
    <div className="bg-gray-100 font-DM">
      <NavBar />{" "}
      <div className="flex flex-col justify-start py-14">
        <p className="text-3xl px-2">Lipstick</p>
        <Slider {...settings}>
          {lipsticks?.map((lipstick) => {
            return (
              <div
                key={lipstick.id}
                className="   font-bold flex justify-start mt-6 "
              >
                <div className="  flex flex-col justify-start ">
                  <img
                    className="h-44 w-60 object-cover rounded-lg object-top"
                    alt="lipstick "
                    src={lipstick.image_link}
                  />
                  <div className="w-60 h-38 h-fix justify-between bg-white p-2 mt-1 rounded-sm bg-opacity-50">
                    <div className="text-lg text-mor">{lipstick.name}</div>
                    <div className="flex justify-between  items-stretch text-md text-gray-800">
                      <div>Brand:{lipstick.brand}</div>
                      <div>{lipstick.price} $</div>
                    </div>
                    <div className="flex justify-between items-center text-md mt-1 text-gray-800">
                      <div>
                        <button className="flex justify-center items-center w-24 rounded-md bg-zard">
                          <p className="px-1">Buy </p>
                          <FiShoppingBag fill="#000" className="text-zard" />
                        </button>
                      </div>
                      <div>
                        <button>
                          {" "}
                          <FiHeart className="" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>

        {/* {lipsticks?.map((lipstick) => {
          return (
            <div
              key={lipstick.id}
              className="   font-bold flex justify-start mt-6 "
            >
              <div className="  flex flex-col justify-start ">
                <img
                  className="h-44 w-60 object-cover rounded-lg object-top"
                  alt="lipstick "
                  src={lipstick.image_link}
                />
                <div className="w-60 bg-white p-2 mt-1 rounded-sm bg-opacity-50">
                  <div className="text-lg text-mor">{lipstick.name}</div>
                  <div className="flex justify-between text-md text-gray-800">
                    <div>Brand:{lipstick.brand}</div>
                    <div>{lipstick.price} $</div>
                  </div>
                  <div className="flex justify-between items-center text-md mt-1 text-gray-800">
                    <div>
                      <button className="flex justify-center items-center w-24 rounded-md bg-zard">
                        <p className="px-1">Buy </p>
                        <FiShoppingBag fill="#000" className="text-zard" />
                      </button>
                    </div>
                    <div>
                      <button>
                        {" "}
                        <FiHeart className="" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div>{}</div>
            </div>
          );
        })} */}
      </div>
    </div>
  );
}

export default Brands;
