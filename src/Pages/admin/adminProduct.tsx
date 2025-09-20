import { PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

import ProductListTable from "./components/productListTable";
export default function AdminProductPage() {
  return (
    <>
      <div className="bg-gray-300 text-black rounded-xl p-4 px-6 mx-20 gap-6 ">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold my-4">Product Management</h1>
          <Button>
            <PlusIcon className="h-4 w-4 inline-block mr-2" /> Add Product
          </Button>
        </div>
        <div className="my-4">
          <ProductListTable />
        </div>
      </div>
    </>
  );
}
