import React from "react";
import PropTypes from 'prop-types'


export default function Navbar(props) {
  // "navbar navbar-expand-lg bg-body-tertiary"
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={`${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                {props.aboutText}
              </a>
            </li>
          </ul>
        </div>
        <div class={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
          <input class="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
          <label class="form-check-label" htmlFor="flexSwitchCheckDefault">{`Enable ${props.mode==='light'?'Dark':'Light'} Mode`}</label>
        </div>
      </div>
    </nav>
  );
}
Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string,
  mode:PropTypes.string
}
// Important for debugging a complex App 
Navbar.defaultProps = {
  title: "Drop your Title Here",
  aboutText: "What is ur app about"
}