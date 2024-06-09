import React from "react";
import Image1 from "../assets/Hero2/sale.png";
import Image2 from "../assets/Hero2/women.png";
import Image3 from "../assets/Hero2/shopping.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageList = [
  {
    id: 1,
    img: Image3,
    title: "Upto 50% off on all men's Wear",
    description: `Lorem his life will forever be changed dolor sit 
        amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    id: 2,
    img: Image2,
    title: "30% off on all women's Wear",
    description: `Lorem his life will forever be changed dolor sit 
        amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    id: 3,
    img: Image1,
    title: "70% off on all products sale",
    description: `Lorem his life will forever be changed dolor sit 
        amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.`,
  },
];

const Wow = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <>
      <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-900 dark:text-white duration-200">
        {/* background pattern */}
        <div className="h-[700px] w-[700px] bg-MyMarket1/45 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9"></div>
        {/* wow section  */}
        <div className="container pb-8 sm:pb-0">
          <Slider {...settings}>
            {ImageList.map((item) => (
              <div key={item.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  {/* text content Section */}
                  <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                    <h1
                      data-aos="zoom-in"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-3xl sm:text-6xl lg:text-7xl font-bold"
                    >
                      {item.title}
                    </h1>
                    <p
                      data-aos="fade-up"
                      data-aos-duration="500"
                      data-aos-delay="100"
                      className="text-sm"
                    >
                      {item.description}
                    </p>
                    <div
                      data-aos="fade-up"
                      data-aos-duration="500"
                      data-aos-delay="100"
                    >
                      <button
                        className="bg-gradient-to-r from-MyMarket1 to-market transition-all duration-200
                          text-white py-2 px-4 ml-2 hover:scale-105 rounded-full"
                      >
                        Order Now
                      </button>
                    </div>
                  </div>
                  {/* Image Section */}
                  <div className="order-1 sm:order-2">
                    <div className="relative z-10">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 lg:scale-120 object-contain mx-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Wow;
