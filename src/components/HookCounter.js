import React, {useState} from 'react';


function HookCounter () {

const [count, setCount ]=  useState(0) //array destructuring

    return (
        <div> Hello Hook Js
        <button onClick={() => setCount(count + 1)} > clicks {count} </button>
        </div>
            )
}


export default HookCounter;