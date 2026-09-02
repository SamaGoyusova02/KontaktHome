import { useState, useEffect } from 'react';
function Time() {
  const [days, setDays] = useState(30);
  const [hours, setHours] = useState(9);
  const [minutes, setMinutes] = useState(54);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (minutes > 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      } else if (hours > 0) {
        setHours(hours - 1);
        setMinutes(59);
        setSeconds(59);
      } else if (days > 0) {
        setDays(days - 1);
        setHours(23);
        setMinutes(59);
        setSeconds(59);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds, minutes, hours, days]);

  const format = (num) => (num < 10 ? `0${num}` : num);

  return (
    <div>
      <ul className='flex justify-center text-center gap-5 mt-2 items-center font-[Montserrat,_sans-serif]'>
        <li>
          <p className='text-[#17a539] font-[600] text-[.8em]'>{format(days)}</p>
          <p className='text-[#323232] font-[500] text-[.7em]'>gün</p>
        </li>
        <li>
          <p className='text-[#17a539] font-[600] text-[.8em]'>{format(hours)}</p>
          <p className='text-[#323232] font-[500] text-[.7em]'>saat</p>
        </li> 
        <li>
          <p className='text-[#17a539] font-[600] text-[.8em]'>{format(minutes)}</p>
          <p className='text-[#323232] font-[500] text-[.7em]'>dəqiqə</p>
        </li>
      </ul>
    </div>
  );
}

export default Time;