import React from "react";
import { Link } from "react-router-dom";
import HomeSlider from "../Component/HomeSlider";
import NavBar from "../Component/NavBar";

function Home({ brands }) {
  // const brandItems = brands[brandname]

  return (
    <>
      <div className=" w-screen grid grid-cols-1 bg-gray-100 h-screen">
        <NavBar />
        <div className="grid grid-cols-2 px-40 gap-32 justify-between items-center  h-2/3 ">
          <div className="grid grid-cols-1 gap-y-10">
            <div className="text-mor text-5xl font-bold">Beauty Products </div>
            <div className="text-gray-700 text-xl ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.{" "}
            </div>
            <Link
              to="/shopping"
              className="w-32 h-10  flex justify-center items-center transition duration-500 bg-yellow-300 rounded-md shadow-md text-gray-700 hover:bg-yellow-200 hover:scale-110 hover:shadow-md"
            >
              Go Shopping
            </Link>
          </div>
          <div>
            <HomeSlider />
          </div>
        </div>
        {/* <div>
          {Object.entries(brands)?.map((pairs) => {
            return (
              <div
                key="index"
                className="grid grid-cols-2 gap-5 justify-center items-center"
              >
                <Link to={`/Brands/$brand`} className="w-30 h-20 bg-red">
                  {pairs[0]}
                </Link>
              </div>
            );
          })}
        </div> */}
      </div>
    </>
  );
}

export default Home;
