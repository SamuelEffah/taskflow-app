import {
  Cell,
  CellContext,
  type Column,
  Row,
  Table,
  TableOptions,
} from "@tanstack/react-table";
import {
  type ReactNode,
  Ref,
  type TdHTMLAttributes,
  useMemo,
  useRef,
} from "react";

export interface CellProps<TData, TValue>
  extends TdHTMLAttributes<HTMLTableCellElement> {
  // table: Table<TData>,
  // row: Row<TData>,
  column: Column<TData, TValue>;
  renderValue: () => unknown;
}

function GridCell<TData, TValue>({
  column,
  renderValue,
  ...rest
}: CellProps<TData, TValue>) {
  const value = renderValue();
  return <td>{value as ReactNode}</td>;
}

export default GridCell;
