"use client"
import {useState, useCallback} from 'react'
import TaskBurndown from "../components/task-burndown/task-burndown"
import TaskComments from "../components/task-comments/task-comment"
import TaskCommits from "../components/task-commits/task-commits"
import TaskStatus from "../components/task-status/task-status"
import Board from '../components/board/board'


interface FilterTags{
  id: number,
  label: string
}
const FILTERTAGS:FilterTags[] = [
  {id: 1, 
    label: "Spreedsheet"
  },
  {id: 2, 
    label: "Board"
  },
  {id: 3, 
    label: "Calendar"
  },
  {id: 4, 
    label: "Timeline"
  }
]

const Tasks = (props)=>{

  const [currFilterTag, setCurrFilterTag] = useState<number>(2)

  const handleFilterTag = useCallback((tagId: number)=>{
    setCurrFilterTag(tagId)
  },[currFilterTag, setCurrFilterTag])

    return (
        <div className="mt-2">
                <div>
                  <h2 className="font-bold text-xs">Tasks Report</h2>
                  <p className="text-[10px] w-3/6 text-[#5c5c5c]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat, facere fugit cumque molestias magnam atque suscipit quos voluptatum mollitia repellat.</p>
                </div>
                <div className="mt-5 grid grid-cols-[minmax(0px,_1fr)_200px_minmax(0px,_1fr)] gap-3">
                   <TaskStatus/>
                   <div className="relative grid gap-3">
                   <TaskComments/>
                   <TaskCommits/>
                   </div>
                   <TaskBurndown/>
                </div>
                <div className="mt-6">
                  <div>
                    <ul className="flex text-[10px] font-normal p-1 w-max bg-[#eff0f3] rounded-md">
                      {FILTERTAGS.map((tag)=>(
                        <li 
                        onClick={()=> handleFilterTag(tag.id)} key={tag.id} 
                        className={`mx-1 p-[3px] drop-shadow-sm rounded-sm cursor-pointer ${currFilterTag === tag.id? 'bg-[#fff]': ""} `}>{tag.label}</li>

                      ))}
                     
                    </ul>
                  </div>
                  <div className='mt-3'>
                        <Board/>
                  </div>
                </div>
            </div>
    )
}

export default Tasks