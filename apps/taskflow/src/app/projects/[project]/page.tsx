"use client"
import {useState, useCallback} from 'react'
import {useParams} from "next/navigation"
import TaskBurndown from "../../components/task-burndown/task-burndown"
import TaskComments from "../../components/task-comments/task-comment"
import TaskCommits from "../../components/task-commits/task-commits"
import Projectstatus from "../../components/task-status/task-status"
import Board from '../../components/board/board'
import { AddOutlined } from '@mui/icons-material'
import ProjectUsers from '@/app/components/project-users/project-users'


interface FilterTags{
  id: number,
  label: string
}
const FILTERTAGS:FilterTags[] = [
  {id: 1, 
    label: "Board"
  }
]

const Projects = (props)=>{

  const {project} = useParams()

  const [currFilterTag, setCurrFilterTag] = useState<number>(1)

  const handleFilterTag = useCallback((tagId: number)=>{
    setCurrFilterTag(tagId)
  },[currFilterTag, setCurrFilterTag])

    return (
        <div className="mt-2 grid md:grid-cols-[minmax(0px,_1fr)_250px]  grid-cols-[minmax(0px,_1fr)_50px] gap-4">
            <div className=''>
                <div>
                  <h2 className="font-bold text-xs capitalize">{project} Report</h2>
                  <p className="text-[10px] w-3/6 text-[#5c5c5c]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat, facere fugit cumque molestias magnam atque suscipit quos voluptatum mollitia repellat.</p>
                </div>
              
                <div className="grid md:grid-cols-[minmax(0px,_1fr)_200px_minmax(0px,_1fr)] md:grid-rows-none grid-flow-col grid-rows-3 gap-3">
                   <Projectstatus/>
                   <div className="relative grid gap-3">
                   <TaskComments/>
                   <TaskCommits/>
                   </div>
                   <TaskBurndown/>
                </div>
                <div className="mt-6">
                  <div className='flex items-center'>
                    <ul className="flex text-[10px] font-normal p-1 w-max bg-[#eff0f3] rounded-md">
                      {FILTERTAGS.map((tag)=>(
                        <li 
                        onClick={()=> handleFilterTag(tag.id)} key={tag.id} 
                        className={`mx-1 p-[3px] drop-shadow-sm rounded-sm cursor-pointer ${currFilterTag === tag.id? 'bg-[#fff]': ""} `}>{tag.label}</li>

                      ))}
                     
                    </ul>

                    <button className='border-[1px] bg-[#00] flex items-center px-2 py-1 cursor-pointer rounded-md text-[10px] ml-12'>
                      <AddOutlined className='mr-1' style={{fontSize:"12px"}}/>
                      Add Task
                    </button>
                  </div>
                  <div className='mt-3'>
                        <Board/>
                  </div>
                  </div>
                </div>
                <div className='relative w-full'>
                  <ProjectUsers/>

                </div>
                
            </div>
    )
}

export default Projects