import { MapIcon, MapPinIcon } from "lucide-react";

export default function SecureShippingCard() {
  return (
    <>
      <div className="flex flex-col m-4 items-center text-center space-y-4">
        <div className=" rounded-4xl bg-black w-[60px] h-[60px] flex items-center justify-center">
          <MapPinIcon className="text-white w-8 h-8" />
        </div>
        <h1 className="items-center justify-center font-semibold">
          Secure Shopping
        </h1>
        <span className="block text-gray-500 line-clamp-3">
          Your personal and payment information is protected with
          enterprise-grade security.
        </span>
      </div>
    </>
  );
}
