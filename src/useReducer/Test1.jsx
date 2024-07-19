import { Button } from "@mui/material";
import { useReducer } from "react";

function Test1() {

    const inititalState ={
        count:0,
        name:"Manny"
    }

    const [state,dispatch] = useReducer(reducer,inititalState)

    function reducer(currentState,action){
        switch(action){
            case "Increment":
               return {...currentState,count:currentState.count+1}
            
            case "Decrement":
                return {...currentState,count:currentState.count-1}   

            case "Update":
                return {...currentState,name:currentState.name="Kizie"}    

            default:
                return {...currentState,count:currentState.count}    
        }
    }

    return ( 
        <>
            <h1>UseReducer Hook</h1>
            <h1>{state.count}</h1>
            <Button onClick={()=>{dispatch("Increment")}}>Increment</Button>
            <Button onClick={()=>{dispatch("Decrement")}}>Decrement</Button>

            <h2>{state.name}</h2>
            <Button onClick={()=>{dispatch("Update")}}>Update</Button>
        </>
     );
}

export default Test1;