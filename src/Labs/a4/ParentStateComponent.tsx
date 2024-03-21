import React, { useState } from "react";
import ChildStateComponent from "./ChildStateComponent";

function ParentStateComponent() {
    const [counter, setCounter] = useState(123);

    return (
        <div>
            <h2>Counter {counter}</h2>
            {/* Renders ChildStateComponent and passes counter and setCounter as props */}
            <ChildStateComponent
                counter={counter}
                setCounter={setCounter} />
        </div>
    );
}

export default ParentStateComponent;