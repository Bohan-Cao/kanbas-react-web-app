import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle, FaPlus } from "react-icons/fa";
import { GoTriangleRight, GoTriangleDown } from "react-icons/go";
import { useParams } from "react-router";

function ModuleList() {
    const { courseId } = useParams();
    const modulesList = modules.filter((module) => module.course === courseId);
    const [selectedModule, setSelectedModule] = useState(modulesList[0]);
    return (
        <div>
            <div>
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
                        </ul>
                    </div>
                    <button className="btn btn-danger px-3 d-flex align-items-center">
                        <FaPlus />
                        <span className="ms-2">Module</span>
                    </button>
                    <button className="btn btn-light btn-outline-secondary px-3">
                        <FaEllipsisV />
                    </button>
                </div>
                <hr />

                <ul className="list-group wd-modules">
                    {modulesList.map((module, index) => (
                        <li key={index}
                            className="list-group-item"
                            onClick={() => setSelectedModule(module)}>
                            <div>
                                <FaEllipsisV className="me-2" />
                                <GoTriangleRight style={{ marginRight: '5px' }} />
                                {module.name}
                                <span className="float-end">
                                    <FaCheckCircle className="text-success" />
                                    <FaPlusCircle className="ms-2" />
                                    <FaEllipsisV className="ms-2" />
                                </span>
                            </div>
                            {selectedModule._id === module._id && (
                                <ul className="list-group">
                                    {module.lessons?.map((lesson, index) => (
                                        <li className="list-group-item" key={index}>
                                            <FaEllipsisV className="me-2" />
                                            {lesson.name}
                                            <span className="float-end">
                                                <FaCheckCircle className="text-success" />
                                                <FaEllipsisV className="ms-2" />
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ModuleList;