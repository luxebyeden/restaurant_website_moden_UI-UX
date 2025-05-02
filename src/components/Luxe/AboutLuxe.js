import React from "react";
import { images } from "../../constants";

export default function AboutLuxe() {
  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
            <div>
              <div className="max-w-lg md:max-w-none text-white">
                <h2 className="text-2xl font-semibold sm:text-3xl headtext__cormorant">
                  A Reflection of You
                </h2>

                <img
                  src={images.spoon}
                  alt="about_spoon"
                  className="spoon__img"
                />

                <p className="mt-4 p__opensans">
                  Poised in the heart of Eden Park is an entourage of beauty,
                  luxury and sophistication. Wrapped around 2500 sq. ft. of
                  quintessential lifestyle, elegant interiors, contemporary
                  textures, swathes of natural sunlight, twinkling night lights,
                  and picture perfect panoramas of nature, Luxe is synonymous to
                  opulence, grandeur and everything you envision for an
                  unforgettable event.
                  <br />
                  <br />
                  Imagine your guests stepping into a space where sophistication
                  meets seamless functionality. The elegant interiors provide a
                  versatile backdrop, easily transforming to suit your unique
                  style and theme, whether it's a chic cocktail reception, a
                  grand banquet, or an intimate celebration. Natural sunlight
                  floods the space during the day, creating an airy and inviting
                  ambiance, while the twinkling city lights at night add a touch
                  of magic and romance.
                </p>
              </div>
            </div>

            <div>
              <img
                src={images.luxe14}
                className="rounded"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
