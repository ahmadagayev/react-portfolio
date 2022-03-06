import React, { Component } from "react";

function Navbar({page,setPage}){
   
    const changePage =(e)=>{
      setPage(page=>e.target.innerText)
    }
  return (
          <nav className="navbar navbar-expand-lg navbar-light bg-white p-0">
            <div className="container">
              <a className="navbar-brand">Your Name</a>
              <button
                className="navbar-toggler border-0 shadow-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse justify-content-end"
                id="navbarNav"
              >
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      onClick={ changePage}
                    >
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" onClick={ changePage}>
                      Projects
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" onClick={changePage}>
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        );
}
export default Navbar;