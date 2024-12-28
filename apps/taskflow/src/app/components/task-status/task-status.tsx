"use client"
import { InsertChartOutlined, ZoomOutMapOutlined, MoreVertOutlined } from "@mui/icons-material";


const TaskStatus = (props)=>{
    return (
        <div className="border-[1px] w-full relative border-[#f1f1f1] bg-white rounded-md p-2">
                    <div className="flex items-center justify-between">
                    <div>
                        <span>
                          <InsertChartOutlined className="text-[#555555]" style={{fontSize: "14px"}}/>
                        </span>
                      <span className="text-[10px]  font-medium ml-1">Task Status</span>
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
                    <div className="flex w-3/4 items-center mt-4 justify-between">
                        <div className="flex flex-col">
                          <span className="m-0 p-0 text-sm font-medium">24</span>
                          <span className="text-[10px]">Backlog</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="m-0 p-0 text-sm font-medium">4</span>
                          <span className="text-[10px]">In progress</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="m-0 p-0 text-sm font-medium">7</span>
                          <span className="text-[10px]">Validation</span>
                        </div>
                    </div>  

                  </div>
    )
}


export default TaskStatus