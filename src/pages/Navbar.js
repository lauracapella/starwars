import {Link} from "react-router-dom"

export default function Navbar(){
    return(
        <div>
            <ul>
                <li><Link to="./">Wellcome</Link></li>
                <li><Link to= "./Spaceshiplist">Spaceshiplist</Link></li> 

            </ul>
            <ul>
                <li><Link to="./Login">Login</Link></li>
                <li><Link to= "./Registration">SignUp</Link></li> 
                           
            </ul>

        </div>
    )
}