import React from "react";
import star from "../images/Star.png"


function Card(props) {
    return(
        <div className="card--div">
            <img className="card--pix" src={props.img}/>
            <div className="card--info">
                <img className="star--pix" src={star} />
                <span> {props.rating} </span>
                <span> ({props.reviewCount})</span>
                <span> {props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><b>from ${136}</b> / Person</p>
        </div>
    )
}

export default Card;