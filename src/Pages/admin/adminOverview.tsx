import { DollarSignIcon } from "lucide-react";
import CardComponent from "./components/cardComponent";

export default function AdminOverview() {
  return (
    <>
      <div className="bg-gray-400 text-black rounded-xl p-4 mx-20">
        <CardComponent
          title="Total Revenue"
          amount="120,000 MMK"
          percentageChange="+5% from last month"
          icon={
            <DollarSignIcon className="h-6 w-6 text-green-500 inline-block ml-2" />
          }
        />
      </div>
    </>
  );
}
