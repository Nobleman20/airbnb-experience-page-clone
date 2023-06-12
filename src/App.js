import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import imagea from "./images/image1.png";
import Card from "./components/Card";


function App() {
    return(
        <div>
            <Navbar />
            <Hero />
            <Card
                img={imagea}
                rating="5.0"
                reviewCount={6}
                country="USA"
                title="Life lessons with Katie Zaferes"
                price={136}
            />
        </div>
    )
}


/*
function App() {
    const date = new Date()
    const hours = date.getHours() % 12

    let timeOfDay

    if (hours < 12) {
        timeOfDay = "morning"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
    } else(
        timeOfDay = "night"
    )

    return(
        <h1>Hi! Good {timeOfDay}</h1>
    )
}
*/

export default App; 