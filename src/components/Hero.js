import React from "react";
import heropix from "../images/group.png";

function Hero() {
    return(
        <section className="hero">
            <img className="hero--pix" src={heropix} />
            <h1 className="hero--heading">Online Experiences</h1>
            <p className="hero--content">
                Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </section>
    )
}

export default Hero;