import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
// Import the 'add' action creator from the addReducer
import { add } from "./addReducer";
// Import the LabState type for TypeScript support
import { LabState } from "../../../store";

function AddRedux() {
    // useState hooks to manage local state for input values a and b
    const [a, setA] = useState(12);
    const [b, setB] = useState(23);
    // useSelector hook to access the 'sum' value from the Redux state
    const { sum } = useSelector((state: LabState) => state.addReducer);
    // useDispatch hook to dispatch actions
    const dispatch = useDispatch();

    return (
        <div className="w-25">
            <h1>Add Redux</h1>
            <h2>
                {a} + {b} = {sum}
            </h2>
            <input
                type="number"
                value={a}
                onChange={(e) => setA(parseInt(e.target.value))}
                className="form-control"
            />
            <input
                type="number"
                value={b}
                onChange={(e) => setB(parseInt(e.target.value))}
                className="form-control"
            />
            <button
                onClick={() => dispatch(add({ a, b }))}
                className="btn btn-primary"
            >
                Add Redux
            </button>
        </div>
    );
}
export default AddRedux;