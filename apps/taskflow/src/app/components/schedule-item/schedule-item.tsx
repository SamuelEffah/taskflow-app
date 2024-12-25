"use client";
import BugIcon from "@/app/shared/ui/icons/bug-icon";
import FeatureIcon from "@/app/shared/ui/icons/feature-icon";
import TaskIcon from "@/app/shared/ui/icons/task-icon";
import { useCallback } from "react";
import Link from "next/link";

const ICONS_MAP: Record<string, React.JSX.Element> = {
  bug: <BugIcon />,
  feature: <FeatureIcon />,
  task: <TaskIcon />,
};

interface ScheduleItemProps {
  onClose: () => void;
}

const ScheduleItem = (props: ScheduleItemProps) => {
  const handleNavigate = useCallback(() => {
    props.onClose();
  }, [props.onClose]);

  return (
    <Link onClick={handleNavigate} href={"/task/4"}>
      <div
        onClick={handleNavigate}
        className="relative p-2 w-full h-max my-2 cursor-pointer hover:bg-[#e6e6e6]"
      >
        <div className="flex items-center">
          <BugIcon />
          <p className="ml-2 m-0 p-0 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="pl-6 text-xs text-[#585858]">
          <span className=" text-ellipsis">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam,
            odit!
          </span>
          <div className="pt-[3px]">
            <span className="mr-3">Jan 16 2025</span>
            <span className="text-[12px]">11 Comments</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ScheduleItem;
