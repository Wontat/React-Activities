import React from "react";

//Comparing Functions

function Greeting () {
    return(
        <h1>Hello! I am a standard function.</h1>
    );
}

const ArrowGreeting = () => ( 
    <h1>Hello! I am a arrow function.</h1>
);

export default Greeting;