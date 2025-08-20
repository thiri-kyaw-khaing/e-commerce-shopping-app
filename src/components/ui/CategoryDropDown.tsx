"use client";

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
  "Electronics",
  "Clothing",
  "Home and Garden",
  "Sports",
  "Books",
];

export default function CategoryDropdown() {
  const [open, setOpen] = React.useState(false);
  const [selectedCategory, setSelectedCategory] =
    React.useState<string>("All Categories");

  return (
    <div className="flex flex-col gap-3">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id="category"
            className="w-40 justify-between font-normal bg-gray-200"
          >
            {selectedCategory ?? "All Categories"}
            <ChevronDownIcon
              className={`transition-transform duration-200 ${
                open ? "rotate-180" : ""
              }`}
            />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-40 p-0" align="start">
          <div className="flex flex-col">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`w-full px-4 py-2 text-left text-sm font-normal  hover:bg-gray-100 dark:hover:bg-gray-700 ${
                  open === true
                    ? "bg-gray-200 dark:bg-gray-800 font-medium"
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
  );
}
