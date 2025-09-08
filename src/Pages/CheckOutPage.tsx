import { MapPin } from "lucide-react";

export default function CheckOutPage() {
  return (
    <>
      <div className="font-bold text-2xl pb-4">Checkout</div>

      <div className="border p-6 space-y-6">
        <div className="flex items-center gap-4">
          <MapPin className="h-6 w-6 text-black" />
          <span className=" text-md">Shipping Address</span>
        </div>

        <div>
          <span></span>
        </div>
      </div>
    </>
  );
}
