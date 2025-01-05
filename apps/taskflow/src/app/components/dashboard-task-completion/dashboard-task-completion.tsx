"use client"

import { PieChartOutlineOutlined } from "@mui/icons-material"






const DashboardTaskCompletion = ()=>{

    return(
        <div className="bg-white border-[1px] w-full rounded-md p-2 relative border-[#f1f1f1]">
            
                <div className="flex border-b-[1px] pb-2 border-[#f1f1f1] w-full relative   items-center">
                    <span className="border-[1px] mr-2 text-[#6a6a6a] flex items-center justify-center p-3 rounded-md w-4 h-4 border-[#f1f1f1]">
                        <PieChartOutlineOutlined style={{fontSize:"14px"}}/>
                    </span>
                    <div className="flex flex-col">
                        <span className="text-[10px] m-0 p-0 font-medium">Task Completion Rate</span>
                        <span className="text-[8px] m-0 p-0 text-[#696969]">Your tasks completion rate thoughout your projects</span>
                    </div>
                </div>

            <div className="mt-2 overflow-y-auto h-[130px]">
        
            </div>
           
        </div>
    )
}

export default DashboardTaskCompletion