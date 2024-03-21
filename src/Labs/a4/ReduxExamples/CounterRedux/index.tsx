import { useDispatch, useSelector } from "react-redux";
import { LabState } from "../../../store";
import { increment, decrement } from "./counterReducer";

function CounterRedux() {
    // Use the useSelector hook to access the current count value from the Redux store
    const { count } = useSelector((state: LabState) => state.counterReducer);
    // Use the useDispatch hook to get the dispatch function, which allows to dispatch actions
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Counter Redux</h2>
            <h3>{count}</h3>
            <button onClick={() => dispatch(increment())}>
                Increment
            </button>
            <button onClick={() => dispatch(decrement())}>
                Decrement
            </button>
        </div>
    );
}

export default CounterRedux;