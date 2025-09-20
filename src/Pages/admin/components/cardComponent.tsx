import { DollarSignIcon } from "lucide-react";

export default function CardComponent({
  title,
  amount,
  percentageChange,
  icon,
}: {
  title?: string;
  amount?: string;
  percentageChange?: string | number;
  icon?: React.ReactNode;
}) {
  return (
    <>
      <div className="bg-white p-4 rounded-lg space-y-2 w-64 shadow-md">
        <h2 className="text-lg font-semibold mb-2 text-gray-700">{title}</h2>
        <div className="flex items-center justify-between">
          <p className="text-2xl font-bold text-black">{amount}</p>
          {icon}
        </div>
        <p
          className={`text-sm ${
            parseFloat(percentageChange) >= 0
              ? "text-green-500"
              : "text-red-500"
          }`}
        >
          {percentageChange}
        </p>
      </div>
    </>
  );
}
