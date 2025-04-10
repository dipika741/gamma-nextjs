import React from "react";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="container-topbar">
        <div className="menu-topbar-left d-none d-xl-block">
          <ul className="nav-small">
            <li>
              <a className="font-xs" href="#">
                About Us
              </a>
            </li>
            <li>
              <a className="font-xs" href="#">
                Careers
              </a>
            </li>
            <li>
              <a className="font-xs" href="#">
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Center Info */}
        <div className="info-topbar text-center d-none d-xl-block">
          <span className="font-xs color-brand-3">
            Address: Email: info@gammasciuk.com | or contact
          </span>
          <span className="font-sm-bold color-success"></span>
        </div>

        {/* Right Menu */}
        <div className="menu-topbar-right">
          <span className="font-xs color-brand-3">Need help? Call Us:</span>
          <span className="font-sm-bold color-success">+447767928598</span>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
