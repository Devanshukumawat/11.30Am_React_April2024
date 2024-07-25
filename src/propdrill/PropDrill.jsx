import Child2 from "./Child2";

function PropDrill(props) {
    const {data} = props
    return ( 
        <>
            <h1>Child 1</h1>
            <Child2 child2={data} />
        </>
     );
}

export default PropDrill;