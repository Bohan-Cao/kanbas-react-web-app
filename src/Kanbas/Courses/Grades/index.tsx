import { assignments, enrollments, grades, users } from "../../Database";
import { useParams } from "react-router-dom";
import { AiOutlineExport, AiOutlineImport } from "react-icons/ai";
import { FaGear, FaMagnifyingGlass } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";
import { CiFilter } from "react-icons/ci";
import { MdDragIndicator } from "react-icons/md";

function Grades() {
    const { courseId } = useParams();
    const as = assignments.filter((assignment) => assignment.course === courseId);
    const es = enrollments.filter((enrollment) => enrollment.course === courseId);

    return (
        <>
            <div className="flex-grow-1 min-w-0">
                <div className="d-flex justify-content-end mb-2" style={{ marginTop: "15px" }}>
                    <button className="btn btn-light btn-outline-secondary px-3" style={{ color: "black" }}>
                        <AiOutlineImport style={{ marginRight: "5px" }} />
                        Import
                    </button>
                    <button className="btn btn-light btn-outline-secondary px-3" style={{ color: "black" }}>
                        <AiOutlineExport style={{ marginRight: "5px" }} />
                        Export
                    </button>
                    <button className="btn btn-light btn-outline-secondary px-2">
                        <FaGear />
                    </button>
                </div>
                <div className="row mb-2 g-2">
                    <div className="col">
                        <label htmlFor="searchStudents" className="fw-bold">Student Names</label>
                    </div>
                    <div className="col">
                        <label htmlFor="searchAssighments" className="fw-bold">Assignment Names</label>
                    </div>
                </div>
                <div className="row mb-2 g-2">
                    <div className="col">
                        <div className="input-group">
                            <span className="input-group-text" id="searchS">
                                <FaMagnifyingGlass style={{ marginRight: "15px" }} />
                                <input type="text" className="form-control" id="searchS" placeholder="Search Students"
                                    aria-label="searchStudents" aria-describedby="searchS"></input>
                            </span>
                            <span className="input-group-text bg-light">
                                <FaChevronDown />
                            </span>
                        </div>
                    </div>
                    <div className="col">
                        <div className="input-group">
                            <span className="input-group-text" id="searchA">
                                <FaMagnifyingGlass style={{ marginRight: "15px" }} />
                                <input type="text" className="form-control" id="searchA" placeholder="Search Assignments"
                                    aria-label="searchAssignments" aria-describedby="searchA"></input>
                            </span>
                            <span className="input-group-text bg-light">
                                <FaChevronDown />
                            </span>
                        </div>
                    </div>
                </div>
                <div className="row mb-2 g-2">
                    <div className="col">
                        <button className="btn btn-light btn-outline-secondary px-2" style={{ color: "black" }}>
                            <CiFilter style={{ marginRight: "10px" }} />
                            Apply Filters
                        </button>
                    </div>
                </div>

                <div className="table-responsive">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <th>Student Name</th>
                            {as.map((assignment) => (<th>{assignment.title}</th>))}
                        </thead>
                        <tbody>
                            {es.map((enrollment) => {
                                const user = users.find((user) => user._id === enrollment.user);
                                return (
                                    <tr>
                                        <td style={{ color: "#D41B2C" }}>{user?.firstName} {user?.lastName}</td>
                                        {assignments.map((assignment) => {
                                            const grade = grades.find(
                                                (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                                            return (<td style={{ textAlign: "center" }}>{grade?.grade || ""}</td>);
                                        })}
                                    </tr>);
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Grades;