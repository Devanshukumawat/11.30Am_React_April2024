import { useState } from "react";

function Counter() {

    let data = {firstName:"Devanshu",lastName:"sharma"}


    const [userData,setUserdata] = useState(data)

    const [value,setValue] = useState(0)

    function handleIncrement(){
        setValue(value+1)
    }

    function handleDecrement(){
        if(value){
            setValue(value-1)
        }
        
    }

    function handleUpdate(){
        setUserdata({...userData,firstName:"Aman"})
    }

    return ( 
        <>
            <h1>Counter Application</h1>
            <button onClick={handleIncrement}>Increment</button>
            <h1>{value}</h1>
            <button onClick={handleDecrement}>Decrement</button>


            <h1>User Data</h1>
            <h2>{userData.firstName} {userData.lastName}</h2>
            <button onClick={handleUpdate}>Update</button>


        </>
     );
}

export default Counter;