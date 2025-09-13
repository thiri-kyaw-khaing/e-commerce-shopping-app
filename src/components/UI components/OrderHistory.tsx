import { exampleOrder, exampleOrder2 } from "@/data/order";
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
    <div className="flex flex-col gap-6">
      <ProductOrderedCard order={exampleOrder} />
      <ProductOrderedCard order={exampleOrder2} />
    </div>
  );
}
