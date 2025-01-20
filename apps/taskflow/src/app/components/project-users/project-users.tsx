"use client"

import { PeopleOutline } from "@mui/icons-material"
import ProjectUserItem from "./project-user-item"
import { UsersList } from "@/app/utils/data/users"


const ProjectUsers = ()=>{
 
    return (
        <div  className="w-full p-2 relative border-[1px] h-full rounded-md border-[#f1f1f1] bg-white">
            <div className="flex md:justify-start justify-center">
            <PeopleOutline  style={{fontSize: "14px"}}/>
            <span className="text-[10px] md:block hidden font-medium ml-1 ">Users</span>
            </div>
            <div className="relative mt-2 w-full">
            </div>
            <div className="mt-4">
                {UsersList.map((user)=>{
                    return <ProjectUserItem key={user.id} user={user}/>
                })}          

            </div>
        
        </div>
    )
}


export default ProjectUsers