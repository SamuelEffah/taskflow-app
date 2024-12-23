const ScheduleItem = () => {
  return (
    <div className="relative w-full h-[60px] my-2 cursor-pointer hover:bg-[#e6e6e6]">
      <div className="flex items-center before:content-normal before:w-[4px] h-full relative before:h-full before:bg-red-500">
        <div className="p-2 w-full">
          <span className=" bg-[#bbbbbb] text-[#474747] text-[10px] rounded-md p-1 px-1">
            Task-2
          </span>
          <div>
            <p className="text-sm font-medium m-0 p-0">
              Improvmenent to the table
            </p>

            <div className="flex justify-between items-center w-full text-[#818181]">
              <p className="text-[10px] m-0 p-0">January 11 2024 at 11pm</p>
              <div>
                <span className="text-[12px]">11 comments</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleItem;
