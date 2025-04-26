import React from "react";

import {
  AboutUs,
  FindUs,
  Gallery,
  Header,
  Intro,
  Laurels,
  SpecialMenu,
  Luxe,
} from "../container";
import FoodMenu from "../container/FoodMenu/FoodMenu";

const HomePage = () => (
  <div>
    <Header />
    <AboutUs />
    <FoodMenu />
    <SpecialMenu />
    <Luxe />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    
  </div>
);

export default HomePage;
