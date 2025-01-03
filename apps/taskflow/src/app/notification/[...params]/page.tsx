"use client"
import NotificationItem from '@/app/components/notification/notification-item'
import { usePathname, useSearchParams } from 'next/navigation'
import {useState, useCallback, useEffect} from 'react'

const NOTIFICATION_FILTER_TAGS = [
    {
        id: 1,
        label: 'Inbox',
        path: "/notification/inbox",

    },
    {
        id: 2,
        label: 'Read',
        path: "/notification/read",

    }
]

const Notification = (props)=>{

  const pathName =  usePathname()
  
    const [currFilterTag, setCurrFilterTag] = useState<number>(1)

 useEffect(()=>{
   setCurrFilterTag((prev)=>{
  const id =   NOTIFICATION_FILTER_TAGS.find((t)=> t.path === pathName)?.id
  return id ? id : prev
   }
  )
 },[setCurrFilterTag, pathName])

  const handleFilterTag = useCallback((tagId: number)=>{
    setCurrFilterTag(tagId)
  },[currFilterTag, setCurrFilterTag])

    return (
        <div className="mt-2">
                <div>
                  <h2 className="font-bold text-xs">Notification</h2>
                  <p className="text-[10px] w-3/6 text-[#5c5c5c]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat, facere fugit cumque molestias magnam atque suscipit quos voluptatum mollitia repellat.</p>
                </div>
             
                <div className="mt-6">
                  <div>
                    <ul className="flex text-[10px] font-normal p-1 w-max bg-[#eff0f3] rounded-md">
                      {NOTIFICATION_FILTER_TAGS.map((tag)=>(
                        <li 
                        onClick={()=> handleFilterTag(tag.id)} key={tag.id} 
                        className={`mx-1 p-[3px] drop-shadow-sm rounded-sm cursor-pointer ${currFilterTag === tag.id? 'bg-[#fff]': ""} `}>{tag.label}</li>

                      ))}
                     
                    </ul>
                  </div>
                  <div className='mt-3 w-full overflow-auto max-h-[600px] relative p-5 rounded-md bg-[#fff] drop-shadow-sm'>
                      <NotificationItem/>
                      <NotificationItem/>
                  </div>
                </div>
            </div>
    )
}

export default Notification