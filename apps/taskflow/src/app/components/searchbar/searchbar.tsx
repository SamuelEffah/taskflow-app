"use client";
import SearchIcon from "@mui/icons-material/Search";
import { useCombobox } from "downshift";
import React, { useState } from "react";

export interface SearchBarProps {
  items: string[];
  seletedItem: string;
  onSelectedItem: (item: string) => void;
}

const books = [
  { id: "book-1", author: "Harper Lee", title: "To Kill a Mockingbird" },
  { id: "book-2", author: "Lev Tolstoy", title: "War and Peace" },
  { id: "book-3", author: "Fyodor Dostoyevsy", title: "The Idiot" },
];

const SearchBar = (props: SearchBarProps) => {
  // const [inputValue, setInputValue]= useState("")
  const [items, setItems] = useState(books);

  const {
    isOpen,
    getInputProps,
    getItemProps,
    // highlightedIndex,
    getMenuProps,
    // selectedItem
  } = useCombobox({
    onInputValueChange({ inputValue }) {
      console.log("intputValue.... ", inputValue);
      // setItems({id:"book-4", author:"test", title:"teafs"})
    },
    items,
    itemToString(item) {
      return item ? item.title : "";
    },
  });

  return (
    <div className="relative w-[500px]">
      <div className="w-full bg-[#e1e1e1] p-1.5 rounded-md">
        <SearchIcon className="text-[#8e8e8e]" style={{ fontSize: "20px" }} />
        <input
          className="bg-[#e1e1e1] h-full w-[90%] outline-none"
          placeholder="search for tasks"
          {...getInputProps()}
        />
      </div>
      <ul
        className="absolute z-50 drop-shadow-lg bg-[#fff] w-full rounded-b-md"
        {...getMenuProps()}
      >
        {isOpen &&
          items.map((item, index) => {
            return (
              <li
                className="p-2 cursor-pointer hover:bg-[#e6e6e6]"
                key={item.id}
                {...getItemProps({ item, index })}
              >
                {item.title}
              </li>
            );
          })}
      </ul>
    </div>
  );
};
export default SearchBar;
