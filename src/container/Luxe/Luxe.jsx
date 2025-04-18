import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Luxe.css";

const Luxe = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.luxe01} alt="luxeoutdoor" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Our Banquet/Party Hall" />
      <div className="app__luxe-sign">
        <img src={images.luxe} alt="sign" />
      </div>

      <div className="app__luxe-content">
        <div className="app__luxe-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
            Luxe, nestled within Eden Park, is a sanctuary where elegance meets
            nature.
          </p>
        </div>
        <p className="p__opensans">
          Our sun-drenched space, with its warm wood and plush seating, offers
          refined comfort for any occasion. We tailor our versatile space to
          your vision, from corporate events to celebrations. Indulge in our
          exquisite culinary offerings, featuring rare spirits and menus crafted
          with the finest ingredients. Our dedicated team provides impeccable
          service, handling every detail so you can savor the moment. Luxe is a
          canvas for creating lasting memories. We believe in crafting
          extraordinary experiences while maintaining a commitment to
          sustainability. Discover a sanctuary where luxury and celebration
          intertwine. Contact us to plan your unforgettable event.
        </p>
        <div style={{ marginTop: "20px" }}>
          <button type="button" className="custom__button">
            Schedule a Tour
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Luxe;
