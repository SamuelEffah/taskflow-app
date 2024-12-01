import {Add, DescriptionOutlined,GroupOutlined, CalendarMonthOutlined, GridViewOutlined } from '@mui/icons-material'
import React from 'react'
 


const SIDEBAR_ICONS:Record<string, React.ReactElement>={
    calendar: <CalendarMonthOutlined style={{fontSize:'20px'}}/>,
    description: <DescriptionOutlined style={{fontSize:'20px'}}/>,
    group: <GroupOutlined style={{fontSize:'20px'}}/>,
    board: <GridViewOutlined style={{fontSize:"20px"}}/>
}

const SIDEBAR_ITEMS = [
    {
        id: "my-tasks",
        name: "My Tasks",
        path: '/my-tasks',
        icon: "calendar",
    },
    {
        id: "board",
        name: "Board",
        path: '/board',
        icon: "board",
    },
    {
        id: "projects",
        name: "Projects",
        path: '/projects',
        icon: "description",
    },
    {
        id: "team",
        name: "Teams",
        path: '/team',
        icon: "group",
    },

]



const SideBar = ()=>{

    return (
        <div className=" w-60 border-r-[1px] h-full p-2">
            <button className="bg-[#4c60f5] mt-5 text-white font-medium flex items-center justify-center w-full p-2 rounded-md">
                <Add style={{fontSize:"20px"}}/>
                <span className='pl-1'>Add New Task</span>
            </button>
            <div className='mt-6'>
                <ul>
                    {SIDEBAR_ITEMS.map((item, index)=>{
                        return <li className='py-2 cursor-pointer px-1 rounded-sm hover:bg-[#f1f1f1]' key={item.id}>
                            {SIDEBAR_ICONS[item.icon]}
                            <span className='pl-1.5'>
                            {item.name}

                            </span>
                            </li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default SideBar;