import React from "react";

const AboutLuxe = () => {
  return (
    <div className="flex flex-wrap  items-start gap-12 p-12">
      <div className="w-full md:w-1/2">
        <h2 className="font-herr-von text-[100px] font-normal mb-[-55px] text-black">
          Discover
        </h2>
        <h3 className="font-source-code text-[47px] font-bold tracking-[9.4px] mb-4 text-black">
          Our Story
        </h3>
        <div className="text-yellow-500">*</div>
        <p className="font-cabin text-base leading-[27px] text-yellow-700">
          Rosa is a restaurant, bar and coffee roastery located on a busy corner
          site in Farringdon’s Exmouth Market. With glazed frontage on two sides
          of the building, overlooking the market and a bustling London
          intersection.
        </p>
        <div className="font-cabin text-base border-b-2 border-amber-600 pb-[4px] mt-4 inline-block tracking-[1.5px] text-[18px]">
          <a href="#">About Us</a>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex">
        <div className="w-1/2 mr-4">
          <img
            src="https://res.cloudinary.com/abdel-rahman-ali/image/upload/v1535988527/vertical-photo-1.jpg"
            alt="Food Photo"
            className="max-w-full rounded-md"
          />
        </div>
        <div className="w-1/2">
          <img
            src="https://res.cloudinary.com/abdel-rahman-ali/image/upload/v1535988532/vertical-photo-2.jpg"
            alt="Food Photo"
            className="max-w-full rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutLuxe;
