import React, {useState} from 'react';


function HookCounter2 () {
    const initialCount =0 ;

    const [count, setCount ]=  useState(initialCount) //array destructuring
    const incrementFive = () => {
        for (let i =0; i<5; i++){
            setCount(prevCount => prevCount + 1)
        }
    }
    return (
        <div>
            count: {count}
            <button className="btn btn-default" onClick={() => setCount(initialCount)} > Reset </button>
            <button className="btn btn-default" onClick={() => setCount(prevCount => prevCount + 1)} > Increment </button>
            <button className="btn btn-default"onClick={() => setCount(prevCount => prevCount - 1)} > Decrement </button>
            <button className="btn btn-default"onClick={() => incrementFive(count)} > increment by 5 </button>

        </div>
    )
}


export default HookCounter2;