import React from "react";

import {
  AboutUs,
  FindUs,
  Footer,
  Gallery,
  Header,
  Intro,
  Laurels,
  SpecialMenu,
  Luxe,
} from "./container";
import { Navbar } from "./components";
import "./App.css";
import FoodMenu from "./container/FoodMenu/FoodMenu";

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <FoodMenu />
    <SpecialMenu />
    <Luxe />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;
