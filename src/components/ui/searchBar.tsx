"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export function SearchBar() {
  return (
    <div className="relative ">
      <Input type="search" placeholder="Search products" className="pl-8" />
      <Search className="absolute right-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
    </div>
  );
}
