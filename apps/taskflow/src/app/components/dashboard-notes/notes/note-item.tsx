"use client"
import { Done } from '@mui/icons-material'
import {useCallback, useState} from 'react'


const NoteItem = ()=>{
    const [isChecked, setIsChecked] = useState<boolean>(false)

    const handleChecked = useCallback(()=>{
        setIsChecked(!isChecked)
    },[setIsChecked, isChecked])

    return (
        <div className="flex text-[10px] py-[3px] items-center">
        <div onClick={handleChecked} className={`mr-2  flex items-center justify-between flex-shrink-0 p-[2px] rounded-full  ${isChecked ? "bg-[#3a6ff3] text-white": "border-[1px] w-[16px] h-[16px]"}`}>

           {isChecked ?  <Done style={{fontSize:"12px"}}/> : null }

        </div>
        <div className=''>
            <p className={`${isChecked ? "line-through" : ""}`}>Fixing icons with backgrounds</p>
            <span className='text-[9px] text-[#696969]'>Use icons that are easily recognizable and straightforwad</span>
        </div>
        </div>
    )
}


export default NoteItem