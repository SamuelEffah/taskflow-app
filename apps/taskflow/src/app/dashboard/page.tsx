"use client"
import { ArrowForward } from '@mui/icons-material'
import {useState, useCallback} from 'react'
import { FcDocument } from "react-icons/fc";
import DashboardOverview from '../components/dashboard-overview/dashboard-overview';
import { DashboardOverviewList } from '../utils/data/dashboard';
import DashboardTasksAdded from '../components/dashboard-tasks-added/dashboard-tasks-added';
import DashboardTaskCompletion from '../components/dashboard-task-completion/dashboard-task-completion';
import DashboardNotes from '../components/dashboard-notes/dashboard-notes';


const Dashboard = (props)=>{

    return (
        <div className="mt-2">
                <div>
                    <span className='text-[10px] text-[#696969]'>Thursday, 16th January</span>
                    <h1 className='text-xl block font-medium'>Good Everning!  Sam</h1>
                  <p className="text-[10px] w-3/6 text-[#5c5c5c]">Lorem ipsum dolor, sit amet consectetur adipisiciue molestias magnam atque suscipit quos voluptatum mollitia repellat.</p>
                </div>
            
                <div className="grid grid-cols-3 relative gap-3 mt-6">
                    {DashboardOverviewList.map((overview)=>
                         <DashboardOverview key={overview.id} overview={overview}/>
                    )}

                </div>
                <div className='mt-4 grid gap-4 grid-cols-2'>
                    <DashboardTasksAdded/>
                    <DashboardTaskCompletion/>

                </div>
                <div className='mt-4 grid gap-4 grid-cols-2'>
                    <DashboardNotes/>
                </div>
            </div>
    )
}

export default Dashboard