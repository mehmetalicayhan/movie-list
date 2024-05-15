import { Search } from "lucide-react";
import { Input } from "../ui/input";
import SelectBox from "../select-box";
import YearInput from "../year-input";

const MovieFilter = ({
  filters,
  setFilters,
}: {
  filters: { s: string; type: string; y: string };
  setFilters: (filters: { s: string; type: string; y: string }) => void;
}) => {
  return (
    <div className="flex w-full gap-2">
      <SelectBox
        value={filters.type}
        placeholder="Type"
        onChange={(value) => setFilters({ ...filters, type: value as string })}
        triggerClassName="w-1/4"
        options={[
          { value: "movie", label: "Movie" },
          { value: "series", label: "Series" },
          { value: "episode", label: "Episode" },
        ]}
      />
      <div className="relative h-10 w-1/2">
        <Search
          size={16}
          className="absolute left-3 top-1/2 z-10 -translate-y-1/2 transform text-primary"
        />
        <Input
          value={filters.s}
          defaultValue={filters.s}
          className="w-full rounded-full py-4 pl-10 pr-3 shadow-sm"
          onChange={(e) => setFilters({ ...filters, s: e.target.value })}
          placeholder="Search movies..."
        />
      </div>

      <YearInput
        value={filters.y}
        defaultValue={filters.y}
        onChange={(e) => setFilters({ ...filters, y: e.target.value })}
        className="w-1/4"
      />
    </div>
  );
};

export default MovieFilter;
