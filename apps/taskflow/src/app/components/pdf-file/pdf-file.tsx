"use client"
import {BsFileEarmarkPdf} from 'react-icons/bs'



const PDFfile = ()=>{

    return (
        <div className= 'mt-2 bg-[#fdfdfd] border-[#f1f1f1] border-[1px] p-1 px-3 rounded-md w-max flex items-center'>
        <BsFileEarmarkPdf className='text-[#f46666]' style={{fontSize:"25px"}}/>
        <div className='ml-1 text-xs'>  
            <p>Design brief.pdf</p>
            <span className='text-[9px]'>1.5 MB</span>
        </div>
    </div>
    )
}


export default PDFfile