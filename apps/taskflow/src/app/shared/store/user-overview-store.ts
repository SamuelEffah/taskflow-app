import { User } from '@/app/utils/data/users'
import {create} from 'zustand'
import {subscribeWithSelector} from 'zustand/middleware'
import {immer} from 'zustand/middleware/immer'


interface UserOverviewState{
    open: boolean
    user?: User 
    openModal: (user: User)=> void
    closeModal: ()=> void

}

const useUserOverviewStore = create<UserOverviewState>()(
  subscribeWithSelector((set)=>({
    open: false,
    user:undefined,
    openModal: (user: User)=> set({open: true, user: user}),
    closeModal: ()=> set({open: false})

  }))
)


export default useUserOverviewStore