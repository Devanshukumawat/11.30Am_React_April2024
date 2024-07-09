function Example(props) {
    // console.log(props)
    // const {someText} =props

    props.someText = "Hello Text"

    return ( 
        <>
            <h1>Example :- 🙂</h1>
            {/* <h2>{props.someText}</h2>
            <h1>{someText}</h1> */}
            {/* <h1>{someText}</h1> */}
        </>
     );
}

export default Example;