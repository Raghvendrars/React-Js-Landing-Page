import React from "react";
import HeroSection from "../../HeroSection";
import { homeObjThree } from "./Data";
// import Pricing from "../../Pricing";

function Signup() {
  return (
    <>
      {/* <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjTwo} />
      <Pricing /> */}
      <HeroSection {...homeObjThree} />
    </>
  );
}

export default Signup;
