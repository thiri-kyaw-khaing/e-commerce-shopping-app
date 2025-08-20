import CategoryDropDown from "@/components/ui/CategoryDropDown";
import NameDropDown from "@/components/ui/NameDropDown";
import WelcomeCard from "@/components/ui/WelcomeCard";
import ProductCard from "./Products/ProductCard";
import { productData } from "@/data/products";
export default function HomePage() {
  return (
    <>
      <div>
        <WelcomeCard />
        <div className="mt-8 flex justify-between">
          <CategoryDropDown />
          <NameDropDown />
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-4 w-full">
          {productData.map((item: any) => (
            <ProductCard key={item.id} product={item} className="" />
          ))}
        </div>
      </div>
    </>
  );
}
