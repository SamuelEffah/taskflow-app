"use client"
import React from "react"
import { NotificationsOutlined } from "@mui/icons-material";
import "./notification.css"

import { Badge, Popover } from "@mui/material";

const Notification = ()=>{

    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

    return (
        <div className="taskflow-notification mx-4">
                <button className="" onClick={handleClick}>
        <Badge color="primary" variant="dot" >

        <NotificationsOutlined  className="text-[#7a7a7a]" style={{fontSize: "15px"}}/>

        </Badge>
      </button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <div className="px-3 py-2 w-[400px]">
       <p className="font-semibold text-[14px]  m-0 py-0">Notification</p>
        <div className=" h-[270px] py-2 overflow-auto">
        <p className="text-center text-[10px] mt-20 text-[#727272]">you don't have any notification</p>
        
        </div>
        </div>
        </Popover>
     
        </div>
    )
}

export default Notification