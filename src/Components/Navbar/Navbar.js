import React from "react";
import { Link } from "react-router-dom";
import NavStyle from "./Navbar.module.css";
function Navbar() {
  return (
    <div className={NavStyle.navbarCont}>
      <div className={NavStyle.leftPart}>
        <ul>
          <li>
            <Link to="/homepage">Home Page</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/accprem">
              Account <span className={NavStyle.premuimText}>Premium</span>
            </Link>
          </li>
          <li>
            <Link to="/taskmanager">Task Manager</Link>
          </li>
        </ul>
      </div>
      <div className={NavStyle.rightPart}>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className={NavStyle.navbarLogo}
          >
            <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
          </svg>
          Add New Task
        </button>
      </div>
    </div>
  );
}

export default Navbar;
