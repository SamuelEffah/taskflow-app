"use client"
import {useState} from "react"
import SearchIcon from "@mui/icons-material/Search"
import {useCombobox, } from 'downshift'


export interface SearchBarProps{
}


const books = [
    {id: 'book-1', author: 'Harper Lee', title: 'To Kill a Mockingbird'},
    {id: 'book-2', author: 'Lev Tolstoy', title: 'War and Peace'},
    {id: 'book-3', author: 'Fyodor Dostoyevsy', title: 'The Idiot'},
]

const SearchBar  = ()=>{
    // const [inputValue, setInputValue]= useState("")
    const [items, setItems] = useState(books)


    const {
        isOpen,
        getInputProps,
        getItemProps,
        highlightedIndex,
        getMenuProps,
        selectedItem
     }  = useCombobox({
        onInputValueChange({inputValue}){
            console.log('intputValue.... ', inputValue)
            // setItems({id:"book-4", author:"test", title:"teafs"})
        },
        items,
        itemToString(item){
            return item ? item.title :''
        }

    })

    return (
        <div className="relative ">
        <div className="bg-[#efefef] p-1.5 rounded-md">
            <SearchIcon className="text-[#8e8e8e]" style={{fontSize:"20px"}}/>
            <input 
            
            className="bg-[#efefef] outline-none"
            placeholder="search for tasks"
            {...getInputProps()}
           />
       
       </div>
       <ul 
       className="absolute z-50 bg-[#f0f0f0] w-full rounded-b-md"
       
        {...getMenuProps()}
       >
       {
        isOpen && items.map((item, index)=>{
            return <li
            className="p-2"
            key={item.id}
            {...getItemProps({item,index})}
            >
                {item.title}

            </li>
        })
       }

       </ul>
    
        
    
        
        </div>
    )
}
export default SearchBar