import SearchBar from "../searchbar/searchbar"
import UserAvatar from "../userAvatar/userAvatar"


// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface NavBarProps{
    }

const NavBar = (props: NavBarProps)=>{

    return (
        <div className=" h-[60px] px-6 flex justify-between items-center border-b-[1px] border-b-[#dedcdc]">
            <div className="flex items-center">
            <h4 className="font-bold text-lg text-[#4c60f5] mr-[60px]">TaskFlow</h4>
            <SearchBar/>
            </div>
          
            <div className="flex items-center">
              <UserAvatar/>
            </div>
        </div>
    )

}


export default NavBar