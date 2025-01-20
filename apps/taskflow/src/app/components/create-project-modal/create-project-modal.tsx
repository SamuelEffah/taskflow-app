'use client';
import { useState, useCallback, useMemo } from 'react';
import Modal from '@mui/material/Modal';
import useCreateProjectStore from '@/app/shared/store/create-project-store';
import { CloseOutlined } from '@mui/icons-material';
import { useForm } from "@tanstack/react-form";




const CreateProjectModal = () => {
  const { open, closeModal } = useCreateProjectStore();


  const handleClose = useCallback(() => {
    closeModal();
  }, [closeModal]);


  const form = useForm({
    defaultValues: {
      projectName: "",
      description: "",
      avatar: "",
      projectLead: "",
    },
    // onSubmit: async ({ value }) => {
   
    // },
  });

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <div className="w-full h-full flex justify-center ">
          <div className="w-[500px] py-4 px-4 relative h-[500px] bg-[#fff] rounded-md mt-20">
         <div className='mt-2 flex w-full justify-between items-center'>
        <div>
            <p className='font-medium'>Create Project</p>
        </div>
          <button onClick={handleClose} className="">
              <CloseOutlined style={{fontSize:"16px"}} />
            </button>

         </div>

         <div>
         <form
            onSubmit={(e) => {
              e.preventDefault();
              e.stopPropagation();
              form.handleSubmit();
            }}
          >
            <div className="h-[380px]">
              <div className="mt-1 text-[11px]">

                <div className="my-4 ">
                  <form.Field
                    name="projectName"
                    children={(field) => {
                      return (
                        <div className="">
                         
                         <div>

                            <label
                              className="text-[10px]"
                              htmlFor={field.name}
                            >
                              Summary
                            </label>
                         </div>
                         
                          <input
                            className=" w-full px-1 h-8 bg-[#f3f3f3e5]  rounded-md"
                            id={field.name}
                            name={field.name}
                            value={field.state.value}
                            onChange={(e) => field.handleChange(e.target.value)}
                          />
                        </div>
                      );
                    }}
                  />
                </div>

                <div className="my-4">
                  <form.Field
                    name="description"
                    children={(field) => {
                      return (
                        <div className="">
                         
                         <div>

                            <label
                              className="text-[10px]"
                              htmlFor={field.name}
                            >
                              Description
                            </label>
                         </div>
                         
                          <input
                            className=" w-full  px-1  h-8 bg-[#f3f3f3e5]  rounded-md"
                            id={field.name}
                            name={field.name}
                            value={field.state.value}
                            onChange={(e) => field.handleChange(e.target.value)}
                          />
                        </div>
                      );
                    }}
                  />
                </div>

              </div>
            </div>

            <form.Subscribe
              selector={(state) => [state.canSubmit, state.isSubmitting]}
              children={([canSubmit, isSubmitting]) => {
                return (
                  <div className="h-[50px]  flex w-full justify-end items-center">
                   
                   <button
                      onClick={(e) => {
                        form.reset();
                        handleClose();
                      }}
                      className="text-sm cursor-pointer text-[10px]  text-[#8e8c8c] mx-2 w-max h-[30px] px-2  rounded-md "
                    >
                      <span className="text-[10px]">Cancel</span>
                    </button>

                    <button
                      type="submit"
                      disabled={!canSubmit}
                      className="bg-[#0408e9] cursor-pointer flex items-center  text-white p-1 rounded-[4px] "
                    >
                      <span className='text-[10px]'>Create Project</span>
                    </button>
                
                  </div>
                );
              }}
            />
          </form>
         </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CreateProjectModal;
