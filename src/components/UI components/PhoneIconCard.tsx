import { PhoneCallIcon } from "lucide-react";

export default function PhoneIconCard() {
  return (
    <>
      <div className="flex flex-col m-4 items-center text-center space-y-4">
        <div className=" rounded-4xl bg-black w-[60px] h-[60px] flex items-center justify-center">
          <PhoneCallIcon className="text-white w-8 h-8" />
        </div>
        <h1 className="items-center justify-center font-semibold">
          24/7 support
        </h1>
        <span className="text-gray-500 line-clamp-3">
          Our customer service team is available round the clock to help you.
        </span>
      </div>
    </>
  );
}
