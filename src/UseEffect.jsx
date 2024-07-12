import { useEffect, useState } from "react";

function UseEffect() {

    const [value,setValue] = useState(0)
    const [name,setName] = useState("AMan")

    useEffect(()=>{
        console.log("UseEffect Function")
    },[value])

    
    return ( 
        <>
            <h1>UseEffect</h1>
            <h1>{value}</h1>
            <button onClick={()=>{setValue(value+1)}}>+</button>
            <h2>{name}</h2>
            <button onClick={()=>{setName("Devanshu")}}>Update</button>
        </>
     );
}

export default UseEffect;