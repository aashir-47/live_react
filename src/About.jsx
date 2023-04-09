import React from "react";
import Common from "./Common";
import img3 from "../src/Images/img3.png";

export const About = () => {
  return (
    <>
      <Common
        name="This Is About Page with"
        visit="/contact"
        btnname="Contact US"
        imgsrc={img3}
      />
    </>
  );
};
export default About;
