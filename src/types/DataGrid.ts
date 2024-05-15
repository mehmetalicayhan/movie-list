export interface Column<DataType> {
  title: string;
  dataIndex: keyof DataType;
  key: keyof DataType;
  render?: (value: DataType[keyof DataType], row: DataType) => React.ReactNode;
}

export interface DataGridProps<DataType> {
  data: DataType[];
  columns: Column<DataType>[];
  rowKey: keyof DataType;
  onRowClick?: (row: DataType) => void;
  isLoading?: boolean;
  isEmpty?: boolean;
}

export interface DataGridPaginationProps {
  page: number;
  totalResults: number;
  onPageChange: (page: number) => void;
}

