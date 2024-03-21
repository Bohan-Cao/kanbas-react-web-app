import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
} from "./reducer";
import { KanbasState } from "../../store";
import "./index.css";
import { FaCheckCircle, FaPlus, FaEllipsisV } from "react-icons/fa";

function ModuleList() {
    const { courseId } = useParams();
    const moduleList = useSelector((state: KanbasState) =>
        state.modulesReducer.modules);
    const module = useSelector((state: KanbasState) =>
        state.modulesReducer.module);
    const dispatch = useDispatch();

    return (
        <>
            <div className="d-flex justify-content-end straight-button" style={{ marginTop: '20px' }}>
                <button className="btn btn-light btn-outline-secondary px-3">
                    Collapse All
                </button>
                <button className="btn btn-light btn-outline-secondary px-3">
                    View Progress
                </button>
                <div className="dropdown">
                    <button className="btn btn-light btn-outline-secondary dropdown-toggle d-flex align-items-center"
                        type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                        <FaCheckCircle className="text-success me-2" />
                        Publish All
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        {/* Dropdown items can be added here */}
                    </ul>
                </div>
                <button className="btn btn-danger px-3 d-flex align-items-center" onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
                    <FaPlus />
                    <span className="ms-2">Add Module</span>
                </button>
                <button className="btn btn-light btn-outline-secondary px-3">
                    <FaEllipsisV />
                </button>
            </div>
            <hr />
            <ul className="list-group">
                <li className="list-group-item">
                    <button
                        className="btn btn-success"
                        onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
                        Add
                    </button>
                    <button
                        className="btn btn-warning"
                        onClick={() => dispatch(updateModule(module))}>
                        Update
                    </button>
                    <div className="module-inputs">
                        <input
                            className="module-name-input"
                            value={module.name}
                            onChange={(e) =>
                                dispatch(setModule({ ...module, name: e.target.value }))
                            } />
                        <textarea
                            className="module-description-textarea"
                            value={module.description}
                            onChange={(e) =>
                                dispatch(setModule({ ...module, description: e.target.value }))
                            } />
                    </div>
                </li>
                {moduleList
                    .filter((module) => module.course === courseId)
                    .map((module, index) => (
                        <li key={index} className="list-group-item">
                            <button
                                className="btn btn-primary"
                                onClick={() => dispatch(setModule(module))}>
                                Edit
                            </button>
                            <button
                                className="btn btn-danger"
                                onClick={() => dispatch(deleteModule(module._id))}>
                                Delete
                            </button>
                            <h3>{module.name}</h3>
                            <p>{module.description}</p>
                        </li>
                    ))}
            </ul>
        </>
    );
}

export default ModuleList;