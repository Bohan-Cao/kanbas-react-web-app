import React, { useState } from "react";

function EventObject() {
    // State to store the event object
    const [event, setEvent] = useState(null);
    // handleClick function modifies the event object and sets it to state
    const handleClick = (e: any) => {
        // Modifying the event.target to store its HTML representation
        e.target = e.target.outerHTML;
        // Removing the 'view' property from the event object
        delete e.view;
        // Updating the state with the modified event
        setEvent(e);
    };

    return (
        <div>
            <h2>Event Object</h2>
            <button id="event-button"
            // Setting onClick to the handleClick function
                onClick={(e) => handleClick(e)}
                className="btn btn-primary">
                Display Event Object
            </button>
            <pre>{JSON.stringify(event, null, 2)}</pre>
        </div>
    );
}

export default EventObject;