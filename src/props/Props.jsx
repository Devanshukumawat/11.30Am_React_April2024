function Props(props) {

    console.log(props.userData[0].firstName)



    // function app(a,b){
    //     console.log(a*b)
    // }

    // app(4,6)



    return ( 
        <>
            <h1>Props</h1>
            <h1>Username :- {props.userData[0].firstName} {props.userData[0].LastName}</h1>
        </>
     );
}

export default Props;