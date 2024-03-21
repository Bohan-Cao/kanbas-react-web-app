import assignmentsReducer from "../Courses/Assignments/assignmentsReducer";
import modulesReducer from "../Courses/Modules/reducer";
import { configureStore } from "@reduxjs/toolkit";

export interface KanbasState {
    modulesReducer: {
        modules: any[];
        module: any;
    };
}

export interface AssignmentState {
    assignmentsReducer: {
        assignments: any[];
        assignment: any;
    }
}
const store = configureStore({
    reducer: {
        modulesReducer,
        assignmentsReducer
    }
});

export default store;