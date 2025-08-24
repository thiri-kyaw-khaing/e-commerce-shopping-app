import { cartItems } from "@/data/cartItems";
import type { cartItem } from "@/types";
import { Checkbox } from "@/components/ui/checkbox";
import AddToCart from "./Products/AddToCart";
import CartQuantity from "@/components/UI components/CartQuantity";
import { DeleteIcon, Trash2Icon } from "lucide-react";
import { TrashIcon } from "@radix-ui/react-icons";
interface cartProps {
  items?: cartItem[];
}

export default function ShoppingCartPage({ items = cartItems }: cartProps) {
  return (
    <>
      {/* <div className="font-bold text-2xl">Shopping cart</div>
      {items.map((item) => (
        <div className="border rounded-lg" key={item.id}>
          {item.name}
        </div>
      ))} */}
      <div className="font-bold text-2xl">Shopping cart</div>
      {items.length === 0 ? (
        <p className="text-center">Your cart is empty</p>
      ) : (
        items.map((item) => (
          <div className="m-6">
            <div
              className="border rounded-lg p-2 my-2 flex gap-4"
              key={item.id}
            >
              <div className="flex items-center  gap-6">
                <Checkbox />
                <img
                  src={item.image.url}
                  alt={item.name}
                  className="w-[100px] h-[100px] object-cover"
                />
              </div>
              <div className="space-y-2">
                <h1>{item.name}</h1>
                <span className="text-gray-500">{item.category}</span>
                <div className="flex mt-2 font-semibold gap-40">
                  <h1>{item.price} MMK</h1>
                  <div className="flex gap-2">
                    <span>Quantity:</span>
                    <CartQuantity />
                  </div>
                  <Trash2Icon className="size-6 ml-50 text-red-500" />
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
}
