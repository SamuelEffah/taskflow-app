import TaskCalendar from "@/app/task-calendar/task-calendar";
import { CalendarMonthOutlined } from "@mui/icons-material";
import { Modal } from "@mui/material";
import { useCallback, useState } from "react";
import ScheduleItem from "../schedule-item/schedule-item";

const ScheduleModal = (props) => {
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  const handleOpen = useCallback(() => {
    setIsScheduleOpen(true);
  }, [setIsScheduleOpen]);

  const handleClose = useCallback(() => {
    setIsScheduleOpen(false);
  }, [setIsScheduleOpen]);

  return (
    <div className="ml-10">
      <button
        onClick={handleOpen}
        className="border-2 hover:bg-[#e2e2e2] p-1 px-4 rounded-full flex items-center"
      >
        <CalendarMonthOutlined style={{ fontSize: "15px" }} />
        <span className="p-0 m-0 text-sm pl-1">Schedule</span>
      </button>
      <Modal
        open={isScheduleOpen}
        onClose={handleClose}
        className=" flex  justify-center"
      >
        <div
          style={{ width: "500px", height: "650px" }}
          className="px-2 flex mt-7 flex-col justify-between outline-none bg-[#fff] relative rounded-md "
        >
          <div className="h-[600px]">
            <h3 className="font-semibold text-lg pt-2">Schedule</h3>

            <div className="h-[300px]">
              <TaskCalendar />
            </div>
            <div className="mb-2 relative h-[280px] ">
              <div className="flex items-center">
                <p className="font-medium text-sm">Task Due </p>
                <span className=" bg-[#e1e1e1] ml-2 text-xs p-1 flex items-center justify-center rounded-full w-5 h-5">
                  3
                </span>
              </div>
              <div className="overflow-y-auto mt-2 h-[250px]">
                <ScheduleItem />
                <ScheduleItem />
                <ScheduleItem />

                <ScheduleItem />
              </div>
            </div>
          </div>
          <div className="h-[40px]  flex justify-end">
            <button
              onClick={handleClose}
              className="text-sm hover:opacity-75 mr-2 text-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ScheduleModal;
