import type { OrderUser } from "@/types";
import { MapPin, PlusCircleIcon } from "lucide-react";
import OrderUserInfo from "@/components/UI components/orderUserInfo";
import { orderUser } from "@/data/orderuser";
import { exampleOrder } from "@/data/order";
import ProductOrdered from "@/components/UI components/productOrdered";
import PaymentMethod from "@/components/UI components/paymentMethod";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "@radix-ui/react-icons";

export default function CheckOutPage() {
  return (
    <>
      <div className="font-bold text-2xl pb-4">Checkout</div>

      <div>
        <OrderUserInfo orderUser={orderUser} />
      </div>
      <div className="mt-6 space-y-10">
        <ProductOrdered order={exampleOrder} />
        <PaymentMethod />
        <div className="border p-6 mt-6 flex-col items-center justify-center gap-6 text-center space-y-6">
          <Button className="bg-transparent hover:bg-gray-300 text-black font-normal w-30 h-30 border dotted">
            <PlusIcon className="inline mr-2 size-20" />
          </Button>

          <h1 className="font-bold">Upload Payment Receipt</h1>
        </div>
      </div>
    </>
  );
}
