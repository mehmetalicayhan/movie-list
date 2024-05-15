import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { Button } from "../ui/button";
import { DataGridPaginationProps } from "@/types/DataGrid";

const DataGridPagination = ({
  page,
  onPageChange,
  totalResults,
}: DataGridPaginationProps) => {
  if (!totalResults) return null;

  const totalPages = Math.ceil(totalResults / 10);

  return (
    <div className="fixed bottom-0 left-0 right-0 flex w-full items-center justify-between bg-secondary p-2 sm:static sm:bg-transparent ">
      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          className="hidden h-8 w-8 p-0 lg:flex"
          onClick={() => onPageChange(1)}
          disabled={page === 1}
        >
          <span className="sr-only">Go to first page</span>
          <ChevronsLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          className="h-8 w-8 p-0"
          onClick={() => onPageChange(page - 1)}
          disabled={page === 1}
        >
          <span className="sr-only">Go to previous page</span>
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <div className="flex h-8 w-8 items-center justify-center rounded-full border text-xs ">
          {page}
        </div>
        <Button
          variant="outline"
          className="h-8 w-8 p-0"
          onClick={() => onPageChange(page + 1)}
          disabled={page === totalPages}
        >
          <span className="sr-only">Go to next page</span>
          <ChevronRight className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          className="hidden h-8 w-8 p-0 lg:flex"
          onClick={() => onPageChange(totalPages)}
          disabled={page === totalPages}
        >
          <span className="sr-only">Go to last page</span>
          <ChevronsRight className="h-4 w-4" />
        </Button>
      </div>
      <div className="text-sm opacity-80 ">
        {totalResults} {totalResults > 1 ? "results" : "result"}
      </div>
    </div>
  );
};

export default DataGridPagination;
