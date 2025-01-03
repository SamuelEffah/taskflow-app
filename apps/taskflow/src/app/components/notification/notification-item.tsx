import UserAvatar from "../userAvatar/userAvatar"
import NotificationFiles from "./types/notification-files"
import NotificationRequest from "./types/notification-request"




const NotificationItem = ()=>{
    

    return (
        <div className="flex text-[10px]  w-[90%] border-b-[1px] border-[#f1f1f1] my-2">
            <div >
            <UserAvatar className="w-8 h-8"/>
            </div>
            <div className="flex flex-col ml-3">
                <div  className="text-[#808080]">
                <span>8 hours agoss</span>
                <span className="mx-1">&#x2022;</span>
                <span>New Homepage</span>
                </div>
                <div className="my-1">
                 <NotificationRequest/>
                </div>
            </div>

        </div>
    )
}


export default NotificationItem