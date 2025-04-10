import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();

  // Split the pathname into an array, removing empty segments
  const pathSegments = location.pathname
    .split("/")
    .filter((segment) => segment !== "");

  return (
    <div className="breadcrumbs section-box">
      <div className="breadcrumbs-div">
        <div className="container">
          <ul className="breadcrumb">
            <li>
              <Link className="font-xs color-gray-1000" to="/">
                Home
              </Link>
            </li>
            {pathSegments.map((segment, index) => {
              // Create the path dynamically
              const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
              // Format the segment for display (capitalize first letter)
              const formattedSegment =
                segment.charAt(0).toUpperCase() +
                segment.slice(1).replace(/-/g, " ");

              return (
                <li key={path}>
                  <Link className="font-xs color-gray-500" to={path}>
                    {formattedSegment}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumbs;
