import { FolderOpen, FolderOpenOutlined } from "@mui/icons-material"

const NotificationFiles= ()=>{

    return (
        <div className="text-[11px]">
             <p>
                <span className="font-semibold pr-1">Sonia</span>
               uploaded a new document
             </p>
             <div className="flex px-2 py-1 bg-[#e8e8e855] text-[10px] mt-2 rounded-sm">
                <FolderOpenOutlined className="text-[#5a5a5a]" style={{fontSize: "30px"}}/>
                <div className="ml-1 flex flex-col">
                    <span>dashboard_test</span>
                    <span>4.2 MB</span>
                </div>
                
             </div>
        </div>
    )
}

export default NotificationFiles