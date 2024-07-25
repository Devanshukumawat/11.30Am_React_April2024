import Child4 from "./Child4";

function Child3(props) {
    const {child3} = props
    return ( 
        <>
            <h1>Child3</h1>
            <Child4 child4={child3}/>
        </>
     );
}

export default Child3;