import React, { Component } from "react";
import { Link } from "react-router-dom";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/WbSunny";

export class NavBar extends Component {
  render() {
    return (
      <div>
        <nav
          className={`navbar fixed-top navbar-expand-lg navbar-${
            this.props.mode === "light" ? "light" : "dark"
          } bg-${this.props.mode}`}
        >
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              News24x7
            </Link>
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {/* Home */}
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>

                {/* Business */}
                <li className="nav-item">
                  <Link className=" nav-link" to="/business">
                    Business
                  </Link>
                </li>

                {/* Entertainment */}
                <li className="nav-item">
                  <Link className="nav-link" to="/entertainment">
                    Entertainment
                  </Link>
                </li>

                {/* General */}
                <li className="nav-item">
                  <Link className="nav-link" to="/general">
                    General
                  </Link>
                </li>

                {/* Health */}
                <li className="nav-item">
                  <Link className="nav-link" to="/health">
                    Health
                  </Link>
                </li>

                {/* Science */}
                <li className="nav-item">
                  <Link className="nav-link" to="/science">
                    Science
                  </Link>
                </li>

                {/* Sports */}
                <li className="nav-item">
                  <Link className="nav-link" to="/sports"> 
                    Sports
                  </Link>
                </li>

                {/* Technology */}
                <li className="nav-item">
                  <Link className="nav-link" to="/technology">
                    Technology
                  </Link>
                </li>
              </ul>
              {this.props.mode === "light" ? (
                <DarkModeIcon
                  style={{ cursor: "pointer" }}
                  onClick={this.props.toggle}
                />
              ) : (
                <LightModeIcon
                  style={{ cursor: "pointer" }}
                  onClick={this.props.toggle}
                />
              )}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
