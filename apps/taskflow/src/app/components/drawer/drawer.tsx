'use client';
import { Drawer } from '@mui/material';
import './drawer.css';
import {
  AccessTimeOutlined,
  AttachFileOutlined,
  CalendarMonthOutlined,
  DescriptionOutlined,
  LocalOfferOutlined,
  PeopleOutline
} from '@mui/icons-material';
import PDFfile from '../pdf-file/pdf-file';

import { useMemo } from 'react';
import { BoardItems, Task } from '@/app/utils/data/board-items';
import useTaskDetailsStore from '@/app/shared/store/task-details-store';
import UserAvatar from '../userAvatar/userAvatar';

const TaskflowDrawer = () => {
  const { open, closeModal, taskId } = useTaskDetailsStore();

  const task = useMemo<Task | undefined>(() => {
    if (taskId) {
      return BoardItems.find((t) => t.id === taskId);
    }
    return undefined;
  }, [taskId]);


  return (
    <div className="max-h-full">
      <Drawer open={open} onClose={closeModal} anchor="right">
        <div className="h-full w-full relative">
          <div className="flex items-center border-b-[1px] text-[#5c5c5c] text-[12px] border-[#f1f1f1] h-8">
            <span className="ml-4">projects/ {task?.project}</span>
          </div>
          <div className="p-4">
            <h2 className="font-medium  ">{task?.title}</h2>

            <div className="text-[10px] my-2">
              <div className="my-2  flex items-center">
                <div className="flex items-center w-20">
                  <AccessTimeOutlined
                    className="text-[#5c5c5c]"
                    style={{ fontSize: '12px' }}
                  />
                  <span className="ml-1 text-[#5c5c5c]">Status</span>
                </div>
                <span className="capitalize">{task?.status}</span>
              </div>

              <div className="my-2 flex items-center">
                <div className="flex item-center w-20 ">
                  <CalendarMonthOutlined
                    className="text-[#5c5c5c]"
                    style={{ fontSize: '12px' }}
                  />
                  <span className="ml-1 text-[#5c5c5c]">Due Date</span>
                </div>
                <span>{task?.dueDate}</span>
              </div>

              <div className="my-2  flex items-center">
                <div className="flex items-center w-20 ">
                  <PeopleOutline
                    className="text-[#5c5c5c]"
                    style={{ fontSize: '12px' }}
                  />
                  <span className="ml-1 text-[#5c5c5c]">Assignee</span>
                </div>
                <span>{task?.assignee}</span>
              </div>
              <div className="my-2  flex items-center">
                <div className="flex items-center w-20 ">
                  <LocalOfferOutlined
                    className="text-[#5c5c5c]"
                    style={{ fontSize: '12px' }}
                  />
                  <span className="ml-1 text-[#5c5c5c]">Tags</span>
                </div>
                <span>tech</span>
              </div>

              <div className="my-6">
                <div className="flex items-center w-20 ">
                  <DescriptionOutlined
                    className="text-[#5c5c5c]"
                    style={{ fontSize: '12px' }}
                  />
                  <span className="ml-1 text-[#5c5c5c]">Description</span>
                </div>
                <textarea
                  className="w-full p-2 mt-2 rounded-md border-[#f1f1f1] border-[1px]"
                  name=""
                  id=""
                  defaultValue=""
                />
              </div>

              <div>
                <div className="flex  items-center w-20 ">
                  <AttachFileOutlined
                    className="text-[#5c5c5c]"
                    style={{ fontSize: '12px' }}
                  />
                  <span className="ml-1 text-[#5c5c5c]">Attachment</span>
                </div>

                <div className="mt-2">
                  <PDFfile />
                </div>
              </div>
              <div className="mt-8">
                <div className="border-b-[1px] flex items-center py-2 ">
                  <span className="text-[#5c5c5c]">Comments</span>
                  <span className="ml-1 w-3 h-3 text-center text-[#323ef0] rounded-[3px] text-[8px]  bg-[#eaebfb]">
                    3
                  </span>
                </div>
                <div className="mt-3">
                <div className='flex items-center my-5'>
                <UserAvatar className="w-6 h-6" />
                <input className='w-[88%] ml-1 border-[1px] rounded-sm p-[3px]' type="text" placeholder='add a comment' />
                </div>
                  <div className="flex">
                    <UserAvatar className="w-6 h-6" />
                    <div className="flex flex-col ml-2">
                      <div className=" text-[10px] text-[#808080]">
                      <span>Sam Effah</span>
                      <span className="mx-1">&#x2022;</span>
                      <span>8 hours ago</span>
                        <div>
                          <p className=" text-black">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Maxime, neque.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default TaskflowDrawer;
