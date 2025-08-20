import { Button } from "./button";

export default function WelcomeCard() {
  return (
    <>
      <div className="relative w-full h-50 rounded-xl bg-gradient-to-b from-gray-800 to-gray-100">
        {/* Welcome text */}
        <div className="absolute pt-6 pl-8 text-4xl text-white">
          Welcome to E-commerce
        </div>
        {/* Description text */}
        <div className="absolute pt-20 pl-8 text-2xl text-white">
          Discover amazing products at unbeatable prices
        </div>
        {/* Button */}
        <div className="absolute pt-32 pl-8">
          <Button className="bg-white text-black">Shop Now</Button>
        </div>
      </div>
    </>
  );
}
