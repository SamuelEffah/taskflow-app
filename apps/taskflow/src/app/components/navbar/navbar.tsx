"use client";

import { ArrowBack,AddOutlined ,ShareOutlined, NotificationsOutlined } from "@mui/icons-material";
import SearchBar from "./searchbar/searchbar";
import { Badge } from "@mui/material";
import Notification from "../notification/notification";
import useCreateProjectStore from "@/app/shared/store/create-project-store";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export type NavBarProps = {};

const NavBar = (props: NavBarProps) => {

  const {openModal} = useCreateProjectStore()

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
      <Notification/>
   
    <span title="Add New Project">

    
      <button onClick={openModal} className="bg-[#0408e9] px-2 py-[2px] ml-3  flex items-center rounded-md text-[10px] text-[#ffffff]">
        <AddOutlined className="md:text-[16px] text-[18px]"/>
       <span className="md:block hidden"> New Project</span>
      </button>
      </span>
      </div>
    </div>
  );
};

export default NavBar;
