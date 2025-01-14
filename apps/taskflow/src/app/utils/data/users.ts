
export interface User{
    id: string
    lastName: string
    firstName: string
    status: string
    fullname: string
    role: string,
    avatars: string[]

}


export const UsersList:User[] = [
{
    id: "1",
    lastName: "effah",
    firstName: "sam",
    status: "online",
    fullname:"Sam Effah",
    role: "admin",
    avatars: [
        "/images/user-1.jpg"
    ]
},
{
    id: "2",
    lastName: "doe",
    firstName: "jane",
    status: "online",
    fullname:"Jane Doe",
    role: "user",
    avatars: [
        "/images/user-2.jpg"
    ]
},
{
    id: "3",
    lastName: "smith",
    firstName: "dan",
    status: "online",
    fullname:"Dan Smith",
    role:"user",
    avatars: [
        "/images/user-3.jpg"
    ]
},
{
    id: "4",
    lastName: "letterman",
    firstName: "elliott",
    status: "online",
    fullname:"Elliott Letterman",
    role:"user",
    avatars: [
        "/images/user-4.jpg"
    ]
},
{
    id: "5",
    lastName: "blackwood",
    firstName: "charles",
    status: "online",
    fullname:"Charles Blackwood",
    role:"user",
    avatars: [
        "/images/user-5.jpg"
    ]
}
]