import React from "react";
import {Link} from "react-router-dom"

export default function Wellcome(){
    return(
        <div>
            <ul>
                <li><Link to="./">Wellcome</Link></li>
                <li><Link to= "./Spaceshiplist">Spaceshiplist</Link></li>
            </ul>
        </div>
    )
}