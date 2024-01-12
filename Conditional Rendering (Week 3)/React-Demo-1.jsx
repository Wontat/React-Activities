import React from "react";

//Function with an arrow function

function Shinybutton(){
    const handleClick = () => {
        alert("Why did you click me? Dumb!");
    }
    return(
        <button onClick={handleClick}>
            Click This Button!
        </button>
    );
}

export default Shinybutton;