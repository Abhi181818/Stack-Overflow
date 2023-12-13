import React from "react";
import "./LeftSidebar.css";
import { NavLink } from "react-router-dom";
import Globe from "../../assets/Globe.svg";
import { useTheme } from "../../ThemeContext";
const LeftSidebar = ({ slideIn, handleSlideIn }) => {
  const { isNightTheme } = useTheme();
  const themeClass = isNightTheme ? 'night-theme' : 'day-theme';

  const slideInStyle = {
    transform: "translateX(0%)",
  };

  const slideOutStyle = {
    transform: "translateX(-100%)",
  };

  return (
    <div
      className={`left-sidebar ${themeClass}`}
      style={slideIn ? slideInStyle : slideOutStyle}
    >
      <nav className={`side-nav ${themeClass}`}>
        <button onClick={() => handleSlideIn()} className="nav-btn">
          <NavLink to="/" className="side-nav-links" activeclassname="active">
            <p style={{fontWeight:"800"}}>Home</p>
          </NavLink>
        </button>
        <div className={`side-nav-div ${themeClass}`}>
          <div>
            <p>PUBLIC</p>
          </div>
          <button onClick={() => handleSlideIn()} className={`nav-btn ${themeClass}`}>
            <NavLink
              to="/Questions"
              className={`side-nav-links ${themeClass}`}
              activeclassname="active"

            >
              <img src={Globe} alt="Globe" />
              <p style={{ paddingLeft: "10px" }}> Questions </p>
            </NavLink>
          </button>
          <button onClick={() => handleSlideIn()} className="nav-btn">
            <NavLink
              to="/Tags"
              className={`side-nav-links ${themeClass}`}
              activeclassname="active"
              style={{ paddingLeft: "40px" }}
            >
              <p>Tags</p>
            </NavLink>
          </button>
          <button onClick={() => handleSlideIn()} className="nav-btn">
            <NavLink
              to="/Users"
              className={`side-nav-links ${themeClass}`}
              activeclassname="active"
              style={{ paddingLeft: "40px" }}
            >
              <p>Users</p>
            </NavLink>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default LeftSidebar;
