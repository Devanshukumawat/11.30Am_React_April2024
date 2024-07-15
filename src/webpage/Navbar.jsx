import {Link} from "react-router-dom"

function Navbar() {
    return ( 
        <>
            <h1>Navbar</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/todo">Todo</Link></li>
                <li><Link to={"/contact"}>Contact</Link></li>
            </ul>
        </>
     );
}

export default Navbar;