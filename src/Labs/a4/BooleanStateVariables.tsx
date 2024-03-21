import React, { useState } from "react";

function BooleanStateVariables() {
    // Initialize a state variable 'done' with a boolean value 'true'
    // and a function 'setDone' to update its value
    const [done, setDone] = useState(true);

    return (
        <div>
            <h2>Boolean State Variables</h2>
            {/* Display text based on the 'done' state's value */}
            <p>{done ? "Done" : "Not done"}</p>
            <label className="form-control">
                <input type="checkbox" checked={done}
                    onChange={() => setDone(!done)} />
                Done
            </label>
            {done && <div className="alert alert-success">
                Yay! you are done
            </div>}
            {!done && <div className="alert alert-danger">
                No! you failed
            </div>}
        </div>
    );
}

export default BooleanStateVariables;