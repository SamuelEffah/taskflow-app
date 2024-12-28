"use client";

import { ArrowBack, ShareOutlined, SearchOutlined } from "@mui/icons-material";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export type NavBarProps = {};

const NavBar = (props: NavBarProps) => {
  return (
    <div className="text-sm px-6 flex items-center justify-between border-b-[1px] border-[#f1f1f1]  h-12 w-full">
      <div>
        <button className="text-[#555555]">
          <ArrowBack style={{fontSize:"14px"}}/>
        </button>
        <span className="mx-4 border-l-[1px] flex-shrink-0 ">&nbsp;</span>
      </div>
      <div className="flex items-center mr-4">
        <div className="flex bg-[#f4f4f4] w-48 rounded-[4px] p-[2px]">
          <span >
            <SearchOutlined className="text-[#7a7a7a]" style={{fontSize: "14px"}} />
          </span>
          <input placeholder="Search" type="text" className="bg-[#f4f4f4] w-[95%] px-1  text-[#373737] outline-none text-xs" />
        </div>
      <button className="mx-4">
        <ShareOutlined className="text-[#7a7a7a]" style={{fontSize: "14px"}}/>
        <span className="text-xs px-1">Share</span>
      </button >
      <button className="bg-black px-2 py-[2px] rounded-md text-[12px] text-[#ffffff]">
        Create Task
      </button>
      </div>
    </div>
  );
};

export default NavBar;
