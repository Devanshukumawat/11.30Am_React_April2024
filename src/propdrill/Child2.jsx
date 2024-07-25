import Child3 from "./Child3";

function Child2(props) {
    const {child2} = props
    return ( 
        <>
            <h1>Child2</h1>
            <Child3 child3= {child2} />
        </>
     );
}

export default Child2;