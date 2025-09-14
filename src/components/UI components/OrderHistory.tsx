import { exampleOrders } from "@/data/order";
import { CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import ProductOrderedCard from "@/components/UI components/productOrdered";
export default function OrderHistory() {
  return (
    <div>
      {exampleOrders.map((order) => (
        <div className="flex flex-col gap-6" key={order.orderId}>
          <ProductOrderedCard order={order} />
        </div>
      ))}
    </div>
  );
}
