import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="container-fluid contain">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg">
              <div className="container">
                <NavLink className="navbar-brand" href="#">
                  <span className="navbar-name"> RkProgrammer</span>
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"> </span>
                </button>
                <div className="collapse navbar-collapse links" id="navbarNav">
                  <ul className="navbar-nav ul_list">
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        activeClassName="active-link"
                        aria-current="page"
                        to="/"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/about">
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/Services">
                        Services
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/contact">
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
