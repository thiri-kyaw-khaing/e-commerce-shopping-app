import { MapIcon } from "lucide-react";

export default function SecureShippingCard() {
  return (
    <>
      <div className="flex flex-col m-4 items-center">
        <div className=" rounded-4xl bg-black w-[60px] h-[60px] flex items-center justify-center">
          <MapIcon className="text-white w-8 h-8" />
        </div>
        <h1 className="items-center justify-center font-semibold">
          Secure Shopping
        </h1>
        <span className="text-gray-500 line-clamp-3 text-align-center ">
          Your personal and payment information is protected with
          enterprise-grade security.
        </span>
      </div>
    </>
  );
}
