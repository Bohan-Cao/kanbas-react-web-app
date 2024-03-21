import React, { useState } from "react";

function StringStateVariables() {
    // Initialize a state variable 'firstName' with the string value 'John'
    // and a function 'setFirstName' to update its value
    const [firstName, setFirstName] = useState("John");

    return (
        <div>
            <h2>String State Variables</h2>
            <p>{firstName}</p>
            <input className="form-control"
                // Set the input value to 'firstName'
                value={firstName}
                // Update 'firstName' on input change
                // 'e' is the event object and e.target.value is the current input value
                onChange={(e) => setFirstName(e.target.value)} />
        </div>
    );
}

export default StringStateVariables;