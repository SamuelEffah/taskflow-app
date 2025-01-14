"use client";

import { ArrowBack,AddOutlined ,ShareOutlined, SearchOutlined } from "@mui/icons-material";
import SearchBar from "./searchbar/searchbar";

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
        <div className="flex bg-[#f4f4f4] w-60 relative rounded-[4px] p-[2px]">

        <SearchBar/>
        </div>
      <button className="mx-4">
        <ShareOutlined className="text-[#7a7a7a]" style={{fontSize: "14px"}}/>
        <span className="text-xs px-1">Share</span>
      </button >
      <button className="bg-[#0408e9] px-2 py-[2px]  flex items-center rounded-md text-[10px] text-[#ffffff]">
        <AddOutlined style={{fontSize:"14px"}}/>
        New Project
      </button>
      </div>
    </div>
  );
};

export default NavBar;
