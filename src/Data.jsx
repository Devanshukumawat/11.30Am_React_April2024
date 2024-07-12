// import { useEffect, useState } from "react";

import { useEffect, useState } from "react";

function Data() {


    const [value,setValue] = useState(0)
    const [data,setData] = useState([])
    const [userName,SetUsername] = useState("Manny")

    useEffect(()=>{
        fetch(`https://dummyjson.com/products/${value}`).then((res)=>{
            return res.json()
        }).then((data)=>{
            setData(data)
            console.log(data)

        })
    },[value])


    

    return ( 
        <>
            <h1>Product Data</h1>
            <p>{userName}</p>
            <button onClick={()=>{SetUsername("Kizie")}}>Update Name</button>
            <h1>{value}</h1>
            <h2>Title :- {data.title}</h2>
            <img src={data.images && data.images[0]} alt="" width={"80px"}/>
            <button onClick={()=>{setValue(value+1)}}>Update + </button>

        </>
     );
}

export default Data;


// function UseEffect() {
//     const [count, setCount] = useState(0);

//     useEffect(() => {
//       setTimeout(() => {
//         console.log("Timer")
//         setCount((count) => count + 1);
//       }, 1000);
//     },[count]);
  
//     return <h1>I've rendered {count} times!</h1>;
// }

// export default UseEffect ;