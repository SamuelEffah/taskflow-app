"use client"

import Timeline from "../components/timeline/timeline"

const TaskflowCalendar = (props)=>{
 

    return (
        <div className="mt-2">
                <div>
                  <h2 className="font-bold text-xs">Calendar</h2>
                  <p className="text-[10px] w-3/6 text-[#5c5c5c]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat, facere fugit cumque molestias magnam atque suscipit quos voluptatum mollitia repellat.</p>
                </div>
               
                <div className="mt-6">
          
                    <Timeline/>
             
                 
                </div>
            </div>
    )
}

export default TaskflowCalendar