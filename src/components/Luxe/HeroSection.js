import { FaAsterisk } from "react-icons/fa";

export default function HeroSection() {
  return (
    <header
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/abdel-rahman-ali/image/upload/v1535988534/header.jpg)",
      }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
        <h2 className="font-cursive text-6xl mb-4">Welcome</h2>
        <h1 className="text-7xl font-bold tracking-wide">THE ROSA</h1>
        <div className="flex items-center justify-center space-x-4 my-6">
          <div className="w-24 h-0.5 bg-white"></div>
          <FaAsterisk />
          <div className="w-24 h-0.5 bg-white"></div>
        </div>
        <span className="text-lg mb-6">Ready To Be Opened</span>
        <button className="bg-white text-black px-6 py-2 rounded hover:bg-yellow-500">
          Explore
        </button>
      </div>
    </header>
  );
}
