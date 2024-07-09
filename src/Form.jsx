import { useState } from "react";
import FormCss from "./form.module.css"
function Form() {

    function handleForm(e){
       
        e.preventDefault()
        console.log("FirstName :- "+firstName+" Lastname :- "+ lastName)
        setValue(firstName)
        setFname("")
    }

    const [firstName,setFname] = useState("")
    const [lastName,setLname] = useState("")
    const [value,setValue] = useState("")

    function handleFname(e){
        setFname(e.target.value)
    }

    function handleLname(e){
        setLname(e.target.value)
    }

    return ( 
        <>
            
            <div className={FormCss.main} >
            <div className={FormCss.form}>
            <h1>{value===""?"Form":
            "Hello "+value}</h1>
                <form onSubmit={handleForm}>
                    <label>FirstName</label>
                    <input type="text" className="form-control"
                    placeholder="FirstName"
                        value={firstName}
                        onChange={handleFname}
                    />
                    <label>LastName</label>
                    <input type="text" className="form-control"
                        value={lastName}
                        onChange={handleLname}
                    />
                    <button type="submit" className="form-control btn btn-danger mt-3">Submit</button>
                </form>
                </div>    
            </div>
        </>
     );
}

export default Form;