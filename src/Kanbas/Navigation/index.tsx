import { Link, useLocation } from "react-router-dom";
import "./index.css";
import {
    FaTachometerAlt,
    FaRegUserCircle,
    FaBook,
    FaRegCalendarAlt,
    FaInbox,
    FaHistory,
    FaUsb,
    FaArrowCircleRight,
    FaQuestionCircle,
} from "react-icons/fa";

function KanbasNavigation() {
    const links = [
        { label: "Account", icon: <FaRegUserCircle className="fs-1 icon-red" />, path: "/Kanbas/Account" },
        { label: "Dashboard", icon: <FaTachometerAlt className="fs-1 icon-red" />, path: "/Kanbas/Dashboard" },
        { label: "Courses", icon: <FaBook className="fs-1 icon-red" />, path: "/Kanbas/Courses" },
        { label: "Calendar", icon: <FaRegCalendarAlt className="fs-1 icon-red" />, path: "/Kanbas/Calendar" },
        { label: "Inbox", icon: <FaInbox className="fs-1 icon-red" />, path: "/Kanbas/Inbox" },
        { label: "History", icon: <FaHistory className="fs-1 icon-red" />, path: "/Kanbas/History" },
        { label: "Studio", icon: <FaUsb className="fs-1 icon-red" />, path: "/Kanbas/Studio" },
        { label: "Commons", icon: <FaArrowCircleRight className="fs-1 icon-red" />, path: "/Kanbas/Commons" },
        { label: "Help", icon: <FaQuestionCircle className="fs-1 icon-red" />, path: "/Kanbas/Help" },
    ];
    const { pathname } = useLocation();

    return (
        <ul className="wd-kanbas-navigation wd-kanvas-navigation li">
            <li>
                <Link to="http://northeastern.edu">
                    <img src="/images/logo.jpg" alt="Logo" />
                </Link>
            </li>
            {links.map((link, index) => (
                <li key={index} className={pathname.includes(link.path) ? "wd-active" : ""}>
                    <Link to={link.path}>
                        {link.icon} {link.label}
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default KanbasNavigation;