import React from "react";

function FeatureBox(props){
    return(
        <div className="a-box">
          <div className="a-b-img">
            <img src={props.image}/>
          </div>
          <div className="s-b-text">
            <h2>{props.title}</h2>
            <p>When you save, your browser should display "Hello, React!" instead of "Hello, world!"</p>
          </div>
        </div>
    )
}

export default FeatureBox;