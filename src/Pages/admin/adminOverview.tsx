import { BoxIcon, DollarSignIcon } from "lucide-react";
import CardComponent from "./components/cardComponent";
import { PersonIcon } from "@radix-ui/react-icons";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import SalesChart from "@/components/charts/salechart";
export default function AdminOverview() {
  return (
    <>
      <div className="bg-gray-300 text-black rounded-xl p-8 mx-20 gap-6 ">
        <div className="flex gap-6 my-4">
          <CardComponent
            title="Total Revenue"
            amount="120,000 MMK"
            percentageChange="+5%"
            icon={<DollarSignIcon className="h-6 w-6  inline-block ml-2" />}
          />
          <CardComponent
            title="Total Orders"
            amount="1,200"
            percentageChange="-2%"
            icon={<BoxIcon className="h-6 w-6  inline-block ml-2" />}
          />
          <CardComponent
            title="Total Users"
            amount="300"
            percentageChange="+10% "
            icon={<PersonIcon className="h-6 w-6  inline-block ml-2" />}
          />
        </div>
        <h1 className="text-xl font-bold my-8">Sales Analytics</h1>
        <div className="bg-white p-6 rounded-lg space-y-2  shadow-md">
          <div className="p-6 space-y-6 w-full">
            <Card className="w-[1000px]">
              <CardHeader>
                <CardTitle>Monthly Sales</CardTitle>
              </CardHeader>
              <CardContent>
                <SalesChart />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
