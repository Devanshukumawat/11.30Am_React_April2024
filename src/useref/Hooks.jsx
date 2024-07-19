import { useRef } from "react";

function Hooks() {

    const useDom = useRef("")

    const useColor = useRef("")

    
    function handleColor(){
        useColor.current.style.color = 'green'
    }


    function handleInput(){
        // useDom.current.focus()
        useDom.current.style.color = "red"
        useDom.current.style.outline = "red"
        useDom.current.style.border = "1px solid red"
    }

    return ( 
        <>
            <h1 ref={useColor}>Useref Hook</h1>
            <button onClick={handleColor}>Color</button>
            
            <input type="text" ref={useDom}/>
            <button onClick={handleInput}>Submit</button>
            
        </>
     );
}

export default Hooks;