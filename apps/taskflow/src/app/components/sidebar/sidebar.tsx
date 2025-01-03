"use client";
import {
  Add,
  CalendarMonthOutlined,
  DescriptionOutlined,
  DonutLargeOutlined,
  GridViewOutlined,
  Diamond,
  GroupOutlined,
  MoreVert,
  EventOutlined,
  InsertChart,
  InsertChartOutlined,
} from "@mui/icons-material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import CreateTaskModal from "../create-task-modal/create-task-modal";
import UserAvatar from "../userAvatar/userAvatar";
import { Navigation } from "@/app/utils/data/navigation";
import { NAVIGATION_ICONS } from "@/app/shared/ui/icons/navigation-bar-icons";
import Logo from "@/app/shared/ui/logo/logo";

const SIDEBAR_ICONS: Record<string, React.ReactElement> = {
  calendar: <CalendarMonthOutlined style={{ fontSize: "20px" }} />,
  donutLarge: <DonutLargeOutlined style={{ fontSize: "20px" }} />,
  description: <DescriptionOutlined style={{ fontSize: "20px" }} />,
  group: <GroupOutlined style={{ fontSize: "20px" }} />,
  board: <GridViewOutlined style={{ fontSize: "20px" }} />,
};


const NavbarSection = Object.keys(Navigation)

const SideBar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const pathName = usePathname();

  return (
    <div className="absolute overflow-auto flex flex-col items-center justify-between md:w-52 h-dvh w-14 border-r-[1px] border-[#f1f1f1]  bg-[#fefefe]">
      <div className="relative w-full flex flex-col items-center">
       <Logo/>
        {NavbarSection.map((section)=>{
          return (


        <div key={section} className="mt-8 w-[90%] relative">
          <div className="mb-1">
            <p className="text-[11px] text-[#646464] capitalize">{section}</p>
          </div>
          {Navigation[section].map((navItem)=>{
         return  <div key={navItem.name} className="w-full">
            <div className="w-full relative flex flex-col items-end">
            <Link className="w-full relative" href={navItem.path}>
            <button className={`w-full p-[2px] rounded-md  hover:bg-[#efefef] ${pathName === navItem.path ? "bg-[#efefef]": ""}`}>
              <div className="w-max">
              <span className="text-[#555555]">
               {NAVIGATION_ICONS[navItem.icon]}
              </span>
              <span className="text-[11px] pl-2">
                {navItem.name}
              </span>

              </div>
            </button>
            </Link>
         
            <div className="w-[90%] mt-1 relative">
            {navItem.subNavigation?.map((subNavBarItem)=>{
              return (
                <div key={subNavBarItem.name} className="w-full my-[4px] relative">
              <Link className="relative w-full" href={subNavBarItem.path}>
              <button className={`w-full p-[2px] rounded-md  hover:bg-[#efefef] ${pathName === subNavBarItem.path ? "bg-[#efefef]": ""}`}>
              <div className="w-max">
              <span className="text-[#555555]">
               {NAVIGATION_ICONS[subNavBarItem.icon]}
              </span>
              <span className="text-[11px] pl-2">
                {subNavBarItem.name}
              </span>

              </div>
            </button>
              
              
              </Link>
                </div>
              )
            })}
               </div>
            </div>
         
          </div>
             
          })}

        </div>

          )
        })}


      </div>

      <div className="relative w-[90%] mt-8 mb-4">
      <div className="w-full mb-8">
            <button className="w-full p-[2px] rounded-md  hover:bg-[#efefef]">
              <div className="w-max">
              <span className="text-[#555555]">
               {NAVIGATION_ICONS["SettingsOutlined"]}
              </span>
              <span className="text-[11px] pl-2">
               Settings
              </span>

              </div>
            </button>
        </div>
        <div className="flex items-center my-4">
          <UserAvatar className=""/>
          <span className="text-[11px] ml-1">Sam Effah</span>
        </div>
      </div>
       
    </div>
  );
};

export default SideBar;
