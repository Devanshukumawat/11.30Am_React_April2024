import { useContext } from "react";
import { data, data1 } from "../App";
import ChildC from "./ChildC";




function ChildB() {
    const userData = useContext(data)
    const text = useContext(data1)
    return ( 
        <>
            <h1>ChildB {userData} {text}</h1>
            

            <ChildC/>
        </>
     );
}

export default ChildB;