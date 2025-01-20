"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Navigation } from "@/app/utils/data/navigation";
import { NAVIGATION_ICONS } from "@/app/shared/ui/icons/navigation-bar-icons";
import Logo from "@/app/shared/ui/logo/logo";
import { Avatar } from "@mui/material";

const NavbarSection = Object.keys(Navigation)

const SideBar = () => {
  const pathName = usePathname();

  return (
    <div className="absolute overflow-auto flex flex-col items-center justify-between md:w-52 h-dvh w-14 border-r-[1px] border-[#f1f1f1]  bg-[#fefefe]">
      <div className="relative w-full flex flex-col items-center">
       <Logo/>
        {NavbarSection.map((section)=>{
          return (
        <div key={section} className="mt-8 w-[90%] relative">
          <div className="mb-1">
            <p className="text-[11px] text-[#646464] md:block hidden capitalize">{section}</p>
          </div>
          {Navigation[section].map((navItem)=>{
         return  <div key={navItem.name} className="w-full">
            <div className={`w-full flex flex-col items-end `}>
            <Link className="w-full relative" href={navItem.subNavigation ? "" : navItem.path}>
            <button className={`w-full relative p-[2px]  rounded-md   ${!navItem.subNavigation ? "hover:bg-[#efefef]" : "" }  ${pathName === navItem.path ? "bg-[#efefef]": ""}`}>
              <span title={navItem.name} className="w-full flex items-center md:justify-start justify-center ">
              <span className="text-[16px] text-[#555555]">
               {NAVIGATION_ICONS[navItem.icon]}
              </span>
              <span className="text-[11px] md:block hidden pl-2">
                {navItem.name}
              </span>

              </span>
            </button>
            </Link>
         
            <div className="w-[90%] mt-1 relative">
            {navItem.subNavigation?.map((subNavBarItem)=>{
              return (
                <div key={subNavBarItem.name} className="w-full my-[4px] relative">
              <Link className="relative w-full" href={subNavBarItem.path}>
              <button className={`w-full p-[2px] rounded-md  hover:bg-[#efefef] ${pathName === subNavBarItem.path ? "bg-[#efefef]": ""}`}>
              <span title={subNavBarItem.name} className="w-full flex items-center md:justify-start justify-center">
              <span className="text-[#555555]">
               {NAVIGATION_ICONS[subNavBarItem.icon]}
              </span>
              <span className="text-[11px] md:block hidden pl-2">
                {subNavBarItem.name}
              </span>

              </span>
            </button>
              
              
              </Link>
                </div>
              )
            })}
               </div>
            </div>
         
          </div>
             
          })}

        </div>

          )
        })}


      </div>

      <div className="relative w-[90%] mt-8 mb-4">
        <div className="flex items-center md:justify-start justify-center my-4">
          <Avatar sx={{height: 25, width: 25}} src="/images/user-1.jpg" />
          <span className="text-[11px] md:block hidden ml-1">Sam Effah</span>
        </div>
      </div>
       
    </div>
  );
};

export default SideBar;
