import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Single() {
    const id = useParams()
     const {abc} =id

     useEffect(() => {
        fetch(`https://dummyjson.com/products/${abc}`)
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log(data);
            
          });
      }, []);
     

    return ( 
        <>
            <h1>Single Product</h1>
            <h2>Id = {abc}</h2>
        </>
     );
}

export default Single;