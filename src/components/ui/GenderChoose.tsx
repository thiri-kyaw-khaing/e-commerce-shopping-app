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

const genders = ["Male", "Female", "Other"];

export function GenderDropdown() {
  const [open, setOpen] = React.useState(false);
  const [selectedGender, setSelectedGender] = React.useState<
    string | undefined
  >(undefined);

  return (
    <div className="flex flex-col gap-3">
      <Label htmlFor="gender" className="px-1">
        Gender
      </Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id="gender"
            className="w-40 justify-between font-normal bg-gray-200"
          >
            {selectedGender ?? "Select gender"}
            <ChevronDownIcon
              className={`transition-transform duration-200 ${
                open ? "rotate-180" : ""
              }`}
            />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-40 p-0" align="start">
          <div className="flex flex-col">
            {genders.map((gender) => (
              <button
                key={gender}
                type="button"
                className={`w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 ${
                  selectedGender === gender
                    ? "bg-gray-200 dark:bg-gray-800 font-medium"
                    : ""
                }`}
                onClick={() => {
                  setSelectedGender(gender);
                  setOpen(false);
                }}
              >
                {gender}
              </button>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
