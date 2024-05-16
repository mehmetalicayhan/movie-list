import { Skeleton } from "../ui/skeleton";

const MovieSkeleton = () => {
  return (
    <div className="flex w-full flex-col rounded-xl md:flex-row">
      <Skeleton className="h-72 w-48" />
      <div className="flex flex-grow flex-col p-4">
        <Skeleton className="h-8 w-1/2" />
        <Skeleton className="h-6 w-1/4" />
        <Skeleton className="h-6 w-1/4" />
      </div>
    </div>
  );
};

export default MovieSkeleton;
