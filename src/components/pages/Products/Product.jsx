import React from "react";
import HeroSection from "../../HeroSection";
import { homeObjFour } from "./Data";
// import Pricing from "../../Pricing";

function Product() {
  return (
    <>
      {/* <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjTwo} />
      <Pricing /> */}
      <HeroSection {...homeObjFour} />
    </>
  );
}

export default Product;
