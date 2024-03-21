import * as db from "../../Database";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  assignments: db.assignments,
  assignment: {
    title: "New Assignment",
    course: "",
    description: "New Assignment Description",
    points: 100,
    dueDate: "",
    availableFromDate: "",
    avaliableUtilDate: "",
  },
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, action) => {
      state.assignments = [
        { ...action.payload },
        ...state.assignments,
      ];
    },
    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter(
        (assignment) => assignment._id !== action.payload
      );
    },
    updateAssignment: (state, action) => {
      state.assignments = state.assignments.map((assignment) => {
        if (assignment._id === action.payload._id) {
          return action.payload;
        } else {
          return assignment;
        }
      });
    },
    setAssignment: (state, action) => {
      state.assignment = action.payload;
    },
    setAssignmentInArray: (state, action) => {
      const max_id = Math.max.apply(Math, state.assignments.map((assignment) => window.parseInt(assignment._id)));
      if (window.parseInt(action.payload._id) > max_id) {
        state.assignment = action.payload;
      }
      else {
        state.assignments = state.assignments.map((assignment) => {
          if (assignment._id === action.payload._id) {
            return action.payload;
          } else {
            return assignment;
          }
        });
      }
    },
  },
});

export const {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment,
  setAssignmentInArray,
} = assignmentsSlice.actions;
export default assignmentsSlice.reducer;