import type { OrderUser } from "@/types";
import { MapPin, PlusCircleIcon } from "lucide-react";
import OrderUserInfo from "@/components/UI components/orderUserInfo";
import { orderUser } from "@/data/orderuser";
import { exampleOrders } from "@/data/order";
import ProductOrdered from "@/components/UI components/productOrdered";
import PaymentMethod from "@/components/UI components/paymentMethod";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "@radix-ui/react-icons";

export default function CheckOutPage() {
  const totalAmount = exampleOrders[0].totalAmount;
  const shippingFee = 5000;
  return (
    <>
      <div className="font-bold text-2xl pb-4">Checkout</div>

      <div>
        <OrderUserInfo orderUser={orderUser} />
      </div>
      <div className="mt-6 space-y-10">
        <ProductOrdered order={exampleOrders[0]} />
        <PaymentMethod />
        <div className="border p-6 mt-6 flex-col items-center justify-center gap-6 text-center space-y-6 rounded-md">
          <Button className="bg-transparent hover:bg-gray-300 text-black font-normal w-30 h-30 border dotted">
            <PlusIcon className="inline mr-2 size-20" />
          </Button>

          <h1 className="font-bold">Upload Payment Receipt</h1>
        </div>
        <div className="flex justify-end flex-col gap-4 items-end mt-6">
          <div className="text-gray-500">
            <span className=" text-lg">Merchandise Subtotal: </span>
            <span className="text-lg font-normal">{totalAmount} MMK</span>
          </div>
          <div className="text-gray-500">
            <span className="text-lg">Shipping Subtotal: </span>
            <span className="text-lg font-normal"> 5000 MMK</span>
          </div>
          <div className="text-gray-500">
            <span className=" text-lg">Total Payment: </span>
            <span className="text-lg font-normal">
              {" "}
              {totalAmount + shippingFee} MMK
            </span>
          </div>
          <Button className="bg-black hover:bg-gray-800 text-white font-normal w-40 h-12 mt-6">
            Place Order
          </Button>
        </div>
      </div>
    </>
  );
}
