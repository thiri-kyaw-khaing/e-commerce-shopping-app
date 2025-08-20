import { useParams } from "react-router-dom";
import { productData } from "@/data/products"; // Assuming you have a products data file
import { CarouselCard } from "@/components/UI components/CarouselCard";
import Rating from "./rating";
import { Separator } from "@/components/ui/separator";
import AddToCart from "./AddToCart";
export default function ProductDetailPage() {
  const { productId } = useParams<{ productId: string }>();
  const product = productData.find((p) => p.id === productId);

  return (
    <>
      <div className="grid grid-cols-3 gap-2">
        <div>
          <CarouselCard />
        </div>
        <div className="flex flex-col gap-3 w-full col-span-2 p-4">
          <span className="text-sm text-gray-500">
            <div className="bg-gray-100 px-2 py-1 rounded w-fit">
              {product?.categoryName}
            </div>
          </span>
          <h1 className="text-3xl font-semibold">{product?.name}</h1>
          <span className="space-x-2 flex">
            <Rating rating={Number(product?.rating)} />
          </span>
          {/* Price tag */}
          <p>${product?.price}</p>
          {product?.discount !== undefined && product.discount > 0 && (
            <span className="text-sm text-gray-400 line-through">
              ${product?.discount}
            </span>
          )}
          {/* Seperator */}

          <Separator className="bg-gray-300 w-full" />

          <div className="flex flex-col gap-2">
            {/* Description */}
            <h2 className="text-xl font-semibold">Description</h2>
            <p className="text-gray-600">{product?.description}</p>
            {/* Availability */}
            <h2 className="text-xl font-semibold">Availability</h2>
            {/* stock button */}
            <div className="bg-gray-100 px-2 py-1 rounded w-fit text-gray-800">
              ${product?.inventory} in stock
            </div>
          </div>
          <Separator className="bg-gray-300 w-full" />

          {/* Quantity */}
          <span>Quantity:</span>
          <AddToCart showBuyNow={product?.status === "active" ? true : false} />
        </div>
      </div>
    </>
  );
}
