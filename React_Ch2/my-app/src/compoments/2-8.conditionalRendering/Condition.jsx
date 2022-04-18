import React from 'react'

function UserGreeting(props) {
    // return <h1>{props.name}, Welcom It's {props.count} times</h1>
    // return <h1>{props.name && props.name + ','} Welcom{Boolean(props.count) && `It's ${props.count} times`}</h1>
    return <h1>{props.name && props.name + ','} Welcom{props.count ? `It's ${props.count} times` : null}</h1>

}

function GuesGreeting(props) {
    return <h1>Please sing up.</h1>
}

function Greeting(props) {
    // if(props.isLogdin) {
    //     return <UserGreeting name="YoungBin" count={0} />
    // }
    // return <GuesGreeting />; 

    return props.isLogdin ? <UserGreeting name="YoungBin" count={0} /> : <GuesGreeting />
}

export default function Condition() {
    const isLogdin = true;
  return (
    <div>
        <Greeting isLogdin={isLogdin} />
    </div>
  )
}
