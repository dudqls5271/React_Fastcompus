import React from 'react'

export default function Event() {
    const handleButtonOnclick = (e) => {
        console.log("handleButtonOnclick");
        console.dir(e);
    }

    const handleMouseLeave = () => {
        console.log("handleMouseLeave");
    }

    const handleClickCapture = () => {
        console.log("handleClickCapture");      
    }

    const handleClickCapture2 = () => {
        console.log("handleClickCapture2");      
    }

    const handleOnclickBubble = () => {
        console.log("handleOnclickBubble");      
    }
  return (
    <div onClickCapture={handleClickCapture}>
        <div onClickCapture={handleClickCapture2} onClick={handleOnclickBubble}>
            <button onClick={handleButtonOnclick} onMouseLeave={handleMouseLeave}>button</button>
        </div>
    </div>
  )
}
