"use client"
import {  ZoomOutMapOutlined,FileUploadOutlined, MoreVertOutlined } from "@mui/icons-material";


const TaskCommits = (props)=>{
    return (
        <div className="border-[1px] border-[#f1f1f1] bg-white rounded-md w-full relative p-2">
                    <div className="flex items-center justify-between">
                    <div>
                        <span>
                          <FileUploadOutlined className="text-[#555555]" style={{fontSize: "14px"}}/>
                        </span>
                      <span className="text-[10px] font-medium ml-1">Commits</span>
                    </div>
                    <div className="border-[1px] ml-6 rounded-sm px-[2px] border-[#f1f1f1] flex items-center h-[16px] text-[#a8a8a8] w-max">
                      <button className="mx-1 h-3 w-3 justify-center flex items-center">
                        <ZoomOutMapOutlined style={{fontSize:"9px"}}/>
                      </button>
                      <button className="flex h-3 w-3   justify-center items-center ">
                        <MoreVertOutlined style={{fontSize:"12px"}}/>
                      </button>
                    </div>
                    </div>
                    <div className="flex items-center mt-2">
                        <div className="flex flex-col">
                          <span className="m-0 p-0 text-sm font-medium">24</span>
                          <span className="text-[10px]">{`2.5% (6d)`}</span>
                        </div>
                    </div>  

                  </div>
    )
}


export default TaskCommits