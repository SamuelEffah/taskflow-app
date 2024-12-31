"use client"
import { useMemo, useState } from 'react'
import { Calendar, Views,momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import './timeline.css'

const mLocalizer = momentLocalizer(moment)


const event  = [
    {
        id: 1,
        title: 'Long Event',
        start: new Date(2025, 1, 1),
        end: new Date(2025, 1, 2),
      },
]


const Timeline= ()=>{
    const [date, setDate] = useState(new Date());

    const { defaultDate, views } = useMemo(
        () => ({
          defaultDate: new Date(2025, 1, 1),
          views: {
            month: true
          },
        }),
        []
      )

    return (
        <div className='h-[600px]'>
        <Calendar
          defaultDate={defaultDate}
          defaultView={Views.MONTH}
          events={event}
          localizer={mLocalizer}
          views={views}
          date={date}
          onNavigate={(date)=>{
            setDate(new Date(date))
          } }
        />
        </div>

    )
}

export default Timeline