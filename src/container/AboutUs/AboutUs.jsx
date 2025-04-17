import React from "react";

import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="g letter" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">Gourmet Experience</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Bestowing an enchanting setting with desirable seating and cozy
          gazebos at any time of the day, from lunch to dinner, including
          tea-time, cocktails, laid-back bites and effortless sips, Eden Park is
          sleek and refreshing. Presenting a wealth of authentic Indian, Chinese
          and Italian dishes freshly interpreted to leaf through delicious
          apéritif and digéstif at the familiar lounge bar and exquisite hookah
          salon, the restaurant is an all-time classic with a view. Delicately
          curated with a passion for hospitality, the staff, the amenities and
          the service sparkle with the unmistakable vibrancy of the capital's
          diverse panorama.
        </p>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Charted Memories</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Equipped with awe-inspiring infrastructure and plenty of natural
          light, it is designed to not just fit the purpose but to create the
          right ambience. Birthdays, reunions, date nights, proposals, kitty
          parties, meetings, team outings, family dinners, etc. every event
          turns into a celebration at Eden Park. Recreation and the spirit of
          sportsmanship echoes through the Jelly Garden as real-time tournaments
          are screened. Tailored to seat 400 patrons across sections of 4 and 8
          counter tops, the restaurant even shelters 3 unique pavilions to host
          private ensembles of 15, 20 and 30 respectively. Valet parking service
          is available at the entrance.
        </p>
      </div>
    </div>
  </div>
);

export default AboutUs;
