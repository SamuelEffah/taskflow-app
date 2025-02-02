/* eslint-disable react/no-children-prop */
"use client";
import Link from "next/link";

import { Diamond, Google } from "@mui/icons-material";
import { useForm } from "@tanstack/react-form";
import Logo from "../shared/ui/logo/logo";

/* eslint-disable @typescript-eslint/no-empty-object-type */

const Login = (props) => {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    // onSubmit: async ({ value }) => {
     
    // },
  });

  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className=" border-[1px] border-[#efefef] mt-20  h-[380px] rounded-md flex flex-col items-center w-[360px] p-2">
         <Logo/>
        <div className="">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              e.stopPropagation();
              form.handleSubmit();
            }}
          >
            <div className="my-5 relative">
              <form.Field
                name="email"
                children={(field) => {
                  return (
                    <div>
                      <input
                        placeholder="email"
                        className="bg-[#fcfcfc] px-1 rounded-md ml-2 w-80 h-10 placeholder:text-sm placeholder:px-1  border-[1px] outline-[#60aafe] border-[#dfdfdf] "
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

            <div className="my-5">
              <form.Field
                name="password"
                children={(field) => {
                  return (
                    <div>
                      <input
                        type="password"
                        placeholder="password"
                        className="bg-[#fcfcfc] px-1 placeholder:text-sm placeholder:px-1  rounded-md h-10 ml-2 w-80 border-[1px] outline-[#60aafe] border-[#dfdfdf] "
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

            <form.Subscribe
              selector={(state) => [state.canSubmit, state.isSubmitting]}
              children={([canSubmit, isSubmitting]) => {
                return (
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      disabled={!canSubmit}
                      className="font-bold bg-[#4c60f5] h-10 w-10/12 cursor-pointer text-sm text-white rounded-md px-2 "
                    >
                      {isSubmitting ? "..." : "Login"}
                    </button>
                  </div>
                );
              }}
            />
          </form>
          <div className="mt-4 flex flex-col justify-center">
            <div className="w-full flex justify-center">
              <Link href="/signup" className="w-max">
                <span className="text-xs underline text-[#5d5d5d]">
                  Create a new account
                </span>
              </Link>
            </div>
            <span className="flex justify-center text-sm my-1 text-[#878787]">
              or
            </span>
            <div className="flex justify-center">
              <button className="flex h-10 rounded-md w-10/12 items-center border-[1px] hover:border-[#c4c4c4] justify-center bg-[#e8e8e8] ">
                <Google className="text-[#f94040]" />
                <span className="pl-2 text-sm">Sign in with Google</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
