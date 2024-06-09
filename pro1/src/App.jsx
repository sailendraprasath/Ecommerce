import React from "react";
import Navbar from "./Components/Navbar";

import Wow from "./Components/Wow";
import Products from "./Components/Products";
import AOS from "aos";
import "aos/dist/aos.css";
import TopProducts from "./Components/TopProducts";
import Banner from "./Components/Banner";
import Subscribe from "./Components/Subscribe";
import Testimonials from "./Components/Testimonial";
import Footer from "./Components/Footer";
import Popup from "./Components/Popup";
import Products2 from "./Components/Products2";
const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        <Navbar handleOrderPopup={handleOrderPopup} />
        <Wow handleOrderPopup={handleOrderPopup} />
        <Products />
        <TopProducts handleOrderPopup={handleOrderPopup} />
        <Banner />
        <Subscribe />
        <Products2 />
        <Testimonials />
        <Footer />
        <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
      </div>
    </>
  );
};

export default App;
