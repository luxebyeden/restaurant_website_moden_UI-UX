import React from "react";

import { SubHeading, MenuItem } from "../../components";

import { images, data } from "../../constants";
import "./FoodMenu.css";

const FoodMenu = () => (
  <div className="app__foodMenu app__bg flex__center section__padding" id="menu">
    <div className="app__foodMenu-title">
      <SubHeading title="Menu That Fits You Palatte" />
      <h1 className="headtext__cormorant">Eden's Special</h1>
    </div>
    <div className="app__foodMenu-menu">
      <div className="app__foodMenu-menu_cocktails flex__center">
        <p className="app__foodMenu-menu_heading">
          Fiery Flavors of The Deccan
        </p>
        <div className="app__foodMenu_menu_items">
          {data.andhra.map((andhra, index) => (
            <MenuItem
              key={andhra.title + index}
              title={andhra.title}
              // price={andhra.price}
              tags={andhra.tags}
            />
          ))}
        </div>
      </div>

      <div className="app__foodMenu-menu_img">
        <img src={images.chutney} alt="menu img" />
      </div>

      <div className="app__foodMenu-menu_cocktails flex__center">
        <p className="app__foodMenu-menu_heading">
          Imperial Flavors of the North
        </p>
        <div className="app__foodMenu_menu_items">
          {data.north.map((north, index) => (
            <MenuItem
              key={north.title + index}
              title={north.title}
              // price={north.price}
              tags={north.tags}
            />
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: "15px" }}>
      <button type="button" className="custom__button">
        View More
      </button>
    </div>
  </div>
);

export default FoodMenu;
