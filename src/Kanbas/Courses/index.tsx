import AssignmentEditor from "./Assignments/Editor";
import Assignments from "./Assignments";
import Breadcrumb from "./Breadcrumb";
import CourseNavigation from "./Navigation";
import Grades from "./Grades";
import Home from "./Home";
import Modules from "./Modules";
import { FaGlasses } from "react-icons/fa";
import { HiMiniBars3 } from "react-icons/hi2";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { courses } from "../Database";

function Courses({ courses }: { courses: any[]; }) {
    const { courseId } = useParams();
    const course = courses.find((course) => course._id === courseId);

    return (
        <div className="">
            <h4 style={{ color: "#D41B2C", display: 'flex', alignItems: 'center' }}>
                <HiMiniBars3 style={{ marginRight: '0.8rem', marginLeft: '1.5rem', marginTop: '0.5rem' }} />
                <Breadcrumb />
                <div className="ms-auto float-end">
                    <button className="student-view-btn float-end">
                        <FaGlasses style={{ marginRight: '10px' }} />
                        Student View
                    </button>
                </div>
            </h4>
            <hr />
            <span style={{ fontStyle: 'italic', marginLeft: "15px" }} className="ellipsis mb-2 d-none d-md-block">
                202430_2 Spring 2024 Semest...
            </span>
            <CourseNavigation />
            <div>
                <div
                    className="overflow-y-scroll position-fixed bottom-0 end-0"
                    style={{ left: "320px", top: "50px" }} >
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home />} />
                        <Route path="Modules" element={<Modules />} />
                        <Route path="Piazza" element={<h1>Piazza</h1>} />
                        <Route path="Zoom-Meetings" element={<h1>Zoom Meetings</h1>} />
                        <Route path="Assignments" element={<Assignments />} />
                        <Route path="Assignments/:assignmentId" element={<AssignmentEditor />} />
                        <Route path="Quizzes" element={<h1>Quizzes</h1>} />
                        <Route path="Grades" element={<Grades />} />
                        <Route path="People" element={<h1>People</h1>} />
                        <Route path="Panopto-Video" element={<h1>Panopto Video</h1>} />
                        <Route path="Discussions" element={<h1>Discussion</h1>} />
                        <Route path="Announcements" element={<h1>Announcements</h1>} />
                        <Route path="Pages" element={<h1>Pages</h1>} />
                        <Route path="Files" element={<h1>Files</h1>} />
                        <Route path="Rubrics" element={<h1>Rubrics</h1>} />
                        <Route path="Outcomes" element={<h1>Outcomes</h1>} />
                        <Route path="Collaborations" element={<h1>Collaborations</h1>} />
                        <Route path="Syllabus" element={<h1>Syllabus</h1>} />
                        <Route path="Settings" element={<h1>Settings</h1>} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default Courses;