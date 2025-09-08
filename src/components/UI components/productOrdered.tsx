import type { OrderUser } from "@/types";
import { MapPin } from "lucide-react";

export default function productOrdered() {
  return (
    <>
      <div className="border p-6 space-y-6">
        <div className="flex items-center gap-4 justify-between">
          <span className="font-bold">Product Ordered</span>
          <h1>Unit Price</h1>
          <h1>Amount</h1>
          <h1>Item Subtotal</h1>
        </div>
        <div className="flex items-center gap-4 justify-between">
          <span className="font-bold">Product Ordered</span>
          <h1>Unit Price</h1>
          <h1>Amount</h1>
          <h1>Item Subtotal</h1>
        </div>
      </div>
    </>
  );
}
