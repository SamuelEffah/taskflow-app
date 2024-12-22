import { type DropTargetMonitor, useDrop } from "react-dnd";
import TaskItem from "../task-item/task-item";

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

const Column = (props: ColumnProps) => {
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
		<div className={`px-2 h-full bg-[#ececec] w-1/4`}>
			<div>
				<p>
					{props.title}
					<span className="pl-1 text-xs">({props.items.length})</span>
				</p>
			</div>
			{props.items.map((task) => {
				return <TaskItem task={task} key={task.id} />;
			})}
		</div>,
	);
};

export default Column;
