import React, { useEffect, useState } from 'react'

export default function FunctionalCommponent() {
  const [date, setDate] = useState(new Date());

  const tick = () =>  {
    setDate(new Date());
  }
    

  useEffect(() => {
    const interval = setInterval(() => tick(), 1000);

    return () => {
      clearInterval(interval);
    }
  },[])


  return (
    <div>
      <h1>Hello, world! It's FunctionCompnent</h1>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  );
}
