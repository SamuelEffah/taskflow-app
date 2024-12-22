"use client";
import KanbanBoard from "../components/kanban-board/kanban-board";
import TaskItem from "../components/task-item/task-item";

const Board = () => {
	return (
		<div className="relative h-full px-5">
			<div className="flex items-center justify-between">
				<div>
					<h1 className="text-lg p-0 mt-2 font-bold">Development Board</h1>
					<span className="text-[#6f6f6f] font-medium text-sm p-0 m-0 ">
						12 tasks in progress
					</span>
				</div>
			</div>

			<div className="mt-4 h-5/6">
				<KanbanBoard />
			</div>
		</div>
	);
};

export default Board;
