import { PropsWithChildren } from "react";

const MovieInfoBox = ({
  icon,
  children,
}: { icon?: React.ReactNode } & PropsWithChildren) => {
  return (
    <div className="flex items-center justify-center  gap-1 rounded bg-gray-200 p-2 text-xs opacity-65">
      {icon}
      {children}
    </div>
  );
};

export default MovieInfoBox;
