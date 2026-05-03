import { LucideIcon } from "lucide-react";

type SummaryCardProps = {
  icon: LucideIcon;
  title: string;
  value: number;
  color: string;
};

const colorClasses: Record<string, string> = {
  blue: "bg-blue-200 text-blue-600",
  green: "bg-green-200 text-green-600",
  orange: "bg-orange-200 text-orange-600",
  red: "bg-red-200 text-red-600",
};

const SummaryCard = ({
  icon: Icon,
  title,
  value,
  color,
}: SummaryCardProps) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-xl flex items-center gap-6">
      <div
        className={`grid place-items-center w-12 h-12 rounded-full ${
          colorClasses[color]
        }`}
      >
        <Icon size={24} />
      </div>

      <div>
        <p className="text-gray-500">
          {title}
        </p>

        <h2 className="text-2xl font-bold">
          {value}
        </h2>
      </div>
    </div>
  );
};

export default SummaryCard;