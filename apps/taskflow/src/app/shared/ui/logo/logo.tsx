"use client"

import { Diamond } from "@mui/icons-material"




const Logo= ()=>{
    return (
        <div className="flex items-center my-3 px-2 md:w-full md:justify-start justify-center">
        <span className="text-[#886cf4] md:w-[26px] md:h-[26px]  rounded-md bg-[#1d0d45] flex items-center md:mr-2 mr-0 justify-center p-1">
       <Diamond className="md:text-[20px] text-[25px]" />
        </span>
        <div>
        <p className="font-medium md:block hidden text-sm text-[#241e51] ">Taskflow</p>
        </div>
      </div>
    )
}

export default Logo