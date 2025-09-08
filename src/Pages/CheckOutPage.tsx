import type { OrderUser } from "@/types";
import { MapPin } from "lucide-react";
import OrderUserInfo from "@/components/UI components/orderUserInfo";
import { orderUser } from "@/data/orderuser";

export default function CheckOutPage() {
  return (
    <>
      <div className="font-bold text-2xl pb-4">Checkout</div>

      <div>
        <OrderUserInfo orderUser={orderUser} />
      </div>
    </>
  );
}
