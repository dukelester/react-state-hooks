import React, {useState} from 'react';


function HookCounter3 () {
    const initialCount =0 ;

    const [name, setName ]=  useState({firstName:'', lastName:'',}) //array destructuring
    return (
        <div>
            <form>

                <input type='text' value={name.firstName} onChange={e => setName({
                    ...name, firstName: e.target.value
                })}></input>
                <input type='text'  value={name.lastName} onChange={e => setName({
                   ...name, lastName: e.target.value
                })}></input>
                <h3>Your first name is {name.firstName}</h3>
                <h3>Your last name is {name.lastName}</h3>
            </form>

        </div>
    )
}


export default HookCounter3;