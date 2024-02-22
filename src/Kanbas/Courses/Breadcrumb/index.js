import { Link, useParams, useLocation } from "react-router-dom";
import "./index.css";

function Breadcrumb() {
  const { courseId } = useParams();
  const { pathname } = useLocation();
  const breadcrumbs = pathname.split("/");
  breadcrumbs.shift();
  breadcrumbs.shift();
  breadcrumbs.shift();
  const breadcrumblinks = [];
  var tempLink = "";
  for (let i = 0; i < breadcrumbs.length; i++) {
    tempLink += "/" + breadcrumbs[i];
    breadcrumblinks.push(tempLink);
  }
  return (
    <div className="">
      <nav className="wd-breadcrumb-nav" aria-label="breadcrumb">
        <ol className="breadcrumb breadcrumb-item">
          {breadcrumbs.map((link, index) => (
            <Link
              key={index}
              to={`/Kanbas/Courses${breadcrumblinks[index]}`}
              className={`list-group-item ${
                index == breadcrumbs.length - 1 && "active"
              } breadcrumb-item`}
            >
              {link}
            </Link>
          ))}
        </ol>
      </nav>
    </div>
  );
}

export default Breadcrumb;
