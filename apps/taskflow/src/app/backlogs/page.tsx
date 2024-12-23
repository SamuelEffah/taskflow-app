"use client";
import { createColumnHelper } from "@tanstack/react-table";
import React, { ReactElement, useRef, useState } from "react";
import BacklogItem from "../components/backlog-item/backlog-item";
import Grid from "../shared/ui/grid/grid";
import useBaseGrid from "../shared/ui/grid/hooks/base-grid";

interface Backlog {
  id: string;
  name: string;
  status: string;
}

const columHelper = createColumnHelper<Backlog>();

const Backlogs = () => {
  return (
    <div className="relative h-full">
      <div className="flex  items-center justify-between px-10">
        <div>
          <h1 className="text-lg p-0 mt-2 font-bold">Backlogs</h1>
          <span className="text-[#6f6f6f] font-medium text-sm p-0 m-0 ">
            12 issues
          </span>
        </div>
      </div>
      <div className="h-[calc(100%-40px)] overflow-auto px-10">
        {/* <Grid table={table} /> */}
      </div>
    </div>
  );
};

export default Backlogs;
