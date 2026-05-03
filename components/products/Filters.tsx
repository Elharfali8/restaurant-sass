// Filters.tsx

import {
  Search,
  SlidersHorizontal,
  ChevronDown,
} from "lucide-react";

type FiltersProps = {
  categories: string[];

  selectedCategory: string;

  setSelectedCategory: React.Dispatch<
    React.SetStateAction<string>
  >;

  selectedStatus: string;

  setSelectedStatus: React.Dispatch<
    React.SetStateAction<string>
  >;
};

const Filters = ({
  categories,
  selectedCategory,
  setSelectedCategory,
  selectedStatus,
  setSelectedStatus,
}: FiltersProps) => {
  return (
    <div className="flex flex-col lg:flex-row gap-3 w-full">

      {/* SEARCH */}

      <div className="relative flex-1">

        <input
          type="text"
          placeholder="Search products by name..."
          className="w-full h-12 rounded-2xl border border-gray-200 bg-gray-50 pl-4 pr-14 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
        />

        <button
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-orange-500 hover:bg-orange-600 transition p-2 rounded-xl text-white"
        >
          <Search size={18} />
        </button>

      </div>

      {/* CATEGORY SELECT */}

      <div className="relative min-w-[220px]">

        <select
          value={selectedCategory}
          onChange={(e) =>
            setSelectedCategory(e.target.value)
          }
          className="appearance-none w-full h-12 px-4 rounded-2xl border border-gray-200 bg-gray-50 shadow-sm text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400 cursor-pointer"
        >

          <option value="">
            All Categories
          </option>

          {categories.map((category) => (
            <option
              key={category}
              value={category}
            >
              {category}
            </option>
          ))}

        </select>

        <ChevronDown
          size={18}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
        />

      </div>

      {/* STATUS SELECT */}

      <div className="relative min-w-[200px]">

        <select
          value={selectedStatus}
          onChange={(e) =>
            setSelectedStatus(e.target.value)
          }
          className="appearance-none w-full h-12 px-4 rounded-2xl border border-gray-200 bg-gray-50 shadow-sm text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400 cursor-pointer"
        >

          <option value="">
            All Status
          </option>

          <option value="active">
            Active Products
          </option>

          <option value="inactive">
            Inactive Products
          </option>

        </select>

        <ChevronDown
          size={18}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
        />

      </div>

      {/* LOW STOCK */}

      <button
        className="h-12 px-4 rounded-2xl border border-gray-200 bg-gray-50 shadow-sm flex items-center justify-center gap-2 text-sm font-medium"
      >
        <SlidersHorizontal size={16} />

        Low Stock
      </button>

    </div>
  );
};

export default Filters;