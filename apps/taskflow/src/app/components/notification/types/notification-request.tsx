
const NotificationRequest= ()=>{

    return (
        <div className="text-[11px] flex items-center">
            <div>

             <p>
                <span className="font-semibold pr-1">Milo Banks</span>
                is requesting an access in 
                <span className="font-medium underline pl-1">New RedBox</span>
             </p>

            </div>
             <div className="h-[25px] ml-6 flex text-[10px] mt-2">
                <button className=" border-[1px] mr-2 px-2   bg-[#f7f8f9] rounded-md ">Reject</button>
                <button className=" text-white p-1 px-3 rounded-md bg-[#2b54e7]">Approve</button>
             </div>
        </div>
    )
}

export default NotificationRequest