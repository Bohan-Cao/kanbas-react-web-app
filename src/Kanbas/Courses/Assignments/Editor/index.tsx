import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { assignments } from "../../../Database";
import { FaCheckCircle, FaEllipsisV, FaPlus } from "react-icons/fa";

function AssignmentEditor() {
    const { assignmentId } = useParams();
    const assignment = assignments.find(
        (assignment) => assignment._id === assignmentId);
    const { courseId } = useParams();
    const navigate = useNavigate();
    const handleSave = () => {
        console.log("Actually saving assignment TBD in later assignments");
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };
    return (
        <>
            <div className="d-flex flew-row justify-content-end aligh-items-center straight-button" style={{ marginTop: '10px' }}>
                <span className="m-0 me-1 p-2 text-success" >
                    <FaCheckCircle className="text-success" style={{ marginRight: '5px' }} />
                    Published
                </span>
                <button type="button" className="btn btn-light btn-outline-secondary px-3" style={{ marginTop: '10px' }}>
                    <FaEllipsisV />
                </button>
            </div>
            <hr className="pt-2 pb-0"></hr>
            <div className="container-fluid">
                <form>
                    <h2 style={{ marginTop: '15px' }}>Assignment Name</h2>
                    <input value={assignment?.title}
                        className="form-control mb-2" />
                    <textarea className="form-control" id="assignmentDescription" rows={5}>
                        This assignment describes how to install the development environment for creating and working
                        with Web applications we will be developing this semester. We will add new content every week,
                        pushing the code to GitHub source repository, and then deploying the content to a remote server
                        hosted on Netlify.
                    </textarea><br />
                    <div className="row mb-3 g-3">
                        <div className="col-3 text-end">
                            <label htmlFor="points">Points</label>
                        </div>
                        <div className="col-7">
                            <input type="number" id="points" className="form-control" value={100} max={100} min={0}></input>
                        </div>
                    </div>
                    <div className="row mb-3 g-3">
                        <div className="col-3 text-end">
                            <label htmlFor="assignmentGroup">Assignment Group</label>
                        </div>
                        <div className="col-7">
                            <select className="form-select" id="assignmentGroup">
                                <option value="assignment" selected>ASSIGNMENTS</option>
                            </select>
                        </div>
                    </div>
                    <div className="row mb-3 g-3">
                        <div className="col-3 text-end">
                            <label htmlFor="displayGradeAs">Display Grade As</label>
                        </div>
                        <div className="col-7">
                            <select className="form-select" id="displayGradeAs">
                                <option value="percentage" selected>Percentage</option>
                            </select>
                        </div>
                    </div>
                    <div className="row mb-3 g-3">
                        <div className="col-3 text-end">
                            <label htmlFor="submissionType">Submission Type</label>
                        </div>
                        <div className="col-7">
                            <select className="form-select" id="submissionType">
                                <option value="online" selected>Online</option>
                            </select>
                        </div>
                    </div>
                    <div className="row mb-4 g-3">
                        <div className="col-3"></div>
                        <div className="col-7">
                            <input className="form-check-input ms-2" type="checkbox" id="count-final"></input>
                            <label className="form-check-label ms-2" htmlFor="count-final">Do not count this assignment towards final grade</label>
                        </div>
                    </div>
                    <div className="row mb-5 g-3">
                        <div className="col-3 text-end">
                            Assign
                        </div>
                        <div className="col-7 border rounded p-0">
                            <div className="my-3 mx-3">
                                <label htmlFor="assignTo" className="form-label fw-bold mb-3">
                                    Assign to
                                </label>
                                <input type="text" className="form-control" id="assignTo" placeholder="Everyone"></input><br />
                                <label htmlFor="dueDate" className="form-label fw-bold mb-3">
                                    Due
                                </label>
                                <input type="date" className="form-control mb-3" value="2023-09-18" id="dueDate"></input>
                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="availableDate" className="col-form-label fw-bold">Avaiable from</label>
                                    </div>
                                    <div className="col">
                                        <label htmlFor="untilDate" className="col-form-label fw-bold">Until</label>
                                    </div>
                                </div>
                                <div className="row g-2 mb-4">
                                    <div className="col">
                                        <input type="date" className="form-control" value="2023-09-06" id="availableDate"></input>
                                    </div>
                                    <div className="col">
                                        <input type="date" className="form-control" value="2023-09-06" id="untilDate"></input>
                                    </div>
                                </div>
                            </div>
                            <button type="button" className="btn btn-light border w-100">
                                <FaPlus style={{ marginRight: '5px' }} />
                                Add
                            </button>
                        </div>
                    </div>
                    <hr />
                    <div className="mb-3">
                        <div className="form-check d-inline p=0">
                            <input className="form-check-input ms-2" type="checkbox" id="notifyUsers"></input>
                            <label className="form-check-label ps-2" htmlFor="notifyUsers">
                                Notify users that this content has changed
                            </label>
                        </div>
                        <button onClick={handleSave} className="btn btn-success ms-2 float-end">
                            Save
                        </button>
                        <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                            className="btn btn-danger float-end">
                            Cancel
                        </Link>
                    </div>
                </form>
            </div>
        </>
    );
}

export default AssignmentEditor;