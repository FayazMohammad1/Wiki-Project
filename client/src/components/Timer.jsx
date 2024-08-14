import React, { useState, useEffect } from 'react'

const Timer = ({ duration }) => {

    const [time, setTime] = useState(duration);

    useEffect(() => {
        setTimeout(() => {
            setTime(time - 1000);
        }, 1000);
    }, [time]);


    const getFormattedTime = (milliseconds) => {
        let total_seconds = parseInt(Math.floor(milliseconds / 1000));
        let total_minutes = parseInt(Math.floor(total_seconds / 60));
        let total_hours = parseInt(Math.floor(total_minutes / 60));

        let days = parseInt(Math.floor(total_hours / 24));
        let seconds = parseInt(total_seconds % 60);
        let minutes = parseInt(total_minutes % 60);
        let hours = parseInt(total_hours % 24);

        return { days, hours, minutes, seconds };
    };

    const { days, hours, minutes, seconds } = getFormattedTime(time);

  return (
    <div className='text-white font-semibold text-3xl flex tracking-widest mb-10'>
        <div className='flex flex-col items-center mr-4'>0{days}
            <p className='text-sm font-normal'>days</p>
        </div>
        <div className='flex flex-col items-center mr-4'>{hours}
            <p className='text-sm font-normal'>hrs</p>
        </div>
        <div className='flex flex-col items-center mr-4'>{minutes}
            <p className='text-sm font-normal'>mins</p>
        </div>
        <div className='flex flex-col items-center mr-4'>{seconds}
            <p className='text-sm font-normal'>sec</p>
        </div>
    </div>
  )
}

export default Timer