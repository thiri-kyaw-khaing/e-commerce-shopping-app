import { Button } from "@/components/ui/button";
import { ArrowBigLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function AdminProductCreatePage() {
  return (
    <>
      <div className="mx-16">
        <Link to="/admin/products">
          <Button variant={"outline"} className="m-4">
            {" "}
            <ArrowBigLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
        </Link>
      </div>
      <div className="bg-gray-300 text-black rounded-xl p-4 px-6 mx-20 gap-6 ">
        <h1 className="text-xl font-bold my-4">Add New Product</h1>
      </div>
    </>
  );
}
