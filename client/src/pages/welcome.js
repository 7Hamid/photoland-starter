import React from "react";
import { userData } from "../helpers";
const Welcome = ()=>{

    const {username} = userData();
    return (
        <h2>welcome {username}</h2>
    );
}

export default Welcome;
