"use client";
import { useCallback, useState } from "react";
import { HTML5Backend } from "react-dnd-html5-backend";

import { DndProvider } from "react-dnd";
import BacklogColumn from "./column/backlog-column";
import InProgressColumn from "./column/in-progress-column";
import ValidationColumn from "./column/validation";
import DoneColumn from "./column/done-column";

interface Task {
  id: string;
  description?: string;
  assignee?: string;
  dueDate?: string;
  status?: string;
  columnId?: string;
}

const Board = () => {
  const [items, setItems] = useState<Task[]>([
    {
      id: "stag",
      columnId: "todo",
    },
    {
      id: "troa",
      columnId: "tod",
    },
  ]);

  const onColumnChange = useCallback(
    (taskId: string, columnId: string) => {
      setItems((prevItems) => {
        return prevItems.map((item) => {
          if (item.id === taskId) {
            item.columnId = columnId;
          }
          return item;
        });
      });
    },
    [setItems],
  );

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="w-full grid bg-white min-h-96 grid-cols-4 relative">
        <BacklogColumn
          items={items.filter(
            (item) => item.columnId === "todo" || !item.columnId,
          )}
          id="todo"
          title="Todo"
          onColumnChange={onColumnChange}
        />
       <InProgressColumn
          items={items.filter((item) => item.columnId === "inprogress")}
          id={"inprogress"}
          title="In Progress"
          onColumnChange={onColumnChange}
        />
      
         <ValidationColumn
          items={items.filter((item) => item.columnId === "in-review")}
          id={"in-review"}
          title="In Review"
          onColumnChange={onColumnChange}
        />

         <DoneColumn
          items={items.filter((item) => item.columnId === "completed")}
          id={"completed"}
          title="Completed"
          onColumnChange={onColumnChange}
        /> 
      </div>
    </DndProvider>
  );
};

export default Board;
