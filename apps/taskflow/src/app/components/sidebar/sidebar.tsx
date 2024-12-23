"use client";
import {
  Add,
  CalendarMonthOutlined,
  DescriptionOutlined,
  DonutLargeOutlined,
  GridViewOutlined,
  GroupOutlined,
  MoreVert,
} from "@mui/icons-material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import CreateTaskModal from "../create-task-modal/create-task-modal";
import UserAvatar from "../userAvatar/userAvatar";

const SIDEBAR_ICONS: Record<string, React.ReactElement> = {
  calendar: <CalendarMonthOutlined style={{ fontSize: "20px" }} />,
  donutLarge: <DonutLargeOutlined style={{ fontSize: "20px" }} />,
  description: <DescriptionOutlined style={{ fontSize: "20px" }} />,
  group: <GroupOutlined style={{ fontSize: "20px" }} />,
  board: <GridViewOutlined style={{ fontSize: "20px" }} />,
};

const SIDEBAR_ITEMS = [
  {
    id: "projects",
    name: "Projects",
    path: "/projects",
    icon: "description",
  },
  {
    id: "board",
    name: "Board",
    path: "/board",
    icon: "board",
  },
  {
    id: "my-tasks",
    name: "Backlogs",
    path: "/backlogs",
    icon: "donutLarge",
  },
];

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
    <div className="absolute md:w-60 w-14 border-r-[1px] h-full text-black">
      <CreateTaskModal />
      <div className="mt-6">
        <ul>
          {SIDEBAR_ITEMS.map((item, index) => {
            const isTabActive = pathName === item.path;
            return (
              <Link key={item.name} href={item.path}>
                <div
                  key={item.id}
                  className={`relative w-full h-[40px] my-2 cursor-pointer hover:bg-[#e6e6e6] ${isTabActive ? "bg-[#e6e6e6]" : ""} `}
                >
                  <div
                    className={`flex items-center before:content-normal before:w-[4px] h-full  before:absolute before:right-0 before:h-full ${isTabActive ? "before:bg-[#2038f2]" : ""}`}
                  >
                    <div className="p-2 w-full flex items-center md:justify-start justify-center">
                      {SIDEBAR_ICONS[item.icon]}
                      <span className="ml-1 md:block hidden">{item.name}</span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </ul>
      </div>

      <div className="p-1 absolute bottom-6 w-full">
        <div className=" flex items-center  md:justify-between justify-center w-full">
          <div className="flex items-center">
            <UserAvatar />
            <span className="text-sm pl-2 md:block hidden ">Sam Effah</span>
          </div>
          <button onClick={handleClick} className="md:block hidden">
            <MoreVert />
          </button>
        </div>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default SideBar;
