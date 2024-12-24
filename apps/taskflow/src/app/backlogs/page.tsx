"use client";
import { createColumnHelper } from "@tanstack/react-table";
import React, { ReactElement, useRef, useState } from "react";
import { Bookmark, Check, Circle } from "@mui/icons-material";
import BacklogItem from "../components/backlog-item/backlog-item";
import Grid from "../shared/ui/grid/grid";
import useBaseGrid from "../shared/ui/grid/hooks/base-grid";
import { Backlog, BacklogData } from "../utils/data/backlog";
import TaskIcon from "../shared/ui/icons/task-icon";
import FeatureIcon from "../shared/ui/icons/feature-icon";
import BugIcon from "../shared/ui/icons/bug-icon";
import UserAvatar from "../components/userAvatar/userAvatar";

const ICONS_MAP: Record<string, React.JSX.Element> = {
  bug: <BugIcon />,
  feature: <FeatureIcon />,
  task: <TaskIcon />,
};

const STATUS_ICON_MAP: Record<string, { color: string; label: string }> = {
  inprogress: {
    color: "#b0cdff",
    label: "In Progress",
  },
  todo: {
    color: "#c9c9c9",
    label: "To DO",
  },
  done: {
    color: "#b2f7c1",
    label: "Done",
  },
};

const columHelper = createColumnHelper<Backlog>();

const Backlogs = () => {
  const columns = [
    columHelper.accessor("id", {
      header: "",
      size: 20,
    }),
    columHelper.accessor("issueType", {
      header: "",
      size: 30,
      cell: (props) => {
        const value = props.getValue() as string;
        return <td>{ICONS_MAP[value]}</td>;
      },
    }),
    columHelper.accessor("issueNumber", {
      header: "",
      size: 80,
    }),
    columHelper.accessor("description", {
      header: "",
      size: 300,
    }),

    columHelper.accessor("status", {
      header: "",
      size: 100,
      cell: (props) => {
        const value = props.getValue() as string;
        const color = STATUS_ICON_MAP[value].color;
        return (
          <td
            style={{ backgroundColor: color }}
            className="text-[10px] rounded-sm font-medium  p-[3px] uppercase"
          >
            {STATUS_ICON_MAP[value].label}
          </td>
        );
      },
    }),

    columHelper.accessor("reporter", {
      header: "",
      size: 100,
      cell: (props) => {
        const value = props.getValue() as string;

        return (
          <td>
            <UserAvatar className="w-4 h-4" />
          </td>
        );
      },
    }),
  ];

  const table = useBaseGrid({
    data: BacklogData,
    columns,
  });

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
        <Grid table={table} />
      </div>
    </div>
  );
};

export default Backlogs;
