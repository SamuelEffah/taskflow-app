export interface DashboardOverviewType{
    id: string
    name: string
    description?: string
    size: number
    icon: string
}


export const DashboardOverviewList: DashboardOverviewType[]=[
    {
        id: "active-task",
        name: "Active Task",
        description: "Tasks that are still ongoing",
        size: 72,
        icon: "FcDocument"
    },
    {
        id: "in-review-task",
        name: "In Review",
        description: "Tasks that are in review",
        size: 72,
        icon: "FcInspection"
    },
    {
        id: "completed-task",
        name: "Completed Task",
        description: "Tasks that are completed",
        size: 72,
        icon: "FcApproval"
    }
]