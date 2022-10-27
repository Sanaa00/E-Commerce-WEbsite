import React from "react";
import Slider from "react-slick";
import one from "../Images/1.png";
import two from "../Images/2.png";
import three from "../Images/3.png";
import four from "../Images/4.png";
import five from "../Images/5.png";
import six from "../Images/6.png";
function HomeSlider() {
  const settings = {
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <>
      <div className="px-10">
        <Slider {...settings} className="flex justify-end ">
          <div>
            <img src={one} alt="one" className="h-96 w-96 object-contain" />
          </div>
          <div>
            <img src={two} alt="two" className="h-96 w-96 object-contain" />
          </div>
          <div>
            <img src={three} alt="three" className="h-96 w-96 object-contain" />
          </div>
          <div>
            <img src={four} alt="four" className="h-96 w-96 object-contain" />
          </div>
          <div>
            <img src={five} alt="five" className="h-96 w-96 object-contain" />
          </div>{" "}
          <div>
            <img src={six} alt="six" className="h-96 w-96 object-contain" />
          </div>
        </Slider>
      </div>
    </>
  );
}

export default HomeSlider;
