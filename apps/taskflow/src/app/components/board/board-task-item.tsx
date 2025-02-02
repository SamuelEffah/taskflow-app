import { CalendarTodayOutlined, MapsUgcOutlined } from "@mui/icons-material";
import { useDrag } from "react-dnd";
import { useCallback } from "react";
import { Task } from "@/app/utils/data/board-items";
import useTaskDetailsStore from "@/app/shared/store/task-details-store";
import { Avatar } from "@mui/material";


interface BoardTaskItemProps {
  task: Task;
}

const BoardTaskItem = ({task}: BoardTaskItemProps) => {
  const taskDetails = useTaskDetailsStore()

  const [, drag] = useDrag({
    type: "task",
    item: task,
    // end(item: Task) {
    // },
  });

  const handleOpen = useCallback(()=>{
    taskDetails.openModal(task.id)
  },[task])
  
  return drag(
    <div  onClick={handleOpen} className=" my-3 relative max-w-72 border-[1px] border-[#f1f1f1] bg-white cursor-pointer rounded-md p-2">
      <div className="flex text-[10px] mb-2">
        <span className="text-[#888888]">{task.taskNumber}</span>
        <span className="pl-3 ">{task.priority}</span>
      </div>
      <p className="text-[10px] font-medium">{task.title}</p>
      <div className="flex items-center text-[9px] mt-3 bg-[#f3f3f3] w-max p-[2px]">
        <CalendarTodayOutlined style={{fontSize: "10px"}}/>
        <span className="px-[2px]">Due:</span>
        <span className="font-medium">{task?.dueDate}</span>
      </div>
      <div className="w-full border-b-[1px] h-2 border-[#f1f1f1]">&nbsp;</div>
      <div className="flex justify-between items-center mt-2">
        <Avatar sx={{height: 24, width: 24}} src="/images/user-1.jpg"/>
         <div className="flex items-center">
          <span className="text-[10px] flex items-center text-[#515151]">
            <MapsUgcOutlined className="mr-[2px]"  style={{fontSize:"11px"}}/>
            13
          </span>
          <span className="mx-1 text-[9px]">
            May 30, 2024
          </span>

         </div>
      </div>
    </div>
  );
};

export default BoardTaskItem;
