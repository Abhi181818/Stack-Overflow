import React from "react";
import { useSelector } from "react-redux";

import User from "./User";
import "./Users.css";
import { useTheme } from "../../ThemeContext";
const UsersList = () => {
  const users = useSelector((state) => state.usersReducer);
  const { isNightTheme } = useTheme();
  const themeClass = isNightTheme ? 'night-theme' : 'day-theme';

  return (
    <div className={`user-list-container ${themeClass}`}>
      {users.map((user) => (
        <User user={user} key={user?._id}  />
      ))}
    </div>
  );
};

export default UsersList;
