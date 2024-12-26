"use client";
import ScheduleModal from "../schedule-modal/schedule-modal";
import SearchBar from "../searchbar/searchbar";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export type NavBarProps = {};

const NavBar = (props: NavBarProps) => {
  return (
    <div className=" h-[60px] px-6 w-full text-black items-center border-b-[1px] border-b-[#dedcdc]">
      <div className="flex h-full items-center">
        <div className="w-52">
          <h4 className="font-bold text-lg text-[#4c60f5]">TaskFlow</h4>
        </div>
        <SearchBar />
        <ScheduleModal />
      </div>
    </div>
  );
};

export default NavBar;
