import { type Table, flexRender } from "@tanstack/react-table";
import { useMemo, useState } from "react";

export interface GridProps<TData> {
  table: Table<TData>;
}

function Grid<TData>({ table }: GridProps<TData>) {
  return (
    <div className="bg-[#f6f6f6] min-h-[500px] rounded-md relative p-2">
      <table className="w-full">
        <thead className="border-b-[1px]  border-[#f2f2f2] max-h-[500px]">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <th
                    style={{ width: header.getSize() }}
                    className="text-left text-sm"
                    key={header.id}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr
              className="cursor-pointer bg-white hover:bg-[#fdfdfd] border-b-[1px] border-[#f2f2f2]"
              key={row.id}
            >
              {row.getVisibleCells().map((cell) => (
                <td className="p-1" key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Grid;
