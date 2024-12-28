"use client"

import { Diamond } from "@mui/icons-material"




const Logo= ()=>{
    return (
        <div className="flex items-center my-3 w-[90%]">
        <span className="text-[#886cf4] w-[26px] h-[26px] rounded-md bg-[#1d0d45] flex items-center mr-2 justify-center p-2">
       <Diamond style={{fontSize:"18px"}} />
        </span>
        <div>
        <p className="font-medium text-sm text-[#241e51] ">Taskflow</p>
        </div>
      </div>
    )
}

export default Logo