const BacklogItem = () => {
  return (
    <div className="border-2  rounded-md w-3/4 my-3 flex h-max px-2 py-1 cursor-pointer hover:border-[#d1d1d1]">
      <span className="w-[30px] h-[20px]  bg-blue-600 flex-shrink-0 rounded-sm mr-2">
        &nbsp;
      </span>
      <div>
        <p className="text-sm">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum,
          blanditiis.
        </p>
      </div>
    </div>
  );
};

export default BacklogItem;
