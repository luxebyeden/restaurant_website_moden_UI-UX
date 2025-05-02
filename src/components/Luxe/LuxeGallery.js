import ImageGallery from "react-image-gallery";
// import stylesheet if you're not already using CSS @import
import "react-image-gallery/styles/css/image-gallery.css";
import { images } from "../../constants";

const luxe = [
  {
    original: images.luxe01,
    thumbnail: images.luxe01, // Or a different size if you have a separate thumbnail
  },
  {
    original: images.luxe02,
    thumbnail: images.luxe02,
  },
  {
    original: images.luxe03,
    thumbnail: images.luxe03,
  },
  {
    original: images.luxe05,
    thumbnail: images.luxe05,
  },
  {
    original: images.luxe06,
    thumbnail: images.luxe06,
  },
  {
    original: images.luxe07,
    thumbnail: images.luxe07,
  },
  {
    original: images.luxe08,
    thumbnail: images.luxe08,
  },
  {
    original: images.luxe09,
    thumbnail: images.luxe09,
  },
  {
    original: images.luxe10,
    thumbnail: images.luxe10,
  },
  {
    original: images.luxe11,
    thumbnail: images.luxe11,
  },
  {
    original: images.luxe12,
    thumbnail: images.luxe12,
  },
  {
    original: images.luxe13,
    thumbnail: images.luxe13,
  },
  {
    original: images.luxe14,
    thumbnail: images.luxe14,
  },
  {
    original: images.luxe15,
    thumbnail: images.luxe15,
  },
  {
    original: images.luxe16,
    thumbnail: images.luxe16,
  },
];

export default function LuxeGallery() {
  {
    return (
      <div className="text-center p-10">
        <div className="headtext__cormorant pt-10">Our Gallery</div>
        <div className="flex justify-center">
          <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        </div>
        <div className="m-10">
          <ImageGallery items={luxe} />
        </div>
      </div>
    );
  }
}
