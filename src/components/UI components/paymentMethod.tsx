import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import * as React from "react";
import { ChevronDownIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
const categories = [
  "KPay | Name : Thaw Zin Hong , No. 09-231231231",
  "CBPay | Name : Thaw Zin Hong , No. 09-231231231",
  "AYAPay | Name : Thaw Zin Hong , No. 09-231231231",
];

export default function paymentMethod() {
  const [open, setOpen] = React.useState(false);
  const [selectedCategory, setSelectedCategory] = React.useState<string>(
    "Select Payment Method"
  );
  return (
    <>
      <div className="border p-6 mt-6 space-y-6 rounded-md">
        <div>
          <h1 className="font-bold">Payment Method</h1>
        </div>

        {/* <DropdownMenu>
            <DropdownMenuTrigger className="w-full text-left">
              Select Payment Method
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[1000px]">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu> */}
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              id="category"
              className="w-full justify-between font-normal h-15 "
            >
              {selectedCategory ?? "Payment Method"}
              <ChevronDownIcon
                className={`transition-transform duration-200 ${
                  open ? "rotate-180" : ""
                }`}
              />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[1200px] p-0" align="start">
            <div className="flex flex-col">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={`w-full px-4 py-2 text-left text-sm font-normal  hover:bg-gray-100 dark:hover:bg-gray-700 ${
                    open === true
                      ? "bg-gray-200 dark:bg-gray-800 font-medium w-[1000px]"
                      : ""
                  }`}
                  onClick={() => {
                    setSelectedCategory(category);
                    setOpen(false);
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
}
