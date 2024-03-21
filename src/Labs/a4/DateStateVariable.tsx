import React, { useState } from "react";

function DateStateVariable() {
    // Initialize a state variable 'startDate' with the current date
    const [startDate, setStartDate] = useState(new Date());
    // Define a function to convert a Date object to a string formatted for HTML date inputs
    const dateObjectToHtmlDateString = (date: Date) => {
        return `${date.getFullYear()}-${date.getMonth() + 1 < 10 ? 0 : ""}${date.getMonth() + 1}-${date.getDate() + 1 < 10 ? 0 : ""}${date.getDate() + 1}`;
    };

    return (
        <div>
            <h2>Date State Variables</h2>
            {/* Display the 'startDate' state as a stringified JSON object */}
            <h3>{JSON.stringify(startDate)}</h3>
            {/* Display the 'startDate' using the custom format for HTML date inputs */}
            <h3>{dateObjectToHtmlDateString(startDate)}</h3>
            <input className="form-control"
                type="date"
                value={dateObjectToHtmlDateString(startDate)}
                onChange={(e) => setStartDate(new Date(e.target.value))} />
        </div>
    );
}

export default DateStateVariable;