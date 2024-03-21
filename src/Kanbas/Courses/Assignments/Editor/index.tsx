import React, { MutableRefObject, useRef, useState } from "react";
import { FaCheckCircle, FaEllipsisV, FaPlus } from "react-icons/fa";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AssignmentState } from "../../../store";

import assignmentsReducer, {
  addAssignment,
  setAssignment,
  setAssignmentInArray,
  updateAssignment,
} from "../assignmentsReducer";

function AssignmentEditor() {
  const dispatch = useDispatch();
  const { assignmentId } = useParams();
  const assignmentLists = useSelector(
    (state: AssignmentState) => state.assignmentsReducer.assignments
  );
  const assignment_new = useSelector(
    (state: AssignmentState) => state.assignmentsReducer.assignment
  );
  const { courseId } = useParams();
  const assignmentList = assignmentLists.filter(
    (assignment) => assignment.course === courseId
  );
  let assignment = assignmentList.find(
    (assignment) => assignment._id === assignmentId
  );
  if (!assignment) {
    assignment = assignment_new;
  }
  const max_id = Math.max.apply(
    Math,
    assignmentLists.map((assignment) => window.parseInt(assignment._id))
  );
  let isObject = true;
  if (assignmentId) {
    if (window.parseInt(assignmentId) <= max_id) {
      isObject = false;
    }
  }

  const navigate = useNavigate();
  const handleSave = () => {
    addAssignmentEvent();
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  const addAssignmentEvent = () => {
    if (isObject) {
      dispatch(addAssignment({ ...assignment, course: courseId, _id: assignmentId }));
    }
    else {
      dispatch(updateAssignment({ ...assignment }))
    }
  };
  return (
    <>
      <div
        className="d-flex flew-row justify-content-end aligh-items-center straight-button"
        style={{ marginTop: "10px" }}
      >
        <span className="m-0 me-1 p-2 text-success">
          <FaCheckCircle
            className="text-success"
            style={{ marginRight: "5px" }}
          />
          Published
        </span>
        <button
          type="button"
          className="btn btn-light btn-outline-secondary px-3"
          style={{ marginTop: "10px" }}
        >
          <FaEllipsisV />
        </button>
      </div>
      <hr className="pt-2 pb-0"></hr>
      <div className="container-fluid">
        <form>
          <h2 style={{ marginTop: "15px" }}>Assignment Name</h2>
          <input
            value={assignment.title}
            className="form-control mb-2"
            id="assignment_title"
            onChange={(e) => {
              if (isObject) {
                dispatch(
                  setAssignment({ ...assignment, title: e.target.value })
                );
              } else {
                dispatch(
                  setAssignmentInArray({ ...assignment, title: e.target.value })
                );
              }
            }}
          />
          <textarea
            className="form-control"
            id="assignmentDescription"
            rows={5}
            onChange={(e) => {
              if (isObject) {
                dispatch(
                  setAssignment({ ...assignment, description: e.target.value })
                );
              } else {
                dispatch(
                  setAssignmentInArray({
                    ...assignment,
                    description: e.target.value,
                  })
                );
              }
            }}
            value={assignment.description}
          ></textarea>
          <br />
          <div className="row mb-3 g-3">
            <div className="col-3 text-end">
              <label htmlFor="points">Points</label>
            </div>
            <div className="col-7">
              <input
                type="number"
                id="points"
                className="form-control"
                value={assignment.points}
                max={100}
                min={0}
                onChange={(e) => {
                  if (isObject) {
                    dispatch(
                      setAssignment({ ...assignment, points: e.target.value })
                    );
                  } else {
                    dispatch(
                      setAssignmentInArray({
                        ...assignment,
                        points: e.target.value,
                      })
                    );
                  }
                }}
              ></input>
            </div>
          </div>
          <div className="row mb-3 g-3">
            <div className="col-3 text-end">
              <label htmlFor="assignmentGroup">Assignment Group</label>
            </div>
            <div className="col-7">
              <select className="form-select" id="assignmentGroup">
                <option value="assignment" selected>
                  ASSIGNMENTS
                </option>
              </select>
            </div>
          </div>
          <div className="row mb-3 g-3">
            <div className="col-3 text-end">
              <label htmlFor="displayGradeAs">Display Grade As</label>
            </div>
            <div className="col-7">
              <select className="form-select" id="displayGradeAs">
                <option value="percentage" selected>
                  Percentage
                </option>
              </select>
            </div>
          </div>
          <div className="row mb-3 g-3">
            <div className="col-3 text-end">
              <label htmlFor="submissionType">Submission Type</label>
            </div>
            <div className="col-7">
              <select className="form-select" id="submissionType">
                <option value="online" selected>
                  Online
                </option>
              </select>
            </div>
          </div>
          <div className="row mb-4 g-3">
            <div className="col-3"></div>
            <div className="col-7">
              <input
                className="form-check-input ms-2"
                type="checkbox"
                id="count-final"
              ></input>
              <label className="form-check-label ms-2" htmlFor="count-final">
                Do not count this assignment towards final grade
              </label>
            </div>
          </div>
          <div className="row mb-5 g-3">
            <div className="col-3 text-end">Assign</div>
            <div className="col-7 border rounded p-0">
              <div className="my-3 mx-3">
                <label htmlFor="assignTo" className="form-label fw-bold mb-3">
                  Assign to
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="assignTo"
                  placeholder="Everyone"
                ></input>
                <br />
                <label htmlFor="dueDate" className="form-label fw-bold mb-3">
                  Due
                </label>
                <input
                  type="date"
                  className="form-control mb-3"
                  value={assignment.dueDate}
                  id="dueDate"
                  onChange={(e) => {
                    if (isObject) {
                      dispatch(
                        setAssignment({
                          ...assignment,
                          dueDate: e.target.value,
                        })
                      );
                    } else {
                      dispatch(
                        setAssignmentInArray({
                          ...assignment,
                          dueDate: e.target.value,
                        })
                      );
                    }
                  }}
                ></input>
                <div className="row">
                  <div className="col">
                    <label
                      htmlFor="availableDate"
                      className="col-form-label fw-bold"
                    >
                      Avaiable from
                    </label>
                  </div>
                  <div className="col">
                    <label
                      htmlFor="untilDate"
                      className="col-form-label fw-bold"
                    >
                      Until
                    </label>
                  </div>
                </div>
                <div className="row g-2 mb-4">
                  <div className="col">
                    <input
                      type="date"
                      className="form-control"
                      value={assignment.availableFromDate}
                      onChange={(e) => {
                        if (isObject) {
                          dispatch(
                            setAssignment({
                              ...assignment,
                              availableFromDate: e.target.value,
                            })
                          );
                        } else {
                          dispatch(
                            setAssignmentInArray({
                              ...assignment,
                              availableFromDate: e.target.value,
                            })
                          );
                        }
                      }}
                      id="availableDate"
                    ></input>
                  </div>
                  <div className="col">
                    <input
                      type="date"
                      className="form-control"
                      value={assignment.avaliableUtilDate}
                      onChange={(e) => {
                        if (isObject) {
                          dispatch(
                            setAssignment({
                              ...assignment,
                              avaliableUtilDate: e.target.value,
                            })
                          );
                        } else {
                          dispatch(
                            setAssignmentInArray({
                              ...assignment,
                              avaliableUtilDate: e.target.value,
                            })
                          );
                        }
                      }}
                      id="untilDate"
                    ></input>
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="btn btn-light border w-100"
                onClick={addAssignmentEvent}
              >
                <FaPlus style={{ marginRight: "5px" }} />
                Add
              </button>
            </div>
          </div>
          <hr />
          <div className="mb-3">
            <div className="form-check d-inline p=0">
              <input
                className="form-check-input ms-2"
                type="checkbox"
                id="notifyUsers"
              ></input>
              <label className="form-check-label ps-2" htmlFor="notifyUsers">
                Notify users that this content has changed
              </label>
            </div>
            <button
              onClick={handleSave}
              className="btn btn-success ms-2 float-end"
            >
              Save
            </button>
            <button
              type="button"
              className="btn btn-danger float-end"
              onClick={() => navigate(`/Kanbas/Courses/${courseId}/Assignments`)}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AssignmentEditor;