import { ShoppingCartIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import type { cartItem } from "@/types";
interface itemProps {
  items: cartItem[];
}
export function GetCart({ items }: itemProps) {
  return (
    <Button variant="outline" className="relative">
      <Link to="/cart">
        <ShoppingCartIcon className="h-10 w-10 text-black" />
      </Link>
      {items.length > 0 && (
        <span
          className="absolute top-0 right-0 inline-flex items-center justify-center 
                           h-4 w-4 rounded-full bg-red-500 text-white text-xs"
        >
          {items.length}
        </span>
      )}
      {/* <span className="absolute top-0 right-0 inline-flex h-2 w-2 rounded-full bg-red-500"></span> */}
    </Button>
  );
}
