import { cartItems } from "@/data/cartItems";
import type { cartItem } from "@/types";

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
          <div className="border rounded-lg p-2 my-2" key={item.id}>
            {item.name}
          </div>
        ))
      )}
    </>
  );
}
