import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { PlusIcon } from "lucide-react";
import { Link } from "react-router-dom";
import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";
import type { Product } from "@/types";
import type { HTMLAttributes } from "react";
import Rating from "@/Pages/Products/rating";
interface ProductCardProps extends HTMLAttributes<HTMLElement> {
  product: Product;
}
const AspectRatio = AspectRatioPrimitive.Root;
export default function ProductCard({ product, className }: ProductCardProps) {
  return (
    <Card
      className={cn("overflow-hidden rounded-lg flex flex-col p-8", className)}
    >
      <Link to={`/products/${product.id}`} className="flex-1 flex flex-col">
        <CardHeader className="border-b space-y-2">
          <AspectRatio ratio={1 / 1} className="bg-muted w-full">
            <img
              src={product.images[0].path}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </AspectRatio>
        </CardHeader>
        <CardContent className="flex-1 mt-3">
          <p className="font-semibold">{product.name}</p>
        </CardContent>
        <CardFooter className="flex flex-col  space-y-2">
          <p className="text-xs text-gray-500">{product.description}</p>
          <div className="w-full flex flex-col items-start">
            <span className="space-x-2 flex">
              <Rating rating={Number(product?.rating)} />
            </span>
            <div className="flex items-center justify-between w-full">
              <p className="items-start flex">
                {product.price} {product.currency}
              </p>
              <span className="text-sm text-gray-500">
                <div className="bg-gray-100 px-2 py-1 rounded">
                  {product.categoryName}
                </div>
              </span>
            </div>
          </div>
          {/* {product.discount > 0 && (
            <span className="text-sm text-gray-400 line-through">
              ${product.discount}
            </span>
          )} */}
        </CardFooter>
      </Link>
      <Button
        size="sm"
        disabled={product.status === "inactive"}
        className="m-2"
      >
        {product.status === "inactive" ? (
          "Sold Out"
        ) : (
          <>
            <PlusIcon className="w-4 h-4 mr-1" /> Add to Cart
          </>
        )}
      </Button>
    </Card>
  );
}
