import { isEmpty } from "@/lib/utils";

interface DetailListItem {
  title: string;
  value: string | React.ReactNode;
}
interface MovieDetailListProps {
  items: DetailListItem[];
}

const MovieDetailList = ({ items }: MovieDetailListProps) => {
  return (
    <>
      <div className="flex flex-col gap-2 text-sm">
        {items.map(
          (item, index) =>
            !isEmpty(item.value) && (
              <div key={index} className="flex items-center  gap-4">
                <span className="w-32 text-gray-400">{item.title}</span>
                <span>{item.value}</span>
              </div>
            ),
        )}
      </div>
    </>
  );
};

export default MovieDetailList;
