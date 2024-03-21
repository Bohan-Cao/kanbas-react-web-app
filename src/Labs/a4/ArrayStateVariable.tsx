import React, { useState } from "react";

function ArrayStateVariable() {
    // Initialize the array state variable with numbers 1 to 5
    const [array, setArray] = useState([1, 2, 3, 4, 5]);
    // Function to add a random element to the array
    const addElement = () => {
        // Add a random number between 0 and 99 to the end of the array
        setArray([...array, Math.floor(Math.random() * 100)]);
    };
    // Function to delete an element from the array
    const deleteElement = (index: number) => {
        // Filter out the element at the given index
        setArray(array.filter((item, i) => i !== index));
    };

    return (
        <div>
            <h2>Array State Variable</h2>
            {/* Button to add a new element */}
            <button
                onClick={addElement}
                className="btn btn-success">
                Add Element
            </button>
            {/* List displaying the array elements */}
            <ul>
                {array.map((item, index) => (
                    <li key={index}>
                        {item}
                        <button
                            onClick={() => deleteElement(index)}
                            className="btn btn-danger"
                            style={{ marginLeft: "20px" }}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ArrayStateVariable;