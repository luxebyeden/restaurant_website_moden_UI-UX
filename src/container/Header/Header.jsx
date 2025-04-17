import React from "react";
import { SubHeading } from "../../components";

import { images } from "../../constants";
import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Bengaluru's Hidden Nest" />
      <h1 className="app__header-h1">The Key To Fine Dining</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Braving the wrath of urbanization, crowned at the crux of majestic skyscrapers, nestled away in a green haven with a dash of old city charm is Eden Park, a timeless beauty. Established on 6th May 1995, this restaurant garden offers a sublime slice of modern minimalism with an emphasis on barefoot tradition and top-level gastronomy. Sheltering a landscape of seasonal trees aged 80+ years, it is home to tropical butterflies, rare birds, and the rhythms of camouflaged fauna.
      </p>
      <button type="button" className="custom__button">
        Explore Menu
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
