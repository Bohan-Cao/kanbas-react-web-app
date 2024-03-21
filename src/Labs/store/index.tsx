import { configureStore } from "@reduxjs/toolkit";
// Import the helloReducer, which will manage the 'hello' part of the state
import helloReducer from "../a4/ReduxExamples/HelloRedux/helloReducer";
import counterReducer from "../a4/ReduxExamples/CounterRedux/counterReducer";
import addReducer from "../a4/ReduxExamples/AddRedux/addReducer";
import todosReducer from "../a4/ReduxExamples/todos/todosReducer";

export type TodoType = {
    id: string;
    title: string;
}

// Define a TypeScript interface to describe the shape of the state
// This interface helps ensure type safety and better development experience
export interface LabState {
    helloReducer: {
        message: string;
    };
    counterReducer: {
        count: number;
    };
    addReducer: {
        sum: number;
    };
    todosReducer: {
        todos: TodoType[];
        todo: TodoType;
    };
}

// Create the Redux store using the configureStore function from Redux Toolkit
const store = configureStore({
    // Specify the reducers for the store
    // Each key represents a slice of the state, and the value is the corresponding reducer
    reducer: {
        helloReducer,
        counterReducer,
        addReducer,
        todosReducer,
    },
});

export default store;