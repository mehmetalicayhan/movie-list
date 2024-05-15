import { Column, DataGridProps } from "@/types/DataGrid";
import { Card, CardContent, CardFooter } from "../ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import DataGridSkeleton from "./data-grid-skeleton";
import { PropsWithChildren } from "react";

const DataGrid = <DataType,>({
  data,
  columns,
  rowKey,
  isLoading,
  isEmpty,
  onRowClick,
  children,
}: DataGridProps<DataType> & PropsWithChildren) => {
  if (isLoading) {
    return <DataGridSkeleton />;
  }
  return (
    <Card>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((column: Column<DataType>) => (
                <TableCell key={String(column.key)} className="font-medium">
                  {column.title}
                </TableCell>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {isEmpty && (
              <TableRow>
                <TableCell colSpan={columns.length} className="text-center">
                  No data found
                </TableCell>
              </TableRow>
            )}
            {data?.map((row) => (
              <TableRow
                key={String(row[rowKey])}
                onClick={() => onRowClick && onRowClick(row)}
                style={{ cursor: "pointer" }}
              >
                {columns.map((column) => (
                  <TableCell key={String(column.key)}>
                    {column.render
                      ? column.render(row[column.dataIndex], row)
                      : String(row[column.dataIndex])}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter>{children}</CardFooter>
    </Card>
  );
};

export default DataGrid;
