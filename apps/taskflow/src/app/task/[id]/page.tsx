"use client";
import UserAvatar from "@/app/components/userAvatar/userAvatar";
import { KeyboardDoubleArrowUp, CopyAll } from "@mui/icons-material";

const Task = () => {
  return (
    <div className="relative overflow-auto h-full px-5">
      <div className="m-4 h-full w-3/4">
        <h2 className="font-bold text-md">Fix muse page not loading</h2>
        <div className="relative mt-2 flex text-[#6a6a6a] ">
          <div className="w-max  mr-2 p-[1px] px-2 rounded-md bg-[#f6f6f6]">
            <KeyboardDoubleArrowUp
              className="text-[#fb1616]"
              style={{ fontSize: "18px" }}
            />
            <span className="text-xs">Major</span>
          </div>

          <div className="group hover:text-[#3d3d3d] cursor-pointer mr-2 p-[1px] px-2 rounded-md bg-[#f6f6f6]">
            <CopyAll style={{ fontSize: "18px" }} />
            <span className="text-xs">Create a branch</span>
          </div>

          <div className="group flex items-center hover:text-[#3d3d3d] cursor-pointer mr-2 p-[1px] px-2 rounded-md b">
            <UserAvatar className="w-4 h-4" />
            <span className="text-xs ml-1">Sam Effah</span>
          </div>
        </div>
        <div className="mt-12 relative">
          <p className="font-bold text-xs">Description</p>
          <div className="mt-2 w-3/4 min-h-[200px] p-2 border-[1px] rounded-sm">
            <p className="text-xs">
              {" "}
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Veritatis consequatur ullam unde optio illum quam, ea excepturi?
              Repudiandae, quo officia.
            </p>
          </div>
        </div>

        <div className="mt-8 relative">
          <p className="font-bold text-xs">Comments</p>
          <div className="mt-2 w-3/4 relative">
            <div className="relative flex items-center">
              <UserAvatar />
              <input
                placeholder="Add a comment"
                type="text"
                className="h-7 w-full ml-2 bg-inherit border outline-none px-1 placeholder:text-xs text-xs"
              />
            </div>

            <div className="mt-8">
              {[...Array(3).keys()].map((comment) => {
                return (
                  <div className="my-2 hover:bg-[#f1f1f1] p-2 rounded-sm">
                    <div className="flex items-center">
                      <UserAvatar className="w-4 h-4" />
                      <div className="pl-1 text-[#8b8b8b]">
                        <span className="text-xs pr-1">Levi Vaillorant</span>
                        <span className="text-xs"> 1 hour ago</span>
                      </div>
                    </div>
                    <div className="ml-8">
                      <span className="text-xs">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Non, quaerat.
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
