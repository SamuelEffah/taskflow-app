import {create} from 'zustand'
import {subscribeWithSelector} from 'zustand/middleware'
import {immer} from 'zustand/middleware/immer'


interface TaskDetailsState{
    open: boolean
    taskId?: string 
    openModal: (id: string)=> void
    closeModal: ()=> void

}

const useTaskDetailsStore = create<TaskDetailsState>()(
  subscribeWithSelector((set)=>({
    open: false,
    taskId:undefined,
    openModal: (taskId: string)=> set({open: true, taskId: taskId}),
    closeModal: ()=> set({open: false})

  }))
)


export default useTaskDetailsStore