import React, { useState, useEffect, useRef } from "react";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
import { SubHeading } from "../../components";
import "./Gallery.css";

// Replace with your Instagram API credentials
const ACCESS_TOKEN = "YOUR_INSTAGRAM_ACCESS_TOKEN"; //  Replace with your actual access token
const USER_ID = "edenpark.blr"; // Replace with your user ID
const NUM_IMAGES = 10; // Number of images to fetch

const Gallery = () => {
  const [instagramImages, setInstagramImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const scrollRef = useRef(null);

  const fetchInstagramImages = async () => {
    if (!ACCESS_TOKEN || !USER_ID) {
      setError(
        "Instagram API credentials are missing. Please provide ACCESS_TOKEN and USER_ID."
      );
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);
    try {
      // Use the Instagram Basic Display API to fetch media
      const url = `https://graph.instagram.com/v19.0/${USER_ID}/media?fields=id,caption,media_url,permalink&access_token=${ACCESS_TOKEN}&limit=${NUM_IMAGES}`;

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(
          `Failed to fetch Instagram images: ${response.status} ${response.statusText}`
        );
      }
      const data = await response.json();

      if (data.data) {
        // Map the API response to the structure used in the component
        const formattedImages = data.data.map((item) => ({
          url: item.media_url,
          caption: item.caption,
          permalink: item.permalink, // Add permalink for clickable link
        }));
        setInstagramImages(formattedImages);
      } else {
        setInstagramImages([]); // Set to empty array if no data
      }
    } catch (err) {
      // Changed 'err: any' to 'err'
      setError(
        err.message || "An error occurred while fetching Instagram images."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInstagramImages();
  }, []);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      if (direction === "left") {
        current.scrollLeft -= 300;
      } else {
        current.scrollLeft += 300;
      }
    }
  };

  if (loading) {
    return (
      <div className="app__gallery flex__center">
        <p className="p__opensans" style={{ color: "#AAA" }}>
          Loading Instagram feed...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="app__gallery flex__center">
        <p className="p__opensans" style={{ color: "#AAA" }}>
          Error: {error}
        </p>
      </div>
    );
  }

  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: "#AAA", marginTop: "2rem" }}>
          Step into a world of inspiration – explore our gallery and discover
          the culinary artistry within.
        </p>
        <button
          type="button"
          className="custom__button"
          onClick={() =>
            window.open(`https://www.instagram.com/${USER_ID}`, "_blank")
          }
        >
          View More
        </button>
      </div>

      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {instagramImages.map((image, index) => (
            <div
              className="app__gallery-images_card flex__center"
              key={`gallery_image-${index + 1}`}
            >
              <a
                href={image.permalink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={image.url} alt={`Instagram Post ${index + 1}`} />
                <BsInstagram className="gallery__image-icon" />
              </a>
            </div>
          ))}
        </div>

        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
