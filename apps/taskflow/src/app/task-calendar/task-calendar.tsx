"use client"
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';



const TaskCalendar = ()=>{

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar className='h-[300px]' />
      </LocalizationProvider>
    )

}

export default TaskCalendar