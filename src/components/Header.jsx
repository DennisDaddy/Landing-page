import React from "react";
import Navbar from './Navbar';

function Header(){
    return(
        <div id="main">
          <Navbar/>
          <div className="name">
            <h1><span>Lauch Your Ap</span>With confidence and creativity</h1>
            <p className="details">Building Angular applications and further resources Building Angular applications and further resources</p>
            <a href="#" className="cv-btn">Download</a>
          </div>
        </div>
    )
}

export default Header;