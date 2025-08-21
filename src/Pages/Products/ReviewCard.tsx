import { useParams } from "react-router-dom";
import Rating from "./rating";
import { productData } from "@/data/products";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function ReviewCard() {
  const { productId } = useParams<{ productId: string }>();
  const product = productData.find((p) => p.id === productId);
  return (
    <div className="p-6 border rounded-lg shadow-sm bg-white">
      <h2 className="text-xl font-semibold mb-4 ml-4">Customer Reviews</h2>

      {/* Example review */}
      {/* <div className="flex items-start space-x-3">
          <div className="flex-shrink-0"></div>
          <div>
            <h3 className="font-semibold">John Doe</h3>
            <Rating rating={4.5} />
            <p className="text-gray-600 mt-1">
              Great product! Really enjoyed using it.
            </p>
          </div>
        </div> */}
      <div className="p-6 border rounded-lg bg-gray-200 m-4">
        <div className="flex flex-col items-start space-x-3 space-y-2">
          <h1>Write a review</h1>
          <div className="flex items-center space-x-2">
            <span>Rating:</span>
            <Rating rating={Number(product?.rating)} />
          </div>
          <Textarea
            placeholder="Write your review here..."
            className="w-full mt-2 bg-white"
          />
        </div>
      </div>
      <div className="flex items-center space-x-2  pl-4">
        <Button className="mt-4">Submit Review</Button>
      </div>

      {/* Example reviews */}
      <Separator className="bg-gray-300 w-full my-4" />
      {/* Add more reviews as needed */}
      <div>
        {product?.reviews && product.reviews.length > 0 ? (
          product.reviews.map((review) => (
            <div
              key={review.comment}
              className="flex items-start space-x-3 mb-4"
            >
              <div className="flex-shrink-0"></div>
              <div className="border p-4 rounded-lg bg-white w-[400px]">
                <div className="flex items-center space-x-2 justify-between">
                  <h3 className="font-semibold">{review?.userName}</h3>
                  <Rating rating={review.rating} />
                </div>
                <div className="border-t mt-2 rounded-lg bg-gray-300 ">
                  <p className="flex text-gray-600 mt-1 p-4 items-center ">
                    {review.comment}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="flex text-gray-500 items-center justify-center h-32">
            No reviews yet.Be the first to review this product.
          </p>
        )}
      </div>
    </div>
  );
}
