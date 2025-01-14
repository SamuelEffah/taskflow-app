"use client"

import UserOverviewProjectItem from "./user-overview-project-item"



const UserOverviewProjects = ()=>{

    return (
        <div className="w-full grid grid-cols-2 gap-2">
        {[1,2].map((t)=>{
            return  <UserOverviewProjectItem key={t}/>
        })}
        
        </div>
    )
}

export default UserOverviewProjects