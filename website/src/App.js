import Home from "./Pages/Home";
import About from "./Pages/About";
import Favourite from "./Pages/Favourite";
import Profile from "./Pages/Profile";
import Bag from "./Pages/Bag";
import { Routes, Route } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Brands from "./Pages/Brands";
import Shopping from "./Pages/Shopping";

function App() {
  const [brands, setBrands] = useState({});
  const [err, setErr] = useState("");

  useEffect(() => {
    axios
      .get(`https://makeup-api.herokuapp.com/api/v1/products.json`)
      .then((response) => {
        setBrands(groupBy(response.data, "brand"));
      })
      .catch((err) => setErr(err));
  }, []);

  const groupBy = function (array, key) {
    return array.reduce(function (dataArray, item) {
      (dataArray[item[key]] = dataArray[item[key]] || []).push(item);
      return dataArray;
    }, {});
  };

  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="Brands" element={<Brands brands={brands} />} />
        <Route path="shopping" element={<Shopping brands={brands} />} />

        <Route path="about" element={<About />} />
        <Route path="favourite" element={<Favourite />} />
        <Route path="profile" element={<Profile />} />
        <Route path="bag" element={<Bag />} />
      </Routes>
    </>
  );
}

export default App;
