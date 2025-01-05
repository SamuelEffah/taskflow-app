"use client"
import { SummarizeOutlined } from "@mui/icons-material"
import NoteItem from "./notes/note-item"






const DashboardNotes = ()=>{

    return(
        <div className="bg-white  mt-4 border-[1px] w-full rounded-md pt-2 relative border-[#f1f1f1]">
            
                <div className="flex border-b-[1px] px-2 pb-2 border-[#f1f1f1] w-full relative   items-center">
                    <span className="border-[1px] mr-2 text-[#6a6a6a] flex items-center justify-center p-3 rounded-md w-4 h-4 border-[#f1f1f1]">
                        <SummarizeOutlined style={{fontSize:"14px"}}/>
                    </span>
                    <div className="flex flex-col">
                        <span className="text-[10px] m-0 p-0 font-medium">Notes</span>
                    </div>
                </div>

            <div className="mt-1 px-2 overflow-y-auto h-[150px]">
                <NoteItem/>
                <NoteItem/>
                <NoteItem/>
                <NoteItem/>
                <NoteItem/>

            </div>
            <input placeholder="add a new note" type="text" className="w-full p-2 text-[10px] rounded-b-md outline-none h-[35px] border-t-[1px]"/>
           
        </div>
    )
}

export default DashboardNotes