export interface Backlog {
  id: String;
  issueType: String;
  project: String;
  issueNumber: String;
  description: String;
  priority: string;
  status: String;
  reporter: String;
}

export const BacklogData: Backlog[] = [
  {
    id: "1",
    issueType: "feature",
    project: "BREW",
    issueNumber: "BREW-1",
    priority: "low",
    description: "Content Audit",
    status: "todo",
    reporter: "Sam",
  },
  {
    id: "2",
    issueType: "bug",
    project: "BREW",
    issueNumber: "BREW-2",
    priority: "medium",
    description: "Fix muse page not loading",
    status: "inprogress",
    reporter: "Sam",
  },
  {
    id: "3",
    issueType: "task",
    project: "BREW",
    issueNumber: "BREW-3",
    priority: "high",
    description: "Fix muse page not loading",
    status: "done",
    reporter: "Sam",
  },
];
