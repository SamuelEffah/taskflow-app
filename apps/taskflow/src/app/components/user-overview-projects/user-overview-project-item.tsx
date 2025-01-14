"use client"
import { UsersList } from "@/app/utils/data/users"
import { Avatar, AvatarGroup } from "@mui/material"



const UserOverviewProjectItem = ()=>{

    return (
        <div className="w-full h-[200] border-[1px] rounded-md border-[#f1f1f1]">
        <div className="text-[10px] p-2 flex flex-col">
             <p className="font-semibold">Acme Projects</p>   
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, cum.</span>
            <div className="flex mt-4 justify-between items-center">
            <span className="text-[9px]  text-[#5b5a5a]">Joined Jan 16 2025</span>
                <AvatarGroup total={4}
                 sx={{
                    '& .MuiAvatar-root': { width: 20, height: 20, fontSize: 8 },
                  }}
                >
                    {UsersList.map((user)=>{
                        return  <Avatar key={user.id} alt={user.lastName} src={user.avatars[0]}/>

                    })}

                </AvatarGroup>
            </div>
        </div>
    </div>
    )
}


export default UserOverviewProjectItem