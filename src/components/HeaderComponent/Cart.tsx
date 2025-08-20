import { ShoppingCartIcon } from "lucide-react";
import { Button } from "../ui/button";

export function GetCart() {
  return (
    <Button variant="outline" className="relative">
      <ShoppingCartIcon className="h-10 w-10" />
      {/* <span className="absolute top-0 right-0 inline-flex h-2 w-2 rounded-full bg-red-500"></span> */}
    </Button>
  );
}
