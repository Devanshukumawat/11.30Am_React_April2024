import { useParams } from "react-router-dom";

function Contact() {
    const id = useParams()
     const {abc} = id 
    return ( 
        <>
            <h1>Contact</h1>
            <h2>{abc}</h2>
        </>
     );
}

export default Contact;