import { useParams } from "react-router-dom";
import { productData } from "@/data/products"; // Assuming you have a products data file
import { CarouselCard } from "@/components/UI components/CarouselCard";
import Rating from "./rating";

export default function ProductDetailPage() {
  const { productId } = useParams<{ productId: string }>();
  const product = productData.find((p) => p.id === productId);

  return (
    <>
      <div className="flex flex-row items-center justify-between p-4">
        <div className="grid grid-cols-2 gap-14">
          <CarouselCard />
          <div className="flex flex-col gap-4">
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
            {product?.discount > 0 && (
              <span className="text-sm text-gray-400 line-through">
                ${product?.discount}
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
