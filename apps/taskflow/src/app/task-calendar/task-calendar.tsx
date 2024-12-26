"use client";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

const TaskCalendar = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar className="h-[300px]" />
    </LocalizationProvider>
  );
};

export default TaskCalendar;
