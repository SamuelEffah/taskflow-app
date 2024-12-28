"use client"
import { OutlinedFlag, ZoomOutMapOutlined, MoreVertOutlined } from "@mui/icons-material";


const TaskBurndown = (props)=>{
    return (
        <div className="border-[1px] w-full relative border-[#f1f1f1] bg-white rounded-md p-2">
                    <div className="flex items-center justify-between">
                    <div>
                        <span>
                          <OutlinedFlag className="text-[#555555]" style={{fontSize: "14px"}}/>
                        </span>
                      <span className="text-[10px]  font-medium ml-1">Burndown chart

                        <span className="pl-1 font-normal text-[#555555]">{'(estimate point)'}</span>
                      </span>
                    </div>
                    <div className="border-[1px] rounded-sm px-[2px] border-[#f1f1f1] flex items-center h-[16px] text-[#a8a8a8] w-max">
                      <button className="mx-1 h-3 w-3 justify-center flex items-center">
                        <ZoomOutMapOutlined style={{fontSize:"9px"}}/>
                      </button>
                      <button className="flex h-3 w-3  justify-center items-center ">
                        <MoreVertOutlined style={{fontSize:"12px"}}/>
                      </button>
                    </div>
                    </div>
                    <div className=" flex items-center mt-4 justify-center">
                        <p className="text-sm text-[#7f7f7f]">Coming Soon!</p>
                    </div>  

                  </div>
    )
}


export default TaskBurndown