
import React from "react";

export default function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Student Management System
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" 
                href="/">
                  Display All Students
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/s-add">
                  Add Student
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/search">
                  Search Student
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/del">
                  Delete Student
                </a>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
