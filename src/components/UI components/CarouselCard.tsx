import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { HTMLAttributes } from "react";
import type { Product } from "@/types";
interface ProductDetailProps extends HTMLAttributes<HTMLElement> {
  product?: Product;
}
export function CarouselCard({ product }: ProductDetailProps) {
  if (!product) {
    return <p className="text-gray-500">No product found.</p>;
  }
  return (
    <Carousel
      className="w-full max-w-xs"
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent className="">
        {product.images.map((img) => (
          <CarouselItem key={img.id}>
            <Card>
              <CardContent className="flex items-center justify-center p-2">
                <img
                  src={img.path}
                  alt={product.name}
                  className="rounded-lg object-cover w-full h-80"
                />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
