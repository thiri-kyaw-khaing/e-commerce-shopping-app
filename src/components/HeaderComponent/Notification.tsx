import { Bell } from "lucide-react";
import { Button } from "../ui/button";

export function GetNoti() {
  return (
    <Button variant="outline" className="relative">
      <Bell className="h-10 w-10" />
      <span className="absolute top-0 right-0 inline-flex h-2 w-2 rounded-full bg-red-500"></span>
    </Button>
  );
}
