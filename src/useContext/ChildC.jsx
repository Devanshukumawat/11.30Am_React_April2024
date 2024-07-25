import { data ,data1 } from "../App";
function ChildC() {
    console.log(data1)
    return ( 
        <>
        <span>ChildC</span>
        
            <data.Consumer>
                {
                    (userData)=>{
                        console.log(userData)
                        return(
                            <>
                               <data1.Consumer>
                                {
                                    (text)=>{
                                        console.log(text)
                                        return(
                                            <>
                                               <h1>{userData} , {text}</h1>
                                            </>
                                        )
                                    }
                                }
                               </data1.Consumer>
                            </>
                        )
                    }
                }
            </data.Consumer>
        </>
     );
}

export default ChildC;