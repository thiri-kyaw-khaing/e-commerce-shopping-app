import { BoxIcon, DollarSignIcon } from "lucide-react";
import CardComponent from "./components/cardComponent";
import { PersonIcon } from "@radix-ui/react-icons";

export default function AdminOverview() {
  return (
    <>
      <div className="bg-gray-400 text-black rounded-xl p-4 mx-20 flex gap-6 items-center">
        <CardComponent
          title="Total Revenue"
          amount="120,000 MMK"
          percentageChange="+5%"
          icon={
            <DollarSignIcon className="h-6 w-6 text-green-500 inline-block ml-2" />
          }
        />
        <CardComponent
          title="Total Orders"
          amount="1,200"
          percentageChange="-2%"
          icon={
            <BoxIcon className="h-6 w-6 text-green-500 inline-block ml-2" />
          }
        />
        <CardComponent
          title="Total Users"
          amount="300"
          percentageChange="+10% "
          icon={
            <PersonIcon className="h-6 w-6 text-green-500 inline-block ml-2" />
          }
        />
      </div>
    </>
  );
}
