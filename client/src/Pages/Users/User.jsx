import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../ThemeContext";
import "./Users.css";

const User = ({ user }) => {
  const { isNightTheme } = useTheme();
  const themeClass = isNightTheme ? 'night-theme' : 'day-theme';

  return (
    <Link to={`/Users/${user._id}`} style={{borderRadius:"12px",borderColor:"red",background:"gray"}} className={`user-profile-link ${themeClass}`}>
      <h3>{user.name.charAt(0).toUpperCase()}</h3>
      <h5>{user.name}</h5>
    </Link>
  );
};

export default User;
