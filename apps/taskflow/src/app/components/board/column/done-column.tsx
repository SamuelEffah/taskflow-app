import { type DropTargetMonitor, useDrop } from "react-dnd";

import { CheckCircleOutline, MoreVertOutlined } from "@mui/icons-material";
import BoardTaskItem from "../board-task-item";

interface Task {
  id: string;
  description?: string;
  assignee?: string;
  dueDate?: string;
  status?: string;
  columnId?: string;
}

interface ColumnProps {
  id: string;
  title: string;
  items: Task[];
  onColumnChange: (taskId: string, columnId: string) => void;
}

const DoneColumn = (props: ColumnProps) => {
  const [{ canDrop, getItem, isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop: (item: Task) => {
      props.onColumnChange(item.id, props.id);
    },
    collect: (monitor: DropTargetMonitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
      getItem: monitor.getItem(),
    }),
  }));

  return drop(
    <div className={`p-2 h-full bg-[#ffffff] w-full relative`}>
      <div className="flex justify-between items-center">
        <div className="flex bg-[#f9f9f9] rounded-sm p-1 w-max items-center  text-[10px]">
            <CheckCircleOutline className="text-green-500" style={{fontSize: "12px"}}/>
            <span className="px-2">Done</span>
            <span className="bg-white rounded-sm text-[9px] font-medium flex items-center justify-center w-4 h-4 p-[2px]  ">{props.items.length}</span>
        </div>
        <button>
            <MoreVertOutlined style={{fontSize: "11px"}}/>
        </button>
      </div>
      {props.items.map((task) => {
        return <BoardTaskItem task={task} key={task.id} />;
      })}
    </div>,
  );
};

export default DoneColumn;
