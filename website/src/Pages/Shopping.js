import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../Component/NavBar";

function Shopping({ brands }) {
  return (
    <div className=" bg-gray-100 font-DM">
      <div className="h-screen ">
        <NavBar />
        <div className="px-32 grid grid-cols-2 gap-32  justify-center items-center mt-10">
          {" "}
          <div className="flex flex-col justify-start items-center">
            <div className="w-96 object-contain shadow-md">
              <img
                alt="makeup"
                src="https://images.unsplash.com/photo-1598452963314-b09f397a5c48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=581&q=80"
              />
            </div>
            <div className="mt-4 w-96 text-mor text-3xl font-bold  ">
              Party makeup
            </div>
            <div className="w-96 ">
              here are many variations of passages of Lorem Ipsum available, but
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly
              believable.
            </div>
          </div>
          <div className="flex flex-col  jusify-center items-center">
            <div className="text-3xl text-mor font-bold w-96">
              Welcome to Our website{" "}
            </div>
            <div className="w-96 mb-4">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </div>
            <div>
              <div className="w-96 object-contain shadow-md">
                <img
                  alt="makeup"
                  src="https://images.unsplash.com/photo-1570797820424-c3e537ac20d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=538&q=80"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-screen px-32 flex flex-col justify-start items-center bg-fixed bg-no-repeat bg-cover bg-opacity-50 bg-[url('https://images.unsplash.com/photo-1577058109956-67adf6edc586?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')] ">
        <p className="text-5xl text-mor font-bold mt-10 ">
          We Colllect All Brands{" "}
        </p>{" "}
        <div className=" grid grid-cols-3 gap-24  py-14">
          {Object.entries(brands)
            ?.slice(0, 12)
            .map((pairs) => {
              return (
                <Link
                  key="index"
                  to={`/Brands/$brand`}
                  className=" h-16 w-60 bg-red flex justify-center items-center rounded-md text-mor bg-opacity-90 bg-white shadow-md hover:scale-105  "
                >
                  {pairs[0]}
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Shopping;
