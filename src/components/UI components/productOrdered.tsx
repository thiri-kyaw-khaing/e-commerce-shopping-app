import type { Order } from "@/types";
import { MapPin } from "lucide-react";
const formatMMK = (n: number) => `${n.toLocaleString("en-US")} MMK`;
interface OrderProps {
  order: Order;
}
export default function productOrdered({ order }: OrderProps) {
  return (
    <>
      <div className="border p-6 space-y-6 ">
        <div className="flex items-center gap-4 justify-between">
          <span className="font-bold">Product Ordered</span>
          <h1>Unit Price</h1>
          <h1>Amount</h1>
          <h1>Item Subtotal</h1>
        </div>
        <div className="flex items-center">
          <div>
            <div className="flex items-center gap-4">
              <img
                src={order.items[0].image.url}
                alt={order.items[0].name}
                className="w-[100px] h-[100px] object-cover"
              />
              <div className="space-y-2">
                <h1>{order.items[0].name}</h1>
                <span className="text-gray-500">{order.items[0].category}</span>
              </div>
            </div>
          </div>
          <div className="ml-85 mr-10 flex items-center gap-80 w-full">
            <h1>{formatMMK(order.items[0].price)}</h1>
            <h1>{order.items[0].quantity}</h1>
            <h1>{formatMMK(order.items[0].price * order.items[0].quantity)}</h1>
          </div>
          {/* <h1>{formatMMK(order.items[0].itemSubtotal)}</h1> */}
        </div>
      </div>
    </>
  );
}
