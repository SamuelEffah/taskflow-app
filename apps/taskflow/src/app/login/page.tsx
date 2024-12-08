
/* eslint-disable react/no-children-prop */
"use client"
import { useForm } from '@tanstack/react-form'
import {Google } from '@mui/icons-material'


/* eslint-disable @typescript-eslint/no-empty-object-type */
interface LoginProps{}


const Login = (props:LoginProps)=>{

    const form = useForm({
        defaultValues:{
            userName:"",
            password: ""
        },
        onSubmit:async({value})=>{
            console.log("value.... ", value)
        }
    })

    return (
        <div className="w-full h-full flex flex-col items-center">
            <div className=' border-2 border-[#dfdfdf] mt-20  h-[380px] rounded-md flex flex-col items-center w-[360px] p-2'>
              <h4 className="font-bold text-lg text-[#4c60f5] my-1">TaskFlow</h4>
                <div className=''>
                    <form 
                      onSubmit={(e)=>{
                        e.preventDefault()
                        e.stopPropagation()
                        form.handleSubmit()
                    }}
                    >
                <div className='my-5 relative'>
                        <form.Field
                        name = "userName"
                        children={(field)=>{
                            return (
                                <div>
                                      <input  placeholder='username or email' className='bg-slate-100 px-1 rounded-md ml-2 w-80 h-10 placeholder:text-sm placeholder:px-1  border-2 outline-[#60aafe] border-[#dfdfdf] '   id={field.name} name={field.name} value={field.state.value}
                                        onChange={(e)=> field.handleChange(e.target.value)}
                                    />
                                </div>
                            )
                        }}
                        
                        />

                    </div>

                    <div className='my-5'>
                        <form.Field
                        name = "password"
                        children={(field)=>{
                            return (
                                <div>
                                      <input type="password" placeholder='password' className='bg-slate-100 px-1 placeholder:text-sm placeholder:px-1  rounded-md h-10 ml-2 w-80 border-2 outline-[#60aafe] border-[#dfdfdf] '   id={field.name} name={field.name} value={field.state.value}
                                        onChange={(e)=> field.handleChange(e.target.value)}
                                    />
                                </div>
                            )
                        }}
                        
                        />

                    </div>


                    <form.Subscribe
                        selector={(state)=> [state.canSubmit, state.isSubmitting]}
                        children={([canSubmit, isSubmitting])=>{
                            return (
                                <div className='flex justify-center'>
                 
                                <button type="submit" disabled={!canSubmit} className='font-bold bg-[#4c60f5] h-10 w-10/12 cursor-pointer text-sm text-white rounded-md w-max h-[30px] px-2 '>
                                {isSubmitting ? "..." : "Login"}
                               </button>
                    
                            </div>
                            )
                        }}
                    
                    />


                    </form>
                    <div className="mt-4 flex flex-col justify-center">
                        <button>
                            <span className='text-sm underline text-[#5d5d5d]'>
                            Create a new account
                           </span>
                        </button>
                        <span className='flex justify-center text-sm my-1 text-[#878787]'>or</span> 
                        <div className='flex justify-center'>
                            <button className='flex h-10 rounded-md w-10/12 items-center border-2 hover:border-[#c4c4c4] justify-center bg-[#e8e8e8] '>
                                <Google className='text-[#f94040]'/>
                                <span className='pl-2 text-sm'>Sign in with Google</span>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}


export default Login