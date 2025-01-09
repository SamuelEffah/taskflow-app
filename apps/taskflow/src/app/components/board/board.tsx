"use client";
import { useCallback, useState } from "react";
import { HTML5Backend } from "react-dnd-html5-backend";

import { DndProvider } from "react-dnd";
import BacklogColumn from "./column/backlog-column";
import InProgressColumn from "./column/in-progress-column";
import ValidationColumn from "./column/validation";
import DoneColumn from "./column/done-column";
import { BoardItems, Task } from "@/app/utils/data/board-items";

const Board = () => {
  const [items, setItems] = useState<Task[]>([...BoardItems]);

  const onColumnChange = useCallback(
    (taskId: string, columnId: string) => {
      setItems((prevItems) => {
        return prevItems.map((item) => {
          if (item.id === taskId) {
            item.status = columnId;
          }
          return item;
        });
      });
    },
    [setItems],
  );

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="w-full grid border-[1px] rounded-md border-[#f1f1f1] bg-white min-h-96 grid-cols-4 relative">
        <BacklogColumn
          items={items.filter(
            (item) => item.status === "todo" || !item.status,
          )}
          id="todo"
          title="Todo"
          onColumnChange={onColumnChange}
        />
       <InProgressColumn
          items={items.filter((item) => item.status === "in progress")}
          id={"in progress"}
          title="In Progress"
          onColumnChange={onColumnChange}
        />
      
         <ValidationColumn
          items={items.filter((item) => item.status === "in-review")}
          id={"in-review"}
          title="In Review"
          onColumnChange={onColumnChange}
        />

         <DoneColumn
          items={items.filter((item) => item.status === "completed")}
          id={"completed"}
          title="Completed"
          onColumnChange={onColumnChange}
        /> 
      </div>
    </DndProvider>
  );
};

export default Board;
