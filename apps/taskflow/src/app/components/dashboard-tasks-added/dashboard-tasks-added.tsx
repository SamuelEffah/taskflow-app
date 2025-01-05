"use client"

import { FileUploadOutlined } from "@mui/icons-material"
import DashboardTasksItem from "./dashboard-tasks-item"





const DashboardTasksAdded = ()=>{

    return(
        <div className="bg-white border-[1px] w-full rounded-md p-2 relative border-[#f1f1f1]">
            
                <div className="flex border-b-[1px] pb-2 border-[#f1f1f1] w-full relative   items-center">
                    <span className="border-[1px] mr-2 text-[#6a6a6a] flex items-center justify-center p-3 rounded-md w-4 h-4 border-[#f1f1f1]">
                        <FileUploadOutlined style={{fontSize:"14px"}}/>
                    </span>
                    <div className="flex flex-col">
                        <span className="text-[10px] m-0 p-0 font-medium">Recently Added</span>
                        <span className="text-[8px] m-0 p-0 text-[#696969]">All tasks that recently added to your backlogs</span>
                    </div>
                </div>

            <div className="mt-2 overflow-y-auto h-[130px]">
                <DashboardTasksItem/>
                <DashboardTasksItem/>
                <DashboardTasksItem/>
                <DashboardTasksItem/>
                <DashboardTasksItem/>
                <DashboardTasksItem/>
            </div>
           
        </div>
    )
}

export default DashboardTasksAdded