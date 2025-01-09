/* eslint-disable react/no-children-prop */
"use client";
import { useForm } from "@tanstack/react-form";
import Link from "next/link";
import Logo from "../shared/ui/logo/logo";

/* eslint-disable @typescript-eslint/no-empty-object-type */
type LoginProps = {};

const Signup = (props: LoginProps) => {
  const form = useForm({
    defaultValues: {
      userName: "",
      email: "",
      password: "",
    },
    // onSubmit: async ({ value }) => {
    
    // },
  });

  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className=" border-[1px] border-[#f1f1f1] mt-20  h-[380px] rounded-md flex flex-col items-center w-[360px] p-2">
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
                name="userName"
                children={(field) => {
                  return (
                    <div>
                      <input
                        type="text"
                        placeholder="fullname"
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

            <div className="my-5 relative">
              <form.Field
                name="email"
                children={(field) => {
                  return (
                    <div>
                      <input
                        type="email"
                        placeholder="email"
                        className="bg-[#fcfcfc] px-1 rounded-md ml-2 w-80 h-10 placeholder:text-sm placeholder:px-1   border-[1px]  outline-[#60aafe] border-[#dfdfdf] "
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
                        className="bg-[#fcfcfc] px-1 placeholder:text-sm placeholder:px-1  rounded-md h-10 ml-2 w-80 border-[1px]  outline-[#60aafe] border-[#dfdfdf] "
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
                      {isSubmitting ? "..." : "Signup"}
                    </button>
                  </div>
                );
              }}
            />
          </form>
          <div className="mt-4 w-full flex justify-center">
            <Link href="/login" className="w-max">
              <span className="text-xs underline text-[#5d5d5d]">
                Already have an account? Login
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
