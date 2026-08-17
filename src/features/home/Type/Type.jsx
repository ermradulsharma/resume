import React from "react";
import Typewriter from "typewriter-effect";
import data from "../../../data/localDB.json"

const Type = () => {
    const home = data.home;
    return (<Typewriter options={{ strings: home.jobPositions, autoStart: true, loop: true, deleteSpeed: 50 }} />)
}

export default Type