"use client"

import useUserOverviewStore from "@/app/shared/store/user-overview-store"
import { useCallback } from "react"
import { User } from "@/app/utils/data/users"
import { Avatar } from "@mui/material"

interface ProjectUserProps{
    user:User
}

const ProjectUserItem = ({user}: ProjectUserProps)=>{
    const {openModal} = useUserOverviewStore()

    const handleUserOverview = useCallback(()=>{
        openModal(user)
    },[openModal, user])

    
    return (
        <div  onClick={handleUserOverview} className="flex cursor-pointer  hover:bg-[#f4f4f4] border-b-[1px] py-[6px] md:px-3 border-[#f4f4f4] md:justify-start rounded-sm justify-center items-start">
        <span title={user.fullname}>
        <Avatar sx={{height: 24, width: 24}} alt={user.lastName} src={user.avatars[0]}/>
        </span>
        <div className="md:flex hidden flex-col ml-[5px] text-[11px] ">
            <div className="flex items-center">
            <p>{user.fullname}</p>
            {user.role === "admin" ?  <p className="text-[7px] ml-1 bg-[#1d0d45] text-[#e7d9fa] rounded-sm text-center p-[1px]">Admin</p> : null}
            </div>
            <span className="text-[8px]">online</span>
        </div>
    </div>
    )
}

export default ProjectUserItem