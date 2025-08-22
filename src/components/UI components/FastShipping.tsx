import { MailIcon } from "lucide-react";

export default function FastShippingCard() {
  return (
    <>
      <div className="flex flex-col m-4 items-center">
        <div className=" rounded-4xl bg-black w-[60px] h-[60px] flex items-center justify-center">
          <MailIcon className="text-white w-8 h-8" />
        </div>
        <h1 className="items-center justify-center font-semibold">
          Fast Shipping
        </h1>
        <span className="text-gray-500 line-clamp-3">
          Free shipping on orders over $50 with delivery in 3-5 business days.
        </span>
      </div>
    </>
  );
}
