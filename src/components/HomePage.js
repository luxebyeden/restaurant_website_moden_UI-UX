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
import ContactForm from "./ContactForm";

const HomePage = () => (
  <div className="app__bg">
    <Header />
    <AboutUs />
    <FoodMenu />
    <SpecialMenu />
    <Luxe />
    <Intro />
    <Laurels />
    <Gallery />
    
    <ContactForm/>
    <FindUs />
    
  </div>
);

export default HomePage;
