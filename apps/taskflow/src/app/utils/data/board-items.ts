export interface Task {
  id: string;
  title: string,
  description?: string;
  assignee?: string;
  project: string
  taskNumber: string
  dueDate?: string;
  comments:string[]
  tags:string[]
  priority: string
  status: string,
}

export const BoardItems: Task[] = [
  {
    id: "1",
    title: "Add a lock feature to board",
    project: "MDS",
    taskNumber: "MDS-49",
    comments:[],
    tags:[],
    priority: "Urgent",
    status: "todo",
    dueDate: new Date().toDateString(),
    assignee: "Sam Effah",
  },
  

];
