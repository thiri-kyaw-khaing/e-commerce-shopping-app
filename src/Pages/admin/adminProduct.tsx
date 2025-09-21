import { PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import ProductListTable from "./components/productListTable";
export default function AdminProductPage() {
  return (
    <>
      <div className="bg-gray-300 text-black rounded-xl p-4 px-6 mx-20 gap-6 ">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold my-4">Product Management</h1>
          <Link to="/admin/products/new">
            <Button>
              <PlusIcon className="mr-2 h-4 w-4" />
              Add New Product
            </Button>
          </Link>
        </div>
        <div className="my-4">
          <ProductListTable />
        </div>
      </div>
    </>
  );
}
