import { cn } from "@/lib/utils";

interface ImagePlaceholderProps {
  width: number;
  height: number;
  className?: string;
}

const ImagePlaceholder = ({
  width,
  height,
  className,
}: ImagePlaceholderProps) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-lg bg-gray-200",
        `w-${width}`,
        `h-${height}`,
        className,
      )}
    >
      No Image
    </div>
  );
};

export default ImagePlaceholder;
