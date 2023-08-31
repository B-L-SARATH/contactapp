import React from "react";
import "./contact.css";
import { NavLink } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Contact from "./Contact";
function Header(props) {
  return (
    <div className="d-flex flex-row">
      <div
        className="d-flex flex-column flex-shrink-0 sidebar"
        style={{ width: "100px" }}
      >
        <NavLink
          aria-current="page"
          to="/albums"
          // style={({ isActive }) => {
          //   return {
          //     color: isActive ? "white" : "white",
          //   };
          // }}
          className="nav-link d-block p-3 link-body-emphasis text-white"
        >
          <i className="fa fa-address-book fa-2x" />
        </NavLink>
        <ul class="nav nav-pills nav-flush flex-column mb-auto text-center">
          <li class="nav-item">
            <NavLink
              aria-current="page"
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link" : "nav-link text-white"
              }
            >
              <i className="fa fa-home" />
            </NavLink>
          </li>
          <li>
            <NavLink
              aria-current="page"
              to="/contacts"
              className={({ isActive }) =>
                isActive ? "nav-link" : "nav-link text-white"
              }
            >
              <i className="fa fa-user" />
            </NavLink>
          </li>
        </ul>
      </div>
      <div style={{ width: "500px" }}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contacts" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default Header;
