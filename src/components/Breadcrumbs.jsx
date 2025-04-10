"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumbs = () => {
  const pathname = usePathname();

  // Split the path into segments and remove empty parts
  const pathSegments = pathname.split("/").filter((segment) => segment !== "");

  return (
    <div className="breadcrumbs section-box">
      <div className="breadcrumbs-div">
        <div className="container">
          <ul className="breadcrumb">
            <li>
              <Link className="font-xs color-gray-1000" href="/">
                Home
              </Link>
            </li>
            {pathSegments.map((segment, index) => {
              const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
              const formattedSegment =
                segment.charAt(0).toUpperCase() +
                segment.slice(1).replace(/-/g, " ");

              return (
                <li key={path}>
                  <Link className="font-xs color-gray-500" href={path}>
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
