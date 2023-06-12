import React from "react";
import logo from "../images/airbnb.png";


function Navbar() {
    return(
        <nav>
            <img className="nav--logo" src={logo} />
        </nav>
    )
}

export default Navbar;