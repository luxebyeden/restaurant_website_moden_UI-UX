import React from "react";
import { images } from "../../constants";
import {
  FaBirthdayCake,
  FaGlassCheers,
  FaBuilding,
  FaHeart,
  FaMusic,
  FaStar,
} from "react-icons/fa";

export default function LuxeEvents() {
  return (
    <div>
      <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
        <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
          <img
            className="object-cover w-full h-full max-w-2xl rounded-md"
            src={images.luxe05}
            alt="outside photo"
          />
        </div>

        <div className="w-full lg:w-1/2">
          <div className="lg:max-w-lg">
            <h1 className="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl headtext__cormorant">
              Celebrate Life's Moments at Luxe
            </h1>
            <img src={images.spoon} alt="about_spoon" className="spoon__img" />
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Experience unparalleled elegance for every special occasion.
              Create lasting memories in our sophisticated setting.
            </p>
            <div className="grid gap-6 mt-8 sm:grid-cols-2">
              <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                <FaHeart className="w-5 h-5 mx-3 text-white" />
                <span className="mx-3 font-medium">Anniversaries</span>
              </div>

              <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                <FaBirthdayCake className="w-5 h-5 mx-3 text-white" />
                <span className="mx-3 font-medium">Birthdays</span>
              </div>

              <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                <FaBuilding className="w-5 h-5 mx-3 text-white" />
                <span className="mx-3 font-medium">Corporate Events</span>
              </div>

              <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                <FaGlassCheers className="w-5 h-5 mx-3 text-white" />
                <span className="mx-3 font-medium">Engagements</span>
              </div>

              <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                <FaMusic className="w-5 h-5 mx-3 text-white" />
                <span className="mx-3 font-medium">After Parties</span>
              </div>

              <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                <FaStar className="w-5 h-5 mx-3 text-white" />
                <span className="mx-3 font-medium">Milestone Celebrations</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
