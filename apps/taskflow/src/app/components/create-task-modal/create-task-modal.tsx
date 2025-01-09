/* eslint-disable react/no-children-prop */
"use client";
import { Add } from "@mui/icons-material";
import { Modal } from "@mui/material";
import { useForm } from "@tanstack/react-form";
import type { FieldApi } from "@tanstack/react-form";

import { useCallback, useState } from "react";

const CreateTaskModal = (props) => {
  const [isCreateTaskModalOpen, setIsCreateTaskModalOpen] = useState(false);
  const handleOpen = useCallback(() => {
    setIsCreateTaskModalOpen(true);
  }, [setIsCreateTaskModalOpen]);

  const handleClose = useCallback(() => {
    setIsCreateTaskModalOpen(false);
  }, [setIsCreateTaskModalOpen]);

  const form = useForm({
    defaultValues: {
      issueType: "",
      summary: "",
      reporter: "",
      components: "",
      description: "",
    },
    // onSubmit: async ({ value }) => {
   
    // },
  });

  return (
    <div className="mx-2">
      <button
        title="Create New Task"
        onClick={handleOpen}
        className="bg-[#4c60f5] mt-5 text-white font-medium flex items-center justify-center w-full p-2 rounded-md"
      >
        <Add style={{ fontSize: "20px" }} />
        <span className="pl-1 md:block hidden">Create New Task</span>
      </button>
      <Modal
        open={isCreateTaskModalOpen}
        onClose={handleClose}
        className=" flex  justify-center"
      >
        <div
          style={{ width: "500px", height: "350px" }}
          className=" flex mt-14 flex-col justify-between outline-none bg-[#fff] relative rounded-md "
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              e.stopPropagation();
              form.handleSubmit();
            }}
          >
            <div className="h-[300px] ">
              <div className="w-full border-b-[1px] px-2 py-1">
                <h3 className="font- text-md pt-2">Create Task</h3>
              </div>

              <div className="mt-6">
                <div className="my-4">
                  <form.Field
                    name="issueType"
                    children={(field) => {
                      return (
                        <div className="flex">
                          <div className=" w-24 flex items-center justify-end">
                            <label
                              className="text-sm  h-max"
                              htmlFor={field.name}
                            >
                              Issue Type
                            </label>
                          </div>
                          <select
                            className="bg-inherit  ml-2 w-80 border-[1px] outline-[#ffffff] border-[#f1f1f1]  "
                            onChange={(e) => field.handleChange(e.target.value)}
                            id={field.name}
                            name={field.name}
                          >
                            <option value="bug">Bug</option>
                            <option value="improvement">Improvement</option>
                            <option value="feature">Feature</option>
                          </select>
                        </div>
                      );
                    }}
                  />
                </div>

                <div className="my-4">
                  <form.Field
                    name="summary"
                    children={(field) => {
                      return (
                        <div className="flex">
                          <div className=" w-24 flex items-center justify-end">
                            <label
                              className="text-sm  h-max"
                              htmlFor={field.name}
                            >
                              Summary
                            </label>
                          </div>
                          <input
                            className="bg-inherit  ml-2 w-80 border-[1px] outline-[#ffffff] border-[#f1f1f1] "
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
                    name="components"
                    children={(field) => {
                      return (
                        <div className="flex">
                          <div className=" w-24 flex items-center justify-end">
                            <label
                              className="text-sm  h-max"
                              htmlFor={field.name}
                            >
                              Components
                            </label>
                          </div>
                          <input
                            className="bg-inherit  ml-2 w-80 border-[1px] outline-[#ffffff] border-[#f1f1f1] "
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
                        <div className="flex">
                          <div className=" w-24 flex items-center justify-end">
                            <label
                              className="text-sm h-max"
                              htmlFor={field.name}
                            >
                              Description
                            </label>
                          </div>
                          <textarea
                            className="bg-inherit  ml-2 w-80 border-[1px] outline-[#ffffff] border-[#f1f1f1]  "
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
                  <div className="h-[50px] px-2 border-t-[1px] flex w-full justify-end items-center">
                    <button
                      type="submit"
                      disabled={!canSubmit}
                      className="bg-[#4c60f5] cursor-pointer text-sm text-white rounded-md w-max h-[30px] px-2 "
                    >
                      {isSubmitting ? "..." : "Create"}
                    </button>
                    <button
                      onClick={(e) => {
                        form.reset();
                        handleClose();
                      }}
                      className="text-sm cursor-pointer text-red-400 hover:text-red-600 mx-2 w-max h-[30px] px-2  rounded-md "
                    >
                      Cancel
                    </button>
                  </div>
                );
              }}
            />
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default CreateTaskModal;
