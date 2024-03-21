// Import the createSlice function from Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";

// Define the initial state for the counter feature
const initialState = {
    count: 0,
};

// Create a slice for the counter feature
const counterSlice = createSlice({
    name: "counter", // Name of the slice
    initialState, // The initial state of the slice
    reducers: {
        // Reducer methods for handling actions
        increment: (state) => {
            state.count = state.count + 1;
        },
        decrement: (state) => {
            state.count = state.count - 1;
        },
    },
});

// Destructure and export the action creators
export const { increment, decrement } = counterSlice.actions;
// Export the reducer function for the counter slice
export default counterSlice.reducer;