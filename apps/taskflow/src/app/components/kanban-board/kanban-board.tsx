"use client";
import { useCallback, useState } from "react";
import { HTML5Backend } from "react-dnd-html5-backend";

import { DndProvider } from "react-dnd";
import Column from "./column";

interface Task {
  id: string;
  description?: string;
  assignee?: string;
  dueDate?: string;
  status?: string;
  columnId?: string;
}

const KanbanBoard = () => {
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
      <div className="flex w-full h-full relative">
        <Column
          items={items.filter(
            (item) => item.columnId === "todo" || !item.columnId,
          )}
          id="todo"
          title="Todo"
          onColumnChange={onColumnChange}
        />
        <Column
          items={items.filter((item) => item.columnId === "inprogress")}
          id={"inprogress"}
          title="In Progress"
          onColumnChange={onColumnChange}
        />
        <Column
          items={items.filter((item) => item.columnId === "in-review")}
          id={"in-review"}
          title="In Review"
          onColumnChange={onColumnChange}
        />

        <Column
          items={items.filter((item) => item.columnId === "completed")}
          id={"completed"}
          title="Completed"
          onColumnChange={onColumnChange}
        />
      </div>
    </DndProvider>
  );
};

export default KanbanBoard;
