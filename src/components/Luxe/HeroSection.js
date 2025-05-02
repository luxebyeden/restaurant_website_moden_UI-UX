import { images } from "../../constants";

export default function HeroSection() {
  return (
    <div>
      <div
        className="w-full bg-center bg-cover h-screen"
        style={{
          backgroundImage: `url(${images.luxe01})`,
        }}
      >
        <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
          <div className="text-center">
            <img src={images.luxe} />
          </div>
        </div>
      </div>
    </div>
  );
}
