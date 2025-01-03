

interface Navigation{
    icon: string,
    name: string,
    path: string,

}


interface NavigationList extends Navigation{
        subNavigation?: Navigation[]
}

export const Navigation:Record<string, NavigationList[]> ={
    overview:[
        {
        icon:"InsertChartOutlined",
        name: "Dashboard",
        path: "/dashboard"
    },
    {
        icon:"EventOutlined",
        name: "Calendar",
        path: "/calendar"
    },

    {
        icon:"Grid3x3Outlined",
        name: "Tasks",
        path: "/tasks",
        subNavigation:[
        //     {
        //         icon:"FolderOutlined",
        //         name: "Backlog",
        //         path: "/task/backlog",
    
        //     },
        //     {
        //     icon:"BoltOutlined",
        //     name: "In Progress",
        //     path: "/task/in-progress",

        // },
        // {
        //     icon:"BookmarkAddedOutlined",
        //     name: "Validation",
        //     path: "/task/validation",

        // },
        // {
        //     icon:"CheckCircleOutlined",
        //     name: "Done",
        //     path: "/task/done",

        // }
        
      
        


    ]
    },
],

    tools:[
        {
        icon:"NotificationsOutlined",
        name: "Notifcation",
        path: "/notification/inbox",
        subNavigation:[
            {
                icon:"InboxOutlined",
                name: "Inbox",
                path: "/notification/inbox"
            },


    {
        icon:"DescriptionOutlined",
        name: "Read",
        path: "/notification/read"
    },
        ]
    },
    {
        icon:"CodeOutlined",
        name: "Integration",
        path: "/integration"
    },

],

    metrics:[
        {
        icon:"ShowChartOutlined",
        name: "Active",
        path: "/"
    }
 
]
}

