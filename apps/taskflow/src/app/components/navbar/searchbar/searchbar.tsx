"use client"
import React from 'react'
import {useCombobox} from 'downshift'
import { SearchOutlined } from '@mui/icons-material'


interface SearchItem{
    id: string
    title: string
    
}
  
    const SearchBar = ()=> {
      const [items, setItems] = React.useState<SearchItem[]>([{id:"1", title: "res"}])
      const {
        isOpen,
        getMenuProps,
        getInputProps,
        highlightedIndex,
        getItemProps,
        selectedItem,
      } = useCombobox({
        onInputValueChange({inputValue}) {
          setItems([])
        },
        items,
        itemToString(item) {
          return item ? item.title : ''
        },
      })
  
      return (
        <div>
          <div className="w-full flex relative flex-col gap-1">
            <div className="flex  h-6 relative items-center  bg-[#f4f4f4] gap-0.5">
            <span >
            <SearchOutlined className="text-[#7a7a7a] mx-1" style={{fontSize: "14px"}} />
          </span>
              <input
                placeholder="search..."
                className="w-full  h-full rounded-md px-1  bg-[#f4f4f4]  text-[#373737] outline-none text-xs"
                {...getInputProps()}
              />
            </div>
          </div>
     
          <ul
            className={`absolute rounded-b-md w-60 bg-[#ffffff] mt-1 shadow-md max-h-80 overflow-scroll p-2 z-10 ${
              !(isOpen && items.length) && 'hidden'
            }`}
            {...getMenuProps()}
          >
            {isOpen &&
              items.map((item, index) => (
                <li
                  className="p-[2px]"
                  key={item.id}
                  {...getItemProps({item, index})}
                >
                    <span>{item.title}</span>
                </li>
              ))}
          </ul>
    
       
        </div>
      )
    }


    export default SearchBar

  

