import "./index.css";
import React, { useState } from "react";
import { FaCheckCircle, FaEllipsisV, FaPlus, FaPlusCircle, FaTimes, FaWindowMinimize } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { MdArrowDropDown } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import { AssignmentState } from "../../store";
import { deleteAssignment } from "./assignmentsReducer";

function Assignments() {
    const dispatch = useDispatch();
    const { courseId } = useParams();
    const assignmentLists = useSelector((state: AssignmentState) => state.assignmentsReducer.assignments);
    console.log(assignmentLists)
    const assignmentList = assignmentLists.filter(
        (assignment) => assignment.course === courseId);
        
    return (
        <>
            <div className="flex-fill">
                <div className="flex-fill">
                    <div className="flex-fill d-flex align-items-center" style={{ marginTop: '20px' }}>
                        <input className="form-control w-25 me-2" type="text" placeholder="Search for Assignment" aria-label="Search for Assignment" />
                        <button className="btn btn-light btn-outline-secondary px-3 me-2 ms-auto" style={{ color: 'black' }}>
                            <FaPlus />
                            Group
                        </button>
                        <Link to={`/Kanbas/Courses/${courseId}/Assignments/${new Date().getTime().toString()}`} style={{ textDecoration: 'none' }}>
                            <button className="btn btn-danger px-3 d-flex align-items-center me-2">
                                <FaPlus />
                                <span className="ms-2">Assignment</span>
                            </button>
                        </Link>
                        <button className="btn btn-light btn-outline-secondary px-3">
                            <FaEllipsisV />
                        </button>
                    </div>
                </div>
                <hr />
                <div>
                    <ul className="list-group wd-modules">
                        <li className="list-group-item">
                            <div>
                                <FaEllipsisV className="me-2" />
                                <MdArrowDropDown />ASSIGNMENTS
                                <span className="float-end">
                                    <span className="mx-2 p-2 bg-gray border border-secondary rounded-pill">
                                        40% of total
                                    </span>
                                    <FaCheckCircle className="text-success" />
                                    <Link to={`/Kanbas/Courses/${courseId}/Assignments/${new Date().getTime().toString()}`} style={{ 'color': 'black' }}>
                                        <FaPlusCircle className="ms-2" />
                                    </Link>
                                    <FaEllipsisV className="ms-2" />
                                </span>
                            </div>
                            <ul className="list-group">
                                {assignmentList.map((assignment) => (
                                    <li className="list-group-item d-flex justify-content-between" style={{ height: '80px' }}>
                                        <div>
                                            <FaEllipsisV className="me-2" />
                                            <GiNotebook style={{ color: 'green', marginRight: '10px' }} />
                                            <Link to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`} style={{ color: 'black' }}>
                                                {assignment.title}
                                            </Link>
                                            <div className="text-muted">
                                                <span style={{ color: '#D41B2C' }}>Multiple Modules</span> | Not available until Oct 15 at 12:00am | 100 pts
                                            </div>
                                        </div>
                                        <div>
                                            <FaCheckCircle className="text-success" />
                                            <FaTimes className="text-red-400" onClick={() => {
                                                if (window.confirm('Confirm you want to remove the assignment?')) {
                                                    dispatch(deleteAssignment(assignment._id))
                                                }
                                            }} />
                                            <FaEllipsisV className="ms-2" />

                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Assignments;