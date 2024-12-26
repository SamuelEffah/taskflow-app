import {
  type ColumnDef,
  Table,
  type TableOptions,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getExpandedRowModel,
  getFilteredRowModel,
  getGroupedRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useMemo } from "react";
import GridCell from "../components/cell";

export interface BaseGridProps<TData> {
  data: TData[];
  columns: TableOptions<TData>["columns"];
}

function useBaseGrid<TData>({ data, columns }: BaseGridProps<TData>) {
  const defaultColumn = useMemo<Partial<ColumnDef<TData, unknown>>>(() => {
    return {
      cell: GridCell,
    };
  }, []);

  return useReactTable({
    data,
    columns,
    defaultColumn,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    initialState: {
      columnFilters: [],
      columnOrder: [],
      sorting: [],
      rowSelection: {},
      columnSizing: {},
      globalFilter: [],
      columnPinning: {},
      columnVisibility: {},
    },
  });
}

export default useBaseGrid;
