import { Skeleton } from "../ui/skeleton";

const MovieSkeleton = () => {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col rounded-xl md:flex-row">
      <Skeleton className="h-80 w-60" />
      <div className="flex flex-grow flex-col gap-2 p-4">
        <div className="flex items-center justify-between">
          <Skeleton className="h-8 w-1/2" />
          <Skeleton className="h-8 w-1/4" />
        </div>
        <Skeleton className="h-4 w-1/4" />
        <Skeleton className="h-24 w-full" />
        <div className="flex gap-24">
          <Skeleton className="h-8 w-1/6" />
          <Skeleton className="h-8 w-1/3" />
        </div>
        <div className="flex gap-24">
          <Skeleton className="h-8 w-1/6" />
          <Skeleton className="h-8 w-1/3" />
        </div>
        <div className="flex gap-24">
          <Skeleton className="h-8 w-1/6" />
          <Skeleton className="h-8 w-1/3" />
        </div>
      </div>
    </div>
  );
};

export default MovieSkeleton;
