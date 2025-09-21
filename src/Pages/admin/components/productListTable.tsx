import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DeleteIcon, EditIcon, TrashIcon } from "lucide-react";

const products = [
  {
    product: "Modern Sofa",
    category: "Furniture",
    price: "$450.00",
    stock: 12,
  },
  {
    product: "Wooden Dining Table",
    category: "Furniture",
    price: "$650.00",
    stock: 5,
  },
  {
    product: "Ergonomic Chair",
    category: "Office",
    price: "$220.00",
    stock: 20,
  },
  {
    product: "LED Desk Lamp",
    category: "Lighting",
    price: "$80.00",
    stock: 40,
  },
  {
    product: "Queen Bed Frame",
    category: "Bedroom",
    price: "$700.00",
    stock: 8,
  },
  {
    product: "Bookshelf",
    category: "Storage",
    price: "$150.00",
    stock: 15,
  },
  {
    product: "Coffee Table",
    category: "Living Room",
    price: "$180.00",
    stock: 10,
  },
];

export default function productListTable() {
  return (
    <Table>
      <TableCaption>A list of your recent products.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Product</TableHead>
          <TableHead>Categories</TableHead>
          <TableHead>Prices</TableHead>
          <TableHead className="text-right">Stock</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product) => (
          <TableRow key={product.product}>
            <TableCell className="font-medium">{product.product}</TableCell>
            <TableCell>{product.category}</TableCell>
            <TableCell>{product.price}</TableCell>
            <TableCell className="text-right">{product.stock}</TableCell>
            <TableCell className="text-right">
              <div className="flex justify-end gap-2">
                <Button variant="outline">
                  <EditIcon />
                </Button>
                <Button variant="destructive">
                  <TrashIcon />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      {/* <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter> */}
    </Table>
  );
}
