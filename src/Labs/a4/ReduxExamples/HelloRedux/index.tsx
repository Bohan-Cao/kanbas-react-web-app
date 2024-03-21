import { useSelector, useDispatch } from "react-redux";
import { LabState } from "../../../store";

function HelloRedux() {
    // Use the useSelector hook to access the Redux store's state
    // The state is typed as LabState, providing autocompletion and type checking
    // Extract the 'message' property from the 'helloReducer' part of the state
    const { message } = useSelector((state: LabState) => state.helloReducer);
    return (
        <div>
            <h1>Hello Redux</h1>
            <h2>{message}</h2>
        </div>
    );
}
export default HelloRedux;