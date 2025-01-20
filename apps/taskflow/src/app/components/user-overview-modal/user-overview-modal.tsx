'use client';
import { useState, useCallback, useMemo } from 'react';
import Modal from '@mui/material/Modal';
import { CloseOutlined } from '@mui/icons-material';
import './user-overview-modal.css';
import GitHubCalendar from 'react-github-calendar';
import useUserOverviewStore from '@/app/shared/store/user-overview-store';
import UserOverviewProjects from '../user-overview-projects/user-overview-projects';
import { Avatar } from '@mui/material';
import UserOverviewActivities from '../user-projects-activities/user-projects-activities';


const TABS = [
    {
        id: 1,
        label: "Projects"
    },
    {
        id: 2,
        label: "Activities"
    },
]

const UserOverviewModal = () => {
  const { open, closeModal, user } = useUserOverviewStore();
  const [currTab, setCurrTab] = useState<number>(1)


  const handleClose = useCallback(() => {
    closeModal();
  }, [closeModal]);

  const handleTab = useCallback((id: number)=>{
    setCurrTab(id)
  },[])


  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <div className="w-full h-full flex justify-center ">
          <div className="w-[500px] p-2  relative h-[500px] bg-[#fff] rounded-md mt-32">
            <button onClick={handleClose} className="absolute right-4 top-4">
                  <CloseOutlined style={{fontSize:"16px"}} />
            </button>
            <div className="mt-10  flex items-center">
              <Avatar alt={user?.fullname} src={user?.avatars[0]}/>
              <p className="text-sm ml-1">{user?.fullname}</p>
            </div>
            <div className="w-full mt-4 relative flex flex-col justify-center items-center">
              <div className="w-[90%] flex items-center">
                <GitHubCalendar
                  username={"user-test"}
                  blockSize={6}
                  blockMargin={3}
                />
              </div>
              <div className='w-full flex flex-col items-center mt-4 relative'>
            
               <ul className='w-[85%] text-[11px] my-2 flex border-b-[1px] py-[4px]' >
                {TABS.map((tab)=>{
                    return    <li key={tab.id} onClick={()=> handleTab(tab.id)} className={`mr-5 cursor-pointer relative ${currTab === tab.id ? "before:content-['']  before:absolute before:bottom-[-4px] before:h-[2px] before:rounded-full before:w-full before:bg-[#4754e4] " : ""} `}>{tab.label}</li>
 
                })}
               </ul>
               <div className='w-full h-[235px] flex items-center flex-col overflow-y-auto'>
                <div className='w-[85%]'>
                    {currTab === 1  ?   <UserOverviewProjects/> : <UserOverviewActivities/> }
                  
                </div>
               </div>
                  </div>
          
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default UserOverviewModal;
