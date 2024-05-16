import { Skeleton } from "../ui/skeleton";

const DataGridSkeleton = () => {
  return (
    <div className="flex w-full flex-col space-y-2">
      <Skeleton className="h-8 w-full rounded-lg" />
      <Skeleton className="min-h-[600px] w-full rounded-lg" />
      <div className="flex items-center justify-between ">
        <Skeleton className="h-6 w-[250px]" />
        <Skeleton className="h-6 w-[200px]" />
      </div>
    </div>
  );
};

export default DataGridSkeleton;
