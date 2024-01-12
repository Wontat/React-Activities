import React from "react";
class Welcome extends React.Component {
    render() {
            let message = "I think i've done it";
        return(
            <div>
                <h1>{message}</h1>
                <p>Welcome Andrei!</p>
            </div>
    );
    }
}

export default Welcome