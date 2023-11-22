import React from "react";

import "./Users.css";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import UsersList from "./UsersList";
import { useTheme } from "../../ThemeContext";

const Users = ({ slideIn, handleSlideIn }) => {
  const { isNightTheme } = useTheme();
  const themeClass = isNightTheme ? 'night-theme' : 'day-theme';


  return (
    <div className={`home-container-1 ${themeClass}`}>
      <LeftSidebar slideIn={slideIn} handleSlideIn={handleSlideIn} />
      <div className="home-container-2" style={{ marginTop: "30px" }}>
        <h1 style={{ fontWeight: "400" }}>Users</h1>
        <UsersList />
      </div>
    </div>
  );
};

export default Users;
