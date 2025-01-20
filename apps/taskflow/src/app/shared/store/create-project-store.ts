import {create} from 'zustand'
import {subscribeWithSelector} from 'zustand/middleware'
import {immer} from 'zustand/middleware/immer'


interface CreateProjectState{
    open: boolean
    openModal: ()=> void
    closeModal: ()=> void

}

const useCreateProjectStore = create<CreateProjectState>()(
  subscribeWithSelector((set)=>({
    open: false,
    openModal: ()=> set({open: true}),
    closeModal: ()=> set({open: false})

  }))
)


export default useCreateProjectStore