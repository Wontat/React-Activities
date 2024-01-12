import React from "react";
import './ChoresList.module.css';

class ChoresList extends React.Component {
    render() {
        let choreone = "Clean the bedroom";
        let choretwo = "Feed the Pets";
        let chorethree = "Go to school";
        return(
        
         <div>
            <ul>  
                <h3> To Do List </h3>
            <li><p>{choreone}</p></li>
            <li><p>{choretwo}</p></li>
            <li><p>{chorethree}</p></li>
            </ul>
         </div>
           
    );
    }
}   

export default ChoresList