import { cartItems } from "@/data/cartItems";
import type { cartItem } from "@/types";
import { Checkbox } from "@/components/ui/checkbox";
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
          <div className="border rounded-lg p-2 my-2 flex gap-4" key={item.id}>
            <div className="flex items-center  gap-6">
              <Checkbox />
              <img
                src={item.image.url}
                alt={item.name}
                className="w-[100px] h-[100px] object-cover"
              />
            </div>
            <div className="">{item.name}</div>
          </div>
        ))
      )}
    </>
  );
}
