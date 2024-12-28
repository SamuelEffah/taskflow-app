import { CalendarTodayOutlined, CalendarViewDayOutlined, MapsUgcOutlined, ScheduleOutlined } from "@mui/icons-material";
import { useDrag } from "react-dnd";
import UserAvatar from "../userAvatar/userAvatar";

interface Task {
  id: string;
  description?: string;
  assignee?: string;
  dueDate?: string;
  status?: string;
  columnId?: string;
}

interface BoardTaskItemProps {
  task: Task;
}

const BoardTaskItem = (props: BoardTaskItemProps) => {
  const [, drag] = useDrag({
    type: "task",
    item: props.task,
    end(item: Task) {
      console.log("Drop,.... ", item);
    },
  });
  return drag(
    <div className=" my-3 relative max-w-72 border-[1px] border-[#f1f1f1] bg-white cursor-pointer rounded-md p-2">
      <div className="flex text-[10px] mb-2">
        <span className="text-[#888888]">MDS-49</span>
        <span className="pl-3 ">Urgent</span>
      </div>
      <p className="text-[10px] font-medium">Add a lock feature to board</p>
      <div className="flex items-center text-[9px] mt-3 bg-[#f3f3f3] w-max p-[2px]">
        <CalendarTodayOutlined style={{fontSize: "10px"}}/>
        <span className="px-[2px]">Due:</span>
        <span className="font-medium">July 22, 24</span>
      </div>
      <div className="w-full border-b-[1px] h-2 border-[#f1f1f1]">&nbsp;</div>
      <div className="flex justify-between items-center mt-2">
        <UserAvatar/>
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
