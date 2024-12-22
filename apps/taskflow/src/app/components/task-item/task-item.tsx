import { ScheduleOutlined } from "@mui/icons-material";
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

interface TaskItemProps {
	task: Task;
}

const TaskItem = (props: TaskItemProps) => {
	const [, drag] = useDrag({
		type: "task",
		item: props.task,
		end(item: Task) {
			console.log("Drop,.... ", item);
		},
	});
	return drag(
		<div className=" my-3 max-w-72 drop-shadow-lg bg-white cursor-pointer rounded-md p-2">
			<div className="flex  items-center justify-between">
				<span className="bg-blue-200 text-blue-600 py-1 font-medium text-sm px-1.5 rounded-md">
					Feature
				</span>
				<div className="flex text-sm items-center">
					<span className="md:p-0 pl-1" title=" Due on Feb 2022">
						<ScheduleOutlined style={{ fontSize: "13px" }} />
					</span>
					<span className="pl-1 md:block hidden text-xs text-[#6f6f6f]">
						Due: Dec 8 2020
					</span>
				</div>
			</div>
			<div className="mt-4">
				<p className="text-sm">Implement authentication systeda dam</p>
			</div>
			<div className="flex mt-2.5 items-center justify-between">
				<UserAvatar />
				<span className="text-xs text-[#6f6f6f] md:block hidden">
					{" "}
					3 Comments
				</span>
			</div>
		</div>,
	);
};

export default TaskItem;
