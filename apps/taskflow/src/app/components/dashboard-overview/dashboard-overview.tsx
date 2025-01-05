
"use client"
import { DASHBOARD_ICONS } from '@/app/shared/ui/icons/dashboard-icons';
import { DashboardOverviewType } from '@/app/utils/data/dashboard';
import { ArrowForward } from '@mui/icons-material'
import {useState, useCallback} from 'react'
import { FcDocument } from "react-icons/fc";

interface DashboardOverviewProps {
    overview: DashboardOverviewType
}

const DashboardOverview = (props: DashboardOverviewProps)=>{

    return (

        <div className='w-full  p-3 flex items-center  justify-between rounded-md  bg-white border-[1px] border-[#f1f1f1] relative'>
        <div>
            <h4 className='font-semibold '>{props.overview.size}</h4>
            <p className='text-[10px] font-medium'>{props.overview.name}</p>
            <p className='text-[8px] text-[#696969]'>{props.overview.description}</p>

            <button className='text-[10px] mt-3 px-2 py-[2px] rounded-md border-[1px] border-[#f1f1f1] bg-[#fcfcfd]'>
                View details
                <ArrowForward className='pl-1' style={{fontSize:"13px"}}/>
            </button>
        </div>
        <div>
        {DASHBOARD_ICONS[props.overview.icon]}
        </div>
    </div>
    )
}

export default DashboardOverview