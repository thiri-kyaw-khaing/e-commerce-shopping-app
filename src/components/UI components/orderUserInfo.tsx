import type { OrderUser } from "@/types";
import { MapPin } from "lucide-react";

interface orderUserProps {
  orderUser: OrderUser;
}

export default function orderUserInfo({ orderUser }: orderUserProps) {
  return (
    <>
      <div className="border p-6 space-y-6 rounded-md">
        <div className="flex items-center gap-4">
          <MapPin className="h-6 w-6 text-black" />
          <span className=" text-md">Shipping Address</span>
        </div>

        <div className=" flex-cols space-y-2">
          <div className="font-semibold text-md mb-2 ">
            <h1>{orderUser.fullName}</h1>
            <span>{orderUser.phone}</span>
            <h1 className="">{orderUser.address}</h1>
          </div>
        </div>
      </div>
    </>
  );
}
