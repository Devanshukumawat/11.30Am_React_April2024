import {useState} from "react"

function UseStateHook() {

    // let firstName = "Devanshu"

    // function handleValue(){
    //     firstName = "Manny"
    // }

  
    const [value,setValue] = useState("aman")

    function handleValue(){
        setValue("manny")
    }

    return ( 
        <>
            <h1>Learn UseState Hook</h1>

            <h1>UserName :- {value} </h1>
            <button onClick={handleValue} >Update</button>

        </>
     );
}

export default UseStateHook;