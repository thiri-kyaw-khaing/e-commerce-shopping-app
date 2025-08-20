"use client";

import * as React from "react";
import { ChevronDownIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const names = ["Price:low to high", "Price:high to low", "Highest Rated"];

export default function CategoryDropdown() {
  const [open, setOpen] = React.useState(false);
  const [selectedName, setSelectedName] = React.useState<string>("Names");

  return (
    <div className="flex flex-col gap-3">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id="category"
            className="w-40 justify-between font-normal bg-gray-200"
          >
            {selectedName ?? "Names"}
            <ChevronDownIcon
              className={`transition-transform duration-200 ${
                open ? "rotate-180" : ""
              }`}
            />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-40 p-0" align="start">
          <div className="flex flex-col">
            {names.map((name) => (
              <button
                key={name}
                type="button"
                className={`w-full px-4 py-2 text-left text-sm font-normal hover:bg-gray-100 dark:hover:bg-gray-700 ${
                  open === true ? "bg-gray-200 dark:bg-gray-800" : ""
                }`}
                onClick={() => {
                  setSelectedName(name);
                  setOpen(false);
                }}
              >
                {name}
              </button>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
