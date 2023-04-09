import React from "react";
import Common from "./Common";
import img5 from "../src/Images/img5.png";

export const Home = () => {
  return (
    <>
      <Common
        name="Grow Your Business With"
        visit="/services"
        btnname="Get Started"
        imgsrc={img5}
      />
    </>
  );
};
export default Home;
